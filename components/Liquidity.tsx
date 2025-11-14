"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    HandCoins,
    Info,
    ShieldCheck,
    Database,
    ArrowRight,
    CreditCard,
    Wallet,
    PiggyBank,
} from "lucide-react";

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.07 * i, ease: "easeOut" },
});

export default function Liquidity(): JSX.Element {
    return (
        <section
            id="liquidity"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b
            from-[#E9FFF6] via-[#F4FFFC] to-white"
        >
            {/* ─────────────────────────────────────── 1) 헤더 안내 카드 ─────────────────────────────────────── */}
            <motion.div
                {...fadeUp(0)}
                className="max-w-5xl mx-auto mb-20 rounded-2xl border border-[rgba(0,200,155,0.22)]
                bg-white shadow-[0_8px_28px_rgba(0,200,155,0.09)]"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 py-7">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-[rgba(0,200,155,0.12)] text-[#00b894]">
                            <ShieldCheck size={22} />
                        </div>
                        <div>
                            <p className="text-[#0f172a] font-semibold text-[17px]">
                                유연한 운영을 위한 매출 흐름 기반 보조 기능
                            </p>
                            <p className="text-sm text-[#334155]/70 leading-relaxed">
                                가맹점의 정산 일정과 흐름을 참고하여, 필요한 시점에 부드럽게 도움을 드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ─────────────────────────────────────── 2) 메인 타이틀 ─────────────────────────────────────── */}
            <motion.div
                {...fadeUp(1)}
                className="max-w-3xl mx-auto text-center mb-24"
            >
                <span
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                    bg-[rgba(0,200,155,0.10)] text-[#00b894] text-sm font-medium"
                >
                    <HandCoins size={16} />
                    매출·정산 흐름 기반 지원
                </span>

                <h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight">
                    <span className="text-[#00b894]">
                        매출이 흔들리는 시기에도
                    </span>
                    <br />
                    <span className="text-[#00c89b]">
                        운영에 숨통을 틔우는 유연한 도움
                    </span>
                </h2>

                <p className="mt-7 text-[#334155]/80 text-lg md:text-[18px] leading-relaxed">
                    SFIN PAY에서 관리되는 매출 흐름과 정산 일정을 참고해,
                    운영상 필요에 따라 가볍게 도움을 드릴 수 있는 기능입니다.
                    <br />
                    큰 절차 없이, 실제 사용 흐름 안에서 자연스럽게 산정됩니다.
                </p>
            </motion.div>

            {/* ─────────────────────────────────────── 3) 흐름 다이어그램 ─────────────────────────────────────── */}
            <motion.div
                {...fadeUp(2)}
                className="max-w-4xl mx-auto mb-28 flex flex-col items-center"
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-[#0f172a]">

                    {/* Step 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl
                        shadow-[0_6px_20px_rgba(0,200,155,0.10)]
                        border border-[rgba(0,200,155,0.25)] w-[210px]"
                    >
                        <CreditCard className="text-[#00b894]" size={28} />
                        <p className="font-semibold text-[16px]">매출 발생</p>
                        <p className="text-sm text-[#334155]/70 text-center leading-relaxed">
                            가맹점의 실제 매출 활동을 참고
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#00c89b] hidden md:flex" size={32} />

                    {/* Step 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-white p-6 rounded-xl
                        shadow-[0_6px_20px_rgba(0,200,155,0.10)]
                        border border-[rgba(0,200,155,0.25)] w-[210px]"
                    >
                        <Database className="text-[#00b894]" size={28} />
                        <p className="font-semibold text-[16px]">정산 흐름 확인</p>
                        <p className="text-sm text-[#334155]/70 text-center leading-relaxed">
                            가맹점의 사용 패턴과 일정 참고
                        </p>
                    </motion.div>

                    <ArrowRight className="text-[#00c89b] hidden md:flex" size={32} />

                    {/* Step 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 bg-gradient-to-br
                        from-[#00c89b]/10 to-[#00b894]/10 p-6 rounded-xl
                        shadow-[0_8px_28px_rgba(0,200,155,0.15)]
                        border border-[rgba(0,200,155,0.32)] w-[210px]"
                    >
                        <PiggyBank className="text-[#00b894]" size={30} />
                        <p className="font-semibold text-[16px]">운영 보조 제공</p>
                        <p className="text-sm text-[#334155]/70 text-center leading-relaxed">
                            필요한 시점에 부드러운 지원
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* ─────────────────────────────────────── 4) 상세 설명 카드 ─────────────────────────────────────── */}
            <motion.div
                {...fadeUp(3)}
                className="max-w-5xl mx-auto rounded-2xl border border-[rgba(0,200,155,0.23)]
                bg-white p-8 md:p-10 hover:shadow-[0_12px_36px_rgba(0,200,155,0.13)]
                duration-300"
            >
                <div className="flex flex-col gap-6">

                    <div className="flex items-center gap-3 text-[#00b894]">
                        <Wallet size={28} />
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                            정산 흐름 기반의 부드러운 운영 지원
                        </h3>
                    </div>

                    <p className="text-[#334155]/80 leading-relaxed text-[15px] md:text-[16px]">
                        가맹점의 매출과 정산 일정 흐름을 바탕으로,
                        운영 중 잠시 필요할 수 있는 부분을 가볍게 돕는 기능입니다.
                        <br />
                        특정한 절차 없이 자연스럽게 적용되며, 상황에 따라 유동적으로 조정됩니다.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-3">
                        <div>
                            <p className="text-sm font-semibold text-[#0f172a] mb-2">
                                🔹 이런 상황에서 도움이 됩니다
                            </p>
                            <ul className="space-y-1.5 text-[#334155]/75 text-sm leading-relaxed">
                                <li>• 정산일 이전에 잠깐 운영이 필요한 경우</li>
                                <li>• 장부 정리나 재고·행사 준비가 겹칠 때</li>
                                <li>• 매출이 일시적으로 흔들리는 구간</li>
                                <li>• 시즌성 매장의 특정 시기</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-[#0f172a] mb-2">
                                🔹 진행 방식은 간단합니다
                            </p>
                            <ul className="space-y-1.5 text-[#334155]/75 text-sm leading-relaxed">
                                <li>• 매출·정산 흐름을 참고해 자연스럽게 산정</li>
                                <li>• 정산 일정에 맞춰 부드럽게 조정</li>
                                <li>• 상황에 따라 조정 폭은 달라질 수 있음</li>
                                <li>• 별다른 제약 없이 가볍게 이용 가능</li>
                            </ul>
                        </div>
                    </div>

                    {/* 단일 CTA */}
                    <div className="mt-8">
                        <Link
                            href="/inquiry/liquidity"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                            bg-gradient-to-r from-[#00c89b] to-[#00b894]
                            hover:from-[#00b894] hover:to-[#00a884]
                            text-white font-semibold shadow-[0_8px_24px_rgba(0,200,155,0.18)]"
                        >
                            상담 신청
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* ─────────────────────────────────────── 5) 안내 ─────────────────────────────────────── */}
            <motion.div
                {...fadeUp(4)}
                className="mt-20 max-w-5xl mx-auto rounded-2xl border border-[rgba(0,200,155,0.25)]
                bg-[#F2FFFB] p-8 md:p-10"
            >
                <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[rgba(0,200,155,0.10)] text-[#00b894]">
                        <Info size={20} />
                    </div>

                    <div>
                        <h4 className="text-[#0f172a] font-semibold mb-3 text-[17px]">
                            안내사항
                        </h4>

                        <ul className="space-y-1.5 text-[#334155]/80 text-sm leading-relaxed">
                            <li>• 실제 매출·정산 흐름에 따라 자연스럽게 적용되는 기능입니다.</li>
                            <li>• 이용 조건과 방식은 상황에 따라 안내됩니다.</li>
                            <li>• 데이터는 안전하게 비식별·암호화 처리됩니다.</li>
                            <li>• 운영 편의를 위한 내부 기능이며, 절차는 매우 간단합니다.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
