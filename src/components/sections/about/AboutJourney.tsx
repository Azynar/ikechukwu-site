const milestones = [
  {
    year: "2014",
    title: "Industrial Chemistry, FUTO",
    description:
      "Graduated from the Federal University of Technology Owerri with a degree in Industrial Chemistry — the foundation that shaped his understanding of food composition and adulteration.",
  },
  {
    year: "2018",
    title: "Co-founded KR Foods",
    description:
      "Launched Kernelinc Resources Ltd with a clear mandate — produce safe, traceable palm oil and fight the widespread adulteration of Nigeria's food supply with Sudan IV dye.",
  },
  {
    year: "2019",
    title: "Advanced Agribusiness Training",
    description:
      "Completed agribusiness programmes with Nexford University, FATE Foundation, and GIZ — building the business and systems knowledge to scale KR Foods beyond production.",
  },
  {
    year: "2020",
    title: "Top Nigerian SME Recognition",
    description:
      "KR Foods was recognised as one of Nigeria's top SMEs — a validation of the model and a signal that safe food could also be a viable business.",
  },
  {
    year: "2021",
    title: "NEPC Registered BDS Provider",
    description:
      "Registered as a Business Development Service Provider with the Nigerian Export Promotion Council, expanding his impact to other agribusinesses seeking to grow sustainably.",
  },
  {
    year: "Now",
    title: "African Food Changemakers Ambassador",
    description:
      "Named an ambassador by African Food Changemakers — continuing to advocate, consult, and build systems that make safe food the standard, not the exception, across Africa.",
  },
];

export default function AboutJourney() {
  return (
    <section className="section-pad" style={{ background: "transparent" }}>
      <div className="container-site">

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="tag-pill" style={{ marginBottom: "1rem" }}>The Journey</div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700,
            color: "var(--ink)",
            lineHeight: 1.2,
            maxWidth: "480px",
          }}>
            Milestones that shaped the mission.
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "80px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, var(--brand-green), transparent)",
          }} className="timeline-line" />

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "2.5rem",
                alignItems: "start",
                position: "relative",
              }} className="timeline-item">

                {/* Year */}
                <div style={{ textAlign: "right", paddingTop: "0.2rem" }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--brand-green)",
                    letterSpacing: "0.05em",
                  }}>
                    {m.year}
                  </span>
                </div>

                {/* Content */}
                <div style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: "12px",
                  padding: "1.75rem",
                  position: "relative",
                }}>
                  {/* Dot on the line */}
                  <div style={{
                    position: "absolute",
                    left: "-2.85rem",
                    top: "1.6rem",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: i === milestones.length - 1 ? "var(--brand-green)" : "#fff",
                    border: "2px solid var(--brand-green)",
                  }} />

                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                    marginBottom: "0.65rem",
                  }}>
                    {m.title}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                  }}>
                    {m.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { left: 0 !important; display: none; }
          .timeline-item { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
    </section>
  );
}