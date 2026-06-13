"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname              = usePathname();
  const [visible, setVisible] = useState(true);
  const [fading, setFading]   = useState(false);
  const isFirst               = useRef(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 1600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setFading(false);
    setVisible(true);

    const fadeTimer = setTimeout(() => setFading(true), 800);
    const hideTimer = setTimeout(() => setVisible(false), 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "var(--deep-green)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: fading ? 0 : 1,
      transition: "opacity 0.4s ease",
      pointerEvents: fading ? "none" : "all",
    }}>

      {/* Spinner + Logo wrapper */}
      <div style={{ position: "relative", width: "80px", height: "80px" }}>

        {/* Rotating circle */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          style={{
            position: "absolute",
            inset: 0,
            animation: "spin 1.2s linear infinite",
          }}
        >
          {/* Track */}
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
          {/* Spinning arc */}
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="var(--brand-green)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 154"
            strokeDashoffset="0"
          />
        </svg>

        {/* Logo mark centered inside circle */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#fff",
          letterSpacing: "0.04em",
        }}>
          IKA<span style={{ color: "var(--brand-green)" }}>.</span>
        </div>

      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}