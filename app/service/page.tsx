import type { Metadata } from "next";
import Service from "./service";

export const metadata: Metadata = {
    title: "서비스·교육업 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "학원, 피트니스, 렌탈, 미용 등 서비스·교육 업종에 특화된 결제 솔루션입니다. 회원권 결제나 수강료처럼 반복 결제가 필요한 경우 자동청구와 정기결제 기능으로 편리하게 관리할 수 있습니다.",
    keywords: [
        "서비스업 결제",
        "교육업 결제",
        "자동청구",
        "정기결제",
        "스케줄 정산",
        "반복결제",
        "학원 결제",
        "렌탈 결제",
    ],
};

export default function Page() {
    return <Service />;
}