const updates = [
  {
    "date": "2026-10-01 19:20 KST",
    "summary": "마이크론 1,069달러 - FY26 Q4 HBM 매출 20억달러 record 첫 돌파\n엔비디아 229달러 +0.5% - Vera Rubin·HBM4 서사 지지, 대장주 프리미엄 유지\n노스롭 그루먼 -4.2%·GM -4.3% - 방산·자동차 분기말 조정\n셧다운 회피 확정 - 임시예산 12/11까지 연장, 정치 리스크 완화\nConstellation +2.8%·HII +2.9% - 원전·조선 테마 매수 회귀",
    "changes": [
      {
        "time": "2026-10-01 19:15 KST",
        "type": "반도체·AI",
        "sector": "반도체",
        "detail": "Micron(MU)·NVIDIA(NVDA)·Broadcom(AVGO)·Lam Research(LRCX). Micron 1,069달러 +0.4%·NVIDIA 229.61달러 +0.5%·Broadcom 353달러 +0.5%·Lam Research 321달러대 강세 유지가 오늘 반도체 밸류체인 축, Micron FY2026 Q4 매출 500억달러·GM 86%·HBM 매출 20억달러 record 첫 돌파·2026년 HBM 완판·6개 고객 확장·잔여 이행의무 1,000억달러 서사가 근거. capability 렌즈로는 HBM4 2Q26 shipping·1-gamma 노드 CAPEX 200억달러 확장 축, monetization 렌즈로는 HBM3e 대비 HBM4 프리미엄 20~25%·gross margin 신기록 지지 축, sector rotation 렌즈로는 반도체 매수 회귀 지속 축, 시나리오 렌즈로는 10/3 NFP·10/10 CPI가 11월 25bp 인하 확률 재확인 카타리스트."
      },
      {
        "time": "2026-10-01 19:15 KST",
        "type": "방산·자동차",
        "sector": "방산",
        "detail": "Northrop Grumman(NOC)·General Motors(GM)·Huntington Ingalls(HII). Northrop Grumman 483.48달러 -4.2%·GM 77달러 -4.3% 조정·HII 267달러 +2.9% 반등이 오늘 방산·자동차 축, NOC·GM 분기말 차익 실현 확산·HII 미 해군 조선 백로그 서사 지지가 근거. monetization 렌즈로는 NOC B-21·전략무기 백로그 유지 vs 분기말 매도 대치 축, cross-asset 렌즈로는 GM 미국 EV·픽업 판매 둔화 우려·HII 미 해군 50억달러 백로그 서사 축, sector rotation 렌즈로는 방산·자동차 조정 vs 조선·원전 매수 회귀 대치 축, 시나리오 렌즈로는 4분기 Q3 실적 가이던스가 반등 분기점."
      },
      {
        "time": "2026-10-01 19:15 KST",
        "type": "매크로·정책",
        "sector": "지수·매크로",
        "detail": "S&P 500·나스닥·다우·10년물 국채·정치 리스크. 어제 종가 부근 유지되는 3대 지수·미 정부 stopgap 예산 12/11까지 연장·10/1 셧다운 회피 확정이 오늘 정책 축, 미 8월 PCE 완화 관측·Micron HBM record 조합이 위험선호 유지 근거. cross-asset 렌즈로는 10년물 4.6% 안정 국면·달러인덱스 관망에서 정치 리스크 완화가 위험선호 축, 정책 렌즈로는 11월 FOMC 25bp 인하 확률 95% 유지·12월 추가 25bp 관측 유지 축, sector rotation 렌즈로는 반도체·에너지 매수 유지 vs 방어주 조정 대치 축, institutional flow 렌즈로는 3Q 실적 시즌 앞두고 매수 재유입 기대 축, 시나리오 렌즈로는 10/3 NFP·10/10 CPI·10/29 FOMC가 4Q 방향 카타리스트."
      },
      {
        "time": "2026-10-01 19:15 KST",
        "type": "AI 인프라 전력",
        "sector": "전력·그리드",
        "detail": "Constellation Energy(CEG)·Bloom Energy(BE)·Talen Energy(TLN). Constellation 261.20달러 +2.8% 반등·Bloom Energy 271달러대 강세 유지·Talen Energy 관망이 오늘 전력 축, AI 데이터센터 SOFC 수주 재점화·Micron·NVIDIA CAPEX 확대 사이클 지속·하이퍼스케일러 PPA 파이프 확대가 근거. capability 렌즈로는 CEG 원전 PPA 파이프·Bloom SOFC 배치 확장·Talen 원전 베이스로드 축, monetization 렌즈로는 하이퍼스케일러 20년 PPA 상단 확장·원전 밸류 리레이팅 축, sector rotation 렌즈로는 AI 인프라 전력 매수 회귀 축, 시나리오 렌즈로는 4분기 신규 하이퍼스케일러 PPA 계약이 랠리 재점화 카타리스트."
      },
      {
        "time": "2026-10-01 19:15 KST",
        "type": "사이버보안·클라우드",
        "sector": "사이버보안",
        "detail": "Qualys(QLYS)·Snowflake(SNOW). Qualys 187.20달러 +5%·Snowflake 339.56달러 +2.8% 강세가 오늘 소프트웨어 축, 사이버보안 수요 확대 서사·클라우드 데이터 플랫폼 매출 상단 가이던스 서사가 근거. capability 렌즈로는 Qualys 취약점 관리 리더십·Snowflake AI 데이터 통합 축, monetization 렌즈로는 Snowflake 소비 기반 매출 모델 상단 확장·Qualys ARR 성장 축, sector rotation 렌즈로는 반도체 조정 국면에서 소프트웨어·사이버보안 매수 유입 축, 시나리오 렌즈로는 4분기 실적 가이던스가 멀티플 재점화 카타리스트."
      }
    ]
  }
];
