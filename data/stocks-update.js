const updates = [
  {
    "date": "2026-11-04 07:15 KST",
    "summary": "엔비디아 208.80달러 +3.3% - AI 인프라 바스켓 복귀 주도, 11/19 Q3 FY27이 리더십 분수령\n델·HPE +5%대 반등 - AI 서버 바스켓 매도 소화, 하이퍼스케일러 CAPEX 재검증\nAMD 490.61달러 +5.1% - 11/4 AMC Q3 D-day 앞 반등, MI350 수요·FY27 가이던스 분수령\n블룸에너지 +8.9% 급등 - AI 데이터센터 연료전지 랠리 지속, 전력 CAPEX 리더십\n팔란티어 -3.9% post-earnings 매물 - Q3 서프라이즈에도 밸류 재점검 지속",
    "changes": [
      {
        "time": "2026-11-04 07:15 KST",
        "type": "AI 인프라",
        "sector": "AI 플랫폼",
        "detail": "NVIDIA(NVDA)·Oracle(ORCL)·Marvell(MRVL)·Micron(MU)·AMD. 11/3 종가 NVDA 208.80달러 +3.3%·ORCL 122.95달러 +3.2%·MRVL 172.02달러 +0.4%·MU 867.52달러 +4.1%·AMD 490.61달러 +5.1% AI 인프라 바스켓 전면 반등. 월요일 디레이팅 매물 소화 지속·메가캡 CAPEX 재검증 레버리지가 축. 11/4 AMC AMD Q3 D-day, 11/19 NVIDIA Q3 FY27·HBM4 LTA 공식화가 리더십 분수령. institutional flow 렌즈로는 AI 바스켓 재진입·메가캡 CAPEX 포지션 재편 축, 밸류에이션 렌즈로는 NVDA forward P/E 32배 sector premium 재검증 축, 시나리오 렌즈로는 11/4 AMD·11/19 NVIDIA·HBM4 LTA 공식화가 랠리 분수령."
      },
      {
        "time": "2026-11-04 07:15 KST",
        "type": "데이터센터",
        "sector": "데이터센터",
        "detail": "Dell(DELL)·HPE·CoreWeave(CRWV)·Broadcom(AVGO). 11/3 종가 DELL 410.84달러 +4.7%·HPE 53.70달러 +5.0%·CRWV 51.64달러 +3.0%·AVGO 334.20달러 +3.7% AI 서버·커스텀 실리콘 바스켓 반등. 월요일 매도 소화·하이퍼스케일러 2027 CAPEX 2,200~2,500억달러 가이던스 재검증 유효. 커스텀 실리콘 수요 재점검 서사 지속, AWS Trainium·Google TPU·메타 MTIA 사이클 지지. institutional flow 렌즈로는 AI 서버 바스켓 포지션 재진입 축, 밸류에이션 렌즈로는 DELL forward P/E 15배·AVGO forward P/E 40배 레벨 재검증 축, 시나리오 렌즈로는 11/19 NVIDIA Q3 Rubin 양산 cadence·네오클라우드 2027 가이던스가 반등 분수령."
      },
      {
        "time": "2026-11-04 07:15 KST",
        "type": "전력·연료전지",
        "sector": "전력·그리드",
        "detail": "Bloom Energy(BE)·GE Vernova·Constellation. 11/3 종가 BE 213.68달러 +8.9% 급등 지속 - AI 데이터센터 SOFC(고체산화물 연료전지) 수주 랠리 리더십. 하이퍼스케일러 전력 CAPEX 2,200~2,500억달러 가이던스 레버리지·AI 데이터센터 전력 후방 수요 지속이 축. institutional flow 렌즈로는 연료전지 바스켓 포지셔닝·AI 전력 후방 로테이션 축, 밸류에이션 렌즈로는 BE forward P/E 재평가 축, 시나리오 렌즈로는 Q4 수주 cadence·AI 데이터센터 전력 수요·SOFC 양산 램프업이 랠리 분수령."
      },
      {
        "time": "2026-11-04 07:15 KST",
        "type": "실적",
        "sector": "AI 플랫폼",
        "detail": "Palantir(PLTR). 11/3 종가 171.37달러 -3.9% - Q3 서프라이즈 발표 후 post-earnings 매물 지속. Q3 매출 23억1,300만달러 +96% YoY·美 상용 매출 9억8,400만달러 +148% YoY가 美 정부 매출 9억5,300만달러(+96% YoY) 사상 처음 추월·조정 영업이익률 62% 소화 지속. '매수-실적-매도' 패턴 전형, 밸류 재점검 매물이 축. monetization 렌즈로는 美 상용 ARR +148% YoY 가속 축, 밸류에이션 렌즈로는 forward P/S 60배 프리미엄 재검증 축, 시나리오 렌즈로는 Q4 가이던스·엔터프라이즈 수주 cadence·AIP 플랫폼 확장이 리더십 분수령."
      },
      {
        "time": "2026-11-04 07:15 KST",
        "type": "태양광",
        "sector": "친환경·청정기술",
        "detail": "Enphase(ENPH)·Sunrun(RUN)·Array(ARRY). 11/3 종가 ENPH 28.38달러 +1.6%·RUN 8.41달러 +1.9%·ARRY 3.96달러 +4.1% 태양광 바스켓 상대 지지. 금리 완화 재점화·주택 금융비용 완화 레버리지 유지. 11/4 AMC Sunrun Q3 D-day - 설치 cadence·AMPC 크레딧·재무 가이던스가 분수령. institutional flow 렌즈로는 태양광 바스켓 포지셔닝·금리 민감주 로테이션 축, 밸류에이션 렌즈로는 RUN forward P/E 재평가 축, 시나리오 렌즈로는 11/4 Sunrun Q3·IRA 크레딧 유지·주택 설치 cadence가 리더십 분수령."
      }
    ]
  }
];
