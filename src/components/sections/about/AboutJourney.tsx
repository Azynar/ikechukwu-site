import FadeUp from "@/components/ui/FadeUp";

const milestones = [
  {
    year: "2014",
    title: "Industrial Chemistry, FUTO",
    description:
      "Graduated from the Federal University of Technology Owerri with a Bachelor's degree in Industrial Chemistry — the scientific foundation that shaped his understanding of food composition, adulteration, and quality control.",
  },
  {
    year: "2015",
    title: "Postgraduate — Environmental Chemistry",
    description:
      "Pursued a Postgraduate qualification in Environmental Chemistry, deepening his understanding of the environmental impact of industrial processes and laying the groundwork for his later work in climate action and circular economy.",
  },
  {
    year: "2018",
    title: "Co-founded KR Foods",
    description:
      "Launched Kernelinc Resources Ltd with a clear mandate — produce safe, traceable palm oil and fight the widespread adulteration of Nigeria's food supply with Sudan IV dye, a carcinogenic industrial chemical.",
  },
  {
    year: "2019",
    title: "Advanced Agribusiness Training",
    description:
      "Completed agribusiness and development programmes with Nexford University, FATE Foundation, GIZ, and IUCN — building the business, systems, and sustainability knowledge to scale KR Foods and launch new ventures.",
  },
  {
    year: "2020",
    title: "Top Nigerian SME Recognition",
    description:
      "KR Foods was recognised as one of Nigeria's top SMEs — a validation of the model and a signal that safe, traceable food could also be a viable and scalable business.",
  },
  {
    year: "2021",
    title: "NEPC Registered BDS Provider",
    description:
      "Registered as a Business Development Service Provider with the Nigerian Export Promotion Council, expanding his impact to other agribusinesses seeking to grow sustainably and access export markets.",
  },
  {
    year: "2022",
    title: "Launched PalmLoop",
    description:
      "Founded PalmLoop — a circular economy venture transforming palm oil processing waste into biomass fuel, biochar, and other climate-positive commodities, proving that sustainability and profitability can coexist.",
  },
  {
    year: "2023",
    title: "MBA — Business Administration",
    description:
      "Completed a Masters in Business Administration, further strengthening his capacity to lead, scale, and build transformative businesses across Africa's agricultural sector.",
  },
  {
    year: "Now",
    title: "Value Chain Ambassador & Deputy Hub Lead",
    description:
      "Serving as Value Chain Ambassador for African Food Changemakers and Deputy Hub Lead for the Scaling Up Nutrition Business Network South East Hub — working directly with 60 farmer and processor clusters to strengthen Nigeria's food systems.",
  },
];

export default function AboutJourney() {
  return (
    <section className="section-pad" style={{ background: "transparent" }}>
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <FadeUp delay={0}>
            <div className="tag-pill" style={{ marginBottom: "1rem" }}>
              The Journey
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.2,
                maxWidth: "480px",
              }}
            >
              Milestones that shaped the mission.
            </h2>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "80px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, var(--brand-green), transparent)",
            }}
            className="timeline-line"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {milestones.map((m, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "2.5rem",
                    alignItems: "start",
                    position: "relative",
                  }}
                  className="timeline-item"
                >

                  {/* Year */}
                  <div style={{ textAlign: "right", paddingTop: "0.2rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--brand-green)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,0,0,0.07)",
                      borderRadius: "12px",
                      padding: "1.75rem",
                      position: "relative",
                    }}
                  >
                    {/* Dot on the line */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-2.85rem",
                        top: "1.6rem",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: i === milestones.length - 1
                          ? "var(--brand-green)"
                          : "#fff",
                        border: "2px solid var(--brand-green)",
                      }}
                    />

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        marginBottom: "0.65rem",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--muted)",
                        lineHeight: 1.75,
                      }}
                    >
                      {m.description}
                    </p>
                  </div>

                </div>
              </FadeUp>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { display: none; }
          .timeline-item {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}