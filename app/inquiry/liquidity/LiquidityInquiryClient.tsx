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

            {/* 🌿 Contact Form (통일 버전) */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#a7f3d0]/60 p-8 md:p-10 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0b2723] flex items-center gap-2 mb-2">
                        <PiggyBank className="text-[#10b981]" /> 유동성 / 운영 여유 상담 신청
                    </h2>
                    <p className="text-sm text-[#1e3a34]/70 mb-6">
                        대략적인 희망 규모, 매출 흐름, 필요 시점 등을 편하게 남겨주시면
                        내용을 확인한 뒤, 가능한 방향을 함께 고민해 드립니다.
                    </p>

                    {/* 상태 메시지 */}
                    {success && (
                        <div className="mb-6 p-4 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0]/60 text-[#0b2723] text-sm flex items-center gap-2">
                            <CheckCircle2 className="text-[#10b981]" /> 상담 요청이 접수되었습니다. 담당자가 순차적으로 연락드립니다.
                        </div>
                    )}
                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={submitForm} className="space-y-5">
                        <input
                            type="text"
                            name="honeypot"
                            value={form.honeypot}
                            onChange={handleChange}
                            className="hidden"
                        />

                        {/* 2열 구조 */}
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                    담당자명 *
                                </label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="홍길동"
                                    className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 
                                    outline-none focus:ring-2 focus:ring-[#34d399]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                    가맹점명 / 회사명
                                </label>
                                <input
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="예: SFIN 카페 / OO 업체"
                                    className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 
                                    outline-none focus:ring-2 focus:ring-[#34d399]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                    연락처 *
                                </label>
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="010-0000-0000"
                                    className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 
                                    outline-none focus:ring-2 focus:ring-[#34d399]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                    이메일
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 
                                    outline-none focus:ring-2 focus:ring-[#34d399]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                희망 규모 (선택)
                            </label>
                            <input
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                placeholder="예: 300~800만원 정도를 고려 중입니다."
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 
                                outline-none focus:ring-2 focus:ring-[#34d399]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                상세 문의 내용 *
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="현재 매출 흐름, 필요 시기, 예상 사용처 등 편하게 적어주세요."
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 
                                outline-none resize-none focus:ring-2 focus:ring-[#34d399]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                            bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.18)]
                            disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    전송 중입니다...
                                </>
                            ) : (
                                "상담 신청하기"
                            )}
                        </button>

                        <p className="text-[12px] text-[#1e3a34]/60 mt-2">
                            입력된 정보는 상담 및 내부 검토 목적 외에는 사용되지 않으며,
                            관련 법령과 내부 기준에 따라 안전하게 관리됩니다.
                        </p>
                    </form>
                </div>
            </section>

            {/* 🌿 연락 안내 */}
            <section className="py-14 px-6 md:px-16 bg-[#ecfdf5] border-t border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Mail size={18} />,
                            title: "이메일",
                            desc: (
                                <>
                                    유동성 관련 문의:{" "}
                                    <span className="font-semibold">fund@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <PiggyBank size={18} />,
                            title: "안내 자료",
                            desc: "상담 시 필요에 따라 구조·사례·유의사항 등을 정리한 자료를 함께 안내드립니다.",
                        },
                        {
                            icon: <Building2 size={18} />,
                            title: "상담 창구",
                            desc: "운영상 궁금하신 점은 별도 상담을 통해 보다 상세히 조율하실 수 있습니다.",
                        },
                    ].map((c, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.1)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60"
                        >
                            <div className="flex items-center gap-2 text-[#10b981]">
                                {c.icon}
                                <h3 className="font-semibold text-[#0b2723]">{c.title}</h3>
                            </div>
                            <p className="mt-2 text-[#1e3a34]/80">{c.desc}</p>
                        </motion.div>
                    ))}
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
