"use client";

import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/about",   label: "About"   },
  { href: "/blog",    label: "Blog"    },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://x.com/placeholder",         label: "X (Twitter)", icon: <FaXTwitter /> },
  { href: "https://linkedin.com/placeholder",   label: "LinkedIn",    icon: <FaLinkedinIn /> },
  { href: "https://instagram.com/placeholder",  label: "Instagram",   icon: <FaInstagram /> },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--deep-green)", color: "rgba(255,255,255,0.75)" }}>
      <div className="container-site" style={{ paddingTop: "4rem", paddingBottom: "2.5rem" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "start",
          marginBottom: "3rem",
        }} className="footer-grid">

          {/* Brand side */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: "#fff",
                letterSpacing: "0.04em",
              }}>
                IKA<span style={{ color: "var(--brand-green)" }}>.</span>
              </span>
            </Link>
            <p style={{ marginTop: "1rem", fontSize: "0.92rem", lineHeight: 1.75, maxWidth: "360px" }}>
              Building the systems that feed Africa right. Co-founder of KR Foods, 
              NEPC-registered consultant, and African Food Changemakers ambassador.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem" }}>
              {socials.map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "6px",
                    border: "1px solid rgba(59,181,74,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--brand-green)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand-green)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(59,181,74,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--brand-green)",
              marginBottom: "0.25rem",
            }}>Navigate</span>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)")}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(59,181,74,0.12)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Ikechukwu Kingsley Amajuoyi. All rights reserved.
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-mono)" }}>
            Built with purpose.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
