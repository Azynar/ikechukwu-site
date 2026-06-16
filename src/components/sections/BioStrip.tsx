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
                  src="/bio-image.jpeg"
                  alt="Ikechukwu Amajuoyi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                Building businesses that{" "}
                <span
                  style={{
                    borderBottom: "3px solid var(--near-black)",
                    paddingBottom: "2px",
                  }}
                >
                  feed Africa right.
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
                Ikechukwu Kingsley Amajuoyi is a Nigerian agribusiness innovator
                and climate entrepreneur with over a decade of experience
                transforming Africa&apos;s agricultural sector. He holds a Bachelor&apos;s
                in Industrial Chemistry, a Postgraduate qualification in
                Environmental Chemistry, and an MBA.
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
                As Founder and CEO of KR Foods and the visionary behind PalmLoop,
                he is pioneering solutions that combine profitability with
                environmental sustainability — proving that business can be a
                powerful force for social and climate impact across Africa.
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