"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    Banknote,
    LineChart,
    BarChart3,
    ShieldCheck,
    Coins,
    PiggyBank,
    Mail,
    Building2,
    Lock,
    CheckCircle2,
    ChevronRight,
    Loader2,
    MessageCircle,
} from "lucide-react";

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

export default function LiquidityInquiryClient(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    /* ------------------------ 내부 ContactForm ------------------------ */
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        amount: "",
        message: "",
        honeypot: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitForm = async (e: any) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        if (form.honeypot !== "") return; // spam bot 차단

        if (!form.name || !form.phone || !form.message) {
            setError("필수 항목을 모두 입력해주세요.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/inquiry/liquidity", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("전송 실패");

            setSuccess(true);
            setForm({
                name: "",
                company: "",
                phone: "",
                email: "",
                amount: "",
                message: "",
                honeypot: "",
            });
        } catch (err) {
            setError("전송 중 문제가 발생했습니다. 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    };

    /* -------------------------- UI 본문 시작 -------------------------- */

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">
            {/* 🌿 Hero */}
            <section className="pt-28 pb-16 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] border-b border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        {...fadeUp(0)}
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-[clamp(30px,5vw,36px)]"
                    >
                        유동성 지원 /{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            운영 여유 문의
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        매출과 정산 흐름을 참고해
                        <br className="hidden md:block" />
                        운영에 숨통을 틔워 줄 수 있는 내부 유동성 지원 기능입니다.
                        상황과 시점에 따라, 부담을 줄일 수 있는 방향을 함께 모색합니다.
                    </motion.p>
                </div>
            </section>

            {/* 🌿 주요 특징 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Banknote size={24} />,
                            title: "매출 흐름 참고",
                            desc: "최근 매출과 사용 패턴을 폭넓게 참고해 대략적인 기준을 잡습니다.",
                        },
                        {
                            icon: <Wallet size={24} />,
                            title: "정산 일정 연계",
                            desc: "앞으로 예정된 정산 흐름을 함께 고려하여 운영에 여유를 만드는 방향으로 설계합니다.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "부담을 줄이는 구조",
                            desc: "실제 사용 흐름과 연동해 과도한 압박 없이 유연하게 조정될 수 있도록 구성됩니다.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition"
                        >
                            <div className="flex items-center gap-3 text-[#10b981]">
                                {item.icon}
                                <h3 className="text-lg font-semibold text-[#0b2723]">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🌿 조건 안내 */}
            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeUp(0)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <Coins className="text-[#10b981]" /> 이용을 위한 기본 참고 사항
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 일정 기간 이상 매출 흐름이 확인되는 가맹점</li>
                            <li>• 카드·계좌·간편결제 등 다양한 결제 수단을 사용하는 매장</li>
                            <li>• D+0 / D+1 정산 흐름을 활용 중인 경우 더 자연스럽게 연계 가능</li>
                            <li>• 데이터 활용 및 내부 검토에 대한 동의가 필요할 수 있습니다.</li>
                        </ul>
                        <p className="mt-4 text-xs text-[#1e3a34]/60">
                            위 내용은 일반적인 예시에 가깝고, 실제 적용 방식은 상황에 따라 조금씩 달라질 수 있습니다.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.1)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <BarChart3 className="text-[#10b981]" /> 정산 연동 방식
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 정산 주기와 매출 흐름을 함께 고려해 조정 방향을 설정합니다.</li>
                            <li>• 일매출 및 월 단위 흐름을 참고하여 부담이 과도하지 않도록 설계합니다.</li>
                            <li>• 필요 시, 일정 구간에서 탄력적으로 조정 폭을 완화하거나 줄일 수 있습니다.</li>
                        </ul>
                        <p className="mt-4 text-xs text-[#1e3a34]/60">
                            구체적인 수치·비율 등은 가맹점 상황에 따라 별도로 안내되며,
                            이용 여부는 충분한 안내 이후에 결정하실 수 있습니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 🌿 FAQ */}
            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        {...fadeUp(0)}
                        className="text-2xl md:text-3xl font-bold text-[#0b2723] mb-6"
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "어떤 기준으로 규모가 결정되나요?",
                                a: "최근 매출 흐름, 정산 패턴, 사용 목적 등을 종합적으로 참고하여 내부 기준에 따라 대략적인 방향을 잡게 됩니다.",
                            },
                            {
                                q: "정산 예정 흐름만으로도 이용이 가능한가요?",
                                a: "정산 예정 흐름이 일정하게 보이는 경우, 해당 데이터를 함께 참고해 운영 여유를 만드는 방향으로 검토가 가능합니다.",
                            },
                            {
                                q: "절차는 오래 걸리나요?",
                                a: "복잡한 단계 없이, 기본 정보와 내부 데이터 확인 위주로 진행되며 보통 빠르게 검토가 이뤄지는 편입니다.",
                            },
                            {
                                q: "조건은 고정인가요, 변동인가요?",
                                a: "가맹점의 상황·시점·매출 흐름 등에 따라 서로 상의해 조정될 수 있으며, 구체적인 내용은 개별 안내를 통해 투명하게 설명드립니다.",
                            },
                        ].map((faq, i) => (
                            <motion.details
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group rounded-2xl bg-white border border-[#a7f3d0]/60 p-5 open:shadow-[0_10px_30px_rgba(16,185,129,0.10)] transition"
                            >
                                <summary className="flex items-center justify-between cursor-pointer select-none text-[#0b2723] font-semibold">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="text-[#10b981]" size={18} />
                                        {faq.q}
                                    </span>
                                    <span className="text-[#10b981] group-open:rotate-90 transition">
                                        <ChevronRight size={18} />
                                    </span>
                                </summary>
                                <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2

                        className="text-2xl md:text-3xl font-bold text-[#0b2723] mb-6"
                    >
                        문의하실 내용이 있으신가요?
                    </h2>
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
                                bg-gradient-to-r from-[#00c89b] to-[#00b894] 
                                hover:from-[#00b894] hover:to-[#00a884]
                                text-white font-semibold shadow-[0_6px_20px_rgba(16,185,129,0.25)]"
                        >
                            <Mail size={18} /> Gmail로 문의하기
                        </a>

                        {/* Outlook */}
                        <a
                            href="https://outlook.office.com/mail/deeplink/compose?to=sfinpay@gmail.com&subject=SFIN%20PAY%20문의&body=회사명:%0A문의유형:%0A문의내용:"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                                bg-gradient-to-r from-[#00c89b] to-[#00b894] 
                                hover:from-[#00b894] hover:to-[#00a884]
                                text-white font-semibold shadow-[0_6px_20px_rgba(16,185,129,0.25)]"
                        >
                            <Mail size={18} /> Outlook으로 문의하기
                        </a>

                        {/* 카카오톡 */}
                        <a
                            href="http://pf.kakao.com/_eftHn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                                border border-emerald-300 bg-white/80 
                                hover:bg-[#f0fdfa] text-emerald-700 font-semibold 
                                shadow-[0_6px_15px_rgba(16,185,129,0.15)]"
                        >
                            <MessageCircle size={18} /> 카카오톡 상담
                        </a>
                    </div>

                </div>
            </section>

            {/* 🌿 개인정보 안내 */}
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa]">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        상담을 위해 제공해 주신 정보는 최소한의 범위 내에서만 사용되며,
                        관련 법령과 내부 기준에 따라 안전하게 관리됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
