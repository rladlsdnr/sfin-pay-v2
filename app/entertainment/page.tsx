import type { Metadata } from "next";
import Contents from "./entertainment";

export const metadata: Metadata = {
    title: "콘텐츠·엔터테인먼트 결제 솔루션 | 스핀페이 SFIN PAY",
    description: "공연, OTT, 게임, 웹툰, 티켓 등 콘텐츠 산업 맞춤 결제 솔루션입니다. 정기구독 결제부터 해외 결제 지원까지 모두 가능하며, 글로벌 콘텐츠 비즈니스를 위한 결제, 정산, 저작권 정산 인프라를 원스톱으로 지원하는 통합 솔루션입니다.",
    keywords: [
        "콘텐츠 결제",
        "엔터테인먼트 결제",
        "정기구독",
        "해외 결제",
        "환율 자동처리",
        "OTT 결제",
        "게임 결제",
        "저작권 정산",
    ],
};

export default function Page() {
    return <Contents />;
}