export default function AboutStory() {
  return (
    <section className="section-pad" style={{ background: "var(--deep-green)" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="story-grid"
        >

          {/* Left — sticky label */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>My Story</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
            }}>
              Where it all <span style={{ color: "var(--palm-gold)" }}>began.</span>
            </h2>
          </div>

          {/* Right — story paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {[
              {
                heading: "The Problem Nobody Was Talking About",
                body: `For years, millions of Nigerians unknowingly consumed palm oil adulterated 
                with Sudan IV — an industrial dye banned for food use, classified as a potential 
                carcinogen. It was cheaper, it made the oil look richer, and nobody in the mass 
                market was asking questions. Ikechukwu was.`,
              },
              {
                heading: "Building the Answer",
                body: `Armed with a degree in Industrial Chemistry from the Federal University of 
                Technology Owerri (FUTO) and a growing frustration with the status quo, Ikechukwu 
                co-founded KR Foods — Kernelinc Resources Ltd — with a single mandate: produce 
                palm oil that is safe, traceable, and accessible to everyday Nigerians.`,
              },
              {
                heading: "Going Deeper",
                body: `KR Foods grew beyond just clean palm oil. Ikechukwu pursued advanced 
                agribusiness training from Nexford University, FATE Foundation, and GIZ, building 
                the knowledge base to tackle the structural problems in Nigeria's agro-processing 
                sector — waste, inefficiency, and lack of traceability across the value chain.`,
              },
              {
                heading: "Recognition & Responsibility",
                body: `In 2020, KR Foods was recognised as a top Nigerian SME. Ikechukwu was 
                named an African Food Changemakers ambassador — a recognition that came with 
                greater responsibility. As a NEPC Registered Business Development Service 
                Provider, he now helps other agribusinesses build the structures needed to grow 
                sustainably and safely.`,
              },
            ].map((item, i) => (
              <div key={i} style={{
                borderLeft: "3px solid rgba(59,181,74,0.25)",
                paddingLeft: "1.75rem",
              }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--brand-green)",
                  marginBottom: "0.75rem",
                }}>
                  {item.heading}
                </h3>
                <p style={{
                  fontSize: "0.97rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.85,
                }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}