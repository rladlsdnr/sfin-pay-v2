// app/payment-faq/page.tsx
import type { Metadata } from "next";
import PaymentFAQClient from "./clientpage"; // 클라이언트 페이지 불러오기

export const metadata: Metadata = {
    title: "결제 FAQ | SFIN PAY",
    description: "SFIN PAY 결제/정산 관련 자주 묻는 질문 모음",
};

export default function Page() {
    return <PaymentFAQClient />;
}
