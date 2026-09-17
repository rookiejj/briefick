const updates = [
  {
    "date": "2026-09-18 07:30 KST",
    "summary": "Ramp 440억달러 IPO-ready - ARR 15억달러 상단, 연말 상장 카운트다운\nOpenAI 프리IPO 밸류 1.2조달러 - 2027 상장 로드맵 재확인\nDatabricks 1,900억달러 - 데이터 인프라 카테고리 리더 지배 유지\nAnduril 300억달러 - MSPO 방산 파이프 재점화, NATO 재무장 지지\nStripe 1,590억달러 - PayPal 인수 제안 여진, Tempo L1 롤아웃 지속",
    "changes": [
      {
        "time": "2026-09-18 07:30 KST",
        "type": "펀딩",
        "sector": "AI 인프라",
        "detail": "Anthropic(비상장). 10월 IPO 로드쇼 앞두고 엔비디아 최대 100억달러 투자 검토 보도가 카테고리 카타리스트 최대 축, 상장 밸류 2조달러·최대 1,000억달러 조달 시나리오 확산이 라운드 상단 재정의 축. capability 렌즈로는 Claude Fable 5.1·Mythos 5.1·Enterprise Frontier Safeguards(EFS) 삼중 릴리스 확산이 프리미엄 지지 축, monetization 렌즈로는 Q2 매출 115억달러(전년 동기 대비 14배)·조정 영업이익 흑자 2분기 연속 유지가 매출 재점화 축, IPO 윈도우 렌즈로는 Morgan Stanley·Goldman Sachs·JPMorgan 3사 언더라이터 확정·10월 상장 시나리오 유지가 프라이빗 마켓 리레이팅 최대 축, cross-asset 렌즈로는 FOMC 첫 인상 후 밸류 재조정 국면에서도 2조달러 시나리오 방어가 카테고리 리더 지배력 재확인 카타리스트."
      },
      {
        "time": "2026-09-18 07:30 KST",
        "type": "펀딩",
        "sector": "AI 인프라",
        "detail": "OpenAI(비상장). FT 보도로 기업가치 1.2조달러 프리IPO 라운드 논의 확산이 카테고리 카타리스트 최대 축, 알트먼 CFO 2027 IPO 공식화 재확인이 라운드 밸류 상단 지지 근거. capability 렌즈로는 GPT-5 상용화·에이전트 SDK 확산·Sora 2 영상 카테고리 지배 유지가 프리미엄 지지 축, monetization 렌즈로는 커밋 자본 1,220억달러 유동성 상단·소비자 매출 100억달러 카테고리 리더 지배력 확인 축, IPO 윈도우 렌즈로는 2027 상장 로드맵 확정·프라이빗 마켓 밸류 재조정 국면 방어 관건, cross-asset 렌즈로는 Anthropic 대비 밸류 격차 유지가 카테고리 리더 3강 구도 재확인 축, sector rotation 렌즈로는 프라이빗 → 퍼블릭 마켓 전환 국면에서 카테고리 리더 프리미엄 재확인 카타리스트."
      },
      {
        "time": "2026-09-18 07:30 KST",
        "type": "밸류",
        "sector": "엔터프라이즈 SW",
        "detail": "Databricks(비상장). 밸류 1,900억달러·2027 상장 시사·데이터 인프라 카테고리 리더 지배력 유지가 프라이빗 마켓 최대 축, ARR 30억달러 상단 재확인·엔터프라이즈 채택 확산이 매출 재점화 축. capability 렌즈로는 Mosaic AI·MLflow 확산·Snowflake 대비 데이터 통합 상단이 카테고리 프리미엄 지지 축, monetization 렌즈로는 AI 데이터 워크로드 상단·기업 자체 파인튜닝 수요 확장이 매출 상단 확장 축, IPO 윈도우 렌즈로는 FOMC 첫 인상 후 성장주 듀레이션 카운터가 2027 상장 시점 재조정 카타리스트, cross-asset 렌즈로는 Snowflake 상장가 대비 프리미엄 유지가 밸류 상단 지지 축."
      },
      {
        "time": "2026-09-18 07:30 KST",
        "type": "밸류",
        "sector": "우주·모빌리티·방산",
        "detail": "Anduril(비상장). 밸류 300억달러 유지·MSPO 2026 폴란드 방산 전시회 참가·미 국방부 계약 상단·NATO 5% GDP 목표 후방 수혜가 카테고리 카타리스트 최대 축, 중동 지정학 리스크 재점화·한국 방산 대장주 급등이 방산 카테고리 후방 지지 축. capability 렌즈로는 Lattice OS·자율 드론·무인 잠수함 파이프 확산이 프론티어 방산 프리미엄 재정의 축, monetization 렌즈로는 미 SDA 통신위성 계약·Ghost·Barracuda 대량 발주 상단이 매출 재점화 축, cross-asset 렌즈로는 유가 100달러대 유지·NATO 재무장 사이클이 밸류 상단 지지 3중 축, IPO 윈도우 렌즈로는 2027 상장 시나리오 유지·방산 프라이빗 카테고리 리더 지배력 재확인."
      },
      {
        "time": "2026-09-18 07:30 KST",
        "type": "밸류",
        "sector": "핀테크",
        "detail": "Ramp(비상장). 밸류 440억달러 확정·ARR 15억달러 상단·CEO Glyman '연말 IPO-ready' 재확인·cash flow positive 유지가 카테고리 카타리스트 최대 축, Brex → Capital One 인수 완료 후 독립 legal fintech 대표주 지배력 재정의. capability 렌즈로는 법인 카드·경비 관리·AI 자동화 파이프 확장이 프리미엄 지지 축, monetization 렌즈로는 ICONIQ·GIC·OTPP Series F+ 7.5억달러 조달이 매출 재점화 축, IPO 윈도우 렌즈로는 연말 상장 카운트다운 확정·FOMC 첫 인상 후 프리IPO 밸류 재조정 국면 방어 관건, cross-asset 렌즈로는 Anthropic 10월·Ramp 연말 순차 IPO 사이클이 프라이빗 마켓 리레이팅 카타리스트, sector rotation 렌즈로는 프라이빗 → 퍼블릭 마켓 전환 국면에서 핀테크 카테고리 리더 프리미엄 재확인."
      }
    ]
  }
];
