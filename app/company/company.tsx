"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Target, HeartHandshake, Cpu, ShieldCheck, Handshake, Layers, ArrowRight, Check } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE } });

const VALUES = [
  { icon: Target, t: "투명한 정산", d: "정산의 속도와 정확도를 중심에 두고, 모든 거래 흐름을 실시간으로 투명하게 제공합니다." },
  { icon: HeartHandshake, t: "신뢰 중심 운영", d: "가맹점·소비자·파트너 모두가 안심할 수 있는 결제 환경을 만듭니다." },
  { icon: Cpu, t: "기술 기반 인프라", d: "거래 리스크를 실시간 분석하고 비정상 패턴을 즉시 탐지·차단합니다." },
  { icon: ShieldCheck, t: "금융권 보안", d: "국제 보안 표준과 암호화로 결제의 모든 순간을 보호합니다." },
];

export default function CompanyIntro(): JSX.Element {
  return (
    <div className="relative z-10">
      <PageHero icon={Building2} kicker="회사 소개" bg="/photos/p06.png"
        title={<>결제의 처음과 끝을 잇는 <span className="heading-gradient">SFIN PAY</span></>}
        subtitle="SFIN PAY는 결제를 직접 처리하는 PG사이자, 가맹점이 결제를 시작하도록 돕는 영업대행사입니다. 단말기·계약·정산까지 한 번에 책임집니다."
        primary={{ label: "가맹 문의", href: "/inquiry/contract" }} secondary={{ label: "비전 보기", href: "/vision" }} />

      {/* 핵심 가치 */}
      <section className="relative py-24 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...rise(0)} className="max-w-2xl">
            <span className="pill-brand"><span className="dot-brand" /> OUR VALUES</span>
            <h2 className="display-2 mt-5 text-navy-900">우리가 지키는 <span className="heading-gradient">기준.</span></h2>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((c, i) => (
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

      {/* 정체성: PG + 영업대행 (다크 피처) */}
      <section className="relative py-24 md:py-28 px-6">
        <motion.div {...rise(0)} className="relative max-w-6xl mx-auto rounded-[2.2rem] px-7 py-16 md:px-14 md:py-18 overflow-hidden" style={{ background: "linear-gradient(150deg, #1a1340 0%, #221a52 45%, #182a66 100%)" }}>
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full blur-[110px]" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.45), transparent 65%)" }} />
          <div className="absolute -bottom-24 -right-10 h-96 w-96 rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(79,124,255,0.4), transparent 65%)" }} />
          <div className="absolute inset-0 grid-dark opacity-60" />
          <div className="relative grid md:grid-cols-2 gap-6">
            {[{ icon: Cpu, k: "PG · 결제대행", t: "결제를 직접 처리합니다", d: "카드·간편결제·계좌이체를 통합 승인하고, 안전하게 정산합니다." },
              { icon: Handshake, k: "영업대행 · 가맹세팅", t: "결제를 시작하게 합니다", d: "단말기·계약·연동을 대행해 가맹점의 시작을 돕습니다." }].map((r) => (
              <div key={r.t} className="rounded-3xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(140,120,255,0.2)" }}>
                <div className="inline-flex items-center justify-center rounded-2xl text-white" style={{ width: 52, height: 52, background: "var(--brand-grad)" }}><r.icon size={22} /></div>
                <p className="mt-5 editorial-label text-[#b983ff]">{r.k}</p>
                <h3 className="mt-2 text-2xl font-extrabold text-white">{r.t}</h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-white/65">{r.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

function CTA() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: EASE }}
        className="relative max-w-5xl mx-auto rounded-[2.2rem] p-10 md:p-16 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #6d3bd1 0%, #6c63ff 50%, #4f7cff 100%)" }}>
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-[90px]" style={{ background: "rgba(255,255,255,0.25)" }} />
        <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full blur-[100px]" style={{ background: "rgba(168,85,247,0.45)" }} />
        <h2 className="relative display-2 text-white">결제, 세팅부터 정산까지<br />SFIN PAY가 함께합니다.</h2>
        <div className="relative mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/inquiry/contract"><button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-[#5a2db8] hover:bg-white/90 transition shadow-lg">가맹 문의 <ArrowRight size={18} /></button></Link>
          <Link href="/support"><button className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/35 hover:bg-white/10 transition">상담 문의</button></Link>
        </div>
      </motion.div>
    </section>
  );
}
