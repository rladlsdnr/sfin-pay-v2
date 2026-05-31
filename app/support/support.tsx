"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Headset, Wallet, FileSignature, Cpu, MessageSquare, Mail, MessageCircle, Clock3, HelpCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE } });

const CHANNELS = [
  { icon: Wallet, t: "정산 관련 문의", d: "입금·수수료·D+0/D+1 정산 문의", href: "/inquiry/settlement" },
  { icon: FileSignature, t: "가맹 계약 · 수수료", d: "계약 진행 및 조건 협의", href: "/inquiry/contract" },
  { icon: Cpu, t: "기술 · 연동 지원", d: "간편 연동·개발 관련 문의", href: "/inquiry/integration" },
  { icon: MessageSquare, t: "일반 문의", d: "그 외 모든 문의사항", href: "/inquiry/general" },
];

export default function Support(): JSX.Element {
  return (
    <div className="relative z-10">
      <PageHero icon={Headset} kicker="고객 지원" bg="/photos/p24.png"
        title={<>무엇이든 <span className="heading-gradient">물어보세요.</span></>}
        subtitle="정산·계약·기술 연동부터 일반 문의까지. SFIN PAY 담당자가 신속하게 도와드립니다."
        primary={{ label: "1:1 문의하기", href: "/inquiry/general" }} secondary={{ label: "결제 FAQ", href: "/payment-faq" }} />

      {/* 문의 채널 */}
      <section className="relative py-24 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...rise(0)} className="max-w-2xl">
            <span className="pill-brand"><span className="dot-brand" /> CONTACT</span>
            <h2 className="display-2 mt-5 text-navy-900">문의 유형을 <span className="heading-gradient">선택하세요.</span></h2>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {CHANNELS.map((c, i) => (
              <motion.div key={c.t} {...rise(i + 1)}>
                <Link href={c.href} className="group relative block glass-light lift rounded-3xl p-7 overflow-hidden">
                  <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.3), transparent 65%)" }} />
                  <div className="relative flex items-start justify-between">
                    <div className="inline-flex items-center justify-center rounded-2xl text-white" style={{ width: 52, height: 52, background: "var(--brand-grad)", boxShadow: "0 12px 30px -8px rgba(124,108,255,0.6)" }}><c.icon size={22} /></div>
                    <ArrowUpRight size={18} className="text-ink-soft transition-all group-hover:text-[#6d3bd1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="relative mt-5 text-lg font-extrabold text-navy-900">{c.t}</h3>
                  <p className="relative mt-2 text-[14px] text-ink-muted">{c.d}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 추가 문의 → 가맹 문의 */}
      <section className="relative py-12 md:py-20 px-6">
        <motion.div {...rise(0)} className="relative max-w-5xl mx-auto rounded-[2.2rem] p-10 md:p-14 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #6d3bd1 0%, #6c63ff 50%, #4f7cff 100%)" }}>
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-[90px]" style={{ background: "rgba(255,255,255,0.25)" }} />
          <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full blur-[100px]" style={{ background: "rgba(168,85,247,0.45)" }} />
          <div className="absolute inset-0 grid-dark opacity-40" />
          <h2 className="relative text-2xl md:text-3xl font-extrabold text-white">추가로 문의하실 내용이 있나요?</h2>
          <p className="relative mt-4 text-[15px] md:text-[16px] leading-[1.7] text-white/85 max-w-lg mx-auto">단말기·PG·정산 등 도입 상담은 가맹 문의에서 한 번에 도와드립니다.</p>
          <div className="relative mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/inquiry/contract"><button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-[#5a2db8] hover:bg-white/90 transition shadow-lg">가맹 문의 <ArrowRight size={18} /></button></Link>
            <Link href="/payment-faq"><button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/35 hover:bg-white/10 transition"><HelpCircle size={17} /> 결제 FAQ</button></Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
