import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuroraBackground from "../components/AuroraBackground";
import ScrollToTop from "../components/ScrollToTop";
import Chatbot from "@/components/Chatbot";

/* ✅ Next.js 15 공식 metadata 기반 SEO 설정 */
export const metadata = {
  title: {
    default: "스핀페이 SFIN PAY | 무선단말기·카드결제기·POS 포스 단말기 결제 솔루션",
    template: "SFIN PAY | %s",
  },
  description:
    "SFIN PAY — 빠르고 안전한 결제·정산 인프라. D+0/D+1 정산, 유동성, 보안, 컴플라이언스.",
  metadataBase: new URL("https://sfinpayment.com/"),
  keywords: [
    "SFIN PAY",
    "PG사",
    "결제",
    "정산",
    "D+0 정산",
    "D+1 정산",
    "비대면 결제",
    "수기결제",
    "간편결제",
    "유동성",
    "보안",
    "컴플라이언스",
  ],
  openGraph: {
    type: "website",
    url: "https://sfinpayment.com/",
    title: "SFIN PAY | 통합 결제 · 정산 플랫폼",
    description:
      "빠르고 안전한 결제·정산 인프라. D+0/D+1 정산, 유동성, 보안, 컴플라이언스.",
    images: [
      {
        url: "/sfinpay.png",
        width: 1200,
        //height: 630,
        alt: "SFIN PAY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SFIN PAY",
    description:
      "SFIN PAY — D+0/D+1 정산, 수기결제, 유동성 솔루션을 제공하는 통합 결제 플랫폼.",
    images: ["/sfinpay.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

/**
 * 🌐 RootLayout — 전역 레이아웃 (SEO + Aurora + Navbar + Footer)
 * ----------------------------------------------------
 * 구성요소:
 *  - AuroraBackground (민트톤 오로라 배경)
 *  - Navbar / Footer (전역 공용 UI)
 *  - ScrollToTop (UX 유틸)
 *  - Schema.org 구조화 데이터 (Organization / WebSite / Breadcrumb)
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
        {/* ✅ 사이트 검증용 (Google / Naver Search Console) */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
        <meta name="naver-site-verification" content="YOUR_NAVER_CODE" />

        {/* ✅ Schema.org 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "SFIN PAY",
                  url: "https://sfinpayment.com/",
                  logo: "https://sfinpayment.com//og/sfinpay_logo_mint.png",
                  sameAs: [
                    "https://www.instagram.com/sfinpay",
                    "https://www.linkedin.com/company/sfinpay",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "SFIN PAY",
                  url: "https://sfinpayment.com/",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://sfinpayment.com//search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
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
        {/* 🌈 오로라 백그라운드 */}


        {/* 🧭 전역 네비게이션 */}
        <Navbar />

        {/* ⬆️ 스크롤 복귀 */}
        <ScrollToTop />

        {/* 📄 페이지 콘텐츠 */}
        <main className="relative z-10">{children}</main>

        <Chatbot />

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
                  item: "https://sfinpayment.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "서비스",
                  item: "https://sfinpayment.com//features",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
