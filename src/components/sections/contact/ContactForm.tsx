"use client";

import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import FadeUp from "@/components/ui/FadeUp";

const subjects = [
  "Agribusiness Consultation",
  "Speaking Engagement",
  "Partnership & Investment",
  "Food Safety Advocacy",
  "Climate & Sustainability",
  "Other",
];

const socials = [
  {
    href: "https://linkedin.com/in/ikechukwu-amajuoyi-b6a977a1",
    label: "LinkedIn",
    icon: <FaLinkedinIn size={16} />,
  },
  {
    href: "https://wa.me/2347038490615",
    label: "WhatsApp",
    icon: <FaWhatsapp size={16} />,
  },
  {
    href: "mailto:a.ikechukwu@gmail.com",
    label: "Email",
    icon: <MdOutlineEmail size={16} />,
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section-pad" style={{ background: "transparent" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >

          {/* Left — contact info */}
          <FadeUp delay={0}>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                Reach out directly.
              </h2>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                }}
              >
                Ikechukwu personally reads every message. Expect a response
                within 48 hours on business days.
              </p>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "8px",
                    background: "rgba(59,181,74,0.1)",
                    border: "1px solid rgba(59,181,74,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MdOutlineEmail size={20} color="var(--brand-green)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Email
                  </p>
                  
                  <a  href="mailto:a.ikechukwu@gmail.com"
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    a.ikechukwu@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "8px",
                    background: "rgba(59,181,74,0.1)",
                    border: "1px solid rgba(59,181,74,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MdOutlinePhone size={20} color="var(--brand-green)" />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    Phone & WhatsApp
                  </p>
                  
                  <a  href="tel:+2347038490615"
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--ink)",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    +234 703 849 0615
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.07)",
                  paddingTop: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "1rem",
                  }}
                >
                  Connect
                </p>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {socials.map(({ href, label, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        border: "1px solid rgba(0,0,0,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--ink)",
                        textDecoration: "none",
                        transition: "border-color 0.2s, color 0.2s, background 0.2s",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "var(--brand-green)";
                        el.style.color = "var(--brand-green)";
                        el.style.background = "rgba(59,181,74,0.05)";
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.borderColor = "rgba(0,0,0,0.1)";
                        el.style.color = "var(--ink)";
                        el.style.background = "transparent";
                      }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.2}>
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "16px",
                padding: "2.5rem",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "rgba(59,181,74,0.1)",
                      border: "2px solid var(--brand-green)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--ink)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Message sent.
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    Thank you for reaching out. Ikechukwu will get back
                    to you within 48 hours.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >

                  {/* Name + Email row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                    className="form-row"
                  >
                    <div>
                      <label
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "8px",
                          border: "1px solid rgba(0,0,0,0.12)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.92rem",
                          color: "var(--ink)",
                          background: "var(--cream)",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.12)"}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "8px",
                          border: "1px solid rgba(0,0,0,0.12)",
                          fontFamily: "var(--font-body)",
                          fontSize: "0.92rem",
                          color: "var(--ink)",
                          background: "var(--cream)",
                          outline: "none",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                        onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.12)"}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(0,0,0,0.12)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        color: formData.subject ? "var(--ink)" : "var(--muted)",
                        background: "var(--cream)",
                        outline: "none",
                        cursor: "pointer",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.12)"}
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjects.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, question, or opportunity..."
                      rows={6}
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(0,0,0,0.12)",
                        fontFamily: "var(--font-body)",
                        fontSize: "0.92rem",
                        color: "var(--ink)",
                        background: "var(--cream)",
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--brand-green)"}
                      onBlur={e => e.target.style.borderColor = "rgba(0,0,0,0.12)"}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      background: loading ? "rgba(59,181,74,0.7)" : "var(--brand-green)",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      padding: "0.85rem 2rem",
                      borderRadius: "8px",
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s",
                      alignSelf: "flex-start",
                    }}
                  >
                    {loading ? "Sending..." : <>Send Message <BsArrowRight /></>}
                  </button>

                </div>
              )}
            </div>
          </FadeUp>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}