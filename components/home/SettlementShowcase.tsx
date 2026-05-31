"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Wifi, Zap, Wallet, ShieldCheck } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.75, delay: i * 0.08, ease: EASE },
});

export default function SettlementShowcase(): JSX.Element {
  return (
    <section className="relative py-20 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: EASE }}
        className="relative max-w-6xl mx-auto rounded-[2.4rem] px-7 py-16 md:px-16 md:py-20 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #15102f 0%, #221a52 42%, #16265f 100%)" }}
      >
        {/* 분위기 */}
        <div className="absolute -top-28 -left-20 h-96 w-96 rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.55), transparent 65%)" }} />
        <div className="absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full blur-[130px]" style={{ background: "radial-gradient(circle, rgba(79,124,255,0.5), transparent 65%)" }} />
        <div className="absolute inset-0 grid-dark opacity-60" />

        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 좌: 카피 + 지표 */}
          <div>
            <motion.span {...rise(0)} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12.5px] font-bold text-white/90" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#b983ff]" /> SETTLEMENT
            </motion.span>
            <motion.h2 {...rise(1)} className="display-2 mt-5 text-white">결제한 매출,<br /><span className="text-gradient-brand">빠르게 통장으로.</span></motion.h2>
            <motion.p {...rise(2)} className="mt-5 text-[16px] leading-[1.8] text-white/70 max-w-md">
              매출은 잘 나오는데 통장이 빠듯한 순간. 빠른 정산으로 자금이 묶이지 않게, 매출 흐름을 곧바로 현금 흐름으로 바꿉니다.
            </motion.p>
            {/* 핵심 지표 3종 */}
            <motion.div {...rise(3)} className="mt-8 grid grid-cols-3 gap-3">
              {[{ icon: Zap, t: "빠른 정산", d: "자금이 묶이지 않게" }, { icon: ShieldCheck, t: "안전 거래", d: "보안 표준 · 암호화" }, { icon: Wallet, t: "투명 내역", d: "실시간 확인" }].map((it) => (
                <div key={it.t} className="rounded-2xl p-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(140,120,255,0.2)" }}>
                  <it.icon size={16} className="text-[#b983ff]" />
                  <p className="mt-3 text-[15px] font-extrabold text-white leading-tight">{it.t}</p>
                  <p className="mt-1 text-[11.5px] text-white/55">{it.d}</p>
                </div>
              ))}
            </motion.div>
            <motion.div {...rise(4)} className="mt-7 flex flex-col gap-3">
              {["선정산(미리 받기) 지원", "실시간 거래 내역 확인", "자동 세금계산서 발행"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2.5 text-[15px] text-white/85">
                  <span className="grid place-items-center h-5 w-5 rounded-full text-white shrink-0" style={{ background: "var(--brand-grad)" }}><Check size={12} strokeWidth={3} /></span>{t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* 우: 대시보드 + 카드 비주얼 (묵직하게) */}
          <motion.div {...rise(2)} className="relative">
            {/* 메인 정산 대시보드 */}
            <div className="glass-panel rounded-3xl p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/70"><Wallet size={15} className="text-[#b983ff]" /> 오늘 정산 예정</span>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#7ee0a8]"><span className="h-1.5 w-1.5 rounded-full bg-[#7ee0a8] animate-pulse" /> 처리중</span>
              </div>
              <div className="mt-3 mega-number text-white" style={{ fontSize: "clamp(2.6rem,7vw,3.4rem)" }}>₩4,820,000</div>
              <div className="mt-5 h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full progress-anim" style={{ ["--p" as any]: "88%", background: "var(--brand-grad)" }} />
              </div>
              {/* 미니 매출 추이 차트 */}
              <div className="mt-6 flex items-end gap-2 h-20">
                {[42, 58, 50, 72, 64, 88, 100].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 6 ? "var(--brand-grad)" : "rgba(255,255,255,0.14)" }} />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-2xl px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(140,120,255,0.2)" }}>
                <span className="inline-flex items-center gap-2 text-[13px] text-white/75"><Wallet size={15} className="text-[#b983ff]" /> 정산 처리 상태</span>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#7ee0a8]"><span className="h-1.5 w-1.5 rounded-full bg-[#7ee0a8]" /> 안전 정산 중</span>
              </div>
            </div>
            {/* 떠 있는 카드 */}
            <div className="absolute -bottom-7 -left-5 sm:-left-7 w-[210px] rounded-2xl overflow-hidden text-white p-5 hidden sm:block anim-float"
              style={{ background: "linear-gradient(135deg,#c79bff,#8b6cff 45%,#4f7cff)", boxShadow: "0 28px 60px -20px rgba(20,10,60,0.7)" }}>
              <div className="flex items-center justify-between"><span className="text-[13px] font-extrabold tracking-tight">SFIN PAY</span><Wifi size={16} className="rotate-90 opacity-90" /></div>
              <p className="mt-5 font-mono text-[13px] tracking-[0.16em]">···· 4921</p>
              <p className="mt-2 text-[10px] font-semibold opacity-80">빠른 정산</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
