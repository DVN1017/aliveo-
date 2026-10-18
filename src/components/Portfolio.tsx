const projects = [
  {
    name: "FasoCV",
    category: "Produit web · Outil de création de CV",
    description: "Une expérience web pensée pour aider les utilisateurs à structurer et préparer un CV professionnel.",
    url: "https://fasocv.vercel.app/",
    label: "Voir le projet",
    number: "01",
  },
  {
    name: "FlexiSave",
    category: "Produit web · Finance personnelle",
    description: "Une interface web dédiée à une expérience d&apos;épargne et de gestion financière simple.",
    url: "https://flexisave.vercel.app/",
    label: "Voir le projet",
    number: "02",
  },
];

export default function Portfolio() {
  return (
    <section id="realisations" className="py-24 md:py-32 px-5 md:px-8" style={{ background: "#0b1220" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold tracking-[0.22em] mb-5" style={{ color: "var(--accent)" }}>SÉLECTION DE PROJETS</div>
            <h2 className="font-extrabold tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2.3rem, 5vw, 4.5rem)", fontFamily: "Manrope, sans-serif" }}>Du concret.<br/>Pas seulement des idées.</h2>
          </div>
          <p className="max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>Quelques projets web qui illustrent notre approche de l&apos;expérience utilisateur, du produit et de la conception digitale.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <article key={project.name} className="rounded-2xl overflow-hidden border group" style={{ background: "#142137", borderColor: "var(--border)" }}>
              <div className="p-6 md:p-8 min-h-48 flex flex-col justify-between" style={{ background: "radial-gradient(ellipse at top right, rgba(120,189,242,.16), transparent 55%), #111b2d" }}>
                <div className="flex justify-between items-start"><span className="text-xs tracking-[0.2em]" style={{ color: "var(--accent)" }}>{project.number} / PROJET</span><span className="text-2xl" style={{ color: "var(--accent)" }}>↗</span></div>
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight mt-12" style={{ fontFamily: "Manrope, sans-serif" }}>{project.name}<span style={{ color: "var(--accent)" }}>.</span></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-xs font-semibold mb-3" style={{ color: "var(--accent)" }}>{project.category}</div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3" style={{ color: "var(--ink)" }}>{project.label} <span style={{ color: "var(--accent)" }}>↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs mt-5" style={{ color: "#777780" }}>Projets sélectionnés à titre de portfolio ; les descriptions présentent les produits, sans prétendre à des résultats clients non vérifiés.</p>
      </div>
    </section>
  );
}