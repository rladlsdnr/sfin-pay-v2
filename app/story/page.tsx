import type { Metadata } from "next";
import CustomerStoriesMint from "./Story";

export const metadata: Metadata = {
    title: "고객 후기 | 스핀페이 SFIN PAY",
    description: "스핀페이 고객 후기 모음. 실제 가맹점의 결제·정산 운영 변화, D+0/D+1 정산 경험, 업종별 사례(학원·부동산·의원·프리랜서)를 투명하게 소개합니다.",
    keywords: [
        "결제 후기",
        "가맹점 후기",
        "고객 리뷰",
        "PG 솔루션",
        "정산 리포트",
        "D+0 정산",
        "D+1 정산",
        "스핀페이 고객 후기",
    ],
};

export default function Page() {
    return <CustomerStoriesMint />;
}