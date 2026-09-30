const updates = [
  {
    "date": "2026-09-30 19:20 KST",
    "summary": "S&P 500 7,670.84 -0.16% - 30년물 국채금리 상승·소비자심리 약세에 최고가 인근 조정\n마이크론 실적 D-day - FY26 4Q 매출 500억달러 가이던스 대기, 반도체 전방 축\n엔비디아 228달러 강세 유지 - 자사주 1,500억달러 매입 프리미엄 지지 지속\n오늘 밤 미 8월 PCE 발표 - 헤드라인 3.7%·코어 3.4% 관측, 11월 인하 확률 재확인\nAST 스페이스모바일 60달러 +0.7% - BlueBird 배포·상용화 마일스톤 재점화",
    "changes": [
      {
        "time": "2026-09-30 19:15 KST",
        "type": "지수·매크로",
        "sector": "지수·매크로",
        "detail": "S&P 500·나스닥·다우·10년물 국채. 어제 S&P 500 7,670.84 -0.16%·나스닥 26,797.54 -0.09%·다우 51,349.92 -0.26% 3대 지수 소폭 조정 마감이 어제 축, 30년물 국채금리 상승·8월 컨퍼런스보드 소비자심리 약세가 사상 최고가 인근 조정 근거. cross-asset 렌즈로는 10년물 4.6% 유지·30년물 스티프너 확대 축, 정책 렌즈로는 오늘 밤 8월 PCE 헤드라인 3.7%·코어 3.4% 관측이 11월 25bp 인하 확률 95% 유지 카타리스트, sector rotation 렌즈로는 성장주(반도체) 지지 vs 방어주(소비 필수·헬스케어) 조정 대치 축, institutional flow 렌즈로는 실적 시즌 앞두고 매수 관망 확대 축, 시나리오 렌즈로는 PCE 컨센 부합·마이크론 컨센 상회 시 반도체 랠리 지속 카타리스트."
      },
      {
        "time": "2026-09-30 19:15 KST",
        "type": "반도체·AI",
        "sector": "반도체",
        "detail": "Micron(MU)·NVIDIA(NVDA)·AMD(AMD)·Broadcom(AVGO)·Lam Research(LRCX). Micron 1,071.88달러 +0.6%·NVIDIA 228.35달러 +0.5%·AMD 609.04달러 +0.2%·Broadcom 357.18달러 +0.6%·Lam Research 325.60달러 +0.5% 반도체 밸류체인 동반 소폭 강세가 오늘 최대 축, Micron FY2026 Q4 실적(오늘 새벽 발표·매출 500억달러 ±10억·GM 86% 가이던스·HBM 매출 100억달러 관측) 대기·NVIDIA 자사주 1,500억달러 매입 프리미엄 지지가 근거. capability 렌즈로는 Micron HBM 매출 100억달러 첫 돌파·HBM 2026년 완판·잔여 이행의무 1,000억달러가 산업 밸류에이션 재평가 축, monetization 렌즈로는 HBM4 gross margin 프리미엄 20~25%·MI450 앤트로픽 2GW 계약 재확인 축, sector rotation 렌즈로는 반도체 매수 회귀 vs 데이터센터 전력(TLN·CEG) 후방 관망 대치 축, 시나리오 렌즈로는 Micron 컨센 상회 시 반도체 랠리 지속·10/3 NFP가 연준 11월 25bp 인하 확률 유지 카타리스트."
      },
      {
        "time": "2026-09-30 19:15 KST",
        "type": "우주·항공",
        "sector": "우주",
        "detail": "AST SpaceMobile(ASTS)·Boeing(BA)·Rocket Lab(RKLB). ASTS 59.80달러 +0.7% 반등 유지·Boeing 191.81달러 +2.2% 강세·Rocket Lab 70.07달러 +0.5% 견조가 오늘 우주·항공 최대 축, BlueBird 위성 배포 진행·Boeing 777X 인증 기대·Rocket Lab Neutron 발사 관측이 근거. capability 렌즈로는 direct-to-cell 위성 커버리지 5,700개 셀타워 대체·Boeing 광폭기 인증·Rocket Lab 중형 로켓 축, monetization 렌즈로는 AT&T·버라이존 통신 파트너 트래픽 상단 확장·Boeing 백로그 5,500대·Rocket Lab 재사용 로켓 서사 축, sector rotation 렌즈로는 우주·항공 섹터 리레이팅 후방 수혜 축, 시나리오 렌즈로는 4분기 BlueBird 추가 발사·777X 인증·Neutron 발사 시점이 카타리스트."
      },
      {
        "time": "2026-09-30 19:15 KST",
        "type": "에너지",
        "sector": "에너지",
        "detail": "ExxonMobil(XOM)·Chevron(CVX)·Halliburton(HAL)·Bloom Energy(BE). 엑슨 161.35달러 -0.7%·셰브런 204.34달러 보합·Halliburton 31.54달러 -2.7%·Bloom Energy 294.26달러 +1% 대치가 오늘 에너지 최대 축, WTI 89달러 조정·PCE 관망에 정통 에너지 매수 이탈·AI 데이터센터 SOFC 후방 수주 서사 재점화가 근거. cross-asset 렌즈로는 WTI 90달러 상방 저항 후 조정 국면 축, monetization 렌즈로는 셰브런·엑슨 배당·자사주 매입 서사 유지 vs Halliburton 서비스 매출 조정 대치 축, sector rotation 렌즈로는 전통 에너지 이탈 vs AI 인프라 에너지(BE·CEG) 매수 회귀 대치 축, 정책 렌즈로는 PCE 결과가 에너지 가격 하방 유지 여부 결정 축, 시나리오 렌즈로는 4분기 OPEC+ 감산 유지 결정이 에너지 반등 카타리스트."
      },
      {
        "time": "2026-09-30 19:15 KST",
        "type": "핀테크·크립토",
        "sector": "핀테크·결제",
        "detail": "Coinbase(COIN)·MicroStrategy(MSTR)·Robinhood(HOOD). 코인베이스 190.18달러 +0.1%·MSTR 155.83달러 +0.7%·Robinhood 117.50달러 +1.1% 크립토·핀테크 강세가 오늘 축, BTC 83,628달러 +0.2%·XRP 1.49달러 -0.4% 크립토 리스크온 유지가 근거. cross-asset 렌즈로는 BTC 채권 대안 자산 프리미엄 재점화 축, monetization 렌즈로는 코인베이스 거래대금 리레이팅·MSTR 비트코인 트레저리 프리미엄·Robinhood 옵션·크립토 매출 3축 리레이팅 축, institutional flow 렌즈로는 크립토 ETF 유입 재개 관측 축, 정책 렌즈로는 SEC 크립토 규제 프레임워크 완화 서사 지속 축, 시나리오 렌즈로는 4분기 BTC 90,000달러 저항 돌파 여부가 관련주 랠리 지속 카타리스트."
      }
    ]
  }
];
