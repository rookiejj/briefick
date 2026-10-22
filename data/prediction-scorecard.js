// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
  {
    "date": "2026-10-22",
    "made": "2026-10-22 07:35 KST",
    "predictions": [
      {
        "label": "LS일렉트릭",
        "ticker": "010120",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 166,100원 +7% 급등 마감·AI 데이터센터 전력기기 리더십 지속·외국인 매수 집중·전력기기 섹터 로테이션 주도·AI 전력 CAPEX 사이클 서사 재점화·추가 하이퍼스케일러 수주 파이프가 upside 축, 전일 랠리 소화 리스크는 downside 카운터, 모멘텀 지속 매수 유입 우세",
        "result": "hit",
        "actual": 7
      },
      {
        "label": "DELL",
        "ticker": "DELL",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 494달러 +7% 급등 마감·AI 서버 백로그 리레이팅 2일차·GB300 양산 가이던스·AMD-OpenAI 후방 수요·AI 데이터센터 CAPEX 사이클 연장·Juniper 시너지 서사가 upside 축, 전일 랠리 소화 리스크는 downside 카운터, AI 서버 리더십 모멘텀 지속 우세",
        "result": "miss",
        "actual": -1.8
      },
      {
        "label": "한화시스템",
        "ticker": "272210",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 74,300원 +5.2% 반등 마감·전일 급락 과매도 되돌림·위성통신·전자전 수주 서사 재점화·소형위성 조립 모멘텀·NATO CAPEX 확정 대기·방산 섹터 반등 로테이션이 upside 축, LIG넥스원 -9% 분화는 downside 카운터, 방산 과매도 되돌림 지속 우세",
        "result": "hit",
        "actual": 5.2
      }
    ]
  },
  {
    "date": "2026-10-21",
    "made": "2026-10-21 07:17 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 211,500원 -3% 조정 마감·10/23 Q3 D-2 가이던스 분수령 임박·HBM4 수주 가이던스 분기점·외국인 매도 피크 소화·반도체 전면 과매도 환경·FOMC 10/28 D-7 완화 기조 선반영이 upside 축, 중국 반도체 추격 서사는 downside 카운터, 어닝 모멘텀 선점 매수 유입 우세",
        "result": "miss",
        "actual": -3
      },
      {
        "label": "HD현대중공업",
        "ticker": "329180",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 318,000원 -8% 급락 마감·10/22 Q3 D-1 가이던스 분수령 임박·LNG선 수주잔고 사상 최대 유지·조선 전면 과매도 환경·외국인 수급 리셋 완료·전고점 대비 15%대 조정 완료·카타르 LNG선 2차 발주 임박이 upside 축, 방산 동반 조정 전염은 downside 카운터, 어닝 모멘텀 선점 반등 우세",
        "result": "miss",
        "actual": -8
      },
      {
        "label": "TSLA",
        "ticker": "TSLA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 366.96달러 -0.3% 보합 마감·10/22 Q3 D-1 가이던스 분수령 임박·로보택시 상업화 로드맵·Cybercab 양산 가이던스·FSD v13 롤아웃·3Q 인도량 사상 최대 서사·FOMC 10/28 D-7 완화 기조 선반영이 upside 축, GM Q3 EV 구조조정 비용 재점화는 downside 카운터, 어닝 모멘텀 선점 매수 유입 우세",
        "result": "hit",
        "actual": 1.4
      }
    ]
  },
  {
    "date": "2026-10-20",
    "made": "2026-10-20 07:35 KST",
    "predictions": [
      {
        "label": "삼성바이오로직스",
        "ticker": "207940",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,427,000원 +9.9% 폭등 마감·10/22 Q3 D-2 가이던스 분수령 임박·CDMO 파이프 재평가·바이오시밀러 서사 재점화·셀트리온 5조 매출 목표 환경·외국인 바이오 리더십 복귀 유입이 upside 축, 급등 소화 매물은 downside 카운터, 어닝 D-2 모멘텀 연장 우세",
        "result": "hit",
        "actual": 9.9
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 913달러 +4% 급반등 마감·HBM4 ASP·DRAM 가이던스 재점화·반도체 섹터 전면 반등 로테이션 유입·TSMC Q3 호실적 FY26 상단 상향 환경·메모리 사이클 되돌림 서사가 upside 축, 10년물 4.3% 밸류 압박은 downside 카운터, 반도체 리더십 복귀 모멘텀 우세",
        "result": "hit",
        "actual": 0
      },
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 592,000원 +11.7% 폭등 마감·2차전지 양극재 트리오 동반 랠리·급등 후 피로 소화 압박·단기 과열 신호·차익 실현 매물 유입 가능이 downside 축, LFP ESS 북미 수주 서사는 upside 카운터, 급등 후 되돌림 우세",
        "result": "miss",
        "actual": 11.7
      }
    ]
  },
  {
    "date": "2026-10-19",
    "made": "2026-10-17 07:22 KST",
    "predictions": [
      {
        "label": "한화에어로스페이스",
        "ticker": "012450",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 888,000원 +7.8% 급반등 마감·EU 재무장 2% GDP 가이던스 수요 지지·10/27 Q3 D-10 가이던스 분수령 임박·폴란드 2차 수주 파이프라인·美 중간선거 후 방산 예산 조율 서사가 upside 축, 급등 소화 매물은 downside 카운터, 방산 리더십 복귀 모멘텀 연장 우세",
        "result": "hit",
        "actual": 7.8
      },
      {
        "label": "BlackRock",
        "ticker": "BLK",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,120.78달러 +4.4% 급등 마감·Q3 AUM 15.5조달러 사상 최고·순유입 2,050억달러·iShares ETF 1,350억달러 유입·조정 EPS 15.93달러 컨센 상회·반도체 투매 완화 환경 디펜시브 금융 유입이 upside 축, 급등 소화 매물은 downside 카운터, Q3 호실적 모멘텀 연장 우세",
        "result": "hit",
        "actual": 1.2
      },
      {
        "label": "Micron",
        "ticker": "MU",
        "market": "US",
        "direction": "down",
        "rationale": "직전 거래일 종가 909.05달러 -2.4% 조정 마감·메모리 디레이팅 사이클 지속·CXMT DDR5 서버 모듈 양산 서사·HBM4 ASP 가이던스 분수령 임박·TSMC Q3 로직 CAPEX 상향 vs 메모리 ASP 분화가 downside 축, 과매도 기술적 반등 기대는 upside 카운터, 메모리 디레이팅 사이클 연장 우세",
        "result": "hit",
        "actual": -5.6
      }
    ]
  },
  {
    "date": "2026-10-16",
    "made": "2026-10-16 07:22 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,262,000원 -11.1% 투매 재점화 마감·HBM4 솔드아웃 서사 유지·10/23 Q3 D-7 가이던스 분수령 임박·CXMT DDR5 경쟁 우려 선반영 소화·과매도 지표 극단치 도달이 upside 축, 메모리 디레이팅 사이클 연장 우려는 downside 카운터, 과매도 기술적 반등 기대 우세",
        "result": "miss",
        "actual": -11.1
      },
      {
        "label": "월마트",
        "ticker": "WMT",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 119.64달러 +3% 급등 마감·리스크오프 환경 디펜시브 소비 로테이션 유입·11/20 Q3 D-35 임박·e-커머스·광고·멤버십 ARR 모멘텀·반도체 투매 피난처 역할이 upside 축, 밸류 급등 소화 매물은 downside 카운터, 디펜시브 로테이션 모멘텀 연장 우세",
        "result": "hit",
        "actual": -0.1
      },
      {
        "label": "META",
        "ticker": "META",
        "market": "US",
        "direction": "down",
        "rationale": "직전 거래일 종가 729.40달러 -1.1% 조정 마감·10/29 Q3 D-13 임박 포지션 축소·AI CAPEX 가이던스 피로·반도체 투매 플랫폼 전염·Llama 4 Behemoth 수익화 지표 관망이 downside 축, AI 어시스턴트 ARR 서사·플랫폼 디펜시브 유입은 upside 카운터, Q3 앞 포지션 축소 우세",
        "result": "hit",
        "actual": -0.5
      }
    ]
  },
  {
    "date": "2026-10-15",
    "made": "2026-10-15 07:20 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,419,000원 -1.7% 매도 피로 완화·반도체 투매 사흘째 분화 지지·10/23 Q3 D-8 분수령 임박·HBM4 솔드아웃·엔비디아 Vera Rubin 할당 서사 지지·ASML Q3 beat and raise 간접 수혜가 upside 축, 중국 CXMT DDR5 서버 공식 발표 메모리 경쟁 우려는 downside 카운터, 과매도 소화 Q3 가이던스 기대 우세",
        "result": "miss",
        "actual": -1.7
      },
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 591,000원 +5.5% 상승 리더십 마감·LFP ESS 북미 수주 서사 재점화·AI 데이터센터 백업전원 수요·테슬라 Q3 인도 사상 최대 모멘텀·반도체 투매 피난처 로테이션 유입이 upside 축, 밸류 급등 소화 매물·외국인 매도 피로 완화 지연은 downside 카운터, 2차전지 리더십 모멘텀 연장 우세",
        "result": "hit",
        "actual": 5.5
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 227.72달러 -0.3% 보합 마감·시총 5조달러 상단 유지·Vera Rubin 1Q26 양산 공식화·HBM4 솔드아웃·AMD-Oracle MI450 5만개·AMD-OpenAI 6GW 멀티 벤더 체결 생태계 안착·ASML Q3 beat and raise 간접 수혜가 upside 축, 메모리·장비 섹터 투매 피로 지속은 downside 카운터, 플랫폼 디펜시브 리더십 우세",
        "result": "miss",
        "actual": -1.2
      }
    ]
  },
  {
    "date": "2026-10-14",
    "made": "2026-10-14 07:25 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 232,000원 -7.4% 투매 마감·메모리 쇼크 이틀째 외국인 집중 매도 피로 심화·10/29 Q3 D-15 임박 가이던스 기대·HBM4 솔드아웃 서사 지지가 upside 축, 美 메모리·장비 동반 매도(MU -4.3%·AMAT -4.6%) 디레이팅 지속은 downside 카운터, 과매도 소화 기술적 반등 우세",
        "result": "miss",
        "actual": -7.4
      },
      {
        "label": "META",
        "ticker": "META",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 767.64달러 +3.3% 사상 최고 마감·메모리·장비 매도 속 Meta AI·Llama 4 Behemoth 리더십 지배·AI 플랫폼 디펜시브 로테이션 유입이 upside 축, forward P/E 재조정·Q3 어닝 임박 변동성은 downside 카운터, 디펜시브 리더십 모멘텀 우세",
        "result": "hit",
        "actual": 0
      },
      {
        "label": "AVGO",
        "ticker": "AVGO",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 355.46달러 +0.2% 상대 지지 마감·메모리·장비 투매 속 Jalapeño ASIC 2027 볼륨·하이퍼스케일러 CAPEX 서사 지지·반도체 섹터 상대 강세가 upside 축, 반도체 섹터 로테이션 매도 지속은 downside 카운터, ASIC 리더십 상대 강세 우세",
        "result": "hit",
        "actual": 0
      }
    ]
  }
];
