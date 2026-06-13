export default function BlogHero() {
  return (
    <section style={{
      paddingTop: "140px",
      paddingBottom: "5rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "0",
        right: "-5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(59,181,74,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-site">
        <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>
          <span style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--brand-green)",
            display: "inline-block",
          }} />
          The Blog
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 900,
          color: "var(--ink)",
          lineHeight: 1.1,
          marginBottom: "1.25rem",
          maxWidth: "680px",
        }}>
          Thoughts on Food,{" "}
          <span style={{ color: "var(--brand-green)" }}>Systems</span>{" "}
          & Africa.
        </h1>

        <p style={{
          fontSize: "1.05rem",
          color: "var(--muted)",
          lineHeight: 1.8,
          maxWidth: "520px",
        }}>
          Perspectives on food safety, agro-processing, sustainability, 
          and what it takes to build systems that feed Africa right.
        </p>
      </div>
    </section>
  );
}