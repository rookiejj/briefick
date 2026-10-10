const updates = [
  {
    "date": "2026-10-10 19:20 KST",
    "summary": "JPM 10/13 Q3 어닝 D-3 - 대형은행 실적 시즌 개막 분수령\n테슬라 386달러 +3.1% 신고가 유지 - 10/21 Q3 실적 변곡 임박\n오라클 139달러 +3.4% 재랠리 소화 - OCI AI 수주 가속 지속\nPLTR 199달러대 사상 최고 유지 - 11월 초 Q3 어닝 리레이팅 임박\n10/14 CPI D-4 - 매파 FOMC 환경 디스인플레 재점검 분기점",
    "changes": [
      {
        "time": "2026-10-10 19:20 KST",
        "type": "실적 시즌",
        "sector": "금융·은행",
        "detail": "JPMorgan(JPM)·Wells Fargo(WFC)·Bank of America(BAC)·Goldman Sachs(GS)·Morgan Stanley(MS)·Citi(C). 10/9 금요일 종가 JPM 331.28달러·WFC 82.41달러·BAC 53.69달러·GS 881.94달러·MS 188.09달러·C 128.24달러 어닝 대기 선방 유지가 축, 10/13 JPM Q3 어닝 D-3·Q3 EPS 컨센 5.85달러 전년 5.07달러 +15% 전망·10/14~15 WFC·BAC·GS·MS·C 연쇄 발표·매파 FOMC·美 10년물 5.3% 환경 순이자마진·채권 트레이딩 레버리지가 근거. monetization 렌즈로는 Q3 EPS +15% 성장·NIM 확대 축, cross-asset 렌즈로는 美 10년물 급등·DXY 반등 환경 금융주 상대 지지 축, institutional flow 렌즈로는 대형은행 섹터 로테이션 재진입 축, 시나리오 렌즈로는 10/13 JPM 어닝·10/14 CPI·Q4 가이던스가 분수령 카타리스트."
      },
      {
        "time": "2026-10-10 19:20 KST",
        "type": "섹터",
        "sector": "자동차·모빌리티",
        "detail": "Tesla(TSLA)·Uber(UBER)·Rivian(RIVN). 10/9 금요일 종가 TSLA 386.81달러 +3.1% 신고가 유지·UBER 71.15달러 +1.3% 강세·RIVN 14.29달러 -0.3% 레인지가 축, Q3 인도 사상 최대 소화·Robotaxi 확장 서사·Uber Waymo 로봇택시 파트너십 가속·10/21 Tesla Q3 실적 분기점 임박이 근거. monetization 렌즈로는 Tesla Energy·Robotaxi 신규 매출 레버리지·Uber 모빌리티 플랫폼 리드 축, capability 렌즈로는 FSD V13·Optimus·Robotaxi 자율 서사 축, cross-asset 렌즈로는 리튬 안정·EV 수요 재점화 축, 시나리오 렌즈로는 10/21 Tesla Q3 실적·Robotaxi 확장 공시·Waymo 신규 도시 발표가 리레이팅 카타리스트."
      },
      {
        "time": "2026-10-10 19:20 KST",
        "type": "섹터",
        "sector": "AI 플랫폼",
        "detail": "Palantir(PLTR)·Oracle(ORCL)·Snowflake(SNOW)·MongoDB(MDB). 10/9 금요일 종가 PLTR 199.69달러 사상 최고 유지·ORCL 139.62달러 +3.4% 재랠리·SNOW 347달러대 안정·MDB 374달러대 선방이 축, 美 국방부 Replicator 2 계약 확장·엔터프라이즈 Foundry·AIP ARR 가속·Oracle 10GW DC 100억달러 Nvidia 계약 재점화·OCI AI 수주 가속·Q3 어닝 11월 초 임박 기대가 근거. monetization 렌즈로는 Foundry·AIP 엔터프라이즈 수주 확대 축, 밸류에이션 렌즈로는 PLTR·ORCL forward P/S 리레이팅·AI 서사 프리미엄 유지 축, institutional flow 렌즈로는 AI 플랫폼 섹터 데이터·분석 레이어 재편입 축, 시나리오 렌즈로는 11월 초 PLTR Q3·ORCL FY26 가이던스가 리레이팅 카타리스트."
      },
      {
        "time": "2026-10-10 19:20 KST",
        "type": "매크로",
        "sector": "반도체",
        "detail": "NVIDIA(NVDA)·Micron(MU)·AMD(AMD)·ASML(ASML)·TSMC(TSM). 10/9 금요일 종가 NVDA 231.21달러 반등 유지·MU 1,038달러대 회복·AMD 615달러대 조정 소화·ASML 1,808달러 +2.2% 강세·TSM 458달러 보합 반도체 혼조가 축, Vera Rubin 1Q26 양산·Thinking Machines 1GW 전용 할당·HBM4 솔드아웃·엔비디아·AMD 공급·AMD-Oracle MI450 5만개·AMD-OpenAI 6GW 멀티 벤더 체결 서사 유지가 근거. capability 렌즈로는 Vera Rubin·HBM4·MI450 세대 전환 리드 축, cross-asset 렌즈로는 美 10년물 급등 환경 성장주 할인율 상승 완화 축, monetization 렌즈로는 ASML EUV·NVDA·AMD GPU 매출 레버리지 축, 시나리오 렌즈로는 10/14 CPI·10월 하순 Micron Q4 FY26·11월 NVDA Q3 FY27 어닝이 카타리스트."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.updates = updates;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = updates;
}
