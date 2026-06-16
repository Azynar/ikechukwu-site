import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import FadeUp from "@/components/ui/FadeUp";

export default function AboutVision() {
  return (
    <section
      style={{
        background: "transparent",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(59,181,74,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="vision-grid"
        >

          {/* Left — label */}
          <div>
            <FadeUp delay={0}>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>
                My Vision
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 900,
                  color: "var(--ink)",
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                }}
              >
                Where Africa&apos;s agriculture{" "}
                <span style={{ color: "var(--brand-green)" }}>
                  is headed.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                Ikechukwu believes the future of African agriculture lies at
                the intersection of innovation, sustainability, and inclusive
                prosperity — and he is actively building it.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link href="/contact" className="btn-primary">
                Join the Mission <BsArrowRight />
              </Link>
            </FadeUp>
          </div>

          {/* Right — vision statement */}
          <FadeUp delay={0.2}>
            <div
              style={{
                background: "var(--deep-green)",
                borderRadius: "16px",
                padding: "3rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "-1rem",
                  left: "2rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "8rem",
                  color: "rgba(59,181,74,0.1)",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.7,
                  position: "relative",
                  zIndex: 1,
                  marginBottom: "2rem",
                }}
              >
                To build transformative businesses and ecosystems that improve
                livelihoods, strengthen food systems, accelerate climate action,
                and unlock Africa&apos;s agricultural potential at scale.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: "var(--brand-green)",
                    borderRadius: "1px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  Ikechukwu Kingsley Amajuoyi
                </span>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}