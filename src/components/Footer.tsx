export default function Footer() {
  return (
    <footer className="py-10 px-5 md:px-8 border-t" style={{ background: "#080f1b", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <a href="#accueil" className="text-xl font-extrabold tracking-tight" style={{ color: "var(--ink)", fontFamily: "Manrope, sans-serif" }}>
          VEYLAN<span style={{ color: "var(--accent)" }}>.</span>
          <span className="block text-[9px] tracking-[0.28em] font-semibold mt-[-2px]" style={{ color: "var(--muted)" }}>DIGITAL STUDIO</span>
        </a>
        <span className="text-sm" style={{ color: "var(--muted)" }}>Création web · SEO · Automatisation · Stratégie digitale</span>
        <div className="flex flex-col md:items-end gap-1">
          <a href="#contact" className="text-sm font-semibold hover:underline" style={{ color: "var(--accent)" }}>Parlons de votre projet ↗</a>
          <span className="text-xs" style={{ color: "#777780" }}>© {new Date().getFullYear()} Veylan Digital. Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}