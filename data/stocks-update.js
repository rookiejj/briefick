const updates = [
  {
    "date": "2026-10-06 07:15 KST",
    "summary": "나스닥 27,477 +1.05% 신고가 - 3일 연속 레코드, 테크 랠리 지속\nS&P 500·다우 동반 신고가 - 분기 전환 매수와 연말 랠리 서사 유지\n셧다운 Day 6 지속 - 10/15 9월 CPI 발표 지연 리스크 확산\n10/7(수) FOMC 9월 회의록 - 25bp 인하 경로 톤이 분수령\n9월 payrolls +29K 쇼크 - 실업률 4.2% 반등, 완화 기조 지지",
    "changes": [
      {
        "time": "2026-10-06 07:12 KST",
        "type": "매크로·정책",
        "sector": "지수·매크로",
        "detail": "S&P 500·Nasdaq·Dow·10년물·DXY·셧다운. Monday 10/5 Nasdaq 27,477.31 +1.05% 신고가 3일 연속 레코드·S&P 500 7,773.95 +0.66%·Dow 51,267.90 +0.18% 동반 신고가가 축, Friday 9월 payrolls +29,000 쇼크 저조·실업률 4.2% 반등·앞 두 달 -60,000 하향 조정·완화 기조 지지 서사·미 셧다운 Day 6 BLS 데이터 공백 장기화·CPI 10/15 발표 지연 리스크 확산·10/7(수) 9월 15~16일 FOMC 회의록 2PM ET 공개·CME FedWatch 10/29 25bp 인하 95% 확률 유지가 근거. cross-asset 렌즈로는 미 10년물 4.5%대·DXY 약세 유지에서 금 4,250달러 사상 최고 안전자산 동반 강세 축, 정책 렌즈로는 10/7 FOMC 회의록 톤·셧다운 장기화가 데이터 드라우트 프리미엄 축, institutional flow 렌즈로는 분기 전환 매수·연말 랠리 서사 유지 축, 시나리오 렌즈로는 10/14 JPM·Citi Q3 어닝 공식 개막·10/29 FOMC 25bp 인하가 리스크온 지속 카타리스트."
      },
      {
        "time": "2026-10-06 07:12 KST",
        "type": "반도체·장비",
        "sector": "반도체",
        "detail": "NVIDIA(NVDA)·AMD·Micron(MU)·Applied Materials(AMAT)·Lam Research(LRCX)·KLA(KLAC). Monday 10/5 NVDA 237.21달러 +1.4%·AMD 628.83달러 -0.8% 조정·MU 1,065달러 -0.9% 숨고르기·AMAT 536달러 -0.7%·LRCX 344달러 -0.8%·KLAC 소폭 조정이 축, Micron 다음 분기 500억달러 가이던스·데이터센터 Q3 매출 250억달러·HBM4 2026년말 솔드아웃·Nvidia 5년 전략 공급 계약·Vera Rubin 1Q26 양산 가이던스 재확인·앤스로픽 1조달러 상장 로드쇼로 GPU 수요 가시성 재점화가 근거. capability 렌즈로는 NVDA Vera Rubin 아키텍처 리드·HBM4 11Gbps pin-speed 리드 축, monetization 렌즈로는 HBM3e→HBM4 프리미엄 20~25%·WFE 매출 리레이팅 축, 시나리오 렌즈로는 10월 하순 Q3 WFE 가이던스 상향·NVDA/AMD GPU 추가 계약 공식화가 카타리스트."
      },
      {
        "time": "2026-10-06 07:12 KST",
        "type": "자동차·모빌리티",
        "sector": "자동차·모빌리티",
        "detail": "Tesla(TSLA)·Rivian(RIVN)·GM·Ford(F). Monday 10/5 종가 TSLA 377.67달러 +1.9% 신고가 레인지 유지·RIVN·GM·F 자동차 섹터 혼조가 축, Tesla Q3 인도 486,532대 공식 발표·컨센 461,974대 상회 사상 최대·Model 3/Y 478,237대·에너지 ESS 13.7GWh record·EV 세액공제 종료 전 수요 가속·10/21 Q3 실적 분기점이 근거. capability 렌즈로는 상하이·베를린·오스틴 캐파·Model Y Juniper 램프업·FSD V13 배포 임박 축, monetization 렌즈로는 Q3 매출·마진 상단·에너지 ESS 매출 record 동반 축, cross-asset 렌즈로는 리튬 급등 후방 2차전지 수혜 동조 축, 시나리오 렌즈로는 10/21 Q3 실적·FSD V13 롤아웃이 리레이팅 카타리스트."
      },
      {
        "time": "2026-10-06 07:12 KST",
        "type": "전력·AI 인프라",
        "sector": "전력·AI 인프라",
        "detail": "Vistra(VST)·Constellation Energy(CEG)·Talen Energy(TLN)·NuScale(SMR)·GEV. Monday 10/5 종가 VST 145.43달러 +3.9%·CEG 267.75달러 +4%·TLN 333.44달러 +3.9%·SMR 7.75달러 보합·GEV 전력·AI 인프라 섹터 강세 재점화가 축, AI 데이터센터 전력 수요 재점화·AMD-OpenAI 6GW GPU 멀티년 공식·MSFT 쓰리마일 재가동·Oracle 10GW DC 100억달러 Nvidia 계약 재확인·4분기 추가 PPA 발표 기대·Vera Rubin 양산이 근거. monetization 렌즈로는 AI 데이터센터 PPA·장기 공급 계약 리레이팅 축, cross-asset 렌즈로는 미 10년물 4.5%대 유지에서 유틸리티 밸류 지지 축, 정책 렌즈로는 미 원전 재가동·SMR 상용화 가속 축, 시나리오 렌즈로는 4분기 추가 PPA·원전 재가동 승인이 재리레이팅 카타리스트."
      }
    ]
  }
];
