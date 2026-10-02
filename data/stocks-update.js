const updates = [
  {
    "date": "2026-10-02 19:20 KST",
    "summary": "어플라이드 머티리얼즈 530달러대 강세 지속 - HBM4 CAPEX 반도체 장비 매수 회귀\n미 셧다운 2일차·NFP 발표 연기 - Fed 추가 인하 서사 유지\n콘스텔레이션에너지 265달러 +4.4% - AI 데이터센터 전력 PPA 재점화\n애플·구글 조정 - 성장주 숨고르기 vs 반도체·전력 레버리지 전환\n씨티·BAC Q3 실적 앞두고 관망 - 분기말 은행주 숨고르기",
    "changes": [
      {
        "time": "2026-10-02 19:15 KST",
        "type": "반도체·장비",
        "sector": "반도체",
        "detail": "Applied Materials(AMAT)·Lam Research(LRCX)·KLA(KLAC)·Micron(MU). AMAT 529.30달러 +3.5%·LRCX 340.10달러 +3.5%·MU 1,097.39달러 +3% 반도체 장비·메모리 트리오 강세가 오늘 축, 마이크론 FY26 Q4 HBM 20억달러 record 지속·HBM4 2Q26 shipping 궤도 재확인·1-gamma 노드 CAPEX 200억달러 확장 서사가 근거. capability 렌즈로는 AMAT EPI·CVD 리드·LRCX etch 리드·MU HBM 선도 축, monetization 렌즈로는 HBM·AI 서버 CAPEX 확대로 WFE 매출 리레이팅 지속 축, sector rotation 렌즈로는 반도체 매수 회귀 2일차 레버리지 확산 축, cross-asset 렌즈로는 한국 대덕전자·리노공업 소부장 레버리지 동조 축, 시나리오 렌즈로는 Q3 WFE 가이던스 상향이 지속 카타리스트."
      },
      {
        "time": "2026-10-02 19:15 KST",
        "type": "매크로·정책",
        "sector": "지수·매크로",
        "detail": "S&P 500·Nasdaq·10년물·DXY. 미 셧다운 2일차 지속·9월 NFP 발표 공백·10/8 FOMC 의사록 연기 리스크·미 10년물 4.5%대 하락·DXY 약세 전환이 오늘 매크로 축, 데이터 공백 속 Fed 10월 추가 25bp 인하 95% 확률 유지·안전자산 선호 완만 유입이 근거. cross-asset 렌즈로는 10년물 하락·금 4,200달러 임박·달러 약세 동시 진행 축, 정책 렌즈로는 셧다운 장기화 시 CPI·PPI·소매판매 연쇄 지연 리스크 축, institutional flow 렌즈로는 분기 전환 매수 유입 대기 축, 시나리오 렌즈로는 10월 말 FOMC 25bp 인하가 리스크온 재점화 카타리스트."
      },
      {
        "time": "2026-10-02 19:15 KST",
        "type": "전력·에너지",
        "sector": "전력·원자력",
        "detail": "Constellation Energy(CEG)·Vistra(VST)·Talen Energy(TLN)·NextEra(NEE). CEG 265.14달러 +4.4%·VST 139.68달러 +1%·TLN 318.27달러 +1.8% 전력·원전 동반 강세 지속이 오늘 축, AI 데이터센터 전력 수요 서사·CEG MSFT 쓰리마일 재가동·VST 데이터센터 PPA 확대·TLN AWS 공급 가이던스가 근거. capability 렌즈로는 CEG 쓰리마일 Unit 1 2028 재가동 궤도·VST Comanche Peak 확장 축, monetization 렌즈로는 AI 데이터센터 PPA 20년 장기 공급 서사 축, sector rotation 렌즈로는 반도체·AI SW 매수 회귀 국면에서 전력 테마 함께 상승 지속 축, cross-asset 렌즈로는 미 10년물 하락·AI CAPEX 서사 유지 축, 시나리오 렌즈로는 4분기 추가 데이터센터 PPA 발표가 모멘텀 지속 카타리스트."
      },
      {
        "time": "2026-10-02 19:15 KST",
        "type": "소프트웨어",
        "sector": "AI 플랫폼",
        "detail": "IBM(IBM)·ServiceNow(NOW)·Salesforce(CRM)·Intuit(INTU)·Apple(AAPL)·Alphabet(GOOGL). IBM 228.76달러 +4%·NOW 138.55달러 +3.4%·CRM 235.11달러 +2.4% AI SW 랠리 지속 vs AAPL·GOOGL 338.24달러 -1.7% 메가캡 조정이 오늘 축, 왓슨x 엔터프라이즈 AI 매출 기여 재부각·NOW Now Assist 라이선스 확대·CRM Agentforce 2.0 커스터머 서사 vs 성장주 숨고르기가 근거. capability 렌즈로는 IBM 하이브리드 AI·NOW 워크플로 자동화·CRM 에이전트 API 리드 축, monetization 렌즈로는 엔터프라이즈 AI 평균 계약 규모 상향 서사 축, sector rotation 렌즈로는 메가캡 조정·AI SW 중형주 레버리지 축, 시나리오 렌즈로는 Q3 실적 시즌 가이던스 상향이 확산 카타리스트."
      },
      {
        "time": "2026-10-02 19:15 KST",
        "type": "금융·은행",
        "sector": "금융·은행",
        "detail": "Citigroup(C)·Bank of America(BAC)·Wells Fargo(WFC)·Goldman Sachs(GS)·JPMorgan(JPM). Citi 125.91달러 -2.8%·BAC 53.42달러 -1.9%·WFC 78.84달러 -1.5%·GS 889달러 -1.4% 은행주 동반 조정 지속이 오늘 축, 분기말 차익 실현·Q3 실적 발표 앞두고 관망·NIM 상단 피크 서사 재점화가 근거. monetization 렌즈로는 Q3 트레이딩·IB 수수료 상단 기대 vs 분기말 차익 실현 대치 축, cross-asset 렌즈로는 미 10년물 4.5%대 하락에서 NIM 확장 둔화 서사 축, institutional flow 렌즈로는 분기말 은행주 북 클로징 매도 축, 정책 렌즈로는 11월 FOMC 25bp 인하 확률 95% 유지·금리 하방 압력이 NIM 전망 완화 축, 시나리오 렌즈로는 10월 중반 Citi·JPM Q3 실적이 반등 카타리스트."
      }
    ]
  }
];
