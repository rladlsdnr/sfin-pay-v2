"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, HelpCircle, SendHorizonal } from "lucide-react";

const FAQ_LIST: { keywords: string[]; answer: React.ReactNode }[] = [
    { keywords: ["정산 주기"], answer: <>SFIN PAY는 기본적으로 D+1(익일) 정산을 지원하며, 협의에 따라 D+0(당일) 정산도 가능합니다.</> },
    { keywords: ["수수료"], answer: <>결제 수수료는 업종·거래량에 따라 상이하며 평균 1~3% 수준입니다.<br />정확한 견적은 가맹 문의 시 안내드립니다.</> },
    {
        keywords: ["가맹 문의", "가맹", "제휴"],
        answer: <>
            SFIN PAY 가맹 문의는 아래 방법으로 접수하실 수 있어요.
            <br />
            📩 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sfinpay@gmail.com&su=SFIN%20PAY%20문의&body=회사명:%0A문의유형:%0A문의내용:" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline" >메일로 문의하기</a>
            <br />
            💬 <a href="http://pf.kakao.com/_dqyYn/friend" target="_blank" rel="noopener noreferrer" className="text-decoration-line: underline">카카오톡 상담하기</a>
            <br />
            ☎️ <>대표 전화  : 010-2740-1530</>
        </>
    },
    { keywords: ["보안"], answer: <>모든 결제 데이터는 PCI-DSS 및 ISMS 인증 체계로 관리되며,<br />실시간 위험 탐지 시스템이 적용됩니다.</> },
    {
        keywords: ["고객센터", "문의", "전화"],
        answer: <>
            고객센터는 평일 09:00~18:00 운영됩니다.
            <br />
            <a href="mailto:sfinpay@gmail.com">sfinpay@gmail.com</a> 또는
            <br />
            <a href="http://pf.kakao.com/_dqyYn/friend" target="_blank" rel="noopener noreferrer" >카카오톡 스핀페이 채널</a>로 문의주세요.
        </>
    },
];

interface ChatMessage { from: "user" | "bot"; text: React.ReactNode; }

const findBestMatch = (text: string): React.ReactNode => {
    const lower = text.toLowerCase();
    const matched = FAQ_LIST.find(f => f.keywords.some(k => lower.includes(k.toLowerCase())));
    if (matched) return matched.answer;
    return <>이 주제에 대한 답변은 당장 안내드리기 어려워요. 😊<br />하지만 걱정 마세요.<br />가맹팀이 신속히 안내드릴 수 있도록 도와드릴게요.<br />👉 <a href="/inquiry/contract">가맹 문의 바로가기</a><br />또는 <a href="mailto:sfinpay@gmail.com">sfinpay@gmail.com</a> 로 문의해 주세요.</>;
};

export default function Chatbot(): JSX.Element {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { from: "bot", text: <>안녕하세요 👋 SFIN PAY 자동상담입니다.<br />무엇을 도와드릴까요?</> },
    ]);
    const [input, setInput] = useState("");
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
        }
    }, [messages, isChatOpen]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed) return;
        setMessages(prev => [...prev, { from: "user", text: trimmed }]);
        const reply = findBestMatch(trimmed);
        setInput("");
        setTimeout(() => setMessages(prev => [...prev, { from: "bot", text: reply }]), 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSend();
    };

    const handleQuickFaq = (keyword: string) => {
        const reply = findBestMatch(keyword);
        setMessages(prev => [...prev, { from: "user", text: keyword }, { from: "bot", text: reply }]);
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
            {/* 토글 버튼 */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsChatOpen(p => !p)}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#00b894] flex items-center justify-center shadow-lg text-white hover:shadow-xl"
                aria-label="SFIN PAY 상담 열기"
            >
                {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>

            {/* 채팅창 */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ duration: 0.22 }}
                        className={`
              fixed inset-0 w-screen h-[calc(100dvh-84px)] rounded-none border-none
              sm:inset-auto sm:bottom-28 sm:right-6 sm:w-[420px] sm:max-h-[620px]
              sm:rounded-2xl sm:border sm:border-[#a6f2df]
              flex flex-col bg-white shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden
            `}
                    >
                        {/* 헤더 (고정 높이) */}
                        <div className="bg-[#00b894] text-white px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between text-sm sm:text-base font-semibold">
                            <span>💬 SFIN PAY 자동상담</span>
                            <button onClick={() => setIsChatOpen(false)} className="hover:opacity-80 transition" aria-label="닫기">
                                <X size={18} />
                            </button>
                        </div>

                        {/* 스크롤 영역(메시지) — 하단 고정 푸터(FAQ+입력) 높이만큼 패딩 */}
                        <div
                            ref={chatRef}
                            className="
                flex-1 overflow-y-auto space-y-3
                px-3 sm:px-5 py-3 sm:py-4
                text-[13px] sm:text-[15px] leading-relaxed
                scrollbar-thin scrollbar-thumb-[#36ffc6]/50 scrollbar-track-transparent
              "
                        >
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`
                      px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl shadow-sm max-w-[84%]
                      text-[12px] sm:text-[14px]
                      ${msg.from === "user"
                                                ? "bg-[#36ffc6]/90 text-[#004d3f] whitespace-pre-line"
                                                : "bg-[#f5fffd] text-[#004d3f] border border-[#c5fff0]"}
                    `}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 하단 고정 푸터: FAQ + 입력 (모바일에서 항상 표시/고정) */}
                        <div className="static bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                            {/* FAQ 영역 (모바일만 약간 줄인 높이 / 버튼은 모바일에서 더 큼) */}
                            <div
                                className="
                  px-3 py-2.5 sm:px-4 sm:py-4
                  bg-[#f0fff9] border-b border-gray-200
                "
                            >
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {FAQ_LIST.slice(0, 5).map((faq, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleQuickFaq(faq.keywords[0])}
                                            className="
                        px-3.5 py-2 text-[13px]
                        sm:px-3 sm:py-1.5 sm:text-xs
                        rounded-full border border-[#36ffc6]/40 bg-white
                        hover:bg-[#36ffc6]/10 text-[#007a65] font-medium
                        transition flex items-center
                      "
                                        >
                                            <HelpCircle size={14} className="mr-1 text-[#00d8b8] sm:w-3 sm:h-3" />
                                            {faq.keywords[0]}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 입력 영역 */}
                            <div className="px-3 py-2.5 sm:px-3 sm:py-3 bg-white">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyPress}
                                        placeholder="문의 내용을 입력하세요..."
                                        className="
                      flex-1 px-3 py-2 text-[13px] sm:text-sm
                      border border-[#a6f2df] rounded-lg
                      focus:ring-1 focus:ring-[#36ffc6]/70 outline-none
                    "
                                    />
                                    <button
                                        onClick={handleSend}
                                        className="
                      p-2.5 sm:p-3 rounded-full bg-[#00b894]
                      hover:bg-[#00d8b8] text-white transition
                      flex items-center justify-center
                    "
                                    >
                                        <SendHorizonal className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
