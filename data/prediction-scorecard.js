// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
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
  },
  {
    "date": "2026-11-11",
    "made": "2026-11-11 07:10 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,212,000원 +6.7% V자 급반등 종가 - HBM3E 12-Hi 대량양산·HBM4 LTA 공식화 D-8 임박·11/19 글로벌 AI 반도체 Q3 가이던스 선반영·외국인 반도체 바스켓 재매수 2일차가 upside 축, 급등 후 차익실현은 downside 카운터, HBM 서사 모멘텀 지속 우세",
        "result": "miss",
        "actual": -1.4
      },
      {
        "label": "HD현대일렉",
        "ticker": "267260",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 394,000원 +11.1% 신고가 - 전력·원전 바스켓 급등 1일 소화 뒤 매물 유입 리스크·초고압 변압기 LTA 기대 선반영·forward P/E 23 리레이팅 부담이 downside 축, AI 데이터센터 PPA 모멘텀 지속은 upside 카운터, 급등 후 매물 소화 흐름 우세",
        "result": "hit",
        "actual": -1.4
      },
      {
        "label": "AMD",
        "ticker": "AMD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 536.02달러 +5.4% 랠리 2일차 - OpenAI MOU·MI400 cadence 재점화·반도체 리더십 복귀·AI 바스켓 재매수 모멘텀 연장이 upside 축, forward P/E 45 밸류 부담은 downside 카운터, 11/19 NVDA Q3 D-8 앞 AMD 2위 플레이어 서사 레버리지 우세",
        "result": "hit",
        "actual": 1.8
      }
    ]
  },
  {
    "date": "2026-11-10",
    "made": "2026-11-10 07:10 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "월요일 종가 189,900원 +0.6% 소폭 반등 - HBM4 LTA 공식화 대기·외국인 반도체 바스켓 재매수 전환 대기·美 셧다운 종료 가결 리스크온이 upside 축, 11/19 글로벌 AI 반도체 Q3 D-9 선반영 차익실현이 downside 카운터, 셧다운 종결 뒤 매수 복귀 우세",
        "result": "hit",
        "actual": 4.9
      },
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "월요일 종가 415,000원 -11.3% 급락 - 2차전지 셀 바스켓 투매 4일째 과매도 포지션·ESS 수주 가이던스·EV 수요 복원 cadence가 반등 upside 축, 바스켓 디레이팅 지속은 downside 카운터, 과매도 반등 우세",
        "result": "hit",
        "actual": 9
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "월요일 종가 176.36달러 -5.5% 로테이션 희생양 - AMD +11.1% 리더십 교체 소화 뒤 반발 매수·11/19 Q3 FY27 D-9 HBM4 LTA 가이던스 선반영이 upside 축, 'AI 버블' 서사 양분이 downside 카운터, 과매도 반등 우세",
        "result": "miss",
        "actual": -4.3
      }
    ]
  },
  {
    "date": "2026-11-09",
    "made": "2026-11-06 07:30 KST",
    "predictions": [
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 190.13달러 -5% 급락. Burry 13F 숏 공개 소화 후 반발 매수 기대, 11/19 Q3 FY27 D-10 임박·HBM4 LTA 가이던스 선반영 축.",
        "result": "hit",
        "actual": 2.8
      },
      {
        "label": "현대차",
        "ticker": "005380",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 293,500원 +3.5% 상승. 자동차 바스켓 홀로 강세·Q4 하이브리드 가이던스·미국 판매 모멘텀 지지 지속.",
        "result": "miss",
        "actual": -1.1
      },
      {
        "label": "KB금융",
        "ticker": "105560",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 157,000원 +3.6% 급등. 11/13 금통위 D-4·가치주 로테이션 선두·배당 성향 50% 가이던스 재점화 서사.",
        "result": "miss",
        "actual": -0.7
      }
    ]
  },
  {
    "date": "2026-11-05",
    "made": "2026-11-05 07:35 KST",
    "predictions": [
      {
        "label": "크래프톤",
        "ticker": "259960",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 212,000원 +16.5% 이틀 연속 급등. PUBG·inZOI Q3 실적 모멘텀 매수 쇄도, 11월 중순 공식 발표 전 리레이팅 축.",
        "result": "hit",
        "actual": 3.1
      },
      {
        "label": "MSFT",
        "ticker": "MSFT",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 550.54달러 +5.7% 급등. 메가캡 클라우드 로테이션 리더십·Azure +45%·2027 CAPEX 1,900억달러 가이던스 재점화.",
        "result": "hit",
        "actual": -0.3
      },
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 545,000원 +11.6% 폭등. 2차전지 바스켓 급반등 선두·ESS 수주·전고체 가이던스 재점화 모멘텀 지속.",
        "result": "miss",
        "actual": -5.1
      }
    ]
  },
  {
    "date": "2026-11-04",
    "made": "2026-11-04 07:35 KST",
    "predictions": [
      {
        "label": "BE",
        "ticker": "BE",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 213.68달러 +8.9% 급등 - AI 데이터센터 SOFC 수주 랠리 지속, 하이퍼스케일러 전력 CAPEX 2,200~2,500억달러 가이던스 레버리지. 전력 CAPEX 사이클 리더십이 upside 축, 급등 뒤 차익실현 피로는 downside 카운터. 연료전지 모멘텀 연장 우세",
        "result": "hit",
        "actual": 1.5
      },
      {
        "label": "두산에너빌리티",
        "ticker": "034020",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 52,200원 -6.3% 급락 - 원자력 바스켓 차익실현 매물 집중. 10월 랠리 과열 소화 과정에서 selling climax 테스트, 체코 NPP·美 SMR·웨스팅하우스 파이프 중기 서사 재검증이 upside 축, 반도체 매도 자금 전력 바스켓 추가 전이는 downside 카운터. 과매도 반등 모멘텀 우세",
        "result": "hit",
        "actual": 0.4
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 867.52달러 +4.1% 반등 - 메모리 바스켓 매도 소화·HBM4 LTA 공식화 앞 포지셔닝. 11/19 NVIDIA Q3 FY27·HBM4 공급 리더십 재검증이 upside 축, AI 인프라 CAPEX 번레이트 재공포는 downside 카운터. 메모리 리더십 복귀 모멘텀 우세",
        "result": "miss",
        "actual": -0.6
      }
    ]
  },
  {
    "date": "2026-11-03",
    "made": "2026-11-03 07:35 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,472,000원 +3.8% 반등 - 외국인 매도 축소·기관 1.23조원 순매수·HBM 수급 서사 재점화. 11/19 NVIDIA Q3 FY27·HBM4 LTA 공식화 임박 포지셔닝이 upside 축, 메가캡 CAPEX 디레이팅 우려는 downside 카운터. 반도체 리더십 복귀 모멘텀 우세",
        "result": "miss",
        "actual": -3.6
      },
      {
        "label": "AMZN",
        "ticker": "AMZN",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 251.56달러 +4.7% 급등 - AWS Q3 +39% YoY 가속·Jassy 2027~28 40%+ 가이던스·2026 CAPEX 2,200억달러 상향 공식화. 메가캡 재선호·클라우드 리더십 재확인이 upside 축, 메가캡 CAPEX 번레이트 재공포는 downside 카운터. 어닝 서프라이즈 연장 모멘텀 우세",
        "result": "hit",
        "actual": 2.2
      },
      {
        "label": "효성중공업",
        "ticker": "298040",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 2,050,000원 +13.3% 폭등 - 美 초고압 변압기 수주·AI 데이터센터 CAPEX 레버리지 선반영. 급등 뒤 차익실현 피로·forward P/E 재검증 테스트가 downside 축, 전력기기 바스켓 중기 수주 서사는 upside 카운터. mean reversion 모멘텀 우세",
        "result": "hit",
        "actual": -2.1
      }
    ]
  }
];
채점 완료: 2026-11-12 기준 변경된 항목 있음
