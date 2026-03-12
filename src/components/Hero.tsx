export default function Hero() {
  const mailto = "mailto:servicealiveo@gmail.com?subject=" + encodeURIComponent("Demande audit SEO");

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-24 pb-16" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto w-full">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{ background: "#eff6ff", color: "var(--accent)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
          Consultant SEO — Remote &amp; International
        </div>

        <h1 className="font-black leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--ink)" }}>
          Votre site mérite<br />
          <span style={{ color: "var(--accent)" }}>d&apos;être trouvé.</span>
        </h1>

        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Aliveo identifie ce qui freine votre visibilité sur Google et corrige les problèmes techniques qui vous coûtent des clients chaque jour.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-20">
          <a href={mailto} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: "var(--accent)", color: "#fff" }}>
            Demander un audit gratuit
            <span className="text-base">→</span>
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{ background: "var(--light)", color: "var(--ink)" }}>
            Voir les services
          </a>
        </div>

        <div className="grid grid-cols-3 gap-0" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            { num: "100%", label: "Remote & international" },
            { num: "48h",  label: "Délai d'audit" },
            { num: "FR/EN", label: "Bilingue" },
          ].map((stat, i) => (
            <div key={i} className="pt-8 pr-8"
              style={{ borderRight: i < 2 ? "1px solid var(--border)" : "none", paddingLeft: i > 0 ? "2rem" : "0" }}>
              <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: "var(--ink)" }}>
                {stat.num}
              </div>
              <div className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}