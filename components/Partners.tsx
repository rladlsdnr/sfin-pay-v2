'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Handshake } from 'lucide-react';

const fadeUp = (i = 0) => ({
    //initial: { opacity: 1, y: 20 },
    //whileInView: { opacity: 1, y: 0 },
    //viewport: { once: true, amount: 0.2 },
    //transition: { duration: 0.6, delay: 0.08 * i },
});

interface Partner {
    name: string;
    logo: string;
}

export default function Partners(): JSX.Element {
    const partners: Partner[] = [
        { name: 'KB국민은행', logo: '/images/partners/KB.png' },
        { name: 'NH농협', logo: '/images/partners/nhbank.png' },
        { name: '신한은행', logo: '/images/partners/shinhan.png' },
        { name: '우리은행', logo: '/images/partners/woori.png' },
        { name: '신한은행', logo: '/images/partners/shinhan.png' },
        { name: 'IBK기업은행', logo: '/images/partners/ibk.png' },
        { name: '하나은행', logo: '/images/partners/hana.png' },
        { name: '수협은행', logo: '/images/partners/Sh.png' },
        { name: '전북은행', logo: '/images/partners/JB.png' },
        { name: 'BNK부산은행', logo: '/images/partners/bnk.png' },
        { name: 'KDB산업은행', logo: '/images/partners/kdb.png' },
        { name: '저축은행중앙회', logo: '/images/partners/SB.png' },
        { name: 'OK저축은행', logo: '/images/partners/OK.png' },
        { name: '케이뱅크', logo: '/images/partners/kbank.png' },
        { name: '카카오뱅크', logo: '/images/partners/kakaobank.png' },
        { name: '신한카드', logo: '/images/partners/shinhancard.png' },
        { name: '현대카드', logo: '/images/partners/hyundaicard.png' },
        { name: 'KB국민카드', logo: '/images/partners/kbcard.png' },
        { name: '롯데카드', logo: '/images/partners/lottecard.png' },
        { name: 'BC카드', logo: '/images/partners/bccard.png' },
        { name: 'NH농협카드', logo: '/images/partners/nhcard.png' },
        { name: '우리카드', logo: '/images/partners/wooricard.png' },
        { name: '삼성생명', logo: '/images/partners/samsunglife.png' },
        { name: '삼성화재', logo: '/images/partners/samsungfire.png' },
        { name: '한화생명', logo: '/images/partners/hanwhalife.png' },
        { name: '교보생명', logo: '/images/partners/kyobolife.png' },
        { name: 'DB손해보험', logo: '/images/partners/db.png' },
        { name: '현대해상', logo: '/images/partners/hyundaimarine.png' },
        { name: '라이나생명', logo: '/images/partners/linalife.png' },
        { name: 'KCB', logo: '/images/partners/kcb.png' },

        { name: '카카오페이', logo: '/images/partners/kakaopay.png' },
        { name: '토스', logo: '/images/partners/toss.png' },
        { name: '우아한형제들', logo: '/images/partners/wooah.png' },
        { name: '당근페이', logo: '/images/partners/karrot.png' },
        { name: 'SSGPAY', logo: '/images/partners/ssgpay.png' },
        { name: '쿠팡페이', logo: '/images/partners/coupangpay.png' },
        { name: '페이코', logo: '/images/partners/payco.png' },
        { name: '뱅크샐러드', logo: '/images/partners/banksalad.png' },
        { name: 'SK플래닛', logo: '/images/partners/skplanet.png' },
        { name: '코나카드', logo: '/images/partners/konacard.png' },
        { name: '야놀자', logo: '/images/partners/yanolja.png' },
        { name: 'finda', logo: '/images/partners/finda.png' },
        { name: 'KG모빌리언스', logo: '/images/partners/kgmobilians.png' },
        { name: 'KIS정보통신', logo: '/images/partners/kis.png' },
        { name: '티머니', logo: '/images/partners/tmoney.png' },
    ];

    const row1 = partners.slice(0, 15);
    const row2 = partners.slice(15, 30);
    const row3 = partners.slice(30, 45);

    return (
        <section id="partners" className="relative py-24 px-6 md:px-16 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_60%_40%,rgba(0,200,155,0.08),transparent_10%)]" />

            <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,200,155,0.1)] text-[#00b894] text-sm font-medium">
                    <Building2 size={16} /> 함께하는 파트너
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-snug">
                    신뢰할 수 있는{' '}
                    <br className="block md:hidden" />
                    <span className="text-[#00b894]">결제 생태계</span>
                </h2>

                <p className="mt-5 text-[#334155]/80 text-lg leading-relaxed">
                    금융기관, 커머스, 기술기업과 함께
                    <br /> 안정적이고 투명한 결제 환경을 구축합니다.
                </p>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-10">
                {/* 1행 */}
                <motion.div
                    //initial={{ x: 0 }}
                    //animate={{ x: ['0%', '-33.3333%'] }}
                    //transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="flex gap-10 whitespace-nowrap opacity-90 will-change-transform"
                >
                    {[...row1, ...row1, ...row1].map((p, i) => (
                        <div
                            key={`r1-${i}`}
                            className="inline-flex items-center justify-center min-w-[150px] md:min-w-[180px] h-[100px]
                            rounded-xl bg-white border border-[rgba(0,200,155,0.2)]
                            hover:shadow-[0_4px_16px_rgba(0,200,155,0.1)] t1"
                        >
                            <img
                                src={p.logo}
                                alt={p.name}
                                className="max-h-[70px] max-w-[150px] w-auto object-cover opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* 2행 */}
                <motion.div
                    //initial={{ x: 0 }}
                    //animate={{ x: ['-33.3333%', '0%'] }}
                    //transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    className="hidden sm:flex gap-10 whitespace-nowrap opacity-90 will-change-transform"
                >
                    {[...row2, ...row2, ...row2].map((p, i) => (
                        <div
                            key={`r2-${i}`}
                            className="inline-flex items-center justify-center min-w-[150px] md:min-w-[180px] h-[100px]
                            rounded-xl bg-white border border-[rgba(0,200,155,0.2)]
                            hover:shadow-[0_4px_16px_rgba(0,200,155,0.1)] t1"
                        >
                            <img
                                src={p.logo}
                                alt={p.name}
                                className="max-h-[70px] max-w-[150px] w-auto object-cover opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </motion.div>

                {/* 3행 */}
                <motion.div
                    //initial={{ x: 0 }}
                    //animate={{ x: ['0%', '-33.3333%'] }}
                    //transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
                    className="hidden sm:flex gap-10 whitespace-nowrap opacity-90 will-change-transform"
                >
                    {[...row3, ...row3, ...row3].map((p, i) => (
                        <div
                            key={`r3-${i}`}
                            className="inline-flex items-center justify-center min-w-[150px] md:min-w-[180px] h-[100px]
                            rounded-xl bg-white border border-[rgba(0,200,155,0.2)]
                            hover:shadow-[0_4px_16px_rgba(0,200,155,0.1)] t1"
                        >
                            <img
                                src={p.logo}
                                alt={p.name}
                                className="max-h-[70px] max-w-[150px] w-auto object-cover opacity-80 hover:opacity-100 transition"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                {...fadeUp(2)}
                className="max-w-5xl mx-auto mt-20 rounded-2xl border border-[rgba(0,200,155,0.25)]
                    p-8 md:p-10 text-center bg-[#FFFFFF]
                    shadow-[0_8px_30px_rgba(0,200,155,0.08)]"
            >
                <div className="inline-flex items-center gap-2 px-۴ py-1.5 rounded-full bg-[rgba(0,200,155,0.1)] text-[#00b894] text-sm mb-4">
                    <Handshake size={14} /> PARTNERSHIP PROGRAM
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-[#0f172a] mb-3">
                    SFIN PAY와 함께 성장할 <br className="block md:hidden" />
                    파트너를 찾습니다
                </h3>

                <p className="text-[#334155]/80 text-base mb-6">
                    제휴 금융기관, 플랫폼, SaaS 파트너로 등록하여
                    함께 시장을 확장하고 리워드를 공유하세요.
                </p>

                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-gradient-to-r from-[#00c89b] to-[#00b894]
                     hover:from-[#00b894] hover:to-[#00a884]
                     text-white font-semibold shadow-[0_8px_20px_rgba(0,200,155,0.25)] t1"
                >
                    제휴 문의하기 →
                </a>
            </motion.div>
        </section>
    );
}
