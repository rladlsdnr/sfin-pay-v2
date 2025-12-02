import type { Metadata } from "next";
import Travel from "./hospitality";

export const metadata: Metadata = {
    title: "숙박·여행·레저업 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "호텔, 여행사, 레저 액티비티 등 숙박·여행·레저 업종에 최적화된 결제 솔루션입니다. 투어 예약금부터 취소 환불까지 복잡한 결제 과정을 자동화하여 운영 효율을 높여 다양한 여행·레저 시나리오에 맞춘 통합 결제 환경을 제공합니다.",
    keywords: [
        "숙박업 결제",
        "여행사 결제",
        "레저 결제",
        "예약 결제",
        "예약금 관리",
        "부분환불",
        "자동 처리",
        "관광 결제 솔루션",
    ],
};

export default function Page() {
    return <Travel />;
}