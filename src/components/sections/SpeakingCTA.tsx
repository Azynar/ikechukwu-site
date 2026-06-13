import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function SpeakingCTA() {
  return (
    <section style={{
      background: "var(--near-black)",
      padding: "5rem 0",
    }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "3rem",
          }}
          className="speaking-grid"
        >

          {/* Text side */}
          <div>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-green)",
              display: "block",
              marginBottom: "0.85rem",
            }}>
              Speaking & Advocacy
            </span>

            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "0.85rem",
            }}>
              Bringing food safety conversations <br />to every stage.
            </h2>

            <p style={{
              fontSize: "0.97rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}>
              Ikechukwu speaks at agribusiness conferences, food safety summits,
              and youth entrepreneurship programmes across Nigeria and beyond.
              Book him to bring clarity and urgency to Africa&apos;s food systems conversation.
            </p>
          </div>

          {/* CTA side */}
          <div style={{ flexShrink: 0 }}>
            <Link href="/contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--brand-green)",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "0.85rem 2rem",
              borderRadius: "6px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}>
              Book a Speaking Engagement <BsArrowRight />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .speaking-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}