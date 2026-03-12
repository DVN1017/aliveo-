"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mailto = "mailto:servicealiveo@gmail.com?subject=" + encodeURIComponent("Demande audit SEO");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}
      style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        <a href="#" className="text-xl font-black tracking-tight" style={{ color: "var(--ink)" }}>
          Aliveo<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#services" className="text-sm font-medium transition-colors" style={{ color: "var(--muted)" }}>Services</a></li>
          <li><a href="#process" className="text-sm font-medium transition-colors" style={{ color: "var(--muted)" }}>Méthode</a></li>
          <li>
            <a href={mailto} className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:opacity-90"
              style={{ background: "var(--accent)", color: "#fff" }}>
              Audit gratuit →
            </a>
          </li>
        </ul>

        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--ink)" }} />
          <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--ink)" }} />
          <span className={`block w-5 h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--ink)" }} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm font-medium" style={{ color: "var(--muted)" }}>Services</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-sm font-medium" style={{ color: "var(--muted)" }}>Méthode</a>
          <a href={mailto} className="text-sm font-semibold px-5 py-3 rounded-lg text-center" style={{ background: "var(--accent)", color: "#fff" }}>
            Audit gratuit →
          </a>
        </div>
      )}
    </nav>
  );
}