import type { Metadata } from "next";
import QrPay from "./QRPay";

export const metadata: Metadata = {
    title: "오프라인·QR 결제 | 스핀페이 SFIN PAY",
    description: "매장 POS 결제와 QR 결제를 하나의 플랫폼에서 처리하는 통합 솔루션입니다. 무선 단말기, POS·MPOS 및 QR코드 결제를 모두 지원하여 매장 운영 효율을 높입니다.",
    keywords: [
        "오프라인 결제",
        "QR 결제",
        "POS 결제",
        "매장 결제",
        "통합 결제 솔루션",
        "POS 연동",
        "매출 리포트",
        "스핀페이 오프라인",
    ],
};

export default function Page() {
    return <QrPay />;
}