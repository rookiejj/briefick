// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
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
        "result": null,
        "actual": null
      },
      {
        "label": "LG전자",
        "ticker": "066570",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 208,000원 -10.5% 급락 마감·Q3 영업이익 7,818억원 컨센 하회 발표 완료·불확실성 해소 저가 매수세 유입 기대·전년대비 매출 +8.9%·OP +13.5% 성장은 유지·데이터센터 CDU 냉각·AI 가전 서사 유지가 upside 축, 외국인 매도·LG이노텍 수익성 부진 연쇄는 downside 카운터, 단기 급락 후 기술적 반등 가능성 우세",
        "result": null,
        "actual": null
      },
      {
        "label": "AMD",
        "ticker": "AMD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 640.86달러 -1.3% 조정 마감·10/7 Oracle Cloud Infrastructure MI450 GPU 5만개 공식 체결·Helios 서버 랙 시스템 2026 Q3 배치·OpenAI 6GW GPU에 이어 하이퍼스케일러 2번째 메가 수주·AMD CPU+GPU+Helios 랙 수직 통합 서사 안착·forward P/S 리레이팅이 upside 축, 매파 FOMC 회의록·美 10년물 5.3% 급등 환경에서 성장주 전반 매물은 downside 카운터, 수주 서사가 매파 쇼크 과장 반등 여지 우세",
        "result": null,
        "actual": null
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
  },
  {
    "date": "2026-10-06",
    "made": "2026-10-06 07:35 KST",
    "predictions": [
      {
        "label": "한화에어로스페이스",
        "ticker": "012450",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,072,000원 +3.7% 강세 마감·10/7(수) 누리호 5차 발사 D-1 카운트다운·위성 15기 역대 최다 탑재·발사 창 12:23~13:23·NATO 재무장 서사·美 육군 K9MH 현지화·폴란드 2차 K9 계약 상단 재확인이 모멘텀 상단 축, 10/13 재개장 외국인 방산·우주 매수 복귀 기대·sector rotation 방산 상대 강세 지속이 섹터 레버리지 축, 다만 추석·한글날 연휴 중 거래일 지연·단기 과열 되돌림이 카운터",
        "result": "miss",
        "actual": -3.3
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 237.21달러 +1.4% 신고가 레인지 유지·AMD-OpenAI 6GW GPU 체결에도 멀티 벤더 전략 수용·OpenAI Nvidia 10GW 100억달러 투자 유지·Vera Rubin 1Q26 양산 가이던스·Micron HBM4 5년 전략 공급·HBM4 11Gbps pin-speed 리드가 모멘텀 상단 축, 데이터센터 70% 점유율 유지·Blackwell Ultra GB300 2026 램프업·CES 2026 공개 임박이 upside 상단 축, 다만 AMD 6GW 멀티 벤더 분산 서사·밸류 리레이팅 후 단기 차익 실현이 카운터",
        "result": "hit",
        "actual": 2.1
      },
      {
        "label": "TSLA",
        "ticker": "TSLA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 377.67달러 +1.9% 신고가 레인지 유지·Q3 인도 486,532대 사상 최대·컨센 461,974대 대폭 상회·Model 3/Y 478,237대·에너지 ESS 13.7GWh record·10/21 Q3 실적 분기점이 모멘텀 상단 축, Nasdaq 신고가 테크 랠리·FSD V13 배포 임박·리튬 급등 후방 2차전지 수혜가 upside 레버리지 축, 다만 셀 원가 압력·Robotaxi 상용화 지연 서사가 카운터",
        "result": "hit",
        "actual": 2.2
      }
    ]
  },
  {
    "date": "2026-10-05",
    "made": "2026-10-03 07:35 KST",
    "predictions": [
      {
        "label": "LIG넥스원",
        "ticker": "079550",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 762,000원 +5.2% 급등 마감·누리호 5차 10/7 발사 임박·美 육군 K9MH 조달 가속·폴란드 2차 K9 상단 재확인이 모멘텀 지속 축, 방산 테마 외국인 분기 전환 매수 유입 지속·한화에어로·KAI 동반 강세가 섹터 레버리지 축, 다만 추석 연휴 중 KR 시장 휴장으로 거래일 지연·단기 과열 되돌림 가능성이 카운터",
        "result": "hit",
        "actual": 5.2
      },
      {
        "label": "TSLA",
        "ticker": "TSLA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 361.95달러 +2.2% 강세 마감·Q3 인도 486,000대 공식 발표·컨센 454,000대 대폭 상회 사상 최대 분기 인도 기록·10/21 Q3 실적 임박이 모멘텀 상단 축, S&P500 +1.97%·Nasdaq +2.15% Friday 급반등·FSD V13 배포·Model Y Juniper 램프업 서사가 upside 상단 축, 다만 리튬 급등 후 셀 원가 압력·Robotaxi 상용화 지연 서사가 카운터",
        "result": "hit",
        "actual": 4.7
      },
      {
        "label": "AMAT",
        "ticker": "AMAT",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 544.32달러 +2.8% 강세 마감·Terafab(Tesla·SpaceX·xAI) WFE 공급 서사·BofA 반도체 장비 top picks 재부각·HBM4 2Q26 shipping 궤도·1-gamma 노드 CAPEX 확대가 모멘텀 상단 축, LRCX·KLAC 반도체 장비 트리오 동반 강세·분기 전환 매수 유입이 섹터 레버리지 축, 다만 밸류 리레이팅 후 단기 차익 실현·중국 WFE 수출 제한 리스크가 카운터",
        "result": "hit",
        "actual": 2
      }
    ]
  },
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
  }
];
