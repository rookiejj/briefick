const updates = [
  {
    "date": "2026-10-27 19:15 KST",
    "summary": "FOMC 10/28 D-1 - 25bp 인하 컨센 선반영, Powell 가이던스가 리레이팅 분기점\nARM 223달러 +6.2% - AI 반도체 랠리 선봉, 10/29 Q3 D-2 ARR 가이던스 기대\nQCOM 180달러 +2.1% - 2028년 AI 스마트폰 칩 로드맵, OpenAI 협력 모멘텀\n알파벳·META·MSFT 10/29 - CSP CAPEX 2027 가이던스가 AI 랠리 분기점\n로케트랩 54달러 +0.7% - 11/3 Q3 D-7, Neutron 로켓 상업화 분수령",
    "changes": [
      {
        "time": "2026-10-27 19:00 KST",
        "type": "매크로",
        "sector": "매크로",
        "detail": "FOMC 10/28 금리 결정 D-1 카운트다운, 25bp 인하 컨센 선반영 상태. 미 10년물 4.3%대·DXY 108대·VIX 17대 환경에서 Powell 11월 가이던스가 리레이팅 분기점. 2026 dot plot은 연내 추가 1회 인하 vs. 매파 pause 분기점, forward P/E S&P 500 23배·earnings yield 4.3% 10년물 gap 0bp 상태. cross-asset 렌즈로는 금 4,021달러·BTC 79,000달러대 안전·위험 혼재 포지션, institutional flow 렌즈로는 메가캡 어닝 위크 집결, 시나리오 렌즈로는 FOMC 25bp 인하·Powell 가이던스·CSP CAPEX 2027 공식화가 연말 랠리 분기점."
      },
      {
        "time": "2026-10-27 19:00 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "ARM(ARM)·퀄컴(QCOM)·마이크론(MU). ARM 223달러 +6.2%·QCOM 180달러 +2.1%·MU 913달러 +1.1%. ARM 10/29 Q3 D-2 카운트다운에서 데이터센터 로열티·AI 스마트폰 Rate 가이던스 집중, Vera Rubin·MI455X CPU 레버리지 재확인 흐름. QCOM 2028년 AI 스마트폰 칩 로드맵·OpenAI·미디어텍 협력 모멘텀 지속. MU HBM4 2027 LTA 공식화 임박, SK하이닉스·삼성 10/29 공시와 동반 통과점. monetization 렌즈로는 AI 반도체 ARR·HBM4 LTA 레버리지 축, institutional flow 렌즈로는 외국인 AI 반도체 리더십 재탈환 축, 밸류에이션 렌즈로는 forward P/E 30배 프리미엄 재확인 축, 시나리오 렌즈로는 ARM Q3·HBM4 공식화·CSP CAPEX 2027이 랠리 분수령."
      },
      {
        "time": "2026-10-27 19:00 KST",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "알파벳(GOOGL)·메타(META)·마이크로소프트(MSFT). 318달러 +0.4%·633달러 +0.4%·532달러 보합. 10/29 Q3 D-2 카운트다운 집결, 시장은 CSP CAPEX 2027 가이던스·AI 광고 매출 레버리지·Copilot·Vertex AI·Llama 5 로드맵 집중. 알파벳 Gemini 3·Vertex AI·Google Cloud 성장률, META Llama 5·오픈웨이트 추론, MSFT Copilot ARR 수십억대 가이던스. monetization 렌즈로는 AI 광고·Copilot ARR 레버리지 축, institutional flow 렌즈로는 외국인 메가캡 어닝 전 재진입 축, 밸류에이션 렌즈로는 forward P/E 25배 프리미엄 유지 축, 시나리오 렌즈로는 Q3 CSP CAPEX 2027·AI 광고 혼합·Copilot 가이던스 공식화가 리레이팅 분수령."
      },
      {
        "time": "2026-10-27 19:00 KST",
        "type": "방산",
        "sector": "방산",
        "detail": "록히드마틴(LMT)·레이시온(RTX)·노스롭그루먼(NOC). LMT 635달러 -0.1%. LMT 10/28 Q3 D-1 카운트다운, 시장은 F-35 Lot 20 가이던스·FY27 매출 740억대 가이던스·NATO 2027 CAPEX 2.5%대 상향 수주 레버리지 집중. 러·우 종전 재료 되돌림에도 유럽 재무장·중동 긴장 지속 수요 유지. monetization 렌즈로는 F-35·NATO CAPEX·중동 수주 레버리지 축, institutional flow 렌즈로는 디펜시브 로테이션 수요 축, 밸류에이션 렌즈로는 forward P/E 20배 프리미엄 재확인 축, 시나리오 렌즈로는 Q3 F-35 가이던스·NATO 2027 공식화·중동 수주가 리레이팅 분수령."
      },
      {
        "time": "2026-10-27 19:00 KST",
        "type": "우주",
        "sector": "우주",
        "detail": "로케트랩(RKLB)·AST스페이스모바일(ASTS)·스페이스X(SPCX). RKLB 54.21달러 +0.7%·ASTS 39.52달러 +0.2%·SPCX 148달러 +0.7%. RKLB 11/3 Q3 D-7 카운트다운, 시장은 Neutron 로켓 상업화·Electron 발사 cadence·전략 궤도 수주 가이던스 집중. ASTS BlueBird FDA FCC 승인·T-Mobile 상업 서비스 2027 로드맵 모멘텀. monetization 렌즈로는 Neutron 상업화·BlueBird 가입자 레버리지 축, institutional flow 렌즈로는 외국인 우주 리더십 재진입 축, 밸류에이션 렌즈로는 forward P/S 20배 프리미엄 재검증 축, 시나리오 렌즈로는 Q3 Neutron 가이던스·BlueBird 상업 서비스·전략 궤도 수주가 리레이팅 분수령."
      }
    ]
  }
];
