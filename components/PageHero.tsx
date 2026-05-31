"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const rise = (i = 0) => ({
  initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: i * 0.08, ease: EASE },
});

export default function PageHero({
  icon: Icon, kicker, title, subtitle, bg = "/photos/p13.png",
  primary, secondary, stats,
}: {
  icon: LucideIcon; kicker: string; title: React.ReactNode; subtitle: string; bg?: string;
  primary?: { label: string; href: string }; secondary?: { label: string; href: string };
  stats?: { k: string; v: string }[];
}): JSX.Element {
  return (
    <section className="relative flex flex-col items-center text-center overflow-hidden px-6 pt-36 md:pt-44 pb-20 md:pb-24 mesh-light">
      <img src={bg} alt="" aria-hidden className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-[0.4] md:opacity-[0.48] scale-110 object-[70%_center] md:object-center" />
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(247,246,253,0.86), rgba(247,246,253,0.32) 60%, transparent 100%)" }} />
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "linear-gradient(to bottom, rgba(247,246,253,0.5), transparent 30%, rgba(247,246,253,0.9))" }} />

      <motion.span {...rise(0)} className="grid place-items-center w-16 h-16 rounded-2xl text-white relative z-10" style={{ background: "var(--brand-grad)", boxShadow: "0 16px 38px -10px rgba(124,108,255,0.6)" }}><Icon size={28} /></motion.span>
      <motion.div {...rise(1)} className="pill-brand mt-6 relative z-10"><span className="dot-brand" /> {kicker}</motion.div>
      <motion.h1 {...rise(2)} className="display-1 mt-5 text-navy-900 max-w-4xl text-balance relative z-10">{title}</motion.h1>
      <motion.p {...rise(3)} className="mt-6 text-[16px] md:text-[18px] leading-[1.75] text-ink-muted max-w-2xl relative z-10">{subtitle}</motion.p>
      {(primary || secondary) && (
        <motion.div {...rise(4)} className="mt-9 flex flex-col sm:flex-row gap-3 relative z-10">
          {primary && <Link href={primary.href}><button className="btn-brand group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base">{primary.label} <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button></Link>}
          {secondary && <Link href={secondary.href}><button className="glass-light inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base text-navy-900 hover:border-[rgba(124,108,255,0.4)] transition-colors">{secondary.label}</button></Link>}
        </motion.div>
      )}
      {stats && (
        <motion.div {...rise(5)} className="mt-12 w-full max-w-lg grid grid-cols-3 divide-x divide-[rgba(124,108,255,0.22)] relative z-10">
          {stats.map((s) => (
            <div key={s.k} className="flex flex-col items-center px-2">
              <span className="text-[16px] sm:text-[19px] font-extrabold text-navy-900 tabular leading-none">{s.v}</span>
              <span className="mt-1.5 text-[11px] sm:text-[12.5px] text-ink-soft">{s.k}</span>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
