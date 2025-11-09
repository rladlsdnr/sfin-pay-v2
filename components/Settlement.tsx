'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Clock3,
    CheckCircle2,
    ArrowRight,
    Wallet,
} from 'lucide-react';

export default function Settlement(): JSX.Element {
    const [step, setStep] = useState(0);
    const [gross, setGross] = useState(0);
    const [net, setNet] = useState(0);
    const [feeRate, setFeeRate] = useState(0);
    const [reduceMotion, setReduceMotion] = useState(false);

    const amountRef = useRef<HTMLSpanElement | null>(null);
    const animFrameRef = useRef<number | null>(null);

    // ✅ 환경 기반: 모바일 / 저사양 / prefers-reduced-motion 시 애니메이션 축소
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const prefersReduced =
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
        const isSmallScreen = window.innerWidth < 768; // md 미만
        const lowCpu =
            (navigator as any).hardwareConcurrency &&
            (navigator as any).hardwareConcurrency <= 4;

        setReduceMotion(prefersReduced || isSmallScreen || lowCpu);
    }, []);

    // ✅ 4초마다 단계 순환
    useEffect(() => {
        const id = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(id);
    }, []);

    // ✅ 숫자 애니메이션 유틸 (리치 모드에서만 사용)
    const animateAmount = useCallback(
        (
            from: number,
            to: number,
            {
                duration = 900,
                easing = 'outCubic', // 'linear' | 'outCubic' | 'outBack'
            }: { duration?: number; easing?: 'linear' | 'outCubic' | 'outBack' } = {}
        ) => {
            if (!amountRef.current) return;

            // 경량 모드면 그냥 최종값만 찍고 종료
            if (reduceMotion) {
                amountRef.current.textContent = `₩${to.toLocaleString()}`;
                return;
            }

            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
            }

            const startTime = performance.now();

            const ease = (t: number) => {
                if (easing === 'linear') return t;
                if (easing === 'outCubic') return 1 - Math.pow(1 - t, 3);
                if (easing === 'outBack') {
                    const c1 = 1.70158;
                    const c3 = c1 + 1;
                    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
                }
                return t;
            };

            const tick = (now: number) => {
                if (!amountRef.current) return;

                const raw = (now - startTime) / duration;
                const p = Math.min(Math.max(raw, 0), 1);
                const e = ease(p);

                const current = from + (to - from) * e;
                const snapped = Math.floor(current / 10) * 10;

                amountRef.current.textContent = `₩${snapped.toLocaleString()}`;

                if (p < 1) {
                    animFrameRef.current = requestAnimationFrame(tick);
                } else {
                    animFrameRef.current = null;
                }
            };

            animFrameRef.current = requestAnimationFrame(tick);
        },
        [reduceMotion]
    );

    // ✅ step이 바뀔 때만 로직 실행 (gross/net을 deps에 넣지 않는다)
    useEffect(() => {
        if (!amountRef.current) return;

        // 이전 애니메이션 정리
        if (animFrameRef.current) {
            cancelAnimationFrame(animFrameRef.current);
            animFrameRef.current = null;
        }

        if (step === 0) {
            // 새 거래 생성
            const min = 80000;
            const max = 120000;
            const newGross =
                Math.floor(Math.random() * ((max - min) / 10 + 1)) * 10 + min;

            const randomRate = Math.random() * (2.5 - 0.8) + 0.8;
            const rateRounded = Math.round(randomRate * 100) / 100;

            const newNet =
                Math.floor((newGross * (1 - rateRounded / 100)) / 10) * 10;

            setGross(newGross);
            setNet(newNet);
            setFeeRate(rateRounded);

            // 0 → 매출금액
            animateAmount(0, newGross, {
                duration: 800,
                easing: 'outCubic',
            });
        }

        if (step === 1) {
            // 정산 검증 단계: 값 고정 (애니메이션 없음)
            if (gross && amountRef.current) {
                amountRef.current.textContent = `₩${gross.toLocaleString()}`;
            }
        }

        if (step === 2) {
            // 입금 완료: gross → net
            if (gross && net) {
                animateAmount(gross, net, {
                    duration: 800,
                    easing: 'outBack',
                });
            }
        }

        return () => {
            if (animFrameRef.current) {
                cancelAnimationFrame(animFrameRef.current);
                animFrameRef.current = null;
            }
        };
        // 🚨 의도적으로 gross/net 미포함: step 변경에만 반응해서 "한 번씩만" 실행
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step, animateAmount]);

    const stages = [
        {
            title: '결제 발생',
            desc: '고객 결제 승인과 동시에 매출 데이터가 생성됩니다.',
            sub: '🔄 승인 결과 실시간 전송 중',
            icon: <CreditCard size={24} />,
        },
        {
            title: '정산 검증',
            desc: 'AI 정산 엔진이 거래 내역을 분석하고 리스크를 자동 감지합니다.',
            sub: '⚙️ 이상 거래 0건, 검증 진행 중',
            icon: <Clock3 size={24} />,
        },
        {
            title: '입금 완료',
            desc: '정상 거래로 확정된 금액이 가맹점 계좌로 자동 입금됩니다.',
            sub: '💰 15분 내 송금 완료',
            icon: <CheckCircle2 size={24} />,
        },
    ];

    return (
        <section
            id="settlement"
            className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#EFFFF9] via-[#F8FFFD] to-white overflow-hidden"
        >
            {/* 배경: reduceMotion이면 정적 */}
            <motion.div
                animate={
                    reduceMotion
                        ? undefined
                        : {
                            backgroundPosition: ['0% 0%', '100% 40%', '0% 80%', '0% 0%'],
                        }
                }
                transition={
                    reduceMotion
                        ? undefined
                        : {
                            duration: 35,
                            repeat: Infinity,
                            ease: 'linear',
                        }
                }
                className="absolute inset-0 -z-10 opacity-60"
                style={{
                    backgroundImage:
                        'linear-gradient(115deg, rgba(0,184,148,0.18), rgba(10,206,177,0.1), rgba(0,168,132,0.18))',
                    backgroundSize: '400% 400%',
                    filter: 'blur(80px)',
                }}
            />

            {/* 헤더 */}
            <motion.div
                initial={{ opacity: 1, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center mb-20"
            >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00c8b4]/10 text-[#00c8b4] text-sm font-medium">
                    <Wallet size={16} /> 실시간 자동 정산
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#0C3C35] leading-tight">
                    결제 후{' '}
                    <span className="text-[#00c8b4]">
                        입금까지 <br className="block md:hidden" />
                        단 15분
                    </span>
                </h2>
                <p className="mt-5 text-[#2E5C54]/80 text-lg leading-relaxed">
                    결제 승인 → 검증 → 입금
                    <br />
                    모든 과정이 자동으로 연결됩니다.
                </p>
            </motion.div>

            {/* 단계 카드 */}
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {stages.map((s, i) => {
                    const isActive = i === step;
                    const cardClass = isActive
                        ? 'border-[#00c8b4]/60 bg-white shadow-[0_10px_30px_rgba(0,200,155,0.14)] scale-[1.02]'
                        : 'border-[#C4F7EC] bg-[#F8FFFD] opacity-85';

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 1, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className={`relative flex-1 p-6 rounded-2xl border backdrop-blur-sm duration-500 md:min-h-[210px] ${cardClass}`}
                        >
                            {!reduceMotion && isActive && (
                                <motion.div
                                    /*initial={{ opacity: 0.12, scale: 0.96 }}
                                    animate={{
                                        opacity: [0.15, 0.3, 0.15],
                                        scale: [0.98, 1.04, 0.98],
                                    }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}*/
                                    className="absolute inset-0 -z-10 rounded-2xl bg-[#00c8b4]/24 blur-2xl"
                                />
                            )}

                            <div
                                className={`flex items-center gap-3 ${isActive ? 'text-[#00c8b4]' : 'text-[#2E5C54]/60'
                                    }`}
                            >
                                <div
                                    className={`p-3 rounded-xl ${isActive ? 'bg-[#00c8b4]/10' : 'bg-[#C4F7EC]/30'
                                        }`}
                                >
                                    {s.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{s.title}</h3>
                            </div>

                            <p className="mt-3 text-[#2E5C54]/80 text-sm leading-relaxed">
                                {s.desc}
                            </p>

                            {i === 2 && (
                                <p className="mt-2 text-[#00a884] text-xs font-semibold">
                                    ※ PG 수수료 {feeRate.toFixed(2)}% 차감 후 입금됩니다.
                                </p>
                            )}

                            {isActive && (
                                <div className="mt-4 text-xs text-[#00c8b4] font-semibold tracking-wide">
                                    {s.sub}
                                </div>
                            )}

                            {i < stages.length - 1 && (
                                <div className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2">
                                    <ArrowRight
                                        size={20}
                                        className={
                                            isActive ? 'text-[#00c8b4]' : 'text-[#A7ECDD]'
                                        }
                                    />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* 금액 표시 */}
            <div className="mt-16 text-center">
                <motion.div
                    animate={
                        !reduceMotion && step === 2
                            ? {
                                scale: [1, 1.05, 1],
                                filter: [
                                    'brightness(1)',
                                    'brightness(1.12)',
                                    'brightness(1)',
                                ],
                            }
                            : { scale: 1, filter: 'brightness(1)' }
                    }
                    transition={{ duration: 0.7 }}
                    className="inline-block text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#00c8b4] via-[#00d0aa] to-[#00a884] bg-clip-text text-transparent drop-shadow-sm"
                >
                    <span ref={amountRef}>₩0</span>
                </motion.div>
                <p className="mt-3 text-[#2E5C54]/70 text-base">
                    {['결제 승인 중', '정산 검증 중', '입금 완료'][step]}
                </p>
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                className="mt-20 max-w-4xl mx-auto text-center rounded-2xl border border-[#C4F7EC] bg-[#FFFFFF] p-10 shadow-[0_6px_30px_rgba(0,200,155,0.08)]"
            >
                <p className="text-[#2E5C54]/80 text-lg mb-5">
                    결제에서 입금까지 단 15분.
                    <br />
                    현금 흐름을 끊김 없이 이어드립니다.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00c89b] to-[#00b894] hover:from-[#00b894] hover:to-[#00a884] text-white font-semibold shadow-[0_8px_20px_rgba(0,184,148,0.25)]"
                >
                    빠른 정산 문의하기 <ArrowRight size={16} />
                </a>
            </motion.div>
        </section>
    );
}
