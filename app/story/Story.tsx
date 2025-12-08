"use client";

import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Quote,
    Star,
    ThumbsUp,
    SmilePlus,
    Building2,
    BookOpen,
    Users,
    Stethoscope,
    Home,
    CalendarClock,
    ArrowUpRight,
    ArrowDownRight,
    HeartHandshake,
    MessageSquare,
    Sparkles,
    ShieldCheck,
    Layers,
    Clock3,
    Receipt,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

export default function CustomerStoriesMint(): JSX.Element {
    useEffect(() => window.scrollTo(0, 0), []);

    // Support 페이지와 동일한 패턴의 애니메이션
    const fadeUp = (d = 0) => ({
        initial: { opacity: 1, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: d },
    });

    /** 공용 컴포넌트 */
    const SectionTitle = ({
        kicker,
        title,
        sub,
    }: {
        kicker?: string;
        title: string;
        sub?: string;
    }) => (
        <div className="text-center mb-10">
            {kicker && (
                <div className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
                    {kicker}
                </div>
            )}
            <h2 className="text-[26px] md:text-3xl font-bold text-[#0b2723] mt-1">
                {title}
            </h2>
            {sub && (
                <p className="text-[15px] text-[#1e3a34]/80 mt-2 max-w-3xl mx-auto">
                    {sub}
                </p>
            )}
        </div>
    );

    const Pill = ({ children }: { children: React.ReactNode }) => (
        <span className="px-2.5 py-1 rounded-lg border border-emerald-100 bg-white text-emerald-800 text-xs">
            {children}
        </span>
    );

    const Sparkline = ({
        data = [],
        width = 72,
        height = 24,
        strokeWidth = 1.6,
    }: {
        data?: number[];
        width?: number;
        height?: number;
        strokeWidth?: number;
    }) => {
        const path = useMemo(() => {
            if (!data.length) return "";
            const max = Math.max(...data);
            const min = Math.min(...data);
            const norm = (v: number) =>
                height - ((v - min) / (max - min || 1)) * (height - 2) - 1;
            const step = (width - 2) / (data.length - 1 || 1);
            return data
                .map((v, i) => `${i === 0 ? "M" : "L"} ${1 + i * step} ${norm(v)}`)
                .join(" ");
        }, [data, width, height]);

        return (
            <svg
                width={width}
                height={height}
                role="img"
                aria-label="추세 스파크라인"
                className="block"
            >
                <path
                    d={path}
                    fill="none"
                    stroke="#10b981"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
            </svg>
        );
    };

    const TrendBadge = ({ delta = 0 }: { delta?: number }) => {
        const Up = <ArrowUpRight className="w-3.5 h-3.5" />;
        const Down = <ArrowDownRight className="w-3.5 h-3.5" />;
        const isUp = delta >= 0;
        return (
            <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${isUp
                    ? "bg-[#ecfdf3] text-emerald-800"
                    : "bg-[#fef2f2] text-red-800"
                    }`}
                aria-label={`전월 대비 ${Math.abs(delta).toFixed(1)}% ${isUp ? "개선" : "악화"
                    }`}
            >
                {isUp ? Up : Down}
                {Math.abs(delta).toFixed(1)}%
            </span>
        );
    };

    const KPICard = ({
        icon,
        label,
        value,
        unit,
        delta,
        sub,
        series,
    }: {
        icon: React.ReactNode;
        label: string;
        value: string;
        unit?: string;
        delta: number;
        sub?: string;
        series: number[];
    }) => (
        <div className="rounded-2xl border border-[#a7f3d0]/70 bg-white p-4 md:p-5 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-emerald-700">{icon}</span>
                    <span className="text-[12px] text-[#1e3a34]/80">{label}</span>
                </div>
                <TrendBadge delta={delta} />
            </div>
            <div className="flex items-end justify-between">
                <div>
                    <div className="text-[22px] md:text-[24px] leading-none font-extrabold text-[#0b2723]">
                        {value}
                        {unit && (
                            <span className="text-[13px] font-semibold text-[#1e3a34]/70 ml-1">
                                {unit}
                            </span>
                        )}
                    </div>
                    {sub && <div className="text-[11px] text-[#1e3a34]/60 mt-1">{sub}</div>}
                </div>
                <Sparkline data={series} />
            </div>
        </div>
    );

    const SoftCard = ({
        children,
        className = "",
    }: {
        children: React.ReactNode;
        className?: string;
    }) => (
        <div
            className={`rounded-2xl border border-[#a7f3d0]/70 bg-white/90 backdrop-blur-sm p-6 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition ${className}`}
        >
            {children}
        </div>
    );

    const RatingStars = ({ score }: { score: number }) => {
        const full = Math.floor(score);
        const hasHalf = score - full >= 0.5;
        const total = 5;
        return (
            <div className="flex items-center gap-1">
                {Array.from({ length: total }).map((_, i) => {
                    if (i < full)
                        return (
                            <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                        );
                    if (i === full && hasHalf)
                        return <Star key={i} className="w-4 h-4 text-gray-400" />;
                    return <Star key={i} className="w-4 h-4 text-gray-200" />;
                })}
                <span className="text-[12px] text-[#1e3a34]/70 ml-1">
                    {score.toFixed(1)}/5.0
                </span>
            </div>
        );
    };

    /** 데이터 정의 */
    const heroBadges = [
        { icon: <ShieldCheck className="w-4 h-4" />, text: "실제 가맹점 후기, 개인정보 비식별 처리" },
        { icon: <SmilePlus className="w-4 h-4" />, text: "‘생각보다 편하다’는 표현이 가장 많음" },
        { icon: <Layers className="w-4 h-4" />, text: "월세·학원비·과외비·의원 등 다양한 업종" },
        { icon: <Clock3 className="w-4 h-4" />, text: "D+0/D+1 정산 환경에서의 실제 경험" },
    ];

    const kpis = [
        { label: "전체 만족도", value: "4.7", unit: "/5.0", delta: 0.3, sub: "마지막 6개월 기준", icon: <SmilePlus className="w-5 h-5" />, series: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7] },
        { label: "재이용 의사", value: "93", unit: "%", delta: 4.0, sub: "“계속 사용하겠다” 응답 비율", icon: <ThumbsUp className="w-5 h-5" />, series: [86, 88, 89, 90, 92, 93] },
        { label: "추천 의사(NPS)", value: "+56", unit: "", delta: 7.0, sub: "지인/동료에게 추천 의향", icon: <HeartHandshake className="w-5 h-5" />, series: [39, 42, 45, 47, 51, 56] },
        { label: "평균 사용 기간", value: "14.3", unit: "개월", delta: 2.4, sub: "중도 해지 가맹점 제외", icon: <CalendarClock className="w-5 h-5" />, series: [9.1, 10.4, 11.3, 12.7, 13.5, 14.3] },
    ];

    const personas = [
        { icon: <Home className="w-6 h-6" />, label: "원룸 건물주 · 관리인", name: "김민* 건물주", region: "경기 고양시 · 60세대 원룸", quote: "카톡으로 월세 안내를 보내고, 안 낸 세대만 다시 보내니까 ‘누가 냈는지’ 직접 확인하러 다니는 일이 거의 없어졌습니다.", tags: ["월세·관리비", "D+1 정산", "연체 리마인드"] },
        { icon: <BookOpen className="w-6 h-6" />, label: "입시/예체능 학원", name: "이** 원장님", region: "서울 강남구 · 입시학원", quote: "반별로 한번에 수강료 고지서를 만들고, 보호자 카톡으로 바로 보내니 ‘오늘 얼마 내야 하는지’ 헷갈려 하시는 분이 거의 없습니다.", tags: ["학원비", "분할 납부", "보호자 카카오 연동"] },
        { icon: <Users className="w-6 h-6" />, label: "과외·레슨 선생님", name: "박*진 선생님", region: "온라인 플랫폼 · 개인 과외", quote: "[이체 부탁드려요] 문자를 적을 필요가 없고, 수업 미뤄진 날도 바로 금액을 조정해서 보낼 수 있는 점이 좋습니다.", tags: ["과외비", "부분 차감", "QR/URL 결제"] },
        { icon: <Stethoscope className="w-6 h-6" />, label: "의원/클리닉", name: "정** 원장님", region: "인천 · 피부과 의원", quote: "시술 패키지를 분할로 받는 환자분들이 많아서, 회차별 미수금이 자동으로 정리되는 기능이 특히 도움이 됐습니다.", tags: ["의료 미수금", "패키지 분납", "안내장 PDF"] },
    ];

    const testimonialBlocks = [
        {
            id: "A01",
            industry: "주거/부동산",
            title: "“월세 독촉 느낌보다는 ‘안내’에 가깝게 바뀌었습니다.”",
            nameMasked: "김민* 건물주",
            location: "경기 고양시 · 다가구 주택",
            settlement: "D+1 정산",
            before: ["입금 내역을 엑셀로 직접 대조", "납부일이 지나면 일일이 전화/문자 안내", "관리비/보증금/수리비 구분이 어려움"],
            after: ["세입자별 납부 링크 자동 생성", "연체 3·7·14일 전후 단계별 안내", "항목별(월세/관리비/기타) 자동 구분 리포트"],
            highlight: "‘독촉이 아니라 안내’에 가깝게 톤을 잡을 수 있어서, 세입자와의 관계에 대한 부담이 줄었습니다.",
            score: 4.8,
            keywords: ["월세 자동 고지", "연체 관리", "관계 부담 완화"],
        },
        {
            id: "B02",
            industry: "교육/학원",
            title: "“수강료 안내를 빼먹을까 봐 걱정하던 스트레스가 사라졌습니다.”",
            nameMasked: "이** 원장님",
            location: "서울 강남구 · 입시학원",
            settlement: "D+0/D+1 혼합",
            before: ["반마다 다른 수강료, 수기로 문자 발송", "형제/재등록 할인 반영 누락 빈번", "카드/계좌 납부 내역 집계에 시간 소요"],
            after: ["반/학생 기준 일괄 고지서 생성", "할인 조건을 사전에 설정해 자동 반영", "날짜·반·결제수단별 리포트를 버튼 한 번에 다운로드"],
            highlight: "새로 온 선생님도 바로 쓸 수 있을 정도로 단순해서, ‘누가 맡아도 돌릴 수 있는 시스템’이 됐다는 점이 제일 큽니다.",
            score: 4.9,
            keywords: ["수강료 고지 자동화", "할인 조건", "다운로드 리포트"],
        },
        {
            id: "C03",
            industry: "개인 레슨/과외",
            title: "“수업 일정이 바뀌어도, 금액을 다시 계산할 필요가 없습니다.”",
            nameMasked: "박*진 선생님",
            location: "온라인/오프라인 병행 · 개인 과외",
            settlement: "D+1 정산",
            before: ["수업 연기/취소 시 매번 금액 재계산", "카톡으로 계좌 안내 후 확인 요청", "정산일이 제각각이라 월말에 정리 스트레스"],
            after: ["출결/일정에 따라 자동으로 차감 금액 반영", "링크 한 번으로 결제 수단 선택 가능", "월 단위 정산 리포트로 회고 및 세무 준비"],
            highlight: "수업에 쓸 에너지를 ‘돈 계산’에 쓰지 않아도 돼서, 장기 수강생 관리에 더 신경 쓸 수 있게 됐습니다.",
            score: 4.6,
            keywords: ["부분 차감", "링크 결제", "월말 정산"],
        },
        {
            id: "D04",
            industry: "의료/클리닉",
            title: "“시술 패키지 분납이 정리되지 않아 생기던 오해가 줄었습니다.”",
            nameMasked: "정** 원장님",
            location: "인천 · 피부과 의원",
            settlement: "D+0 정산",
            before: ["패키지/단품 시술이 혼합된 결제 내역", "환자가 본인 잔여 횟수를 잘 모르는 경우 다수", "미수금 관리가 진료실/카운터에서 중복 업무"],
            after: ["패키지 기준 회차/금액 자동 분리", "환자용 안내장과 영수증을 동시에 발행", "미수금 기준으로만 필터링한 리스트 확인"],
            highlight: "금액에 대한 오해가 줄어드니, 진료·상담에 집중하는 분위기가 자연스럽게 만들어졌습니다.",
            score: 4.7,
            keywords: ["패키지 관리", "미수금 필터", "안내장/영수증"],
        },
    ];

    const keywordCloud = [
        "생각보다 단순함",
        "월말 정산이 편해짐",
        "가맹점 지원 응답이 빠름",
        "연체 관리 스트레스 감소",
        "보호자/세입자와의 톤앤매너 개선",
        "현 시스템과 나란히 쓰기 쉬움",
        "처음 쓰는 직원도 금방 익힘",
        "정산 D+0/D+1 옵션 유연함",
    ];

    const reviewProcess = [
        { title: "1. 실제 이용 가맹점만 대상", desc: "실제 결제/정산이 진행된 가맹점만을 대상으로 사용 경험을 요청합니다." },
        { title: "2. 개인정보 비식별 처리", desc: "이름, 상호, 주소, 연락처는 필요한 범위 내에서 일부 마스킹 처리합니다." },
        { title: "3. 내용 검수 최소화", desc: "오탈자나 과도한 개인정보 노출만 정정하며, 어투·평가는 최대한 그대로 유지합니다." },
        { title: "4. 정기적인 업데이트", desc: "업종/규모가 편중되지 않도록, 분기마다 신규 후기와 오래된 후기를 교체합니다." },
    ];

    const contactShortcuts = [
        { label: "도입 상담", desc: "우리 업종에 비슷한 사례가 있는지, 실제 화면을 보며 안내해드립니다.", to: "/inquiry/contract", icon: <Phone className="w-5 h-5" /> },
        { label: "기술 문의", desc: "기존 시스템과 어떻게 연동할 수 있는지, 샘플/문서와 함께 설명드립니다.", to: "/inquiry/integration", icon: <MessageSquare className="w-5 h-5" /> },
        { label: "자료 요청", desc: "내부 보고용으로 활용할 수 있는 PDF 요약자료를 이메일로 받아보실 수 있습니다.", to: "/support", icon: <Mail className="w-5 h-5" /> },
    ];

    return (
        <section className="min-h-screen bg-[#ecfdf5] text-[#0b2723]">
            {/* HERO */}
            <div className="pt-32 pb-16 px-6 md:px-16 bg-gradient-to-b from-[#f0fdfa] to-[#ecfdf5] border-b border-[#a7f3d0]/50 text-center">
                <motion.h1
                    {...fadeUp(0)}
                    className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[clamp(30px,5vw,36px)]"
                >
                    고객 후기
                </motion.h1>
                <motion.p
                    {...fadeUp(0.2)}
                    className="text-lg md:text-xl text-[#1e3a34]/80 max-w-3xl mx-auto"
                >
                    실제 가맹점에서 SFIN PAY를 사용해 본 경험을, 개인정보를 안전하게 비식별 처리하여 정리했습니다.
                    과장된 문구보다는 현장에서 자주 나오는 표현 그대로 담으려고 했습니다.
                </motion.p>

                <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {heroBadges.map((b, i) => (
                        <motion.span
                            key={b.text}
                            {...fadeUp(0.1 * i)}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a7f3d0]/70 bg-white/80 text-[13px] md:text-sm text-emerald-800"
                        >
                            <span className="text-emerald-700">{b.icon}</span>
                            {b.text}
                        </motion.span>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-center gap-3">
                    <Link
                        href="/support"
                        className="px-6 py-3 rounded-xl 
              bg-gradient-to-r from-[#00c89b] to-[#00b894] 
              hover:from-[#00b894] hover:to-[#00a884]
              text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                        우리 업종 사례 상담하기
                    </Link>
                    <Link
                        href="/inquiry/integration"
                        className="px-6 py-3 rounded-xl bg-white border border-[#a7f3d0]/70 text-emerald-800 font-semibold hover:bg-[#f0fdfa] transition focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                        기술 연동 문의하기
                    </Link>
                </div>
            </div>

            {/* 요약 KPI 섹션 */}
            <div className="py-24 px-6 md:px-16">
                <SectionTitle
                    kicker="Overview"
                    title="숫자로 보는 고객 경험"
                    sub="후기 텍스트만으로는 체감하기 어려운 부분을, 주요 지표로 함께 정리했습니다."
                />
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {kpis.map((k, i) => (
                        <motion.div key={k.label} {...fadeUp(0.1 * i)}>
                            <KPICard {...k} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 페르소나 */}
            <div className="py-24 px-6 md:px-16 bg-[#f0fdfa] border-y border-[#a7f3d0]/50">
                <SectionTitle
                    kicker="Personas"
                    title="어떤 분들이 사용하고 있을까요?"
                    sub="규모가 크지 않은 팀·사업자 분들이 ‘큰 시스템’ 없이도 운영을 정리하기 위해 사용하고 있습니다."
                />
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {personas.map((p, i) => (
                        <motion.div key={p.label} {...fadeUp(0.1 * i)}>
                            <SoftCard>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                                        {p.icon}
                                    </div>
                                    <div className="text-[13px] font-semibold text-emerald-800">
                                        {p.label}
                                    </div>
                                </div>
                                <div className="text-[15px] font-semibold text-[#0b2723]">
                                    {p.name}
                                </div>
                                <div className="text-[13px] text-[#1e3a34]/70 mb-3">{p.region}</div>
                                <p className="text-[14px] text-[#1e3a34]/80 mb-3">{p.quote}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <Pill key={t}>{t}</Pill>
                                    ))}
                                </div>
                            </SoftCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 상세 후기 블록 */}
            <div className="py-24 px-6 md:px-16">
                <SectionTitle
                    kicker="Stories"
                    title="현장에서 그대로 옮겨온 사용 후기"
                    sub="각 사례는 동일 업종이라도 상황이 다를 수 있습니다. 아래 내용은 참고용으로 봐주세요."
                />
                <div className="max-w-6xl mx-auto space-y-6">
                    {testimonialBlocks.map((b, i) => (
                        <motion.div key={b.id} {...fadeUp(0.1 * i)}>
                            <div className="rounded-2xl border border-[#a7f3d0]/70 bg-white/90 p-6 md:p-7 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] transition">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Receipt className="w-4 h-4 text-emerald-700" />
                                            <span className="text-[12px] font-semibold text-emerald-800">
                                                {b.industry}
                                            </span>
                                        </div>
                                        <h3 className="text-[17px] md:text-[18px] font-bold text-[#0b2723] leading-snug">
                                            {b.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-1 text-[13px] text-[#1e3a34]/80">
                                        <RatingStars score={b.score} />
                                        <div>
                                            <span className="font-medium">{b.nameMasked}</span> · {b.location}
                                        </div>
                                        <div className="text-[12px] text-emerald-800 bg-[#ecfdf3] px-2 py-0.5 rounded-full border border-emerald-100">
                                            정산: {b.settlement}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5 text-[14px]">
                                    <div className="rounded-xl bg-[#f9fafb] border border-dashed border-gray-200 p-4">
                                        <div className="text-[12px] font-semibold text-gray-500 mb-2">
                                            사용 전
                                        </div>
                                        <ul className="space-y-1.5 text-[#1e3a34]/80">
                                            {b.before.map((x) => (
                                                <li key={x}>• {x}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-xl bg-[#ecfdf3] border border-emerald-200 p-4">
                                        <div className="text-[12px] font-semibold text-emerald-800 mb-2">
                                            사용 후
                                        </div>
                                        <ul className="space-y-1.5 text-[#0b2723]">
                                            {b.after.map((x) => (
                                                <li key={x}>• {x}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                    <div className="flex items-start gap-2 text-[14px] text-[#1e3a34]/90">
                                        <Quote className="w-4 h-4 mt-0.5 text-emerald-700" />
                                        <p>{b.highlight}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {b.keywords.map((k) => (
                                            <Pill key={k}>{k}</Pill>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 키워드 클라우드 */}
            <div className="py-24 px-6 md:px-16 bg-[#f0fdfa] border-t border-[#a7f3d0]/50">
                <SectionTitle
                    kicker="Keywords"
                    title="후기에서 자주 등장하는 표현들"
                    sub="리뷰 텍스트를 키워드 수준으로만 가볍게 훑고 싶을 때 참고하실 수 있습니다."
                />
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
                    {keywordCloud.map((k, i) => (
                        <motion.div key={k} {...fadeUp(0.05 * i)}>
                            <span className="inline-flex items-center gap-1 rounded-full border border-[#a7f3d0]/70 bg-white/80 px-3 py-1.5 text-[13px] text-emerald-800">
                                <Sparkles className="w-3.5 h-3.5" />
                                {k}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 후기 수집 방식 & 신뢰도 안내 */}
            <div className="py-24 px-6 md:px-16">
                <SectionTitle
                    kicker="Process"
                    title="후기는 이렇게 모아집니다"
                    sub="후기 페이지가 ‘광고 문구 모음’이 되지 않도록, 수집·공개 방식도 함께 정리했습니다."
                />
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
                    {reviewProcess.map((r, i) => (
                        <motion.div key={r.title} {...fadeUp(0.1 * i)}>
                            <SoftCard>
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                                    <div className="text-[14px] font-semibold text-[#0b2723]">
                                        {r.title}
                                    </div>
                                </div>
                                <p className="text-[14px] text-[#1e3a34]/80">{r.desc}</p>
                            </SoftCard>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-[13px] text-[#1e3a34]/70 mt-6">
                    보여드린 내용은 실제 사용 경험을 기반으로 하나, 모든 가맹점에 동일하게 적용되지는 않을 수 있습니다. 도입 전에는 반드시{" "}
                    <Link
                        href="/support"
                        className="text-emerald-800 underline underline-offset-2"
                    >
                        우리 상황에 맞는 상담
                    </Link>
                    을 함께 진행해 주세요.
                </p>
            </div>

            {/* 간단한 사례 요약 타일 */}
            <div className="py-24 px-6 md:px-16 bg-[#f0fdfa] border-y border-[#a7f3d0]/50">
                <SectionTitle
                    kicker="Glance"
                    title="짧게 보는 4가지 상황"
                    sub="긴 텍스트 대신, 자주 질문받는 상황만 간단하게 요약했습니다."
                />
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-[14px]">
                    <SoftCard>
                        <div className="flex items-center gap-2 mb-2">
                            <Building2 className="w-4 h-4 text-emerald-700" />
                            <span className="font-semibold">소규모 부동산/원룸</span>
                        </div>
                        <p className="text-[#1e3a34]/80 mb-2">
                            엑셀과 문자만으로 관리하던 월세/관리비를, 고지·납부·연체 관리까지 한 화면에서 정리.
                        </p>
                        <Pill>D+1 정산, 월세/관리비</Pill>
                    </SoftCard>

                    <SoftCard>
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-emerald-700" />
                            <span className="font-semibold">학원/레슨 스튜디오</span>
                        </div>
                        <p className="text-[#1e3a34]/80 mb-2">
                            반별 수강료, 형제 할인, 재등록 할인 등 복잡한 규칙을 템플릿으로 관리.
                        </p>
                        <Pill>분납, 할인 규칙</Pill>
                    </SoftCard>

                    <SoftCard>
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-emerald-700" />
                            <span className="font-semibold">개인 과외/프리랜서</span>
                        </div>
                        <p className="text-[#1e3a34]/80 mb-2">
                            일정 변경·노쇼 등으로 달라지는 금액을 자동으로 차감/조정하여 안내.
                        </p>
                        <Pill>부분 차감, 링크 결제</Pill>
                    </SoftCard>

                    <SoftCard>
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-emerald-700" />
                            <span className="font-semibold">헬스/지역 시설</span>
                        </div>
                        <p className="text-[#1e3a34]/80 mb-2">
                            회원권/자리비/시설 이용료 등 여러 항목을 한 번에 고지하고, 정산 캘린더로 월별 관리.
                        </p>
                        <Pill>회원권, 정산 캘린더</Pill>
                    </SoftCard>
                </div>
            </div>

            {/* CTA (Support와 동일한 버튼 톤) */}
            <div className="py-24 px-6 md:px-16 text-center">
                <motion.p
                    {...fadeUp(0)}
                    className="text-[#1e3a34]/90 text-lg mb-6 leading-relaxed"
                >
                    후기만으로 충분하지 않을 수 있습니다. 실제 화면을 보며 짧게 상담해 보세요.
                </motion.p>
                <motion.div
                    {...fadeUp(0.2)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
                >
                    <Link
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sfinpay@gmail.com&su=SFIN%20PAY%20상담요청&body=회사명:%0A문의유형:%0A문의내용:"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
              bg-gradient-to-r from-[#00c89b] to-[#00b894] 
              hover:from-[#00b894] hover:to-[#00a884]
              text-white font-semibold shadow-[0_6px_20px_rgba(16,185,129,0.25)]"
                    >
                        <Mail size={18} /> Gmail로 문의하기
                    </Link>

                    <Link
                        href="http://pf.kakao.com/_dqyYn/friend"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
              border border-emerald-300 bg-white/80 
              hover:bg-[#f0fdfa] text-emerald-700 font-semibold 
              shadow-[0_6px_15px_rgba(16,185,129,0.15)]"
                    >
                        <MessageSquare size={18} /> 카카오톡 상담
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
