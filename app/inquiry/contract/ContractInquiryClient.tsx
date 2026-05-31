"use client";
import React from "react";
import { motion } from "framer-motion";
import { Handshake, Percent, Timer, ShieldCheck, FileText, Phone, Mail, MessageCircle } from "lucide-react";
import PageHero from "../../../components/PageHero";
import ConsultForm from "../../../components/ConsultForm";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({ initial: { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, delay: i * 0.07, ease: EASE } });
// 카카오톡 채널 상담 URL — 실제 채널 주소로 교체하세요 (예: https://pf.kakao.com/_xxxxxx)
const KAKAO_URL = "https://pf.kakao.com/_스핀페이";

const WHY = [
  { icon: Percent, t: "맞춤형 수수료", d: "업종·매출 규모에 맞춘 최적 수수료를 제안합니다." },
  { icon: Timer, t: "빠른 정산", d: "매출을 빠르게 현금 흐름으로 전환합니다." },
  { icon: Handshake, t: "가맹 세팅 대행", d: "단말기·계약·연동을 대신 세팅해 드립니다." },
  { icon: ShieldCheck, t: "금융권 보안", d: "국제 보안 표준과 암호화로 안전하게." },
];
const DOCS = ["사업자등록증 사본", "대표자 신분증 사본", "통신판매업 신고증(해당 시)", "정산 계좌 사본"];

export default function ContractInquiryClient(): JSX.Element {
  return (
    <div className="relative z-10">
      <PageHero icon={Handshake} kicker="가맹 문의 · 상담" bg="/photos/p18.png"
        title={<>결제, <span className="heading-gradient">상담 한 번</span>으로 시작</>}
        subtitle="단말기·PG·정산이 막막하다면, 아래 양식을 남겨주세요. 담당자가 업종과 매출에 맞는 조건을 안내해 드립니다." />

      <section className="relative py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* 좌: 안내 */}
          <div>
            <motion.div {...rise(0)}>
              <span className="pill-brand"><span className="dot-brand" /> WHY SFIN PAY</span>
              <h2 className="display-3 mt-5 text-navy-900">상담하면 <span className="heading-gradient">이렇게 달라집니다.</span></h2>
            </motion.div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {WHY.map((c, i) => (
                <motion.div key={c.t} {...rise(i + 1)} className="glass-light rounded-2xl p-5">
                  <div className="inline-flex items-center justify-center rounded-xl text-white" style={{ width: 44, height: 44, background: "var(--brand-grad)" }}><c.icon size={19} /></div>
                  <h3 className="mt-4 text-[15px] font-extrabold text-navy-900">{c.t}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-ink-muted">{c.d}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...rise(5)} className="mt-6 glass-light rounded-2xl p-6">
              <div className="flex items-center gap-2 text-navy-900 font-bold text-[15px]"><FileText size={17} className="text-[#6d3bd1]" /> 심사 기본 서류</div>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-ink-muted">
                {DOCS.map((d) => <li key={d} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-grad)" }} />{d}</li>)}
              </ul>
            </motion.div>

            <motion.div {...rise(6)} className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-[15px] text-[#3c1e1e] transition hover:brightness-95"
                style={{ background: "#FEE500", boxShadow: "0 10px 24px -10px rgba(254,229,0,0.8)" }}>
                <MessageCircle size={18} /> 카카오톡 상담하기
              </a>
              <a href="mailto:sfinpay@gmail.com?subject=%5B%EA%B0%80%EB%A7%B9%20%EC%83%81%EB%8B%B4%5D%20%EB%AC%B8%EC%9D%98&body=%EC%83%81%ED%98%B8%3A%20%0A%EC%97%B0%EB%9D%BD%EC%B2%98%3A%20%0A%EB%AC%B8%EC%9D%98%20%EB%82%B4%EC%9A%A9%3A%20"
                className="btn-brand inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-[15px] text-white">
                <Mail size={18} /> Gmail 상담하기
              </a>
            </motion.div>
            <motion.p {...rise(7)} className="mt-3 text-[12.5px] text-ink-soft">카카오톡 채널 <strong className="font-semibold text-navy-900">@스핀페이</strong> · 이메일 <strong className="font-semibold text-navy-900">sfinpay@gmail.com</strong></motion.p>
          </div>

          {/* 우: 상담 폼 */}
          <div className="lg:sticky lg:top-28">
            <ConsultForm />
          </div>
        </div>
      </section>
    </div>
  );
}
