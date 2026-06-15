import FadeUp from "@/components/ui/FadeUp";

export default function ContactHero() {
  return (
    <section
      style={{
        paddingTop: "140px",
        paddingBottom: "5rem",
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
        <FadeUp delay={0}>
          <div
            className="tag-pill"
            style={{ marginBottom: "1.5rem" }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--brand-green)",
                display: "inline-block",
              }}
            />
            Get In Touch
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s build something{" "}
            <span style={{ color: "var(--brand-green)" }}>meaningful</span>{" "}
            together.
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Whether you&apos;re an agribusiness looking to scale, an investor in
            sustainable food systems, an organisation tackling food safety,
            or looking to book a speaking engagement — reach out.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}