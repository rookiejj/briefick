// 예측 스코어카드 — 하루 3종목 방향 예측 + 당일 prices-snapshot 자동 채점
// 최신순, 최대 7건. 에이전트가 매일 prepend + 채점 + 트리밍.
//
// direction: "up" | "down"
// result:    null(채점 전) | "hit" | "miss"
//   hit  — 예측 방향 일치 (|actual| ≥ 0.5%) OR 소폭 움직임 (|actual| < 0.5%)
//   miss — 예측 방향 반대 (|actual| ≥ 0.5%)
const PREDICTION_SCORECARD = [
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
  },
  {
    "date": "2026-09-22",
    "made": "2026-09-22 07:40 KST",
    "predictions": [
      {
        "label": "SK C&C",
        "ticker": "034730",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 575,000원 +5.5% 급등 마감 후 mean reversion 시나리오·금융 IT 카테고리 자사주 매입 기대 소화 후 차익매물 예상, 반도체 대장주 강세 국면에서 순환매 자금 이탈 축·오늘 세션 개인 차익 실현 압박이 하방 카운터 축, 다만 3분기 실적 시즌 앞둔 밸류 리레이팅 흐름·AI 데이터센터 수주 서사가 카테고리 후방 지지",
        "result": "miss",
        "actual": 5.5
      },
      {
        "label": "MU",
        "ticker": "MU",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 1,035.27달러 +1.9% 강세 마감·HBM 수요 재확인·AI 메모리 카테고리 상단 재정의 서사가 monetization 상단 확장 축, 젠슨 황 CEO 내년 AI 칩 매출 두 배 전망 여진·엔비디아 시총 5조달러 근접이 후방 지지 축·SK하이닉스·삼성전자 HBM4 캐파 확산 국면에서 마이크론 캐파 확장 서사가 상단 지지 축·10년물 진정 흐름에서 성장주 리레이팅 재점화 시나리오",
        "result": "hit",
        "actual": 0.1
      },
      {
        "label": "COIN",
        "ticker": "COIN",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 204.38달러 +5.2% 반등 마감·비트코인 8만 5,000달러 회복·리스크선호 재점화 흐름이 카타리스트 최대 축, MSTR +7.5%·HOOD +5.3% 크립토 관련주 전방위 반등 국면 지속·SEC 크립토 프레임워크 정착·솔라나·XRP ETF 승인 후속 진전 서사가 프리미엄 지지 축·달러인덱스 조정 흐름에서 크립토 매수 재점화 시나리오",
        "result": "hit",
        "actual": 0.5
      }
    ]
  },
  {
    "date": "2026-09-21",
    "made": "2026-09-18 07:35 KST",
    "predictions": [
      {
        "label": "한화시스템",
        "ticker": "272210",
        "market": "KR",
        "direction": "down",
        "rationale": "직전 거래일 종가 77,500원 +12.6% 급등 마감 후 mean reversion 시나리오·MSPO 2026 우주 AI 솔루션 카타리스트 소화 후 차익매물 예상, 방산 카테고리 대장주 급등 후 월요일 세션 순환매 종료 여부가 관건·외국인 7거래일 연속 순매도 국면에서 개별 종목 차익 실현 압박이 하방 카운터 축, 다만 유럽 방산 CAPEX 재점화·NATO 재무장 사이클이 카테고리 후방 지지",
        "result": "miss",
        "actual": 3.2
      },
      {
        "label": "한국항공우주",
        "ticker": "047810",
        "market": "KR",
        "direction": "up",
        "rationale": "직전 거래일 종가 130,400원 +4.2% 반등 마감·방산·우주 카테고리 순환매 재점화·경남 클러스터 서사 유지가 monetization 상단 확장 축, 한화 기업결합 심사 진전·MSPO 2026 폴란드 방산 전시회 여진이 카타리스트 축, KF-21 보라매·T-50 양산·수리온 파이프 서사가 프리미엄 지지 축·한국 우주항공청 본격 가동이 카테고리 재정의 카타리스트",
        "result": "miss",
        "actual": -0.5
      },
      {
        "label": "NVDA",
        "ticker": "NVDA",
        "market": "US",
        "direction": "up",
        "rationale": "직전 거래일 종가 217.22달러 +1.6% 반등 마감·FOMC 25bp 첫 인상 소화 후 저가 매수 재확산·Anthropic 100억달러 투자 검토 보도가 카타리스트 최대 축, Blackwell Ultra·Rubin 로드맵·H200 백로그·데이터센터 매출 상단 재확인이 프리미엄 지지 축·AI 팩토리 CAPEX 사이클 하반기 지속 서사가 상단 지지 축·주말 매크로 이벤트 부재 시 모멘텀 지속 시나리오",
        "result": "hit",
        "actual": 1.3
      }
    ]
  },
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
  }
];
