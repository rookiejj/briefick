const updates = [
  {
    "date": "2026-11-12 07:20 KST",
    "summary": "코어위브 +14.3%·델 +8.5% AI 인프라 V-반등 - 지난주 조정 되돌림\n오라클 +7.4%·마벨 +7.0% 급등 - AI 바스켓 외곽주 로테이션 재점화\n블룸에너지 +10.3%·오클로 +6.2% - 데이터센터 SOFC·SMR 전력 랠리\n브로드컴 +5.8%·아리스타 +5.7% - 커스텀 AI 가속기·네트워킹 수요 재확인\n엔비디아 +3.4% 반등 - Q3 FY27 D-7, AI 플랫폼 리더십",
    "changes": [
      {
        "time": "2026-11-11 16:00 ET",
        "type": "AI 인프라",
        "sector": "데이터센터",
        "detail": "CoreWeave(CRWV)·Dell Technologies(DELL)·Oracle(ORCL)·Vertiv(VRT). 55.68달러 +14.3%·362.76달러 +8.5%·126.63달러 +7.4%·206.78달러 +6.5% AI 인프라 바스켓 화요일 종가 V-반등, CoreWeave GPU 임대 백로그 가속·Dell AI 서버 FY26 600억달러 가이던스·Oracle 6,640억달러 백로그 cadence·Vertiv 냉각·전력 수주 cadence가 축. 하이퍼스케일러 2027 CAPEX 1조달러대 번레이트 재점화·메가캡 발주 cadence 재확인·CRWV 서사 전환이 1차 분수령, 지난주 AI CAPEX 피크 공포 소화·AI 2위 플레이어 바스켓 양분 재검증이 중기 레버리지. monetization 렌즈로는 데이터센터 수주 백로그·GPU 가동률 축, 밸류에이션 렌즈로는 ORCL forward P/E 28·DELL 17·CRWV 숏 커버링 축, 시나리오 렌즈로는 하이퍼스케일러 2027 CAPEX 가이던스·Rubin cadence·NVDA Q3가 리더십 분수령."
      },
      {
        "time": "2026-11-11 16:00 ET",
        "type": "반도체",
        "sector": "반도체",
        "detail": "NVIDIA(NVDA)·Broadcom(AVGO)·Micron(MU)·Marvell(MRVL)·Arista(ANET). 174.51달러 +3.4%·351.38달러 +5.8%·773.03달러 +6.6%·165.13달러 +7.0%·195.76달러 +5.7% 반도체·네트워킹 바스켓 화요일 종가 랠리, AVGO 커스텀 실리콘 수주 cadence·MU 메모리 바스켓 리더십·MRVL 커스텀 ASIC·ANET AI 클러스터 스위칭 수요가 축. 11/19 NVIDIA Q3 FY27 D-7 임박·Rubin 양산 cadence·HBM4 LTA 가이던스 공식화·2027 CAPEX 1조달러대 번레이트 지속성이 밸류 디스커버리 1차 분수령, 'AI 2위 플레이어' 바스켓 양분이 변동성 축. monetization 렌즈로는 데이터센터 매출 번레이트·엔터프라이즈 AI ARR 축, 밸류에이션 렌즈로는 NVDA forward P/E 29·AVGO 40·MRVL 32 재검증 축, 시나리오 렌즈로는 11/19 Q3·Rubin cadence·2027 CAPEX 가이던스가 리더십 분수령."
      },
      {
        "time": "2026-11-11 16:00 ET",
        "type": "전력",
        "sector": "전력·그리드",
        "detail": "Bloom Energy(BE)·Oklo(OKLO)·Vistra(VST)·NuScale(SMR)·Constellation(CEG). 204.55달러 +10.3%·26.64달러 +6.2%·133.97달러 +2.2%·5.52달러 +5.7%·269.56달러 +0.7% AI 데이터센터 전력 바스켓 화요일 종가 랠리, BE SOFC 수주 cadence·OKLO Aurora Powerhouse cadence·SMR Standard Power 수주 재점화가 축. AI PPA 수요 2026 하반기 cadence·2027 전력 CAPEX 가이던스·하이퍼스케일러 원전 PPA 서사 복귀·메가캡 후방 PPA cadence가 중기 서사, 전력 CAPEX 피크 우려 소화가 모멘텀 축. monetization 렌즈로는 PPA 계약 백로그·GW당 매출 축, 밸류에이션 렌즈로는 BE forward P/E 60·OKLO 네거티브 earnings yield·CEG 32 재검증 축, 시나리오 렌즈로는 Aurora Powerhouse·SOFC 수주·AI 데이터센터 PPA·규제 승인 cadence가 리레이팅 분수령."
      },
      {
        "time": "2026-11-11 16:00 ET",
        "type": "AI 플랫폼",
        "sector": "AI 플랫폼",
        "detail": "Palantir(PLTR)·Tesla(TSLA)·TSMC(TSM)·AMD. 174.26달러 +3.2%·390.02달러 +2.7%·412.42달러 +4.0%·527.51달러 +2.4% AI 플랫폼·AI 2위 바스켓 화요일 종가 복원 랠리, PLTR US 커머셜 매출 +148% YoY 소화·Burry 13F 숏 공개 소화·TSMC FY26 매출 상단 가이던스·AMD OpenAI MOU·MI400 cadence가 축. 메가캡 7종 바스켓 혼조 속 AI 플랫폼 복원·AI 2위 플레이어 양분 재검증·엔터프라이즈 AI ARR 가속이 중기 서사, 밸류 피크 공포 소화가 모멘텀 축. monetization 렌즈로는 PLTR 엔터프라이즈 ARR·TSLA FSD 매출·TSM HPC 매출 축, 밸류에이션 렌즈로는 PLTR forward P/E 180·TSLA 90·TSM 24 재검증 축, 시나리오 렌즈로는 PLTR 4분기 가이던스·TSLA 로보택시 cadence·TSMC Q4 가이던스·AMD MI400 cadence가 리레이팅 분수령."
      },
      {
        "time": "2026-11-11 16:00 ET",
        "type": "매크로",
        "sector": "매크로·정책",
        "detail": "美 상원 셧다운 종료 60-40 가결 뒤 하원 복귀 가결 임박 소화, 1월 30일 임시예산·연방공무원 소급 급여·10월 CPI BLS 블랙아웃 해제 cadence가 축. 12월 FOMC 25bp 인하 가이던스 재검증·10년물 국채금리 4.1%대 하락 복원·달러인덱스 102 소강·AI CAPEX 피크 공포 소화가 중기 서사, 위험자산 로테이션 복귀·AI 인프라 V-반등이 모멘텀 축. cross-asset 렌즈로는 10y-2y 커브 25bp 복원·VIX 18 재점검 축, 밸류에이션 렌즈로는 S&P 500 forward P/E 23·earnings yield 4.3% 축, 시나리오 렌즈로는 하원 가결·10월 CPI 발표·12월 FOMC 25bp 인하 공식화·AI 인프라 V-반등이 리더십 분수령."
      }
    ]
  }
];
