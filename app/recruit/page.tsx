"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Briefcase, Handshake, Send, CheckCircle2, Loader2 } from "lucide-react";
import PageHero from "../../components/PageHero";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Recruit(): JSX.Element {
  const [tab, setTab] = useState<"job" | "partner">("job");
  const [form, setForm] = useState({ name: "", email: "", company: "", field: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const subject = encodeURIComponent(`[${tab === "job" ? "채용 지원" : "파트너 제휴"}] ${form.name}`);
    const body = encodeURIComponent(`이름: ${form.name}\n이메일: ${form.email}\n회사/소속: ${form.company}\n분야: ${form.field}\n\n${form.message}`);
    setTimeout(() => {
      window.location.href = `mailto:sfinpay@gmail.com?subject=${subject}&body=${body}`;
      setStatus("done");
    }, 600);
  };

  const input = "w-full rounded-xl px-4 py-3 text-[15px] text-navy-900 bg-white/70 border border-[rgba(124,108,255,0.2)] outline-none focus:border-[rgba(124,108,255,0.55)] transition placeholder:text-ink-soft";

  return (
    <div className="relative z-10">
      <PageHero icon={Briefcase} kicker="JOIN US" bg="/photos/p18.png"
        title={<>SFIN PAY와 <span className="heading-gradient">함께하기</span></>}
        subtitle="채용 지원과 파트너 제휴를 한 곳에서. 아래 양식을 작성하시면 담당자가 빠르게 연락드립니다." />

      <section className="relative py-16 md:py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* 탭 */}
          <div className="flex gap-2 p-1.5 rounded-2xl glass-light w-full sm:w-fit mx-auto">
            {([["job", "채용 지원", Briefcase], ["partner", "파트너 제휴", Handshake]] as const).map(([k, label, Icon]) => (
              <button key={k} onClick={() => setTab(k)} className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-[14px] font-bold transition ${tab === k ? "text-white" : "text-ink-muted hover:text-navy-900"}`}
                style={tab === k ? { background: "var(--brand-grad)", boxShadow: "0 8px 20px -6px rgba(124,108,255,0.55)" } : {}}>
                <Icon size={16} /> {label}
              </button>
            ))}
          </div>

          <motion.form key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }}
            onSubmit={onSubmit} className="mt-8 glass-light-strong rounded-3xl p-7 md:p-9 space-y-4">
            {status === "done" ? (
              <div className="text-center py-10">
                <span className="grid place-items-center mx-auto h-16 w-16 rounded-full text-white" style={{ background: "var(--brand-grad)" }}><CheckCircle2 size={30} /></span>
                <h3 className="mt-5 text-xl font-extrabold text-navy-900">접수되었습니다</h3>
                <p className="mt-2 text-[14.5px] text-ink-muted">메일 작성 창이 열립니다. 빠르게 검토 후 연락드리겠습니다.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-[13px] font-semibold text-navy-900">이름</label><input name="name" required value={form.name} onChange={onChange} className={`mt-1.5 ${input}`} placeholder="홍길동" /></div>
                  <div><label className="text-[13px] font-semibold text-navy-900">이메일</label><input name="email" type="email" required value={form.email} onChange={onChange} className={`mt-1.5 ${input}`} placeholder="you@email.com" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="text-[13px] font-semibold text-navy-900">{tab === "job" ? "현재 소속" : "회사명"}</label><input name="company" value={form.company} onChange={onChange} className={`mt-1.5 ${input}`} placeholder={tab === "job" ? "재직 중인 회사 (선택)" : "회사명"} /></div>
                  <div><label className="text-[13px] font-semibold text-navy-900">{tab === "job" ? "지원 분야" : "제휴 분야"}</label><input name="field" value={form.field} onChange={onChange} className={`mt-1.5 ${input}`} placeholder={tab === "job" ? "예: 개발 / 영업 / 운영" : "예: 단말기 / 영업 / 기술"} /></div>
                </div>
                <div><label className="text-[13px] font-semibold text-navy-900">메시지</label><textarea name="message" rows={5} value={form.message} onChange={onChange} className={`mt-1.5 ${input} resize-none`} placeholder={tab === "job" ? "간단한 자기소개와 지원 동기를 남겨주세요." : "제휴 제안 내용을 남겨주세요."} /></div>
                <button type="submit" disabled={status === "loading"} className="btn-brand w-full inline-flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base text-white disabled:opacity-70">
                  {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> 처리 중...</> : <><Send size={17} /> 제출하기</>}
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
}
