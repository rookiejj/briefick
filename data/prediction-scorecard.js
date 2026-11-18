// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
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
  }
];
채점 완료: 2026-11-18 기준 변경된 항목 있음
