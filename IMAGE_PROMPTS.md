# SFIN PAY — 이미지 생성 프롬프트 18장

> 공통 스타일(모든 프롬프트 끝에 자동 포함된다고 생각하고 사용): 
> **premium editorial commercial photography, soft diffused natural light, shallow depth of field, cool lavender / purple-blue color grade with subtle #a855f7 #8b6cff #4f7cff accents over a light airy background, clean and minimal, generous soft negative space for text overlay, photorealistic, ultra detailed, 16:9 wide, no text, no logos, no watermark, no on-screen UI text**

해상도: 2400×1350 이상(16:9). 톤: SFIN PAY = 밝은 라이트 + 퍼플블루(스핀캐시의 골드/웜톤과 반대). 인물·피사체는 한쪽으로, 중앙·상단은 텍스트가 얹히므로 비워둘 것.

---

## A. 히어로 배경 6장 (메인 상단 로테이션)

**H1 · 통합결제 / 카드**
> A close-up of a small-business owner's hand tapping a sleek glossy gradient credit card on a modern contactless card reader at a bright minimalist counter, the hand and terminal positioned in the right third of the frame, soft purple-blue rim light on the device, creamy bokeh background, left side bright and empty.

**H2 · 매장 / POS 단말기**
> A stylish cafe owner standing at a sleek tablet POS terminal ringing up a sale in a bright modern store, subject on the right, glowing screen with a soft violet-blue tint, warm minimal interior turning cool toward the highlights, airy empty space on the left for text.

**H3 · 스마트폰 QR 결제**
> A customer scanning a softly glowing QR code on a counter stand with a smartphone, phone held in the right portion of the frame, gentle purple-blue glow from the screen, clean bright checkout setting, shallow depth of field, calm empty space center-left.

**H4 · 온라인 / 이커머스**
> A young online seller packing a parcel at a tidy bright desk with a laptop showing a soft abstract analytics dashboard, lavender-blue light, plants and minimal props, subject and laptop on the right, soft empty bright area on the left.

**H5 · 정산 / 성장**
> A relaxed shop owner smiling while glancing at a smartphone at their counter, faint upward-trending graph glow reflected, bright airy store, cool purple-blue grade, hopeful premium mood, subject right of center, soft empty space for headline.

**H6 · 보안 / 신뢰**
> An elegant macro shot of a fingertip resting on a smartphone with a subtle holographic shield and lock light effect floating above the screen, deep soft purple-to-blue gradient bokeh, premium fintech security feel, dark-to-light gradient leaving the upper area bright and open.

---

## B. 결제 방식 하위 4페이지 배경

**P1 · 온라인 결제 (online-pay)**
> Over-the-shoulder view of a person checking out on an e-commerce site on a laptop, card in hand, bright home-office desk, soft violet-blue UI glow from the screen, shallow depth of field, clean and airy with open space at the top.

**P2 · 오프라인·QR 결제 (qr-pay)**
> A bright retail counter with a small QR code acrylic stand and a customer's phone approaching to scan, soft purple-blue glow around the QR, minimal modern shop, lots of soft light and empty space above for text.

**P3 · 수기 결제 / MOTO (moto)**
> A professional at a clean desk taking a phone order while entering a payment on a tablet, headset optional, calm office, cool lavender-blue tone, secure and trustworthy mood, generous empty area on one side.

**P4 · POS · 단말기 (device)**
> A premium product still-life of two or three modern card payment terminals and a mobile MPOS reader arranged on a soft light surface, gentle purple-blue rim lighting and reflections, studio-grade, lots of clean negative space.

---

## C. 업종별 추천 하위 8페이지 배경

**I1 · 쇼핑·판매·유통 (distribution)**
> A bright modern retail/wholesale space with neatly stacked product boxes and a checkout counter with a card reader, cool lavender-blue grade, sense of fast turnover, soft depth of field, open bright space for text.

**I2 · 서비스·교육 (service)**
> A friendly instructor with a tablet in a bright minimal studio/classroom welcoming a client, calm professional mood, soft purple-blue light, scheduling/booking feel, airy negative space.

**I3 · 외식·프랜차이즈 (fb)**
> A sleek restaurant counter where a staff member processes a payment on a POS, plates and warm interior softened by a cool purple-blue grade, bright and clean, empty soft area above for headline.

**I4 · 숙박·여행·레저 (hospitality)**
> A refined hotel front desk at check-in, a guest tapping a card on a terminal, elegant lobby with soft lavender-blue evening light, premium calm atmosphere, generous empty space.

**I5 · 콘텐츠·엔터테인먼트 (entertainment)**
> A person enjoying digital content on a phone/tablet with subtle floating subscription and ticket UI glow, vibrant yet soft purple-blue lighting, modern lifestyle, bright open background area.

**I6 · 병원·의료·헬스케어 (healthcare)**
> A clean modern clinic reception desk where a patient makes a contactless payment, soft clinical white with cool purple-blue accents, trustworthy and calm, plenty of bright empty space.

**I7 · 기업·B2B (b2b)**
> Two business professionals in a bright modern office finalizing a deal with a handshake near a laptop showing soft invoice/settlement visuals, corporate premium mood, cool lavender-blue grade, open space for text.

**I8 · 개인·프리랜서 (personal)**
> A creative freelancer at a cozy bright desk sharing a payment link from a phone, laptop and creative tools around, relaxed independent vibe, soft purple-blue tone, airy negative space on one side.

---

## 적용 방법
- 히어로 6장 → `public/hero-bg-1.svg` … `hero-bg-6.svg` 를 `hero-bg-1.jpg` … 식으로 교체 후 `components/Hero.tsx` 의 `BG_IMAGES` 배열 경로만 변경. (투명도는 wrapper `opacity` 값으로 조절)
- 결제방식·업종 페이지 배경 → 각 페이지 데이터(`components/detail/industryData.tsx`)의 `bg` 값을 해당 이미지 경로로 교체.
- 권장: `.webp` 로 변환해 업로드(용량·속도). 1600px 폭이면 충분.
