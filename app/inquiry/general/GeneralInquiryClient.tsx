"use client";

import React, {
    useEffect,
    useState,
    ChangeEvent,
    FormEvent,
} from "react";
import { motion } from "framer-motion";
import {
    Mail,
    MessageSquare,
    Handshake,
    ShieldCheck,
    Globe2,
    ChevronRight,
    CheckCircle2,
    Building2,
    Lock,
    Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/* ────────────────────────────────────────────────
   📌 공통 애니메이션
────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

/* ────────────────────────────────────────────────
   📌 이 페이지 전용 문의 폼 컴포넌트
   - EmailJS + reCAPTCHA + /api/contact 연동
   - 외부 컴포넌트 의존 없음
────────────────────────────────────────────────── */

interface GeneralFormState {
    company: string;
    name: string;
    phone: string;
    email: string;
    type: string;
    message: string;
}

function GeneralFormInline(): JSX.Element {
    const [form, setForm] = useState<GeneralFormState>({
        company: "",
        name: "",
        phone: "",
        email: "",
        type: "기타 일반 문의",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    async function getRecaptchaToken(): Promise<string> {
        if (typeof window === "undefined") return "";
        const w = window as any;
        if (!w.grecaptcha || !RECAPTCHA_KEY) return "";
        return await w.grecaptcha.execute(RECAPTCHA_KEY, {
            action: "general_inquiry",
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (sending) return;
        setSending(true);

        try {
            const token = await getRecaptchaToken();

            // 1) EmailJS 발송
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                {
                    ...form,
                    token,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );

            // 2) Notion CRM 저장
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            setSent(true);
        } catch (err) {
            console.error(err);
            alert("문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative">
            {/* reCAPTCHA v3 Script */}
            {RECAPTCHA_KEY && (
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
                    async
                    defer
                ></script>
            )}

            {/* 문의 완료 UI */}
            {sent ? (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0]/60 p-10 text-center"
                >
                    <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-[#0b2723]">문의 접수 완료</h3>
                    <p className="mt-2 text-[#1e3a34]/80 leading-relaxed">
                        담당 부서에서 문의 내용을 확인 후,<br />
                        남겨주신 연락처로 빠르게 회신드리겠습니다.
                    </p>
                </motion.div>
            ) : (
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-white border border-[#a7f3d0]/60 p-8 md:p-10 shadow-sm"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0b2723] mb-2">
                        일반 문의 / 제휴 · 광고 · 기타
                    </h2>
                    <p className="text-sm text-[#1e3a34]/70 mb-6">
                        제휴·광고·PR·서비스 문의를 남겨주시면 빠르게 검토 후 연락드립니다.
                    </p>

                    {/* 2열 입력 */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                회사명 / 조직명
                            </label>
                            <input
                                name="company"
                                required
                                value={form.company}
                                onChange={handleChange}
                                placeholder="예: SFIN Studio, OO미디어"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 text-[#0b2723] focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                담당자 이름
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="홍길동"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 text-[#0b2723] focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                연락처
                            </label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="010-0000-0000"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 text-[#0b2723] focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                이메일
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="you@company.co.kr"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 text-[#0b2723] focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>
                    </div>

                    {/* 문의 유형 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1">
                            문의 유형
                        </label>
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 text-[#0b2723] focus:ring-2 focus:ring-[#34d399] outline-none"
                        >
                            <option>제휴 / 파트너십 문의</option>
                            <option>광고 / 마케팅 / 캠페인 제안</option>
                            <option>미디어 / 보도자료 / PR 제안</option>
                            <option>서비스 일반 문의</option>
                            <option>기타 일반 문의</option>
                        </select>
                    </div>

                    {/* 상세 내용 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1">
                            문의 내용
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder={
                                "제휴 목적, 브랜드/서비스 소개, 원하는 협업 범위, 일정 등을 자유롭게 입력해 주세요."
                            }
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 text-[#0b2723] resize-none focus:ring-2 focus:ring-[#34d399] outline-none"
                        />
                    </div>

                    {/* 제출 버튼 */}
                    <button
                        type="submit"
                        disabled={sending}
                        className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition disabled:opacity-60"
                    >
                        {sending ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                전송 중입니다...
                            </>
                        ) : (
                            "문의 보내기"
                        )}
                    </button>

                    <p className="mt-3 text-[12px] text-[#1e3a34]/60">
                        상담 목적 외 다른 용도로는 사용되지 않습니다.
                    </p>
                </motion.form>
            )}
        </section>
    );
}

/* ────────────────────────────────────────────────
   📌 메인 페이지
────────────────────────────────────────────────── */
export default function GeneralInquiryClient(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">

            {/* ========================== HERO ========================== */}
            <section className="pt-28 pb-16 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] border-b border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        {...fadeUp(0)}
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-[clamp(30px,5vw,36px)]"
                    >
                        일반 문의{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            / 제휴 · 광고 · 기타
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        제휴, 미디어, 마케팅, 서비스 운영 등 전반의 문의를 남겨주시면
                        <br className="hidden md:block" />
                        담당 부서에서 빠르게 확인 후 회신드립니다.
                    </motion.p>
                </div>
            </section>

            {/* ========================== 카드 안내 ========================== */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Handshake size={24} />,
                            title: "제휴 문의",
                            desc: "공동 프로모션, 가맹 연계, 파트너십 제안 등을 검토합니다.",
                        },
                        {
                            icon: <MessageSquare size={24} />,
                            title: "광고 / 미디어 제안",
                            desc: "브랜드 캠페인, 결제 홍보, 미디어 제안서를 전달해 주세요.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "일반 서비스 문의",
                            desc: "운영, 고객지원 등 기타 사항 문의는 이곳에서 접수합니다.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition"
                        >
                            <div className="flex items-center gap-3 text-[#10b981]">
                                {item.icon}
                                <h3 className="text-lg font-semibold text-[#0b2723]">{item.title}</h3>
                            </div>
                            <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ========================== FAQ ========================== */}
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
                                q: "제휴 제안은 어디로 연락하나요?",
                                a: "partnership@sfinpay.co.kr 또는 아래 문의 폼을 통해 제안서를 전달하면 됩니다.",
                            },
                            {
                                q: "언론 / 미디어 요청은 어떻게 접수하나요?",
                                a: "press@sfinpay.co.kr 로 보도자료 또는 인터뷰 요청을 보내주세요.",
                            },
                            {
                                q: "기타 일반 운영 문의는 어디서 처리하나요?",
                                a: "contact@sfinpay.co.kr 로 문의하거나 아래 양식을 작성해 주세요.",
                            },
                            {
                                q: "회신까지 얼마나 걸리나요?",
                                a: "평일 기준 24시간 이내에 1차 회신을 드립니다.",
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

            {/* ========================== 이 페이지 전용 폼 ========================== */}
            <section className="py-12 px-6 md:px-16">
                <div className="max-w-4xl mx-auto">
                    <GeneralFormInline />
                </div>
            </section>

            {/* ========================== 연락 안내 ========================== */}
            <section className="py-14 px-6 md:px-16 bg-[#ecfdf5] border-t border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Mail size={18} />,
                            title: "일반 문의",
                            desc: (
                                <>
                                    contact:{" "}
                                    <span className="font-semibold">contact@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <Globe2 size={18} />,
                            title: "제휴 / 파트너십",
                            desc: (
                                <>
                                    partnership:{" "}
                                    <span className="font-semibold">partnership@sfinpay.co.kr</span>
                                </>
                            ),
                        },
                        {
                            icon: <Building2 size={18} />,
                            title: "본사 위치",
                            desc: "서울 — 방문 상담은 사전 예약제로 운영됩니다.",
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

            {/* ========================== 개인정보 안내 ========================== */}
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa]">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        제공된 모든 정보는 문의 처리 목적에만 사용되며, 관련 법령에 따라 안전하게 관리됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
