const updates = [
  {
    "date": "2026-11-07 07:20 KST",
    "summary": "엔비디아 191.96달러 +5.7% 급반등 - Burry 숏 2일째 소화·AI 디레이팅 되돌림\nLRCX +9.3%·AMD +7.8% - 반도체 바스켓 금요일 복구 랠리 선봉\n마이크론 692달러 +5.4% - 메모리·WFE 바스켓 저가 매수 복귀\n비자 417달러 -1.2% - 결제 바스켓 재규제 공방·로테이션 아웃 지속\n록히드 -1.9%·노스롭 -2.2% - 방산 바스켓 차익실현 확산",
    "changes": [
      {
        "time": "2026-11-07 05:00 KST",
        "type": "반도체",
        "sector": "반도체",
        "detail": "NVIDIA(NVDA)·Micron(MU)·Lam Research(LRCX)·Broadcom(AVGO). 191.96달러 +5.7%·692.16달러 +5.4%·202.48달러 +9.3%·303.64달러 +4.2% 반도체 바스켓 금요일 전면 복구 랠리, 전일 Burry 13F 숏 공시 2일째 소화 후 저가 매수 집중. 메모리·WFE·AI 반도체 바스켓 동반 리바운드·숏 커버링이 축, 11/19 NVIDIA Q3 FY27·HBM4 LTA cadence가 반등 지속 분수령. institutional flow 렌즈로는 반도체 바스켓 매수 복귀 축, 밸류에이션 렌즈로는 NVDA forward P/E 30 재점검 축, 시나리오 렌즈로는 11/19 NVDA Q3·CAPEX 2027 가이던스가 재랠리 분수령."
      },
      {
        "time": "2026-11-07 05:00 KST",
        "type": "반도체·장비",
        "sector": "반도체",
        "detail": "TSMC(TSM)·ASML(ASML)·Applied Materials(AMAT)·AMD(AMD). 375.26달러 +6.6%·1,426.93달러 +5.2%·339.19달러 +6.2%·436.02달러 +7.8% 파운드리·장비·AI 반도체 바스켓 금요일 복구 랠리, 전일 전면 투매 2일째 소화 후 저가 매수 확산. TSMC FY26 매출 상단·ASML EUV·High-NA 레버리지·AMD MI400 cadence가 축, Burry 숏 서사 2일째 소화 완화가 반등 트리거. institutional flow 렌즈로는 장비 바스켓 매수 복귀 축, 밸류에이션 렌즈로는 TSM forward P/E 22 리레이팅 축, 시나리오 렌즈로는 CAPEX 2027 가이던스·HBM4 LTA cadence가 반등 지속 분수령."
      },
      {
        "time": "2026-11-07 05:00 KST",
        "type": "데이터센터·냉각",
        "sector": "데이터센터",
        "detail": "Dell(DELL)·Arista(ANET)·Vertiv(VRT)·CoreWeave(CRWV). 339.77달러 +7.3%·167.98달러 +5.5%·185.78달러 +5.2%·45.65달러 +4.6% AI 인프라 바스켓 금요일 복구 랠리 선봉, 반도체 바스켓 리바운드에 후방 수요 재점검. 하이퍼스케일러 2027 CAPEX 복합 1조달러대 번레이트·GB300 서버·냉각·네트워킹 수주 모멘텀이 축, AI 밸류 디레이팅 2일째 소화 완화 결합. institutional flow 렌즈로는 AI 인프라 바스켓 저가 매수 축, 밸류에이션 렌즈로는 DELL forward P/E 18 리레이팅 축, 시나리오 렌즈로는 11/19 NVIDIA Q3 Rubin 양산·서버 수주 cadence가 리더십 분수령."
      },
      {
        "time": "2026-11-07 05:00 KST",
        "type": "핀테크·결제",
        "sector": "핀테크·결제",
        "detail": "Visa(V)·Mastercard(MA)·PayPal(PYPL). 417.36달러 -1.2%·648.91달러 -1.0%·58.49달러 -0.8% 결제 바스켓 금요일 추가 조정, 반도체 바스켓 반등 속 로테이션 아웃 지속. FY26 결제량 +9%·크로스보더 +12~13%·VAS +22% 중기 서사는 유지, 스와이프 수수료 재규제·Credit Card Competition Act 재점화가 단기 카운터. institutional flow 렌즈로는 결제 바스켓 로테이션 아웃 지속 축, 밸류에이션 렌즈로는 V forward P/E 28 디레이팅 축, 시나리오 렌즈로는 Q4 글로벌 소비자 지출·규제 공방이 리레이팅 분수령."
      },
      {
        "time": "2026-11-07 05:00 KST",
        "type": "방산",
        "sector": "방산",
        "detail": "Lockheed Martin(LMT)·Northrop Grumman(NOC)·Boeing(BA)·General Dynamics(GD). 565.19달러 -1.9%·513.95달러 -2.2%·170.18달러 -1.3%·350.48달러 -1.6% 방산 바스켓 조정, 반도체 바스켓 반등에 밀려 차익실현 로테이션 아웃 확산. 2026 국방예산 1조달러 상단·NGAD·F-35 Block 5·B-21 Raider 양산 cadence는 중기 서사로 유지, 바스켓 리밸런싱이 단기 축. institutional flow 렌즈로는 방산 바스켓 차익실현 축, 밸류에이션 렌즈로는 LMT forward P/E 18 리레이팅 축, 시나리오 렌즈로는 FY27 예산 승인·NGAD 양산·B-21 cadence가 반등 분수령."
      }
    ]
  }
];
