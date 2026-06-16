import FadeUp from "@/components/ui/FadeUp";

const stats = [
  { value: "10+",       label: "Years in Agribusiness"          },
  { value: "60",        label: "Farmer & Processor Clusters"    },
  { value: "2 Ventures", label: "KR Foods & PalmLoop"           },
  { value: "AFC",       label: "Value Chain Ambassador"         },
];

export default function Stats() {
  return (
    <section style={{ background: "var(--deep-green)", padding: "3.5rem 0" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="stat-item"
                style={{
                  padding: "1.75rem 2rem",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    fontWeight: 900,
                    color: "var(--brand-green)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stat-item { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.08); }
          .stat-item:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}