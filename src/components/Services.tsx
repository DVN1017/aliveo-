const services = [
  {
    num: "01",
    title: "Audit SEO",
    desc: "Analyse complète de votre site pour identifier tout ce qui empêche Google de vous classer correctement. Un rapport clair, priorisé, immédiatement actionnable.",
    tags: ["Crawl technique", "Analyse mobile", "Mots-clés", "Backlinks"],
  },
  {
    num: "02",
    title: "Optimisation technique",
    desc: "Correction des problèmes identifiés : vitesse de chargement, affichage mobile, balises, structure interne. Du concret, pas de la théorie.",
    tags: ["Core Web Vitals", "Mobile-first", "Balises meta", "Schema markup"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-20" style={{ background: "var(--light)" }}>
      <div className="max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
          style={{ background: "#eff6ff", color: "var(--accent)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
          Ce qu&apos;on fait
        </div>

        <h2 className="font-black tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ink)" }}>
          Deux services,<br />un seul objectif.
        </h2>

        <p className="text-base mb-14 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Chaque intervention est ciblée, concrète et orientée résultats.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.num} className="p-8 md:p-10 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "#fff", border: "1px solid var(--border)" }}>

              <div className="text-5xl font-black mb-6" style={{ color: "var(--border)" }}>
                {s.num}
              </div>

              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--ink)" }}>
                {s.title}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "#eff6ff", color: "var(--accent)" }}>
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}