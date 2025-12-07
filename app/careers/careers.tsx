'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Rocket, HeartHandshake, Briefcase, ArrowRight, Mail, MessageCircle } from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.15 },
    viewport: { once: true, amount: 0 },
});

export default function CareersPage(): JSX.Element {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] pt-32 text-[#0b2723]">
            {/* 헤더 */}
            <section className="text-center py-20 px-6 md:px-16">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[clamp(30px,5vw,36px)]"
                >
                    함께 만드는 결제 혁신,
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY 팀에서 시작하세요
                    </span>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.3)}
                    className="text-lg text-[#1e3a34]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    우리는 더 빠르고, 더 투명하며, 더 스마트한 결제 생태계를 만드는 팀입니다.
                    기술과 금융이 만나는 지점에서 새로운 표준을 세우는 여정에 합류하세요.
                </motion.p>
            </section>

            {/* 문화 섹션 */}
            <section className="py-24 px-6 md:px-16 bg-[#ecfdf5]/80">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-center mb-16 text-[clamp(30px,5vw,36px)]"
                >
                    우리의 문화와 가치
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Rocket size={36} />,
                            title: '빠른 실행',
                            desc: '완벽보다 실행을 우선시합니다. 아이디어를 빠르게 실험하고 개선합니다.',
                        },
                        {
                            icon: <HeartHandshake size={36} />,
                            title: '신뢰와 투명성',
                            desc: '모든 의사결정과 데이터는 투명하게 공유됩니다. 신뢰가 곧 성장의 기반입니다.',
                        },
                        {
                            icon: <Users size={36} />,
                            title: '팀 중심의 성장',
                            desc: '각자의 전문성을 존중하며, 함께 성장하는 팀워크를 중시합니다.',
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-8 bg-white border border-[#a7f3d0]/70 rounded-2xl shadow-sm hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] "
                        >
                            <div className="text-[#10b981] mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-[#1e3a34]/80 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 채용 포지션 섹션 */}
            <section className="py-28 px-6 md:px-16 max-w-5xl mx-auto text-center">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold mb-10 text-[#0b2723] text-[clamp(30px,5vw,36px)]"
                >
                    현재 모집 중인 포지션
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        {
                            title: 'Frontend Engineer',
                            desc: 'Next.js / React 기반으로 SFIN PAY 웹 플랫폼을 설계 및 구현합니다.',
                        },
                        {
                            title: 'Backend Engineer',
                            desc: '결제 인프라 및 정산 API, Fraud Detection 시스템을 개발합니다.',
                        },
                        {
                            title: 'Product Designer',
                            desc: 'SFIN 브랜드의 UX/UI 디자인 시스템을 개선하고 새로운 경험을 만듭니다.',
                        },
                        {
                            title: 'Business / Partnerships',
                            desc: '가맹점, PG사, 금융기관 등과의 전략적 파트너십을 이끌어갑니다.',
                        },
                    ].map((job, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-8 bg-white border border-[#a7f3d0]/60 rounded-2xl text-left hover:shadow-[0_8px_28px_rgba(16,185,129,0.12)] "
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-[#0b2723]">{job.title}</h3>
                                <Briefcase className="text-[#10b981]" />
                            </div>
                            <p className="text-[#1e3a34]/80 leading-relaxed">{job.desc}</p>
                            <Link
                                href="/inquiry/careers"
                                className="inline-flex items-center gap-1 text-[#10b981] font-semibold mt-4 hover:underline"
                            >
                                지원하기 <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 md:px-16 bg-gradient-to-tr from-[#d1fae5] to-[#a7f3d0] text-center">
                <motion.h2
                    {...fadeUp(0)}
                    className="text-4xl font-bold text-[#0b2723] mb-4 text-[clamp(30px,5vw,36px)]"
                >
                    당신의 전문성,{' '}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#10b981]">
                        SFIN PAY에서 가치로
                    </span>
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/90 text-lg mb-10 leading-relaxed"
                >
                    단순한 결제 시스템이 아닌, 기술과 데이터로 금융의 미래를 설계하는 여정입니다.
                    함께할 당신을 기다립니다.
                </motion.p>

                {/*
                <Link href="/recruit">
                    <motion.button
                        {...fadeUp(0.4)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-lg shadow-md "
                    >
                        채용 문의하기 →
                    </motion.button>
                </Link>
                */}

                {/* 하단 CTA */}
                <div
                    className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                >
                    {/* Gmail */}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sfinpay@gmail.com&su=SFIN%20PAY%20문의&body=문의유형:%0A문의내용:"
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
                        href="https://outlook.office.com/mail/deeplink/compose?to=sfinpay@gmail.com&subject=SFIN%20PAY%20문의&body=문의유형:%0A문의내용:"
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
            </section>
        </div>
    );
}
