const updates = [
  {
    "date": "2026-10-26 19:12 KST",
    "summary": "FOMC 10/27-28 D-1 - 25bp 인하 선반영, 메가 어닝 위크 집결\nAlphabet·META·MSFT 10/29 D-3 - CSP CAPEX·AI 광고 가이던스 집중\nApple·Amazon 10/30 D-4 - 홀리데이 가이던스·AWS 성장률 분수령\nLMT 10/28 Q3 D-2 - NATO 2027 CAPEX 가이던스 상향 기대\nBMI 149달러 +13.5% - 수자원 유틸 디펜시브 로테이션 가속",
    "changes": [
      {
        "time": "2026-10-26 19:00 KST",
        "type": "AI 메가캡",
        "sector": "AI 플랫폼",
        "detail": "Alphabet(GOOGL)·Meta(META)·Microsoft(MSFT)·Apple(AAPL)·Amazon(AMZN)·NVIDIA(NVDA). 직전 거래일 종가 GOOGL 320.21달러 -1.2%·META 642.62달러 -1%·MSFT 524.51달러 +0.7%·AMZN 248달러 -1%·NVDA 210.96달러 -0.6%. 10/29 Alphabet·META·MSFT 동반 Q3 D-3, 10/30 Apple·Amazon Q3 D-4 메가 위크 집결. CSP CAPEX 가이던스·AI 광고 매출 레버리지·AWS·Azure 성장률·AI 액셀러레이터 공급 가이던스 집중, Vera Rubin 램프업·OpenAI/Anthropic 외부 공급 백로그가 상방 축. monetization 렌즈로는 AI 액셀러레이터·클라우드·AI 광고 매출 레버리지 축, institutional flow 렌즈로는 메가캡 Q3 D-데이 앞 포지션 재편 축, 밸류에이션 렌즈로는 forward P/E 35배 프리미엄 재검증 축, 시나리오 렌즈로는 10/29·10/30 CSP CAPEX·2027 AI monetization·홀리데이 가이던스 공식화가 리레이팅 분수령."
      },
      {
        "time": "2026-10-26 19:00 KST",
        "type": "금융·은행",
        "sector": "금융·은행",
        "detail": "JPMorgan(JPM)·Bank of America(BAC)·Wells Fargo(WFC)·Goldman Sachs(GS). FOMC 10/27-28 D-1 금리 결정 임박이 은행주 분기점. 미 10년물 4.3%대·2년물 3.9%대 커브 가팔라짐에 NIM 완충 vs 신용카드·CRE 손실률 재점검 흐름, 시장은 25bp 인하·연내 추가 1회 인하 가이던스에 집중. monetization 렌즈로는 NIM 확장 vs 신용 손실 믹스 축, institutional flow 렌즈로는 FOMC 앞 은행주 포지션 재편 축, 밸류에이션 렌즈로는 forward P/B 1.5배 재검증 축, cross-asset 렌즈로는 커브 가팔라짐·회사채 스프레드 축, 시나리오 렌즈로는 FOMC 25bp 인하·연내 추가 인하 횟수·2027 자본환원·CRE 손실률 가이던스가 리레이팅 분수령."
      },
      {
        "time": "2026-10-26 19:00 KST",
        "type": "방산",
        "sector": "방산",
        "detail": "Lockheed Martin(LMT)·Northrop Grumman(NOC)·RTX·General Dynamics(GD)·Boeing(BA). 직전 거래일 종가 LMT 604.18달러 +2.4%·NOC 551.44달러 -0.2%·RTX 191.01달러 -1.9%·GD 349.36달러 -0.4%·BA 188.35달러 +0.4%. 10/28 LMT Q3 D-2, 10/29 BA Q3 D-3 분수령. NATO 2027 CAPEX 가이던스 상향 전망·우크라 재무장·중동 긴장 지속 수주 모멘텀이 디펜시브 리더십 축. monetization 렌즈로는 미사일·방공·우주·극초음속 매출 레버리지 축, institutional flow 렌즈로는 방산 디펜시브 자금 유입 가속 축, 밸류에이션 렌즈로는 forward P/E 18배 섹터 프리미엄 유지 축, 시나리오 렌즈로는 10/28 LMT·10/29 BA·국방예산 공식화·추가 수주가 리레이팅 분수령."
      },
      {
        "time": "2026-10-26 19:00 KST",
        "type": "사이버보안",
        "sector": "사이버보안",
        "detail": "CrowdStrike(CRWD)·Palo Alto(PANW)·Zscaler(ZS)·Fortinet(FTNT)·Cloudflare(NET)·Okta(OKTA). 직전 거래일 종가 CRWD 257.57달러 +8.2%·PANW 380.55달러 +7.2%·ZS 255.15달러 +7.3%·FTNT 179.99달러 +4.1%·NET 325.73달러 +7.3%·OKTA 213.05달러 +5.8%. 사이버보안 체인 전면 급등, 글로벌 데이터센터 보안 수요·에이전트 AI 보안 레이어 재점화·AI 기반 위협 탐지 ARR 레버리지가 축. monetization 렌즈로는 플랫폼 ARR·AI 위협 탐지 매출 레버리지 축, institutional flow 렌즈로는 사이버보안 로테이션 유입 축, 밸류에이션 렌즈로는 forward EV/S 15배 재평가 축, 시나리오 렌즈로는 Q3 ARR 가이던스·에이전트 AI 보안 수주 공식화가 리레이팅 분수령."
      },
      {
        "time": "2026-10-26 19:00 KST",
        "type": "물·수자원",
        "sector": "물·수자원",
        "detail": "Badger Meter(BMI)·American Water Works(AWK)·Essential Utilities(WTRG)·Xylem(XYL)·Pentair(PNR). 직전 거래일 종가 BMI 151.24달러 +1.1%·AWK 142.75달러 -0.3%·WTRG 43.11달러 -0.4%·XYL 108.74달러 -0.5%·PNR 55.30달러 +0.2%. AI 데이터센터 냉각·전력 체인 조정 와중 유틸리티 디펜시브 로테이션 유입·금리 완화 기대 수혜 재점화, FOMC 25bp 인하 가이던스가 상방 축. monetization 렌즈로는 스마트 미터·수도 유틸 regulatory ROE 레버리지 축, institutional flow 렌즈로는 유틸리티 디펜시브 로테이션 가속 축, 밸류에이션 렌즈로는 forward EV/EBITDA 15배 재평가 축, cross-asset 렌즈로는 미 10년물 4.3%대 유틸 수혜 축, 시나리오 렌즈로는 Q3 EPS·규제자본 가이던스·FOMC 금리 결정이 상승 분수령."
      }
    ]
  }
];
