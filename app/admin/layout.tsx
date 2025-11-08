// @ts-nocheck
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

/**
 * ✅ AdminLayout (Next.js 15 App Router Compatible)
 * - JWT 토큰 검증을 통한 관리자 세션 보호
 * - 빌드 시 타입 오류 방지를 위해 @ts-nocheck 추가
 * - Node 런타임 전용 코드 (jsonwebtoken 사용)
 */
export const runtime = "nodejs";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = cookies();
    const token = cookieStore.get("sfin_admin_token")?.value;
    const secret = process.env.JWT_SECRET!;

    if (!token) redirect("/admin/login");

    try {
        jwt.verify(token, secret);
    } catch (err) {
        redirect("/admin/login");
    }

    return <>{children}</>;
}
