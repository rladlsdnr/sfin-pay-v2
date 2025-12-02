import type { Metadata } from "next";
import FB from "./fb";

export const metadata: Metadata = {
    title: "식당·외식·프랜차이즈업 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "식당, 카페 등 외식 및 프랜차이즈 업종을 위한 결제 솔루션입니다. 매장 POS와 키오스크, 배달앱 결제를 하나로 연동하여 주문부터 결제, 매장별 매출 현황과 본사 정산 리포트를 제공합니다",
    keywords: [
        "외식업 결제",
        "프랜차이즈 결제",
        "식당 결제",
        "카페 결제",
        "키오스크 연동",
        "배달앱 결제",
        "본사 정산",
        "매출 관리",
    ],
};

export default function Page() {
    return <FB />;
}