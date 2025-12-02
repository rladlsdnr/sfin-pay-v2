import type { Metadata } from "next";
import ManualPay from "./moto";

export const metadata: Metadata = {
    title: "수기 결제·MOTO | 스핀페이 SFIN PAY",
    description: "전화 주문 및 원격 결제를 위한 MOTO(수기결제) 솔루션입니다. 카드 정보 수기 입력으로 결제를 처리할 때도 강화된 보안 인증과 AI 기반 이상거래 탐지(FDS)를 적용하여 안전하게 운영할 수 있습니다.",
    keywords: [
        "수기 결제",
        "MOTO 결제",
        "전화결제",
        "원격결제",
        "비대면 결제",
        "FDS 보안",
        "이상거래 탐지",
        "안전한 결제",
    ],
};

export default function Page() {
    return <ManualPay />;
}