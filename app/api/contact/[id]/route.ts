// @ts-nocheck
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const runtime = "nodejs";
const prisma = new PrismaClient();

/**
 * PATCH /api/contact/[id]
 * -----------------------------------
 * 문의 상태 변경, 메모 추가, Slack Action 처리
 */
export async function PATCH(req: Request, context: any) {
    const id = context?.params?.id;

    try {
        if (!id) {
            return NextResponse.json(
                { ok: false, error: "유효하지 않은 ID입니다." },
                { status: 400 }
            );
        }

        const { status, note, actor } = await req.json();

        if (!status && !note) {
            return NextResponse.json(
                { ok: false, error: "변경할 상태 또는 메모가 필요합니다." },
                { status: 400 }
            );
        }

        const inquiry = await prisma.inquiry.findUnique({ where: { id } });
        if (!inquiry) {
            return NextResponse.json(
                { ok: false, error: "해당 문의를 찾을 수 없습니다." },
                { status: 404 }
            );
        }

        const updated = await prisma.inquiry.update({
            where: { id },
            data: {
                status: status || inquiry.status,
                note: note
                    ? `${inquiry.note || ""}\n\n${new Date().toLocaleString(
                        "ko-KR"
                    )} — ${actor || "관리자"}: ${note}`
                    : inquiry.note,
                updatedAt: new Date(),
            },
        });

        console.log(`🟢 문의 업데이트 완료: ${id} (${status || "메모 추가"})`);

        // 🧾 Notion 동기화 (optional)
        if (process.env.NOTION_SECRET && process.env.NOTION_DATABASE_ID) {
            try {
                await fetch(
                    `https://api.notion.com/v1/pages/${inquiry.notionPageId}`,
                    {
                        method: "PATCH",
                        headers: {
                            Authorization: `Bearer ${process.env.NOTION_SECRET}`,
                            "Content-Type": "application/json",
                            "Notion-Version": "2022-06-28",
                        },
                        body: JSON.stringify({
                            properties: {
                                상태: { select: { name: status || "진행중" } },
                                메모: note
                                    ? {
                                        rich_text: [
                                            { text: { content: note } },
                                        ],
                                    }
                                    : undefined,
                            },
                        }),
                    }
                );
            } catch (err: any) {
                console.error("⚠️ Notion 동기화 실패:", err.message);
            }
        }

        // 💬 Slack 알림
        if (process.env.SLACK_WEBHOOK_URL) {
            try {
                await fetch(process.env.SLACK_WEBHOOK_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        text: `🔄 문의 상태 변경 알림\n━━━━━━━━━━━━━━━\n🏢 *회사명:* ${inquiry.company
                            }\n📧 *이메일:* ${inquiry.email}\n💬 *유형:* ${inquiry.type
                            }\n📌 *변경:* ${status || "메모 추가"
                            }\n✏️ *담당자:* ${actor || "관리자"}`,
                    }),
                });
            } catch (err: any) {
                console.error("⚠️ Slack 업데이트 실패:", err.message);
            }
        }

        return NextResponse.json({
            ok: true,
            message: "문의 상태가 업데이트되었습니다.",
            updated,
        });
    } catch (err: any) {
        console.error("❌ PATCH ERROR:", err.message);
        return NextResponse.json(
            { ok: false, error: err.message || "서버 내부 오류" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
