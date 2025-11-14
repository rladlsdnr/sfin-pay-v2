// next-seo.config.ts
const seoConfig = {
    titleTemplate: 'SFIN PAY | %s',
    defaultTitle: 'SFIN PAY | 통합 결제 · 정산 플랫폼',
    description:
        'SFIN PAY는 D+0 정산, 간편결제, 비대면 결제, 수기결제 등 모든 산업군에 맞춘 올인원 결제/정산 솔루션을 제공합니다.',
    canonical: 'http://sfinpayment.com/',
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: 'http://sfinpayment.com/',
        siteName: 'SFIN PAY',
        title: 'SFIN PAY | 통합 결제 · 정산 플랫폼',
        description:
            'SFIN PAY는 D+0 정산, 간편결제, 비대면 결제, 수기결제 등 모든 산업군에 맞춘 올인원 결제/정산 솔루션을 제공합니다.',
        images: [
            {
                url: 'http://sfinpayment.com//og/main.png',
                width: 1200,
                height: 630,
                alt: 'SFIN PAY 메인 이미지',
            },
        ],
    },
    twitter: {
        handle: '@sfinpay',
        site: '@sfinpay',
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        {
            name: 'keywords',
            content:
                'PG, 결제, 정산, D+0, D+1, 비대면결제, 간편결제, 수기결제, 프리랜서결제, 숙박결제, 콘텐츠결제, 의료결제',
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
    ],
};

export default seoConfig;
