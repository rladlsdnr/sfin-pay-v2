"use client";

import React, {
    useEffect,
    useState,
    ChangeEvent,
    FormEvent,
} from "react";
import { motion } from "framer-motion";
import {
    Wallet,
    CalendarClock,
    FileText,
    Building2,
    ShieldCheck,
    CreditCard,
    Calculator,
    Mail,
    Lock,
    CheckCircle2,
    ChevronRight,
    Loader2,
    MessageCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

/* ────────────────────────────────────────────────
   Settlement 전용 ContactFormInline()
────────────────────────────────────────────────── */

interface SettlementFormState {
    company: string;
    name: string;
    phone: string;
    email: string;
    type: string;
    message: string;
}

function SettlementFormInline(): JSX.Element {
    const [form, setForm] = useState<SettlementFormState>({
        company: "",
        name: "",
        phone: "",
        email: "",
        type: "정산 문의",
        message: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    async function getRecaptchaToken(): Promise<string> {
        if (typeof window === "undefined") return "";
        const w = window as any;
        if (!w.grecaptcha || !RECAPTCHA_KEY) return "";
        return await w.grecaptcha.execute(RECAPTCHA_KEY, {
            action: "settlement_inquiry",
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (sending) return;

        setSending(true);

        try {
            const token = await getRecaptchaToken();

            // EmailJS 전송
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                { ...form, token },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );

            // 내부 API 저장
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            setSent(true);
        } catch (err) {
            console.error(err);
            alert("문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="relative">
            {/* reCAPTCHA */}
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
                    className="rounded-2xl bg-[#ecfdf5] border border-[#a7f3d0]/60 p-10 text-center"
                >
                    <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-[#0b2723]">문의가 접수되었습니다</h3>
                    <p className="mt-2 text-[#1e3a34]/80">
                        정산팀 담당자가 입력하신 연락처로 빠르게 회신드립니다.
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
                        정산 문의 접수
                    </h2>
                    <p className="text-sm text-[#1e3a34]/70 mb-6">
                        정산 내역, 입금 확인, 세금계산서, 수수료 공제 등 모든 문의를 남겨주세요.
                    </p>

                    {/* 2열 */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                상호명 / 가맹점명
                            </label>
                            <input
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                required
                                placeholder="예: SFIN 카페 / OO 학원"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#34d399]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                담당자명
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="홍길동"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#34d399]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                                연락처
                            </label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="010-0000-0000"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#34d399]"
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
                                required
                                placeholder="you@company.co.kr"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#34d399]"
                            />
                        </div>
                    </div>

                    {/* 유형 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                            문의 유형
                        </label>
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 outline-none focus:ring-2 focus:ring-[#34d399]"
                        >
                            <option>정산 문의</option>
                            <option>입금 지연 문의</option>
                            <option>세금계산서 문의</option>
                            <option>수수료 공제 문의</option>
                            <option>정산 내역 요청</option>
                            <option>기타 문의</option>
                        </select>
                    </div>

                    {/* 메시지 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold mb-1 text-[#0b2723]">
                            상세 문의 내용
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder={"정산 내역 / 입금 시간 / 금액 불일치 / 세금계산서 등 상세 내용을 작성해주세요."}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#34d399]"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={sending}
                        className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.18)] disabled:opacity-60"
                    >
                        {sending ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                전송 중입니다...
                            </>
                        ) : (
                            "정산 문의 보내기"
                        )}
                    </button>

                    <p className="mt-3 text-[12px] text-[#1e3a34]/60">
                        입력하신 정보는 정산 문의 처리 외에는 사용되지 않습니다.
                    </p>
                </motion.form>
            )}
        </section>
    );
}
export default function SettlementInquiryClient(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">

            {/* JSON-LD SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "SFIN PAY",
                                item: "http://sfinpayment.com/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "문의",
                                item: "http://sfinpayment.com/inquiry/support",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "정산 문의",
                                item: "http://sfinpayment.com/inquiry/settlement",
                            },
                        ],
                    }),
                }}
            />

            {/* 🌿 Hero */}
            <section className="pt-28 pb-16 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] border-b border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1
                        {...fadeUp(0)}
                        className="text-4xl md:text-6xl font-extrabold leading-tight text-[clamp(30px,5vw,36px)]"
                    >
                        정산{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            문의 / 입금 안내
                        </span>
                    </motion.h1>

                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        D+0 · D+1 정산, 입금 지연, 세금계산서 발행, 수수료 공제
                        <br className="hidden md:block" />
                        정산과 관련된 모든 문의를 빠르게 처리해드립니다.
                    </motion.p>
                </div>
            </section>

            {/* 🌿 주요 특징 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <CalendarClock size={24} />,
                            title: "입금 스케줄 자동 계산",
                            desc: "D+0 / D+1 입금 예정일을 주말·공휴일 포함 자동 계산.",
                        },
                        {
                            icon: <Calculator size={24} />,
                            title: "세금계산서 자동 발행",
                            desc: "정산 완료 후 세금계산서가 자동 발행되고 다운로드 제공.",
                        },
                        {
                            icon: <ShieldCheck size={24} />,
                            title: "입금 지연 자동 감지",
                            desc: "입금 지연·금액 불일치 자동 감지 및 재검증 시스템 적용.",
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

            {/* 🌿 정산 프로세스 */}
            <section className="py-10 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

                    {/* 정산 절차 */}
                    <motion.div
                        {...fadeUp(0)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <Wallet className="text-[#10b981]" /> 정산 절차 안내
                        </h2>

                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 결제 승인 후 → 자동 정산 스케줄 등록</li>
                            <li>• D+0 / D+1 기준 입금 처리</li>
                            <li>• 입금 지연 시 자동 알림 + 재전송 시스템 작동</li>
                            <li>• 정산 완료 후 세금계산서 자동 발행</li>
                        </ul>

                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            모든 정산 내역은 관리자 페이지 또는 Slack 알림을 통해 실시간 확인하실 수 있습니다.
                        </p>
                    </motion.div>

                    {/* 유의사항 */}
                    <motion.div
                        {...fadeUp(0.1)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <FileText className="text-[#10b981]" /> 유의사항
                        </h2>

                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 정산 계좌 변경은 사전 서면 신청이 필요합니다.</li>
                            <li>• 공휴일 입금 옵션은 별도 설정이 필요합니다.</li>
                            <li>• 법인 통장만 정산 계좌로 등록 가능합니다.</li>
                            <li>• 세금계산서는 매월 1회 자동 정리됩니다.</li>
                        </ul>

                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            접수 후 정산팀 담당자가 직접 확인하여 안내드립니다.
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
                                q: "입금이 지연되는 사유는 무엇인가요?",
                                a: "은행 전산 점검, 공휴일 일정, 계좌 불일치 등 다양한 사유가 있습니다. 자동 감지 후 재처리됩니다.",
                            },
                            {
                                q: "세금계산서 재발행도 가능한가요?",
                                a: "네. 관리자 페이지에서 PDF 재다운로드 및 재발행 요청이 모두 가능합니다.",
                            },
                            {
                                q: "정산 내역은 어디서 조회하나요?",
                                a: "SFIN PAY 관리자 대시보드 → ‘정산 내역’ 메뉴에서 기간별 조회 가능.",
                            },
                            {
                                q: "수수료는 어떤 방식으로 공제되나요?",
                                a: "거래 건별 실시간 공제 후 입금되며, 월 단위 내역도 자동 정리됩니다.",
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
                                    <ChevronRight className="text-[#10b981] group-open:rotate-90 transition" />
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
                        추가로 문의하실 내용이 있으신가요?
                    </h2>
                    {/* 하단 CTA */}
                    <div
                        className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                    >
                        {/* Gmail */}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=woojinplatform@gmail.com&su=SFIN%20PAY%20문의&body=회사명:%0A문의유형:%0A문의내용:"
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
                            href="https://outlook.office.com/mail/deeplink/compose?to=woojinplatform@gmail.com&subject=SFIN%20PAY%20문의&body=회사명:%0A문의유형:%0A문의내용:"
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
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa] border-t border-[#a7f3d0]/40">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        문의 시 제공된 정보는 정산 검토 및 회계 처리를 위해서만 활용되며,
                        법령 및 내부 규정에 따라 안전하게 관리됩니다.
                        또한, 관련 정보는 목적 달성 후 즉시 파기됩니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
