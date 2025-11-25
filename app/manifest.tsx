// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "SFIN PAY",
        short_name: "SFIN PAY",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#00c896", // 브랜드 색상으로 대충 맞게
        icons: [
            {
                src: "/favicon.ico",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/favicon.ico",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
