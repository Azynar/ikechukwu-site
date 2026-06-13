import Link from "next/link";

export default function CTASection() {
  return (
    <section style={{
      background: "var(--deep-green)",
      padding: "6rem 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glows */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(59,181,74,0.08) 0%, transparent 50%)`,
        pointerEvents: "none",
      }} />

      <div className="container-site" style={{ position: "relative", textAlign: "center" }}>

        <div className="tag-pill" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--brand-green)",
            display: "inline-block",
          }} />
          Let&apos;s Build Together
        </div>

        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
          maxWidth: "620px",
          marginLeft: "auto",
          marginRight: "auto",
        }}>
          Africa&apos;s food future needs better systems.{" "}
          <span style={{ color: "var(--brand-green)" }}>Let&apos;s build them.</span>
        </h2>

        <p style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "1rem",
          lineHeight: 1.8,
          maxWidth: "500px",
          margin: "0 auto 2.5rem",
        }}>
          Whether you&apos;re an agribusiness looking to scale, an investor interested in
          sustainable food systems, or an organisation tackling food safety — let&apos;s talk.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 2rem" }}>
            Start a Conversation
          </Link>
          <Link href="/about" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "transparent",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "0.85rem 2rem",
            borderRadius: "6px",
            border: "2px solid rgba(255,255,255,0.25)",
            textDecoration: "none",
            transition: "border-color 0.2s, color 0.2s",
          }}>
            Learn More About My Work
          </Link>
        </div>

      </div>
    </section>
  );
}