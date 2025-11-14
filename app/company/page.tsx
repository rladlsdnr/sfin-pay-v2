'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    ShieldCheck,
    Cpu,
    Target,
    HeartHandshake,
    Briefcase,
    Layers,
    Building2,
    Globe2,
    Lightbulb,
    Rocket,
    Users,
} from 'lucide-react';

const fadeUp = (i = 0) => ({
    initial: { opacity: 1, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: { duration: 0.6, delay: 0.08 * i },
});

export default function CompanyIntro(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    const values = [
        {
            icon: <Target size={26} />,
            title: '투명한 정산',
            desc: 'SFIN PAY는 정산의 속도와 정확도를 중심에 둔 구조로, 모든 거래 흐름을 실시간으로 추적하고 투명하게 제공합니다.',
        },
        {
            icon: <HeartHandshake size={26} />,
            title: '신뢰 중심 운영',
            desc: '가맹점과 소비자, 그리고 파트너사 모두가 안심할 수 있는 결제 환경을 제공합니다.',
        },
        {
            icon: <Cpu size={26} />,
            title: 'AI 기술 기반',
            desc: '거래 리스크를 AI가 실시간 분석하고, 비정상 패턴을 즉시 탐지·차단하는 스마트 인프라를 제공합니다.',
        },
        {
            icon: <ShieldCheck size={26} />,
            title: '보안 우선',
            desc: '금융보안원·KISA 기준에 부합하는 보안 규격을 따르며, 모든 데이터는 암호화·분리 저장됩니다.',
        },
    ];

    const departments = [
        {
            name: '결제플랫폼사업부',
            desc: '온라인/오프라인 통합 결제와 D+0·D+1 정산 엔진을 운영합니다. 안정적이고 빠른 정산 시스템으로 가맹점의 자금 흐름을 효율적으로 지원합니다.',
        },
        {
            name: '기술개발본부',
            desc: '결제 API, SDK, Fraud Detection, Liquidity Intelligence 등 핵심 모듈을 개발·고도화합니다.',
        },
        {
            name: '리스크·보안관리본부',
            desc: 'AI 기반 FDS(Fraud Detection System)와 규정 준수 시스템(AML, ISMS 등)을 운영하며, 안전한 거래를 보장합니다.',
        },
        {
            name: '가맹점지원센터',
            desc: '가맹점 등록, 정산 문의, 기술 지원, 수수료 관리 등 파트너와의 실시간 대응을 담당합니다.',
        },
        {
            name: '경영·법무지원실',
            desc: '회계, 세무, 법률, 계약, 감사 프로세스를 총괄하며 투명한 기업 운영 체계를 구축합니다.',
        },
    ];

    const certifications = [
        'KISA 전자금융보안 규정 준수',
        'ISMS 인증 체계 기반 보안관리',
        'PCI-DSS 결제정보 보호 표준 적용',
        '금융보안원 기술보호 수준 대응',
    ];

    return (
        <div className="min-h-screen bg-[#f9fafb] text-[#0b2723] pt-32">
            {/* HEADER */}
            <section className="text-center py-24 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f9fafb] border-b border-[#a7f3d0]">
                <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-extrabold mb-6 text-[clamp(30px,5vw,36px)]">
                    <span className="text-[#10b981]">SFIN PAY</span> 회사소개
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#1e3a34]/85 max-w-4xl mx-auto leading-snug"
                >
                    <strong>2025년 설립</strong> — SFIN PAY는 빠르고 투명한 정산 시스템을 핵심 가치로 하는
                    결제 전문 기업입니다.
                    모든 거래의 흐름이 명확하게 보이고, 누구나 신뢰할 수 있는 결제 환경을 제공합니다.
                </motion.p>
            </section>

            {/* VALUE */}
            <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto text-center">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-10 text-[clamp(30px,5vw,36px)]">
                    핵심 가치
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-8 bg-white border border-[#a7f3d0]/60 rounded-2xl hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] "
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-3 rounded-full bg-[#10b981]/10 text-[#10b981]">{v.icon}</div>
                                <h3 className="text-lg font-semibold">{v.title}</h3>
                                <p className="text-sm text-[#1e3a34]/80 leading-snug">{v.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* BUSINESS STRUCTURE */}
            <section className="py-28 px-6 md:px-16 bg-[#ffffff] border-t border-[#a7f3d0]">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-12 text-center text-[clamp(30px,5vw,36px)]">
                    사업 및 조직 구조
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {departments.map((d, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i)}
                            className="p-8 bg-white border border-[#a7f3d0]/60 rounded-2xl shadow-sm hover:shadow-[0_6px_25px_rgba(16,185,129,0.08)] "
                        >
                            <div className="flex items-center gap-3 mb-3 text-[#10b981] font-semibold">
                                <Briefcase size={20} />
                                {d.name}
                            </div>
                            <p className="text-[#1e3a34]/85 leading-snug text-sm">{d.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section className="py-28 px-6 md:px-16 bg-gradient-to-b from-[#ecfdf5] to-[#f0fdfa] border-t border-[#a7f3d0] text-center">
                <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-8 text-[clamp(30px,5vw,36px)]">
                    보안·인증 체계
                </motion.h2>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-[#1e3a34]/85 max-w-3xl mx-auto mb-12 leading-snug"
                >
                    금융 보안 기준을 엄격히 준수하며,
                    결제 데이터 보호와 개인정보 암호화를 최우선으로 합니다.
                </motion.p>
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-20">
                    {certifications.map((c, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(i * 0.1)}
                            className="px-6 py-3 bg-white border border-[#a7f3d0]/70 rounded-full text-sm font-medium text-[#1e3a34]/90 hover:text-[#10b981] hover:shadow-md "
                        >
                            {c}
                        </motion.div>
                    ))}
                </div>

            </section>

            <div className="min-h-screen bg-mint-gradient text-[#0f2b26] pt-16 pb-24">
                {/* ────────────── ① HEADER ────────────── */}
                <section className="text-center px-6 md:px-16 py-20 border-b border-brand-mint">
                    <motion.h1
                        {...fadeUp(0)}
                        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[#0f2b26] text-[clamp(30px,5vw,36px)]"
                    >
                        SFIN PAY <span className="text-brand-mintDark">VISION 2025</span>
                    </motion.h1>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="text-lg md:text-xl text-[#145C52]/85 max-w-3xl mx-auto leading-relaxed"
                    >
                        “모든 결제는 <strong>신뢰</strong> 위에 세워져야 한다.”
                        <br />
                        기술보다 투명성, 속도보다 신뢰를 우선하는 것이
                        SFIN PAY의 비전입니다.
                    </motion.p>
                </section>

                {/* ────────────── ② OUR MISSION ────────────── */}
                <section className="py-24 px-6 md:px-16 bg-white border-b border-brand-mint">
                    <motion.h2
                        {...fadeUp(0)}
                        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0f2b26] "
                    >
                        우리의 미션
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.2)}
                        className="max-w-4xl mx-auto text-center text-[#145C52]/90 leading-relaxed text-[15.5px]"
                    >
                        SFIN PAY는 단순한 결제 솔루션이 아니라, <strong>신뢰 기반 금융 인프라</strong>를
                        구축하는 기업입니다.
                        우리는 투명한 정산, 공정한 수수료, 그리고 ESG 중심의 기술로{" "}
                        소상공인부터 글로벌 브랜드까지 모두가 공평한 금융 생태계에 참여할 수 있도록 만듭니다.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Target size={28} />,
                                title: "고객 신뢰 우선",
                                desc: "모든 서비스는 고객의 데이터와 결제 신뢰를 최우선 가치로 설계합니다.",
                            },
                            {
                                icon: <Lightbulb size={28} />,
                                title: "투명한 기술 혁신",
                                desc: "혁신은 검증 가능해야 합니다. SFIN PAY의 모든 알고리즘은 투명한 기준에 따라 운영됩니다.",
                            },
                            {
                                icon: <HeartHandshake size={28} />,
                                title: "지속가능한 성장",
                                desc: "우리는 사회적 책임을 다하며, ESG 기반의 지속가능한 결제 생태계를 확장합니다.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i + 1)}
                                className="p-8 rounded-2xl border border-brand-mintLight bg-[#F9FFFE] hover:shadow-[0_8px_25px_rgba(0,201,167,0.15)]  duration-500"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="p-4 rounded-full bg-brand-mint/20 text-brand-mintDark">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#0f2b26]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#145C52]/80 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ────────────── ③ OUR FUTURE ────────────── */}
                <section className="py-24 px-6 md:px-16 bg-mint-gradient border-b border-brand-mint">
                    <motion.h2
                        {...fadeUp(0)}
                        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#0f2b26]"
                    >
                        우리의 미래
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.2)}
                        className="max-w-4xl mx-auto text-center text-[#145C52]/90 leading-relaxed text-[15.5px]"
                    >
                        SFIN PAY는 2025년까지 아시아 전역의 결제 인프라를 연결하여{" "}
                        <strong>국경 없는 정산 네트워크</strong>를 구축하고자 합니다.
                        이를 통해 금융 소외 계층의 디지털 접근성을 높이고,
                        공정한 유동성 흐름을 만들어가는 것이 우리의 미래 비전입니다.
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Rocket size={28} />,
                                title: "Global Expansion",
                                desc: "2025년까지 5개국 결제 네트워크 통합 및 해외 가맹점 정산 인프라 구축.",
                            },
                            {
                                icon: <Globe2 size={28} />,
                                title: "Cross-border Finance",
                                desc: "환율, 세금, 수수료를 실시간 자동처리하는 글로벌 결제 표준화 추진.",
                            },
                            {
                                icon: <Users size={28} />,
                                title: "Inclusive Ecosystem",
                                desc: "스타트업, 프리랜서, 소상공인 누구나 접근 가능한 개방형 금융 플랫폼 실현.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeUp(i + 1)}
                                className="p-8 rounded-2xl border border-brand-mintDark/20 bg-white hover:shadow-[0_8px_25px_rgba(0,201,167,0.15)]  duration-500"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="p-4 rounded-full bg-brand-mintDark/15 text-brand-mintDark">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#0f2b26]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#145C52]/80 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ────────────── ④ FOOTNOTE ────────────── */}
                <div className="text-center py-16 text-[#145C52]/75 text-sm">
                    <motion.p {...fadeUp(0)}>
                        © 2025 SFIN PAY — 모든 비전은 <strong>신뢰</strong>에서 출발합니다.
                    </motion.p>
                </div>


                <div className='flex flex-wrap justify-center gap-6 max-w-5xl mx-auto'>
                    <motion.div {...fadeUp(0.4)}>
                        <Link
                            href="/careers"
                            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-gradient-to-r from-[#34d399] to-[#10b981] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(16,185,129,0.25)] "
                        >
                            채용 문의 →
                        </Link>
                    </motion.div>

                    <motion.div {...fadeUp(0.4)}>
                        <Link
                            href="/inquiry/contract"
                            className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-gradient-to-r from-[#34d399] to-[#10b981] hover:from-[#10b981] hover:to-[#059669] text-white font-semibold text-lg shadow-[0_8px_25px_rgba(16,185,129,0.25)] "
                        >
                            가맹 문의 →
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* FOOTER COMPANY INFO */}
            <section className="py-16 px-6 md:px-16 bg-white border-t border-[#a7f3d0]/60 text-center text-sm text-[#1e3a34]/75">
                <div className="max-w-4xl mx-auto leading-relaxed space-y-2">
                    <p className="font-semibold text-[#0b2723]">법인 정보</p>
                    <p>상호명: (주)SFIN PAY | 대표이사: 고영빈</p>
                    <p>사업자등록번호: 421-88-02504</p>
                    <p>주소: 서울특별시 영등포구 여의대방로 67길11 5층 에이 5-41호</p>
                    <p>대표번호: 010-2952-2667 | 이메일: woojinplatform@gmail.com</p>
                    <p>Copyright © 2025 SFIN PAY Co., Ltd. All rights reserved.</p>
                </div>
            </section>
        </div>
    );
}
