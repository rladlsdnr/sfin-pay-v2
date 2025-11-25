"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Send,
    Mail,
    Building2,
    MessageSquare,
    MessageCircle,
} from "lucide-react";

/* ────────────────────────────────────────────────
   🧩 애니메이션 프리셋 (Framer Motion 11 대응)
────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
    //initial: { opacity: 1, y: 20 },
    //whileInView: { opacity: 1, y: 0 },
});

/* ────────────────────────────────────────────────
   📬 타입 정의
────────────────────────────────────────────────── */
interface ContactForm {
    company: string;
    email: string;
    category: string;
    message: string;
}

/* ────────────────────────────────────────────────
   💚 메인 Contact 컴포넌트
────────────────────────────────────────────────── */
export default function Contact(): JSX.Element {
    const [form, setForm] = useState<ContactForm>({
        company: "",
        email: "",
        category: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("📨 문의 내용:", form);
        alert("문의가 접수되었습니다. 담당 매니저가 연락드리겠습니다.");
    };

    return (
        <section
            id="contact"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#ecfeff] via-[#f0fdfa] to-white"
        >
            {/* ───────────── 헤더 ───────────── */}
            <motion.div
                {...fadeUp(0)}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    <Mail size={16} /> 문의하기
                </span>

                <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#0b2723] leading-tight text-[clamp(30px,5vw,36px)]">
                    <span className="text-[#00c89b]">SFIN PAY</span>와{" "}
                    <br className="hidden md:block" />
                    <span className="block md:mt-3 text-[#0b2723]">함께할 준비되셨나요?</span>
                </h2>

                <p className="mt-5 text-[#1f3b37]/70 text-lg leading-relaxed">
                    정산, 유동성, 계약, 기술 연동 등 필요한 문의를 남겨주시면{" "}
                    <br className="hidden md:block" />
                    담당 매니저가 신속히 연락드립니다.
                </p>
            </motion.div>

            {/*
            <motion.form
                {...fadeUp(1)}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto rounded-2xl border border-emerald-200/70 bg-white/90 backdrop-blur-sm p-8 md:p-10 space-y-6 shadow-[0_8px_25px_rgba(16,185,129,0.12)]"
            >
                
                <div>
                    <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#0b2723] mb-2 flex items-center gap-2"
                    >
                        <Building2 size={16} className="text-emerald-600" /> 회사명 / 상호명
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="예: 주식회사 에스핀"
                        value={form.company}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-[#f0fdfa] border border-emerald-200 text-[#0b2723] px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 outline-none placeholder-emerald-300 transition"
                    />
                </div>

               
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#0b2723] mb-2 flex items-center gap-2"
                    >
                        <Mail size={16} className="text-emerald-600" /> 이메일
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.co.kr"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-[#f0fdfa] border border-emerald-200 text-[#0b2723] px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 outline-none placeholder-emerald-300 transition"
                    />
                </div>

                
                <div>
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium text-[#0b2723] mb-2 flex items-center gap-2"
                    >
                        <MessageSquare size={16} className="text-emerald-600" /> 문의 유형
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-[#f0fdfa] border border-emerald-200 text-[#0b2723] px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 outline-none transition"
                    >
                        <option value="">선택하세요</option>
                        <option>① 정산 관련 문의</option>
                        <option>② 매출 기반 단기자금(유동성) 문의</option>
                        <option>③ 가맹점 계약 / 수수료 협의</option>
                        <option>④ 기술 연동 / 시스템 문의</option>
                        <option>⑤ 기타 일반 문의</option>
                    </select>
                </div>

                
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#0b2723] mb-2"
                    >
                        세부 내용
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="문의 내용을 입력해주세요. (예: 정산 주기 단축 관련 문의)"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl bg-[#f0fdfa] border border-emerald-200 text-[#0b2723] px-4 py-3 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 outline-none resize-none placeholder-emerald-300 transition"
                    />
                </div>

                
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00c89b] to-[#00b894] hover:from-[#00b894] hover:to-[#00a884] text-white font-semibold shadow-[0_8px_25px_rgba(16,185,129,0.25)] "
                >
                    <Send size={18} /> 문의 보내기
                </motion.button>

                <p className="text-center text-[#1f3b37]/70 text-sm mt-2">
                    모든 문의 내용은 암호화되어 전송되며, 영업일 기준 24시간 이내 회신드립니다.
                </p>
            </motion.form>
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

        </section>
    );
}
