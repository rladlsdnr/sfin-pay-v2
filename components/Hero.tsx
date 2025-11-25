"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function LottieLoader({ src, className }: { src: string; className?: string }) {
    const [data, setData] = React.useState<object | null>(null);

    React.useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, [src]);

    if (!data) return null;
    return <Lottie animationData={data} loop autoplay className={className} />;
}

export default function Hero(): JSX.Element {
    const ref = useRef<HTMLElement | null>(null);

    const scrollToFeatures = (): void => {
        const section = document.getElementById("features");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section
            ref={ref}
            className="relative flex flex-col lg:flex-row items-center justify-between pt-24 pb-16 min-h-[100dvh] overflow-hidden"
        >
            {/* 배경 효과 */}
            <div
                className="absolute inset-0 -z-[5]
          bg-[radial-gradient(ellipse_at_70%_20%,rgba(63,255,222,0.08),transparent_10%),radial-gradient(ellipse_at_20%_80%,rgba(50,245,210,0.08),transparent_10%)]"
            />

            {/* 좌측 텍스트 영역 */}
            <div className="z-10 w-full lg:w-1/2 px-10 md:px-16 lg:px-24 py-24 lg:py-0 text-center lg:text-left">
                <h1
                    className="hero-fade-up text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0b3c34]"
                >
                    {/* 상단 서브 타이틀 */}
                    <span className="block mb-3 text-[#000000] text-base md:text-lg font-semibold">
                        PG · 결제 단말기 · 온라인 결제까지
                    </span>

                    {/* 메인 타이틀 */}
                    <span
                        className="block
              text-transparent bg-clip-text
              bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000]"
                    >
                        비즈니스를 성장시키는
                        <br />
                        통합 결제 플랫폼
                    </span>
                </h1>

                {/* 본문 설명 */}
                <p
                    className="hero-fade-up-delay mt-6 text-base md:text-lg text-[#000000]/90 leading-relaxed max-w-md mx-auto lg:mx-0"
                >
                    SFIN PAY는 <strong>보안·안정성·확장성</strong>을 기반으로
                    온라인과 오프라인을 아우르는 결제 환경을 제공합니다.
                    <br />
                    모든 거래를 투명하고 신뢰 있게.
                </p>

                {/* CTA 버튼 */}
                <div className="hero-fade-up-delay mt-10 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Link href="/inquiry/contract">
                        <button
                            className="px-9 py-4 rounded-xl font-semibold shadow-lg
                bg-gradient-to-r from-[#000000] to-[#000000]
                hover:from-[#000000] hover:to-[#000000]
                text-white text-base md:text-lg
                transition-transform transition-colors duration-200
                hover:scale-[1.02]"
                        >
                            무료로 시작하기 →
                        </button>
                    </Link>

                    <button
                        onClick={scrollToFeatures}
                        className="px-9 py-4 rounded-xl font-medium
              border border-[#000000]/40 hover:border-[#000000]
              text-[#000000] text-base md:text-lg
              transition-transform transition-colors duration-200
              hover:scale-[1.02]"
                    >
                        기능 보기
                    </button>
                </div>

                {/* 필요하면 Lottie를 다시 쓰되, 데스크탑 전용으로만 두는 것도 방법 */}
                {/* 
        <div className="hidden lg:flex mt-14 justify-center">
          <LottieLoader
            src="/lottie/payment_success.json"
            className="w-4/5 max-w-[320px]"
          />
        </div>
        */}
            </div>

            {/* 오른쪽 시각화 영역 (추후 구성용) */}
            <div className="relative hidden lg:flex w-1/2 justify-center items-center">
                <div className="relative w-[540px] h-[420px] flex items-center justify-center">
                    {/* Visualization 영역 */}
                </div>
            </div>
        </section>
    );
}
