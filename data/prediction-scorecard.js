// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
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
        "result": null,
        "actual": null
      },
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 591,000원 +5.5% 상승 리더십 마감·LFP ESS 북미 수주 서사 재점화·AI 데이터센터 백업전원 수요·테슬라 Q3 인도 사상 최대 모멘텀·반도체 투매 피난처 로테이션 유입이 upside 축, 밸류 급등 소화 매물·외국인 매도 피로 완화 지연은 downside 카운터, 2차전지 리더십 모멘텀 연장 우세",
        "result": null,
        "actual": null
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 227.72달러 -0.3% 보합 마감·시총 5조달러 상단 유지·Vera Rubin 1Q26 양산 공식화·HBM4 솔드아웃·AMD-Oracle MI450 5만개·AMD-OpenAI 6GW 멀티 벤더 체결 생태계 안착·ASML Q3 beat and raise 간접 수혜가 upside 축, 메모리·장비 섹터 투매 피로 지속은 downside 카운터, 플랫폼 디펜시브 리더십 우세",
        "result": null,
        "actual": null
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
  },
  {
    "date": "2026-10-13",
    "made": "2026-10-13 07:40 KST",
    "predictions": [
      {
        "label": "효성중공업",
        "ticker": "298040",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 2,242,000원 -10.1% 급락 마감·변압기 랠리 되돌림 피로 매물 소화·수주잔고·AI DC 전력 CAPEX 서사 유지가 upside 축, 美 10년물 5.3% 환경 성장주 할인율 상승·외국인 매도 피로는 downside 카운터, 과매도 소화 후 기술적 반등 우세",
        "result": "miss",
        "actual": -6.9
      },
      {
        "label": "JPM",
        "ticker": "JPM",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 334.76달러 +0.5% 완만 강세 마감·10/13 화 Q3 어닝 D-Day·컨센 EPS 5.86달러 전년 5.07달러 +15% 성장 전망·美 10년물 5.3% 환경 순이자마진·채권 트레이딩 레버리지가 upside 축, Q2 역대 최대 소화·pull-forward 피로는 downside 카운터, 분기 EPS 성장·NIM 확대 서사 우세",
        "result": "hit",
        "actual": 0.4
      },
      {
        "label": "META",
        "ticker": "META",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 746.08달러 +3.8% 사상 최고 마감·Meta AI 어시스턴트 10억 MAU 돌파·Llama 4 Behemoth 2T 멀티모달 리드·10월 하순 Q3 CAPEX 가이던스 임박 기대가 upside 축, forward P/E 재조정·AI CAPEX 피로는 downside 카운터, Q3 어닝 임박 모멘텀 우세",
        "result": "hit",
        "actual": 3.4
      }
    ]
  },
  {
    "date": "2026-10-12",
    "made": "2026-10-10 07:40 KST",
    "predictions": [
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 262,000원 -2.4% 마감·10/8 Q3 잠정 영업이익 역대 최대 공시 뉴스 소멸 매물 소화·HBM4 Q4 양산·엔비디아 5년 공급·마이크론 솔드아웃 서사 유지·외국인 반도체 매도 피로 축적이 upside 축, 美 10년물 5.3% 환경 성장주 할인율 상승·외국인 수급 변수는 downside 카운터, 호실적 소화 후 기술적 반등 우세",
        "result": "miss",
        "actual": -2.4
      },
      {
        "label": "ORCL",
        "ticker": "ORCL",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 139.62달러 +3.4% 재랠리 마감·10GW DC 100억달러 Nvidia 계약 재점화·OCI AI 수주 가속·엔터프라이즈 클라우드 리레이팅·FY26 가이던스 임박 기대가 upside 축, 매파 FOMC 환경 성장주 할인율 상승·forward P/E 재조정은 downside 카운터, AI 플랫폼·DC 재점화 서사 모멘텀 우세",
        "result": "hit",
        "actual": 4.6
      },
      {
        "label": "ASML",
        "ticker": "ASML",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,808.31달러 +2.2% 강세 마감·EUV YoY +45% 램프업·low-NA 65대·FY26 €43~45B 가이던스 상향·GM 54% 유지·2nm A20 Pro 애플 이벤트·AI 파운드리 CAPEX 서사가 upside 축, 매파 FOMC 환경 반도체 매그니스 혼조·booking 비공개 전환 가시성 저하는 downside 카운터, EUV 사이클·AI 파운드리 CAPEX 모멘텀 우세",
        "result": "hit",
        "actual": 0.6
      }
    ]
  },
  {
    "date": "2026-10-09",
    "made": "2026-10-09 07:22 KST",
    "predictions": [
      {
        "label": "LG화학",
        "ticker": "051910",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 종가 286,500원 +3.4% 반등 마감·2차전지 역주행 지속·북미 LFP ESS 공급 계약 서사·AI 데이터센터 ESS 수요 재점화·외국인 2차전지 재편입이 upside 축, LG엔솔 +2.6%·에코프로비엠 +3.5% 섹터 로테이션 안착·리튬 105달러대 유지는 upside 보조 카운터, 美 10년물 급등 환경 성장주 매물 압박은 downside 리스크지만 섹터 모멘텀 우세",
        "result": "hit",
        "actual": 3.4
      },
      {
        "label": "PLTR",
        "ticker": "PLTR",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 201.27달러 +3.7% 사상 최고 돌파·美 국방부 Replicator 2 계약 확장·엔터프라이즈 Foundry·AIP ARR 가속·11월 초 Q3 어닝 임박 기대·미국 셧다운 CR 통과 지지가 upside 축, forward P/S 과도 리레이팅 우려·매파 FOMC 환경 성장주 할인율 상승은 downside 카운터, AI 플랫폼 재점화 서사 모멘텀 우세",
        "result": "hit",
        "actual": 2.4
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 1,061.76달러 -2.4% 조정 마감·HBM4 솔드아웃·NVIDIA Vera Rubin 1Q26 양산 서사 유지·Q4 FY26 어닝 임박 기대·AI 데이터센터 메모리 수요 레버리지가 upside 축, 매파 FOMC 회의록·美 10년물 5.3% 급등 환경 성장주 할인율 상승·전주 사상 최고 피로는 downside 카운터, 반도체 투톱 차익 실현 과도 조정 후 기술적 반등 우세",
        "result": "miss",
        "actual": -4.8
      }
    ]
  },
  {
    "date": "2026-10-08",
    "made": "2026-10-08 07:25 KST",
    "predictions": [
      {
        "label": "LG이노텍",
        "ticker": "011070",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 591,000원 -8.2% 급락 마감·2분기 고환율 매입 원재료가 3분기 수익성 압박·LG전자 Q3 영업이익 7,818억원 컨센 하회 전자부품 자회사 수익성 우려 확산·외국인 3조원 순매도·美 10년물 5.3% 급등 환경 성장주 매물 압박이 downside 축, 아이폰 폴드 카메라 모듈 수주·forward P/E 재조정 후 저점 매수 유입은 upside 카운터, 매파 FOMC 회의록 소화 과정에서 추가 하방 압력 우세",
        "result": "hit",
        "actual": -1.2
      },
      {
        "label": "LG전자",
        "ticker": "066570",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 208,000원 -10.5% 급락 마감·Q3 영업이익 7,818억원 컨센 하회 발표 완료·불확실성 해소 저가 매수세 유입 기대·전년대비 매출 +8.9%·OP +13.5% 성장은 유지·데이터센터 CDU 냉각·AI 가전 서사 유지가 upside 축, 외국인 매도·LG이노텍 수익성 부진 연쇄는 downside 카운터, 단기 급락 후 기술적 반등 가능성 우세",
        "result": "miss",
        "actual": -2.2
      },
      {
        "label": "AMD",
        "ticker": "AMD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 640.86달러 -1.3% 조정 마감·10/7 Oracle Cloud Infrastructure MI450 GPU 5만개 공식 체결·Helios 서버 랙 시스템 2026 Q3 배치·OpenAI 6GW GPU에 이어 하이퍼스케일러 2번째 메가 수주·AMD CPU+GPU+Helios 랙 수직 통합 서사 안착·forward P/S 리레이팅이 upside 축, 매파 FOMC 회의록·美 10년물 5.3% 급등 환경에서 성장주 전반 매물은 downside 카운터, 수주 서사가 매파 쇼크 과장 반등 여지 우세",
        "result": "miss",
        "actual": -0.5
      }
    ]
  },
  {
    "date": "2026-10-07",
    "made": "2026-10-07 07:40 KST",
    "predictions": [
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 575,000원 +8.7% 폭등 마감·북미 2조원 LFP ESS 공급 체결·LFP ESS 셀 양산 10월 개시·에코프로비엠 +11.4%·엘앤에프 +9%·포스코퓨처엠 +9.4% 2차전지 트리오 동반 랠리·리튬 105달러대 유지·테슬라 Q3 인도 486,532대 사상 최대 후방 수요가 모멘텀 상단 축, AMD-OpenAI 6GW GPU 후방 데이터센터 ESS 수요 재점화·외국인 2차전지 섹터 로테이션이 upside 레버리지 축, 다만 단기 과열 되돌림·2차전지 랠리 차익 실현이 카운터",
        "result": "miss",
        "actual": -2.1
      },
      {
        "label": "Constellation Energy",
        "ticker": "CEG",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 300.83달러 +12.4% 폭등 마감·AMD-OpenAI 6GW GPU 체결 후방 데이터센터 전력 PPA 재리레이팅·Meta 20년 PPA 지지·Trump 2억달러 AI 원자로 지원·Oklo·Talen·SMR·LEU 트리오 +7~8% 동반 폭등·4분기 추가 PPA 발표 기대가 모멘텀 상단 축, AI 데이터센터 CAPEX 가속·미 원전 재가동·FOMC 25bp 인하 95% 확률 유틸리티 지지가 upside 레버리지 축, 다만 과열 되돌림·실적 가이던스 하회 가능성이 카운터",
        "result": "miss",
        "actual": -1.2
      },
      {
        "label": "이수페타시스",
        "ticker": "007660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 131,900원 +8.8% 폭등 마감·AI 기판 쇼티지 재확인·대구 5공장 증설 가동·FC-BGA AI 서버 수요 레버리지·대덕전자 +6.8% 동반 랠리·엔비디아 Vera Rubin 램프 후방 수혜·목표주가 상향 러시·Q3 어닝 가이던스 상향 기대가 모멘텀 상단 축, 삼성전기·LG이노텍 전자부품 트리오 동조 랠리·AI 서버 CAPEX 가속이 upside 레버리지 축, 다만 단기 과열 되돌림·반도체 섹터 조정 동조가 카운터",
        "result": "miss",
        "actual": -2.9
      }
    ]
  }
];
