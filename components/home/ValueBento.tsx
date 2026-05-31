"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Timer, ShieldCheck, Handshake, Store, Wifi } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE },
});
const Chip = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
    style={{ background: "var(--brand-grad)", boxShadow: "0 10px 26px -8px rgba(124,108,255,0.6)" }}>{children}</div>
);

export default function ValueBento(): JSX.Element {
  return (
    <section className="relative py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...rise(0)} className="max-w-2xl">
          <span className="pill-brand"><span className="dot-brand" /> WHY SFIN PAY</span>
          <h2 className="display-2 mt-5 text-navy-900">결제에 필요한 모든 것을<br /><span className="heading-gradient">한 곳에서.</span></h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">
            단말기 설치부터 PG 계약, 정산, 보안까지 — 흩어져 있던 결제 환경을 SFIN PAY가 하나로 묶습니다.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-fr">
          {/* 큰 카드 — 미니 카드 비주얼 포함 */}
          <motion.div {...rise(1)} className="md:col-span-2 md:row-span-2 glass-light lift rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.3), transparent 65%)" }} />
            <Chip><Layers size={22} /></Chip>
            <h3 className="mt-6 text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">오프라인 · 온라인 · QR,<br />하나의 결제</h3>
            <p className="mt-4 text-[15.5px] leading-[1.8] text-ink-muted max-w-lg">
              매장 카드 단말기, 온라인 결제, QR·간편결제까지 채널을 가리지 않고 연결합니다.
              어디서 결제가 일어나든 한 곳에서 보고 관리하세요.
            </p>
            {/* 미니 결제 카드 */}
            <div className="mt-8 relative h-[150px]">
              <div className="absolute left-0 bottom-0 w-[260px] h-[150px] rounded-2xl overflow-hidden text-white p-5"
                style={{ background: "linear-gradient(135deg,#c79bff,#8b6cff 45%,#4f7cff)", boxShadow: "0 24px 50px -18px rgba(99,72,220,0.5)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold tracking-tight">SFIN PAY</span><Wifi size={18} className="rotate-90 opacity-90" />
                </div>
                <p className="mt-6 font-mono text-[15px] tracking-[0.18em]">5402 ···· 4921</p>
                <p className="mt-3 text-[11px] font-semibold opacity-80">통합 결제</p>
              </div>
              <div className="absolute left-[230px] bottom-5 glass-light-strong rounded-2xl px-4 py-3 hidden sm:flex items-center gap-2 whitespace-nowrap">
                <span className="grid place-items-center h-6 w-6 rounded-full text-white text-[11px]" style={{ background: "var(--brand-grad)" }}>✓</span>
                <span className="text-[12px] font-bold text-navy-900">승인 완료</span>
              </div>
            </div>
          </motion.div>

          {[
            { icon: Timer, t: "빠른 정산", d: "매출이 곧 현금 흐름이 되도록 빠르게 정산합니다." },
            { icon: ShieldCheck, t: "금융권 수준 보안", d: "국제 보안 표준과 암호화로 안전하게 지킵니다." },
            { icon: Handshake, t: "가맹 세팅 대행", d: "단말기·계약·연동을 SFIN PAY가 대신 세팅합니다." },
            { icon: Store, t: "업종 맞춤 설계", d: "현장에 맞춘 결제 흐름을 제안합니다." },
          ].map((c, i) => (
            <motion.div key={c.t} {...rise(i + 2)} className="glass-light lift rounded-3xl p-6 relative overflow-hidden">
              <Chip><c.icon size={20} /></Chip>
              <h3 className="mt-5 text-lg font-extrabold text-navy-900">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
