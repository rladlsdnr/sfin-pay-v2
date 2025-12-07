"use client";

import React, {
    useEffect,
    useState,
    ChangeEvent,
    FormEvent,
} from "react";
import { motion } from "framer-motion";
import {
    Cpu,
    Network,
    ShieldCheck,
    BookOpenCheck,
    Mail,
    Lock,
    Globe2,
    CheckCircle2,
    ChevronRight,
    Loader2,
    MessageCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/* ────────────────────────────────────────────────────────
   ✨ 공통 애니메이션
──────────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: i * 0.08 },
});

/* ────────────────────────────────────────────────────────
   ✨ 기술연동 전용 폼 (외부 의존 없음)
──────────────────────────────────────────────────────── */

interface TechFormState {
    company: string;
    name: string;
    email: string;
    phone: string;
    techStack: string;
    integrationType: string;
    message: string;
}

function IntegrationFormInline(): JSX.Element {
    const [form, setForm] = useState<TechFormState>({
        company: "",
        name: "",
        email: "",
        phone: "",
        techStack: "",
        integrationType: "API 연동",
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
            action: "tech_inquiry",
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (sending) return;

        setSending(true);

        try {
            const token = await getRecaptchaToken();

            // 1) EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                { ...form, token },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );

            // 2) Notion CRM API 저장
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    type: "기술 연동 문의",
                }),
            });

            setSent(true);
        } catch (err) {
            console.error(err);
            alert("전송 실패. 잠시 후 다시 시도해주세요.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative">
            {/* reCAPTCHA script */}
            {RECAPTCHA_KEY && (
                <script
                    src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_KEY}`}
                    async
                    defer
                ></script>
            )}

            {sent ? (
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0] p-10 text-center"
                >
                    <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-[#0b2723]">
                        기술 문의 접수 완료
                    </h3>
                    <p className="mt-2 text-[#1e3a34]/80 leading-relaxed">
                        담당 개발팀이 확인 후
                        <br /> 남겨주신 연락처로 기술 문서와 함께 회신드리겠습니다.
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
                        기술 연동 / API 문의
                    </h2>
                    <p className="text-sm text-[#1e3a34]/70 mb-6">
                        API, Webhook, 결제 모듈, 테스트 환경 등 기술 문의를 남겨주세요.
                    </p>

                    {/* 상단 2열 */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                회사명 / 서비스명
                            </label>
                            <input
                                name="company"
                                required
                                placeholder="예: OO 서비스"
                                value={form.company}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                담당자 이름
                            </label>
                            <input
                                name="name"
                                required
                                placeholder="홍길동"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                이메일
                            </label>
                            <input
                                name="email"
                                required
                                type="email"
                                placeholder="dev@company.com"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">
                                연락처
                            </label>
                            <input
                                name="phone"
                                required
                                placeholder="010-0000-0000"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 focus:ring-2 focus:ring-[#34d399] outline-none"
                            />
                        </div>
                    </div>

                    {/* 기술스택 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1">
                            기술 스택 (선택)
                        </label>
                        <input
                            name="techStack"
                            placeholder="예: React, Node.js, Spring, Kotlin 등"
                            value={form.techStack}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 focus:ring-2 focus:ring-[#34d399] outline-none"
                        />
                    </div>

                    {/* 연동 방식 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1">
                            연동 방식
                        </label>
                        <select
                            name="integrationType"
                            value={form.integrationType}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 focus:ring-2 focus:ring-[#34d399] outline-none"
                        >
                            <option>API 연동</option>
                            <option>Webhook / 이벤트 기반</option>
                            <option>결제 모듈/SDK 연동</option>
                            <option>테스트 환경 관련 문의</option>
                            <option>보안/인증 관련 문의</option>
                        </select>
                    </div>

                    {/* 상세 내용 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1">
                            상세 문의 내용
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            placeholder={
                                "필요한 기능, 연동 방식, 테스트 요구사항, 서버 환경 등을 자세히 입력해 주세요."
                            }
                            value={form.message}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0] px-4 py-3 resize-none focus:ring-2 focus:ring-[#34d399] outline-none"
                        />
                    </div>

                    {/* 버튼 */}
                    <button
                        type="submit"
                        disabled={sending}
                        className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.18)] transition disabled:opacity-60"
                    >
                        {sending ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                전송 중…
                            </>
                        ) : (
                            "문의 보내기"
                        )}
                    </button>

                    <p className="mt-3 text-[12px] text-[#1e3a34]/60">
                        기술 검토 및 회신 목적 외 다른 용도로는 사용되지 않습니다.
                    </p>
                </motion.form>
            )}
        </section>
    );
}

/* ────────────────────────────────────────────────────────
   ✨ 메인 페이지
──────────────────────────────────────────────────────── */

export default function IntegrationInquiryClient(): JSX.Element {
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
                        기술 연동{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            / API 문의
                        </span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-6 text-lg md:text-xl text-[#145c54]/80 max-w-3xl mx-auto leading-relaxed"
                    >
                        PG 연동, 결제 모듈, Webhook, SDK, 테스트 환경 등
                        <br />모든 기술 문의를 담당 개발팀이 직접 답변합니다.
                    </motion.p>
                </div>
            </section>

            {/* ========================== FEATURE CARDS ========================== */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Cpu size={24} />,
                            title: "API 연동 지원",
                            desc: "RESTful / Webhook 기반 결제·정산 연동.",
                        },
                        {
                            icon: <Network size={24} />,
                            title: "테스트 환경 제공",
                            desc: "Sandbox 키 발급, 모의 결제/정산 테스트 제공.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "보안 가이드",
                            desc: "HMAC, JWT, AES256 암호화 가이드 제공.",
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
                                q: "API 키는 어떻게 발급되나요?",
                                a: "가맹 심사 승인 후 관리자 페이지에서 즉시 발급됩니다.",
                            },
                            {
                                q: "Webhook 테스트가 가능한가요?",
                                a: "네, Sandbox Webhook 엔드포인트를 제공합니다.",
                            },
                            {
                                q: "지원하는 SDK 언어는 무엇인가요?",
                                a: "JavaScript / Node.js / Python / Kotlin 지원.",
                            },
                            {
                                q: "보안 요구사항이 있나요?",
                                a: "TLS 1.2 이상, HMAC 검증, IP 화이트리스트 등 적용됩니다.",
                            },
                        ].map((faq, i) => (
                            <motion.details
                                key={i}
                                {...fadeUp(i * 0.1)}
                                className="group rounded-2xl bg-white border border-[#a7f3d0]/60 p-5 open:shadow-[0_8px_26px_rgba(16,185,129,0.10)] transition"
                            >
                                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#0b2723]">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 size={18} className="text-[#10b981]" />
                                        {faq.q}
                                    </span>
                                    <ChevronRight
                                        size={18}
                                        className="text-[#10b981] group-open:rotate-90 transition"
                                    />
                                </summary>
                                <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">{faq.a}</p>
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

                        {/* Outlook 
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
                        */}

                        {/* 카카오톡 */}
                        <a
                            href="http://pf.kakao.com/_dqyYn/friend"
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

            {/* ========================== 개인정보 안내 ========================== */}
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa]">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        모든 정보는 기술 연동 검토 및 안내 목적에만 사용되며, 관련 법령에 따라 보호됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
