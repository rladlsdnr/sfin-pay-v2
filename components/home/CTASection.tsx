"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CTASection(): JSX.Element {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: EASE }}
        className="relative max-w-5xl mx-auto rounded-[2.2rem] p-10 md:p-16 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #6d3bd1 0%, #6c63ff 50%, #4f7cff 100%)" }}
      >
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-[90px]" style={{ background: "rgba(255,255,255,0.25)" }} />
        <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full blur-[100px]" style={{ background: "rgba(168,85,247,0.45)" }} />
        <div className="absolute inset-0 grid-dark opacity-40" />
        <span className="relative grid place-items-center mx-auto w-16 h-16 rounded-full bg-white/15 backdrop-blur anim-float ring-1 ring-white/25">
          <img src="/sfin-mark.png" alt="" className="w-full h-full object-contain p-2" />
        </span>
        <h2 className="relative mt-6 display-2 text-white">결제, 세팅부터 정산까지<br />SFIN PAY가 한 번에.</h2>
        <p className="relative mt-5 text-[16px] md:text-[17px] leading-[1.7] text-white/85 max-w-xl mx-auto">
          단말기·PG·정산이 막막하다면, 상담 한 번으로 시작하세요.
        </p>
        <div className="relative mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/inquiry/contract">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base bg-white text-[#5a2db8] hover:bg-white/90 transition shadow-lg">
              무료로 시작하기 <ArrowRight size={18} />
            </button>
          </Link>
          <Link href="/support">
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/35 hover:bg-white/10 transition">
              <MessageCircle size={17} /> 상담 문의
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
