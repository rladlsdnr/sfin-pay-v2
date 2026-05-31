'use client';
import React from 'react';

/**
 * 보안정책 PDF 저장 버튼
 * --------------------------------------------------
 * 브라우저 기본 인쇄 기능(window.print)을 사용합니다.
 * 인쇄 대화상자에서 "PDF로 저장"을 선택하면 됩니다.
 * 네비게이션·푸터·이 버튼은 인쇄 전용 스타일(globals.css의 @media print)에서
 * 숨겨지므로 본문만 깔끔하게 출력됩니다. 텍스트는 선택·복사가 가능합니다.
 */
export default function SecurityPolicyPDFGenerator(): JSX.Element {
    const handlePrint = (): void => {
        if (typeof window !== 'undefined') window.print();
    };

    return (
        <button
            onClick={handlePrint}
            className="no-print bg-navy text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition"
        >
            PDF로 저장
        </button>
    );
}
