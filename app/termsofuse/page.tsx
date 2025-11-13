"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, BookOpen } from "lucide-react";

/**
 * 📘 SFIN PAY — 이용약관 (Mint Theme)
 * - TechSupportProMint의 전체 룩앤필(민트 기반, 글로벌 paddings, SectionTitle 스타일) 유지
 * - 페이지 내 모든 색상은 기존 mint theme (#10b981 / #059669 / #e6fff9 / #f0fdfa 등)으로 통일
 * - SFIN PAY 서비스 구조에 맞춘 실제 PG 서비스 약관 양식
 */

export default function TermsOfService(): JSX.Element {
    const fadeUp = (i = 0, d = 0.45) => ({
        initial: { opacity: 0, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: d, delay: 0.05 * i },
    });

    const SectionTitle = ({
        title,
        kicker,
        sub,
    }: {
        title: string;
        kicker?: string;
        sub?: string;
    }) => (
        <div className="text-center mb-10">
            {kicker && (
                <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
                    {kicker}
                </div>
            )}
            <h2 className="text-[26px] md:text-3xl font-bold text-[#0f766e] mt-1">
                {title}
            </h2>
            {sub && (
                <p className="text-[15px] text-gray-700 mt-2 max-w-2xl mx-auto">
                    {sub}
                </p>
            )}
        </div>
    );

    const Article = ({
        title,
        children,
    }: {
        title: string;
        children: React.ReactNode;
    }) => (
        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6 md:p-7 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-[#10b981]" />
                <div className="font-semibold text-[#042f2e] text-[17px]">{title}</div>
            </div>
            <div className="text-[15px] text-gray-700 leading-[1.65]">{children}</div>
        </div>
    );

    return (
        <section className="min-h-screen bg-gradient-to-b from-white via-[#f0fdfa] to-[#ecfdf3] px-6 md:px-14 py-20">
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecfdf5] text-[#0f766e] text-xs font-semibold mb-3 border border-[#bbf7f0]">
                    <ShieldCheck className="w-4 h-4" />
                    SFIN PAY 법적 고지
                </div>
                <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#047857] tracking-tight">
                    이용약관
                </h1>
                <p className="text-gray-700 mt-3 text-[15px] max-w-2xl mx-auto">
                    SFIN PAY의 서비스 이용에 필요한 기본적인 권리, 의무와 책임사항을 안내합니다.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                {/* 주요 조항 */}
                <SectionTitle kicker="Terms" title="제1장 총칙" />

                <motion.div {...fadeUp(0)}>
                    <Article title="제1조 목적">
                        본 약관은 주식회사 SFIN(이하 “회사”)가 제공하는 결제·정산·납부 서비스
                        (이하 “서비스”)의 이용과 관련하여 회사와 가맹점(또는 이용자) 간의 권리,
                        의무, 책임, 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
                    </Article>
                </motion.div>

                <motion.div {...fadeUp(1)}>
                    <Article title="제2조 정의">
                        <ul className="list-disc list-inside space-y-1">
                            <li>“서비스”란 회사가 제공하는 결제, 정산(D+0, D+1), 납부 링크, 고지서 발송, 미수 관리 기능 등을 의미합니다.</li>
                            <li>“가맹점”이란 회사와 계약을 체결하여 본 서비스를 이용하는 사업자를 말합니다.</li>
                            <li>“이용자”란 가맹점과의 거래 과정에서 본 서비스를 통해 결제를 수행하는 고객을 말합니다.</li>
                            <li>“정산일(D+0 / D+1)”이란 회사가 정한 기준에 따라 결제 대금을 가맹점에 지급하는 날을 의미합니다.</li>
                        </ul>
                    </Article>
                </motion.div>

                <motion.div {...fadeUp(2)}>
                    <Article title="제3조 약관의 효력 및 변경">
                        <p>
                            ① 본 약관은 서비스 화면 공지 또는 기타 방법으로 공시함으로써 효력이 발생합니다.
                            <br />② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며,
                            공지 후 7일이 지나면 효력이 발생합니다.
                        </p>
                    </Article>
                </motion.div>

                {/* 서비스 이용 */}
                <SectionTitle kicker="Usage" title="제2장 서비스 이용" />

                <motion.div {...fadeUp(3)}>
                    <Article title="제4조 서비스의 제공">
                        회사는 다음 각 호의 기능을 제공합니다:
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>카드/간편결제/링크결제 기능</li>
                            <li>납부 고지·리마인드·연체 안내 기능</li>
                            <li>D+0·D+1 정산 스케줄 제공</li>
                            <li>오류 감지 및 실시간 상태 공지</li>
                            <li>웹훅/연동/정산 리포트 기능</li>
                        </ul>
                    </Article>
                </motion.div>

                <motion.div {...fadeUp(4)}>
                    <Article title="제5조 서비스의 변경 및 중단">
                        <p>
                            회사는 안정적인 서비스 제공을 위해 필요한 경우 서비스 일부 또는 전체를
                            변경하거나 중단할 수 있으며, 이 경우 사전 공지를 기본으로 합니다. 단,
                            긴급한 경우 사후 공지로 대체할 수 있습니다.
                        </p>
                    </Article>
                </motion.div>

                {/* 가맹점 의무 */}
                <SectionTitle kicker="Merchant" title="제3장 가맹점의 의무" />

                <motion.div {...fadeUp(5)}>
                    <Article title="제6조 가맹점의 책임">
                        가맹점은 다음 의무를 가집니다:
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>정상적인 사업자 정보 제공</li>
                            <li>고객 결제 관련 분쟁 처리</li>
                            <li>불법/부정 결제 방지를 위한 협조 의무</li>
                            <li>휴면·변경 사항 즉시 통보</li>
                        </ul>
                    </Article>
                </motion.div>

                <motion.div {...fadeUp(6)}>
                    <Article title="제7조 금지 사항">
                        <ul className="list-disc list-inside space-y-1">
                            <li>타인의 정보를 도용하여 결제 처리</li>
                            <li>불법 영업/탈세 목적의 결제 진행</li>
                            <li>사전 승인 없이 결제 수단을 임의로 변조</li>
                            <li>회사가 제공한 API/SDK를 악용하는 행위</li>
                        </ul>
                    </Article>
                </motion.div>

                {/* 정산 */}
                <SectionTitle kicker="Settlement" title="제4장 정산(D+0 / D+1)" />

                <motion.div {...fadeUp(7)}>
                    <Article title="제8조 정산 기준">
                        <ul className="list-disc list-inside space-y-1">
                            <li>D+0: 당일정산(은행·업종별 제한 가능)</li>
                            <li>D+1: 익일정산(기본 정산 옵션)</li>
                            <li>정산 일정은 회사 정책과 은행 사정에 따라 조정될 수 있습니다.</li>
                        </ul>
                    </Article>
                </motion.div>

                <motion.div {...fadeUp(8)}>
                    <Article title="제9조 정산 보류">
                        회사는 다음 사유에 해당하면 정산을 보류할 수 있습니다:
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>이상 거래 탐지(오입금, 반복 결제 등)</li>
                            <li>법령 위반 또는 수사기관 요청이 있는 경우</li>
                            <li>가맹점의 연체, 환불 분쟁, 계좌 오류 등</li>
                        </ul>
                    </Article>
                </motion.div>

                {/* 책임 */}
                <SectionTitle kicker="Liability" title="제5장 책임 및 면책" />

                <motion.div {...fadeUp(9)}>
                    <Article title="제10조 회사의 책임">
                        회사는 서비스의 안정적 제공을 위해 최선을 다하며, 다음 사항에 대해서 책임을 집니다:
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>정상적인 서비스 운영 및 데이터 보호</li>
                            <li>가맹점 및 이용자의 정보 유출 방지</li>
                            <li>이용자 결제 데이터의 무결성 보장</li>
                        </ul>
                    </Article>
                </motion.div>

                <motion.div {...fadeUp(10)}>
                    <Article title="제11조 면책 조항">
                        회사는 다음 사항에 대해 책임을 지지 않습니다:
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>가맹점의 부정확한 정보 제공으로 발생한 문제</li>
                            <li>이용자의 기기 오류 또는 네트워크 장애</li>
                            <li>불가항력(천재지변, 정전 등)</li>
                        </ul>
                    </Article>
                </motion.div>

                {/* 부칙 */}
                <SectionTitle kicker="Addendum" title="부칙" />

                <motion.div {...fadeUp(11)}>
                    <Article title="제12조 약관의 적용일">
                        본 약관은 2025년 1월 1일부터 시행합니다.
                    </Article>
                </motion.div>

                <div className="text-right text-sm text-gray-500 mt-6">
                    마지막 업데이트: 2025-01-01
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] text-white rounded-xl font-semibold hover:bg-[#059669] transition"
                >
                    <BookOpen className="w-4 h-4" />
                    메인으로 돌아가기
                </Link>
            </div>
        </section>
    );
}
