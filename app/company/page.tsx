import type { Metadata } from "next";
import CompanyIntro from "./company";

export const metadata: Metadata = {
    title: "회사 소개 | 스핀페이 SFIN PAY",
    description: "2025년 설립된 통합 결제 전문 기업 스핀페이(SFIN PAY)는 빠르고 투명한 정산 시스템을 핵심 가치로 모든 거래 흐름을 명확하고 신뢰성 있게 제공합니다. AI 기반 리스크 관리와 최고 수준 보안 인증으로 안전한 결제 환경을 구축합니다.",
    keywords: [
        "결제 전문 기업",
        "통합 결제 플랫폼 기업",
        "투명한 정산",
        "신뢰 기반 결제",
        "AI 리스크 관리",
        "보안 인증",
        "SFIN PAY 회사 소개"
    ],
};

export default function Page() {
    return <CompanyIntro />;
}