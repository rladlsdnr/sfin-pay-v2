"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    FileText,
    Lock,
    Shield,
    KeyRound,
    Fingerprint,
    Server,
    Bug,
    Eye,
    Cpu,
    BookOpen,
} from "lucide-react";

/**
 * 🛡️ SFIN PAY — Security Policy (Mint Theme)
 * - TechSupportProMint의 컬러/레이아웃/타이포 스타일을 그대로 유지
 * - PG/결제/정산 시스템에 필요한 보안규정 포함
 * - ISMS-P / PCI-DSS / 전자금융거래법 기반의 보안 항목으로 구성
 * - 코드 전체 치밀하게 구성된 프로덕션용 문서 페이지
 */

export default function SecurityPolicy(): JSX.Element {
    const fadeUp = (i = 0, d = 0.45) => ({
        initial: { opacity: 1, y: 14 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: d, delay: 0.05 * i },
    });

    const SectionTitle = ({
        title,
        kicker,
        sub,
    }: {
        title: string;
        kicker?: string;
        sub?: string;
    }) => (
        <div className="text-center mb-10">
            {kicker && (
                <div className="text-xs font-semibold tracking-wider text-[#059669] uppercase">
                    {kicker}
                </div>
            )}
            <h2 className="text-[26px] md:text-3xl font-bold text-[#0f766e] mt-1">
                {title}
            </h2>
            {sub && (
                <p className="text-[15px] text-gray-700 mt-2 max-w-2xl mx-auto">
                    {sub}
                </p>
            )}
        </div>
    );

    const Block = ({
        title,
        icon,
        children,
    }: {
        title: string;
        icon: React.ReactNode;
        children: React.ReactNode;
    }) => (
        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6 md:p-7 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
                {icon}
                <div className="font-semibold text-[#042f2e] text-[17px]">
                    {title}
                </div>
            </div>
            <div className="text-[15px] text-gray-700 leading-[1.65]">
                {children}
            </div>
        </div>
    );

    return (
        <section className="min-h-screen bg-gradient-to-b from-white via-[#f0fdfa] to-[#ecfdf3] px-6 md:px-14 py-20">
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 1, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecfdf5] text-[#0f766e] text-xs font-semibold mb-3 border border-[#bbf7f0]">
                    <ShieldCheck className="w-4 h-4" />
                    SFIN PAY 보안정책
                </div>
                <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#047857] tracking-tight">
                    Security Policy
                </h1>
                <p className="text-gray-700 mt-3 text-[15px] max-w-2xl mx-auto">
                    SFIN PAY는 정보보안을 최우선 가치로 두고, 안전한 결제·정산·납부 서비스 제공을 위한
                    기술적·관리적 보호조치를 지속적으로 강화하고 있습니다.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                {/* 1. 개요 */}
                <SectionTitle
                    kicker="Article 1"
                    title="보안 정책의 목적"
                    sub="고객·가맹점·거래 정보의 위·변조·유출을 방지하기 위한 회사의 보안 원칙입니다."
                />

                <motion.div {...fadeUp(0)}>
                    <Block
                        title="정책 목적"
                        icon={<Shield className="w-5 h-5 text-[#10b981]" />}
                    >
                        본 보안정책은 SFIN PAY가 제공하는 결제/정산/납부 서비스와 관련하여
                        회사가 준수하는 보안 기준, 역할, 책임, 기술적 조치를 정의합니다.
                    </Block>
                </motion.div>

                {/* 2. 접근 통제(Access Control) */}
                <SectionTitle kicker="Article 2" title="접근 통제 (Access Control)" />

                <motion.div {...fadeUp(1)}>
                    <Block
                        title="1) 권한 분리 및 최소 권한 원칙"
                        icon={<KeyRound className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>업무 역할에 따른 최소 권한 원칙 적용</li>
                            <li>L1 → L2 → 팀장 레벨의 점진적 권한 구조</li>
                            <li>정산/가맹점 정보/결제 데이터 영역은 권한별 접근 분리</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(2)}>
                    <Block
                        title="2) 관리자 인증 절차"
                        icon={<Fingerprint className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>MFA(2단계 인증) 적용</li>
                            <li>IP 기반 접근 제한(IP Allowlist)</li>
                            <li>비인가 단말기 접근 차단</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 3. 데이터 보안(Data Security) */}
                <SectionTitle kicker="Article 3" title="데이터 보안 (Data Security)" />

                <motion.div {...fadeUp(3)}>
                    <Block
                        title="1) 개인정보·거래정보 암호화"
                        icon={<Lock className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>전송 구간 TLS/HTTPS 암호화</li>
                            <li>정산 계좌·카드 식별정보 마스킹 및 암호화</li>
                            <li>비밀번호/토큰은 단방향 암호화 또는 안전한 저장소에 보관</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(4)}>
                    <Block
                        title="2) 데이터 분리 저장"
                        icon={<Server className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>업무 데이터·로그·결제 정보 물리적/논리적 분리</li>
                            <li>고객 정보와 민감 거래 정보는 별도 DB에 저장</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 4. 감지 및 모니터링 */}
                <SectionTitle kicker="Article 4" title="이상징후 감지 및 모니터링" />

                <motion.div {...fadeUp(5)}>
                    <Block
                        title="1) 실시간 관제"
                        icon={<Eye className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>오류율·지연율·웹훅 실패율 실시간 모니터링</li>
                            <li>FDS 기반 이상 거래 탐지</li>
                            <li>오입금·중복 납부 자동 감지</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(6)}>
                    <Block
                        title="2) 로그 무결성 보장"
                        icon={<Cpu className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>중요 로그 위·변조 방지 저장</li>
                            <li>접근 로그·거래 로그 1년 이상 보관</li>
                            <li>포렌식 추적이 가능하도록 상세 로그 수집</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 5. 위협 대응 및 취약점 관리 */}
                <SectionTitle
                    kicker="Article 5"
                    title="위협 대응 및 취약점 관리"
                />

                <motion.div {...fadeUp(7)}>
                    <Block
                        title="1) 취약점 점검"
                        icon={<Bug className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>정기적 취약점 스캔 및 패치</li>
                            <li>OWASP Top 10 기반 웹 취약점 점검</li>
                            <li>외부 보안 전문기관 진단 수행</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(8)}>
                    <Block
                        title="2) 장애 대응 및 SEV 관리"
                        icon={<ShieldCheck className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>SEV-1/2/3 기준의 인시던트 대응 체계 유지</li>
                            <li>대응 절차: 감지 → 통지 → 완화 → 복구 → RCA 공개</li>
                            <li>대규모 장애 시 상태 페이지/문자/이메일 공지</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 6. 인프라 보안 */}
                <SectionTitle kicker="Article 6" title="인프라 보안" />

                <motion.div {...fadeUp(9)}>
                    <Block
                        title="1) 네트워크 보안"
                        icon={<Server className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>WAF(Web Application Firewall) 적용</li>
                            <li>도메인/HTTPS 인증서 자동 갱신</li>
                            <li>클라우드 보안 그룹(Security Group) 제한 적용</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(10)}>
                    <Block
                        title="2) 백업 및 재해복구"
                        icon={<Shield className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>DB 정기 백업 및 암호화 저장</li>
                            <li>재해복구(DR) 절차 보유</li>
                            <li>정산·거래 데이터는 다중 가용 영역에 저장</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 7. 직원 및 내부 보안 */}
                <SectionTitle kicker="Article 7" title="내부 보안 및 교육" />

                <motion.div {...fadeUp(11)}>
                    <Block
                        title="내부 보안 규정"
                        icon={<FileText className="w-5 h-5 text-[#10b981]" />}
                    >
                        <ul className="list-disc list-inside space-y-1">
                            <li>보안 서약서/기밀 유지 서약서 작성 의무</li>
                            <li>반기별 정보보안 교육 실시</li>
                            <li>퇴사자 계정 즉시 회수 및 접근 차단</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 8. 문의처 */}
                <SectionTitle kicker="Article 8" title="보안 문의처" />

                <motion.div {...fadeUp(12)}>
                    <Block
                        title="문의 및 신고"
                        icon={<ShieldCheck className="w-5 h-5 text-[#10b981]" />}
                    >
                        <p>보안 관련 문의·신고는 아래 채널을 통해 가능합니다:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>
                                <b>이메일:</b> sfinpay@gmail.com
                            </li>
                            <li>
                                <b>대표번호:</b> 010-6672-3499
                            </li>
                            <li>
                                <b>주소:</b> 서울특별시 영등포구 여의대방로 67길11 5층 에이 5-41호
                            </li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 마지막 부칙 */}
                <SectionTitle kicker="Addendum" title="부칙" />
                <motion.div {...fadeUp(13)}>
                    <Block
                        title="시행일"
                        icon={<Shield className="w-5 h-5 text-[#10b981]" />}
                    >
                        본 보안정책은 <b>2025년 1월 1일</b>부터 시행합니다.
                    </Block>
                </motion.div>

                <div className="text-right text-sm text-gray-500 mt-6">
                    마지막 업데이트: 2025-01-01
                </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#10b981] text-white rounded-xl font-semibold hover:bg-[#059669] transition"
                >
                    <BookOpen className="w-4 h-4" />
                    메인으로 돌아가기
                </Link>
            </div>
        </section>
    );
}
