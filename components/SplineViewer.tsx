"use client";

import React, { useEffect, useState } from "react";

const VIEWER_SRC = "https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js";

type Props = {
  /** prod.spline.design/.../scene.splinecode (웹컴포넌트) 또는 my.spline.design/... (iframe) */
  scene?: string;
  className?: string;
  fallback?: React.ReactNode;
};

/**
 * SplineViewer — 두 가지 임베드 지원:
 *  - .splinecode  → <spline-viewer> 웹컴포넌트 (투명 캔버스, 타이트한 통합)
 *  - my.spline.design / 기타 페이지 → <iframe> (퍼블리시 링크)
 * 로드 전/실패 시 fallback. 외부 CDN 차단 환경에선 fallback 노출.
 */
export default function SplineViewer({ scene, className, fallback }: Props): JSX.Element {
  const isCode = !!scene && scene.endsWith(".splinecode");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  // .splinecode 일 때만 웹컴포넌트 스크립트 주입
  useEffect(() => {
    if (!scene || !isCode) return;
    if (typeof window !== "undefined" && window.customElements?.get("spline-viewer")) { setReady(true); return; }
    let cancelled = false;
    const prev = document.querySelector<HTMLScriptElement>("script[data-spline-viewer]");
    if (prev) {
      prev.addEventListener("load", () => !cancelled && setReady(true));
      prev.addEventListener("error", () => !cancelled && setFailed(true));
      return () => { cancelled = true; };
    }
    const s = document.createElement("script");
    s.type = "module"; s.src = VIEWER_SRC; s.setAttribute("data-spline-viewer", "");
    s.onload = () => !cancelled && setReady(true);
    s.onerror = () => !cancelled && setFailed(true);
    document.head.appendChild(s);
    return () => { cancelled = true; };
  }, [scene, isCode]);

  if (!scene || failed) return <>{fallback ?? null}</>;

  // iframe 모드 (my.spline.design 등 퍼블리시 링크)
  if (!isCode) {
    return (
      <div className={className} style={{ position: "relative" }}>
        {!ready && fallback ? <div style={{ position: "absolute", inset: 0 }}>{fallback}</div> : null}
        <iframe
          src={scene}
          title="SFIN PAY 3D"
          loading="lazy"
          onLoad={() => setReady(true)}
          onError={() => setFailed(true)}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          style={{ width: "100%", height: "100%", border: 0, display: "block", background: "transparent" }}
        />
      </div>
    );
  }

  // 웹컴포넌트 모드 (.splinecode)
  return (
    <div className={className} style={{ position: "relative" }}>
      {!ready && fallback ? <div style={{ position: "absolute", inset: 0 }}>{fallback}</div> : null}
      {ready ? React.createElement("spline-viewer", { url: scene, style: { width: "100%", height: "100%", display: "block" } }) : null}
    </div>
  );
}
