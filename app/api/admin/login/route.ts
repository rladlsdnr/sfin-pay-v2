import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * ✅ 1차 로그인 (이메일 + 비밀번호 확인)
 */
export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { ok: false, message: "이메일과 비밀번호를 입력해주세요." },
                { status: 400 }
            );
        }

        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
            console.error("❌ 환경변수 누락: ADMIN_EMAIL / ADMIN_PASSWORD");
            return NextResponse.json(
                { ok: false, message: "서버 환경변수가 설정되지 않았습니다." },
                { status: 500 }
            );
        }

        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { ok: false, message: "잘못된 관리자 자격 증명입니다." },
                { status: 401 }
            );
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expires = Date.now() + 5 * 60 * 1000;
        globalThis.__SFIN_ADMIN_OTP__ = { otp, expires };

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"SFIN PAY 관리자 인증" <${process.env.MAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: "[SFIN PAY] 관리자 OTP 인증코드",
            html: `
                <div style="font-family: Pretendard, sans-serif; padding: 20px;">
                    <h2 style="color:#10b981;">SFIN PAY 관리자 인증</h2>
                    <p>보안을 위해 아래 6자리 OTP 코드를 입력해주세요.</p>
                    <div style="margin:20px 0; font-size:32px; letter-spacing:8px; font-weight:bold; color:#059669;">
                        ${otp}
                    </div>
                    <p style="font-size:13px; color:#555;">이 코드는 5분간 유효합니다.</p>
                </div>
            `,
        };

        // ✅ 이메일 발송
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            ok: true,
            message: "OTP가 이메일로 전송되었습니다.",
            next: "/admin/verify-otp",
        });
    } catch (err: any) {
        console.error("[LOGIN ERROR]", err.message);
        return NextResponse.json(
            { ok: false, message: "서버 내부 오류가 발생했습니다." },
            { status: 500 }
        );
    }
}
