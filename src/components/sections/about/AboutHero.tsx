import Image from "next/image";

export default function AboutHero() {
  return (
    <section style={{
      paddingTop: "140px",
      paddingBottom: "6rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glows */}
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
            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--brand-green)",
                display: "inline-block",
              }} />
              About Ikechukwu
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 900,
              color: "var(--ink)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}>
              Agripreneur.<br />
              Advocate.<br />
              <span style={{ color: "var(--brand-green)" }}>Changemaker.</span>
            </h1>

            <p style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.85,
              maxWidth: "480px",
            }}>
              Ikechukwu Kingsley Amajuoyi has spent his career at the intersection 
              of agriculture, food safety, and systems thinking — building solutions 
              that go beyond profit to protect the people who depend on Nigeria&apos;s 
              food supply every day.
            </p>
          </div>

          {/* Image side */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>

            {/* Image container */}
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
                src="/about-image.jpg"
                alt="Ikechukwu Amajuoyi"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </div>

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