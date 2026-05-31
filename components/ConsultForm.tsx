"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Send, ShieldCheck, Clock3, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const EASE = [0.16, 1, 0.3, 1] as const;

const INDUSTRIES = ["외식 · 프랜차이즈", "쇼핑 · 판매 · 유통", "서비스 · 교육", "숙박 · 여행 · 레저", "병원 · 의료", "콘텐츠 · 엔터", "기업 · B2B", "개인 · 프리랜서", "기타"];
const SALES = ["월 1천만원 미만", "1천만 ~ 3천만원", "3천만 ~ 1억원", "1억원 이상", "아직 미정"];

const EMPTY = { company: "", name: "", phone: "", industry: "", sales: "", message: "", agree: false };

export default function ConsultForm(): JSX.Element {
  const [form, setForm] = useState({ ...EMPTY });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const t = e.target as HTMLInputElement;
    setForm((f) => ({ ...f, [t.name]: t.type === "checkbox" ? t.checked : t.value }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending" || !form.agree) return;
    setStatus("sending");

    const payload = {
      company: form.company, name: form.name, phone: form.phone,
      industry: form.industry, sales: form.sales, message: form.message,
      submitted_at: new Date().toLocaleString("ko-KR"),
    };

    const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      // 1) EmailJS 발송 (키가 설정된 경우)
      if (SERVICE && TEMPLATE && KEY) {
        await emailjs.send(SERVICE, TEMPLATE, payload as any, KEY);
      } else {
        // 폴백: 메일 클라이언트로 작성 (키 미설정 시에도 동작)
        const subject = encodeURIComponent(`[가맹 상담] ${form.company} · ${form.name}`);
        const body = encodeURIComponent(
          `상호: ${form.company}\n담당자: ${form.name}\n연락처: ${form.phone}\n업종: ${form.industry}\n월 카드매출: ${form.sales}\n\n${form.message}`
        );
        window.open(`mailto:sfinpay@gmail.com?subject=${subject}&body=${body}`, "_blank");
      }
      // 2) 내부 저장 시도 (실패 무시)
      try {
        await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      } catch {}
      setStatus("done");
    } catch (err) {
      console.error(err);
      // 발송 실패 시 메일 폴백
      const subject = encodeURIComponent(`[가맹 상담] ${form.company} · ${form.name}`);
      const body = encodeURIComponent(`상호: ${form.company}\n담당자: ${form.name}\n연락처: ${form.phone}\n업종: ${form.industry}\n월 카드매출: ${form.sales}\n\n${form.message}`);
      window.open(`mailto:sfinpay@gmail.com?subject=${subject}&body=${body}`, "_blank");
      setStatus("done");
    }
  };

  const input = "w-full rounded-xl px-4 py-3 text-[15px] text-navy-900 bg-white/75 border border-[rgba(124,108,255,0.22)] outline-none focus:border-[rgba(124,108,255,0.6)] focus:bg-white transition placeholder:text-ink-soft";
  const label = "text-[13px] font-semibold text-navy-900";

  if (status === "done") {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}
        className="glass-light-strong rounded-3xl p-10 md:p-12 text-center">
        <span className="grid place-items-center mx-auto h-16 w-16 rounded-full text-white" style={{ background: "var(--brand-grad)" }}><CheckCircle2 size={30} /></span>
        <h3 className="mt-5 text-2xl font-extrabold text-navy-900">상담 신청이 접수되었습니다</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-ink-muted">담당자가 영업일 기준 빠르게 연락드리겠습니다.<br />급하신 경우 카카오톡 채널로도 문의해 주세요.</p>
        <button onClick={() => { setForm({ ...EMPTY }); setStatus("idle"); }} className="mt-7 inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-[14px] glass-light text-navy-900 hover:border-[rgba(124,108,255,0.4)] transition">새 상담 신청</button>
      </motion.div>
    );
  }

  return (
    <motion.form initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: EASE }}
      onSubmit={submit} className="glass-light-strong rounded-3xl p-7 md:p-9">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className={label}>상호(업체명) <span className="text-[#6d3bd1]">*</span></label><input name="company" required value={form.company} onChange={onChange} className={`mt-1.5 ${input}`} placeholder="예: 스핀카페" /></div>
        <div><label className={label}>담당자 성함 <span className="text-[#6d3bd1]">*</span></label><input name="name" required value={form.name} onChange={onChange} className={`mt-1.5 ${input}`} placeholder="홍길동" /></div>
      </div>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        <div><label className={label}>연락처 <span className="text-[#6d3bd1]">*</span></label><input name="phone" required value={form.phone} onChange={onChange} className={`mt-1.5 ${input}`} placeholder="010-0000-0000" inputMode="tel" /></div>
        <div><label className={label}>업종</label>
          <select name="industry" value={form.industry} onChange={onChange} className={`mt-1.5 ${input}`}>
            <option value="">선택해 주세요</option>
            {INDUSTRIES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className={label}>월 카드매출 규모</label>
        <select name="sales" value={form.sales} onChange={onChange} className={`mt-1.5 ${input}`}>
          <option value="">선택해 주세요</option>
          {SALES.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div className="mt-4">
        <label className={label}>문의 내용</label>
        <textarea name="message" rows={4} value={form.message} onChange={onChange} className={`mt-1.5 ${input} resize-none`} placeholder="단말기·PG·정산 등 궁금하신 점을 남겨주세요." />
      </div>

      <label className="mt-5 flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" name="agree" checked={form.agree} onChange={onChange} className="mt-0.5 h-4 w-4 accent-[#7c6bff]" />
        <span className="text-[13px] leading-[1.6] text-ink-muted">상담을 위한 개인정보 수집·이용에 동의합니다. (상호·연락처·문의내용은 상담 목적에만 사용됩니다.)</span>
      </label>

      <button type="submit" disabled={status === "sending" || !form.agree}
        className="btn-brand mt-6 w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base text-white disabled:opacity-50 disabled:cursor-not-allowed">
        {status === "sending" ? <><Loader2 size={18} className="animate-spin" /> 신청 중...</> : <><Send size={17} /> 상담 신청하기</>}
      </button>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-ink-soft">
        <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-brand-violet" /> 정보 안전 보관</span>
        <span className="inline-flex items-center gap-1.5"><Clock3 size={14} className="text-brand-violet" /> 영업일 내 연락</span>
        <span className="inline-flex items-center gap-1.5"><MessageCircle size={14} className="text-brand-violet" /> 카카오 상담 가능</span>
      </div>
    </motion.form>
  );
}
