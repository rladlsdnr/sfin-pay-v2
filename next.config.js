/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 좌측 하단 Next.js 개발 표시기(N 배지) 숨김
  devIndicators: false,
};

module.exports = nextConfig;
