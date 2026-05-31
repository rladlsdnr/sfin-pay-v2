"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay: d, ease: EASE },
});

// 배경 이미지 (플레이스홀더) — 실제 렌더로 교체 시 이 배열만 바꾸면 됩니다.
const BG_IMAGES = [
  "/photos/p19.png", "/photos/p20.png", "/photos/p02.png",
  "/photos/p01.png", "/photos/p05.png", "/photos/p24.png",
];

export default function Hero(): JSX.Element {
  // 배경 로테이션
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % BG_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  // 배경 이미지에 아주 미세한 마우스 패럴랙스
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bx = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), { stiffness: 60, damping: 20 });
  const by = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 60, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { mx.set(0); my.set(0); }

  return (
    <section
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden px-6 py-28 min-h-[100dvh] mesh-light"
    >
      {/* ============================================================
          배경 이미지 — 6종 크로스페이드 로테이션 (플레이스홀더)
          → 실제 렌더 교체 시: 상단 BG_IMAGES 배열의 경로만 바꾸고
            아래 wrapper 의 opacity(투명도)만 조절하면 됩니다.
          ============================================================ */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] md:opacity-[0.62]"
        style={{ x: bx, y: by, scale: 1.06 }}
      >
        {BG_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-[72%_center] md:object-center transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </motion.div>

      {/* 가독성 스크림: 중앙 라이트 + 상하단 페이드 (투명도 높여 은은하게) */}
      <div className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 58% 52% at 50% 44%, rgba(247,246,253,0.88), rgba(247,246,253,0.35) 58%, transparent 100%)" }} />
      <div className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "linear-gradient(to bottom, rgba(247,246,253,0.6) 0%, transparent 26%, transparent 64%, rgba(247,246,253,0.92) 100%)" }} />

      {/* 배경 인디케이터 (현재 슬라이드) */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {BG_IMAGES.map((_, i) => (
          <span key={i} className="h-1.5 rounded-full transition-all duration-500"
            style={{ width: i === active ? 20 : 6, background: i === active ? "var(--brand-grad)" : "rgba(124,108,255,0.3)" }} />
        ))}
      </div>

      {/* ===== 카피 (중앙 정렬) ===== */}
      <motion.div {...rise(0)} className="pill-brand relative z-20"><span className="dot-brand" /> 카드결제 · 단말기 · 온라인 결제</motion.div>

      <motion.h1 {...rise(0.08)} className="display-1 mt-6 text-navy-900 max-w-4xl text-balance relative z-20"
        style={{ textShadow: "0 2px 30px rgba(247,246,253,0.9)" }}>
        비즈니스를 성장시키는<br /><span className="heading-gradient">통합 결제 플랫폼</span>
      </motion.h1>

      <motion.p {...rise(0.2)} className="mt-6 text-[16px] md:text-[18px] leading-[1.75] text-ink-muted max-w-xl relative z-20">
        단말기 · PG · 정산을 한 곳에서. 가맹 세팅부터 빠른 정산까지,
        SFIN PAY가 결제의 처음과 끝을 맡습니다.
      </motion.p>

      <motion.div {...rise(0.32)} className="mt-9 flex flex-col sm:flex-row gap-3 relative z-20">
        <Link href="/inquiry/contract">
          <button className="btn-brand group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base">
            무료로 시작하기 <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
        <Link href="/inquiry/integration">
          <button className="glass-light inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base text-navy-900 hover:border-[rgba(124,108,255,0.4)] transition-colors">
            기능 보기
          </button>
        </Link>
      </motion.div>

      {/* ===== 신뢰 배지 (임팩트 글래스 칩) ===== */}
      <motion.div {...rise(0.5)} className="relative z-20 mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3">
        {[
          { icon: ShieldCheck, big: "안전한 결제 보안", small: "국제 표준 준수" },
          { icon: Zap, big: "막힘 없는 빠른 정산", small: "자금 흐름 걱정 끝" },
          { icon: Layers, big: "통합 결제 관리", small: "온 · 오프라인 · QR" },
        ].map((s) => (
          <div key={s.big} className="glass-light-strong lift rounded-2xl pl-2.5 pr-4 sm:pr-5 py-2.5 flex items-center gap-2.5 sm:gap-3">
            <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl text-white shrink-0" style={{ background: "var(--brand-grad)", boxShadow: "0 10px 24px -8px rgba(124,108,255,0.6)" }}>
              <s.icon size={18} />
            </span>
            <div className="text-left">
              <p className="text-[13px] sm:text-[14px] font-extrabold text-navy-900 leading-none">{s.big}</p>
              <p className="mt-1 text-[10.5px] sm:text-[11.5px] text-ink-soft">{s.small}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
