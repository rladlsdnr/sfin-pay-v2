"use client";

import React, {
    useEffect,
    useState,
    ChangeEvent,
    FormEvent,
} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Handshake,
    Percent,
    ShieldCheck,
    BookCheck,
    Clock3,
    Phone,
    Mail,
    Building2,
    ChevronRight,
    CheckCircle2,
    FileText,
    Wallet,
    Lock,
    Globe2,
    Loader2,
    MessageCircle,
    ChevronDown,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/* ────────────────────────────────────────────────
   공통 애니메이션
────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: i * 0.08 },
});

/* ────────────────────────────────────────────────
   이 페이지 전용 가맹 계약/수수료 문의 폼
   - EmailJS + reCAPTCHA + /api/contact 연동
   - 디자인은 이 페이지 톤에 맞춰 통일
────────────────────────────────────────────────── */

interface ContractFormState {
    company: string;
    name: string;
    phone: string;
    email: string;
    type: string;
    message: string;
}

function ContractFormInline(): JSX.Element {
    const [form, setForm] = useState<ContractFormState>({
        company: "",
        name: "",
        phone: "",
        email: "",
        type: "가맹점 계약 / 수수료 협의",
        message: "",
    });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const RECAPTCHA_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    async function getRecaptchaToken(): Promise<string> {
        if (typeof window === "undefined") return "";
        const w = window as any;
        if (!w.grecaptcha || !RECAPTCHA_KEY) return "";
        return await w.grecaptcha.execute(RECAPTCHA_KEY, {
            action: "contract_inquiry",
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (sending) return;
        setSending(true);

        try {
            const token = await getRecaptchaToken();

            // 1️⃣ EmailJS 발송
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                {
                    ...form,
                    token,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            );

            // 2️⃣ 내부 CRM(/api/contact) 저장
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
            {/* reCAPTCHA v3 스크립트 */}
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
                    <h3 className="text-2xl font-bold text-[#0b2723]">
                        문의가 접수되었습니다
                    </h3>
                    <p className="mt-2 text-[#1e3a34]/80">
                        담당 매니저가 내용을 확인한 뒤,
                        <br className="hidden md:block" />
                        남겨주신 연락처로 빠르게 연락드리겠습니다.
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
                        가맹 계약 / 수수료 협의 문의서
                    </h2>
                    <p className="text-sm text-[#1e3a34]/70 mb-6">
                        아래 정보를 입력해주시면, 업종·매출 규모·리스크를 종합하여
                        <br className="hidden md:block" />
                        최적의 수수료 및 정산 조건을 제안드립니다.
                    </p>

                    {/* 상단 2열 */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-[#0b2723] mb-1">
                                상호명 / 회사명
                            </label>
                            <input
                                name="company"
                                value={form.company}
                                onChange={handleChange}
                                required
                                placeholder="예: 주식회사 에스핀, SFIN 학원"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 text-[#0b2723] outline-none focus:ring-2 focus:ring-[#34d399] focus:border-[#34d399] transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#0b2723] mb-1">
                                담당자 이름
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="홍길동"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 text-[#0b2723] outline-none focus:ring-2 focus:ring-[#34d399] focus:border-[#34d399] transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#0b2723] mb-1">
                                연락처
                            </label>
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="010-0000-0000"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 text-[#0b2723] outline-none focus:ring-2 focus:ring-[#34d399] focus:border-[#34d399] transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-[#0b2723] mb-1">
                                이메일
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="you@company.co.kr"
                                className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 text-[#0b2723] outline-none focus:ring-2 focus:ring-[#34d399] focus:border-[#34d399] transition"
                            />
                        </div>
                    </div>

                    {/* 문의 유형 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold text-[#0b2723] mb-1">
                            문의 유형
                        </label>
                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 text-[#0b2723] outline-none focus:ring-2 focus:ring-[#34d399] focus:border-[#34d399] transition"
                        >
                            <option>가맹점 계약 / 수수료 협의</option>
                            <option>D+0 / D+1 정산 조건 문의</option>
                            <option>온라인 · 오프라인 동시 도입</option>
                            <option>특수 업종 (프랜차이즈 / 병원 / 교육 등)</option>
                            <option>기타</option>
                        </select>
                    </div>

                    {/* 메시지 */}
                    <div className="mt-5">
                        <label className="block text-sm font-semibold text-[#0b2723] mb-1">
                            상세 문의 내용
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder={
                                "업종, 월 매출(대략), 주요 결제수단, 희망 수수료/정산 조건 등\n자유롭게 작성해 주세요."
                            }
                            className="w-full rounded-xl bg-[#f0fdfa] border border-[#a7f3d0]/70 px-4 py-3 text-[#0b2723] outline-none focus:ring-2 focus:ring-[#34d399] focus:border-[#34d399] transition resize-none"
                        />
                        <p className="mt-2 text-xs text-[#1e3a34]/60">
                            예) 월 매출 1억 내외, 온라인 70% / 오프라인 30%, D+0 정산 위주,
                            기존 PG사 대비 요율 비교 등
                        </p>
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
                            "가맹 계약 / 수수료 문의 보내기"
                        )}
                    </button>

                    <p className="mt-3 text-[12px] text-[#1e3a34]/60">
                        입력하신 연락처로만 회신드리며, 상담 목적 외 다른 용도로는
                        사용되지 않습니다.
                    </p>
                </motion.form>
            )}
        </section>
    );
}

const faqs = [
    {
        q: "수수료는 어떻게 책정되나요?",
        a: (
            <>
                업종, 월 매출 규모, 결제수단 비율(카드·간편), 환불/차지백 지표 등 <b>리스크/운영 지표</b>를 반영해
                개별 협의로 책정합니다.
                <br /><br />
                • <b>기본 범위</b>: 수단·업종별 가이드 레인지 제시 후 거래량에 따라 조정<br />
                • <b>프로모션</b>: 신규/성수기/대형 가맹 우대 정책 운영<br />
                • <b>견적</b>: 온라인 접수 후 담당 매니저가 구조에 맞춰 제안
            </>
        ),
    },
    {
        q: "정산 주기는 D+0와 D+1 모두 가능한가요?",
        a: (
            <>
                표준은 <b>D+1(익일 정산)</b>이며, 요건 충족 시 <b>D+0(당일 정산)</b> 옵션도 제공합니다.
                <br /><br />
                • <b>D+1</b>: 안정적/기본 권장. 주말·공휴일은 익영업일 처리<br />
                • <b>D+0</b>: 매출 패턴·보증/담보·기관 연동 조건 충족 시 제공(시간대 운영)<br />
                • <b>주말 커버</b>: 협의에 따라 일부 커버 가능(기관 점검 시 제한)
            </>
        ),
    },
    {
        q: "온라인·오프라인을 모두 지원하나요?",
        a: (
            <>
                네. <b>온라인(카드·간편·수기)</b>와 <b>오프라인(POS/MPOS/QR/단말)</b>을 모두 지원하며,
                <b>통합 리포트/정산</b>으로 묶어서 관리할 수 있습니다.
                <br /><br />
                • 쇼핑몰·예약·플랫폼 결제 / 매장 POS·무선 단말 / QR 고정형<br />
                • 채널 통합 매출/정산 리포트, 권한별 대시보드 제공
            </>
        ),
    },
    {
        q: "개통까지 어느 정도 소요되나요?",
        a: (
            <>
                업종별로 상이하지만 보통 <b>영업일 기준 1~2일</b> 내외입니다.
                <br /><br />
                1) 온라인 신청서 → 2) 서류/신용 심사 → 3) 전자계약 → 4) 가맹 ID 발급/테스트 → 5) 오픈
                <br />
                테스트용 계정/키를 함께 제공하며, 연동 가이드/샘플도 드립니다.
            </>
        ),
    },
]

/* ────────────────────────────────────────────────
   메인 페이지
────────────────────────────────────────────────── */

export default function ContractInquiryClient(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="min-h-screen bg-[#f0fdfa] text-[#0b2723]">
            {/* 🌿 Breadcrumb + JSON-LD (SEO) */}
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
                                item: "https://sfinpayment.com/",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "문의",
                                item: "https://sfinpayment.com//inquiry/support",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: "가맹 계약 / 수수료 협의",
                                item: "https://sfinpayment.com//inquiry/contract",
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
                        가맹 계약 ·{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                            수수료 협의
                        </span>{" "}
                        문의
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="mt-5 text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                    >
                        D+0 · D+1 정산, 투명한 수수료, 민트 톤 UI. <br className="hidden md:block" />
                        가맹점 규모와 업종에 맞춘 최적 조건을 제안드립니다.
                    </motion.p>

                    {/* 신뢰 배지 */}
                    <motion.div
                        {...fadeUp(0.35)}
                        className="mt-8 flex flex-wrap justify-center gap-3 text-sm"
                    >
                        {[
                            { icon: <ShieldCheck size={16} />, label: "ISMS 준비·진행" },
                            { icon: <BookCheck size={16} />, label: "PCI-DSS 준수" },
                            { icon: <Lock size={16} />, label: "데이터 암호화 · 키관리" },
                            { icon: <Globe2 size={16} />, label: "해외 카드/통화 대응" },
                        ].map((b, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#a7f3d0]/70 bg-white/80 text-[#0b2723]"
                            >
                                {b.icon}
                                {b.label}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 🌿 혜택 하이라이트 */}
            <section className="py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Percent size={24} />,
                            title: "맞춤형 수수료",
                            desc: "업종/월 매출/결제비중(카드·간편결제)에 따라 최적 요율 설계.",
                        },
                        {
                            icon: <Wallet size={24} />,
                            title: "D+0 · D+1 정산",
                            desc: "현금 흐름 개선. 주말·공휴일 커버 옵션 상담 가능.",
                        },
                        {
                            icon: <Handshake size={24} />,
                            title: "원스톱 온보딩",
                            desc: "서류 가이드/전자계약/검수/개통까지 매니저가 동행.",
                        },
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-6 rounded-2xl bg-white border border-[#a7f3d0]/60 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition"
                        >
                            <div className="flex items-center gap-3 text-[#10b981]">
                                {card.icon}
                                <h3 className="text-lg font-semibold text-[#0b2723]">
                                    {card.title}
                                </h3>
                            </div>
                            <p className="mt-3 text-[#1e3a34]/80 leading-relaxed">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🌿 요구사항 안내 + 체크리스트 */}
            <section className="py-6 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeUp(0)}
                        className="p-8 rounded-2xl bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <FileText className="text-[#10b981]" /> 심사를 위한 기본 서류
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 사업자등록증 사본</li>
                            <li>• 대표자 신분증 사본</li>
                            <li>• 통신판매업 신고증(해당 시)</li>
                            <li>• 통장 사본(정산 계좌)</li>
                            <li>• 가맹점 기본 정보(상호/주소/업종/월 매출/수수료 희망범위)</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            업종/리스크 특성에 따라 추가자료(상품권, 선불충전형, 해외청구 등) 요청될 수
                            있습니다.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.15)}
                        className="p-8 rounded-2xl bg:white bg-white border border-[#a7f3d0]/60"
                    >
                        <h2 className="text-2xl font-bold text-[#0b2723] flex items-center gap-2">
                            <ShieldCheck className="text-[#10b981]" /> 보안 · 컴플라이언스
                        </h2>
                        <ul className="mt-4 space-y-2 text-[#1e3a34]/80">
                            <li>• 전 구간 TLS, 민감정보 분리보관 및 암호화, 접근통제</li>
                            <li>• 결제정보 최소수집, 로그 감사, 키 수명주기 관리</li>
                            <li>• 카드사·밴·정산 기관 연계 리스크 모니터링</li>
                            <li>• ISMS 단계적 충족, PCI-DSS 요구사항 준수</li>
                        </ul>
                        <p className="mt-4 text-sm text-[#1e3a34]/60">
                            가맹 심사 및 개통 과정에서 기술/보안 점검 가이드를 제공해 드립니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 🌿 요율/정산 요약 배너 */}
            <section className="py-6 px-6 md:px-16">
                <motion.div
                    {...fadeUp(0)}
                    className="max-w-6xl mx-auto rounded-2xl p-6 md:p-8 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] border border-[#a7f3d0]"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-extrabold text-[#0b2723] ">
                                요율 & 정산 조건, 이렇게 제안됩니다
                            </h3>
                            <p className="mt-1 text-[#1e3a34]/80">
                                월매출, 결제수단 비중(카드/간편), 환불/차지백 리스크 등 종합 고려.
                                D+0 · D+1 정산 가용성 및 주말/공휴일 옵션 상담 가능.
                            </p>
                        </div>
                        {
                            /*
                            <Link
                            href="/online-pay"
                            className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-3 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold shadow-md transition"
                        >
                            결제수단 & API 살펴보기 <ChevronRight size={18} />
                        </Link>
                            */
                        }
                    </div>
                </motion.div>
            </section>

            {/* 🌿 FAQ */}
            <section className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-3xl font-bold text-center mb-10 text-[#0b2723]"
                >
                    자주 묻는 질문 (FAQ)
                </motion.h2>

                {faqs.map((f, i) => (
                    <motion.details
                        key={i}
                        {...fadeUp(i * 0.1)}
                        className="group border-b border-[#a7f3d0]/50 py-6"
                    >
                        <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-[#0b2723] hover:text-[#10b981]">
                            {f.q}
                            <ChevronDown className="text-[#10b981] group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="mt-3 text-[#1e3a34]/80 leading-relaxed text-[15px] space-y-2">
                            {f.a}
                        </div>
                    </motion.details>
                ))}
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

            {/* 🌿 개인정보/법적 고지 */}
            <section className="py-8 px-6 md:px-16 bg-[#f0fdfa]">
                <div className="max-w-6xl mx-auto text-[13px] leading-relaxed text-[#1e3a34]/70">
                    <p className="flex items-center gap-2">
                        <Lock size={14} className="text-[#10b981]" />
                        문의 접수 시 수집되는 정보는 문의 처리 및 상담 목적에만 사용되며, 내부 규정 및
                        관련 법령에 따라 안전하게 관리됩니다. 저장·보관 기간, 제3자 제공, 파기 절차 등은
                        개인정보 처리방침을 따릅니다.
                    </p>
                </div>
            </section>
        </div>
    );
}
