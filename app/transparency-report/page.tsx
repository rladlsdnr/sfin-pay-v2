import type { Metadata } from "next";
import TransParencyReport from "./transparencyReport";

export const metadata: Metadata = {
    title: "투명경영 보고서 2025 | 스핀페이 SFIN PAY",
    description: "SFIN PAY의 서비스 안정성, 정보보호, 준법 경영, ESG 활동을 투명하게 공개한 2025년 투명경영 보고서입니다. 투명경영 4대 원칙 아래 리스크·보안위원회 운영, 법규 준수 현황, 서비스 신뢰성 지표(SLA) 및 장애 대응 정책, ESG 경영 실천 등을 상세히 담았습니다.",
    keywords: [
        "투명경영",
        "신뢰 인프라",
        "컴플라이언스",
        "SLA 지표",
        "장애 공개 정책",
        "ESG 경영",
        "리스크 관리",
        "2025 보고서",
    ],
};

export default function Page() {
    return <TransParencyReport />;
}