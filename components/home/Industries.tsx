"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, BedDouble, Stethoscope, Building2, Truck, Ticket, User, GraduationCap, ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
// 업종별 추천 8종 (결제 방식과 혼동되지 않도록 업종만)
const ITEMS = [
  { href: "/distribution", icon: Truck, name: "쇼핑 · 판매 · 유통", desc: "대량·정기결제" },
  { href: "/service", icon: GraduationCap, name: "서비스 · 교육", desc: "예약·자동청구" },
  { href: "/fb", icon: UtensilsCrossed, name: "외식 · 프랜차이즈", desc: "매장·배달·포장" },
  { href: "/hospitality", icon: BedDouble, name: "숙박 · 여행 · 레저", desc: "예약·부분환불" },
  { href: "/entertainment", icon: Ticket, name: "콘텐츠 · 엔터", desc: "구독·글로벌결제" },
  { href: "/healthcare", icon: Stethoscope, name: "병원 · 의료", desc: "수납·비대면" },
  { href: "/b2b", icon: Building2, name: "기업 · B2B", desc: "세금계산서·대량정산" },
  { href: "/personal", icon: User, name: "개인 · 프리랜서", desc: "결제링크·간편수금" },
];

export default function Industries(): JSX.Element {
  return (
    <section className="relative py-20 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="pill-brand"><span className="dot-brand" /> 업종별 추천</span>
          <h2 className="display-2 mt-5 text-navy-900">업종에 맞춘 <span className="heading-gradient">결제 설계.</span></h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-ink-muted">
            업종마다 결제 흐름이 다릅니다. SFIN PAY는 현장에 맞는 결제 방식을 제안합니다.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((it, i) => (
            <motion.div key={it.href}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: (i % 4) * 0.05, ease: EASE }}
            >
              <Link href={it.href} className="group relative block glass-light lift rounded-2xl p-5 h-full overflow-hidden">
                <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.35), transparent 65%)" }} />
                <div className="relative flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110" style={{ background: "var(--brand-grad)", boxShadow: "0 8px 20px -6px rgba(124,108,255,0.55)" }}>
                    <it.icon size={19} />
                  </div>
                  <ArrowUpRight size={16} className="text-ink-soft transition-all group-hover:text-[#6d3bd1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="relative mt-4 text-[15px] font-extrabold text-navy-900">{it.name}</h3>
                <p className="relative mt-1 text-[12.5px] text-ink-soft">{it.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
