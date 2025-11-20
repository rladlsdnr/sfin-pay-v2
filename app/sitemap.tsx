// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = "https://sfinpayment.com";

// 모든 정적 경로 리스트
const routes = [
    "", // '/'
    "/b2b",
    "/careers",
    "/company",
    "/device",
    "/distribution",
    "/entertainment",
    "/fb",
    "/healthcare",
    "/hospitality",
    "/inquiry",
    "/inquiry/contract",
    "/inquiry/general",
    "/inquiry/integration",
    "/inquiry/liquidity",
    "/inquiry/settlement",
    "/moto",
    "/online-pay",
    "/payment-faq",
    "/personal",
    "/privacy",
    "/qr-pay",
    "/recruit",
    "/security",
    "/security-policy",
    "/service",
    "/support",
    "/tech-support",
    "/termsofuse",
    "/transparency-report",
    "/vision",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return routes.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : 0.7,
    }));
}
