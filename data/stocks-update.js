const updates = [
  {
    "date": "2026-11-05 19:05 KST",
    "summary": "S&P500 혼조 마감 - 메가캡 클라우드 랠리 숨 고르기, 실적 시즌 밸류 재검증\nAMD 485달러 -0.7% - Q3 실적 컨센 상회, 데이터센터 매출 급증에도 밸류 재검증\n선런 9.62달러 +9.4% - 태양광 바스켓 반등 연속, 금리 완화 레버리지\n모딘·버티브·버노바·바이스트라 약세 지속 - 데이터센터 전력·냉각 피크 우려\n테슬라 381달러 -1% - EV 수요 둔화 소화, 자율주행 로드맵 분수령",
    "changes": [
      {
        "time": "2026-11-05 19:05 KST",
        "type": "메가캡",
        "sector": "AI 플랫폼",
        "detail": "Amazon(AMZN)·Microsoft(MSFT)·Alphabet(GOOGL)·Meta(META). 265.46달러 -0.2%·554.19달러 -0.3%·290.35달러 +0.5%·630.20달러 보합 메가캡 클라우드 트리오 11/4(화) 숨 고르기, 전일 두 자릿수 랠리 소화 지속 축. AWS Q3 +39% YoY 가속·Azure Q1 FY27 +45% 서사는 유지, 2027 CAPEX Amazon 2,200억·Microsoft 1,900억·Alphabet 2,000억달러 가이던스 재검증 윈도우. 10년물 국채금리 4.05%대 안정·DXY 99 보합이 리스크온 지지 축이나 밸류 재검증 압력 상존. institutional flow 렌즈로는 메가캡 바스켓 차익실현 축, 밸류에이션 렌즈로는 Amazon forward P/E 35 재검증 축, 시나리오 렌즈로는 11/19 NVIDIA Q3·Q4 AWS·Azure 성장 cadence·2027 CAPEX 지속성이 리더십 분수령."
      },
      {
        "time": "2026-11-05 19:05 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "Advanced Micro Devices(AMD). 485.27달러 -0.7% 소강, 11/4 장 마감 후 Q3 FY26 실적 공식 발표 - 매출 93억달러 +35% YoY·EPS 1.20달러 컨센 1.16달러 상회·데이터센터 매출 70억달러 +97% YoY 서프라이즈. Q4 가이던스 매출 130억달러 ±3억·마진 56% 유지가 after-hours 매물 축, 밸류 재검증 소화. MI350·MI400 램프업·OpenAI 6GW 수주·하이퍼스케일러 2027 CAPEX 레버리지 서사는 유지. institutional flow 렌즈로는 AI GPU 바스켓 로테이션 축, 밸류에이션 렌즈로는 AMD forward P/E 45 프리미엄 재검증 축, 시나리오 렌즈로는 11/19 NVIDIA Q3·MI400 cadence·2027 데이터센터 매출 가이던스가 리더십 분수령."
      },
      {
        "time": "2026-11-05 19:05 KST",
        "type": "친환경·청정기술",
        "sector": "친환경·청정기술",
        "detail": "Sunrun(RUN)·First Solar(FSLR)·Enphase(ENPH)·Array Technologies(ARRY)·Shoals(SHLS). 9.62달러 +9.4%·196.75달러 +1.2%·31.87달러 +1%·5.29달러 -0.8%·9.14달러 -0.2% 태양광 바스켓 반등 연속 유지, Sunrun 주도. 10년물 금리 4.05%대 안정·주택 금융비용 완화 레버리지·IRA 세액공제 유지 재확인이 축. 美 유틸리티 Scale solar PPA 가격 재검증·주거용 solar+ESS attach rate 상향 서사로 리레이팅. institutional flow 렌즈로는 태양광 바스켓 포지션 재진입 축, 밸류에이션 렌즈로는 FSLR forward P/E 리레이팅 축, 시나리오 렌즈로는 12월 FOMC·주택 금융·IRA 세액공제 지속성·Q4 Sunrun 가이던스가 랠리 분수령."
      },
      {
        "time": "2026-11-05 19:05 KST",
        "type": "데이터센터",
        "sector": "데이터센터",
        "detail": "Vertiv(VRT)·Modine(MOD)·GE Vernova(GEV)·Vistra(VST)·Quanta Svcs(PWR). 203.40달러 -1%·97.50달러 -1.1%·824.99달러 -0.9%·119.00달러 -1.1%·579.89달러 -0.1% 데이터센터 인프라 바스켓 약세 지속, 전력·냉각 CAPEX 피크 우려 소화. 전일 MOD Q3 가이던스 하향 쇼크(-21.5%) 여진 유효·하이퍼스케일러 발주 cadence·2027 데이터센터 CAPEX 지속성 재검증 서사가 축. institutional flow 렌즈로는 전력·냉각 바스켓 차익실현 지속 축, 밸류에이션 렌즈로는 VRT forward P/E 디레이팅 축, 시나리오 렌즈로는 11/19 NVIDIA Q3·Rubin 양산 cadence·하이퍼스케일러 2027 CAPEX 공식화가 반등 분수령."
      },
      {
        "time": "2026-11-05 19:05 KST",
        "type": "자동차·모빌리티",
        "sector": "자동차·모빌리티",
        "detail": "Tesla(TSLA). 381.39달러 -1% 조정 지속, EV 수요 둔화 서사 소화·메가캡 랠리 대비 상대 약세. 10월 美 EV 판매 데이터 재검증 윈도우·IRA 크레딧 유지·로보택시 Austin·Phoenix 확장 cadence는 지속, FSD v13 cadence·12월 가이던스가 리레이팅 축. institutional flow 렌즈로는 EV 바스켓 차익실현 지속 축, 밸류에이션 렌즈로는 Tesla forward P/E 90 프리미엄 재검증 축, 시나리오 렌즈로는 FSD v13·로보택시 상용화 cadence·2027 Model 2 양산이 리더십 분수령."
      }
    ]
  }
];
