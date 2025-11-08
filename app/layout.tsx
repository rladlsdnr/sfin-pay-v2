import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuroraBackground from "../components/AuroraBackground";
import ScrollToTop from "../components/ScrollToTop";

/* ✅ Next.js 15 공식 metadata 기반 SEO 설정 (next-seo 제거 대체용) */
export const metadata = {
  title: {
    default: "SFIN PAY",
    template: "%s | SFIN PAY",
  },
  description:
    "SFIN PAY — 빠르고 안전한 결제·정산 인프라. D+0/D+1 정산, 유동성, 보안, 컴플라이언스.",
  metadataBase: new URL("https://www.sfinpay.co.kr"),
  openGraph: {
    type: "website",
    url: "https://www.sfinpay.co.kr",
    title: "SFIN PAY",
    description:
      "빠르고 안전한 결제·정산 인프라. D+0/D+1 정산, 유동성, 보안, 컴플라이언스.",
    images: [
      { url: "/og/sfinpay_og.png", width: 1200, height: 630, alt: "SFIN PAY" },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * 🌐 RootLayout — SFIN PAY 전역 레이아웃 (프론트엔드 전용)
 * ----------------------------------------------------
 * 구성요소:
 *  - AuroraBackground (민트톤 오로라 배경)
 *  - Navbar / Footer (전역 공용 UI)
 *  - ScrollToTop (UX 유틸)
 * ----------------------------------------------------
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* ✅ Schema.org 구조화 데이터 (Organization / Website / Breadcrumb) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SFIN PAY",
              url: "https://www.sfinpay.co.kr",
              logo: "https://www.sfinpay.co.kr/og/sfinpay_logo_mint.png",
              sameAs: [
                "https://www.instagram.com/sfinpay",
                "https://www.linkedin.com/company/sfinpay",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SFIN PAY",
              url: "https://www.sfinpay.co.kr",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.sfinpay.co.kr/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className="
          relative min-h-screen overflow-x-hidden
          text-[#0b2723]
          font-['Pretendard','Inter','sans-serif']
          bg-gradient-to-br from-[#ecfeff] via-[#f0fdfa] to-white
          antialiased transition-colors duration-700
        "
      >
        {/* 🌈 전역 Aurora Background */}
        <AuroraBackground />

        {/* 🧭 전역 네비게이션 */}
        <Navbar />

        {/* ⬆️ 스크롤 복귀 */}
        <ScrollToTop />

        {/* 📄 페이지 콘텐츠 */}
        <main className="relative z-10">{children}</main>

        {/* ⚓ 전역 푸터 */}
        <Footer />

        {/* 🧩 BreadcrumbList 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "홈",
                  item: "https://www.sfinpay.co.kr",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "서비스",
                  item: "https://www.sfinpay.co.kr/features",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
