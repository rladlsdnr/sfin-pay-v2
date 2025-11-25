'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    FileText,
    Users,
    CheckCircle,
    Globe2,
    Lock,
    Scale,
    Building2,
    Server,
    Handshake,
    BarChart3,
    Target,
    Lightbulb,
    HeartHandshake,
    BookOpen,
    Layers,
    Download,
    AlertTriangle,
    Clock3,
    Activity,
    Mail,
    MessageCircle,
} from 'lucide-react';

/**
 * ✅ Next.js App Router용 투명경영 보고서 페이지
 * - 기본 색상: SFIN PAY 민트톤
 * - 실제 법적 공시가 아니라, 웹사이트용 "투명경영/정책 허브"라는 느낌으로 구성
 */
export default function Page(): JSX.Element {
    useEffect(() => {
        if (typeof window !== 'undefined') window.scrollTo(0, 0);
    }, []);

    const fadeUp = (i = 0, d = 0.6) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: d, delay: 0.08 * i },
    });

    const SectionTitle = ({
        kicker,
        title,
        sub,
    }: {
        kicker?: string;
        title: string;
        sub?: string;
    }) => (
        <div className="text-center mb-12">
            {kicker && (
                <div className="text-xs font-semibold tracking-[0.18em] text-[#00B894] uppercase mb-2">
                    {kicker}
                </div>
            )}
            <h2 className="text-[26px] md:text-3xl font-extrabold text-[#0F2B26] text-[clamp(24px,4vw,30px)]">
                {title}
            </h2>
            {sub && (
                <p className="mt-3 text-[15px] md:text-base text-[#1f3b37]/80 max-w-3xl mx-auto leading-relaxed">
                    {sub}
                </p>
            )}
        </div>
    );

    const Pill = ({ children }: { children: React.ReactNode }) => (
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#E6FFF8] text-[#0B2723] text-[11px] font-medium border border-[#BBF7F0]">
            {children}
        </span>
    );

    return (
        <div className="min-h-screen bg-[#F9FFFE] text-[#0f2b26] pt-24 pb-24">
            {/* ──────────────────────── ① HEADER SECTION ──────────────────────── */}
            <section className="text-center px-6 md:px-16 py-24 bg-gradient-to-b from-[#EFFFFA] to-[#F9FFFE] border-b border-[#C8FFF4]">
                <motion.div
                    {...fadeUp(0)}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#BBF7F0] text-[#047857] text-xs font-semibold mb-5"
                >
                    <ShieldCheck size={16} />
                    투명경영 · 신뢰 · 책임
                </motion.div>

                <motion.h1
                    {...fadeUp(0.2)}
                    className="text-[clamp(30px,5vw,36px)] md:text-5xl font-extrabold mb-4 leading-tight"
                >
                    SFIN PAY{' '}
                    <span className="text-[#00C9A7]">투명경영 보고서 2025</span>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.3)}
                    className="text-[15px] md:text-lg text-[#145C52]/80 max-w-3xl mx-auto leading-relaxed"
                >
                    SFIN PAY는 결제 기술 회사가 아니라 <strong>신뢰 인프라</strong>를 만드는 회사라고
                    생각합니다.
                    <br className="hidden md:block" />
                    이 페이지는 서비스 안정성, 정보보호, 준법·컴플라이언스, ESG 활동을{' '}
                    <span className="font-semibold">한 눈에 이해할 수 있도록 정리한 공개 보고 허브</span>입니다.
                </motion.p>

                <motion.div
                    {...fadeUp(0.4)}
                    className="mt-8 flex flex-wrap justify-center gap-3 text-[11px]"
                >
                    <Pill>장애·사고 공개 정책</Pill>
                    <Pill>SLA/지표 기준 공개</Pill>
                    <Pill>ISMS/PCI DSS 대비 체계</Pill>
                    <Pill>가맹점 보호 원칙</Pill>
                    <Pill>ESG 및 사회적 책임</Pill>
                </motion.div>
            </section>

            {/* ──────────────────────── ② 핵심 원칙 (Pillars) ──────────────────────── */}
            <section className="px-6 md:px-16 py-16">
                <SectionTitle
                    kicker="Principles"
                    title="SFIN PAY 투명경영 4대 원칙"
                    sub="모든 정책과 의사결정은 아래 네 가지 원칙을 기준으로 설계·점검합니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            icon: <Scale className="w-6 h-6 text-[#00B894]" />,
                            title: '법규 준수 우선',
                            desc: '여신전문금융업법, 전자금융거래법, 개인정보보호법 등 관련 규제 준수를 서비스 설계의 최우선으로 둡니다.',
                        },
                        {
                            icon: <Lock className="w-6 h-6 text-[#00B894]" />,
                            title: '보안 By Design',
                            desc: '기획 단계부터 암호화·접근통제·로그감사를 반영하며, 사후 보정이 아닌 사전 설계를 지향합니다.',
                        },
                        {
                            icon: <BarChart3 className="w-6 h-6 text-[#00B894]" />,
                            title: '지표 기반 운영',
                            desc: '감에 의존하지 않고, 지연·오류·정산 지표를 기반으로 SLA/운영 개선을 반복합니다.',
                        },
                        {
                            icon: <HeartHandshake className="w-6 h-6 text-[#00B894]" />,
                            title: '상호 이익 구조',
                            desc: 'SFIN PAY · 가맹점 · 최종고객이 함께 이익을 보는 구조가 아니라면 사업을 진행하지 않습니다.',
                        },
                    ].map((p, i) => (
                        <motion.div
                            key={p.title}
                            {...fadeUp(i)}
                            className="rounded-2xl border border-[#BBF7F0] bg-white p-5 shadow-sm"
                        >
                            <div className="mb-3">{p.icon}</div>
                            <div className="font-semibold text-[15px] text-[#0F2B26] mb-1">
                                {p.title}
                            </div>
                            <p className="text-[13px] text-[#1F3B37]/80 leading-relaxed">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ──────────────────────── ③ 지배구조 & 책임 ──────────────────────── */}
            <section className="px-6 md:px-16 py-16 bg-[#F2FFFB] border-y border-[#C8FFF4]">
                <SectionTitle
                    kicker="Governance"
                    title="지배구조와 책임 체계"
                    sub="투명한 의사결정과 이해관계자 보호를 위해 내부 위원회와 책임 구분을 명확히 운영합니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Building2 className="w-5 h-5 text-[#00B894]" />
                            <h3 className="font-semibold text-[15px] text-[#0F2B26]">
                                경영위원회
                            </h3>
                        </div>
                        <p className="text-[13px] text-[#1F3B37]/80 mb-3">
                            회사의 중장기 전략, 신규 사업, 대규모 투자를 검토·의결하는 기구입니다.
                        </p>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 연 4회 정기 회의 + 필요시 수시 소집</li>
                            <li>· 리스크·컴플라이언스 보고 정례화</li>
                            <li>· 외부 전문가 자문 제도 운영</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <ShieldCheck className="w-5 h-5 text-[#00B894]" />
                            <h3 className="font-semibold text-[15px] text-[#0F2B26]">
                                리스크·보안위원회
                            </h3>
                        </div>
                        <p className="text-[13px] text-[#1F3B37]/80 mb-3">
                            정보보호, 서비스 장애, 사기·부정거래 리스크를 통합 관리하는 위원회입니다.
                        </p>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 월 1회 정기 리스크 리뷰</li>
                            <li>· SEV-1/SEV-2 인시던트 필수 보고</li>
                            <li>· 연 1회 이상 모의 침해 대응 훈련</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(2)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Scale className="w-5 h-5 text-[#00B894]" />
                            <h3 className="font-semibold text-[15px] text-[#0F2B26]">
                                컴플라이언스 책임
                            </h3>
                        </div>
                        <p className="text-[13px] text-[#1F3B37]/80 mb-3">
                            관련 법규 및 카드사·금융기관 가이드라인을 준수하기 위한 내부 규정을 제정·개정합니다.
                        </p>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 여신전문금융업법·전자금융거래법 검토</li>
                            <li>· 개인정보보호·정보통신망법 정기 점검</li>
                            <li>· 임직원 대상 연 1회 이상 교육 필수</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────── ④ 법규 준수 & 인증 로드맵 ──────────────────────── */}
            <section className="px-6 md:px-16 py-16">
                <SectionTitle
                    kicker="Compliance"
                    title="법규 준수 및 인증 로드맵"
                    sub="국내외 결제·정보보호 규제 환경을 반영해, 단계별 인증 취득과 기준 상회를 목표로 합니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <FileText className="w-5 h-5 text-[#00B894]" />
                            <h3 className="font-semibold text-[15px] text-[#0F2B26]">
                                국내 규제·가이드라인
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5 mb-3">
                            <li>· 여신전문금융업법 및 하위 규정</li>
                            <li>· 전자금융거래법 및 감독규정</li>
                            <li>· 개인정보보호법·정보통신망법</li>
                            <li>· 금융보안원·카드사 보안 가이드라인</li>
                        </ul>
                        <p className="text-[12px] text-[#64748B]">
                            ※ 실제 라이선스·등록 현황은 계약·검토 단계에서 별도 안내문서로 제공합니다.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Server className="w-5 h-5 text-[#00B894]" />
                            <h3 className="font-semibold text-[15px] text-[#0F2B26]">
                                정보보호·보안 인증 로드맵
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5 mb-3">
                            <li>· ISMS/ISMS-P 수준의 관리체계 설계</li>
                            <li>· 결제 데이터 구간 PCI DSS 요구사항 준수 지향</li>
                            <li>· 클라우드 인프라(예: ISO 27001 인증 리전) 활용</li>
                            <li>· 연 1회 이상 외부 보안 진단 및 취약점 점검</li>
                        </ul>
                        <p className="text-[12px] text-[#64748B]">
                            ※ 인증 취득·갱신 현황은 추후 별도 공지 및 문서로 갱신됩니다.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────── ⑤ 서비스 신뢰성 & SLA ──────────────────────── */}
            <section className="px-6 md:px-16 py-16 bg-[#F2FFFB] border-y border-[#C8FFF4]">
                <SectionTitle
                    kicker="Reliability"
                    title="서비스 신뢰성 지표 & SLA 기준"
                    sub="가맹점이 안심하고 결제·정산을 운영할 수 있도록 명시적인 서비스 수준 목표를 제시합니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            label: '결제 API 가용성',
                            value: '99.95%',
                            desc: '월 단위 목표(월간 다운타임 22분 이내)',
                        },
                        {
                            label: '정산 배치 성공률',
                            value: '99.9%',
                            desc: '스케줄 기준 D+0 / D+1 정산 처리 비율',
                        },
                        {
                            label: '알림/웹훅 배달 성공률',
                            value: '99.2%',
                            desc: '3회 재시도 포함 최종 성공 기준',
                        },
                    ].map((m, i) => (
                        <motion.div
                            key={m.label}
                            {...fadeUp(i)}
                            className="rounded-2xl bg-white p-6 border border-[#BBF7F0] shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[13px] text-[#64748B]">{m.label}</span>
                                <Activity className="w-4 h-4 text-[#00B894]" />
                            </div>
                            <div className="text-[24px] font-extrabold text-[#0F2B26]">
                                {m.value}
                            </div>
                            <p className="text-[12px] text-[#1F3B37]/80 mt-1">{m.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    {...fadeUp(3)}
                    className="max-w-6xl mx-auto mt-8 rounded-2xl bg-white p-6 border border-[#BBF7F0]"
                >
                    <h3 className="text-[15px] font-semibold text-[#0F2B26] mb-3 flex items-center gap-2">
                        <Clock3 className="w-4 h-4 text-[#00B894]" />
                        장애 심각도(Severity) 및 대응 목표
                    </h3>
                    <div className="overflow-x-auto text-[13px]">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#EFFFFA] text-[#0F2B26]">
                                    <th className="p-2 border border-[#BBF7F0]">SEV</th>
                                    <th className="p-2 border border-[#BBF7F0]">영향도</th>
                                    <th className="p-2 border border-[#BBF7F0]">초동 대응 목표</th>
                                    <th className="p-2 border border-[#BBF7F0]">커뮤니케이션 원칙</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-[#BBF7F0] text-center font-semibold text-[#DC2626]">
                                        SEV-1
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        대부분의 결제/정산 기능이 사용 불가
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">5분 이내 온콜·핫라인 가동</td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        15분 이내 1차 공지, 30분 간격 진행 상황 공유
                                    </td>
                                </tr>
                                <tr className="bg-[#FAFFFD]">
                                    <td className="p-2 border border-[#BBF7F0] text-center font-semibold text-[#EA580C]">
                                        SEV-2
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        일부 가맹점·기능에서 지연·제한적 사용
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">15분 이내 대응 담당자 배정</td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        30~60분 주기로 상태 페이지/알림 업데이트
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-[#BBF7F0] text-center font-semibold text-[#16A34A]">
                                        SEV-3
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        기능 저하 또는 UI/정산 리포트 상의 오표기
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        다음 배포 주기 내 수정 목표
                                    </td>
                                    <td className="p-2 border border-[#BBF7F0]">
                                        주간 리포트·변경 내역에 반영
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </section>

            {/* ──────────────────────── ⑥ 장애·사고 공개 정책 ──────────────────────── */}
            <section className="px-6 md:px-16 py-16">
                <SectionTitle
                    kicker="Incidents"
                    title="장애·사고 공개 및 사후 보고"
                    sub="문제를 숨기기보다는, 빠르게 공유하고 투명하게 설명하는 것이 재발 방지의 출발점이라고 믿습니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-5 h-5 text-[#F97316]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                장애 발생 시 공개 원칙
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· SEV-1, SEV-2급 장애는 상태 페이지/공지로 외부에 공개</li>
                            <li>· 영향 범위, 기간, 원인 후보, 임시 완화 조치 명시</li>
                            <li>· 완전 복구 후, 재발 방지 대책을 포함한 요약 보고 공유</li>
                            <li>· 주요 가맹점에는 1:1 상세 보고서 제공 가능</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                포스트모템(Postmortem) 원칙
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 개인 비난이 아닌, 프로세스·시스템 관점에서 원인 분석</li>
                            <li>· “어떻게 막을 수 있었는가?”에 초점을 둔 액션 도출</li>
                            <li>· 재발 방지 과제의 담당자·기한을 명시해 추적</li>
                            <li>· 중요 장애는 가맹점/파트너와 공유 가능한 버전으로 정리</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    {...fadeUp(2)}
                    className="max-w-5xl mx-auto mt-8 rounded-2xl bg-white p-6 border border-[#BBF7F0]"
                >
                    <h3 className="text-[15px] font-semibold text-[#0F2B26] mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#00B894]" />
                        인시던트 타임라인 예시 (공개용 서술 포맷)
                    </h3>
                    <ol className="text-[13px] text-[#1F3B37]/85 space-y-2">
                        <li>
                            <strong>[00:00]</strong> 일부 가맹점에서 결제 승인 지연 증가 탐지 (p95 지연 3초 → 8초)
                        </li>
                        <li>
                            <strong>[00:05]</strong> SEV-2로 분류, 온콜·리스크·CS 채널에 동시 알림
                        </li>
                        <li>
                            <strong>[00:12]</strong> 외부 카드사 게이트웨이 지연 확인, 우회 라우팅 비율 상향
                        </li>
                        <li>
                            <strong>[00:25]</strong> 승인 성공률·지연 시간 정상화, 대기 요청 백필 처리 시작
                        </li>
                        <li>
                            <strong>[01:10]</strong> SEV-2 종료 선언, 24시간 이내 포스트모템 초안 배포
                        </li>
                    </ol>
                </motion.div>
            </section>

            {/* ──────────────────────── ⑦ 정보보호 & 개인정보 보호 ──────────────────────── */}
            <section className="px-6 md:px-16 py-16 bg-[#F2FFFB] border-y border-[#C8FFF4]">
                <SectionTitle
                    kicker="Security"
                    title="정보보호 및 개인정보 보호 체계"
                    sub="정산 계좌·결제 정보·개인 정보는 SFIN PAY가 가장 먼저 지켜야 할 자산입니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Lock className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">데이터 보호</h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 전 구간 TLS 암호화(HTTPS) 통신</li>
                            <li>· 저장 시 민감 정보 암호화(계좌·주민번호 등)</li>
                            <li>· 최소 권한 원칙(권한·역할 기반 접근제어)</li>
                            <li>· 중요 데이터 접근 내역 전량 로깅·점검</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Users className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">내부 통제</h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 신규 입사 시 정보보호·개인정보 교육 필수 수료</li>
                            <li>· 외부 반출·스크린샷·다운로드 정책 명시</li>
                            <li>· 계정 공유 금지 및 2단계 인증 적용</li>
                            <li>· 퇴사·이동 시 접근 권한 즉시 회수</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(2)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Globe2 className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                개인정보 처리 원칙
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 목적 외 이용·제공 금지, 최소 수집 원칙 준수</li>
                            <li>· 보유 기간 경과 후 안전한 파기 절차 운영</li>
                            <li>· 마케팅 활용 시 명시적 동의 및 옵트아웃 제공</li>
                            <li>· 개인정보처리방침을 통해 처리 현황 상시 공개</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────── ⑧ 리스크 관리 & 사기 방지 ──────────────────────── */}
            <section className="px-6 md:px-16 py-16">
                <SectionTitle
                    kicker="Risk"
                    title="리스크 관리와 사기·부정거래 방지"
                    sub="유동성 상품·정산 구조·결제 패턴을 함께 보며, 건전한 거래 흐름을 유지하는 것을 목표로 합니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                사전 심사 · 모니터링
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 업종·매출 규모·정산 주기·유동성 이용 패턴을 종합 심사</li>
                            <li>· 고위험 업종·비정상 패턴에 대한 추가 서류·확인 절차</li>
                            <li>· 월 단위 매출·취소·차지백 비율 모니터링</li>
                            <li>· 이상 징후 발견 시 정산 보류·추가 확인 프로세스 운영</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <BarChart3 className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                탐지·차단 체계
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 동일 IP/카드/기기 반복 결제 패턴 점검</li>
                            <li>· 비정상 고액 결제·짧은 주기의 취소 비율 모니터링</li>
                            <li>· 특정 기준 이상 위험도 시 추가 인증 또는 차단 처리</li>
                            <li>· 가맹점과의 리스크 공유·설명 체계 운영</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────── ⑨ ESG & 사회적 책임 ──────────────────────── */}
            <section className="px-6 md:px-16 py-16 bg-[#F2FFFB] border-y border-[#C8FFF4]">
                <SectionTitle
                    kicker="ESG"
                    title="ESG 및 사회적 책임"
                    sub="결제 인프라는 일상의 기반이기 때문에, SFIN PAY는 기술적 효율 이상의 가치를 추구합니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Globe2 className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">환경(E)</h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 클라우드 인프라 활용으로 데이터센터 효율성 극대화</li>
                            <li>· 페이퍼리스 정산·명세서 기능으로 종이 사용 절감</li>
                            <li>· 온라인 보고·원격 회의 우선 운영</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <HeartHandshake className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">사회(S)</h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 영세·소상공인 대상 합리적 수수료 체계 설계 지향</li>
                            <li>· 교육·비영리 영역에 대한 별도 지원 프로그램 검토</li>
                            <li>· 금융 취약 계층을 고려한 고객 안내 문구 설계</li>
                        </ul>
                    </motion.div>

                    <motion.div {...fadeUp(2)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Scale className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">지배구조(G)</h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>· 이해상충 가능성이 있는 제휴·상품에 대한 사전 검토</li>
                            <li>· 가맹점·파트너의 의견을 반영하는 피드백 채널 운영</li>
                            <li>· 주요 정책 변경 시 사전 고지 원칙 준수</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────── ⑩ 문서/자료 & FAQ ──────────────────────── */}
            <section className="px-6 md:px-16 py-16">
                <SectionTitle
                    kicker="Resources"
                    title="관련 문서 및 FAQ"
                    sub="세부적인 정책·지표·절차는 아래 자료를 통해 보다 깊이 있게 확인하실 수 있습니다."
                />

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    <motion.div {...fadeUp(0)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <Download className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                문서·레포트 예시
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5 mb-3">
                            <li>· 투명경영 개요자료 (요약 PDF)</li>
                            <li>· 장애·사고 공지 샘플 템플릿</li>
                            <li>· 정보보호·개인정보 보호 정책 요약본</li>
                            <li>· 정산·유동성 상품 구조 설명 자료</li>
                        </ul>
                        <p className="text-[12px] text-[#64748B]">
                            실제 계약·검토 시에는 개별 NDA 체결 후, 보다 상세한 정책·지표 자료를 제공합니다.
                        </p>
                    </motion.div>

                    <motion.div {...fadeUp(1)} className="rounded-2xl bg-white p-6 border border-[#BBF7F0]">
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-5 h-5 text-[#00B894]" />
                            <h3 className="text-[15px] font-semibold text-[#0F2B26]">
                                자주 묻는 질문(FAQ)
                            </h3>
                        </div>
                        <ul className="text-[13px] text-[#1F3B37]/85 space-y-1.5">
                            <li>
                                <strong>Q.</strong> 실제 SLA·가용성 수치는 어떻게 확인할 수 있나요?
                                <br />
                                <span className="text-[12px] text-[#64748B]">
                                    → 가맹 계약 시 월간·분기별 통계 자료를 제공하며, 장애 발생 시 별도 리포트를
                                    공유합니다.
                                </span>
                            </li>
                            <li>
                                <strong>Q.</strong> 사고가 났을 때 손해 보상 기준은 어떻게 되나요?
                                <br />
                                <span className="text-[12px] text-[#64748B]">
                                    → 개별 계약서 및 약관에서 보상 한도·범위를 명시하고, 실제 상황에 따라 협의합니다.
                                </span>
                            </li>
                            <li>
                                <strong>Q.</strong> 유동성 상품(매출 기반 단기 자금)의 리스크 관리는 어떻게 하나요?
                                <br />
                                <span className="text-[12px] text-[#64748B]">
                                    → 매출 흐름·카드사 리스크 신호·업종 특성을 함께 보고 한도·수수료·정산 속도를
                                    조정합니다.
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────────────── ⑪ 마무리 CTA ──────────────────────── */}
            <section className="px-6 md:px-16 pt-8 pb-24 bg-gradient-to-r from-[#ECFDF5] to-[#D1FAE5] border-t border-[#BBF7F0]">
                <motion.div
                    {...fadeUp(0)}
                    className="max-w-4xl mx-auto text-center space-y-4"
                >
                    <h2 className="text-[clamp(24px,4vw,30px)] font-extrabold text-[#065F46]">
                        더 깊이 있는 자료가 필요하신가요?
                    </h2>
                    <p className="text-[14px] md:text-[15px] text-[#145C52]/85 leading-relaxed">
                        SFIN PAY의 투명경영·보안·정책에 대해 보다 구체적인 수치·지표·자료가 필요하시다면,
                        <br className="hidden md:block" />
                        전담 매니저를 통해 별도의 설명·자료 제공 미팅을 요청하실 수 있습니다.
                    </p>

                    {/* 하단 CTA */}
                    <motion.div
                        {...fadeUp(2)}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.16 }}
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
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}
