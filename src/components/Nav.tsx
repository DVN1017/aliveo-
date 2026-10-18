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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      style={{ background: "rgba(11,18,32,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-[76px]">
        <a href="#accueil" aria-label="Veylan Digital, accueil" className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-sm" style={{ color: "var(--ink)", fontFamily: "Manrope, sans-serif" }}>
          VEYLAN<span style={{ color: "var(--accent)" }}>.</span>
          <span className="block text-[9px] tracking-[0.28em] font-semibold mt-[-2px]" style={{ color: "var(--muted)" }}>DIGITAL STUDIO</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#services" className="text-sm font-medium hover:text-white" style={{ color: "var(--ink)" }}>Services</a></li>
          <li><a href="#realisations" className="text-sm font-medium hover:text-white" style={{ color: "var(--ink)" }}>Réalisations</a></li>
          <li><a href="#methode" className="text-sm font-medium hover:text-white" style={{ color: "var(--ink)" }}>Méthode</a></li>
          <li><a href="#contact" className="text-sm font-bold px-5 py-3 rounded-full hover:opacity-90" style={{ background: "var(--accent)", color: "#111" }}>Parler de mon projet ↗</a></li>
        </ul>
        <button aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen} className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-0.5" style={{ background: "var(--ink)" }} />
          <span className="block w-5 h-0.5" style={{ background: "var(--ink)" }} />
          <span className="block w-5 h-0.5" style={{ background: "var(--ink)" }} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 py-5 flex flex-col gap-5" style={{ background: "#0f192a", borderTop: "1px solid var(--border)" }}>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: "var(--muted)" }}>Services</a>
          <a href="#realisations" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: "var(--muted)" }}>Réalisations</a>
          <a href="#methode" onClick={() => setMenuOpen(false)} className="text-sm" style={{ color: "var(--muted)" }}>Méthode</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-bold px-5 py-3 rounded-full text-center" style={{ background: "var(--accent)", color: "#111" }}>Parler de mon projet ↗</a>
        </div>
      )}
    </nav>
  );
}