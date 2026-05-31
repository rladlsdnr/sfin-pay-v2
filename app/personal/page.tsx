import type { Metadata } from "next";
import Personal from "./personal";

export const metadata: Metadata = {
    title: "개인·프리랜서 맞춤 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "프리랜서·1인 창작자를 위한 결제 솔루션입니다. 판매 페이지나 결제 링크를 생성해 대금을 손쉽게 받을 수 있고, 정산 및 지급 과정도 투명하게 관리됩니다.",
    keywords: [
        "개인결제",
        "프리랜서 결제",
        "간편 수금",
        "결제 링크",
        "1인 창작자",
        "크리에이터 결제",
        "간편 정산",
        "개인 맞춤 결제",
    ],
};

export default function Page() {
    return <Personal />;
}