"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Building2,
    FileText,
    Wallet,
    RefreshCw,
    Boxes,
    ArrowRight,
    Briefcase,
    BarChart3,
    ClipboardList,
    Mail,
    MessageCircle,
} from "lucide-react";

export default function B2B(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-paper text-navy-900 pt-32">
            {/* 헤더 */}
            <section className="text-center py-20 px-6 md:px-16 bg-gradient-to-b from-paper to-paper">
                <motion.h1
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[clamp(30px,5vw,36px)]"
                >
                    B2B 비즈니스,{" "}
                    <br className="block md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy">
                        정확하고 신속하게
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-lg md:text-xl text-navy-800/80 max-w-3xl mx-auto leading-relaxed"
                >
                    기업 간 거래의 세금계산서, 정기결제, 대량 송금까지. <br />
                    반복적인 거래를 자동화하여 회계팀의 부담을 줄이세요.
                </motion.p>
            </section>

            {/* ✨ B2B 결제 흐름 시각화 */}
            <section className="py-24 px-6 md:px-16 bg-paper relative overflow-hidden">
                <motion.h2
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 text-[clamp(30px,5vw,36px)]"
                >
                    기업 간 정산 프로세스
                </motion.h2>

                <div
                    className="flex flex-col md:flex-row justify-center items-center gap-12 text-center"
                >
                    {/* 계약 체결 */}
                    <motion.div
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col items-center gap-2 w-32">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-mist/70 flex items-center justify-center text-navy text-3xl shadow-md">
                            <Briefcase />
                        </div>
                        <p className="font-semibold mt-2">계약 체결</p>
                        <p className="text-sm text-navy-800/70">정기 거래 조건 등록</p>
                    </motion.div>

                    <ArrowRight className="text-navy w-10 h-10 hidden md:block" />

                    {/* 세금계산서 발행 */}
                    <motion.div
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col items-center gap-2 w-32">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-navy to-navy shadow-[0_0_25px_rgba(0,51,102,0.25)] flex items-center justify-center text-white text-3xl">
                            <FileText />
                        </div>
                        <p className="font-semibold mt-2">세금계산서 발행</p>
                        <p className="text-sm text-navy-800/70">자동 생성 및 발송</p>
                    </motion.div>

                    <ArrowRight className="text-navy w-10 h-10 hidden md:block" />

                    {/* 정기결제 */}
                    <motion.div
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-col items-center gap-2 w-32">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-mist/70 flex items-center justify-center text-navy text-3xl shadow-md">
                            <RefreshCw />
                        </div>
                        <p className="font-semibold mt-2">정기결제</p>
                        <p className="text-sm text-navy-800/70">자동 청구 · 출금</p>
                    </motion.div>

                    <ArrowRight className="text-navy w-10 h-10 hidden md:block" />

                    {/* 정산 완료 */}
                    <motion.div
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col items-center gap-2 w-32">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-mist/70 flex items-center justify-center text-navy text-3xl shadow-md">
                            <Wallet />
                        </div>
                        <p className="font-semibold mt-2">정산 완료</p>
                        <p className="text-sm text-navy-800/70">D+0 · D+1 대량 정산</p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="text-center mt-10 text-navy-800/70 max-w-3xl mx-auto leading-relaxed"
                >
                    계약부터 세금계산, 결제, 입금까지 모두 자동으로 연결됩니다. <br />
                    복잡한 송장·회계 프로세스를 SFIN PAY가 처리합니다.
                </motion.p>
            </section>

            {/* 주요 기능 */}
            <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto space-y-20">
                <motion.div
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold mb-4 text-navy-900 text-[clamp(30px,5vw,36px)]">
                        B2B를 위한 스마트 기능
                    </h2>
                    <p className="text-navy-800/80">
                        계약 관리부터 정산, 회계 연동까지 한 번에 처리됩니다.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <ClipboardList size={28} />,
                            title: "자동 세금계산서 발행",
                            desc: "매 거래 건마다 자동으로 세금계산서가 생성되고 발송됩니다.",
                        },
                        {
                            icon: <RefreshCw size={28} />,
                            title: "정기결제 시스템",
                            desc: "매월, 매분기 등 주기적으로 자동 결제가 실행됩니다.",
                        },
                        {
                            icon: <BarChart3 size={28} />,
                            title: "대량 정산 리포트",
                            desc: "여러 거래처의 정산 내역을 한 화면에서 확인할 수 있습니다.",
                        },
                        {
                            icon: <Boxes size={28} />,
                            title: "상품·계약별 매출 분석",
                            desc: "각 계약별 실적을 데이터 시각화로 한눈에 확인하세요.",
                        },
                        {
                            icon: <Building2 size={28} />,
                            title: "ERP / 회계 연동 지원",
                            desc: "기업용 회계 시스템과 자동 연동되어 업무 효율을 극대화합니다.",
                        },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                            transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                            className="p-8 bg-white border border-mist/60 rounded-2xl hover:shadow-[0_0_25px_rgba(0,51,102,0.15)]"
                        >
                            <div className="flex items-center gap-3 text-navy mb-4">
                                {f.icon}
                                <h3 className="text-xl font-semibold text-navy-900">
                                    {f.title}
                                </h3>
                            </div>
                            <p className="text-navy-800/80 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-mist to-mist text-center">
                <motion.h2
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-navy-900 mb-4 text-[clamp(30px,5vw,36px)]"
                >
                    기업 거래 자동화도{" "}
                    <br className="block md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-navy">
                        SFIN PAY 하나로
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 1, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-navy-800/90 text-lg mb-10 leading-relaxed"
                >
                    계약 · 결제 · 세금계산서까지 전 과정을 자동화하세요. <br />
                    반복적인 업무를 줄이고, 정확한 정산을 경험해보세요.
                </motion.p>

                {/*
                <Link href="/inquiry/contract">
                    <motion.button
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-navy hover:bg-navy-700 text-white font-semibold text-lg shadow-md"
                    >
                        도입 상담 받기 →
                    </motion.button>
                </Link>
                */}

                {/* 하단 CTA */}
                <div
                    className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                >
                    {/* Gmail */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sfinpay@gmail.com&su=SFIN%20PAY%20문의&body=회사명:%0A문의유형:%0A문의내용:"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
        bg-gradient-to-r from-navy to-navy 
        hover:from-navy hover:to-navy
        text-white font-semibold shadow-[0_6px_20px_rgba(0,51,102,0.25)]"
                    >
                        <Mail size={18} /> Gmail로 문의하기
                    </a>

                    {/* Outlook 
                    <a
                        href="https://outlook.office.com/mail/deeplink/compose?to=sfinpay@gmail.com&subject=SFIN%20PAY%20문의&body=회사명:%0A문의유형:%0A문의내용:"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
        bg-gradient-to-r from-navy to-navy 
        hover:from-navy hover:to-navy
        text-white font-semibold shadow-[0_6px_20px_rgba(0,51,102,0.25)]"
                    >
                        <Mail size={18} /> Outlook으로 문의하기
                    </a>
                    */}

                    {/* 카카오톡 */}
                    <a
                        href="http://pf.kakao.com/_dqyYn/friend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
        border border-emerald-300 bg-white/80 
        hover:bg-paper text-emerald-700 font-semibold 
        shadow-[0_6px_15px_rgba(0,51,102,0.15)]"
                    >
                        <MessageCircle size={18} /> 카카오톡 상담
                    </a>
                </div>
            </section>
        </div>
    );
}
