// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
  {
    "date": "2026-11-25",
    "made": "2026-11-25 07:15 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 189,400원 +6.7% 폭등 마감 뒤 미국 반도체 야간 급락 여진 - NVDA -7.3%·MU -10.5%·AMD -9.9% 조정 전파·외국인 반도체 바스켓 차익실현 매물 유입 가능성이 downside 축.",
        "result": null,
        "actual": null
      },
      {
        "label": "현대자동차",
        "ticker": "005380",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 275,000원 +11.1% 폭등 마감 뒤 자동차 바스켓 외국인 순매수 복귀 모멘텀 지속 - 반도체 조정 내 비반도체 섹터 로테이션·금통위 D-1 유동성 기대·북미 하이브리드 판매가 upside 축.",
        "result": null,
        "actual": null
      },
      {
        "label": "LLY",
        "ticker": "LLY",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 1,411.97달러 +3.5% 상승 - 반도체 조정 내 방어주 로테이션 복원·릴리·오젬픽 매출 가이던스·11/25 PCE 발표 소프트 시 안전자산 선호가 upside 축.",
        "result": null,
        "actual": null
      }
    ]
  },
  {
    "date": "2026-11-24",
    "made": "2026-11-24 07:35 KST",
    "predictions": [
      {
        "label": "삼성SDS",
        "ticker": "018260",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 177,200원 -15.4% 폭락 뒤 기술적 반등 기대 - 클라우드 매출 YoY 18% 성장·엔터프라이즈 ARR cadence·forward P/E 14 저점 매수 유입이 upside 축.",
        "result": "hit",
        "actual": 4.9
      },
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,085,000원 -2.5% 종가 - 미국 AI 랠리 동조·HBM4 공급 cadence·외국인 반도체 바스켓 매도 축소·금통위 D-2 유동성 기대가 upside 축.",
        "result": "hit",
        "actual": 8.9
      },
      {
        "label": "DELL",
        "ticker": "DELL",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 335.70달러 +20.7% 폭등 뒤 AI 서버 바스켓 랠리 모멘텀 지속 - AI 서버 수주 백로그·엔비디아 급반등 연동·하이퍼스케일러 CAPEX cadence가 upside 축.",
        "result": "hit",
        "actual": 20.5
      }
    ]
  },
  {
    "date": "2026-11-23",
    "made": "2026-11-21 07:35 KST",
    "predictions": [
      {
        "label": "크래프톤",
        "ticker": "259960",
        "market": "KR",
        "direction": "up",
        "rationale": "금요일 종가 202,500원 +2.7% 상대 강세 - 반도체 투매 속 게임·엔터 방어주 로테이션·PUBG 모바일 중국 매출 가속·2027 상반기 신작 파이프라인 가이던스가 upside 축.",
        "result": "miss",
        "actual": -4.9
      },
      {
        "label": "GOOGL",
        "ticker": "GOOGL",
        "market": "US",
        "direction": "up",
        "rationale": "금요일 종가 277.97달러 +1.9% 상대 강세 - 반도체 투매 속 AI 광고·클라우드 매출 가이던스 재부각·Gemini 3 Pro 엔터프라이즈 ARR cadence·앤트로픽 상장 레퍼런스 생태계 수혜가 upside 축.",
        "result": "miss",
        "actual": -2.7
      },
      {
        "label": "AMD",
        "ticker": "AMD",
        "market": "US",
        "direction": "down",
        "rationale": "금요일 종가 444.91달러 -9.1% 급락 - AI 칩 바스켓 매물 심화·NVDA 루빈 cadence 선반영 피로·커스텀 ASIC 바스켓 분화 공방·MI350X OpenAI 공급 재검증이 downside 축.",
        "result": "hit",
        "actual": -13.2
      }
    ]
  },
  {
    "date": "2026-11-20",
    "made": "2026-11-20 07:40 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 196,900원 +1.1% 반등 - 반도체 바스켓 리더십 복원·외국인 재진입·HBM4 양산 cadence 지지·11/26 금통위 D-6 금리 인하 기대 가치주 로테이션 수혜가 upside 축.",
        "result": "miss",
        "actual": -5.9
      },
      {
        "label": "CRWD",
        "ticker": "CRWD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 251.22달러 +6% 랠리 - 사이버보안 바스켓 로테이션 리더십 재확인·Q2 FY27 어닝 분기점 임박·OKTA +8.3%·PANW +4.7% 동반 강세가 upside 축.",
        "result": "hit",
        "actual": 2.7
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 153.44달러 +1.6% 반등 - Q3 FY27 호실적 모멘텀 소화·Q4 가이던스 1,300억달러 서프라이즈·Kress CEO 체제 안착·Rubin 2027 상반기 양산 cadence가 upside 축.",
        "result": "miss",
        "actual": -3.3
      }
    ]
  },
  {
    "date": "2026-11-19",
    "made": "2026-11-19 07:35 KST",
    "predictions": [
      {
        "label": "LG이노텍",
        "ticker": "011070",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 283,000원 +5.6% 반등. 애플 공급망 바스켓 저가매수 유입·FC-BGA·아이폰 폴드 cadence 지지 서사 확대.",
        "result": "miss",
        "actual": -2.5
      },
      {
        "label": "PANW",
        "ticker": "PANW",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 327.40달러 +5.9% 급반등. 사이버보안 바스켓 과매도 되돌림 개시·CyberArk 시너지·Q3 가이던스 레버리지.",
        "result": "hit",
        "actual": 9.9
      },
      {
        "label": "AVGO",
        "ticker": "AVGO",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 351.60달러 +2.9% 상승. 커스텀 ASIC 바스켓 저가매수 유입·엔비디아 실적 전야 AI 칩 리더십 재편 서사.",
        "result": "hit",
        "actual": 3.6
      }
    ]
  },
  {
    "date": "2026-11-18",
    "made": "2026-11-18 07:40 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "1,098,000원 -2% 직전 종가 - 외국인 순매도 뒤 기술적 oversold·HBM4 LTA 공시 임박·엔비디아 실적 D-day 후 반도체 바스켓 반등 모멘텀 upside 축",
        "result": "hit",
        "actual": 2.4
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "154.73달러 -0.9% 직전 종가 - Q3 FY27 실적 D-day·2주 누적 -20% 조정 oversold·Rubin cadence·2027 CAPEX 가이던스 확인 선점 매수 기대 upside 축",
        "result": "hit",
        "actual": -0.4
      },
      {
        "label": "신세계",
        "ticker": "004170",
        "market": "KR",
        "direction": "up",
        "rationale": "265,000원 +5.6% 직전 종가 - 유통 바스켓 외국인 순매수 전환·10월 매출 반등·면세 중국 수요 복원·방어주 로테이션 수혜 모멘텀 연장 upside 축",
        "result": "miss",
        "actual": -1.1
      }
    ]
  },
  {
    "date": "2026-11-17",
    "made": "2026-11-17 07:30 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "196,800원 -4.5% 직전 종가 - 외국인 1.7조원 매도 뒤 기술적 oversold·HBM4 LTA 공시 11/19 D-2 지지력·엔비디아 사임 후 첫 실적 D-1 선점 매수 기대 upside 축",
        "result": "miss",
        "actual": -1.5
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "159.87달러 -1.8% 직전 종가 - 사임 후 첫 실적 D-1·2주 누적 -20% 조정 oversold·Rubin cadence·2027 CAPEX 가이던스 확인 선점 매수 기대 upside 축",
        "result": "miss",
        "actual": -4.1
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "down",
        "rationale": "736.88달러 -5.3% 직전 종가 - 美 DRAM 담합 집단소송 공식 피소 여진 지속·NVDA 실적 D-1 공포·메모리 바스켓 매물 집중 흐름이 downside 축",
        "result": "hit",
        "actual": -7.6
      }
    ]
  }
];
