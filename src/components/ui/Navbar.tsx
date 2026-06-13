"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",        label: "Home"    },
  { href: "/about",   label: "About"   },
  { href: "/blog",    label: "Blog"    },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname               = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const prevPathname = useRef(pathname);
    useEffect(() => {
      if (prevPathname.current !== pathname) {
        prevPathname.current = pathname;
        setMenuOpen(false);
      }
    }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(251,248,242,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--ink)",
            letterSpacing: "0.04em",
          }}>
            IKA<span style={{ color: "var(--brand-green)" }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.9rem",
                color: active ? "var(--brand-green)" : "var(--ink)",
                textDecoration: "none",
                position: "relative",
                paddingBottom: "4px",
                transition: "color 0.2s",
              }}>
                {label}
                {active && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "var(--near-black)",
                    borderRadius: "1px",
                  }} />
                )}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            Work With Me
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          className="show-mobile"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--ink)",
              borderRadius: "1px",
              transition: "transform 0.2s, opacity 0.2s",
              transform: menuOpen
                ? i === 0 ? "translateY(7px) rotate(45deg)"
                : i === 2 ? "translateY(-7px) rotate(-45deg)"
                : "scaleX(0)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        background: "rgba(251,248,242,0.97)",
        backdropFilter: "blur(14px)",
        overflow: "hidden",
        maxHeight: menuOpen ? "320px" : "0",
        transition: "max-height 0.35s ease",
      }}>
        <nav style={{ display: "flex", flexDirection: "column", padding: "1.5rem", gap: "1.25rem" }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              color: pathname === href ? "var(--brand-green)" : "var(--ink)",
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "1.05rem",
              textDecoration: "none",
            }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
            Work With Me
          </Link>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}