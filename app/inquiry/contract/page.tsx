// app/inquiry/contract/page.tsx
import type { Metadata } from "next";
import ContractInquiryClient from "./ContractInquiryClient";

export const metadata: Metadata = {
    title: "가맹 계약 및 수수료 문의 | 스핀페이 SFIN PAY",
    description:
        "스핀페이 가맹점을 위한 맞춤형 수수료 설계와 빠른 정산 서비스를 제공합니다. 업종과 매출 규모에 따라 최적의 카드/간편결제 수수료를 협의하며, D+0·D+1 정산 옵션으로 가맹점의 현금 흐름을 개선합니다.",
    keywords: [
        "가맹 신청",
        "가맹 계약",
        "수수료 협의",
        "D+0 정산",
        "D+1 정산",
        "원스톱 온보딩",
        "전자계약",
        "가맹 문의",
    ],
    openGraph: {
        title: "가맹 계약 및 수수료 문의 | 스핀페이 SFIN PAY",
        description:
            "스핀페이 가맹점을 위한 맞춤형 수수료 설계와 빠른 정산 서비스를 제공합니다. 업종과 매출 규모에 따라 최적의 카드/간편결제 수수료를 협의하며, D+0·D+1 정산 옵션으로 가맹점의 현금 흐름을 개선합니다.",
        type: "website",
        url: "https://sfinpayment.com//inquiry/contract",
        images: [{ url: "/og/contract-mint.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "가맹 계약 및 수수료 문의 | 스핀페이 SFIN PAY",
        description:
            "스핀페이 가맹점을 위한 맞춤형 수수료 설계와 빠른 정산 서비스를 제공합니다. 업종과 매출 규모에 따라 최적의 카드/간편결제 수수료를 협의하며, D+0·D+1 정산 옵션으로 가맹점의 현금 흐름을 개선합니다.",
        images: ["/og/contract-mint.png"],
    },
    alternates: {
        canonical: "https://sfinpayment.com//inquiry/contract",
    },
};

export default function Page() {
    return <ContractInquiryClient />;
}
