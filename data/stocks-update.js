const updates = [
  {
    "date": "2026-09-15 07:20 KST",
    "summary": "반도체 장비주 급락 - AMAT·LRCX -6~9%, AI 감속 담론 후폭풍\n엔비디아 212달러 -2.7% - AI CAPEX 감속 우려에 하방\nCRWD +6.1%·PANW +4.8% - 사이버 방어 순환매 유입\nFOMC 9/16 D-1 - 25bp 인상 확률 93%\n데이터센터 급락 - VRT·HPE -7~9%, AI CAPEX 감속 프레임",
    "changes": [
      {
        "time": "2026-09-15 07:20 KST",
        "type": "매크로",
        "sector": "채권·금리",
        "detail": "이번 주 9/15~16 FOMC 방향 결정 최대 카타리스트. Kevin Warsh 의장 매파 스탠스 이후 CME FedWatch 25bp 인상 확률 93%로 상향 정착·연말 추가 인상 관측 확산이 매파 서사 축, 미 8월 CPI 헤드라인 3.4% YoY 컨센 부합·코어 0.3% MoM 소폭 상회·PPI 5.4% YoY가 인상 근거. 미 10년물 4.96% 5% 근접에서 소폭 후퇴·사우디 우회 송유관 피격에 유가 재점화가 인플레 부담 카운터 축, cross-asset 렌즈로는 유가 108달러 근접·매파 기조가 위험자산 리레이팅 카운터 축, 정책 렌즈로는 Barclays·Goldman 등 셀사이드 12월 추가 인상 관측 확산이 시장 최대 관심축."
      },
      {
        "time": "2026-09-15 07:20 KST",
        "type": "반도체 장비",
        "sector": "반도체",
        "detail": "AMAT·LRCX·KLAC·ASML 반도체 장비 카테고리 광폭 급락. 다리오 아모데이 앤트로픽 CEO 9/12 프론티어 AI 감속 촉구 발언·샘 알트먼 OpenAI CEO 동조가 WFE(Wafer Fab Equipment) 오더북 카테고리 최대 카운터 축, AMAT 425달러 -6.9%·LRCX 272.70달러 -8.6%·KLAC 167.23달러 -7.4%·ASML 5% 후퇴가 카테고리 상단 재정의 카타리스트. capability 렌즈로는 GB300·HBM4 수요 서사 유효하나 감속 프레임이 상단 확장 카운터, monetization 렌즈로는 오라클 RPO 6,640억달러가 하방 지지 축, cross-asset 렌즈로는 SOXX -5% vs SPY -0.5% 편차가 카테고리 리레이팅 최대 카타리스트, sector rotation 렌즈로는 반도체 장비 매도·사이버보안 매수 로테이션 최대 부각."
      },
      {
        "time": "2026-09-15 07:20 KST",
        "type": "반도체",
        "sector": "AI 반도체",
        "detail": "엔비디아(NVDA) 212.37달러 -2.7%·AMD 486.35달러 -5.8%·마이크론(MU) 914.72달러 -6.2%·Broadcom(AVGO) 347.01달러 -4.1% 동반 급락. AI 감속 담론 확산이 GB300 GPU·HBM4·Jalapeño ASIC 후방 수요 프레임 재정의 카타리스트, ARM 246.19달러 -7%·INTC 96.13달러 -6.6% 카테고리 광폭 매도가 sector rotation 렌즈 최대 카운터. capability 렌즈로는 GB300·Rubin Ultra 세대 전환 서사 유지하나 감속 프레임이 카테고리 상단 카운터 축, monetization 렌즈로는 오라클 클라우드 인프라 +121%·RPO 6,640억달러가 중장기 매출 가시성 하방 지지 축, cross-asset 렌즈로는 9/16 FOMC 25bp 인상 확률 93% 정착이 성장 카테고리 듀레이션 카운터 축."
      },
      {
        "time": "2026-09-15 07:20 KST",
        "type": "인프라",
        "sector": "데이터센터",
        "detail": "Vertiv(VRT) 235달러 -8.6%·HPE 56.58달러 -8.9%·GE Vernova(GEV) 887.10달러 -7.3%·Eaton(ETN) 396.77달러 -6.7% 데이터센터·전력 인프라 광폭 급락. AI 감속 담론 확산이 데이터센터 CAPEX 사이클 프레임 재정의 카타리스트, behind-the-meter 전력·냉각 카테고리 광폭 매도가 sector rotation 렌즈 최대 카운터. capability 렌즈로는 850MW 오라클 데이터센터 인도 서사 유효하나 감속 프레임이 카테고리 상단 카운터, monetization 렌즈로는 Stargate 10GW 사이클 서사가 중장기 하방 지지 축, cross-asset 렌즈로는 데이터센터 인프라 -7~9% 급락이 AI 인프라 CAPEX 서사 프레임 재정의 최대 카타리스트."
      },
      {
        "time": "2026-09-15 07:20 KST",
        "type": "사이버보안",
        "sector": "사이버보안",
        "detail": "CrowdStrike(CRWD) 219.35달러 +6.1%·Palo Alto(PANW) 346.51달러 +4.8%·Zscaler(ZS) 172.50달러 +4.8% 사이버보안 카테고리 광폭 강세. AI 감속 담론 국면에서 방어 카테고리 순환매 유입이 sector rotation 렌즈 최대 카타리스트, 반도체·데이터센터 인프라 매도 자금이 사이버 방어 카테고리로 재분배 축. capability 렌즈로는 AI 사이버 위협 공동 경고 서사 유지·PANW CyberArk 250억달러 시너지 서사 지속, monetization 렌즈로는 엔터프라이즈 SaaS 매출 카테고리 상단 확장 축, cross-asset 렌즈로는 매파 인상 확률 93% 정착 국면에서 방어 소프트웨어 카테고리 상대 강세가 위험선호 리레이팅 카운터 축."
      }
    ]
  }
];
