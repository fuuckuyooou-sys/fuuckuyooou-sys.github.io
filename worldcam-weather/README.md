# 월드캠 웨더 (WorldCam Weather)

세계 주요 관광지·도로·해변·스키장의 **공식 라이브 카메라**와 그 장소의 **현지 실시간 날씨**를 한 화면에서 비교하는 정적 웹 서비스입니다.

- 라이브: https://fuuckuyooou-sys.github.io/worldcam-weather/
- 구성: `index.html` + `assets/{style.css,app.js,cameras.js}` (빌드 도구 없음, GitHub Pages 정적 배포)

## 기능

| 기능 | 구현 |
|---|---|
| 지역·분류 필터 | 한국 / 일본 / 미국·캐나다 / 유럽 / 아시아·오세아니아·남미, 관광지·거리 / 도로·교통 / 해변·스키장·산 |
| 한·영 검색 | 국가명·도시명·장소명·채널명·태그 실시간 AND 검색 (`일본`, `도쿄`, `시부야`, `Japan`, `뉴욕` …) |
| 현지 날씨 | 카메라 좌표 기준 [Open-Meteo](https://open-meteo.com/) 현재값(기온·날씨 코드·풍속·습도·체감·낮/밤·현지 시각)을 10분마다 갱신 |
| 수신 상태 자동 배지 | YouTube IFrame API로 메타데이터를 확인해 `LIVE` / `오프라인`(임베드 제한·비공개·삭제) / `방송 종료`(다시보기)를 카드에 표시. 화면에 들어온 카드만 순차 확인하고 결과를 5분간 브라우저에 캐시 |
| 카메라 제보 | 모달에서 도시·URL·분류·설명 입력 → `mailto:` 발송 또는 내용 복사 |
| 수익 영역 | 상단·중간·상세 모달에 비어 있는 광고 슬롯(애드센스 심사 전, 광고 문구 없음) |

## 영상·약관 원칙

1. 영상은 제공 채널이 **YouTube에서 임베드를 허용한 라이브만** 공식 iframe 플레이어로 재생합니다.
2. **스트림 URL 추출·녹화·재송출·자가 호스팅 금지.** 영상을 저장하지 않습니다.
3. 외부 임베드가 막혔거나 재배포가 금지된 공공·교통 CCTV(서울 TOPIS, 부산시설공단 교통정보, 일본 JARTIC)는 **공식 페이지 바로가기**로만 연결합니다.
4. 목록화하는 정보는 장소명·도시·좌표·출처 등 사실 정보이며, 출처를 카드마다 표기합니다.
5. 권리자·운영기관 삭제 요청: **wojin826@naver.com** (사이트 내 `약관 · 권리자 삭제 요청` 모달에서도 안내)

## 카메라 추가하기

`assets/cameras.js`의 배열에 항목을 추가합니다.

```js
{
  id: 'unique-id', yt: 'YOUTUBE_VIDEO_ID',   // 외부 링크 항목은 mode:'external' + url
  name: '장소명', en: 'English name',
  city: '도시', country: '국가', countryEn: 'City, Country', flag: '🇯🇵',
  region: 'kr|jp|us|eu|ap', cat: 'street|traffic|nature',
  src: 'broadcaster|public|webcam|local|creator', provider: '채널·기관명',
  lat: 00.0000, lon: 000.0000, tz: 'Asia/Tokyo',
  tags: ['검색어', 'english'],
  note: '한 줄 설명'
}
```

추가 전 확인: ① 현재 24시간 라이브인지 ② 채널이 임베드를 허용하는지(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=ID&format=json` → 200) ③ 약관상 링크 목록화·임베드가 금지되지 않았는지.

## 로컬 확인

정적 파일이라 `index.html`을 브라우저로 열면 되지만, YouTube 임베드는 `http(s)` 출처에서만 정상 동작하므로 간단한 서버 사용을 권장합니다.

```bash
python3 -m http.server 8000
```
