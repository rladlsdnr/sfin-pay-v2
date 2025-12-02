import type { Metadata } from "next";
import Device from "./device";

export const metadata: Metadata = {
    title: "POS · MPOS 단말기 | 스핀페이 SFIN PAY",
    description: "프랜차이즈 및 다점포 비즈니스에 특화된 POS·MPOS 결제 솔루션입니다. 본사는 모든 지점을 통합 관리하고 매장은 개별 운영 가능하여 신속한 의사결정을 돕습니다.",
    keywords: [
        "POS 단말기",
        "MPOS",
        "프랜차이즈 결제",
        "다점포 관리",
        "매장 결제",
        "실시간 매출",
        "본사 정산",
        "스핀페이 POS",
    ],
};

export default function Page() {
    return <Device />;
}