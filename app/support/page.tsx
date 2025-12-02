import type { Metadata } from "next";
import Support from "./support";

export const metadata: Metadata = {
    title: "고객 지원 센터 | 스핀페이 SFIN PAY",
    description: "결제 정산 지연, 가맹 계약, 기술 연동, 제휴 문의 등 모든 문의를 한곳에서 지원하는 스핀페이 고객 지원 센터입니다. 문의 유형별로 정산 문의, 가맹 계약/수수료 협의, POS·API 기술 지원, 일반/제휴 문의 접수가 가능하며, 자주 묻는 질문(FAQ)을 통해 신속한 해결책을 제공합니다.",
    keywords: [
        "고객 지원",
        "정산 문의",
        "가맹 문의",
        "기술 지원",
        "제휴 문의",
        "FAQ",
        "결제 문의",
        "스핀페이 지원 센터",
    ],
};

export default function Page() {
    return <Support />;
}