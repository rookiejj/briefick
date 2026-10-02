const updates = [
  {
    "date": "2026-10-03 07:20 KST",
    "summary": "S&P500·나스닥 Friday 급반등 - 지수 +2%대 동반 상승 매수 회귀 가속\n파월 10/29 25bp 인하 재확인 - CME FedWatch 95.7% 확률 유지\n테슬라 Q3 인도 486,000대 - 컨센 454,000대 대폭 상회 사상 최대\n엔비디아 235달러 +2.1% - AMAT·LRCX 반도체 장비 트리오 재점화\n미 셧다운 3일차 - NFP 발표 무기한 연기, CPI 10/15 지연 리스크 확산",
    "changes": [
      {
        "time": "2026-10-03 07:15 KST",
        "type": "매크로·정책",
        "sector": "지수·매크로",
        "detail": "S&P 500·Nasdaq·Dow·10년물·DXY. Friday 10/2 S&P500 +1.97%·Dow +2.47%·Nasdaq100 +2.15% 급반등 마감이 축, 파월 NABE 필라델피아 연설에서 10/29 25bp 인하 확인·CME FedWatch 95.7% 확률 유지·美 셧다운 3일차 상·하원 CR 동시 부결(S.2882 46-52·H.R.5371 54-44)·NFP 발표 무기한 연기가 근거. cross-asset 렌즈로는 미 10년물 4.5%대 하락·금 4,200달러 돌파 안전자산 동반 축, 정책 렌즈로는 셧다운 장기화 시 CPI 10/15·PPI 지연 리스크 확산 축, institutional flow 렌즈로는 분기 전환 매수·연말 랠리 서사 가속 축, sector rotation 렌즈로는 반도체·AI SW·전력·우주 매수 회귀 축, 시나리오 렌즈로는 10/29 FOMC 25bp 인하가 리스크온 지속 카타리스트."
      },
      {
        "time": "2026-10-03 07:15 KST",
        "type": "반도체·장비",
        "sector": "반도체",
        "detail": "NVIDIA(NVDA)·Applied Materials(AMAT)·Lam Research(LRCX)·Micron(MU)·AMD. NVDA 235.62달러 +2.1%·AMAT 544.32달러 +2.8%·LRCX 350.56달러 +3.1%·KLAC 206.81달러 +3.2%·MU 1,108.60달러 +1%·AMD 633.05달러 +2.8% 반도체 트리오 강세 지속이 축, Terafab(Tesla·SpaceX·xAI) WFE 공급 서사 지속·BofA 반도체 장비 top picks 재부각·HBM4 2Q26 shipping 궤도·Vera Rubin 1Q26 양산 가이던스 재확인이 근거. capability 렌즈로는 NVDA 아키텍처 리드·AMAT EPI/CVD·LRCX etch 리드 축, monetization 렌즈로는 WFE 매출 리레이팅 지속·HBM3e→HBM4 프리미엄 20~25% 축, sector rotation 렌즈로는 반도체 매수 회귀 3일차 레버리지 확산 축, cross-asset 렌즈로는 한국 삼성·하이닉스 추석 후 동조 상승 서사 축, 시나리오 렌즈로는 Q3 WFE 가이던스 상향이 카타리스트."
      },
      {
        "time": "2026-10-03 07:15 KST",
        "type": "자동차·모빌리티",
        "sector": "자동차·모빌리티",
        "detail": "Tesla(TSLA). TSLA 361.95달러 +2.2% 강세가 축, Q3 인도 486,000대 공식 발표·컨센 454,000대 대폭 상회·사상 최대 분기 인도 기록·Model 3/Y 478,237대·총 생산 464,000대가 근거. capability 렌즈로는 상하이·베를린·오스틴 생산 캐파 확대·Model Y Juniper 램프업 축, monetization 렌즈로는 Q3 매출·마진 상단 기대·에너지 ESS 매출 동반 상승 축, cross-asset 렌즈로는 리튬 급등·국내 2차전지 테마 동조 축, institutional flow 렌즈로는 Q3 실적(10/21 발표)·FSD V13 가이던스 재점화 축, 시나리오 렌즈로는 10/21 Q3 실적·FSD V13 배포가 리레이팅 카타리스트."
      },
      {
        "time": "2026-10-03 07:15 KST",
        "type": "전력·에너지",
        "sector": "전력·원자력",
        "detail": "Constellation Energy(CEG)·Vistra(VST)·Talen Energy(TLN). CEG 262.42달러 +1.4%·VST 142.25달러 +1.8%·TLN 327.51달러 +1.4% 전력·원전 동반 강세 지속이 축, AI 데이터센터 PPA 확대 서사 지속·CEG 쓰리마일 Unit 1 2028 재가동 궤도·VST Comanche Peak 확장·TLN AWS 공급 가이던스 유지가 근거. capability 렌즈로는 CEG MSFT 20년 PPA·VST 데이터센터 PPA 리드 축, monetization 렌즈로는 20년 장기 PPA 매출 가시성 축, sector rotation 렌즈로는 반도체 랠리에서 전력 테마 동반 상승 축, cross-asset 렌즈로는 미 10년물 하락·AI CAPEX 서사 유지 축, 시나리오 렌즈로는 4분기 추가 PPA 계약이 모멘텀 카타리스트."
      },
      {
        "time": "2026-10-03 07:15 KST",
        "type": "금융·은행",
        "sector": "금융·은행",
        "detail": "Citigroup(C)·Bank of America(BAC)·Wells Fargo(WFC)·Goldman Sachs(GS)·JPMorgan(JPM). Citi 128.89달러 +1.5%·BAC 54.17달러 +0.8%·WFC 80.65달러 +0.5%·GS 907달러 +1.2%·JPM 335.50달러 +0.7% 은행주 동반 회복이 축, Q3 실적 발표 다음 주 임박(10/14 JPM·Citi 가이던스)·NIM 하방 압력 vs 트레이딩·IB 수수료 상단 기대 대치가 근거. monetization 렌즈로는 Q3 트레이딩·IB 수수료 record 기대 축, cross-asset 렌즈로는 미 10년물 하락에서 NIM 전망 완화 대치 축, institutional flow 렌즈로는 분기 전환 매수 유입 축, 정책 렌즈로는 11월 FOMC 25bp 인하 95% 유지가 신용 서사 지지 축, 시나리오 렌즈로는 10/14 JPM·Citi Q3 실적이 섹터 톤 재설정 카타리스트."
      }
    ]
  }
];
