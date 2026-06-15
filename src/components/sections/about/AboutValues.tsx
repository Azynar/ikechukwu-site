"use client";

import FadeUp from "@/components/ui/FadeUp";
import { RiShakeHandsLine } from "react-icons/ri";
import { PiLeafLight } from "react-icons/pi";
import { MdOutlineVerified } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const values = [
  {
    icon: <MdOutlineVerified size={28} color="var(--brand-green)" />,
    title: "Integrity",
    description:
      "Every product, every system, every conversation — honesty is non-negotiable. The food safety crisis exists because people cut corners. We don't.",
  },
  {
    icon: <PiLeafLight size={28} color="var(--brand-green)" />,
    title: "Sustainability",
    description:
      "Building for tomorrow means thinking beyond today's profit. From waste conversion to eco-friendly processing, sustainability is baked into every decision.",
  },
  {
    icon: <RiShakeHandsLine size={28} color="var(--brand-green)" />,
    title: "Collaboration",
    description:
      "No one fixes a broken food system alone. Ikechukwu works with farmers, regulators, businesses, and communities to build solutions that stick.",
  },
  {
    icon: <GiReceiveMoney size={28} color="var(--brand-green)" />,
    title: "Accessibility",
    description:
      "Safe food should not be a luxury. The mission is to make clean, traceable food products available and affordable to everyday Nigerians.",
  },
];

export default function AboutValues() {
  return (
    <section className="section-pad" style={{ background: "var(--deep-green)" }}>
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <FadeUp delay={0}>
            <div
              className="tag-pill"
              style={{ marginBottom: "1rem", justifyContent: "center" }}
            >
              Core Values
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              What drives every decision.
            </h2>
          </FadeUp>
        </div>

        {/* Values grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {values.map((v, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(59,181,74,0.15)",
                  borderRadius: "12px",
                  padding: "2rem",
                  position: "relative",
                  transition: "background 0.25s, border-color 0.25s",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.07)";
                  el.style.borderColor = "rgba(59,181,74,0.4)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.04)";
                  el.style.borderColor = "rgba(59,181,74,0.15)";
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

                <div style={{ marginBottom: "1rem" }}>{v.icon}</div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.75rem",
                  }}
                >
                  {v.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.75,
                  }}
                >
                  {v.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}