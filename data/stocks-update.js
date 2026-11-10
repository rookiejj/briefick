const updates = [
  {
    "date": "2026-11-11 07:10 KST",
    "summary": "AMD 536달러 +5.4% 랠리 2일차 - OpenAI MOU·MI400 cadence 재점화, 반도체 리더십 복귀 연장\n엔비디아 174달러 -2.5% 소강 - AMD·AVGO 리더십 교체 소화, 11/19 Q3 FY27 D-8\n브로드컴 334달러 +4.5% - 커스텀 실리콘 수주 cadence 재점화, AI 바스켓 선두\n아마존 272달러 +2% 반등 - 엔터프라이즈 AI 서사 복귀, AWS 재검증 축\n美 셧다운 종료 상원 60-40 가결 - 하원 통과 윈도우 임박, 10월 CPI 블랙아웃 해제",
    "changes": [
      {
        "time": "2026-11-11 07:05 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "NVIDIA(NVDA)·AMD·Broadcom(AVGO)·AMAT·Lam Research(LRCX)·Micron(MU). 174.13달러 -2.5%·536.02달러 +5.4%·333.76달러 +4.5%·380.37달러 +2.6%·227.05달러 +2.6%·741.10달러 +1.1% 반도체 바스켓 월요일 종가 기준 리더십 교체 연장, AMD +5.4% 랠리 2일차·AVGO 커스텀 실리콘 수주 cadence가 축. 11/19 NVIDIA Q3 FY27 D-8 임박·Rubin 양산 cadence·HBM4 LTA 가이던스 공식화·2027 CAPEX 1조달러대 번레이트 지속성이 밸류 디스커버리 1차 분수령, 'AI 버블 vs 2차 랠리' 서사 양분이 변동성 축. monetization 렌즈로는 데이터센터 매출 번레이트·엔터프라이즈 AI ARR 축, 밸류에이션 렌즈로는 NVDA forward P/E 28·AMD 45·MU 17 재검증 축, 시나리오 렌즈로는 11/19 Q3·Rubin cadence·2027 CAPEX 가이던스가 리더십 분수령."
      },
      {
        "time": "2026-11-11 07:05 KST",
        "type": "정책",
        "sector": "정책",
        "detail": "美 셧다운 종료 상원 60-40 압도 가결·슈머 민주당 리더 반대·6주차 역사적 셧다운 종결 뒤 하원 복귀 가결 윈도우 24시간 내 임박이 축. 1월 30일 임시예산·ACA 보조금 12월 표결 패키지·연방공무원 소급 급여·항공 관제 10월 CPI 데이터 블랙아웃 해제 cadence가 중기 레버리지, 예산안 하원 통과 지연·12월 FOMC 가이던스 재검증·10월 CPI·NFP 지연 발표 공백이 변동성 축. institutional flow 렌즈로는 위험자산 매수 복귀·채권 콜 재검증 축, 밸류에이션 렌즈로는 S&P 500 forward P/E 24·10y 국채금리 4.1% 재검증 축, 시나리오 렌즈로는 하원 가결·10월 CPI 발표·12월 FOMC 25bp 인하 공식화가 리레이팅 분수령."
      },
      {
        "time": "2026-11-11 07:05 KST",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "Microsoft(MSFT)·Google(GOOGL)·Meta(META)·Oracle(ORCL)·Amazon(AMZN)·Palantir(PLTR). 543.05달러 -0.4%·290.20달러 +0.7%·645.41달러 +0.6%·119.83달러 보합·272.24달러 +2%·168.40달러 -0.5% AI 플랫폼 메가캡 바스켓 월요일 종가 기준 혼조, AMZN +2% 상대 강세·AWS 엔터프라이즈 AI 서사 복귀가 축. Microsoft Copilot 월간 활성 사용자·Azure OpenAI 매출 번레이트·Google Gemini 3 Ultra 공개 임박 cadence·Meta Llama·VR 레버리지가 중기 서사, 'AI 버블 vs 2차 랠리' 양분·엔터프라이즈 AI ARR 공식화가 변동성 축. monetization 렌즈로는 Copilot ARR·Azure OpenAI 매출·OCI AI PPA·AWS Bedrock 축, 밸류에이션 렌즈로는 MSFT forward P/E 32·META 27·AMZN 35 재검증 축, 시나리오 렌즈로는 11/11 OpenAI DevDay 멕시코시티·Gemini 3 Ultra·엔터프라이즈 AI ARR 공식화가 리더십 분수령."
      },
      {
        "time": "2026-11-11 07:05 KST",
        "type": "원자력·SMR",
        "sector": "원자력·SMR",
        "detail": "Oklo(OKLO)·NANO Nuclear(NNE)·Centrus(LEU)·Constellation(CEG)·Vistra(VST). 26.57달러 -1%·12.23달러 -2%·114.47달러 -2.4%·271.09달러 -1.8%·133.70달러 -0.2% 원자력·SMR 바스켓 월요일 종가 기준 숨고르기, 전일 랠리 2일차 뒤 차익실현·데이터센터 전력 수요 서사 유효성 재검증이 축. Oklo Aurora Powerhouse cadence·Centrus HALEU 농축 유일 공급·Vistra PJM AI 데이터센터 PPA·Constellation Three Mile Island 재가동 2028 가이던스가 중기 레버리지, SMR 상용화 지연·FOMC 매파 시그널이 카운터. institutional flow 렌즈로는 SMR 바스켓 차익실현 축, 밸류에이션 렌즈로는 VST forward P/E 33·CEG 31 재검증 축, 시나리오 렌즈로는 Aurora cadence·PPA 수주·UAMPS 복원이 리더십 분수령."
      },
      {
        "time": "2026-11-11 07:05 KST",
        "type": "우주",
        "sector": "우주",
        "detail": "AST SpaceMobile(ASTS)·Intuitive Machines(LUNR)·Rocket Lab(RKLB)·Redwire(RDW)·Planet Labs(PL). 35.94달러 -2.6%·12.12달러 +0.7%·59.65달러 +1.3%·8.21달러 +0.8%·14.40달러 +0.2% 우주 바스켓 월요일 종가 기준 혼조, Rocket Lab Neutron 첫 발사 2027년 이후 재지연 공식화 소화·ASTS 차익실현이 축. Rocket Lab 1단 추진제 탱크 카본 복합 돔 공극 발견·2027년 1분기 뒤 새 발사 목표 제시 가이던스·SDA 수주 816백만달러·국방 프라임 전환 모멘텀이 중기 레버리지, ASTS T-Mobile 상업 서비스 2027 로드맵·NASA CLPS IM-3 4분기 발사 cadence가 서사 축. institutional flow 렌즈로는 우주 바스켓 변동성 축, 밸류에이션 렌즈로는 RKLB forward P/S 29 프리미엄 재검증 축, 시나리오 렌즈로는 Neutron 2027 첫 발사·IM-3 성공·SDA 추가 수주가 리더십 분수령."
      }
    ]
  }
];
