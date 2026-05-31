"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE },
});

export interface IndustryData {
  slug: string;
  bg: string;                // 배경 모티프 (/hero-bg-N.svg)
  icon: LucideIcon;
  kicker: string;
  title: React.ReactNode;    // <span className="heading-gradient"> 사용 가능
  subtitle: string;
  heroStats: { k: string; v: string }[];
  features: { icon: LucideIcon; t: string; d: string }[];
  steps: { t: string; d: string }[];
  points: string[];
  ctaTitle?: React.ReactNode;
}

export default function IndustryTemplate({ data }: { data: IndustryData }): JSX.Element {
  const Icon = data.icon;
  return (
    <div className="relative z-10">
      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center text-center overflow-hidden px-6 pt-36 md:pt-44 pb-20 md:pb-24 mesh-light">
        <img src={data.bg} alt="" aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.42] md:opacity-[0.5] scale-110 object-[70%_center] md:object-center" />
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(247,246,253,0.85), rgba(247,246,253,0.3) 60%, transparent 100%)" }} />
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, rgba(247,246,253,0.5), transparent 30%, rgba(247,246,253,0.9))" }} />

        <motion.span {...rise(0)} className="grid place-items-center w-16 h-16 rounded-2xl text-white relative z-10" style={{ background: "var(--brand-grad)", boxShadow: "0 16px 38px -10px rgba(124,108,255,0.6)" }}>
          <Icon size={28} />
        </motion.span>
        <motion.div {...rise(1)} className="pill-brand mt-6 relative z-10"><span className="dot-brand" /> {data.kicker}</motion.div>
        <motion.h1 {...rise(2)} className="display-1 mt-5 text-navy-900 max-w-4xl text-balance relative z-10">{data.title}</motion.h1>
        <motion.p {...rise(3)} className="mt-6 text-[16px] md:text-[18px] leading-[1.75] text-ink-muted max-w-2xl relative z-10">{data.subtitle}</motion.p>
        <motion.div {...rise(4)} className="mt-9 flex flex-col sm:flex-row gap-3 relative z-10">
          <Link href="/inquiry/contract"><button className="btn-brand group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base">가맹 문의 <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button></Link>
          <Link href="/support"><button className="glass-light inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base text-navy-900 hover:border-[rgba(124,108,255,0.4)] transition-colors">상담 문의</button></Link>
        </motion.div>
        <motion.div {...rise(5)} className="mt-10 flex flex-wrap justify-center gap-2.5 relative z-10">
          {data.features.slice(0, 3).map((c) => (
            <span key={c.t} className="glass-light-strong rounded-full pl-2.5 pr-4 py-2 inline-flex items-center gap-2">
              <span className="grid place-items-center h-7 w-7 rounded-full text-white shrink-0" style={{ background: "var(--brand-grad)" }}><c.icon size={14} /></span>
              <span className="text-[13px] font-bold text-navy-900">{c.t}</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-24 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...rise(0)} className="max-w-2xl">
            <span className="pill-brand"><span className="dot-brand" /> FEATURES</span>
            <h2 className="display-2 mt-5 text-navy-900">핵심 기능</h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">현장에 필요한 결제 기능을 빠짐없이 제공합니다.</p>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((c, i) => (
              <motion.div key={c.t} {...rise(i + 1)} className="glass-light lift rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.18), transparent 65%)" }} />
                <div className="inline-flex items-center justify-center rounded-2xl text-white" style={{ width: 52, height: 52, background: "var(--brand-grad)", boxShadow: "0 12px 30px -8px rgba(124,108,255,0.6)" }}><c.icon size={22} /></div>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{c.t}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FLOW (다크 피처) ===== */}
      <section className="relative py-24 md:py-28 px-6">
        <motion.div {...rise(0)} className="relative max-w-6xl mx-auto rounded-[2.2rem] px-7 py-16 md:px-14 md:py-18 overflow-hidden" style={{ background: "linear-gradient(150deg, #1a1340 0%, #221a52 45%, #182a66 100%)" }}>
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full blur-[110px]" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.45), transparent 65%)" }} />
          <div className="absolute -bottom-24 -right-10 h-96 w-96 rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(79,124,255,0.4), transparent 65%)" }} />
          <div className="absolute inset-0 grid-dark opacity-60" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] font-bold text-white/90" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}><span className="h-1.5 w-1.5 rounded-full bg-[#b983ff]" /> HOW IT WORKS</span>
            <h2 className="display-2 mt-5 text-white">시작은 <span className="text-gradient-brand">3단계.</span></h2>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {data.steps.map((s, i) => (
                <div key={s.t} className="rounded-3xl p-7" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(140,120,255,0.2)" }}>
                  <span className="mega-number text-gradient-brand" style={{ fontSize: "2.4rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-lg font-extrabold text-white">{s.t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-white/65">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="relative py-24 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...rise(0)}>
            <span className="pill-brand"><span className="dot-brand" /> BENEFITS</span>
            <h2 className="display-2 mt-5 text-navy-900">이런 점이 <span className="heading-gradient">좋습니다.</span></h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">SFIN PAY가 결제의 처음부터 끝까지 함께합니다.</p>
            <Link href="/inquiry/contract" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#6d3bd1] group">가맹 상담 신청 <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          </motion.div>
          <motion.div {...rise(1)} className="glass-light-strong rounded-3xl p-8 md:p-9">
            <ul className="space-y-4">
              {data.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-ink-muted">
                  <span className="mt-0.5 grid place-items-center h-6 w-6 rounded-full shrink-0 text-white" style={{ background: "var(--brand-grad)" }}><Check size={13} strokeWidth={3} /></span>{p}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 md:py-28 px-6">
        <motion.div {...rise(0)} className="relative max-w-5xl mx-auto rounded-[2.2rem] p-10 md:p-16 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #6d3bd1 0%, #6c63ff 50%, #4f7cff 100%)" }}>
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-[90px]" style={{ background: "rgba(255,255,255,0.25)" }} />
          <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full blur-[100px]" style={{ background: "rgba(168,85,247,0.45)" }} />
          <div className="absolute inset-0 grid-dark opacity-40" />
          <h2 className="relative display-2 text-white">{data.ctaTitle ?? <>지금, 결제부터<br />SFIN PAY와 시작하세요.</>}</h2>
          <div className="relative mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/inquiry/contract"><button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-[#5a2db8] hover:bg-white/90 transition shadow-lg">무료로 시작하기 <ArrowRight size={18} /></button></Link>
            <Link href="/support"><button className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/35 hover:bg-white/10 transition">상담 문의</button></Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
