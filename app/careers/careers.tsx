"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Rocket, HeartHandshake, Lightbulb, Scale, Sparkles, ArrowRight, Mail } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE } });

const CULTURE = [
  { icon: Rocket, t: "빠르게 실행한다", d: "완벽한 계획보다 빠른 실행과 개선을 믿습니다." },
  { icon: HeartHandshake, t: "신뢰로 일한다", d: "동료와 가맹점 모두에게 정직하고 투명하게." },
  { icon: Lightbulb, t: "주도적으로 푼다", d: "문제를 발견하면 스스로 정의하고 해결합니다." },
  { icon: Scale, t: "임팩트로 평가한다", d: "직급이 아닌 만들어낸 가치로 이야기합니다." },
];

export default function CareersPage(): JSX.Element {
  return (
    <div className="relative z-10">
      <PageHero icon={Users} kicker="CAREERS" bg="/photos/p11.png"
        title={<>결제의 미래를 <span className="heading-gradient">함께 만들 사람</span></>}
        subtitle="SFIN PAY는 결제를 더 쉽고 안전하게 만드는 일에 진심인 동료를 찾습니다. 당신의 임팩트가 곧 우리의 성장입니다."
        primary={{ label: "지원/제휴 문의", href: "/recruit" }} secondary={{ label: "회사 소개", href: "/company" }} />

      <section className="relative py-24 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...rise(0)} className="max-w-2xl">
            <span className="pill-brand"><span className="dot-brand" /> CULTURE</span>
            <h2 className="display-2 mt-5 text-navy-900">우리가 일하는 <span className="heading-gradient">방식.</span></h2>
          </motion.div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CULTURE.map((c, i) => (
              <motion.div key={c.t} {...rise(i + 1)} className="glass-light lift rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.16), transparent 65%)" }} />
                <div className="inline-flex items-center justify-center rounded-2xl text-white" style={{ width: 52, height: 52, background: "var(--brand-grad)" }}><c.icon size={22} /></div>
                <h3 className="mt-5 text-lg font-extrabold text-navy-900">{c.t}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-20 px-6">
        <motion.div {...rise(0)} className="relative max-w-5xl mx-auto rounded-[2.2rem] p-10 md:p-16 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #6d3bd1 0%, #6c63ff 50%, #4f7cff 100%)" }}>
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-[90px]" style={{ background: "rgba(255,255,255,0.25)" }} />
          <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full blur-[100px]" style={{ background: "rgba(168,85,247,0.45)" }} />
          <Sparkles size={36} className="relative mx-auto text-white" />
          <h2 className="relative mt-5 display-2 text-white">함께할 준비가<br />되셨나요?</h2>
          <p className="relative mt-5 text-[16px] text-white/85 max-w-lg mx-auto">포지션 지원과 파트너 제휴 모두 환영합니다.</p>
          <div className="relative mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/recruit"><button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-[#5a2db8] hover:bg-white/90 transition shadow-lg">지원하기 <ArrowRight size={18} /></button></Link>
            <a href="mailto:sfinpay@gmail.com"><button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/35 hover:bg-white/10 transition"><Mail size={17} /> 이메일 문의</button></a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
