"use client";

import React from "react";
import { motion, type Transition } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (i = 0) => ({
    //initial: { opacity: 0, y: 24 },
    //whileInView: { opacity: 1, y: 0 },
    //viewport: { once: true, amount: 0.2 },
    transition: {
        type: "tween",
        duration: 0.6,
        delay: 0.07 * i,
        ease: EASE_OUT, // ✅ 문자열 대신 베지어 튜플
    } as Transition,
});

// 사용 예시
export default function Liquidity(): JSX.Element {
    return (
        <section className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-[#E9FFF6] via-[#F4FFFC] to-white">
            <motion.div {...fadeUp(0)} className="max-w-5xl mx-auto mb-20 rounded-2xl border border-[rgba(0,200,155,0.22)] bg-white shadow-[0_8px_28px_rgba(0,200,155,0.09)]">
                {/* ... */}
            </motion.div>

            <motion.div {...fadeUp(1)} className="max-w-3xl mx-auto text-center mb-24">
                {/* ... */}
            </motion.div>
            {/* 나머지도 동일 */}
        </section>
    );
}
