"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Handshake, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.08, ease: EASE },
});

const ROLES = [
  { icon: Cpu, kicker: "PG · 결제대행", title: "결제를 직접 처리하는 PG사", points: ["카드·간편결제·계좌이체 통합 승인", "국제 보안 표준에 따른 안전한 결제 처리", "실시간 거래 내역 · 정산 리포트"] },
  { icon: Handshake, kicker: "영업대행 · 가맹세팅", title: "결제를 시작하게 해주는 파트너", points: ["단말기 설치 · PG 계약 대행", "업종·매출 구조에 맞는 세팅", "개통부터 정산까지 원스톱 지원"] },
];

export default function Positioning(): JSX.Element {
  return (
    <section className="relative py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...rise(0)} className="max-w-2xl">
          <span className="pill-brand"><span className="dot-brand" /> PG + 영업대행사</span>
          <h2 className="display-2 mt-5 text-navy-900">결제사이자,<br /><span className="heading-gradient">가맹 세팅 파트너.</span></h2>
          <p className="mt-6 text-[16px] leading-[1.8] text-ink-muted">
            SFIN PAY는 결제를 직접 처리하는 <strong className="text-navy-900 font-semibold">PG사</strong>이면서,
            가맹점이 결제를 시작할 수 있도록 단말기·계약·정산까지 세팅해 주는
            <strong className="text-navy-900 font-semibold"> 영업대행사</strong>입니다.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {ROLES.map((r, i) => (
            <motion.div key={r.title} {...rise(i + 1)} className="glass-light lift rounded-3xl p-8 md:p-9 relative overflow-hidden">
              <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.22), transparent 65%)" }} />
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: "var(--brand-grad)", boxShadow: "0 12px 30px -8px rgba(124,108,255,0.6)" }}>
                <r.icon size={24} />
              </div>
              <p className="mt-6 editorial-label text-[#6d3bd1]">{r.kicker}</p>
              <h3 className="mt-2 text-2xl font-extrabold text-navy-900 tracking-tight">{r.title}</h3>
              <ul className="mt-5 space-y-3">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] text-ink-muted">
                    <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full shrink-0 text-white" style={{ background: "var(--brand-grad)" }}><Check size={12} strokeWidth={3} /></span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div {...rise(3)} className="mt-8">
          <Link href="/inquiry/contract" className="inline-flex items-center gap-2 font-semibold text-[#6d3bd1] group">
            가맹 상담 신청 <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
