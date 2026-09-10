// payment-webhook — 포트원(PortOne V2) 결제 이벤트 수신 → DB에 "확실히" 기록.
//
// 왜 필요한가 (운영 안전망):
//   기존엔 클라이언트가 결제창에서 돌아와 payment-confirm 을 호출해야만 기록됐다.
//   사용자가 결제 직후 브라우저를 닫거나 리다이렉트가 실패하면 → 돈은 빠졌는데 우리 DB엔
//   기록 0 (orphan) → 전화번호로도 못 찾고 PG 콘솔과 매칭 불가. 이 webhook 이 그 구멍을 막는다.
//
// 동작:
//   1) 포트원이 보낸 webhook 의 paymentId 추출
//   2) 포트원 단건조회 API 로 결제를 직접 재조회(권위 검증) — 위조 webhook 방어
//   3) payments 테이블에 멱등 기록 (paid/failed/refunded + phone 매칭)
//   4) PAID 인데 아직 활성화 안 된 orphan 이면 구독 생성/연장(+보너스)까지 복구
//
// 멱등성:
//   - payments.payment_id UNIQUE 를 락으로 사용. 이미 기록됐으면 활성화 재실행 안 함.
//   - 구독 연장은 subscribers.last_payment_id !== paymentId 일 때만 (payment-confirm 과 동일 가드).
//
// 보안: Supabase 게이트웨이 통과 위해 verify_jwt=false (config.toml). 진짜 검증은 "포트원 API
//   재조회 + storeId 일치"로 수행 — 임의 POST 로는 가짜 결제를 만들 수 없다.
//
// 포트원 콘솔에 이 함수 URL 을 Webhook 으로 등록해야 발화됨:
//   https://<project-ref>.supabase.co/functions/v1/payment-webhook
//
// 2026-09-09: hombri 가 같은 PortOne store 를 공유하면서(store 당 webhook URL 1개만 지원)
//   이 webhook 이 hombri 결제 이벤트도 함께 받게 됨 — paymentId 접두사로 hombri 자신의
//   payment-webhook 으로 전달(forward)만 하고 반환. 아래 "hombri" 분기 참고.

import { createClient } from "jsr:@supabase/supabase-js@2";
import { pickBonusEvent, recordRedemption } from "../_shared/promo.ts";
import { sendPaymentAlimtalk } from "../_shared/alimtalk.ts";

const PORTONE_API = "https://api.portone.io";
const STORE_ID = "store-94ded677-c4c2-45a7-adc2-eb735d601a52";
const PRICE_PLANS: Record<string, { months: number; amount: number; productName: string }> = {
  "1m":  { months: 1,  amount: 2900,  productName: "1개월 구독" },
  "6m":  { months: 6,  amount: 13800, productName: "6개월 구독" },
  "12m": { months: 12, amount: 22800, productName: "12개월 구독" },
};
const DEFAULT_PLAN = "1m";

function ok(body: unknown = { ok: true }) {
  return new Response(JSON.stringify(body), { status: 200, headers: { "Content-Type": "application/json" } });
}
function fail(status: number, msg: string) {
  // 5xx 면 포트원이 재시도 → 일시 오류엔 5xx, 무시할 건 200.
  return new Response(JSON.stringify({ ok: false, error: msg }), { status, headers: { "Content-Type": "application/json" } });
}

function parsePhone(payment: any): string | null {
  // customData(JSON 문자열 또는 객체) → phone, 없으면 customer.phoneNumber
  let cd = payment?.customData;
  if (typeof cd === "string") { try { cd = JSON.parse(cd); } catch { cd = null; } }
  const raw = cd?.phone ?? payment?.customer?.phoneNumber ?? null;
  if (!raw) return null;
  const cleaned = String(raw).replace(/[^0-9]/g, "");
  return /^01[016789]\d{7,8}$/.test(cleaned) ? cleaned : null;
}
function parsePlan(payment: any): string {
  let cd = payment?.customData;
  if (typeof cd === "string") { try { cd = JSON.parse(cd); } catch { cd = null; } }
  const p = cd?.plan;
  if (p && PRICE_PLANS[p]) return p;
  // customData 없는 결제는 금액으로 역추정 (회수 시 개월 수 정확도)
  const amt = payment?.amount?.total ?? 0;
  const byAmt = Object.keys(PRICE_PLANS).find((k) => PRICE_PLANS[k].amount === amt);
  return byAmt ?? DEFAULT_PLAN;
}
function addMonths(d: Date, m: number) { const r = new Date(d); r.setMonth(r.getMonth() + m); return r; }
function addDays(d: Date, days: number) { if (!days) return d; const r = new Date(d); r.setDate(r.getDate() + days); return r; }

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return ok();
  if (req.method !== "POST") return fail(405, "method");
  try {
    const apiSecret = Deno.env.get("PORTONE_API_SECRET");
    if (!apiSecret) return fail(500, "server misconfigured");

    // 1) paymentId 추출 (PortOne V2 webhook: { type, data:{ paymentId } })
    let payload: any = {};
    try { payload = await req.json(); } catch { /* ignore */ }
    const paymentId = payload?.data?.paymentId ?? payload?.paymentId ?? payload?.payment_id ?? null;
    if (!paymentId) return ok({ ok: true, skipped: "no paymentId" }); // 핑/검증 요청 등은 무시

    // hombri 는 briefick 과 같은 PortOne store(store-94ded677-...) 를 공유하고, PortOne 콘솔은
    // store 당 webhook URL 을 1개만 지원한다 (2026-09-09 콘솔 확인 — 추가 등록 UI 없음).
    // 그래서 이미 등록된 이 webhook 이 hombri 결제 이벤트도 받는다 — paymentId 접두사('hombri...',
    // index.html 의 paymentId='hombri'+Date.now()+... 생성 규칙)로 판별해 hombri 자신의
    // payment-webhook 으로 그대로 전달만 하고 briefick DB 는 건드리지 않는다.
    // 진짜 검증(포트원 재조회)은 전달받은 쪽(hombri payment-webhook)이 동일하게 다시 수행하므로
    // 여기서 재검증 없이 전달해도 위조 방어는 그대로 유지된다.
    if (String(paymentId).startsWith("hombri")) {
      const fwd = await fetch("https://nphedxxpwbizfipfidgo.supabase.co/functions/v1/payment-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((e) => { console.error("[payment-webhook] forward to hombri failed:", e); return null; });
      if (!fwd) return fail(502, "forward to hombri webhook failed");
      const text = await fwd.text().catch(() => "");
      return new Response(text || JSON.stringify({ ok: fwd.ok }), {
        status: fwd.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 2) 포트원 단건조회 (권위 검증)
    const pRes = await fetch(`${PORTONE_API}/payments/${encodeURIComponent(paymentId)}`, {
      headers: { Authorization: `PortOne ${apiSecret}` },
    });
    // 404 = 그 결제가 존재 안 함(포트원 호출 테스트의 가짜 id 등) → 재시도 의미 없으니 200 스킵.
    if (pRes.status === 404) return ok({ ok: true, skipped: "payment not found (test ping?)" });
    if (!pRes.ok) return fail(502, `portone fetch ${pRes.status}`); // 5xx/네트워크 = 일시 오류 → 재시도 유도
    const payment = await pRes.json();

    // storeId 불일치 = 우리 결제 아님 → 무시
    const pStore = payment?.storeId ?? payment?.channel?.storeId ?? null;
    if (pStore && pStore !== STORE_ID) return ok({ ok: true, skipped: "store mismatch" });

    const status: string = payment?.status ?? "UNKNOWN";
    const phone = parsePhone(payment);
    const amount = payment?.amount?.total ?? 0;
    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("BRIEFICK_SUPABASE_SECRET_KEY")!);

    // 상태 매핑 (payments.status check: paid/failed/refunded)
    const mapped = status === "PAID" ? "paid"
      : (status === "CANCELLED" || status === "PARTIAL_CANCELLED") ? "refunded"
      : (status === "FAILED") ? "failed"
      : null;
    if (!mapped) return ok({ ok: true, skipped: `status ${status}` }); // READY/PENDING 등은 기록 안 함

    // 구독자(phone) 매칭
    let subscriberId: string | null = null;
    let existing: any = null;
    if (phone) {
      const { data } = await supabase.from("subscribers")
        .select("id, status, paid_until, last_payment_id").eq("phone", phone).maybeSingle();
      existing = data ?? null;
      subscriberId = existing?.id ?? null;
    }

    // 이전 기록 상태 (전체취소 자동 회수 멱등용 — 이미 refunded 면 재회수 안 함)
    const { data: prevPay } = await supabase.from("payments").select("status").eq("payment_id", paymentId).maybeSingle();
    const prevStatus = prevPay?.status ?? null;
    const nowIso = new Date().toISOString();

    // 3) payments 기록.
    //   PAID 는 payment-confirm(클라이언트)이 결제 직후 이 webhook 과 거의 동시에
    //   같은 paymentId 로 들어올 수 있어(레이스) upsert(병합)로는 "내가 처음 처리하는지"를
    //   판별할 수 없었다 — 둘 다 활성화+알림톡을 각자 진행해 카톡이 두 번 나가던 실사고
    //   원인. payment_id UNIQUE 를 락으로 쓰는 순수 INSERT 로 바꿔, 성공(경합 없음)한
    //   쪽만 구독 활성화·알림톡을 진행하고 진 쪽(payment-confirm)은 자기 쪽에서
    //   already_processed 로 조용히 스킵한다. failed/refunded 는 이 레이스가 없어 upsert 유지.
    let claimed = false;
    if (mapped === "paid") {
      const { error: claimErr } = await supabase.from("payments").insert({
        subscriber_id: subscriberId,
        payment_id: paymentId,
        provider: "portone",
        amount,
        currency: payment?.currency ?? "KRW",
        status: mapped,
        order_name: payment?.orderName ?? null,
        paid_at: payment?.paidAt ?? nowIso,
        raw_response: payment,
      });
      if (claimErr && claimErr.code !== "23505") throw claimErr;
      claimed = !claimErr;
    } else {
      const { error: insErr } = await supabase.from("payments")
        .upsert({
          subscriber_id: subscriberId,
          payment_id: paymentId,
          provider: "portone",
          amount,
          currency: payment?.currency ?? "KRW",
          status: mapped,
          order_name: payment?.orderName ?? null,
          paid_at: payment?.paidAt ?? nowIso,
          raw_response: payment,
        }, { onConflict: "payment_id", ignoreDuplicates: false });
      if (insErr) throw insErr;
    }

    // 4) PAID orphan 복구: payments 클레임에 성공한 경우에만(=원자적으로 내가 처음) 진행.
    //    alreadyApplied 는 추가 안전망(구독이 이미 이 paymentId 로 활성화돼 있으면 재실행 안 함).
    let recovered = false;
    if (claimed && phone) {
      const alreadyApplied = existing?.last_payment_id === paymentId;
      const expected = PRICE_PLANS[parsePlan(payment)]?.amount ?? 0;
      if (!alreadyApplied && amount >= expected) {
        const plan = PRICE_PLANS[parsePlan(payment)];
        const nowMs = Date.now();
        const userCtx = { hadPriorPayment: !!existing?.last_payment_id, isReturning: !!existing && existing.status !== "active" };
        const bonusEvent = await pickBonusEvent(supabase, phone, userCtx);
        const bonusDays = bonusEvent?.bonus_days ?? 0;
        const bonusMonths = bonusEvent?.bonus_months ?? 0;
        const base = existing?.paid_until && new Date(existing.paid_until).getTime() > nowMs
          ? new Date(existing.paid_until) : new Date(nowMs);
        const newPaidUntil = addDays(addMonths(base, plan.months + bonusMonths), bonusDays);
        if (existing) {
          await supabase.from("subscribers").update({
            status: "active", paid_until: newPaidUntil.toISOString(), last_payment_id: paymentId,
            payment_provider: "portone", expires_at: null,
          }).eq("id", existing.id);
          subscriberId = existing.id;
        } else {
          const { data: ins } = await supabase.from("subscribers").insert({
            phone, status: "active", paid_until: newPaidUntil.toISOString(),
            last_payment_id: paymentId, payment_provider: "portone",
            metadata: { ad_consent_at: nowIso, source: "webhook-recovered" },
          }).select("id").single();
          subscriberId = ins?.id ?? null;
        }
        if (bonusEvent && subscriberId) {
          await recordRedemption(supabase, bonusEvent, { subscriberId, phone, paymentId });
        }
        // payments.subscriber_id 보정
        if (subscriberId) await supabase.from("payments").update({ subscriber_id: subscriberId }).eq("payment_id", paymentId);
        // 결제 완료 알림톡 — payment-confirm 이 멱등 가드로 스킵하므로 여기서 발송(누락 방지) + 로그
        const expiryDate = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul" }).format(newPaidUntil);
        const alim = await sendPaymentAlimtalk({ phone, expiryDate, productName: plan.productName });
        if (subscriberId) {
          await supabase.from("send_logs").insert({
            subscriber_id: subscriberId, phone,
            message: `결제 완료 알림 (${plan.productName}, 만료일 ${expiryDate}) [webhook]`,
            char_count: 0, status: alim.ok ? "success" : "fail",
            message_type: "alimtalk", template_code: "payment_complete", provider: "aligo",
            provider_code: alim.mid ?? null, provider_message: alim.ok ? "ok" : (alim.error ?? ""), provider_msg_id: alim.mid ?? null,
          });
        }
        if (!alim.ok) console.error("[payment-webhook] alimtalk failed:", alim.error);
        recovered = true;
        console.warn(`[payment-webhook] orphan 복구: ${phone} ${paymentId} (+${plan.months + bonusMonths}m +${bonusDays}d)`);
      }
    }

    // 5) 전체 취소(CANCELLED) 자동 회수 — 그 결제로 늘어난 개월+보너스만큼 만료일 되돌림.
    //    부분취소(PARTIAL_CANCELLED)는 비례 계산 복잡 → 기록만(회수 안 함).
    //    멱등: 이미 refunded 였으면(webhook 재시도) 회수 재실행 안 함.
    let revoked = false;
    if (status === "CANCELLED" && prevStatus !== "refunded" && existing?.paid_until) {
      const plan = PRICE_PLANS[parsePlan(payment)];
      // 이 결제로 적용된 보너스(일+월) — 만료일에서 함께 차감. 월은 redemption→event 로 역산.
      // ⚠ redemption 기록은 일부러 삭제하지 않음: "번호당 1회"를 소진 상태로 유지해
      //   취소 후 재결제 시 보너스 재취득(어뷰징)을 막는다. 정당한 재허용은 운영자가 수동(SQL).
      const { data: reds } = await supabase.from("promo_redemptions").select("event_id, bonus_days_applied").eq("payment_id", paymentId);
      const bonusDays = (reds ?? []).reduce((s: number, r: any) => s + (r.bonus_days_applied ?? 0), 0);
      let bonusMonths = 0;
      const evIds = (reds ?? []).map((r: any) => r.event_id).filter(Boolean);
      if (evIds.length) {
        const { data: evs } = await supabase.from("promo_events").select("bonus_months").in("id", evIds);
        bonusMonths = (evs ?? []).reduce((s: number, e: any) => s + (e.bonus_months ?? 0), 0);
      }
      const pu = new Date(existing.paid_until);
      pu.setMonth(pu.getMonth() - plan.months - bonusMonths);
      if (bonusDays) pu.setDate(pu.getDate() - bonusDays);
      const expired = pu.getTime() <= Date.now();
      await supabase.from("subscribers").update({
        paid_until: pu.toISOString(),
        status: expired ? "expired" : existing.status,
      }).eq("id", existing.id);
      revoked = true;
      console.warn(`[payment-webhook] 전체취소 회수: ${phone} ${paymentId} -${plan.months + bonusMonths}m -${bonusDays}d -> ${pu.toISOString()}${expired ? " (expired)" : ""}`);
    }

    return ok({ ok: true, status: mapped, recovered, revoked, phone_matched: !!phone });
  } catch (err) {
    console.error("[payment-webhook]", err);
    return fail(500, err instanceof Error ? err.message : String(err));
  }
});
