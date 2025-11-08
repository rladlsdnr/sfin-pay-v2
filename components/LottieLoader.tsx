'use client';
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface LottieLoaderProps {
    src: string;
    size?: number;
}

export default function LottieLoader({ src, size = 140 }: LottieLoaderProps) {
    const [data, setData] = useState<object | null>(null);

    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then(setData)
            .catch(console.error);
    }, [src]);

    if (!data) return <div style={{ width: size, height: size }} />; // 로딩 중 placeholder

    return (
        <Lottie
            animationData={data}
            loop
            autoplay
            className="select-none pointer-events-none"
            style={{ width: size, height: size }}
        />
    );
}
