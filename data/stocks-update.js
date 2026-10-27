const updates = [
  {
    "date": "2026-10-28 07:15 KST",
    "summary": "FOMC 10/28 D-day 오늘 밤 - 25bp 인하 컨센 선반영, Powell 가이던스가 분기점\nLMT 635달러 - 10/28 Q3 D-day, F-35 Lot 20·NATO 2027 CAPEX 가이던스 분수령\nAVGO 340달러 +3.2% 급등 - 커스텀 ASIC 수요, 하이퍼스케일러 CAPEX 2027 가속\n알파벳·META·MSFT 10/29 D-1 - CSP CAPEX 2027 가이던스가 AI 랠리 분기점\nNVDA 218달러 +1% - Vera Rubin 양산·HBM4 2027 LTA 공식화 임박",
    "changes": [
      {
        "time": "2026-10-28 07:00 KST",
        "type": "매크로",
        "sector": "매크로",
        "detail": "FOMC 10/28 금리 결정 D-day 카운트다운 (한국 시각 10/29 새벽 공식화), 25bp 인하 컨센 선반영 상태. 미 10년물 4.3%대·DXY 108대·VIX 17대 환경에서 Powell 11월 가이던스가 리레이팅 분기점. 2026 dot plot은 연내 추가 1회 인하 vs. 매파 pause 분기점, forward P/E S&P 500 23배·earnings yield 4.3% 10년물 gap 0bp 상태. cross-asset 렌즈로는 금 4,021달러·BTC 79,000달러대 안전·위험 혼재 포지션, institutional flow 렌즈로는 메가캡 어닝 위크 집결, 시나리오 렌즈로는 FOMC 25bp 인하·Powell 가이던스·CSP CAPEX 2027 공식화가 연말 랠리 분기점."
      },
      {
        "time": "2026-10-28 07:00 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "엔비디아(NVDA)·브로드컴(AVGO)·AMD(AMD)·마이크론(MU). 10/27 종가 NVDA 218.24달러 +1%·AVGO 339.77달러 +3.2%·AMD 540.70달러 +1.8%·MU 913달러 +1.1%. AVGO 커스텀 ASIC 수요 지속 급등, 하이퍼스케일러 CSP CAPEX 2027 가속 수혜. NVDA Vera Rubin 양산 램프업·HBM4 2027 LTA 공식화 임박, SK하이닉스·삼성 10/29 Q3 공시와 동반 통과점. monetization 렌즈로는 AI 반도체 ARR·HBM4 LTA 레버리지 축, institutional flow 렌즈로는 외국인 AI 반도체 리더십 재탈환 축, 밸류에이션 렌즈로는 forward P/E 30배 프리미엄 재확인 축, 시나리오 렌즈로는 Vera Rubin 양산·HBM4 공식화·CSP CAPEX 2027이 랠리 분수령."
      },
      {
        "time": "2026-10-28 07:00 KST",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "알파벳(GOOGL)·메타(META)·마이크로소프트(MSFT). 10/27 종가 GOOGL 318.49달러 +0.5%·META 627.63달러 -0.5%·MSFT 529.36달러 -0.6%. 10/29 Q3 공시 D-1 카운트다운 집결, 시장은 CSP CAPEX 2027 가이던스·AI 광고 매출 레버리지·Copilot·Vertex AI·Llama 5 로드맵 집중. 알파벳 Gemini 3·Vertex AI·Google Cloud 성장률, META Llama 5·오픈웨이트 추론, MSFT Copilot ARR 수십억대 가이던스. monetization 렌즈로는 AI 광고·Copilot ARR 레버리지 축, institutional flow 렌즈로는 외국인 메가캡 어닝 전 재진입 축, 밸류에이션 렌즈로는 forward P/E 25배 프리미엄 유지 축, 시나리오 렌즈로는 Q3 CSP CAPEX 2027·AI 광고 혼합·Copilot 가이던스 공식화가 리레이팅 분수령."
      },
      {
        "time": "2026-10-28 07:00 KST",
        "type": "방산",
        "sector": "방산",
        "detail": "록히드마틴(LMT)·레이시온(RTX)·노스롭그루먼(NOC). 10/27 종가 LMT 635달러 -0.1%. LMT 10/28 Q3 D-day 카운트다운, 시장은 F-35 Lot 20 가이던스·FY27 매출 740억대 가이던스·NATO 2027 CAPEX 2.5%대 상향 수주 레버리지 집중. 러·우 종전 재료 되돌림 소화에도 유럽 재무장·중동 긴장 지속 수요 유지. monetization 렌즈로는 F-35·NATO CAPEX·중동 수주 레버리지 축, institutional flow 렌즈로는 디펜시브 로테이션 수요 축, 밸류에이션 렌즈로는 forward P/E 20배 프리미엄 재확인 축, 시나리오 렌즈로는 Q3 F-35 가이던스·NATO 2027 공식화·중동 수주가 리레이팅 분수령."
      },
      {
        "time": "2026-10-28 07:00 KST",
        "type": "핀테크·결제",
        "sector": "핀테크·결제",
        "detail": "소파이(SOFI)·블록(SQ)·페이팔(PYPL). 10/27 종가 SOFI 16.12달러 +11.5% 급등. SOFI Q3 어닝 서프라이즈 후 핀테크 랠리 선봉, 디지털 뱅킹·대출·투자 플랫폼 ARR 가이던스 상향 흐름. FOMC 10/28 25bp 인하 D-day 선반영 환경에서 핀테크 밸류에이션 리레이팅 모멘텀. monetization 렌즈로는 SOFI 디지털 뱅킹·투자 ARR 축, institutional flow 렌즈로는 핀테크 바스켓 재진입 축, 밸류에이션 렌즈로는 forward P/E 25배 프리미엄 재검증 축, 시나리오 렌즈로는 Q3 실적·FOMC 가이던스·연말 대출 성장률이 리레이팅 분수령."
      }
    ]
  }
];
