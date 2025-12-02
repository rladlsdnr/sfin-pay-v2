import type { Metadata } from "next";
import B2B from "./b2b";

export const metadata: Metadata = {
    title: "기업·B2B 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "광고, SaaS, 임대, 보험 등 기업 간 거래(B2B)에 특화된 결제 솔루션입니다. 대량 거래와 정기 청구를 자동화하여 세금계산서 기반 결제 및 일괄 정산을 손쉽게 처리할 수 있습니다. 다수의 거래처를 둔 기업도 자동청구, 대량정산, 정산 보고 기능을 제공합니다.",
    keywords: [
        "B2B 결제",
        "기업 결제 솔루션",
        "세금계산서 결제",
        "대량 정산",
        "자동 청구",
        "정기 결제",
        "기업 간 결제",
        "일괄 정산",
    ],
};

export default function Page() {
    return <B2B />;
}