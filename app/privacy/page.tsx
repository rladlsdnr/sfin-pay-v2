"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, Shield, BookOpen } from "lucide-react";

/**
 * 📘 SFIN PAY — 개인정보처리방침 (Mint Theme)
 * - TechSupportProMint 스타일을 그대로 적용한 민트 기반 법적 문서 페이지
 * - 결제/정산/납부 링크/미수 고지 등 PG 특화 조항 포함
 * - D+0/D+1 정산 구조 반영
 * - 문단 구조, 테이블, 목록까지 모두 기업 법무팀 제출 기준으로 구성
 */

export default function PrivacyPolicy(): JSX.Element {
    const fadeUp = (i = 0, d = 0.45) => ({
        initial: { opacity: 0, y: 14 },
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
        children,
    }: {
        title: string;
        children: React.ReactNode;
    }) => (
        <div className="rounded-2xl border border-[#e6fff9] bg-white p-6 md:p-7 mb-8 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
                <Lock className="w-5 h-5 text-[#10b981]" />
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
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecfdf5] text-[#0f766e] text-xs font-semibold mb-3 border border-[#bbf7f0]">
                    <Shield className="w-4 h-4" />
                    개인정보 처리방침
                </div>
                <h1 className="text-[32px] md:text-[40px] font-extrabold text-[#047857] tracking-tight">
                    SFIN PAY 개인정보처리방침
                </h1>
                <p className="text-gray-700 mt-3 text-[15px] max-w-2xl mx-auto">
                    SFIN PAY는 「개인정보 보호법」, 「정보통신망법」 등 관련 법령을 준수하며,
                    이용자의 개인정보를 안전하게 보호하기 위해 최선을 다하고 있습니다.
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                {/* 1. 수집하는 개인정보 항목 */}
                <SectionTitle
                    kicker="Article 1"
                    title="수집하는 개인정보 항목"
                    sub="SFIN PAY 서비스 제공을 위해 필요한 최소한의 개인정보만을 수집합니다."
                />

                <motion.div {...fadeUp(0)}>
                    <Block title="1) 가맹점(사업자) 정보">
                        <ul className="list-disc list-inside space-y-1">
                            <li>상호명, 대표자명, 사업자등록번호</li>
                            <li>정산 계좌 정보(은행명, 계좌번호, 예금주)</li>
                            <li>담당자 연락처(전화번호·이메일)</li>
                            <li>계약 및 서비스 설정 정보(D+0/D+1 정산 옵션 등)</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(1)}>
                    <Block title="2) 이용자(고객) 정보">
                        <ul className="list-disc list-inside space-y-1">
                            <li>성명(또는 보호자명), 연락처, 고지 대상 정보</li>
                            <li>결제 정보(카드사·마스킹 카드번호·승인번호·거래일시)</li>
                            <li>거래 금액·납부 회차·미수 금액</li>
                            <li>웹훅/링크 결제 이용 시 접속 로그(IP, User-Agent 등)</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(2)}>
                    <Block title="3) 자동 수집 항목(보안/관제 목적)">
                        <ul className="list-disc list-inside space-y-1">
                            <li>서비스 로그(요청·응답 코드, 오류 코드)</li>
                            <li>장애 감지 이벤트(SEV 레벨, 상태 정보)</li>
                            <li>쿠키, 접속 IP, 기기 정보</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 2. 개인정보 수집 방법 */}
                <SectionTitle
                    kicker="Article 2"
                    title="개인정보의 수집 방법"
                />

                <motion.div {...fadeUp(3)}>
                    <Block title="수집 방법">
                        <ul className="list-disc list-inside space-y-1">
                            <li>회원가입 및 가맹점 계약 체결 시</li>
                            <li>납부 링크·고지서·결제 페이지 이용 시</li>
                            <li>고객센터 상담, 이메일 문의 시</li>
                            <li>자동 수집 시스템을 통한 로그 수집 시</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 3. 개인정보의 이용 목적 */}
                <SectionTitle
                    kicker="Article 3"
                    title="개인정보의 이용 목적"
                />

                <motion.div {...fadeUp(4)}>
                    <Block title="주요 이용 목적">
                        <ul className="list-disc list-inside space-y-1">
                            <li>결제 처리 및 납부 승인</li>
                            <li>D+0/D+1 정산 수행 및 정산 리포트 생성</li>
                            <li>납부 링크·고지·알림(리마인드, 연체 안내 등) 발송</li>
                            <li>계정 관리, 본인확인, 상담 기록 관리</li>
                            <li>부정 거래 탐지 및 오입금 방지</li>
                            <li>서비스 개선, 통계 분석, 오류 모니터링</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 4. 개인정보 보유 및 이용 기간 */}
                <SectionTitle
                    kicker="Article 4"
                    title="개인정보 보유 및 이용 기간"
                />

                <motion.div {...fadeUp(5)}>
                    <Block title="보유 기간 기준">
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                <b>전자상거래법</b> : 결제 기록 5년 보관
                            </li>
                            <li>
                                <b>전자금융거래법</b> : 금융거래 기록 5년 보관
                            </li>
                            <li>
                                <b>소비자 불만·분쟁 처리</b> : 3년
                            </li>
                            <li>
                                <b>서비스 이용 기록/로그</b> : 1년
                            </li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 5. 개인정보 제공 및 위탁 */}
                <SectionTitle
                    kicker="Article 5"
                    title="개인정보의 제공 및 위탁"
                />

                <motion.div {...fadeUp(6)}>
                    <Block title="1) 개인정보 제3자 제공">
                        <p>
                            회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
                            다만, 아래 경우는 예외로 합니다:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>이용자가 사전에 동의한 경우</li>
                            <li>법령에 따른 수사기관 제출 요청이 있을 시</li>
                            <li>금융사고 예방 목적의 합법적 요청</li>
                        </ul>
                    </Block>
                </motion.div>

                <motion.div {...fadeUp(7)}>
                    <Block title="2) 개인정보 처리 위탁">
                        <p>서비스 운영을 위해 다음과 같이 일부 업무를 위탁할 수 있습니다:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>결제대행/정산 시스템(카드사·PG 협력사)</li>
                            <li>SMS/MMS·카카오 알림톡 발송 업체</li>
                            <li>모니터링/장애 알림 시스템 운영 업체</li>
                            <li>클라우드 인프라(AWS, NCP 등)</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 6. 개인정보 파기 */}
                <SectionTitle
                    kicker="Article 6"
                    title="개인정보의 파기 절차 및 방법"
                />

                <motion.div {...fadeUp(8)}>
                    <Block title="파기 절차 및 방법">
                        <ul className="list-disc list-inside space-y-1">
                            <li>보유 기간 경과 또는 목적 달성 시 즉시 파기</li>
                            <li>전자적 파일: 복구 불가능한 방식으로 영구 삭제</li>
                            <li>종이 문서: 분쇄 또는 소각 처리</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 7. 이용자 권리 */}
                <SectionTitle
                    kicker="Article 7"
                    title="이용자 및 가맹점의 권리"
                />

                <motion.div {...fadeUp(9)}>
                    <Block title="권리 및 행사 방법">
                        <ul className="list-disc list-inside space-y-1">
                            <li>개인정보 열람·정정·삭제 요청 가능</li>
                            <li>처리 정지 및 동의 철회 가능</li>
                            <li>고지 및 알림 설정 변경 가능</li>
                            <li>가맹점 관리자 대시보드에서 개인정보 확인 가능</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 8. 개인정보 보호조치 */}
                <SectionTitle
                    kicker="Article 8"
                    title="개인정보의 안전성 확보 조치"
                />

                <motion.div {...fadeUp(10)}>
                    <Block title="보안 조치">
                        <ul className="list-disc list-inside space-y-1">
                            <li>암호화 저장(계좌·카드 식별 정보 등)</li>
                            <li>전송 구간 TLS 암호화</li>
                            <li>이상거래탐지(FDS) 및 오입금 감지 시스템</li>
                            <li>접근통제(IP 제한·권한 기반 접근)</li>
                            <li>주요 로그의 위·변조 방지</li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 9. 개인정보 관련 문의 */}
                <SectionTitle
                    kicker="Article 9"
                    title="개인정보 관련 문의처"
                />

                <motion.div {...fadeUp(11)}>
                    <Block title="문의처 안내">
                        <p>개인정보 관련 문의는 아래 채널을 통해 가능합니다:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>
                                <b>이메일:</b> support@sfinpay.co.kr
                            </li>
                            <li>
                                <b>대표번호:</b> 02-1234-5678
                            </li>
                            <li>
                                <b>주소:</b> 서울특별시 강남구 테헤란로 77, SFIN Tower 12F
                            </li>
                        </ul>
                    </Block>
                </motion.div>

                {/* 최종 조항 */}
                <SectionTitle
                    kicker="Addendum"
                    title="부칙"
                />

                <motion.div {...fadeUp(12)}>
                    <Block title="시행일">
                        본 개인정보처리방침은 <b>2025년 1월 1일</b>부터 시행합니다.
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
