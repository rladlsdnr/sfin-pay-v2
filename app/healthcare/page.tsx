import type { Metadata } from "next";
import Medical from "./healthCare";

export const metadata: Metadata = {
    title: "병원·의료·헬스케어 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "병의원, 한의원부터 의료기기 렌탈까지 의료·헬스케어 업계를 위한 결제 솔루션입니다. 비급여 진료비 결제와 의료기기 구독료 결제를 간편하게 처리하고, 예약 진료에 따른 맞춤 정산 체계를 제공합니다.",
    keywords: [
        "의료 결제",
        "병원 결제",
        "비급여 결제",
        "의료기기 렌탈 결제",
        "헬스케어 결제",
        "예약 진료 결제",
        "의료 정산",
        "결제 데이터 보안",
    ],
};

export default function Page() {
    return <Medical />;
}