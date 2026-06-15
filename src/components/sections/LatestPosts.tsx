"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import FadeUp from "@/components/ui/FadeUp";

const posts = [
  {
    slug: "sudan-iv-palm-oil-crisis",
    tag: "Food Safety",
    title: "The Sudan IV Crisis: How a Carcinogenic Dye Ended Up in Nigeria's Palm Oil",
    excerpt:
      "An inside look at how industrial dye adulteration became widespread in Nigerian markets — and what it will take to stop it.",
    readTime: "6 min read",
  },
  {
    slug: "agro-processing-waste",
    tag: "Sustainability",
    title: "Turning Waste Into Value: The Case for Palm Kernel Shell Briquettes",
    excerpt:
      "How converting agro-processing by-products into fuel sources creates economic and environmental wins simultaneously.",
    readTime: "5 min read",
  },
  {
    slug: "building-food-systems",
    tag: "Systems Thinking",
    title: "Why Nigerian Agribusiness Needs Systems Builders, Not Just Farmers",
    excerpt:
      "The missing infrastructure layer between smallholder farmers and safe consumer products — and who's responsible for building it.",
    readTime: "7 min read",
  },
];

export default function LatestPosts() {
  return (
    <section className="section-pad" style={{ background: "transparent" }}>
      <div className="container-site">

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <FadeUp delay={0}>
              <div className="tag-pill" style={{ marginBottom: "1rem" }}>
                From the Blog
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                }}
              >
                Thoughts on Food, Systems & Africa.
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <Link href="/blog" className="btn-ghost">
              All articles <BsArrowRight />
            </Link>
          </FadeUp>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((p, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <Link
                href={`/blog/${p.slug}`}
                style={{ textDecoration: "none", display: "block", height: "100%" }}
              >
                <article
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.25s, transform 0.2s, box-shadow 0.25s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--brand-green)";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 32px rgba(59,181,74,0.1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(0,0,0,0.07)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Cover placeholder */}
                  <div
                    style={{
                      height: "180px",
                      background: "linear-gradient(135deg, var(--deep-green), #1a4d2e)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      Cover image
                    </span>
                  </div>

                  <div
                    style={{
                      padding: "1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--brand-green)",
                        }}
                      >
                        {p.tag}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          color: "var(--muted)",
                        }}
                      >
                        {p.readTime}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--ink)",
                        lineHeight: 1.3,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {p.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--muted)",
                        lineHeight: 1.7,
                        flex: 1,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {p.excerpt}
                    </p>

                    <span className="btn-ghost" style={{ fontSize: "0.8rem" }}>
                      Read article <BsArrowRight />
                    </span>
                  </div>
                </article>
              </Link>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}