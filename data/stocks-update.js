const updates = [
  {
    "date": "2026-10-29 07:10 KST",
    "summary": "FOMC 25bp 인하 D-day - 한국시간 29일 새벽 3시 Powell 가이던스가 연말 랠리 분기점\nVertiv +15% 폭등 - Q3 어닝 서프라이즈, AI 데이터센터 액체냉각 CAPEX 사이클 전면 재평가\nAMD +5.5%·MU +3.6% 재점화 - OpenAI·Anthropic LTA 레버리지 지속, HBM4 2027 공식화 임박\nMSFT·GOOGL 장 마감 후 Q3 D-day - Azure·Google Cloud 성장률·CAPEX 2027 가이던스 분수령\nTSMC +2.9%·AVGO +2% 재점화 - 메가캡 어닝 위크 선반영, 커스텀 ASIC·2nm 레버리지 재부각",
    "changes": [
      {
        "time": "2026-10-29 07:05 KST",
        "type": "매크로",
        "sector": "매크로",
        "detail": "FOMC 10/28 금리 결정 D-day 임박 (한국 시각 10/29 새벽 03시 공식화), 25bp 인하 컨센 선반영 상태. 미 10년물 4.3%대·DXY 108대 환경에서 Powell 11월 가이던스가 리레이팅 분기점. 2026 dot plot은 연내 추가 1회 인하 vs. 매파 pause 분기점, forward P/E S&P 500 23배·earnings yield 4.3% 10년물 gap 0bp 상태. cross-asset 렌즈로는 금 4,021달러·BTC 안전·위험 혼재 포지션, institutional flow 렌즈로는 MSFT·GOOGL·META 메가캡 어닝 위크 집결, 시나리오 렌즈로는 FOMC 25bp 인하·Powell 가이던스·메가캡 CSP CAPEX 2027 공식화가 연말 랠리 분기점."
      },
      {
        "time": "2026-10-29 07:05 KST",
        "type": "데이터센터",
        "sector": "데이터센터",
        "detail": "Vertiv(VRT)·Dell(DELL)·HPE(HPE). 10/28 종가 Vertiv 240달러 +15% 폭등·Dell 502달러 +7.5%·HPE 62.2달러 +2.2%. Vertiv Q3 어닝 서프라이즈·FY26 가이던스 대폭 상향, AI 데이터센터 액체냉각 CAPEX 사이클 전면 재평가 유입. Dell은 GB300·AMD-OpenAI 후방 AI 서버 백로그 모멘텀 유지. institutional flow 렌즈로는 AI 인프라 CAPEX 레버리지 섹터 리더 전환 축, 밸류에이션 렌즈로는 Vertiv forward P/E 40배 리레이팅 재점화 축, 시나리오 렌즈로는 메가캡 CSP CAPEX 2027 가이던스가 추가 상단 분수령."
      },
      {
        "time": "2026-10-29 07:05 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "AMD(AMD)·Micron(MU)·AVGO(AVGO)·TSMC(TSM). 10/28 종가 AMD 560달러 +5.5%·Micron 962달러 +3.6%·AVGO 349달러 +2%·TSMC 437달러 +2.9%. 한국 메모리 Q3 D-day 선반영 랠리와 동행, HBM4 2027 공식화 임박·OpenAI 6GW·Anthropic 2GW MI455X LTA 레버리지 재부각. AVGO는 커스텀 ASIC 수요 레버리지, TSMC는 2nm·CoWoS 레버리지 지속. institutional flow 렌즈로는 반도체 바스켓 재진입 축, 밸류에이션 렌즈로는 AMD forward P/E 50배·Micron 15배 메모리 사이클 리레이팅 축, cross-asset 렌즈로는 FOMC 선반영·10년물 4.3%대 환경에서 risk-on 지속 축."
      },
      {
        "time": "2026-10-29 07:05 KST",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "MSFT(MSFT)·GOOGL(GOOGL)·META(META)·ORCL(ORCL). 10/28 장 마감 후 MSFT·GOOGL Q3 D-day·META 10/29 D-day. 종가 MSFT 531.86달러 +0.1%·GOOGL 323.67달러 +1%·META 621.67달러 +0.2%·ORCL 130.53달러 +3.5%. Azure AI·Vertex AI·Llama 5·CSP CAPEX 2027 가이던스가 메가캡 리레이팅 통과점. 오라클은 OCI AI 수주 서사 재부각으로 상대 강세. institutional flow 렌즈로는 메가캡 어닝 위크 베팅 집중 축, 밸류에이션 렌즈로는 forward P/E 32배(MSFT)·23배(GOOGL)·28배(META) 프리미엄 재검증 축, 시나리오 렌즈로는 CSP CAPEX 2027 공식화·에이전트 AI monetization 지표가 메가캡 리더십 유지 분기점."
      },
      {
        "time": "2026-10-29 07:05 KST",
        "type": "방산",
        "sector": "방산",
        "detail": "LMT(LMT)·NOC(NOC)·RTX(RTX)·GD(GD). 10/28 종가 LMT 622.99달러 -1.9%·NOC 551.23달러 -2.5%·RTX 193.67달러 -0.4%·GD 354.89달러 -0.6%. 방산 섹터 전반 되돌림 지속, Q3 발표 소화와 러·우 종전 재료 중복으로 디펜시브 로테이션 수요 재진입 대기. B-21 양산·F-35 Lot 20·NATO 2027 CAPEX 2.5% 가이던스가 반등 분수령. institutional flow 렌즈로는 디펜시브 바스켓 차익실현 지속 축, 밸류에이션 렌즈로는 방산 forward P/E 22배 프리미엄 재검증 축, 시나리오 렌즈로는 NATO 집단방위 가이던스·Q3 가이던스·우크라 지원 재협상이 반등 트리거."
      }
    ]
  }
];
