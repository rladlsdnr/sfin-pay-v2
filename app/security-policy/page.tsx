import type { Metadata } from "next";
import SecurityPolicy from "./securityPolicy";

export const metadata: Metadata = {
    title: "정보보호 및 개인정보처리방침 | 스핀페이 SFIN PAY",
    description: "스핀페이는 고객의 결제정보와 개인정보를 최우선으로 보호하기 위해 국제 보안 표준과 국내 관련 법규를 준수합니다. 안전한 결제·정산 서비스를 위한 기술적·관리적 보호조치를 시행하고 있으며, 개인정보는 서비스 제공에 필요한 최소한의 범위 내에서 암호화되어 안전하게 관리됩니다.",
    keywords: [
        "정보보호 정책",
        "개인정보 처리방침",
        "보안 정책",
        "데이터 암호화",
        "ISMS 준수",
        "전자금융거래법",
        "개인정보보호법",
        "스핀페이 보안",
    ],
};

export default function Page() {
    return <SecurityPolicy />;
}