import FadeUp from "@/components/ui/FadeUp";

const chapters = [
  {
    number: "01",
    heading: "The Problem Nobody Was Talking About",
    body: `For years, millions of Nigerians unknowingly consumed palm oil adulterated
    with Sudan IV — an industrial dye banned for food use and classified as a
    potential carcinogen. It was cheaper, it made the oil look richer, and nobody
    in the mass market was asking questions. Ikechukwu was.`,
  },
  {
    number: "02",
    heading: "Building the Answer",
    body: `Armed with a degree in Industrial Chemistry from FUTO, a Postgraduate
    qualification in Environmental Chemistry, and a growing frustration with the
    status quo, Ikechukwu co-founded KR Foods — Kernelinc Resources Ltd — with
    a single mandate: produce palm oil that is safe, traceable, and accessible
    to everyday Nigerians.`,
  },
  {
    number: "03",
    heading: "Thinking Beyond the Product",
    body: `KR Foods grew beyond clean palm oil. Ikechukwu launched PalmLoop — a
    circular economy venture transforming palm oil processing waste into biomass
    fuel, biochar, and other climate-positive commodities. He pursued an MBA and
    advanced training from Nexford University, FATE Foundation, GIZ, and IUCN,
    building the knowledge base to tackle structural problems across the entire
    agro-processing value chain.`,
  },
  {
    number: "04",
    heading: "Recognition & Responsibility",
    body: `Today, Ikechukwu serves as Value Chain Ambassador for African Food
    Changemakers and Deputy Hub Lead for the Scaling Up Nutrition Business
    Network in South East Nigeria. As a NEPC Registered Business Development
    Service Provider, he works directly with 60 farmer and processor clusters
    — helping agribusinesses build the structures needed to grow sustainably,
    safely, and at scale.`,
  },
];

export default function AboutStory() {
  return (
    <section
      style={{
        background: "var(--deep-green)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59,181,74,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site">

        {/* Section header */}
        <div
          style={{
            paddingTop: "6rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <FadeUp delay={0}>
            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>
              My Story
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.15,
                maxWidth: "560px",
              }}
            >
              Where it all{" "}
              <span style={{ color: "var(--brand-green)" }}>began.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Chapters */}
        <div>
          {chapters.map((c, i) => (
            <FadeUp key={i} delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr",
                  gap: "3rem",
                  alignItems: "start",
                  padding: "4rem 0",
                  borderBottom: i < chapters.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
                }}
                className="chapter-grid"
              >

                {/* Chapter number */}
                <div style={{ paddingTop: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontWeight: 700,
                      color: "transparent",
                      WebkitTextStroke: "1px rgba(59,181,74,0.3)",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {c.number}
                  </span>
                </div>

                {/* Chapter content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.2,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {c.heading}
                  </h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.9,
                      maxWidth: "620px",
                    }}
                  >
                    {c.body}
                  </p>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom padding */}
        <div style={{ paddingBottom: "6rem" }} />

      </div>

      <style>{`
        @media (max-width: 640px) {
          .chapter-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}