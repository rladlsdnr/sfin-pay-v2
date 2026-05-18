"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Check, CreditCard } from "lucide-react";

/* sfinpay 표준 스프링 이징 (globals.css --ease-spring 와 동일) */
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Hero — 라이트 에디토리얼 베이스 + sfincash 골드/네이비 모션 디자인 언어 차용.
 * 좌측: 카피·CTA / 우측: 골드 그라데이션 메시 위의 결제 시뮬레이션 카드.
 */
export default function Hero(): JSX.Element {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 pt-32 pb-20 min-h-[100dvh] overflow-hidden px-6 md:px-12 lg:px-20">
      {/* 배경 — 페이퍼 텍스처 + 골드/네이비 글로우 */}
      <div className="absolute inset-0 -z-10 paper-texture" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 16%, rgba(255,184,0,0.12), transparent 70%)," +
            "radial-gradient(ellipse 46% 46% at 10% 90%, rgba(0,51,102,0.07), transparent 70%)",
        }}
      />

      {/* ── 좌측: 텍스트 ── */}
      <div className="relative z-10 w-full lg:w-[46%] max-w-xl text-center lg:text-left">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="editorial-label text-navy/65 mb-5"
        >
          PG · 결제 단말기 · 온라인 결제
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="display-1 text-navy"
        >
          비즈니스를 성장시키는
          <br />
          <span className="heading-gradient">통합 결제 플랫폼</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-6 text-[16px] md:text-[17px] leading-[1.7] text-ink-muted max-w-md mx-auto lg:mx-0"
        >
          SFIN PAY는{" "}
          <strong className="text-navy font-semibold">보안 · 안정성 · 확장성</strong>을
          기반으로 온라인과 오프라인을 아우르는 결제 환경을 제공합니다. 모든 거래를
          투명하고 신뢰 있게.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
          className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
        >
          <Link href="/inquiry/contract">
            <button className="btn-primary group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-navy-900 text-base bg-gradient-to-r from-gold-light to-gold">
              무료로 시작하기
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </Link>
          <Link href="/inquiry/integration">
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium text-base text-navy border border-navy/25 hover:border-navy hover:bg-navy/[0.03] transition-colors">
              기능 보기
            </button>
          </Link>
        </motion.div>

        {/* 신뢰 지표 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.52 }}
          className="mt-10 flex items-center gap-5 justify-center lg:justify-start text-[13px] text-ink-soft"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-navy" /> PCI-DSS 준수
          </span>
          <span className="hidden sm:block w-8 h-px bg-navy/15" />
          <span className="inline-flex items-center gap-1.5">
            <Check size={15} className="text-navy" /> D+0 정산 지원
          </span>
        </motion.div>
      </div>

      {/* ── 우측: 비주얼 ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25, ease: EASE }}
        className="relative z-10 hidden lg:flex w-[48%] justify-center items-center"
      >
        <HeroVisual />
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────
   우측 비주얼 — 골드 그라데이션 블롭 + 흐름선 + 결제 카드
   ─────────────────────────────────────────────── */
function HeroVisual(): JSX.Element {
  return (
    <div className="relative w-[460px] h-[460px] flex items-center justify-center">
      {/* 골드 그라데이션 블롭 (sfincash 모션 차용 — 라이트 톤) */}
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          top: -10,
          right: -20,
          background:
            "radial-gradient(circle, rgba(255,184,0,0.40), transparent 70%)",
          filter: "blur(55px)",
        }}
        animate={{ x: [0, 28, -14, 0], y: [0, -22, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          bottom: -20,
          left: -20,
          background:
            "radial-gradient(circle, rgba(0,51,102,0.22), transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ x: [0, -20, 16, 0], y: [0, 20, -16, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 흐름선 메시 (sfincash δ 레이어 차용) */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 460 460"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFB800" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0,110 Q 150,40 290,130 T 460,90"
          stroke="url(#hero-flow)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.6, delay: 0.6, ease: "easeOut" }}
        />
        <motion.path
          d="M 0,360 Q 170,290 300,370 T 460,330"
          stroke="url(#hero-flow)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 3, delay: 0.9, ease: "easeOut" }}
        />
        {[
          { x: 70, y: 90, r: 3, d: 1.6 },
          { x: 300, y: 132, r: 3.5, d: 1.8 },
          { x: 200, y: 345, r: 3, d: 2.0 },
          { x: 400, y: 325, r: 2.5, d: 2.2 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill="#FFB800"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0.5, 0.9], scale: 1 }}
            transition={{
              opacity: {
                duration: 3,
                delay: p.d,
                repeat: Infinity,
                repeatType: "reverse",
              },
              scale: { duration: 0.6, delay: p.d, ease: "easeOut" },
            }}
            style={{ filter: "drop-shadow(0 0 5px rgba(255,184,0,0.7))" }}
          />
        ))}
      </svg>

      {/* 메인 결제 시뮬레이션 카드 */}
      <div className="relative z-10 w-[384px] card-shadow rounded-3xl px-8 pt-11 pb-11 bg-white">
        {/* 헤더 — 로고 + 라이브 상태 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/new_logo.png"
              alt=""
              aria-hidden
              className="h-7 w-7 object-contain"
            />
            <span className="text-[15px] font-extrabold text-navy tracking-tight">
              SFIN PAY
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-navy">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            LIVE
          </span>
        </div>

        {/* 결제 금액 — 1줄 고정 */}
        <p className="mt-8 text-[13px] text-ink-soft">결제 승인 금액</p>
        <p className="mt-2 text-[44px] leading-none font-extrabold text-navy tracking-[-0.04em] tabular whitespace-nowrap">
          ₩ 1,250,000
        </p>

        {/* 정산 진행 바 — globals.css .progress-anim 활용 */}
        <div className="mt-8">
          <div className="flex items-center justify-between text-[12px] mb-2">
            <span className="text-ink-soft">정산 처리</span>
            <span className="text-navy font-semibold tabular">D+0</span>
          </div>
          <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
            <div
              className="progress-anim h-full rounded-full bg-gradient-to-r from-gold to-gold-dark"
              style={{ "--p": "82%" } as React.CSSProperties}
            />
          </div>
        </div>

        {/* 하단 미니 지표 */}
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-surface-2 px-4 py-3">
            <p className="text-[11px] text-ink-soft">승인률</p>
            <p className="text-[17px] font-bold text-navy tabular mt-0.5">
              99.98%
            </p>
          </div>
          <div className="rounded-xl bg-surface-2 px-4 py-3">
            <p className="text-[11px] text-ink-soft">평균 응답</p>
            <p className="text-[17px] font-bold text-navy tabular mt-0.5">
              0.4s
            </p>
          </div>
        </div>
      </div>

      {/* 플로팅 칩 — 카드 승인 (카드 상단 테두리에만 걸침) */}
      <motion.div
        className="absolute z-20 -top-6 left-9 card-shadow rounded-2xl px-4 py-3 bg-white flex items-center gap-2.5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          y: { duration: 5, delay: 0.9, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/8 text-navy">
          <CreditCard size={16} />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] text-ink-soft">카드 승인</p>
          <p className="text-[13px] font-semibold text-navy tabular">
            •••• 4921
          </p>
        </div>
      </motion.div>

      {/* 플로팅 칩 — 정산 완료 (카드 하단 테두리에만 걸침) */}
      <motion.div
        className="absolute z-20 -bottom-6 right-9 card-shadow rounded-2xl px-4 py-3 bg-white flex items-center gap-2.5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.15 },
          y: { duration: 6, delay: 1.15, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/15 text-gold-deep">
          <Check size={17} />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] text-ink-soft">정산 입금</p>
          <p className="text-[13px] font-semibold text-navy">완료</p>
        </div>
      </motion.div>
    </div>
  );
}
