"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;

const FAQS: { cat: string; q: string; a: string }[] = [
  { cat: "정산", q: "정산은 언제 이루어지나요?", a: "결제 매출은 안전하게 정산되며, 정산 주기는 업종·거래 조건에 따라 계약 시 협의해 설정합니다." },
  { cat: "정산", q: "선정산(선지급)이 가능한가요?", a: "매출 흐름에 따라 선정산 옵션을 제공합니다. 자세한 조건은 정산 문의를 통해 안내해 드립니다." },
  { cat: "수수료", q: "결제 수수료는 어떻게 책정되나요?", a: "업종·결제 수단·매출 규모에 따라 수수료가 달라집니다. 가맹 상담을 통해 맞춤 견적을 받아보실 수 있습니다." },
  { cat: "연동", q: "온라인 결제 연동은 얼마나 걸리나요?", a: "복잡한 개발 없이 쉽게 연결할 수 있고, 담당 기술팀이 연동을 끝까지 함께합니다." },
  { cat: "결제수단", q: "어떤 결제 수단을 지원하나요?", a: "신용·체크카드, 간편결제, 계좌이체, 가상계좌, QR 결제 등 주요 결제 수단을 폭넓게 지원합니다." },
  { cat: "보안", q: "결제 보안은 어떻게 되나요?", a: "국제 보안 표준을 지키며, 전 구간 암호화로 안전을 보장합니다." },
  { cat: "환불", q: "부분 환불도 가능한가요?", a: "전액·부분 환불 모두 지원하며, 관리 화면에서 손쉽게 처리할 수 있습니다." },
  { cat: "가맹", q: "프리랜서·1인 사업자도 이용할 수 있나요?", a: "네, 프리랜서·1인 사업자도 결제 링크 기반 수금으로 간편하게 시작할 수 있습니다." },
];

export default function PaymentFAQClient(): JSX.Element {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="relative z-10">
      <PageHero icon={HelpCircle} kicker="결제 FAQ" bg="/photos/p01.png"
        title={<>자주 묻는 <span className="heading-gradient">질문</span></>}
        subtitle="정산·수수료·연동·보안까지. 결제를 시작하기 전 궁금한 점을 모았습니다."
        secondary={{ label: "1:1 문의", href: "/inquiry/general" }} />

      <section className="relative py-20 md:py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((f, i) => {
            const active = open === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: (i % 4) * 0.05, ease: EASE }}
                className={`glass-light rounded-2xl overflow-hidden transition-colors ${active ? "border-[rgba(124,108,255,0.4)]" : ""}`}>
                <button onClick={() => setOpen(active ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                  <span className="flex items-center gap-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-[#6d3bd1]" style={{ background: "rgba(168,85,247,0.1)" }}>{f.cat}</span>
                    <span className="text-[15px] md:text-[16px] font-bold text-navy-900">{f.q}</span>
                  </span>
                  <ChevronDown size={18} className={`shrink-0 text-[#6d3bd1] transition-transform ${active ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                      <p className="px-6 pb-5 text-[14.5px] leading-[1.8] text-ink-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-[15px] text-ink-muted">원하는 답을 찾지 못하셨나요?</p>
          <Link href="/inquiry/general" className="mt-3 inline-flex items-center gap-2 font-semibold text-[#6d3bd1] group">1:1 문의하기 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </div>
  );
}
