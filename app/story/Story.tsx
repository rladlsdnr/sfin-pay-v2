"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star, Store, UtensilsCrossed, Stethoscope, BedDouble, ShoppingCart, User, ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.7, delay: i * 0.06, ease: EASE } });

const REVIEWS = [
  { icon: UtensilsCrossed, biz: "외식 · 프랜차이즈", name: "김O준 점주", text: "POS 연동이 매끄러워서 주문부터 정산까지 막힘이 없어요. D+0 정산 덕에 식자재 대금 걱정이 줄었습니다." },
  { icon: ShoppingCart, biz: "온라인 쇼핑몰", name: "이O은 대표", text: "간편 연동이 생각보다 빨랐고, 간편결제까지 한 번에 붙어서 결제 이탈이 눈에 띄게 줄었어요." },
  { icon: Stethoscope, biz: "의료 · 병원", name: "박O희 원장", text: "비대면 수납을 도입했는데 보안이 탄탄해서 안심됩니다. 환자 응대도 훨씬 수월해졌어요." },
  { icon: BedDouble, biz: "숙박 · 호텔", name: "최O호 대표", text: "예약금·잔금 분리 결제와 부분 환불이 정확해서 성수기 운영이 편해졌습니다." },
  { icon: Store, biz: "유통 · 도소매", name: "정O석 대표", text: "거래처 정기결제와 대량 정산이 자동화되니 정산 담당 업무가 절반으로 줄었어요." },
  { icon: User, biz: "프리랜서", name: "한O라 크리에이터", text: "결제 링크로 바로 수금이 돼서 정말 편합니다. 정산도 빨라요." },
];

export default function Story(): JSX.Element {
  return (
    <div className="relative z-10">
      <PageHero icon={Quote} kicker="고객 후기" bg="/photos/p23.png"
        title={<>현장에서 증명된 <span className="heading-gradient">SFIN PAY</span></>}
        subtitle="다양한 업종의 가맹점이 SFIN PAY로 결제와 정산을 바꿨습니다. 실제 사용 후기를 확인하세요."
        primary={{ label: "가맹 문의", href: "/inquiry/contract" }} />

      <section className="relative py-24 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <motion.div key={r.name} {...rise(i)} className="glass-light lift rounded-3xl p-7 relative overflow-hidden">
                <div className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-[60px]" style={{ background: "radial-gradient(circle, rgba(124,108,255,0.14), transparent 65%)" }} />
                <div className="flex items-center gap-1 text-[#7c6bff]">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={15} fill="#7c6bff" />)}
                </div>
                <p className="mt-4 text-[15px] leading-[1.8] text-navy-900">“{r.text}”</p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[rgba(124,108,255,0.14)]">
                  <span className="inline-flex items-center justify-center rounded-xl text-white shrink-0" style={{ width: 42, height: 42, background: "var(--brand-grad)" }}><r.icon size={18} /></span>
                  <div><p className="text-[14px] font-bold text-navy-900">{r.name}</p><p className="text-[12px] text-ink-soft">{r.biz}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...rise(1)} className="mt-12 text-center">
            <Link href="/inquiry/contract" className="inline-flex items-center gap-2 font-semibold text-[#6d3bd1] group">나도 시작하기 <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
