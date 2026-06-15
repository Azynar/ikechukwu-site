import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export default function BioStrip() {
  return (
    <section className="section-pad" style={{ background: "transparent" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="bio-grid"
        >

          {/* Image side */}
          <FadeUp delay={0}>
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  aspectRatio: "4/5",
                  borderRadius: "16px",
                  overflow: "hidden",
                  zIndex: 1,
                  background: "linear-gradient(135deg, #e8f5e9, #f1f8e9)",
                  border: "1px solid rgba(59,181,74,0.15)",
                }}
              >
                <Image
                  src="/bio-image.jpg"
                  alt="Ikechukwu Amajuoyi"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>
          </FadeUp>

          {/* Text side */}
          <div>
            <FadeUp delay={0.1}>
              <div className="tag-pill" style={{ marginBottom: "1.5rem" }}>
                About Ikechukwu
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                One man&apos;s fight to clean up{" "}
                <span
                  style={{
                    borderBottom: "3px solid var(--near-black)",
                    paddingBottom: "2px",
                  }}
                >
                  Africa&apos;s food systems.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                  fontSize: "0.97rem",
                }}
              >
                Ikechukwu Kingsley Amajuoyi is a Nigerian agripreneur with a degree in
                Industrial Chemistry from FUTO and advanced agribusiness training from
                Nexford University, FATE Foundation, and GIZ.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p
                style={{
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                  fontSize: "0.97rem",
                }}
              >
                He co-founded KR Foods (Kernelinc Resources Ltd) to tackle one of
                Nigeria&apos;s most dangerous food safety crises — the widespread adulteration
                of palm oil with Sudan IV dye, a carcinogenic industrial chemical. Today,
                KR Foods produces safe, traceable palm oil while building sustainable
                agro-processing systems across the value chain.
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Link href="/about" className="btn-ghost">
                Read my full story <span>→</span>
              </Link>
            </FadeUp>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bio-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}