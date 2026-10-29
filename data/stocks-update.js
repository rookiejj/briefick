const updates = [
  {
    "date": "2026-10-29 19:15 KST",
    "summary": "버티브 +16.5% 폭등 - Q3 서프라이즈, AI 액체냉각 CAPEX 재평가\n오라클 +10.7% 재점화 - OCI AI 수주 서사, 메가캡 어닝 통과점\nAMD +3.2%·MU +5.9% - OpenAI·Anthropic LTA 레버리지 지속\nF5 -20.4% 급락 - Q3 가이던스 하향, 네트워킹 섹터 되돌림\n엔페이즈 -16% - Q3 컨센 하회, 태양광 섹터 바스켓 차익실현",
    "changes": [
      {
        "time": "2026-10-29 19:10 KST",
        "type": "데이터센터",
        "sector": "데이터센터",
        "detail": "Vertiv(VRT)·Dell(DELL)·HPE(HPE)·Equinix(EQIX). 10/28 종가 Vertiv 242.94달러 +16.5% 폭등·Dell 493.79달러·HPE 60.33달러·Equinix 1,007달러 +0.8%. Vertiv Q3 어닝 서프라이즈·FY26 가이던스 대폭 상향 후 AI 데이터센터 액체냉각 CAPEX 사이클 전면 재평가 유입 지속. GB300·AMD-OpenAI 후방 AI 서버 백로그 모멘텀, Modine Manufacturing 143.54달러 +5.1% 동반 강세. institutional flow 렌즈로는 AI 인프라 CAPEX 레버리지 섹터 리더 전환 축, 밸류에이션 렌즈로는 Vertiv forward P/E 40배 리레이팅 축, 시나리오 렌즈로는 메가캡 CSP CAPEX 2027 가이던스가 추가 상단 분수령."
      },
      {
        "time": "2026-10-29 19:10 KST",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "Oracle(ORCL)·MSFT(MSFT)·GOOGL(GOOGL)·META(META). 10/28 종가 Oracle 144.54달러 +10.7% 폭등·MSFT 531.01달러 보합·GOOGL 324.89달러 +1.3%·META 612.49달러 -1.2%. 오라클 OCI AI 수주 서사 재부각, SoftBank Stargate 공급 공식화·OCI 멀티 클라우드 수주 모멘텀 복합. 10/29 장 마감 후 MSFT·GOOGL Q3·META 10/29 D-day 집중. institutional flow 렌즈로는 메가캡 어닝 위크 베팅 집중 축, 밸류에이션 렌즈로는 forward P/E 32배(MSFT)·23배(GOOGL)·28배(META) 프리미엄 재검증 축, 시나리오 렌즈로는 CSP CAPEX 2027 공식화·에이전트 AI monetization이 메가캡 리더십 분수령."
      },
      {
        "time": "2026-10-29 19:10 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "AMD(AMD)·Micron(MU)·AVGO(AVGO)·TSMC(TSM)·AMAT(AMAT). 10/28 종가 AMD 578.44달러 +3.2%·Micron 983.23달러 +5.9%·AVGO 351.81달러 +2.8%·TSMC 439.51달러 +0.6%·AMAT 416달러 +5.1%. 한국 메모리 Q3 D-day 선반영 랠리와 동행, HBM4 2027 공식화 임박·OpenAI 6GW·Anthropic 2GW MI455X LTA 레버리지 재부각. AMAT Q3 가이던스 상향·커스텀 ASIC 수요·2nm·CoWoS 레버리지 복합. institutional flow 렌즈로는 반도체 바스켓 재진입 축, 밸류에이션 렌즈로는 AMD forward P/E 50배·Micron 15배 메모리 사이클 리레이팅 축, cross-asset 렌즈로는 FOMC 25bp 인하 결정·risk-on 환경 유지 축."
      },
      {
        "time": "2026-10-29 19:10 KST",
        "type": "사이버보안",
        "sector": "사이버보안",
        "detail": "F5(FFIV)·Fortinet(FTNT)·Palo Alto(PANW)·Zscaler(ZS). 10/28 종가 F5 365.53달러 -20.4% 급락·Fortinet 174.08달러 -5.9%·Palo Alto 394.49달러 -1.8%·Zscaler 255.80달러 -1.7%. F5 Q3 가이던스 하향·네트워킹 사이클 둔화 공식화, 섹터 바스켓 차익실현 트리거. Fortinet도 수주 둔화 서사로 동반 되돌림, Palo Alto·Zscaler는 SASE·Zero Trust 레버리지 유지에도 밸류 재검증. institutional flow 렌즈로는 사이버보안 바스켓 차익실현 축, 밸류에이션 렌즈로는 F5 forward P/E 15배 디레이팅 축, 시나리오 렌즈로는 메가캡 CAPEX 2027 공식화·엔터프라이즈 보안 수주가 반등 분수령."
      },
      {
        "time": "2026-10-29 19:10 KST",
        "type": "친환경",
        "sector": "친환경·청정기술",
        "detail": "Enphase(ENPH)·First Solar(FSLR)·Bloom Energy(BE)·Lennox(LII). 10/28 종가 Enphase 24.99달러 -16% 급락·First Solar 176.30달러 +0.3%·Bloom Energy 228.08달러 +4.4%·Lennox 332.64달러 -10.6%. Enphase Q3 컨센 하회·2026 가이던스 하향, 태양광 섹터 바스켓 차익실현 트리거. Lennox도 Q3 가이던스 하향으로 공조·HVAC 섹터 되돌림. Bloom Energy는 데이터센터 전력 수주 서사로 상대 강세 유지. institutional flow 렌즈로는 친환경 바스켓 차익실현 축, 밸류에이션 렌즈로는 Enphase forward P/E 디레이팅 축, 시나리오 렌즈로는 ITC 가이던스·AI 데이터센터 전력 수주·태양광 수요 재점화가 반등 분수령."
      }
    ]
  }
];
