"use client";

import { GiGearHammer } from "react-icons/gi";
import { MdCampaign } from "react-icons/md";
import { RiShakeHandsLine } from "react-icons/ri";
import { PiLeafLight } from "react-icons/pi";
import FadeUp from "@/components/ui/FadeUp";

const pillars = [
  {
    label: "I Build",
    title: "Integrated Agribusiness Ventures",
    description:
      "Leading KR Foods and PalmLoop — two ventures tackling food safety, waste valorization, and climate action across Nigeria's palm oil value chain.",
    icon: <GiGearHammer size={28} color="var(--brand-green)" />,
  },
  {
    label: "I Advocate",
    title: "Climate & Food Systems",
    description:
      "Championing food safety, climate resilience, and export development as a Value Chain Ambassador for African Food Changemakers and Deputy Hub Lead for SBN Nigeria.",
    icon: <MdCampaign size={28} color="var(--brand-green)" />,
  },
  {
    label: "I Consult",
    title: "SMEs & Agribusinesses",
    description:
      "Supporting startups and agribusinesses with business strategy, investment readiness, and market access as a NEPC Registered Business Development Service Provider.",
    icon: <RiShakeHandsLine size={28} color="var(--brand-green)" />,
  },
  {
    label: "I Sustain",
    title: "Circular Economy & PalmLoop",
    description:
      "Through PalmLoop, transforming palm oil processing waste into biomass fuel, biochar, and climate-positive commodities — proving that sustainability and profitability go hand in hand.",
    icon: <PiLeafLight size={28} color="var(--brand-green)" />,
  },
];

export default function WhatIDo() {
  return (
    <section className="section-pad" style={{ background: "transparent" }}>
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <FadeUp delay={0}>
            <div className="tag-pill" style={{ marginBottom: "1rem" }}>
              What I Do
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "var(--ink)",
                maxWidth: "480px",
                lineHeight: 1.2,
              }}
            >
              Four Pillars. One Mission.
            </h2>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {pillars.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "12px",
                  padding: "2rem",
                  position: "relative",
                  transition: "border-color 0.25s, transform 0.2s, box-shadow 0.25s",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--brand-green)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 32px rgba(59,181,74,0.1)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(0,0,0,0.07)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "2rem",
                    width: "40px",
                    height: "3px",
                    background: "var(--brand-green)",
                    borderRadius: "0 0 3px 3px",
                  }}
                />

                <div style={{ marginBottom: "1rem" }}>{p.icon}</div>

                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--brand-green)",
                    fontWeight: 700,
                  }}
                >
                  {p.label}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    margin: "0.5rem 0 0.85rem",
                    lineHeight: 1.25,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}