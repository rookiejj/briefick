// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
  {
    "date": "2026-11-02",
    "made": "2026-10-30 07:30 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 232,000원 -4.1% 조정·Q3 영업익 107.4조 공식 확정 후 선반영 매도 소진·HBM4 Vera Rubin LTA 공식화 임박·외국인 반도체 재진입 서사·FOMC 25bp 인하 소화 완료가 upside 축, 전일 랠리 피로·메가캡 CAPEX 2027 공포 전이는 downside 카운터, 급락 뒤 반등 모멘텀 우세",
        "result": null,
        "actual": null
      },
      {
        "label": "LG에너지솔루션",
        "ticker": "373220",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 356,000원 -8.6% 급락·Q3 매출 9.6조·영업익 7,560억 호실적 재해석 유입·2027 미주 Ultium 램프업·AMPC 레버리지·리튬 선물 +8.3% 반등 동행·오버솔드 반등 서사가 upside 축, 2차전지 바스켓 되돌림 지속은 downside 카운터, 급락 뒤 저가매수 모멘텀 우세",
        "result": null,
        "actual": null
      },
      {
        "label": "HII",
        "ticker": "HII",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 320.87달러 +14.9% 폭등·Q3 EPS 5.48달러 컨센 상회·신규 수주 320억달러·FY26 조선 가이던스 상향 공식화·미 해군 항모·잠수함 사이클 리더십 재검증·방산 디펜시브 로테이션 재점화가 upside 축, 급등 후 차익실현 피로는 downside 카운터, 어닝 서프라이즈 모멘텀 연장 우세",
        "result": null,
        "actual": null
      }
    ]
  },
  {
    "date": "2026-10-29",
    "made": "2026-10-29 07:30 KST",
    "predictions": [
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 534,000원 +5.1% 반등·LGES Q3 매출 9.6조·영업익 7,560억 컨센 상회 호실적 동행·2027 미주 Ultium 램프업·ESS 믹스 마진 레버리지·리튬 선물 +8% 반등이 upside 축, 급등 후 차익실현은 downside 카운터, 2차전지 체인 재점화 모멘텀 지속 우세",
        "result": "hit",
        "actual": 0.6
      },
      {
        "label": "AMD",
        "ticker": "AMD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 560.26달러 +5.5% 재점화·MI455X 수주 레버리지 재부각·OpenAI 6GW·Anthropic 2GW LTA 모멘텀 지속·메가캡 CSP CAPEX 2027 가이던스 임박이 upside 축, 급등 후 차익실현·forward P/E 50배 밸류 부담은 downside 카운터, AI 인프라 CAPEX 사이클 레버리지 지속 우세",
        "result": "hit",
        "actual": 3.2
      },
      {
        "label": "Vertiv",
        "ticker": "VRT",
        "market": "US",
        "direction": "down",
        "rationale": "직전 거래일 종가 240달러 +15% 폭등·Q3 어닝 서프라이즈 1일 소화 매물 유입 리스크·forward P/E 40배 리레이팅 부담·AI 데이터센터 CAPEX 사이클 피크 우려가 downside 축, 액체냉각 레버리지 지속은 upside 카운터, 급등 후 매물 소화 흐름 우세",
        "result": "miss",
        "actual": 16.5
      }
    ]
  },
  {
    "date": "2026-10-28",
    "made": "2026-10-28 07:35 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 222,000원 +4.2% 랠리 가속·10/29 Q3 D-1·HBM4 Vera Rubin LTA 공식화 임박·2027 CAPEX·주주환원 가이던스가 upside 축, 신고가 소화 차익실현은 downside 카운터, D-1 외국인 추가 매수 흐름 우세",
        "result": "hit",
        "actual": 4.2
      },
      {
        "label": "AVGO",
        "ticker": "AVGO",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 339.77달러 +3.2% 급등·커스텀 ASIC 수요 지속·하이퍼스케일러 CAPEX 2027 가속 수혜·메가캡 10/29 Q3 CSP CAPEX 가이던스 모멘텀이 upside 축, 밸류에이션 forward P/E 30배 부담은 downside 카운터, 급등 모멘텀 지속 우세",
        "result": "hit",
        "actual": 0.2
      },
      {
        "label": "삼성바이오로직스",
        "ticker": "207940",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,374,000원 -5.4% 추가 조정·신고가 되돌림 2일 연속 과매도 포지션·10/29 Q3 D-1 CDMO 수주 백로그·2026 미주 바이오시밀러 로드맵 가이던스 임박이 반등 upside 축, 밸류에이션 forward P/E 50배 프리미엄 부담은 downside 카운터, 과매도 반등 우세",
        "result": "miss",
        "actual": -5.4
      }
    ]
  },
  {
    "date": "2026-10-27",
    "made": "2026-10-27 07:16 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,275,000원 보합 마감·10/29 Q3 D-2 HBM4 가이던스 공식화 임박·HBM 리더십 분리 유지·Vera Rubin·AMD MI455X 공급 확정이 upside 축, CXMT LPDDR6 양산 임박 범용 메모리 공급과잉은 downside 카운터, D-데이 전 외국인 재진입·반등 플레이 우세",
        "result": "hit",
        "actual": -0.2
      },
      {
        "label": "LIG넥스원",
        "ticker": "079550",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 429,000원 -9.8% 폭락 마감·방산 전면 투매 과매도 포지션·러·우 종전 되돌림 소화 완료·폴란드 K2 2차·NATO 2027 CAPEX 상향 전망·천궁-Ⅱ 추가 수주 모멘텀이 upside 축, 디펜시브 로테이션 수요 되돌림은 downside 카운터, 과매도 반등 우세",
        "result": "miss",
        "actual": -9.8
      },
      {
        "label": "LMT",
        "ticker": "LMT",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 616.36달러 +2% 반등 마감·10/28 Q3 D-1 임박·NATO 2027 CAPEX 가이던스 상향 전망·F-35 수주·극초음속·미사일·방공 매출 레버리지가 upside 축, 메가 어닝 위크 포지션 재편 변동성은 downside 카운터, 디펜시브 리더십·실적 기대 반등 우세",
        "result": "hit",
        "actual": -0.1
      }
    ]
  },
  {
    "date": "2026-10-26",
    "made": "2026-10-23 07:16 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 214,500원 -4% 급락 마감·10/23 Q3 가이던스 D-데이 임박 과매도 포지션 정리 완료·HBM4 수주 가이던스 공식화 기대·외국인 매도 피크 소화·FOMC 10/28 D-5 25bp 인하 완화 기조 선반영이 upside 축, CXMT LPDDR6 양산 임박 범용 메모리 공급과잉은 downside 카운터, 어닝 모멘텀 선점 반등 우세",
        "result": "hit",
        "actual": 0.5
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 217.35달러 -2.1% 조정 마감·Vera Rubin 가을 양산 램프업 공식화 임박·HBM4 멀티 서플라이어 샘플링·OpenAI Stargate·AMD 6GW·Anthropic 2GW 수주 파이프 유효·FOMC 10/28 25bp 인하 완화 기조 선반영이 upside 축, 반도체 장비주 투매 외풍은 downside 카운터, AI 인프라 서사 재점화 매수 유입 우세",
        "result": "miss",
        "actual": -0.6
      },
      {
        "label": "삼성E&A",
        "ticker": "028050",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 55,400원 +16.1% 폭등 마감·사우디 SAN-6·카타르 요소·멕시코 메탄올 EPC 파이프 선반영 완료·단기 랠리 과열·중동 발주 지연 리스크 재점화·건설 섹터 로테이션 소화 흐름이 downside 축, 추가 중동 수주 공식화 가능성은 upside 카운터, 과열 랠리 숨고르기 되돌림 우세",
        "result": "miss",
        "actual": 7.9
      }
    ]
  },
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
  }
];
