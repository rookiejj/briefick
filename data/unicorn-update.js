const updates = [
  {
    "date": "2026-09-17 07:35 KST",
    "summary": "앤트로픽 615억달러 라운드 마감 - 10월 IPO 로드쇼 병행 확산\nDatabricks 1,900억달러 - 2027 상장 시사, 데이터 카테고리 리더\nAnduril 300억달러 - 유가·NATO 5% 후방 방산 프리미엄\nRamp 440억달러 - 연말 IPO-ready, ARR 15억달러 상단\nStripe 950억달러 - 결제 카테고리 리더 상장 시나리오 유지",
    "changes": [
      {
        "time": "2026-09-17 07:35 KST",
        "type": "펀딩",
        "sector": "AI 인프라",
        "detail": "Anthropic(비상장). 35억달러 라운드 마감 임박·기업가치 615억달러 재확인·Lightspeed·General Catalyst·Bessemer·MGX 아부다비 확정이 프라이빗 마켓 최대 카타리스트, 10월 IPO 로드쇼 병행·상장 밸류 2조달러 시나리오 확산이 카테고리 리더 지배력 재정의 축. 9/16 Claude·Cowork 통합 인터페이스 공식화가 monetization 렌즈 상단 재확인 축, capability 렌즈로는 Claude Fable 5.1 Intelligence Index 66점·구글 내부 Opus 5 개방·엔터프라이즈 채택 확산이 밸류 상단 지지 축, IPO 윈도우 렌즈로는 FOMC 첫 인상 후 프라이빗 마켓 밸류 재조정 국면 상장 방어 서사가 관건, cross-asset 렌즈로는 카테고리 리더 상장이 프라이빗 마켓 리레이팅 카타리스트."
      },
      {
        "time": "2026-09-17 07:35 KST",
        "type": "밸류",
        "sector": "엔터프라이즈 SW",
        "detail": "Databricks(비상장). 밸류 1,900억달러·2027 상장 시사·데이터 인프라 카테고리 리더 지배력 유지가 프라이빗 마켓 최대 축, ARR 30억달러 상단 재확인·엔터프라이즈 채택 확산이 매출 재점화 축. capability 렌즈로는 Mosaic AI·MLflow 확산·Snowflake 대비 데이터 통합 상단이 카테고리 프리미엄 지지 축, monetization 렌즈로는 AI 데이터 워크로드 상단·기업 자체 파인튜닝 수요 확장이 매출 상단 확장 축, IPO 윈도우 렌즈로는 FOMC 첫 인상 후 성장주 듀레이션 카운터가 2027 상장 시점 재조정 카타리스트, cross-asset 렌즈로는 Snowflake 상장가 대비 프리미엄 유지가 밸류 상단 지지 축."
      },
      {
        "time": "2026-09-17 07:35 KST",
        "type": "밸류",
        "sector": "우주·모빌리티·방산",
        "detail": "Anduril(비상장). 밸류 300억달러 유지·미 국방부 계약 상단·NATO 5% GDP 목표 후방 수혜가 카테고리 카타리스트 최대 축, 유가 108달러대 유지·중동 지정학 리스크 재점화가 방산 카테고리 후방 지지 축. capability 렌즈로는 Lattice OS·자율 드론·무인 잠수함 파이프 확산이 프론티어 방산 프리미엄 재정의 축, monetization 렌즈로는 미 SDA 통신위성 계약·Ghost·Barracuda 대량 발주 상단이 매출 재점화 축, cross-asset 렌즈로는 유가 상승·NATO 재무장 사이클이 밸류 상단 지지 3중 축, IPO 윈도우 렌즈로는 2027 상장 시나리오 유지·방산 프라이빗 카테고리 리더 지배력 재확인."
      },
      {
        "time": "2026-09-17 07:35 KST",
        "type": "밸류",
        "sector": "핀테크",
        "detail": "Ramp(비상장). 밸류 440억달러·ARR 15억달러 상단 재확인·연말 IPO-ready 서사가 카테고리 카타리스트 최대 축, 기업 지출 관리 SaaS 카테고리 지배력·AI 기반 자동화 상단 확장이 매출 재점화 축. capability 렌즈로는 Ramp AI·비용 자동 분류·회계 통합 상단이 카테고리 프리미엄 재정의 축, monetization 렌즈로는 중소·대형 기업 채택 확산·거래 수수료 상단 확장이 매출 상단 재정의 축, IPO 윈도우 렌즈로는 FOMC 첫 인상 후 연말 상장 시나리오 재검증·핀테크 프라이빗 카테고리 리더 지배력 재확인, cross-asset 렌즈로는 Brex·Stripe 대비 프리미엄 유지가 밸류 상단 지지 축."
      },
      {
        "time": "2026-09-17 07:35 KST",
        "type": "밸류",
        "sector": "핀테크",
        "detail": "Stripe(비상장). 밸류 950억달러 유지·결제 인프라 카테고리 리더 지배력·2026 세컨더리 마켓 밸류 재확인이 프라이빗 마켓 카타리스트 최대 축, 글로벌 결제 볼륨 1.4조달러 상단·개발자 SDK 표준 서사가 매출 재점화 축. capability 렌즈로는 Stripe Sigma·자동 결제 최적화·AI 사기 탐지 확산이 카테고리 프리미엄 지지 축, monetization 렌즈로는 X·Amazon·SaaS 확산·플랫폼 파트너십 상단이 매출 상단 재정의 축, IPO 윈도우 렌즈로는 FOMC 첫 인상 국면에서 2027 상장 시나리오 유지·듀레이션 카운터 방어 관건, cross-asset 렌즈로는 카테고리 프리미엄 유지가 밸류 상단 지지 축."
      }
    ]
  }
];
