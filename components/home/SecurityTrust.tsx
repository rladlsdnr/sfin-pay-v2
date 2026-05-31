"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ScanFace, Headset } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE },
});

const ITEMS = [
  { icon: ShieldCheck, t: "국제 보안 표준 준수", d: "국제 카드 보안 표준을 충족하는 결제 처리 환경." },
  { icon: Lock, t: "전 구간 암호화", d: "결제 데이터는 전 구간 암호화되어 안전하게 전송됩니다." },
  { icon: ScanFace, t: "이상거래 자동 탐지", d: "비정상 패턴을 실시간 감지해 부정 결제를 차단합니다." },
  { icon: Headset, t: "24/7 모니터링", d: "장애·이상 징후를 상시 감시하고 신속히 대응합니다." },
];

export default function SecurityTrust(): JSX.Element {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div {...rise(0)} className="max-w-2xl">
          <span className="pill-brand"><span className="dot-brand" /> SECURITY</span>
          <h2 className="display-2 mt-5 text-navy-900">믿고 맡기는 <span className="heading-gradient">금융 보안.</span></h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">
            결제는 신뢰입니다. SFIN PAY는 금융권 수준의 보안 체계로 모든 거래를 지킵니다.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((c, i) => (
            <motion.div key={c.t} {...rise(i + 1)} className="glass-light lift rounded-3xl p-7 relative overflow-hidden">
              <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.2), transparent 65%)" }} />
              <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl text-white" style={{ width: 52, height: 52, background: "var(--brand-grad)", boxShadow: "0 12px 30px -8px rgba(124,108,255,0.6)" }}>
                <c.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-navy-900">{c.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-ink-muted">{c.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
