// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
  {
    "date": "2026-09-17",
    "made": "2026-09-17 07:40 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 종가 1,759,000원 +4.08% 강세 유지·Intel 오하이오 파운드리 캐파 공동 활용 협의 뉴스가 카타리스트 최대 축·HBM 캐파 확대·미 지역 공급망 안착 서사가 상단 재정의 근거, IT 섹터 +4.78% 카테고리 최강 반등 지속·반도체 장비 후방 급등이 오늘 개장 카테고리 자금 유입 시나리오·FOMC 첫 인상 후 반도체 성장주 재진입 서사 축",
        "result": "hit",
        "actual": 4.1
      },
      {
        "label": "삼성전자",
        "ticker": "005930",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 종가 253,500원 +2.01% 반등·IT 섹터 최강 카테고리 반등 지속·HBM4 양산 로드맵·삼성 P4 라인 발주 재개 기대가 monetization 상단 확장 축, 원익IPS·유진테크 등 반도체 장비 후방 급등이 카테고리 자금 유입 시나리오·FOMC 첫 인상 확정 후 방향성 확인·외국인 SK하이닉스 중심 매수 전환 흐름이 대형주 동반 반등 카타리스트",
        "result": "hit",
        "actual": 2
      },
      {
        "label": "TSLA",
        "ticker": "TSLA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 종가 357.87달러 +0.4% 소폭 반등·머스크 CEO 250만주 자사주 매수(10억달러 규모) 재조명·로보택시 Austin 확장 파이프·상하이 FSD 라이센스 서사가 monetization 상단 확장 축, FOMC 25bp 첫 인상 확정 후 EV 카테고리 듀레이션 카운터 완화 시 반등 시나리오·Cybercab 대량 생산 시점 재확인이 상단 지지 축",
        "result": "hit",
        "actual": 0.3
      }
    ]
  },
  {
    "date": "2026-09-16",
    "made": "2026-09-16 07:40 KST",
    "predictions": [
      {
        "label": "LG에너지솔루션",
        "ticker": "373220",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 365,500원 +4% 강세 지속 관측·2차전지 순환매 3일차 확산·ESS 수요 확대 재점화·조선·방산 급락 대비 방어 성격 부각이 sector rotation 렌즈 최대 카타리스트, 미 ESS 수주·AI 데이터센터 전력 후방 수요 서사가 monetization 상단 확장 축으로 수요일 갭업 유입 시나리오",
        "result": "hit",
        "actual": 4
      },
      {
        "label": "HD한국조선해양",
        "ticker": "009540",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 339,000원 -6.7% 급락 후 기술적 반등 관측·조선주 이익실현 최대 낙폭 소화·미 함정 사이클 상단·MASGA 정책·LNG 컨선 수주 파이프 서사가 monetization 하방 지지 축, 수주잔고 609억달러 서사가 카테고리 상단 재정의 카타리스트로 수요일 저가매수 유입 시나리오",
        "result": "miss",
        "actual": -6.7
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 212.35달러 +0.7% 강세 유지·화요일 -3.26% 급락 후 저가매수 유입 관측·GB300 Blackwell Ultra·HBM4 수요 서사·오라클 RPO 6,640억달러 백로그 하방 지지 유효, 9/16 FOMC 25bp 인상 컨센 부합 시 안도 반등 시나리오·성장 카테고리 리레이팅 최대 카타리스트",
        "result": "hit",
        "actual": 0
      }
    ]
  },
  {
    "date": "2026-09-15",
    "made": "2026-09-15 07:40 KST",
    "predictions": [
      {
        "label": "한화에어로",
        "ticker": "012450",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,137,000원 +5.2% 강세 지속 관측·브렌트 108달러 근접·사우디 우회 송유관 피격·NATO 방위비 5% 목표 후방이 방산 카테고리 상단 카타리스트, 코스피 -3.26% 급락 국면에서 방산 방어 성격 최대 부각·K2PL 폴란드 3차 210대 연내 서명 임박 서사가 화요일 갭업 유입 시나리오",
        "result": "hit",
        "actual": 5.2
      },
      {
        "label": "CRWD",
        "ticker": "CRWD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 219.35달러 +6.1% 급등 지속 관측·AI 감속 담론 확산 국면에서 사이버보안 방어 카테고리 순환매 유입이 sector rotation 렌즈 최대 카타리스트, PANW +4.8%·ZS +4.8% 동조 강세·엔터프라이즈 SaaS 매출 카테고리 상단 확장 서사가 화요일 후속 매수 유입 시나리오",
        "result": "hit",
        "actual": 0
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "down",
        "rationale": "직전 거래일 종가 212.37달러 -2.7% 조정 후속 하방 관측·다리오 아모데이 앤트로픽 CEO 9/12 AI 감속 촉구·샘 알트먼 즉시 동조 담론 확산이 GPU 수요 프레임 재정의 카운터, 9/16 FOMC 25bp 인상 확률 93% 정착·성장 카테고리 듀레이션 카운터가 화요일 추가 하방 시나리오",
        "result": "miss",
        "actual": 0.6
      }
    ]
  },
  {
    "date": "2026-09-14",
    "made": "2026-09-11 07:40 KST",
    "predictions": [
      {
        "label": "한미반도체",
        "ticker": "042700",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 253,000원 +1% 강세 유지·오라클 Q1 FY27 매출 193억달러 +30%·잔여계약 6,640억달러 폭발이 HBM 후공정 CAPEX 재확인 카타리스트, TC본더 71% 점유·HBM4 세대 전환 서사가 후공정 카테고리 지배력 축으로 월요일까지 갭업 유입 시나리오",
        "result": "miss",
        "actual": -8.7
      },
      {
        "label": "AMD",
        "ticker": "AMD",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 513달러 -1.6% 조정 국면·오라클 CAPEX 900억달러 조달·클라우드 인프라 +121% 검증이 GPU 카테고리 광범위 수요 재확인 카타리스트, MI400 시리즈 세대 전환·엔비디아 GPU 대안 서사가 카테고리 상단 반전 유입 시나리오",
        "result": "hit",
        "actual": 2.5
      },
      {
        "label": "컴투스",
        "ticker": "078340",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 34,850원 +11.7% 급등 마감·신작 매출 서프라이즈 선반영 국면·단기 급등 후 차익실현 압력 카운터가 방향 결정 축, 코스닥 게임 카테고리 순환매 3일차 확산 후 월요일 이익실현 매물 유입 시나리오",
        "result": "hit",
        "actual": 0.4
      }
    ]
  },
  {
    "date": "2026-09-10",
    "made": "2026-09-10 07:37 KST",
    "predictions": [
      {
        "label": "삼성SDI",
        "ticker": "006400",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 574,000원 +8.3% 급등 마감·미 ESS 수주 확대 관측·AI 데이터센터 전력 후방 최대 카타리스트가 카테고리 상단 모멘텀 지속 축, 2차전지 순환매 3일차 확산·양극재·전해액·리튬 소재 카테고리 확산 서사가 상단 유입 재점화 시나리오",
        "result": "hit",
        "actual": 8.3
      },
      {
        "label": "META",
        "ticker": "META",
        "market": "US",
        "direction": "up",
        "rationale": "641.71달러 +4.6% 급등 마감·오픈AI GPT-6 광고 파트너십 확장 관측·페이스북·인스타그램 AI 광고 지표 모멘텀 재점화가 카테고리 상단 카타리스트, Reels·Threads AI 추천 알고리즘 개선·Meta AI 어시스턴트 광고 인벤토리 확장 서사가 광고 유닛 이코노믹스 축",
        "result": "miss",
        "actual": -0.8
      },
      {
        "label": "대덕전자",
        "ticker": "353200",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 106,100원 +6.2% 강세 유지·애플 파크 이벤트 종료 후 아이폰 18 Pro·폴더블 아이폰 Ultra 공개 카타리스트가 부품 벤더 재점화 축, HBM 후방 기판·MLCC 순환매 확산 서사가 카테고리 상단 유입 재점화 시나리오",
        "result": "hit",
        "actual": 6.2
      }
    ]
  },
  {
    "date": "2026-09-09",
    "made": "2026-09-09 07:40 KST",
    "predictions": [
      {
        "label": "LG이노텍",
        "ticker": "011070",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 545,000원 -7.0% 급락 후 오늘 밤 애플 'Surprise and Shine' 이벤트에서 폴더블 아이폰 Ultra·아이폰 18 Pro 물량 확정 대기 국면·2나노 A20 Pro 카메라 락인 서사가 카테고리 상단 카타리스트로 물량 확정 기대 반등 시나리오",
        "result": "miss",
        "actual": -7
      },
      {
        "label": "ORCL",
        "ticker": "ORCL",
        "market": "US",
        "direction": "up",
        "rationale": "166.25달러 +4.7% 강세로 마감·9/10 Q1 FY27 실적 D-1 진입에서 컨센 매출 191억달러·EPS 1.30달러·RPO 6,380억달러 검증 대기·Stargate 3,000억달러 백로그 갱신 서사가 매수 유입 지속 카타리스트·옵션 시장 11% 무브 프라이싱이 서프라이즈 대기 축",
        "result": "hit",
        "actual": 0.9
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "230.89달러 +0.2% 관망 마감·허깅페이스 129억달러 인수(9/3) 개발자 1,800만 lock-in 재확인·오라클 9/10 Q1 실적에서 Stargate 백로그 갱신 시 AI 인프라 카테고리 상단 재확장·TSM +1.3% 후행 상승 서사가 반도체 순환매 축",
        "result": "hit",
        "actual": 0
      }
    ]
  },
  {
    "date": "2026-09-08",
    "made": "2026-09-08 07:40 KST",
    "predictions": [
      {
        "label": "SK하이닉스",
        "ticker": "000660",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,783,000원 +8.3% 급등·카운터포인트 HBM4 SK 50% 점유·엔비디아 물량 70% 확보 서사 유지·삼성·SK D램 재고 10일 하방으로 공급 병목 상단 축·외국인 1조3,714억원 순매수 화요일 매수 지속 기대·미 증시 리오픈 반도체 카테고리 상단 연동 시나리오",
        "result": "hit",
        "actual": 8.3
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,016.59달러 +6.1% 강세·HBM4 세대 전환 카테고리 리레이팅 축·엔비디아 Vera Rubin 1분기 상용 진입 서사 유지·SK하이닉스 178만원 +8.3% 폭등 후방 사이클 확인·미 증시 화요일 리오픈 나스닥 선물 +0.9% 회복 편승·오라클 9/10 Q1 실적 대기 카타리스트",
        "result": "hit",
        "actual": 6.1
      },
      {
        "label": "LG에너지솔루션",
        "ticker": "373220",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 362,500원 +1.1% 소폭 상승 국면·유가 93달러 급등·지정학 프리미엄 확대가 이차전지 카테고리 카운터 축·미 매파 재부각 확률 50/50·달러 강세 재부각 시나리오·8월 CPI 상방 리스크 대기·이차전지 이익실현 재부각 시나리오",
        "result": "miss",
        "actual": 1.1
      }
    ]
  }
];
