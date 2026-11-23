// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
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
  },
  {
    "date": "2026-11-16",
    "made": "2026-11-13 07:15 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "208,000원 +1.0% 직전 종가 - HBM4 LTA 공시 11/19 D-3 지지력·외국인 반도체 바스켓 2일 매수 cadence 연장이 upside 축, 밤사이 뉴욕 반도체 조정 여진이 downside 카운터 소화 뒤 월요 재정비 흐름 우세",
        "result": "hit",
        "actual": 0
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "163.40달러 -5.9% 전일 종가 - CEO 외부 조사 여진 과매도 소화·11/17 Q3 FY27 실적 D-1 선점 매수 바스켓 회복 신호가 upside 축, Rubin cadence·HBM4 LTA 가이던스 공식화 기대 재점화 흐름 우세",
        "result": "miss",
        "actual": -2
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "down",
        "rationale": "774.26달러 -4.6% 전일 종가 - 메모리 바스켓 2일 랠리 뒤 차익 실현 집중·HBM4 cadence 공식화 전 소화 국면이 downside 축, NVDA 조정 여진 연동·반도체 바스켓 재편 소화 흐름 우세",
        "result": "hit",
        "actual": -2.5
      }
    ]
  },
  {
    "date": "2026-11-12",
    "made": "2026-11-12 07:40 KST",
    "predictions": [
      {
        "label": "이수페타시스",
        "ticker": "007660",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 82,000원 +19.4% 폭등 - AI 기판 바스켓 리더십·대구 7공장 5천억원 투자협약 레버리지가 upside 축, 그러나 수일 랠리 뒤 매물 유입·forward P/E 28 리레이팅 부담이 downside 카운터, 급등 후 차익실현 흐름 우세",
        "result": "miss",
        "actual": 8.4
      },
      {
        "label": "한국항공우주",
        "ticker": "047810",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 109,000원 +7.7% 랠리 - KAI 연매출 5조원 가이던스·KF-21 수출 도전·FA-50M 말레이시아 초도 인도 cadence가 upside 축, forward P/E 25 밸류 부담 downside 카운터, 방산·우주 바스켓 2일차 모멘텀 레버리지 우세",
        "result": "miss",
        "actual": -2.3
      },
      {
        "label": "ORCL",
        "ticker": "ORCL",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 126.63달러 +7.4% 급등 - AI 인프라 V-반등 리더십·OCI 수주 cadence·6,640억달러 백로그 가이던스가 upside 축, forward P/E 28 밸류 부담 downside 카운터, 하이퍼스케일러 2027 CAPEX 1조달러대 재점화 레버리지 우세",
        "result": "hit",
        "actual": 8.8
      }
    ]
  }
];
