/* 월드캠 웨더 — 카메라 데이터
 * 각 항목은 (1) 유튜브 공식 임베드 플레이어로만 표시하거나 (2) 원 제공기관 공식 페이지로 바로 연결합니다.
 * 스트림 URL·영상 파일을 추출하거나 재송출하지 않습니다.
 * 좌표는 카메라가 향한 장소 기준이며, 날씨(Open-Meteo) 조회에 사용됩니다.
 */
window.CAMERA_DATA = [
  /* ───────────── 대한민국 ───────────── */
  {
    id: 'kr-banpo', yt: 'RVvYQghFCXk', name: '반포대교 · 한강', en: 'Banpo Bridge & Han River',
    city: '서울', country: '대한민국', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'street', src: 'creator', provider: '데일리서울 한강 라이브캠',
    lat: 37.5116, lon: 126.9954, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '한강', 'han river', '반포', 'banpo', '대한민국', 'korea', '한국'],
    note: '반포대교와 한강 야경을 4K로 24시간 송출하는 국내 채널입니다.'
  },
  {
    id: 'kr-seoulstation', yt: 'C3hW1VrwmNc', name: '서울역 광장', en: 'Seoul Station Plaza',
    city: '서울', country: '대한민국', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'street', src: 'creator', provider: 'GiGAeyes Live TV',
    lat: 37.5547, lon: 126.9707, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '서울역', 'seoul station', '광장', '대한민국', 'korea'],
    note: '서울역 광장과 KTX 출입구 방향을 비추는 도심 라이브캠입니다.'
  },
  {
    id: 'kr-myeongdong', yt: 'uGs3HNVqjLA', name: '명동 · 종로 야간 거리', en: 'Myeongdong & Jongno Night Walk',
    city: '서울', country: '대한민국', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'street', src: 'creator', provider: 'Watchers Club',
    lat: 37.5636, lon: 126.9834, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '명동', 'myeongdong', '종로', 'jongno', '야경', '대한민국', 'korea'],
    note: '명동·종로 일대를 이동하며 보여주는 실시간 워킹 캠입니다.'
  },
  {
    id: 'kr-hongdae', yt: 'yzxiAJAXXtQ', name: '홍대입구역', en: 'Hongdae Station',
    city: '서울', country: '대한민국', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'street', src: 'creator', provider: '홍대라이브',
    lat: 37.5572, lon: 126.9245, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '홍대', 'hongdae', '마포', '대한민국', 'korea'],
    note: '홍대입구역 9번 출구 앞 유동인구를 24시간 보여줍니다.'
  },
  {
    id: 'kr-namsan', yt: 'Q6WKC4vDsUU', name: '남산서울타워', en: 'N Seoul Tower',
    city: '서울', country: '대한민국', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'street', src: 'creator', provider: '한강 라이브 365',
    lat: 37.5512, lon: 126.9882, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', '남산', 'namsan', '남산타워', 'n seoul tower', '대한민국', 'korea'],
    note: '남산과 서울 도심 스카이라인을 담은 4K 라이브입니다.'
  },
  {
    id: 'kr-haeundae', yt: 'rKh675PnlP4', name: '부산 해운대해수욕장', en: 'Haeundae Beach',
    city: '부산', country: '대한민국', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'nature', src: 'creator', provider: 'Busan Haeundae Live',
    lat: 35.1587, lon: 129.1604, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '해운대', 'haeundae', '해변', 'beach', '대한민국', 'korea'],
    note: '해운대 백사장과 파도 상태를 실시간으로 확인할 수 있습니다.'
  },
  {
    id: 'kr-gwangalli', yt: 'GZ8MwCX_n14', name: '부산 광안리 · 광안대교', en: 'Gwangalli Beach & Gwangan Bridge',
    city: '부산', country: '대한민국', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'nature', src: 'creator', provider: 'Busan Live Cam',
    lat: 35.1530, lon: 129.1186, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '광안리', 'gwangalli', '광안대교', '해변', 'beach', '대한민국', 'korea'],
    note: '광안대교 야경과 광안리 해변을 4K로 송출합니다.'
  },

  /* ───────────── 일본 ───────────── */
  {
    id: 'jp-shibuya', yt: '5B4LmH4JbnY', name: '시부야 스크램블 교차로', en: 'Shibuya Scramble Crossing',
    city: '도쿄', country: '일본', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'street', src: 'broadcaster', provider: 'ANNnewsCH (テレビ朝日)',
    lat: 35.6595, lon: 139.7005, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '시부야', 'shibuya', '교차로', 'crossing', '일본', 'japan'],
    note: '일본 방송사 ANN이 운영하는 시부야 교차로 라이브 카메라입니다.'
  },
  {
    id: 'jp-shibuya-center', yt: 'd1JuNg7knNo', name: '시부야 센터가이', en: 'Shibuya Center-gai',
    city: '도쿄', country: '일본', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'street', src: 'public', provider: '시부야센터상점가 (渋谷センター商店街)',
    lat: 35.6607, lon: 139.6986, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '시부야', 'shibuya', '센터가이', 'center gai', '일본', 'japan'],
    note: '상점가 협회가 직접 운영하는 센터가이 아치 앞 카메라입니다.'
  },
  {
    id: 'jp-kabukicho', yt: 'DjdUEyjx8GM', name: '신주쿠 가부키초', en: 'Shinjuku Kabukicho',
    city: '도쿄', country: '일본', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'street', src: 'creator', provider: '가부키초 라이브 채널',
    lat: 35.6950, lon: 139.7034, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '신주쿠', 'shinjuku', '가부키초', 'kabukicho', '일본', 'japan'],
    note: '신주쿠 가부키초 중심가를 24시간 비추는 카메라입니다.'
  },
  {
    id: 'jp-ohguard', yt: '6dp-bvQ7RWo', name: '신주쿠 오가드 교차로', en: 'Shinjuku Ohguard Crossing',
    city: '도쿄', country: '일본', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'street', src: 'creator', provider: '신주쿠 오가드 라이브',
    lat: 35.6936, lon: 139.7000, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '신주쿠', 'shinjuku', '오가드', 'ohguard', '일본', 'japan'],
    note: '신주쿠 대가드(오가드) 교차로의 차량·보행 흐름을 보여줍니다.'
  },
  {
    id: 'jp-dotonbori', yt: '6OgYfTMOmhY', name: '오사카 도톤보리 글리코', en: 'Dotonbori Glico Sign',
    city: '오사카', country: '일본', countryEn: 'Osaka, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'street', src: 'broadcaster', provider: 'MBS NEWS',
    lat: 34.6687, lon: 135.5013, tz: 'Asia/Tokyo',
    tags: ['오사카', 'osaka', '도톤보리', 'dotonbori', '글리코', 'glico', '일본', 'japan'],
    note: 'MBS 방송사가 운영하는 도톤보리 글리코 간판 앞 라이브입니다.'
  },
  {
    id: 'jp-shinsaibashi', yt: 'YZMZSqz9fx8', name: '오사카 신사이바시', en: 'Shinsaibashi',
    city: '오사카', country: '일본', countryEn: 'Osaka, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'street', src: 'local', provider: 'F.S.T. NET 오사카',
    lat: 34.6751, lon: 135.5011, tz: 'Asia/Tokyo',
    tags: ['오사카', 'osaka', '신사이바시', 'shinsaibashi', '일본', 'japan'],
    note: '신사이바시 상점가 입구의 실시간 유동인구를 보여줍니다.'
  },
  {
    id: 'jp-fuji-yamanakako', yt: 'F2NbYrc-gBU', name: '후지산 · 야마나카호', en: 'Mt. Fuji from Lake Yamanakako',
    city: '야마나시', country: '일본', countryEn: 'Yamanashi, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'nature', src: 'public', provider: 'KTV 케이블TV 가와구치코',
    lat: 35.4210, lon: 138.8960, tz: 'Asia/Tokyo',
    tags: ['후지산', 'fuji', 'mount fuji', '야마나카코', 'yamanakako', '일본', 'japan', '산'],
    note: '야마나카호 건너편에서 본 후지산 설경·구름 상태를 확인할 수 있습니다.'
  },
  {
    id: 'jp-fuji-oshino', yt: 'PxzwnWh1dKk', name: '후지산 · 오시노핫카이', en: 'Mt. Fuji from Oshino Hakkai',
    city: '야마나시', country: '일본', countryEn: 'Yamanashi, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'nature', src: 'local', provider: 'FujiyamaTV',
    lat: 35.4656, lon: 138.8489, tz: 'Asia/Tokyo',
    tags: ['후지산', 'fuji', '오시노핫카이', 'oshino hakkai', '일본', 'japan', '산'],
    note: '세계유산 후지산을 4K로 비추는 다른 각도의 라이브 카메라입니다.'
  },
  {
    id: 'jp-rainbow', yt: 'kGG1CaeQ9oM', name: '오다이바 · 레인보우브리지', en: 'Odaiba & Rainbow Bridge',
    city: '도쿄', country: '일본', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'traffic', src: 'broadcaster', provider: 'FNN 프라임 온라인',
    lat: 35.6364, lon: 139.7633, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '오다이바', 'odaiba', '레인보우브리지', 'rainbow bridge', '수도고속', '도로', '일본', 'japan'],
    note: '수도고속도로와 레인보우브리지의 차량 흐름을 보여주는 교통 카메라입니다.'
  },
  {
    id: 'jp-wangan', yt: 'Kozl3hd56Y0', name: '도쿄만 수도고속 완간선', en: 'Tokyo Bay Expressway (Wangan)',
    city: '도쿄', country: '일본', countryEn: 'Tokyo, Japan', flag: '🇯🇵', region: 'jp',
    cat: 'traffic', src: 'creator', provider: 'HMTV Tokyo Bay',
    lat: 35.6464, lon: 139.7997, tz: 'Asia/Tokyo',
    tags: ['도쿄', 'tokyo', '수도고속', 'wangan', '고속도로', 'expressway', '도로', '교통', '일본', 'japan'],
    note: '수도고속 완간선 시노노메 분기점 부근의 실시간 교통 상황입니다.'
  },

  /* ───────────── 미국 · 캐나다 ───────────── */
  {
    id: 'us-timessquare', yt: 'ZxCeWQ3Lcig', name: '뉴욕 타임스퀘어', en: 'Times Square North 4K',
    city: '뉴욕', country: '미국', countryEn: 'New York, USA', flag: '🇺🇸', region: 'us',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 40.7580, lon: -73.9855, tz: 'America/New_York',
    tags: ['뉴욕', 'new york', '타임스퀘어', 'times square', '미국', 'usa', '거리'],
    note: 'EarthCam이 운영하는 타임스퀘어 노스 4K 카메라입니다.'
  },
  {
    id: 'us-miami', yt: 'GkBMgHwSIV0', name: '마이애미 맥아더 코즈웨이', en: 'Miami Skyline · MacArthur Causeway',
    city: '마이애미', country: '미국', countryEn: 'Miami, USA', flag: '🇺🇸', region: 'us',
    cat: 'street', src: 'webcam', provider: 'Ozolio Live',
    lat: 25.7880, lon: -80.1790, tz: 'America/New_York',
    tags: ['마이애미', 'miami', '비치', 'beach', '미국', 'usa', '스카이라인'],
    note: '마이애미 스카이라인과 코즈웨이 차량 흐름을 함께 보여줍니다.'
  },
  {
    id: 'us-hollywood', yt: 'cmkAbDUEoyA', name: '할리우드 비치 브로드워크', en: 'Hollywood Beach Broadwalk',
    city: '플로리다', country: '미국', countryEn: 'Florida, USA', flag: '🇺🇸', region: 'us',
    cat: 'nature', src: 'public', provider: '시티 오브 할리우드 (시청)',
    lat: 26.0112, lon: -80.1160, tz: 'America/New_York',
    tags: ['플로리다', 'florida', '할리우드', 'hollywood beach', '비치', 'beach', '미국', 'usa'],
    note: '할리우드 시청이 직접 운영하는 해변 브로드워크 카메라입니다.'
  },
  {
    id: 'us-waikiki', yt: 'sL576ZclD_Q', name: '와이키키 해변', en: 'Waikiki Beach, Honolulu',
    city: '호놀룰루', country: '미국', countryEn: 'Hawaii, USA', flag: '🇺🇸', region: 'us',
    cat: 'nature', src: 'webcam', provider: 'Port of Cams',
    lat: 21.2793, lon: -157.8292, tz: 'Pacific/Honolulu',
    tags: ['하와이', 'hawaii', '와이키키', 'waikiki', '호놀룰루', 'honolulu', '해변', 'beach', '미국', 'usa'],
    note: '레워스 스트리트에서 바라본 와이키키 해변과 파도입니다.'
  },
  {
    id: 'us-niagara', yt: 'qx7gry390YA', name: '나이아가라 폭포', en: 'Niagara Falls',
    city: '나이아가라', country: '미국·캐나다', countryEn: 'NY, USA / Ontario, Canada', flag: '🇺🇸', region: 'us',
    cat: 'nature', src: 'webcam', provider: 'EarthCam',
    lat: 43.0828, lon: -79.0742, tz: 'America/New_York',
    tags: ['나이아가라', 'niagara', '폭포', 'falls', '미국', '캐나다', 'canada'],
    note: '말굽폭포 방향을 비추는 EarthCam 라이브입니다.'
  },
  {
    id: 'us-brooks', yt: 'J7ZrIDvqlic', name: '브룩스 폴스 (알래스카)', en: 'Brooks Falls, Katmai',
    city: '알래스카', country: '미국', countryEn: 'Alaska, USA', flag: '🇺🇸', region: 'us',
    cat: 'nature', src: 'webcam', provider: 'explore.org',
    lat: 58.5566, lon: -155.7745, tz: 'America/Anchorage',
    tags: ['알래스카', 'alaska', '브룩스', 'brooks falls', '곰', 'bear', '자연', 'nature', '미국', 'usa'],
    note: '연어를 잡는 야생 곰을 24시간 중계하는 자연 카메라입니다.'
  },
  {
    id: 'us-steamboat', yt: '2UJDLWcSADk', name: '스팀보트 스키장 베이스', en: 'Steamboat Resort Base',
    city: '콜로라도', country: '미국', countryEn: 'Colorado, USA', flag: '🇺🇸', region: 'us',
    cat: 'nature', src: 'public', provider: 'Steamboat Resort (공식)',
    lat: 40.4850, lon: -106.8317, tz: 'America/Denver',
    tags: ['콜로라도', 'colorado', '스키', 'ski', '스키장', 'resort', '스팀보트', 'steamboat', '미국', 'usa'],
    note: '리조트가 직접 운영하는 베이스 구역 카메라로 적설·혼잡도를 볼 수 있습니다.'
  },

  /* ───────────── 유럽 ───────────── */
  {
    id: 'eu-abbeyroad', yt: 'zMCea32gpmg', name: '런던 애비 로드', en: 'Abbey Road Crossing, London',
    city: '런던', country: '영국', countryEn: 'London, UK', flag: '🇬🇧', region: 'eu',
    cat: 'street', src: 'webcam', provider: 'EarthCam',
    lat: 51.5320, lon: -0.1780, tz: 'Europe/London',
    tags: ['런던', 'london', '애비로드', 'abbey road', '영국', 'uk', 'england'],
    note: '비틀즈 앨범 표지로 유명한 횡단보도를 실시간으로 보여줍니다.'
  },
  {
    id: 'eu-londonbridge', yt: 'MXmzsjABC-U', name: '런던 브리지 · 템스강', en: 'London Bridge & River Thames',
    city: '런던', country: '영국', countryEn: 'London, UK', flag: '🇬🇧', region: 'eu',
    cat: 'street', src: 'creator', provider: 'Beach Life Cams',
    lat: 51.5055, lon: -0.0900, tz: 'Europe/London',
    tags: ['런던', 'london', '런던브리지', 'london bridge', '템스', 'thames', '영국', 'uk'],
    note: '런던 브리지와 템스강 유람선 흐름을 4K로 송출합니다.'
  },
  {
    id: 'eu-eiffel', yt: 'QI-PPEW2Bgc', name: '파리 에펠탑', en: 'Eiffel Tower, Paris',
    city: '파리', country: '프랑스', countryEn: 'Paris, France', flag: '🇫🇷', region: 'eu',
    cat: 'street', src: 'webcam', provider: 'Paris75Webcam',
    lat: 48.8584, lon: 2.2945, tz: 'Europe/Paris',
    tags: ['파리', 'paris', '에펠탑', 'eiffel', '프랑스', 'france'],
    note: '에펠탑과 몽파르나스 타워가 함께 보이는 전경 카메라입니다.'
  },
  {
    id: 'eu-sacrecoeur', yt: '-xzg3wujOVM', name: '파리 사크레쾨르', en: 'Sacré-Cœur, Montmartre',
    city: '파리', country: '프랑스', countryEn: 'Paris, France', flag: '🇫🇷', region: 'eu',
    cat: 'street', src: 'local', provider: 'PARIS TV',
    lat: 48.8867, lon: 2.3431, tz: 'Europe/Paris',
    tags: ['파리', 'paris', '사크레쾨르', 'sacre coeur', '몽마르트르', 'montmartre', '프랑스', 'france'],
    note: '몽마르트르 언덕과 파리 시내 전망을 보여줍니다.'
  },
  {
    id: 'eu-venice', yt: 'r8N6IsoIkTk', name: '베네치아 그란데 운하', en: 'Grand Canal, Venice',
    city: '베네치아', country: '이탈리아', countryEn: 'Venice, Italy', flag: '🇮🇹', region: 'eu',
    cat: 'street', src: 'webcam', provider: 'I Love You Venice',
    lat: 45.4345, lon: 12.3300, tz: 'Europe/Rome',
    tags: ['베네치아', 'venice', '베니스', '그란데운하', 'grand canal', '이탈리아', 'italy'],
    note: '리알토 인근 그란데 운하의 곤돌라·수상버스 흐름을 보여줍니다.'
  },
  {
    id: 'eu-amsterdam', yt: 'Gd9d4q6WvUY', name: '암스테르담 담 광장', en: 'Dam Square, Amsterdam',
    city: '암스테르담', country: '네덜란드', countryEn: 'Amsterdam, Netherlands', flag: '🇳🇱', region: 'eu',
    cat: 'street', src: 'webcam', provider: 'Now4Rent.NL',
    lat: 52.3731, lon: 4.8932, tz: 'Europe/Amsterdam',
    tags: ['암스테르담', 'amsterdam', '담광장', 'dam square', '네덜란드', 'netherlands', 'holland'],
    note: '왕궁 앞 담 광장을 팬·틸트·줌이 가능한 4K 카메라로 중계합니다.'
  },
  {
    id: 'eu-lucerne', yt: 'QIt1FaDMnQc', name: '루체른 호수', en: 'Lucerne Lake',
    city: '루체른', country: '스위스', countryEn: 'Lucerne, Switzerland', flag: '🇨🇭', region: 'eu',
    cat: 'street', src: 'broadcaster', provider: 'Tele1 (지역 방송)',
    lat: 47.0502, lon: 8.3093, tz: 'Europe/Zurich',
    tags: ['루체른', 'lucerne', '스위스', 'switzerland', '호수', 'lake'],
    note: '스위스 지역 방송 Tele1이 운영하는 루체른 호수·시내 카메라입니다.'
  },
  {
    id: 'eu-grimentz', yt: 'iCxfe27HpaY', name: '그리멘츠 스키밸리', en: 'Grimentz Ski Valley',
    city: '그리멘츠', country: '스위스', countryEn: 'Valais, Switzerland', flag: '🇨🇭', region: 'eu',
    cat: 'nature', src: 'local', provider: 'Grimentz Live',
    lat: 46.1667, lon: 7.5500, tz: 'Europe/Zurich',
    tags: ['스위스', 'switzerland', '스키', 'ski', '알프스', 'alps', '그리멘츠', 'grimentz', '산'],
    note: '발레주 스키밸리의 설질과 슬로프 상태를 실시간으로 보여줍니다.'
  },
  {
    id: 'eu-levi', yt: 'LwihxyJ4V20', name: '레비 스키장 제로포인트', en: 'Levi Ski Resort Zero Point',
    city: '레비', country: '핀란드', countryEn: 'Lapland, Finland', flag: '🇫🇮', region: 'eu',
    cat: 'nature', src: 'public', provider: 'Levi Ski Resort (공식)',
    lat: 67.8050, lon: 24.8000, tz: 'Europe/Helsinki',
    tags: ['핀란드', 'finland', '라플란드', 'lapland', '스키', 'ski', '오로라', 'aurora', '산'],
    note: '북극권 리조트가 직접 운영하는 카메라로, 밤에는 오로라가 잡히기도 합니다.'
  },

  /* ───────────── 아시아 · 오세아니아 · 남미 ───────────── */
  {
    id: 'ap-sydney', yt: '5uZa3-RMFos', name: '시드니 하버', en: 'Sydney Harbour',
    city: '시드니', country: '호주', countryEn: 'Sydney, Australia', flag: '🇦🇺', region: 'ap',
    cat: 'street', src: 'webcam', provider: 'WebcamSydney',
    lat: -33.8568, lon: 151.2153, tz: 'Australia/Sydney',
    tags: ['시드니', 'sydney', '하버브리지', 'harbour bridge', '오페라하우스', 'opera house', '호주', 'australia'],
    note: '하버브리지와 오페라하우스가 한 화면에 들어오는 24시간 카메라입니다.'
  },
  {
    id: 'ap-bangkok', yt: 'UemFRPrl1hk', name: '방콕 수쿰빗', en: 'Sukhumvit Soi 11, Bangkok',
    city: '방콕', country: '태국', countryEn: 'Bangkok, Thailand', flag: '🇹🇭', region: 'ap',
    cat: 'street', src: 'webcam', provider: 'The Real Samui Webcam',
    lat: 13.7440, lon: 100.5510, tz: 'Asia/Bangkok',
    tags: ['방콕', 'bangkok', '수쿰빗', 'sukhumvit', '태국', 'thailand'],
    note: '수쿰빗 소이 11 거리 풍경과 야간 유동인구를 4K로 보여줍니다.'
  },
  {
    id: 'ap-rio', yt: 'wyEi0OPai5g', name: '리우 코파카바나', en: 'Copacabana Beach, Rio',
    city: '리우데자네이루', country: '브라질', countryEn: 'Rio de Janeiro, Brazil', flag: '🇧🇷', region: 'ap',
    cat: 'nature', src: 'webcam', provider: 'Homes in Rio',
    lat: -22.9711, lon: -43.1822, tz: 'America/Sao_Paulo',
    tags: ['리우', 'rio', '코파카바나', 'copacabana', '브라질', 'brazil', '해변', 'beach'],
    note: '코파카바나 해변 포스투 6 구간의 파도와 날씨를 보여줍니다.'
  },

  /* ───────────── 공식 라이브 바로가기(외부 링크 전용) ───────────── */
  {
    id: 'ext-topis', mode: 'external', name: '서울시 TOPIS 교통 CCTV', en: 'Seoul TOPIS Traffic CCTV',
    city: '서울', country: '대한민국', countryEn: 'Seoul, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'traffic', src: 'public', provider: '서울특별시 교통정보센터(TOPIS)',
    lat: 37.5566, lon: 126.9368, tz: 'Asia/Seoul',
    tags: ['서울', 'seoul', 'topis', '양화대교', '명동', '교통', 'cctv', '도로', '대한민국', 'korea'],
    url: 'https://topis.seoul.go.kr/',
    note: '서울시가 직접 운영하는 실시간 CCTV. 영상 재배포가 제한되어 공식 페이지로만 연결합니다.'
  },
  {
    id: 'ext-busan-tunnel', mode: 'external', name: '부산 구덕터널 CCTV', en: 'Busan Gudeok Tunnel CCTV',
    city: '부산', country: '대한민국', countryEn: 'Busan, Korea', flag: '🇰🇷', region: 'kr',
    cat: 'traffic', src: 'public', provider: '부산시설공단 교통정보',
    lat: 35.1180, lon: 129.0120, tz: 'Asia/Seoul',
    tags: ['부산', 'busan', '구덕터널', '터널', '교통', 'cctv', '도로', '대한민국', 'korea'],
    url: 'https://www.youtube.com/watch?v=AjxhLFTDSbE',
    note: '공단 공식 유튜브 채널이지만 외부 임베드가 막혀 있어 원본으로만 연결합니다.'
  },
  {
    id: 'ext-jartic', mode: 'external', name: '일본 JARTIC 도로 교통정보', en: 'Japan Road Traffic (JARTIC)',
    city: '도쿄', country: '일본', countryEn: 'Japan', flag: '🇯🇵', region: 'jp',
    cat: 'traffic', src: 'public', provider: '일본 도로교통정보센터(JARTIC)',
    lat: 35.6812, lon: 139.7671, tz: 'Asia/Tokyo',
    tags: ['일본', 'japan', 'jartic', '도로', '교통', '고속도로', 'highway', '도쿄', 'tokyo'],
    url: 'https://www.jartic.or.jp/',
    note: '일본 전국 주요 도로의 공공 교통정보. 공식 페이지 링크만 제공합니다.'
  }
];
