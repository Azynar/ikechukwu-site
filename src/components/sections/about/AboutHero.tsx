import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function AboutHero() {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(59,181,74,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="about-hero-grid"
        >

          {/* Text side */}
          <div>
            <FadeUp delay={0}>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--brand-green)",
                    display: "inline-block",
                  }}
                />
                About Ikechukwu
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                  fontWeight: 900,
                  color: "var(--ink)",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Innovator.<br />
                Entrepreneur.<br />
                <span style={{ color: "var(--brand-green)" }}>Changemaker.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  lineHeight: 1.85,
                  maxWidth: "480px",
                }}
              >
                Ikechukwu Kingsley Amajuoyi has spent over a decade at the
                intersection of agribusiness, climate action, and systems
                thinking — building ventures and ecosystems that improve
                livelihoods, strengthen food systems, and unlock Africa&apos;s
                agricultural potential at scale.
              </p>
            </FadeUp>
          </div>

          {/* Image side */}
          <FadeUp delay={0.3}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  aspectRatio: "4/5",
                  borderRadius: "16px",
                  overflow: "hidden",
                  zIndex: 1,
                  background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)",
                  border: "1px solid rgba(59,181,74,0.15)",
                }}
              >
                <Image
                  src="/hero-image.jpeg"
                  alt="Ikechukwu Amajuoyi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}