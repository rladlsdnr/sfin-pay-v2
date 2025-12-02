import type { Metadata } from "next";
import Distribution from "./distribution";

export const metadata: Metadata = {
    title: "쇼핑·판매·유통업 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "온라인 쇼핑몰부터 오픈마켓까지 판매·유통 업종에 최적화된 결제 솔루션입니다. 상품 판매와 예약 결제가 많은 비즈니스를 위해 D+0 당일 정산으로 빠른 자금 회전을 지원하고, 정기결제(구독 결제)와 간편결제를 제공하여 편리한 구매 환경을 만듭니다.",
    keywords: [
        "쇼핑몰 결제",
        "유통업 결제",
        "판매업 결제",
        "D+0 정산",
        "정기결제",
        "구독 결제",
        "간편결제",
        "통합 결제 솔루션",
    ],
};

export default function Page() {
    return <Distribution />;
}