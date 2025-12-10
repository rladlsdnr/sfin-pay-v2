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
    template: "스핀페이 SFIN PAY | %s",
  },
  description:
    "스핀페이는 오프라인·온라인·QR 결제를 모두 지원하는 통합 결제 플랫폼입니다. 빠르고 안전한 결제 인프라, 안정적인 D+0/D+1 정산, 유동성, 보안, 컴플라이언스 솔루션을 제공합니다.",
  metadataBase: new URL("https://sfinpayment.com/"),
  keywords: [
    "통합 결제 플랫폼",
    "무선단말기",
    "카드결제기",
    "POS 단말기",
    "온라인 결제",
    "QR 결제",
    "D+0 정산",
    "D+1 정산",
    "결제 인프라",
    "스핀페이",
  ],
  openGraph: {
    type: "website",
    url: "https://sfinpayment.com/",
    siteName: "스핀페이 SFIN PAY",
    title: "스핀페이 SFIN PAY | 무선단말기·카드결제기·POS 포스 단말기 결제 솔루션",//"SFIN PAY | 통합 결제 · 정산 플랫폼",
    description:
      "스핀페이는 오프라인·온라인·QR 결제를 모두 지원하는 통합 결제 플랫폼입니다. 빠르고 안전한 결제 인프라, 안정적인 D+0/D+1 정산, 유동성, 보안, 컴플라이언스 솔루션을 제공합니다.",
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
      "스핀페이는 오프라인·온라인·QR 결제를 모두 지원하는 통합 결제 플랫폼입니다. 빠르고 안전한 결제 인프라, 안정적인 D+0/D+1 정산, 유동성, 보안, 컴플라이언스 솔루션을 제공합니다.",
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
        {
          /*
          <meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
          <meta name="naver-site-verification" content="YOUR_NAVER_CODE" />
          */
        }
        {/*
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        */}
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
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
                  name: "스핀페이 SFIN PAY",
                  alternateName: ["SFIN PAY", "스핀페이"],
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
