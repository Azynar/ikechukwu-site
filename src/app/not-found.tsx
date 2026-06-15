import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { BsArrowRight } from "react-icons/bs";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59,181,74,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(26,26,26,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ textAlign: "center" }}>

        <FadeUp delay={0}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(6rem, 15vw, 12rem)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: "2px var(--brand-green)",
              lineHeight: 1,
              marginBottom: "1rem",
              opacity: 0.4,
            }}
          >
            404
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="tag-pill" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--brand-green)",
                display: "inline-block",
              }}
            />
            Page Not Found
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Looks like this page <br />
            <span style={{ color: "var(--brand-green)" }}>doesn&apos;t exist.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "420px",
              margin: "0 auto 2.5rem",
            }}
          >
            The page you&apos;re looking for may have been moved, deleted, or
            never existed. Let&apos;s get you back on track.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="btn-primary">
              Back to Home <BsArrowRight />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}