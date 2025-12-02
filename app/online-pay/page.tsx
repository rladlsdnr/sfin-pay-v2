import type { Metadata } from "next";
import OnlinePay from "./onlinePay";

export const metadata: Metadata = {
    title: "온라인 결제 | 스핀페이 SFIN PAY",
    description: "쇼핑몰·예약 플랫폼의 온라인 결제를 하나로 통합한 솔루션입니다. 신용카드, 간편결제, 계좌이체를 모두 지원하고 API 연동을 통해 손쉽게 적용 가능합니다. D+0·D+1 당일 정산으로 온라인 비즈니스의 현금 흐름을 안정화합니다.",
    keywords: [
        "온라인 결제",
        "PG 솔루션",
        "카드결제 API",
        "간편결제",
        "계좌이체 결제",
        "실시간 정산",
        "당일 정산",
        "쇼핑몰 결제",
    ],
};

export default function Page() {
    return <OnlinePay />;
}