const updates = [
  {
    "date": "2026-10-28 19:10 KST",
    "summary": "FOMC 25bp 인하 D-day 오늘 밤 - 美 10/28 오후 결정, Powell 가이던스가 11월 랠리 분기점\nLMT 623달러 -1.9% - Q3 발표 D-day 되돌림, F-35 Lot 20·FY27 매출 가이던스 소화\nAVGO 343달러 +0.2% 유지 - 커스텀 ASIC 수요 레버리지, 하이퍼스케일러 CAPEX 2027 수혜\n알파벳·META·MSFT 10/29 D-1 - Q3 CSP CAPEX 가이던스가 AI 랠리 방향 결정\nNOC 551달러 -2.5% - 방산 되돌림, 디펜시브 로테이션 수요 재확인 대기",
    "changes": [
      {
        "time": "2026-10-28 19:00 KST",
        "type": "매크로",
        "sector": "매크로",
        "detail": "FOMC 10/28 금리 결정 D-day 임박 (한국 시각 10/29 새벽 03시 공식화), 25bp 인하 컨센 선반영 상태. 미 10년물 4.3%대·DXY 108대·VIX 17대 환경에서 Powell 11월 가이던스가 리레이팅 분기점. 2026 dot plot은 연내 추가 1회 인하 vs. 매파 pause 분기점, forward P/E S&P 500 23배·earnings yield 4.3% 10년물 gap 0bp 상태. cross-asset 렌즈로는 금 4,021달러·BTC 79,000달러대 안전·위험 혼재 포지션, institutional flow 렌즈로는 메가캡 어닝 위크 집결, 시나리오 렌즈로는 FOMC 25bp 인하·Powell 가이던스·CSP CAPEX 2027 공식화가 연말 랠리 분기점."
      },
      {
        "time": "2026-10-28 19:00 KST",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "알파벳(GOOGL)·메타(META)·마이크로소프트(MSFT). 알파벳 323.57달러 +0.9%·META 619달러 보합·MSFT 532.65달러 +0.2% 10/29 Q3 D-1 포지션. 시장은 CSP CAPEX 2027 가이던스·AI 광고 매출 레버리지·Copilot·Vertex AI·Llama 5 로드맵 집중. 알파벳 Gemini 3·Vertex AI·Google Cloud 성장률, META Llama 5·오픈웨이트 추론, MSFT Copilot ARR 수십억대 가이던스. monetization 렌즈로는 AI 광고·Copilot ARR 레버리지 축, institutional flow 렌즈로는 외국인 메가캡 어닝 전 재진입 축, 밸류에이션 렌즈로는 forward P/E 25배 프리미엄 유지 축, 시나리오 렌즈로는 Q3 CSP CAPEX 2027·AI 광고 혼합·Copilot 가이던스 공식화가 리레이팅 분수령."
      },
      {
        "time": "2026-10-28 19:00 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "엔비디아(NVDA)·브로드컴(AVGO)·AMD(AMD)·마이크론(MU). NVDA 218.13달러 보합·AVGO 343.02달러 +0.2%·AMD 563.90달러 +0.6%·MU 942달러 +1.4% 메가캡 어닝 전 숨고르기. AVGO 커스텀 ASIC 수요 지속·MU HBM 가격 상향 소화. NVDA Vera Rubin 양산 램프업·HBM4 2027 LTA 공식화 임박, SK하이닉스·삼성 10/29 Q3 공시와 동반 통과점. monetization 렌즈로는 AI 반도체 ARR·HBM4 LTA 레버리지 축, institutional flow 렌즈로는 외국인 AI 반도체 리더십 재탈환 축, 밸류에이션 렌즈로는 forward P/E 30배 프리미엄 재확인 축, 시나리오 렌즈로는 Vera Rubin 양산·HBM4 공식화·CSP CAPEX 2027이 랠리 분수령."
      },
      {
        "time": "2026-10-28 19:00 KST",
        "type": "방산",
        "sector": "방산",
        "detail": "록히드마틴(LMT)·레이시온(RTX)·노스롭그루먼(NOC). LMT 622.99달러 -1.9%·RTX 194.81달러 보합·NOC 551.23달러 -2.5% 방산 되돌림. LMT 10/28 Q3 발표 소화, 시장은 F-35 Lot 20 가이던스·FY27 매출 740억대 가이던스·NATO 2027 CAPEX 2.5%대 상향 수주 레버리지 집중. 러·우 종전 재료 되돌림에도 유럽 재무장·중동 긴장 지속 수요 유지. monetization 렌즈로는 F-35·NATO CAPEX·중동 수주 레버리지 축, institutional flow 렌즈로는 디펜시브 로테이션 수요 재확인 축, 밸류에이션 렌즈로는 forward P/E 20배 프리미엄 재검증 축, 시나리오 렌즈로는 Q3 F-35 가이던스·NATO 2027 공식화·중동 수주가 리레이팅 분수령."
      },
      {
        "time": "2026-10-28 19:00 KST",
        "type": "전력·그리드",
        "sector": "전력·그리드",
        "detail": "비스트라(VST)·GE 버노바(GEV)·넥스트에라(NEE). VST 146.56달러 보합·GEV 900.80달러 +0.6%·NEE 82.42달러 +0.5% 전력 리더십 유지. 하이퍼스케일러 2027 CAPEX 가이던스 임박 전 Buy-the-dip 유입, AI 데이터센터 전력 수요 레버리지 재확인. monetization 렌즈로는 PPA 가격·CAPEX 2027 레버리지 축, institutional flow 렌즈로는 전력 섹터 바스켓 매수 지속 축, 시나리오 렌즈로는 10/29 알파벳·META·MSFT CSP CAPEX 2027 공식화·GEV Q3 가이던스가 리레이팅 통과점."
      }
    ]
  }
];
