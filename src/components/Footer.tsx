export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-20" style={{ background: "var(--ink)", color: "#fff" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <a href="#" className="text-xl font-black tracking-tight" style={{ color: "#fff" }}>
          Aliveo<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        <span className="text-sm font-medium" style={{ color: "#6b7280" }}>
          Consultant SEO — Remote &amp; International
        </span>

        <div className="flex flex-col items-end gap-1 text-right">
          <a href="mailto:servicealiveo@gmail.com" className="text-sm font-medium hover:underline" style={{ color: "#6b7280" }}>
            servicealiveo@gmail.com
          </a>
          <span className="text-xs" style={{ color: "#374151" }}>
            © 2025 Aliveo — Tous droits réservés
          </span>
        </div>

      </div>
    </footer>
  );
}