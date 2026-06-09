'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Building2, Phone, Copyright } from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function Footer(): JSX.Element {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return <></>;

    return (
        <footer
            id="footer"
            className="relative py-20 px-6 md:px-16 overflow-hidden
            bg-gradient-to-b from-paper to-paper"
            aria-label="사이트 하단 정보"
        >
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[42rem] max-w-[90vw] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(124,108,255,0.16), transparent 70%)' }} />
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* 브랜드 마크 */}
                <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
                    <span className="grid place-items-center w-11 h-11 rounded-full bg-white ring-1 ring-[rgba(124,108,255,0.35)] shadow-[0_6px_18px_-6px_rgba(124,108,255,0.55)]"><img src="/sfin-mark.png" alt="" className="w-full h-full object-contain p-[3px]" /></span>
                    <span className="text-xl font-extrabold text-navy-900 tracking-tight">SFIN PAY</span>
                </div>
                {/* 📞 회사 정보 */}
                <motion.div
                    {...fadeUp(0)}
                    className="grid md:grid-cols-3 gap-10 text-[#334155]/80 text-center md:text-left"
                >
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-navy-900 font-semibold">
                            <Building2 size={18} aria-hidden  className="text-[#6d3bd1]" />
                            SFIN PAY
                        </div>
                        {/*<p className="text-sm leading-relaxed">
                            서울특별시 영등포구 여의대방로 67길11 <br /> 5층 에이 5-41호
                        </p>*/}
                    </div>

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-navy-900 font-semibold">
                            <Mail size={18} aria-hidden  className="text-[#6d3bd1]" />
                            문의 메일
                        </div>
                        <p className="text-sm leading-relaxed">sfinpay@gmail.com</p>
                    </div>

                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-navy-900 font-semibold">
                            <Phone size={18} aria-hidden  className="text-[#6d3bd1]" />
                            대표 전화
                        </div>
                        <p className="text-sm leading-relaxed">010-7261-3755</p>
                    </div>
                </motion.div>

                {/* 🔗 링크 / 약관 */}
                <motion.div
                    {...fadeUp(1)}
                    className="mt-12 flex flex-wrap justify-center md:justify-between text-sm text-[#475569]/70 gap-4"
                >
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* 🔥 정확한 라우트로 수정됨 */}
                        <Link
                            href="/termsofuse"
                            className="hover:text-[#6d3bd1] transition"
                            aria-label="이용약관"
                        >
                            이용약관
                        </Link>

                        <Link
                            href="/privacy"
                            className="hover:text-[#6d3bd1] transition"
                            aria-label="개인정보처리방침"
                        >
                            개인정보처리방침
                        </Link>

                        <Link
                            href="/security"
                            className="hover:text-[#6d3bd1] transition"
                            aria-label="보안정책"
                        >
                            보안정책
                        </Link>
                    </div>
                </motion.div>

                {/* 👣 저작권 */}
                <div className="mt-10 border-t border-[rgba(124,108,255,0.18)] 
                    pt-6 text-center text-[#475569]/70 text-sm flex flex-col 
                    md:flex-row items-center justify-center gap-2">
                    <Copyright size={14} aria-hidden />
                    <span>2026 SFIN PAY · All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
}
