// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
  {
    "date": "2026-10-02",
    "made": "2026-10-02 07:30 KST",
    "predictions": [
      {
        "label": "HPSP",
        "ticker": "403870",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 69,000원 +8.3% 폭등 마감·마이크론 FY26 Q4 HBM 매출 20억달러 record 재확인·고압수소어닐링 세계 유일 지위·HBM4 후공정 CAPEX 확대 서사가 모멘텀 지속 축, 소부장 매수 회귀·리노공업·대덕전자 동반 랠리 지속이 sector rotation 상단 축, 다만 급등 후 단기 차익실현·외국인 분기말 수급 일부 되돌림이 카운터",
        "result": "miss",
        "actual": -3.9
      },
      {
        "label": "CEG",
        "ticker": "CEG",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 265.14달러 +4.4% 강세 마감·AI 데이터센터 전력 수요 재점화·MSFT 쓰리마일 재가동 서사·4분기 추가 PPA 발표 기대가 상단 축, VST·TLN 전력·원전 동반 강세·AI 인프라 CAPEX 서사 지속이 모멘텀 상단 축, 다만 미 10년물 4.6% 안정 국면에서 유틸리티 밸류 부담 재점화·금리 하방 둔화 시 성장 둔화 서사 카운터",
        "result": "hit",
        "actual": 1.9
      },
      {
        "label": "HD",
        "ticker": "HD",
        "market": "US",
        "direction": "down",
        "rationale": "직전 종가 279.05달러 -1.9% 조정 마감·미 주택 수요 둔화 관측 재점화·소비재 매수세 이탈·LOW 동반 조정이 하방 축, 미 10년물 4.6% 안정 국면에서 모기지 금리 7%대 유지·소비 심리 지표 둔화 서사가 sector rotation 카운터 축, 다만 저점 매수 유입·4분기 홈 임프루브먼트 계절 수요 반등 서사 카운터 잔존",
        "result": "hit",
        "actual": -0.7
      }
    ]
  },
  {
    "date": "2026-10-01",
    "made": "2026-10-01 07:30 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,776,000원 +0.6% 소폭 반등·오늘 새벽 미 대형 메모리 컨센 상회·HBM 매출 20억달러 record 첫 돌파·6개 고객 확장 재확인이 HBM4 밸류체인 서사 지지 반등 축, HBM4 2Q26 shipping·잔여 이행의무 1,000억달러 서사가 monetization 상단 축, 다만 어제 대장주 삼성전자 -1.5% 조정 여진 확산·10y 4.6% 채권 헤드윈드가 카운터",
        "result": "miss",
        "actual": -1
      },
      {
        "label": "AVGO",
        "ticker": "AVGO",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 358달러 +0.8% 강세 마감·미 대형 메모리 FY26 Q4 실적 컨센 상회 여파에 반도체 밸류체인 매수 회귀 지속·NVIDIA Vera Rubin·HBM4 서사 지지가 상단 축, 하이퍼스케일러 CAPEX 확대 사이클·커스텀 실리콘 리드가 monetization 상단 축, 다만 어닝 시즌 앞두고 밸류 부담 리세트 카운터·PCE 예상 초과 시 성장주 조정 카운터",
        "result": "hit",
        "actual": 0.5
      },
      {
        "label": "LG생활건강",
        "ticker": "051900",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 269,000원 -3.9% 급락·3분기 중국 면세 채널 매출 부진 관측·달러 강세 원가 헤드윈드 확산이 하방 축, 방어주 조정 국면·화장품·뷰티 순환매 이탈이 sector rotation 카운터 축, 다만 급락 후 저점 매수 유입·10월 하반기 3Q 실적 발표 앞두고 반등 카운터 잔존",
        "result": "miss",
        "actual": 0.9
      }
    ]
  },
  {
    "date": "2026-09-30",
    "made": "2026-09-30 07:30 KST",
    "predictions": [
      {
        "label": "한미반도체",
        "ticker": "042700",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 종가 252,000원 +7.5% 이틀째 급등·HBM 후공정 밸류체인 순환매 심화·오늘 밤 마이크론 실적 컨센 상회 관측이 반등 축, TC본더 점유 우위·잔여 이행의무 서사 지지 상단 축, 다만 급등 후 차익실현·PCE·마이크론 실적 결과 컨센 하회 시 리세트 카운터 잔존",
        "result": "hit",
        "actual": 7.5
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 1,071달러 +1.6%·오늘 새벽 FY26 4Q 실적 매출 500억달러·GM 86% 가이던스 대기·HBM 매출 100억달러 첫 돌파 관측이 상단 축, 잔여 이행의무 1,000억달러·HBM 2026 완판 서사가 monetization 상단 축, 다만 어닝 컨센 하회 시 급락 카운터·10y 4.6% 성장주 리세트 카운터 잔존",
        "result": "hit",
        "actual": 0.6
      },
      {
        "label": "LG화학",
        "ticker": "051910",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 종가 250,000원 -4.8% 급락 반전·2차전지 순환매 반작용 확대·삼성SDI -4.1%·LG엔솔 -3.2% 동반 조정이 하방 축, 리튬·니켈 재고 사이클 반등 지연·PCE 대기 위험 자산 이탈이 카운터 축, 다만 급락 후 저점 매수 유입·첨단소재 축은 유지 반등 카운터 잔존",
        "result": "hit",
        "actual": -4.8
      }
    ]
  },
  {
    "date": "2026-09-29",
    "made": "2026-09-29 07:35 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "재개장 첫날 270,000원 종가 -5.40%·외국인 1.4조원 매도 폭탄 여진 후 배당 기회 앞두고 저점 매수 유입 관측이 반등 축, 10/1 마이크론 실적 컨센 상회 시 HBM4 우위 재확산 카타리스트 축, 미 10년물 5.24% 최고 채권 헤드윈드 잔존이 카운터",
        "result": "hit",
        "actual": 0.7
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 231.22달러 +2.70%·1,500억달러 자사주 매입 발표·시장 전반 -0.77% 하락에도 대장주 프리미엄 지지가 반등 축, Vera Rubin 로드맵·FCF 4,000억달러 관측이 밸류 상단 축, 미 10년물 5.24% 최고 채권 변동성이 성장주 밸류 리세트 카운터",
        "result": "hit",
        "actual": 1.7
      },
      {
        "label": "HLB",
        "ticker": "028300",
        "market": "KR",
        "direction": "down",
        "rationale": "39,700원 상한가 종가 +30%·담관암 신약 리픽투 FDA 승인 여진 후 익일 매물 소화 국면 관측이 조정 축, HLB그룹주 6개 동반 상한가 후속 차익실현 압박이 되돌림 카운터 축, 다만 파이프라인 재평가 서사가 하방 저지 반등 카운터 잔존",
        "result": "miss",
        "actual": 8.9
      }
    ]
  },
  {
    "date": "2026-09-28",
    "made": "2026-09-25 07:35 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "추석 4일 휴장 진입 종가 285,500원 +3.30%·SK하이닉스 F-1 수정본 SEC 접수 뉴욕 ADR 상장 절차 진입이 후방 프리미엄 축, HBM4 12H 스택당 550달러 프리미엄 유지·글로벌 HBM 55% 점유율 서사가 재개장 상대강도 지지, 마이크론 9/30 실적 앞두고 매출 500억달러 가이던스 대기가 반도체 신호탄이나 미 10년물 5.11% 채권 발작 카운터 잔존",
        "result": "hit",
        "actual": 3.3
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 223달러 -1.10%·나스닥 -0.78% 동조 되돌림 후 기술적 반등 시나리오·OpenAI 1,000억달러 프레임워크 협상 지속·Vera Rubin 하반기 첫 GW 배치 서사가 monetization 상단 축, 700억달러 AI 생태계 투자 재확인이 프리미엄 지지, 다만 10년물 5.11% 유지가 성장주 forward P/E 재점검 카운터 잔존",
        "result": "hit",
        "actual": 0.2
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 1,054.76달러 -1.60%·9/30 회계 4분기 실적 앞두고 매출 500억달러 상단 가이던스 대기가 카타리스트 축, HBM4 12H 스택당 550달러 프리미엄·1γ DRAM 램프업이 monetization 상단 축, AMD 앤트로픽 MI450 2기가와트 계약 2027 상반기 배치 후방 수요 축, 다만 10년물 5.11% 성장주 리레이팅 카운터 잔존",
        "result": "hit",
        "actual": 0.2
      }
    ]
  },
  {
    "date": "2026-09-24",
    "made": "2026-09-24 07:35 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 285,500원 +3.25% 4일 연속 상승 마감·Meta 뮤즈 AI 에이전트 흥행발 HBM·서버 메모리 수요 재점화 서사가 monetization 상단 확장 축, HBM4 양산·글로벌 HBM 90% 지배력 유지가 프리미엄 지지 축·추석 4일 휴장(9/24~9/27) 후 재개장 시 반도체 대장주 상대 강도 재확인 시나리오, 미 국채금리 5.11% 급등 카운터에도 AI 에이전트 서버 CAPEX 상향 서사가 후방 지지",
        "result": "hit",
        "actual": 3.3
      },
      {
        "label": "두산에너빌리티",
        "ticker": "034020",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 81,700원 -5.5% 급락 마감·원전 급등 후 차익실현 흐름 소화 후 mean reversion 반등 시나리오·체코·미국 SMR 로드맵·웨스팅하우스 협력 서사 유지가 카테고리 후방 지지 축, 원전·SMR 사이클 monetization 상단 재확장 국면·CAPEX 상향 흐름이 후방 지지, 다만 미 10년물 5.11% 채권 발작에 밸류 카운터 흐름 잔존",
        "result": "miss",
        "actual": -5.5
      },
      {
        "label": "IONQ",
        "ticker": "IONQ",
        "market": "US",
        "direction": "down",
        "rationale": "직전 종가 45.08달러 +10.60% 급등 후 mean reversion 시나리오·NVIDIA 리서치센터 협력·408 논리큐빗 실시간 오류정정 첫 시연 서사는 유지하되 단일 세션 폭등 후 차익실현 압박 예상, 미 10년물 5.11% 2007년 이후 최고 도달·나스닥 -1.4% 조정 국면에서 성장주 리레이팅 카운터가 상단 압박 축, 정부 조달 파이프 확산 카타리스트는 카테고리 후방 지지 유지",
        "result": "hit",
        "actual": -0.5
      }
    ]
  },
  {
    "date": "2026-09-23",
    "made": "2026-09-23 07:35 KST",
    "predictions": [
      {
        "label": "대덕전자",
        "ticker": "353200",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 112,300원 +10.2% 급등 마감·PCB 기판 랠리 주도 후 mean reversion 시나리오·단일 세션 폭등 후 차익 실현 매물 압박 예상, 반도체 대장주 SK하이닉스 -1.5% 조정 국면에서 순환매 자금 이탈 축·개인 차익 실현 압박이 하방 카운터 축, 다만 AI 서버 서브스트레이트 수요 재확산 서사·애플 아이폰17 사이클 진입 흐름이 카테고리 후방 지지",
        "result": "miss",
        "actual": 10.2
      },
      {
        "label": "엔씨소프트",
        "ticker": "036570",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 223,000원 +8% 급등 마감·게임 카테고리 순환매 유입 확산·모바일 신작 매출 상단 재확장 서사가 monetization 상단 확장 축, 아이온2 신작 파이프·리니지 IP 글로벌 지배력이 매출 재점화 축·반도체 → 게임 sector rotation 확산 국면에서 상대 강도 재확인 시나리오, 원화 강세 흐름이 해외 매출 카테고리 후방 지지 축",
        "result": "hit",
        "actual": 8
      },
      {
        "label": "META",
        "ticker": "META",
        "market": "US",
        "direction": "up",
        "rationale": "뮤즈 AI 에이전트 미국 iOS 무료 앱 1위·ChatGPT 제친 다운로드 순위 급등이 monetization 상단 확장 축, 이메일·캘린더·결제·헬스 통합 개인 AI 에이전트 서사·9월 8일 출시 후 2주 만에 시장 지배력 확보가 프리미엄 지지 축, 매그니피센트 세븐 동반 강세 국면에서 상대 강도 재확인 시나리오·라마 4 기반 아키텍처 확장이 매출 재점화 후방 지지 축",
        "result": "hit",
        "actual": 0.5
      }
    ]
  }
];
