const services = [
  { num: "01", title: "Création de sites web", desc: "Des sites professionnels, rapides et adaptés au mobile pour présenter vos services, renforcer votre crédibilité et faciliter les demandes de clients.", tags: ["Site vitrine", "Refonte", "Responsive", "Formulaires"] },
  { num: "02", title: "SEO & visibilité Google", desc: "Des bases techniques solides, une structure claire et des optimisations utiles pour aider les moteurs de recherche à comprendre votre site.", tags: ["Audit SEO", "SEO technique", "Contenu", "Search Console"] },
  { num: "03", title: "Automatisation", desc: "Des flux simples pour réduire les tâches répétitives, mieux suivre les prospects et gagner du temps dans vos opérations quotidiennes.", tags: ["Formulaires", "Suivi prospects", "Workflows", "Intégrations"] },
  { num: "04", title: "Stratégie digitale", desc: "Un accompagnement concret pour clarifier votre présence en ligne, mieux présenter votre offre et relier vos contenus à vos objectifs commerciaux.", tags: ["Positionnement", "Parcours client", "Contenu", "Conversion"] },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-5 md:px-8" style={{ background: "#0f192a" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold tracking-[0.22em] mb-5" style={{ color: "var(--accent)" }}>NOS EXPERTISES</div>
            <h2 className="font-extrabold tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2.3rem, 5vw, 4.5rem)", fontFamily: "Manrope, sans-serif" }}>Les bons outils.<br/>Les bons objectifs.</h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>Des services complémentaires pour construire une présence digitale cohérente, utile et pensée pour votre entreprise.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <article key={s.num} className="group interactive-card p-7 md:p-9 rounded-2xl border" style={{ background: "#142137", borderColor: "var(--border)" }}>
              <div className="flex items-center justify-between mb-8"><span className="text-sm font-bold" style={{ color: "var(--accent)" }}>{s.num} /</span><span className="text-2xl transition-transform group-hover:translate-x-1" style={{ color: "var(--accent)" }}>↗</span></div>
              <h3 className="text-xl md:text-2xl font-bold mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-7" style={{ color: "var(--muted)" }}>{s.desc}</p>
              <div className="flex flex-wrap gap-2">{s.tags.map((tag) => <span key={tag} className="text-[11px] font-medium px-3 py-1.5 rounded-full border" style={{ color: "#d4d4d8", borderColor: "#30445f", background: "#182941" }}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}