import type { Metadata } from "next";
import CareersPage from "./careers";

export const metadata: Metadata = {
    title: "채용 | 스핀페이 SFIN PAY",
    description: "스핀페이 팀과 함께 결제 혁신을 이끌어갈 인재를 모집합니다. 빠르고 투명한 결제 생태계를 만들어가는 우리 팀은 신뢰와 투명성을 핵심 가치로 합니다. 개발(프론트엔드·백엔드), 디자인, 사업개발 등 다양한 분야의 채용 포지션이 열려 있으며, 금융과 기술이 만나는 새로운 표준을 함께 세워나갈 열정적인 여러분의 지원을 기다립니다.",
    keywords: [
        "스핀페이 채용",
        "채용 정보",
        "개발자 채용",
        "프론트엔드 엔지니어",
        "백엔드 엔지니어",
        "핀테크 채용",
        "스타트업 채용",
        "기업 문화",
    ],
};

export default function Page() {
    return <CareersPage />;
}