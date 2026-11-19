const updates = [
  {
    "date": "2026-11-19 19:20 KST",
    "summary": "월마트 Q3 FY26 D-1 - 11/20 어닝 디펜시브 소비 리더십 분수령\nAMD·브로드컴 반도체 바스켓 선두 - AI 칩 분화 커스텀 ASIC 모멘텀\n엑슨모빌 161달러 -4% 급락 - 에너지 바스켓 매물 OPEC+ 공급 과잉 공방\n일라이릴리 1,383달러 -2.3% - 바이오 바스켓 로테이션 이탈 GLP-1 서사 유지\n크립토 프록시 급락 - 코인베이스·마이크로스트래티지 BTC 64,000선 공방",
    "changes": [
      {
        "time": "2026-11-18 16:00 EST",
        "type": "리테일",
        "sector": "소비·리테일",
        "detail": "Walmart(WMT)·Target(TGT)·TJX. 127.36달러 -0.1%·165.93달러 +4%·140.30달러 +8% 화요일 리테일 바스켓 공방, 월마트 11/20 Q3 FY26 어닝 D-1 대기·타겟 홀리데이 소비 모멘텀 레버리지·TJX 디스카운터 바스켓 리더십 재확인이 축. 블랙프라이데이·사이버먼데이·연말 홀리데이 쇼핑 cadence·소비자 신뢰지수 재점검·동일 매장 매출 가이던스 상향 공방이 중기 서사, 외국인 리테일 바스켓 신규 자금 유입·SaaS 투매 속 디펜시브 로테이션 수혜가 모멘텀 축. institutional flow 렌즈로는 리테일 바스켓 외국인 순매수 유입 축, 밸류에이션 렌즈로는 WMT forward P/E 32·TGT 15·TJX 25 재검증 축, 시나리오 렌즈로는 WMT Q3 어닝·동일 매장 매출·홀리데이 쇼핑 cadence가 리테일 리더십 분수령."
      },
      {
        "time": "2026-11-18 16:00 EST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "AMD(AMD)·Broadcom(AVGO)·Micron(MU). 530.14달러 +5.3%·354.05달러 +3.6%·705.27달러 -1% 화요일 반도체 바스켓 분화, AMD MI350X 양산 가이던스·OpenAI 공급 계약 레버리지·브로드컴 커스텀 ASIC·VMware ARR 레버리지·마이크론 HBM4 서사 공방이 축. 2027 데이터센터 CAPEX 가이던스 상향·커스텀 ASIC·HBM4 양산 cadence·DRAM 가격담합 소송 여진이 중기 서사, NVDA 실적 서프라이즈 후방 수혜·외국인 반도체 바스켓 분화 공방·AI 칩 바스켓 포지션 재조정이 모멘텀 축. institutional flow 렌즈로는 반도체 바스켓 분화 축, 밸류에이션 렌즈로는 AMD forward P/E 35·AVGO 30·MU 15 공방 축, 시나리오 렌즈로는 MI350X 양산·커스텀 ASIC·HBM4 cadence가 반도체 리더십 분수령."
      },
      {
        "time": "2026-11-18 16:00 EST",
        "type": "에너지",
        "sector": "에너지",
        "detail": "ExxonMobil(XOM)·Chevron(CVX)·Occidental(OXY). 160.58달러 -4%·205.88달러 -4%·53.76달러 -4.9% 화요일 에너지 바스켓 매물 집중, WTI 85달러선 하회·OPEC+ 11/29 쿼터 결정 D-10·공급 과잉 재검증 우려·중동 긴장 프리미엄 둔화가 축. 2027 북미 셰일 생산 가이던스·FCF·배당 가이던스 유지·OPEC+ 12월 쿼터 동결 공방·중국 겨울 난방 수요 cadence가 중기 서사, 외국인 에너지 바스켓 매도 전환·헤지펀드 숏 포지션 재조정·금리 민감도 재검증이 모멘텀 축. institutional flow 렌즈로는 에너지 바스켓 매도 전환 축, 밸류에이션 렌즈로는 XOM forward P/E 14·CVX 13 재검증 축, 시나리오 렌즈로는 OPEC+ 11/29 쿼터·WTI 85달러선·북미 셰일 cadence가 에너지 리더십 분수령."
      },
      {
        "time": "2026-11-18 16:00 EST",
        "type": "바이오·크립토 프록시",
        "sector": "바이오·헬스케어",
        "detail": "Eli Lilly(LLY)·Merck(MRK)·AbbVie(ABBV)·Coinbase(COIN)·MicroStrategy(MSTR). 1,382.75달러 -2.3%·137.78달러 -3.9%·286.01달러 -2.3%·110.51달러 -3.9%·90.32달러 -6.4% 화요일 바이오 바스켓·크립토 프록시 동반 약세, 바이오 바스켓 로테이션 이탈·엔터프라이즈 SW 투매 분화·BTC 64,000선 공방 지속·크립토 ETF 4주 연속 순유출 둔화 윈도우가 축. Mounjaro·Zepbound GLP-1 리더십·Keytruda 매출 +12% 가이던스 유지·Skyrizi·Rinvoq 면역·종양 cadence·BTC 트레저리 디스카운트 재확대가 중기 서사, 바이오 바스켓 외국인 매도 재개·크립토 레버리지 포지션 재조정·연준 12월 25bp 인하 공식화 윈도우가 모멘텀 축. institutional flow 렌즈로는 바이오·크립토 프록시 매도 축, 밸류에이션 렌즈로는 LLY forward P/E 45·MRK 12·COIN forward P/E 25 재검증 축, 시나리오 렌즈로는 GLP-1 cadence·BTC 지지·연준 12월 인하 cadence가 바스켓 리더십 분수령."
      }
    ]
  }
];
