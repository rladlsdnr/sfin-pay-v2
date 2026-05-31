"use client";
import React from "react";

const LOGOS = [
  "kakaopay","naverpay","payco","tossbank","kakaobank","kbank",
  "shinhancard","kbcard","hyundaicard","lottecard","nhcard","bccard",
  "nicepay","kcp","inicis","kgmobilians","danal","samsungfire",
];

export default function Marquee(): JSX.Element {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="relative py-14 overflow-hidden">
      <p className="text-center text-[13px] font-semibold tracking-wide text-ink-soft mb-8">
        국내 주요 카드사 · 간편결제 · PG와 연결되는 결제 환경
      </p>
      <div className="relative" style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
        <div className="flex w-max gap-12 anim-marquee items-center">
          {row.map((name, i) => (
            <img key={i} src={`/images/partners/${name}.png`} alt=""
              className="h-7 md:h-8 w-auto object-contain opacity-55 grayscale hover:opacity-100 hover:grayscale-0 transition" />
          ))}
        </div>
      </div>
    </section>
  );
}
