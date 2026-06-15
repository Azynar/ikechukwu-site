"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const cyclingWords = ["A Builder.", "An Advocate.", "A Changemaker."];

export default function Hero() {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % cyclingWords.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "72px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Soft green glow top right */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(59,181,74,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-site" style={{ paddingTop: "3rem", paddingBottom: "5rem", width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="hero-grid">

         {/* Left — Text */}
<div>
  <FadeUp delay={0}>
    <div className="tag-pill" style={{ marginBottom: "2rem" }}>
      <span style={{
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "var(--brand-green)",
        display: "inline-block",
      }} />
      Nigerian Agripreneur · Food Safety Advocate
    </div>
  </FadeUp>

  <FadeUp delay={0.1}>
    <h1 style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
      fontWeight: 900,
      color: "var(--ink)",
      lineHeight: 1.08,
      marginBottom: "1.25rem",
    }}>
      Ikechukwu<br />
      <span style={{ color: "var(--brand-green)" }}>Amajuoyi.</span>
    </h1>
  </FadeUp>

  <FadeUp delay={0.2}>
    <div style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
      fontStyle: "italic",
      color: "var(--near-black)",
      marginBottom: "2rem",
      minHeight: "3rem",
      display: "flex",
      alignItems: "center",
    }}>
      <span style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
        display: "inline-block",
      }}>
        {cyclingWords[index]}
      </span>
    </div>
  </FadeUp>

  <FadeUp delay={0.3}>
    <p style={{
      fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
      color: "var(--muted)",
      maxWidth: "480px",
      lineHeight: 1.8,
      marginBottom: "2.75rem",
    }}>
      Building agro-processing systems that eliminate food adulteration
      and make safe, traceable food accessible across Africa.
    </p>
  </FadeUp>

  <FadeUp delay={0.4}>
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Link href="/about" className="btn-primary">My Story</Link>
      <Link href="/contact" className="btn-outline">Work With Me</Link>
    </div>
  </FadeUp>

  <FadeUp delay={0.5}>
    <div style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <div style={{
        width: "1px",
        height: "48px",
        background: "linear-gradient(to bottom, var(--brand-green), transparent)",
      }} />
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--muted)",
      }}>
        Scroll to explore
      </span>
    </div>
  </FadeUp>
</div>

          {/* Right — Image */}
<FadeUp delay={0.3}>
  <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
    <div style={{
      position: "relative",
      width: "100%",
      maxWidth: "420px",
      aspectRatio: "4/5",
      borderRadius: "16px",
      overflow: "hidden",
      zIndex: 1,
      background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)",
      border: "1px solid rgba(59,181,74,0.15)",
    }}>
      <Image
        src="/hero-image.jpg"
        alt="Ikechukwu Amajuoyi"
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
      />
    </div>
  </div>
</FadeUp>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}