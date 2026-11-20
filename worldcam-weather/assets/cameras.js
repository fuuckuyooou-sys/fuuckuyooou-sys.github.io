/* 월드캠 웨더 — 카메라 데이터
 * 각 항목은 (1) 유튜브 공식 임베드 플레이어(youtube-nocookie)로만 표시하거나
 * (2) 원 제공기관 공식 페이지로 바로 연결합니다.
 * 스트림 URL·영상 파일을 추출하거나 재송출하지 않습니다.
 * 좌표는 카메라가 향한 장소 기준이며, 날씨(Open-Meteo) 조회에 사용됩니다.
 * cc = ISO 국가 코드(국가별 디렉토리 묶음 기준)
 * 등록 전 확인: 유튜브 라이브 검색(sp=EgJAAQ) + oEmbed 200(공개·임베드 허용) + 배포 페이지 실시간 재생 확인.
 */
window.CAMERA_DATA = [
  /* ───────────── 대한민국 ───────────── */
  {
    id: 'kr-banpo', yt: 'RVvYQghFCXk', name: '반포대교 · 한강', en: 'Banpo Bridge & Han River',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: '데일리서울 한강 라이브캠',
    lat: 37.5116, lon: 126.9954, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '한강', 'han river', '반포', 'banpo', '대한민국', 'korea', '한국'],
    note: '반포대교와 한강 야경을 4K로 24시간 송출하는 국내 채널입니다.'
  },
  {
    id: 'kr-seoulstation', yt: 'C3hW1VrwmNc', name: '서울역 광장', en: 'Seoul Station Plaza',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: 'GiGAeyes Live TV',
    lat: 37.5547, lon: 126.9707, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '서울역', 'seoul station', '광장', '대한민국', 'korea'],
    note: '서울역 광장과 KTX 출입구 방향을 비추는 도심 라이브캠입니다.'
  },
  {
    id: 'kr-myeongdong', yt: 'uGs3HNVqjLA', name: '명동 · 종로 야간 거리', en: 'Myeongdong & Jongno Night Walk',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Watchers Club',
    lat: 37.5636, lon: 126.9834, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '명동', 'myeongdong', '종로', 'jongno', '야경', '대한민국', 'korea'],
    note: '명동·종로 일대를 이동하며 보여주는 실시간 워킹 캠입니다.'
  },
  {
    id: 'kr-hongdae', yt: 'yzxiAJAXXtQ', name: '홍대입구역', en: 'Hongdae Station',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: '홍대라이브',
    lat: 37.5572, lon: 126.9245, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '홍대', 'hongdae', '마포', '대한민국', 'korea'],
    note: '홍대입구역 9번 출구 앞 유동인구를 24시간 보여줍니다.'
  },
  {
    id: 'kr-namsan', yt: 'Q6WKC4vDsUU', name: '남산서울타워', en: 'N Seoul Tower',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'street', src: 'creator', provider: '한강 라이브 365',
    lat: 37.5512, lon: 126.9882, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '남산', 'namsan', '남산타워', 'n seoul tower', '대한민국', 'korea'],
    note: '남산과 서울 도심 스카이라인을 담은 4K 라이브입니다.'
  },
  {
    id: 'kr-haeundae', yt: 'rKh675PnlP4', name: '부산 해운대해수욕장', en: 'Haeundae Beach',
    city: '부산', country: '대한민국', cc: 'KR', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'nature', src: 'creator', provider: 'Busan Haeundae Live',
    lat: 35.1587, lon: 129.1604, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '해운대', 'haeundae', '해변', 'beach', '대한민국', 'korea'],
    note: '해운대 백사장과 파도 상태를 실시간으로 확인할 수 있습니다.'
  },
  {
    id: 'kr-gwangalli', yt: 'GZ8MwCX_n14', name: '부산 광안리 · 광안대교', en: 'Gwangalli Beach & Gwangan Bridge',
    city: '부산', country: '대한민국', cc: 'KR', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'nature', src: 'creator', provider: 'Busan Live Cam',
    lat: 35.1530, lon: 129.1186, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '광안리', 'gwangalli', '광안대교', '해변', 'beach', '대한민국', 'korea'],
    note: '광안대교 야경과 광안리 해변을 4K로 송출합니다.'
  },

  /* ───────────── 일본 ───────────── */
  {
    id: 'jp-shibuya', yt: 'L6wO1-U2RTY', name: '도쿄 시부야·신주쿠 거리 산책', en: 'Shibuya & Shinjuku Walking Cam, Tokyo',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Japan Walk',
    lat: 35.6595, lon: 139.7005, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '시부야', 'shibuya', '신주쿠', 'shinjuku', '산책', 'walk', '일본', 'japan'],
    note: '방송사 대신 개인 크리에이터가 시부야·신주쿠 일대를 24시간 걸으며 중계하는 워킹 캠입니다.'
  },
  {
    id: 'jp-shibuya-center', yt: 'd1JuNg7knNo', name: '시부야 센터가이', en: 'Shibuya Center-gai',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'public', provider: '시부야센터상점가 (渋谷センター商店街)',
    lat: 35.6607, lon: 139.6986, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '시부야', 'shibuya', '센터가이', 'center gai', '일본', 'japan'],
    note: '상점가 협회가 직접 운영하는 센터가이 아치 앞 카메라입니다.'
  },
  {
    id: 'jp-kabukicho', yt: 'DjdUEyjx8GM', name: '신주쿠 가부키초', en: 'Shinjuku Kabukicho',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '가부키초 라이브 채널',
    lat: 35.6950, lon: 139.7034, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '신주쿠', 'shinjuku', '가부키초', 'kabukicho', '일본', 'japan'],
    note: '신주쿠 가부키초 중심가를 24시간 비추는 카메라입니다.'
  },
  {
    id: 'jp-ohguard', yt: '6dp-bvQ7RWo', name: '신주쿠 오가드 교차로', en: 'Shinjuku Ohguard Crossing',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: '신주쿠 오가드 라이브',
    lat: 35.6936, lon: 139.7000, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '신주쿠', 'shinjuku', '오가드', 'ohguard', '일본', 'japan'],
    note: '신주쿠 대가드(오가드) 교차로의 차량·보행 흐름을 보여줍니다.'
  },
  {
    id: 'jp-dotonbori', yt: 'K-ibJs5xuuw', name: '오사카 도톤보리', en: 'Dotonbori, Osaka',
    city: '오사카', country: '일본', cc: 'JP', countryEn: 'Osaka, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'RVJJP (라지칼 비디오 조키)',
    lat: 34.6687, lon: 135.5013, tz: 'Asia/Tokyo',
    tags: ['오사카', 'osaka', '도톤보리', 'dotonbori', '글리코', 'glico', '일본', 'japan'],
    note: '방송사(MBS) 대신 오사카 현지 크리에이터가 운영하는 도톤보리 운하 카메라입니다.'
  },
  {
    id: 'jp-shinsaibashi', yt: 'YZMZSqz9fx8', name: '오사카 신사이바시', en: 'Shinsaibashi',
    city: '오사카', country: '일본', cc: 'JP', countryEn: 'Osaka, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'local', provider: 'F.S.T. NET 오사카',
    lat: 34.6751, lon: 135.5011, tz: 'Asia/Tokyo',
    tags: ['오사카', 'osaka', '신사이바시', 'shinsaibashi', '일본', 'japan'],
    note: '신사이바시 상점가 입구의 실시간 유동인구를 보여줍니다.'
  },
  {
    id: 'jp-fuji-yamanakako', yt: 'F2NbYrc-gBU', name: '후지산 · 야마나카호', en: 'Mt. Fuji from Lake Yamanakako',
    city: '야마나시', country: '일본', cc: 'JP', countryEn: 'Yamanashi, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'public', provider: 'KTV 케이블TV 가와구치코',
    lat: 35.4210, lon: 138.8960, tz: 'Asia/Tokyo',
    tags: ['후지산', 'fuji', 'mount fuji', '야마나카코', 'yamanakako', '일본', 'japan', '산'],
    note: '야마나카호 건너편에서 본 후지산 설경·구름 상태를 확인할 수 있습니다.'
  },
  {
    id: 'jp-fuji-oshino', yt: 'PxzwnWh1dKk', name: '후지산 · 오시노핫카이', en: 'Mt. Fuji from Oshino Hakkai',
    city: '야마나시', country: '일본', cc: 'JP', countryEn: 'Yamanashi, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'nature', src: 'local', provider: 'FujiyamaTV',
    lat: 35.4656, lon: 138.8489, tz: 'Asia/Tokyo',
    tags: ['후지산', 'fuji', '오시노핫카이', 'oshino hakkai', '일본', 'japan', '산'],
    note: '세계유산 후지산을 4K로 비추는 다른 각도의 라이브 카메라입니다.'
  },
  {
    id: 'jp-odaiba', yt: 'BEpTqQWbLvA', name: '오다이바 해변 · 레인보우브리지', en: 'Odaiba Beach & Rainbow Bridge',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Odaiba-Papa',
    lat: 35.6364, lon: 139.7633, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '오다이바', 'odaiba', '레인보우브리지', 'rainbow bridge', '해변', 'beach', '일본', 'japan'],
    note: '방송사(FNN) 대신 개인 운영 채널이 오다이바 해변과 레인보우브리지를 24시간 비춥니다.'
  },
  {
    id: 'jp-wangan', yt: 'Kozl3hd56Y0', name: '도쿄만 수도고속 완간선', en: 'Tokyo Bay Expressway (Wangan)',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'creator', provider: 'HMTV Tokyo Bay',
    lat: 35.6464, lon: 139.7997, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '수도고속', 'wangan', '고속도로', 'expressway', '도로', '교통', '일본', 'japan'],
    note: '수도고속 완간선 시노노메 분기점 부근의 실시간 교통 상황입니다.'
  },

  /* ───────────── 대만 ───────────── */
  {
    id: 'tw-xiangshan', yt: 'z_fY1pj1VBw', name: '타이베이 샹산 전망대', en: 'Xiangshan Viewpoint, Taipei',
    city: '타이베이', country: '대만', cc: 'TW', countryEn: 'Taipei, Taiwan', flag: '🇹🇼', region: 'asia',
    cat: 'street', src: 'public', provider: 'Taipei Travel Live Cam (타이베이시 관광)',
    lat: 25.0275, lon: 121.5866, tz: 'Asia/Taipei',
    tags: ['타이베이', 'taipei', '대만', 'taiwan', '샹산', 'xiangshan', '101', '전망'],
    note: '샹산 꼭대기에서 타이베이 101과 도심을 내려다보는 공식 관광 라이브입니다.'
  },
  {
    id: 'tw-dadaocheng', yt: 'Ndo_8RuefH4', name: '타이베이 다다오청 부두', en: 'Dadaocheng Wharf, Taipei',
    city: '타이베이', country: '대만', cc: 'TW', countryEn: 'Taipei, Taiwan', flag: '🇹🇼', region: 'asia',
    cat: 'street', src: 'public', provider: 'Taipei Travel Live Cam (타이베이시 관광)',
    lat: 25.0570, lon: 121.5095, tz: 'Asia/Taipei',
    tags: ['타이베이', 'taipei', '대만', 'taiwan', '다다오청', 'dadaocheng', '부두', 'wharf', '딘화'],
    note: '담수허(淡水河) 강변 다다오청 부두와 타이베이 101 방향을 담은 카메라입니다.'
  },
  {
    id: 'tw-daxi', yt: 'XUWjAsajKXg', name: '타오위안 다시 옛거리', en: 'Daxi Old Street, Taoyuan',
    city: '타오위안', country: '대만', cc: 'TW', countryEn: 'Taoyuan, Taiwan', flag: '🇹🇼', region: 'asia',
    cat: 'street', src: 'public', provider: '타오위안시 관광국 (遊桃園)',
    lat: 24.8806, lon: 121.2880, tz: 'Asia/Taipei',
    tags: ['타오위안', 'taoyuan', '대만', 'taiwan', '다시', 'daxi', '옛거리', 'old street'],
    note: '타오위안시가 운영하는 다시 옛거리(대계노가) 보행 거리 라이브입니다.'
  },

  /* ───────────── 베트남 ───────────── */
  {
    id: 'vn-hanoi', yt: '6Vwsx3igmIQ', name: '하노이 빈뚜이 교 · 홍강', en: 'Vinh Tuy Bridge & Red River, Hanoi',
    city: '하노이', country: '베트남', cc: 'VN', countryEn: 'Hanoi, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'traffic', src: 'local', provider: 'Ha Noi Live Cam',
    lat: 20.9990, lon: 105.8670, tz: 'Asia/Ho_Chi_Minh',
    tags: ['하노이', 'hanoi', '베트남', 'vietnam', '빈뚜이', 'vinh tuy', '홍강', 'red river', '교량'],
    note: '하노이 빈뚜이 다리와 홍강, 오토바이 통행량을 24시간 보여줍니다.'
  },
  {
    id: 'vn-bacha', yt: 'WnebXNDmBN0', name: '박하 시장 (라오까이)', en: 'Bac Ha Market, Lao Cai',
    city: '라오까이', country: '베트남', cc: 'VN', countryEn: 'Lao Cai, Vietnam', flag: '🇻🇳', region: 'asia',
    cat: 'street', src: 'creator', provider: 'Wandering Vietnam',
    lat: 22.5333, lon: 103.2833, tz: 'Asia/Ho_Chi_Minh',
    tags: ['베트남', 'vietnam', '박하', 'bac ha', '라오까이', 'lao cai', '시장', 'market', '산악'],
    note: '북부 산악지대 박하 일요 시장의 소수민족 장터 풍경을 중계하는 워킹 캠입니다.'
  },

  /* ───────────── 인도네시아 ───────────── */
  {
    id: 'id-bali-jimbaran', yt: 'L1duJDAqbJY', name: '발리 부킷 짐바란 전망', en: 'Bukit Jimbaran, Bali',
    city: '발리', country: '인도네시아', cc: 'ID', countryEn: 'Bali, Indonesia', flag: '🇮🇩', region: 'asia',
    cat: 'nature', src: 'webcam', provider: 'Bali Weather Live Stream',
    lat: -8.7963, lon: 115.1760, tz: 'Asia/Makassar',
    tags: ['발리', 'bali', '인도네시아', 'indonesia', '짐바란', 'jimbaran', '부킷', 'bukit', '해변', 'beach'],
    note: '부킷 반도 짐바란 언덕에서 바다와 공항 활주로 방향을 4K 파노라마로 보여줍니다.'
  },
  {
    id: 'id-bali-batur', yt: 'onXhMdHEx54', name: '킨타마니 · 바투르 화산', en: 'Kintamani & Mount Batur, Bali',
    city: '발리', country: '인도네시아', cc: 'ID', countryEn: 'Bali, Indonesia', flag: '🇮🇩', region: 'asia',
    cat: 'nature', src: 'local', provider: 'Arkaluna Resort & Adventure',
    lat: -8.2410, lon: 115.3760, tz: 'Asia/Makassar',
    tags: ['발리', 'bali', '인도네시아', 'indonesia', '킨타마니', 'kintamani', '바투르', 'batur', '화산', 'volcano', '산'],
    note: '바투르 화산과 칼데라 호수를 마주 보는 리조트 카메라로 일출 구름 상태를 볼 수 있습니다.'
  },

  /* ───────────── 필리핀 ───────────── */
  {
    id: 'ph-mayon', yt: 'UDAZWxehMAI', name: '마욘 화산', en: 'Mayon Volcano, Albay',
    city: '레가스피', country: '필리핀', cc: 'PH', countryEn: 'Albay, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'nature', src: 'webcam', provider: 'afarTV',
    lat: 13.2572, lon: 123.6856, tz: 'Asia/Manila',
    tags: ['필리핀', 'philippines', '마욘', 'mayon', '화산', 'volcano', '레가스피', 'legazpi'],
    note: '둥근 원뿔로 유명한 마욘 화산을 4K로 24시간 관측하는 자연 카메라입니다.'
  },
  {
    id: 'ph-davao', yt: 'u8CbGedbI08', name: '다바오 아그다오 시장', en: 'Agdao Market, Davao City',
    city: '다바오', country: '필리핀', cc: 'PH', countryEn: 'Davao City, Philippines', flag: '🇵🇭', region: 'asia',
    cat: 'street', src: 'local', provider: 'Edge Babor Family PH',
    lat: 7.0750, lon: 125.6100, tz: 'Asia/Manila',
    tags: ['필리핀', 'philippines', '다바오', 'davao', '시장', 'market', '민생'],
    note: '다바오 아그다오 공설시장의 이른 아침 장터 풍경을 보여주는 현지 카메라입니다.'
  },

  /* ───────────── 태국 · 싱가포르 · 말레이시아 ───────────── */
  {
    id: 'ap-bangkok', yt: 'UemFRPrl1hk', name: '방콕 수쿰빗', en: 'Sukhumvit Soi 11, Bangkok',
    city: '방콕', country: '태국', cc: 'TH', countryEn: 'Bangkok, Thailand', flag: '🇹🇭', region: 'asia',
    cat: 'street', src: 'webcam', provider: 'The Real Samui Webcam',
    lat: 13.7440, lon: 100.5510, tz: 'Asia/Bangkok',
    tags: ['방콕', 'bangkok', '수쿰빗', 'sukhumvit', '태국', 'thailand'],
    note: '수쿰빗 소이 11 거리 풍경과 야간 유동인구를 4K로 보여줍니다.'
  },
  {
    id: 'sg-downtown', yt: 'rQ3VvxadJeo', name: '싱가포르 다운타운 · 마리나', en: 'Downtown Singapore & Marina',
    city: '싱가포르', country: '싱가포르', cc: 'SG', countryEn: 'Singapore', flag: '🇸🇬', region: 'asia',
    cat: 'street', src: 'local', provider: 'SingReef',
    lat: 1.2830, lon: 103.8510, tz: 'Asia/Singapore',
    tags: ['싱가포르', 'singapore', '마리나', 'marina bay', '다운타운', 'downtown', '스카이라인'],
    note: '싱가포르 도심 스카이라인과 마리나베이 방향을 24시간 중계합니다.'
  },
  {
    id: 'my-klia', yt: 'zBDJAqy1I9U', name: '쿠알라룸푸르 국제공항', en: 'Kuala Lumpur International Airport',
    city: '쿠알라룸푸르', country: '말레이시아', cc: 'MY', countryEn: 'Kuala Lumpur, Malaysia', flag: '🇲🇾', region: 'asia',
    cat: 'traffic', src: 'local', provider: 'Live Airways Malaysia',
    lat: 2.7456, lon: 101.7072, tz: 'Asia/Kuala_Lumpur',
    tags: ['말레이시아', 'malaysia', '쿠알라룸푸르', 'kuala lumpur', 'klia', '공항', 'airport'],
    note: 'KLIA 활주로와 터미널 항공기 이동을 보여주는 공항 라이브 카메라입니다.'
  },

  /* ───────────── 미국 · 캐나다 ───────────── */
  {
    id: 'us-timessquare', yt: 'ZxCeWQ3Lcig', name: '뉴욕 타임스퀘어', en: 'Times Square North 4K',
    city: '뉴욕', country: '미국', cc: 'US', countryEn: 'New York, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 40.7580, lon: -73.9855, tz: 'America/New_York',
    tags: ['뉴욕', 'new york', '타임스퀘어', 'times square', '미국', 'usa', '거리'],
    note: 'EarthCam이 운영하는 타임스퀘어 노스 4K 카메라입니다.'
  },
  {
    id: 'us-miami', yt: 'GkBMgHwSIV0', name: '마이애미 맥아더 코즈웨이', en: 'Miami Skyline · MacArthur Causeway',
    city: '마이애미', country: '미국', cc: 'US', countryEn: 'Miami, USA', flag: '🇺🇸', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'Ozolio Live',
    lat: 25.7880, lon: -80.1790, tz: 'America/New_York',
    tags: ['마이애미', 'miami', '비치', 'beach', '미국', 'usa', '스카이라인'],
    note: '마이애미 스카이라인과 코즈웨이 차량 흐름을 함께 보여줍니다.'
  },
  {
    id: 'us-hollywood', yt: 'cmkAbDUEoyA', name: '할리우드 비치 브로드워크', en: 'Hollywood Beach Broadwalk',
    city: '플로리다', country: '미국', cc: 'US', countryEn: 'Florida, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'public', provider: '시티 오브 할리우드 (시청)',
    lat: 26.0112, lon: -80.1160, tz: 'America/New_York',
    tags: ['플로리다', 'florida', '할리우드', 'hollywood beach', '비치', 'beach', '미국', 'usa'],
    note: '할리우드 시청이 직접 운영하는 해변 브로드워크 카메라입니다.'
  },
  {
    id: 'us-waikiki', yt: 'sL576ZclD_Q', name: '와이키키 해변', en: 'Waikiki Beach, Honolulu',
    city: '호놀룰루', country: '미국', cc: 'US', countryEn: 'Hawaii, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'Port of Cams',
    lat: 21.2793, lon: -157.8292, tz: 'Pacific/Honolulu',
    tags: ['하와이', 'hawaii', '와이키키', 'waikiki', '호놀룰루', 'honolulu', '해변', 'beach', '미국', 'usa'],
    note: '레워스 스트리트에서 바라본 와이키키 해변과 파도입니다.'
  },
  {
    id: 'us-niagara', yt: 'qx7gry390YA', name: '나이아가라 폭포', en: 'Niagara Falls',
    city: '나이아가라', country: '미국·캐나다', cc: 'US', countryEn: 'NY, USA / Ontario, Canada', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'EarthCam',
    lat: 43.0828, lon: -79.0742, tz: 'America/New_York',
    tags: ['나이아가라', 'niagara', '폭포', 'falls', '미국', '캐나다', 'canada'],
    note: '말굽폭포 방향을 비추는 EarthCam 라이브입니다.'
  },
  {
    id: 'us-brooks', yt: 'J7ZrIDvqlic', name: '브룩스 폴스 (알래스카)', en: 'Brooks Falls, Katmai',
    city: '알래스카', country: '미국', cc: 'US', countryEn: 'Alaska, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'explore.org',
    lat: 58.5566, lon: -155.7745, tz: 'America/Anchorage',
    tags: ['알래스카', 'alaska', '브룩스', 'brooks falls', '곰', 'bear', '자연', 'nature', '미국', 'usa'],
    note: '연어를 잡는 야생 곰을 24시간 중계하는 자연 카메라입니다.'
  },
  {
    id: 'us-steamboat', yt: '2UJDLWcSADk', name: '스팀보트 스키장 베이스', en: 'Steamboat Resort Base',
    city: '콜로라도', country: '미국', cc: 'US', countryEn: 'Colorado, USA', flag: '🇺🇸', region: 'americas',
    cat: 'nature', src: 'public', provider: 'Steamboat Resort (공식)',
    lat: 40.4850, lon: -106.8317, tz: 'America/Denver',
    tags: ['콜로라도', 'colorado', '스키', 'ski', '스키장', 'resort', '스팀보트', 'steamboat', '미국', 'usa'],
    note: '리조트가 직접 운영하는 베이스 구역 카메라로 적설·혼잡도를 볼 수 있습니다.'
  },
  {
    id: 'ca-vancouver', yt: 'GHEmhcWjiTE', name: '밴쿠버 항구 · 다운타운', en: 'Vancouver Harbour & Downtown',
    city: '밴쿠버', country: '캐나다', cc: 'CA', countryEn: 'Vancouver, Canada', flag: '🇨🇦', region: 'americas',
    cat: 'street', src: 'local', provider: 'Vancouver Port Live',
    lat: 49.2887, lon: -123.1115, tz: 'America/Vancouver',
    tags: ['밴쿠버', 'vancouver', '캐나다', 'canada', '항구', 'harbour', '북밴쿠버', 'north shore'],
    note: '밴쿠버 항구와 다운타운 스카이라인, 수상비행기 이착륙을 24시간 보여줍니다.'
  },
  {
    id: 'ca-banff', yt: 'F-QLs9aKPvE', name: '밴프 림록 · 보우 밸리', en: 'Rimrock Banff, Bow Valley',
    city: '밴프', country: '캐나다', cc: 'CA', countryEn: 'Banff, Canada', flag: '🇨🇦', region: 'americas',
    cat: 'nature', src: 'local', provider: 'Rimrock Banff (호텔 공식)',
    lat: 51.1784, lon: -115.5708, tz: 'America/Edmonton',
    tags: ['밴프', 'banff', '캐나다', 'canada', '로키', 'rockies', '보우밸리', 'bow valley', '설경'],
    note: '밴프 국립공원 림록 호텔이 직접 운영하는 보우 밸리·설산 카메라입니다.'
  },
  {
    id: 'ca-calgary', yt: 'MwcqP3ta6RI', name: '캘거리 시내', en: 'Calgary Downtown',
    city: '캘거리', country: '캐나다', cc: 'CA', countryEn: 'Calgary, Canada', flag: '🇨🇦', region: 'americas',
    cat: 'street', src: 'local', provider: 'DELTATECH Calgary',
    lat: 51.0447, lon: -114.0719, tz: 'America/Edmonton',
    tags: ['캘거리', 'calgary', '캐나다', 'canada', '도심', 'downtown', '앨버타', 'alberta'],
    note: '캘거리 다운타운과 보우강 방향을 비추는 현지 카메라입니다.'
  },

  /* ───────────── 멕시코 · 브라질 ───────────── */
  {
    id: 'mx-zocalo', yt: 'oOsoFwMPbOg', name: '멕시코시티 소칼로 광장', en: 'Zócalo, Mexico City',
    city: '멕시코시티', country: '멕시코', cc: 'MX', countryEn: 'Mexico City, Mexico', flag: '🇲🇽', region: 'americas',
    cat: 'street', src: 'webcam', provider: 'webcamsdemexico',
    lat: 19.4326, lon: -99.1332, tz: 'America/Mexico_City',
    tags: ['멕시코', 'mexico', '멕시코시티', 'mexico city', '소칼로', 'zocalo', '광장', 'plaza'],
    note: '멕시코시티 중심 소칼로 광장과 대성당을 내려다보는 파노라마 카메라입니다.'
  },
  {
    id: 'mx-cancun', yt: 'NeHO46kDJ20', name: '칸쿤 푼타 칸쿤', en: 'Punta Cancún, Quintana Roo',
    city: '칸쿤', country: '멕시코', cc: 'MX', countryEn: 'Cancún, Mexico', flag: '🇲🇽', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'Webcams de México TV',
    lat: 21.1350, lon: -86.7460, tz: 'America/Cancun',
    tags: ['칸쿤', 'cancun', '멕시코', 'mexico', '카리브', 'caribbean', '해변', 'beach'],
    note: '칸쿤 호텔존과 카리브해 파도·모래톱 색을 실시간으로 보여줍니다.'
  },
  {
    id: 'ap-rio', yt: 'wyEi0OPai5g', name: '리우 코파카바나', en: 'Copacabana Beach, Rio',
    city: '리우데자네이루', country: '브라질', cc: 'BR', countryEn: 'Rio de Janeiro, Brazil', flag: '🇧🇷', region: 'americas',
    cat: 'nature', src: 'webcam', provider: 'Homes in Rio',
    lat: -22.9711, lon: -43.1822, tz: 'America/Sao_Paulo',
    tags: ['리우', 'rio', '코파카바나', 'copacabana', '브라질', 'brazil', '해변', 'beach'],
    note: '코파카바나 해변 포스투 6 구간의 파도와 날씨를 보여줍니다.'
  },

  /* ───────────── 영국 · 프랑스 · 이탈리아 · 네덜란드 ───────────── */
  {
    id: 'eu-abbeyroad', yt: 'zMCea32gpmg', name: '런던 애비 로드', en: 'Abbey Road Crossing, London',
    city: '런던', country: '영국', cc: 'GB', countryEn: 'London, UK', flag: '🇬🇧', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 51.5320, lon: -0.1780, tz: 'Europe/London',
    tags: ['런던', 'london', '애비로드', 'abbey road', '영국', 'uk', 'england'],
    note: '비틀즈 앨범 표지로 유명한 횡단보도를 실시간으로 보여줍니다.'
  },
  {
    id: 'eu-londonbridge', yt: 'MXmzsjABC-U', name: '런던 브리지 · 템스강', en: 'London Bridge & River Thames',
    city: '런던', country: '영국', cc: 'GB', countryEn: 'London, UK', flag: '🇬🇧', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Beach Life Cams',
    lat: 51.5055, lon: -0.0900, tz: 'Europe/London',
    tags: ['런던', 'london', '런던브리지', 'london bridge', '템스', 'thames', '영국', 'uk'],
    note: '런던 브리지와 템스강 유람선 흐름을 4K로 송출합니다.'
  },
  {
    id: 'eu-eiffel', yt: 'QI-PPEW2Bgc', name: '파리 에펠탑', en: 'Eiffel Tower, Paris',
    city: '파리', country: '프랑스', cc: 'FR', countryEn: 'Paris, France', flag: '🇫🇷', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Paris75Webcam',
    lat: 48.8584, lon: 2.2945, tz: 'Europe/Paris',
    tags: ['파리', 'paris', '에펠탑', 'eiffel', '프랑스', 'france'],
    note: '에펠탑과 몽파르나스 타워가 함께 보이는 전경 카메라입니다.'
  },
  {
    id: 'eu-sacrecoeur', yt: '-xzg3wujOVM', name: '파리 사크레쾨르', en: 'Sacré-Cœur, Montmartre',
    city: '파리', country: '프랑스', cc: 'FR', countryEn: 'Paris, France', flag: '🇫🇷', region: 'europe',
    cat: 'street', src: 'local', provider: 'PARIS TV',
    lat: 48.8867, lon: 2.3431, tz: 'Europe/Paris',
    tags: ['파리', 'paris', '사크레쾨르', 'sacre coeur', '몽마르트르', 'montmartre', '프랑스', 'france'],
    note: '몽마르트르 언덕과 파리 시내 전망을 보여줍니다.'
  },
  {
    id: 'eu-venice', yt: 'r8N6IsoIkTk', name: '베네치아 그란데 운하', en: 'Grand Canal, Venice',
    city: '베네치아', country: '이탈리아', cc: 'IT', countryEn: 'Venice, Italy', flag: '🇮🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'I Love You Venice',
    lat: 45.4345, lon: 12.3300, tz: 'Europe/Rome',
    tags: ['베네치아', 'venice', '베니스', '그란데운하', 'grand canal', '이탈리아', 'italy'],
    note: '리알토 인근 그란데 운하의 곤돌라·수상버스 흐름을 보여줍니다.'
  },
  {
    id: 'eu-amsterdam', yt: 'Gd9d4q6WvUY', name: '암스테르담 담 광장', en: 'Dam Square, Amsterdam',
    city: '암스테르담', country: '네덜란드', cc: 'NL', countryEn: 'Amsterdam, Netherlands', flag: '🇳🇱', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Now4Rent.NL',
    lat: 52.3731, lon: 4.8932, tz: 'Europe/Amsterdam',
    tags: ['암스테르담', 'amsterdam', '담광장', 'dam square', '네덜란드', 'netherlands', 'holland'],
    note: '왕궁 앞 담 광장을 팬·틸트·줌이 가능한 4K 카메라로 중계합니다.'
  },

  /* ───────────── 독일 ───────────── */
  {
    id: 'de-berlin-frankfurtertor', yt: '5XeN6jZmrLI', name: '베를린 프랑크푸르터 토르', en: 'Frankfurter Tor, Berlin',
    city: '베를린', country: '독일', cc: 'DE', countryEn: 'Berlin, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Wolkenwacht Berlin',
    lat: 52.5145, lon: 13.4545, tz: 'Europe/Berlin',
    tags: ['베를린', 'berlin', '독일', 'germany', '프리드리히스하인', 'friedrichshain', '거리'],
    note: '프리드리히스하인 프랑크푸르터 토르 교차로와 카를마르크스알레를 24시간 비춥니다.'
  },
  {
    id: 'de-berlin-17juni', yt: 'a6k2evUSFOU', name: '베를린 6월 17일 거리', en: 'Straße des 17. Juni, Berlin',
    city: '베를린', country: '독일', cc: 'DE', countryEn: 'Berlin, Germany', flag: '🇩🇪', region: 'europe',
    cat: 'street', src: 'creator', provider: 'BerlinWebcam (Günther Kohlbecker)',
    lat: 52.5145, lon: 13.3510, tz: 'Europe/Berlin',
    tags: ['베를린', 'berlin', '독일', 'germany', '티어가르텐', 'tiergarten', '승전기념탑', 'siegersäule'],
    note: '티어가르텐 공원과 승전기념탑 방향 도로를 비추는 베를린 시내 카메라입니다.'
  },

  /* ───────────── 스페인 · 포르투갈 ───────────── */
  {
    id: 'es-barcelona', yt: 'nefnkjc1yVs', name: '바르셀로나 스카이라인', en: 'Barcelona Skyline, Baix Guinardó',
    city: '바르셀로나', country: '스페인', cc: 'ES', countryEn: 'Barcelona, Spain', flag: '🇪🇸', region: 'europe',
    cat: 'street', src: 'creator', provider: 'Barcelona Directo',
    lat: 41.4170, lon: 2.1740, tz: 'Europe/Madrid',
    tags: ['바르셀로나', 'barcelona', '스페인', 'spain', '스카이라인', '사그라다', '카탈루냐'],
    note: '바이크 기나르도 언덕에서 바르셀로나 시내와 사그라다 파밀리아 방향을 24시간 중계합니다.'
  },
  {
    id: 'es-sansebastian', yt: 'N1leboi8ePI', name: '산세바스티안 라 콘차 해변', en: 'Playa de la Concha, San Sebastián',
    city: '산세바스티안', country: '스페인', cc: 'ES', countryEn: 'San Sebastián, Spain', flag: '🇪🇸', region: 'europe',
    cat: 'nature', src: 'webcam', provider: 'WEBCAMS ONLINE',
    lat: 43.3183, lon: -1.9850, tz: 'Europe/Madrid',
    tags: ['산세바스티안', 'san sebastian', '스페인', 'spain', '라콘차', 'la concha', '해변', 'beach', '바스크'],
    note: '라 콘차 만의 조개 모양 해변과 산타클라라 섬을 보여줍니다.'
  },
  {
    id: 'pt-lisbon', yt: 'tKIgNtEgLN0', name: '리스본 시내', en: 'Lisbon Live',
    city: '리스본', country: '포르투갈', cc: 'PT', countryEn: 'Lisbon, Portugal', flag: '🇵🇹', region: 'europe',
    cat: 'street', src: 'creator', provider: 'I love Lx',
    lat: 38.7100, lon: -9.1400, tz: 'Europe/Lisbon',
    tags: ['리스본', 'lisbon', '포르투갈', 'portugal', '리스보아', 'lisboa'],
    note: '리스본 시내 지붕과 테주강 방향을 담은 현지 카메라입니다.'
  },
  {
    id: 'pt-porto', yt: 'QetuuDxsgig', name: '포르투 리베이라', en: 'Ribeira, Porto',
    city: '포르투', country: '포르투갈', cc: 'PT', countryEn: 'Porto, Portugal', flag: '🇵🇹', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Webcamtaxi',
    lat: 41.1408, lon: -8.6130, tz: 'Europe/Lisbon',
    tags: ['포르투', 'porto', '포르투갈', 'portugal', '리베이라', 'ribeira', '도루', 'douro'],
    note: '도루강과 리베이라 지구, 돔루이스 1세 다리를 함께 보여줍니다.'
  },

  /* ───────────── 스위스 · 오스트리아 ───────────── */
  {
    id: 'ch-geneva', yt: '3HsL6AA6rPM', name: '제네바 레만호', en: 'Lake Geneva, Les Corsaires',
    city: '제네바', country: '스위스', cc: 'CH', countryEn: 'Geneva, Switzerland', flag: '🇨🇭', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'Vision-Environnement',
    lat: 46.2044, lon: 6.1432, tz: 'Europe/Zurich',
    tags: ['제네바', 'geneva', '스위스', 'switzerland', '레만호', 'lake geneva', '호수'],
    note: '레만호와 제네바 분수(제트 드오) 방향을 비추는 웹캠 운영사 카메라입니다.'
  },
  {
    id: 'eu-grimentz', yt: 'iCxfe27HpaY', name: '그리멘츠 스키밸리', en: 'Grimentz Ski Valley',
    city: '그리멘츠', country: '스위스', cc: 'CH', countryEn: 'Valais, Switzerland', flag: '🇨🇭', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Grimentz Live',
    lat: 46.1667, lon: 7.5500, tz: 'Europe/Zurich',
    tags: ['스위스', 'switzerland', '스키', 'ski', '알프스', 'alps', '그리멘츠', 'grimentz', '산'],
    note: '발레주 스키밸리의 설질과 슬로프 상태를 실시간으로 보여줍니다.'
  },
  {
    id: 'at-wien', yt: 'omcPYHHDNyQ', name: '빈 암 힘멜 전망', en: 'Am Himmel, Vienna',
    city: '빈', country: '오스트리아', cc: 'AT', countryEn: 'Vienna, Austria', flag: '🇦🇹', region: 'europe',
    cat: 'street', src: 'local', provider: 'Am Himmel',
    lat: 48.2300, lon: 16.2830, tz: 'Europe/Vienna',
    tags: ['빈', 'vienna', 'wien', '오스트리아', 'austria', '암힘멜', 'am himmel', '전망'],
    note: '빈 북쪽 암 힘멜 언덕에서 시내와 도나우 방향을 내려다보는 카메라입니다.'
  },
  {
    id: 'at-saalbach', yt: 'CjG8iZY4JK4', name: '잘바흐 힌터글렘 스키장', en: 'Saalbach Hinterglemm',
    city: '잘바흐', country: '오스트리아', cc: 'AT', countryEn: 'Salzburg, Austria', flag: '🇦🇹', region: 'europe',
    cat: 'nature', src: 'local', provider: 'TravelTrax',
    lat: 47.3900, lon: 12.6400, tz: 'Europe/Vienna',
    tags: ['오스트리아', 'austria', '잘바흐', 'saalbach', '힌터글렘', 'hinterglemm', '스키', 'ski', '알프스'],
    note: '알프스 최대 규모 스키 서킷 잘바흐 힌터글렘의 슬로프와 설질을 보여줍니다.'
  },

  /* ───────────── 노르웨이 · 스웨덴 · 덴마크 · 핀란드 · 아이슬란드 ───────────── */
  {
    id: 'no-geiranger', yt: 'yMSc-qqW3To', name: '가이랑에르 피오르', en: 'Geirangerfjord',
    city: '가이랑에르', country: '노르웨이', cc: 'NO', countryEn: 'Geiranger, Norway', flag: '🇳🇴', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Geirangerfjord cruise port',
    lat: 62.1005, lon: 7.2060, tz: 'Europe/Oslo',
    tags: ['노르웨이', 'norway', '가이랑에르', 'geiranger', '피오르', 'fjord', '세계유산', '산'],
    note: '유네스코 세계유산 가이랑에르 피오르와 크루즈선 입항을 보여줍니다.'
  },
  {
    id: 'no-tromso', yt: 'zKpPfH8u3GI', name: '트롬쇠 하늘 · 오로라', en: 'Tromsø Sky',
    city: '트롬쇠', country: '노르웨이', cc: 'NO', countryEn: 'Tromsø, Norway', flag: '🇳🇴', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Vervet Tromsø',
    lat: 69.6489, lon: 18.9551, tz: 'Europe/Oslo',
    tags: ['노르웨이', 'norway', '트롬쇠', 'tromso', '오로라', 'aurora', '북극', 'arctic', '밤하늘'],
    note: '북극권 트롬쇠 상공을 향한 카메라로, 밤에는 오로라가 잡히기도 합니다.'
  },
  {
    id: 'no-oslo', yt: 'faKBmRq0lYg', name: '오슬로', en: 'Oslo, Norway',
    city: '오슬로', country: '노르웨이', cc: 'NO', countryEn: 'Oslo, Norway', flag: '🇳🇴', region: 'europe',
    cat: 'street', src: 'local', provider: 'Norway Live - Kanal3',
    lat: 59.9139, lon: 10.7522, tz: 'Europe/Oslo',
    tags: ['오슬로', 'oslo', '노르웨이', 'norway', '도심', 'city'],
    note: '오슬로 시내와 오슬로피오르 방향을 24시간 중계하는 노르웨이 현지 채널입니다.'
  },
  {
    id: 'se-stockholm', yt: 'agY6ZaM1G_o', name: '스톡홀름 DN 스크라판', en: 'DN-Skrapan, Stockholm',
    city: '스톡홀름', country: '스웨덴', cc: 'SE', countryEn: 'Stockholm, Sweden', flag: '🇸🇪', region: 'europe',
    cat: 'street', src: 'local', provider: 'MED Mediateknik',
    lat: 59.3330, lon: 18.0700, tz: 'Europe/Stockholm',
    tags: ['스톡홀름', 'stockholm', '스웨덴', 'sweden', '스칸디나비아', '도심'],
    note: '스톡홀름 중심가 고층 빌딩에서 시내와 발트해 방향을 내려다보는 카메라입니다.'
  },
  {
    id: 'dk-hennestrand', yt: '9B8e3Y8JPUk', name: '헤네 스트란드 해변', en: 'Henne Strand, Jutland',
    city: '헤네', country: '덴마크', cc: 'DK', countryEn: 'Jutland, Denmark', flag: '🇩🇰', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Købmand Hansens Feriehusudlejning',
    lat: 55.7300, lon: 8.2400, tz: 'Europe/Copenhagen',
    tags: ['덴마크', 'denmark', '헤네', 'henne', '해변', 'beach', '북해', 'north sea', '윌란'],
    note: '덴마크 서해안 헤네 스트란드의 넓은 백사장과 파도를 보여줍니다.'
  },
  {
    id: 'eu-levi', yt: 'LwihxyJ4V20', name: '레비 스키장 제로포인트', en: 'Levi Ski Resort Zero Point',
    city: '레비', country: '핀란드', cc: 'FI', countryEn: 'Lapland, Finland', flag: '🇫🇮', region: 'europe',
    cat: 'nature', src: 'public', provider: 'Levi Ski Resort (공식)',
    lat: 67.8050, lon: 24.8000, tz: 'Europe/Helsinki',
    tags: ['핀란드', 'finland', '라플란드', 'lapland', '스키', 'ski', '오로라', 'aurora', '산'],
    note: '북극권 리조트가 직접 운영하는 카메라로, 밤에는 오로라가 잡히기도 합니다.'
  },
  {
    id: 'is-reykjavik', yt: 'WuBmLBuvKYA', name: '레이캬비크 펄란 전망', en: 'Perlan, Reykjavík',
    city: '레이캬비크', country: '아이슬란드', cc: 'IS', countryEn: 'Reykjavík, Iceland', flag: '🇮🇸', region: 'europe',
    cat: 'street', src: 'webcam', provider: 'mbl.is (아이슬란드 언론)',
    lat: 64.1289, lon: -21.9190, tz: 'Atlantic/Reykjavik',
    tags: ['아이슬란드', 'iceland', '레이캬비크', 'reykjavik', '펄란', 'perlan', '전망'],
    note: '펄란 전망대에서 레이캬비크 시내와 에스야 산을 내려다보는 카메라입니다.'
  },
  {
    id: 'is-volcano', yt: '8VjPqa2go6o', name: '파그라달스피아들 화산', en: 'Fagradalsfjall Volcano',
    city: '레이캬네스', country: '아이슬란드', cc: 'IS', countryEn: 'Reykjanes, Iceland', flag: '🇮🇸', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Fridriksson',
    lat: 63.8800, lon: -22.2700, tz: 'Atlantic/Reykjavik',
    tags: ['아이슬란드', 'iceland', '화산', 'volcano', '파그라달스피아들', 'fagradalsfjall', '용암', '자연'],
    note: '레이캬네스 반도 화산 지대를 향한 24시간 카메라로 분화·용암 상태를 볼 수 있습니다.'
  },

  /* ───────────── 그리스 · 튀르키예 ───────────── */
  {
    id: 'gr-corfu', yt: 'CcnlJI_UXyM', name: '코르푸 아릴라스 해변', en: 'Arillas Beach, Corfu',
    city: '코르푸', country: '그리스', cc: 'GR', countryEn: 'Corfu, Greece', flag: '🇬🇷', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Arillas Corfu LIVE',
    lat: 39.7340, lon: 19.6490, tz: 'Europe/Athens',
    tags: ['그리스', 'greece', '코르푸', 'corfu', '아릴라스', 'arillas', '이오니아', '해변', 'beach'],
    note: '이오니아해 코르푸섬 아릴라스 해변의 일몰과 파도를 보여주는 현지 카메라입니다.'
  },
  {
    id: 'tr-rize', yt: 'ffaZExAkVC8', name: '리제 시청 광장', en: 'Rize City Center, Turkey',
    city: '리제', country: '튀르키예', cc: 'TR', countryEn: 'Rize, Türkiye', flag: '🇹🇷', region: 'mideast',
    cat: 'street', src: 'local', provider: 'Rize 시청 광장 라이브',
    lat: 41.0201, lon: 40.5234, tz: 'Europe/Istanbul',
    tags: ['튀르키예', '터키', 'turkey', 'turkiye', '리제', 'rize', '흑해', 'black sea', '광장'],
    note: '흑해안 리제 시청 광장과 시내 통행을 보여주는 현지 카메라입니다.'
  },

  /* ───────────── 체코 · 크로아티아 ───────────── */
  {
    id: 'cz-prague', yt: '3C8W4Rlgiog', name: '프라하 도심', en: 'Prague City Centre',
    city: '프라하', country: '체코', cc: 'CZ', countryEn: 'Prague, Czechia', flag: '🇨🇿', region: 'europe',
    cat: 'traffic', src: 'public', provider: 'ITS Praha (프라하 교통정보)',
    lat: 50.0755, lon: 14.4378, tz: 'Europe/Prague',
    tags: ['프라하', 'prague', 'praha', '체코', 'czech', 'czechia', '도심', '교통'],
    note: '프라하시 교통정보센터(ITS)가 운영하는 도심 도로·광장 카메라입니다.'
  },
  {
    id: 'hr-hvar', yt: '0wHWHAFnNh0', name: '흐바르 섬', en: 'Hvar, Croatia',
    city: '흐바르', country: '크로아티아', cc: 'HR', countryEn: 'Hvar, Croatia', flag: '🇭🇷', region: 'europe',
    cat: 'nature', src: 'local', provider: 'Hvar Live',
    lat: 43.1729, lon: 16.4410, tz: 'Europe/Zagreb',
    tags: ['크로아티아', 'croatia', '흐바르', 'hvar', '아드리아', 'adriatic', '섬', 'island', '해변'],
    note: '아드리아해 흐바르 항구와 팔미자나 제도 방향을 보여주는 섬 카메라입니다.'
  },

  /* ───────────── 오스트레일리아 · 뉴질랜드 ───────────── */
  {
    id: 'ap-sydney', yt: '5uZa3-RMFos', name: '시드니 하버', en: 'Sydney Harbour',
    city: '시드니', country: '호주', cc: 'AU', countryEn: 'Sydney, Australia', flag: '🇦🇺', region: 'oceania',
    cat: 'street', src: 'webcam', provider: 'WebcamSydney',
    lat: -33.8568, lon: 151.2153, tz: 'Australia/Sydney',
    tags: ['시드니', 'sydney', '하버브리지', 'harbour bridge', '오페라하우스', 'opera house', '호주', 'australia'],
    note: '하버브리지와 오페라하우스가 한 화면에 들어오는 24시간 카메라입니다.'
  },
  {
    id: 'nz-auckland', yt: 'nLCMw_Fh0u0', name: '오클랜드 바이어덕트 하버', en: 'Viaduct Harbour, Auckland',
    city: '오클랜드', country: '뉴질랜드', cc: 'NZ', countryEn: 'Auckland, New Zealand', flag: '🇳🇿', region: 'oceania',
    cat: 'street', src: 'local', provider: 'Auckland Viaduct View',
    lat: -36.8430, lon: 174.7630, tz: 'Pacific/Auckland',
    tags: ['뉴질랜드', 'new zealand', '오클랜드', 'auckland', '항구', 'harbour', '하버브리지'],
    note: '오클랜드 바이어덕트 하버와 하버브리지를 비추는 24시간 카메라입니다.'
  },
  {
    id: 'nz-wellington', yt: 'AajdfhglWd8', name: '웰링턴 리얼 베이', en: 'Lyall Bay, Wellington',
    city: '웰링턴', country: '뉴질랜드', cc: 'NZ', countryEn: 'Wellington, New Zealand', flag: '🇳🇿', region: 'oceania',
    cat: 'nature', src: 'local', provider: 'John Young',
    lat: -41.3300, lon: 174.7950, tz: 'Pacific/Auckland',
    tags: ['뉴질랜드', 'new zealand', '웰링턴', 'wellington', '리얼베이', 'lyall bay', '서핑', '해변'],
    note: '웰링턴 공항 활주로 옆 리얼 베이의 파도와 서퍼들을 보여주는 카메라입니다.'
  },

  /* ───────────── 남아프리카공화국 ───────────── */
  {
    id: 'za-tablemountain', yt: 'jOqASqt3vVI', name: '케이프타운 테이블마운틴', en: 'Table Mountain, Cape Town',
    city: '케이프타운', country: '남아프리카공화국', cc: 'ZA', countryEn: 'Cape Town, South Africa', flag: '🇿🇦', region: 'africa',
    cat: 'nature', src: 'local', provider: 'Table Mountain Live Stream',
    lat: -33.9628, lon: 18.4098, tz: 'Africa/Johannesburg',
    tags: ['남아프리카', '남아공', 'south africa', '케이프타운', 'cape town', '테이블마운틴', 'table mountain', '산'],
    note: '테이블마운틴과 라이언스 헤드, 테이블베이를 한 화면에 담은 카메라입니다.'
  },

  /* ───────────── 공식 라이브 바로가기(외부 링크 전용) ───────────── */
  {
    id: 'ext-topis', mode: 'external', name: '서울시 TOPIS 교통 CCTV', en: 'Seoul TOPIS Traffic CCTV',
    city: '서울', country: '대한민국', cc: 'KR', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'traffic', src: 'public', provider: '서울특별시 교통정보센터(TOPIS)',
    lat: 37.5566, lon: 126.9368, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', 'topis', '양화대교', '명동', '교통', 'cctv', '도로', '대한민국', 'korea'],
    url: 'https://topis.seoul.go.kr/',
    note: '서울시가 직접 운영하는 실시간 CCTV. 영상 재배포가 제한되어 공식 페이지로만 연결합니다.'
  },
  {
    id: 'ext-busan-tunnel', mode: 'external', name: '부산 구덕터널 CCTV', en: 'Busan Gudeok Tunnel CCTV',
    city: '부산', country: '대한민국', cc: 'KR', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'asia',
    cat: 'traffic', src: 'public', provider: '부산시설공단 교통정보',
    lat: 35.1180, lon: 129.0120, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '구덕터널', '터널', '교통', 'cctv', '도로', '대한민국', 'korea'],
    url: 'https://www.youtube.com/watch?v=AjxhLFTDSbE',
    note: '공단 공식 유튜브 채널이지만 외부 임베드가 막혀 있어 원본으로만 연결합니다.'
  },
  {
    id: 'ext-jartic', mode: 'external', name: '일본 JARTIC 도로 교통정보', en: 'Japan Road Traffic (JARTIC)',
    city: '도쿄', country: '일본', cc: 'JP', countryEn: 'Japan', flag: '🇯🇵', region: 'asia',
    cat: 'traffic', src: 'public', provider: '일본 도로교통정보센터(JARTIC)',
    lat: 35.6812, lon: 139.7671, tz: 'Asia/Tokyo',
    tags: ['일본', 'japan', 'jartic', '도로', '교통', '고속도로', 'highway', '도쿄', 'tokyo'],
    url: 'https://www.jartic.or.jp/',
    note: '일본 전국 주요 도로의 공공 교통정보. 공식 페이지 링크만 제공합니다.'
  }
];
