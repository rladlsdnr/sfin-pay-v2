"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Target, Lightbulb, Globe2, Users, ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE } });

const AIMS = [
  { icon: Target, t: "결제의 단순화", d: "복잡한 결제 환경를 하나로 묶어, 누구나 쉽게 결제를 시작하도록." },
  { icon: Lightbulb, t: "기술로 만드는 신뢰", d: "실시간 분석과 보안 기술로 모든 거래를 안심할 수 있게." },
  { icon: Globe2, t: "경계 없는 결제", d: "온·오프라인, 국내·해외를 가리지 않는 결제 경험을 지향합니다." },
  { icon: Users, t: "함께 성장하는 파트너", d: "가맹점의 성장이 곧 SFIN PAY의 성장이라 믿습니다." },
];

export default function VisionPage(): JSX.Element {
  return (
    <div className="relative z-10">
      <PageHero icon={Rocket} kicker="VISION" bg="/photos/p15.png"
        title={<>모든 비즈니스가 <span className="heading-gradient">결제로 성장</span>하도록</>}
        subtitle="SFIN PAY는 결제를 가장 쉽고 안전한 경험으로 만들어, 모든 사업자가 본업에만 집중할 수 있는 세상을 지향합니다."
        primary={{ label: "가맹 문의", href: "/inquiry/contract" }} secondary={{ label: "회사 소개", href: "/company" }} />

      {/* 미션 (다크 피처) */}
      <section className="relative py-24 md:py-28 px-6">
        <motion.div {...rise(0)} className="relative max-w-5xl mx-auto rounded-[2.2rem] px-7 py-16 md:px-16 md:py-20 text-center overflow-hidden" style={{ background: "linear-gradient(150deg, #1a1340 0%, #221a52 45%, #182a66 100%)" }}>
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[40rem] max-w-[90vw] rounded-full blur-[110px]" style={{ background: "radial-gradient(circle, rgba(139,108,255,0.5), transparent 65%)" }} />
          <div className="absolute inset-0 grid-dark opacity-60" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] font-bold text-white/90" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}><span className="h-1.5 w-1.5 rounded-full bg-[#b983ff]" /> MISSION</span>
            <h2 className="mt-6 text-2xl md:text-4xl font-extrabold text-white leading-[1.4]">
              "결제의 복잡함은 우리가,<br /><span className="text-gradient-brand">성장의 기회는 가맹점이.</span>"
            </h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-white/70 max-w-xl mx-auto">
              단말기·PG·정산이라는 장벽을 SFIN PAY가 대신 넘어, 사업자가 결제 걱정 없이 본업에 집중하게 만드는 것. 그것이 우리의 미션입니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 지향점 */}
      <section className="relative py-12 md:py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...rise(0)} className="max-w-2xl">
            <span className="pill-brand"><span className="dot-brand" /> WHAT WE AIM</span>
            <h2 className="display-2 mt-5 text-navy-900">우리가 향하는 <span className="heading-gradient">방향.</span></h2>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {AIMS.map((c, i) => (
              <motion.div key={c.t} {...rise(i + 1)} className="glass-light lift rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.16), transparent 65%)" }} />
                <div className="inline-flex items-center justify-center rounded-2xl text-white" style={{ width: 52, height: 52, background: "var(--brand-grad)" }}><c.icon size={22} /></div>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{c.t}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.7] text-ink-muted">{c.d}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...rise(2)} className="mt-10 text-center">
            <Link href="/inquiry/contract" className="inline-flex items-center gap-2 font-semibold text-[#6d3bd1] group">SFIN PAY와 함께하기 <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
