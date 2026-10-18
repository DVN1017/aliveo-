const steps = [
  { num: "01", title: "On comprend votre besoin", desc: "Nous échangeons sur votre activité, vos clients, vos objectifs et les fonctionnalités réellement nécessaires." },
  { num: "02", title: "Vous recevez une proposition claire", desc: "Périmètre, étapes, délais et prix sont précisés avant le démarrage. Pas de surprise sur ce qui est inclus." },
  { num: "03", title: "Nous concevons et testons", desc: "Le site ou la solution est développé, vérifié sur mobile et ordinateur, puis présenté pour validation." },
  { num: "04", title: "Vous lancez et faites évoluer", desc: "Après validation et règlement prévu au devis, nous livrons le projet et pouvons organiser le suivi ou la maintenance." },
];

export default function Process() {
  return (
    <section id="methode" className="py-24 md:py-32 px-5 md:px-8" style={{ background: "#0b0b0d" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        <div>
          <div className="text-xs font-bold tracking-[0.22em] mb-5" style={{ color: "var(--accent)" }}>COMMENT ON TRAVAILLE</div>
          <h2 className="font-extrabold tracking-tight leading-[1.05] mb-6" style={{ fontSize: "clamp(2.3rem, 5vw, 4.5rem)", fontFamily: "Manrope, sans-serif" }}>Simple.<br/>Transparent.<br/><span style={{ color: "var(--accent)" }}>Structuré.</span></h2>
          <p className="max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>Un processus clair, du premier échange à la livraison, pour que vous sachiez toujours ce qui se passe et quelle est la prochaine étape.</p>
          <a href="#contact" className="inline-flex mt-8 font-bold text-sm items-center gap-2" style={{ color: "var(--accent)" }}>Décrire mon projet <span>↗</span></a>
        </div>
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={step.num} className="grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] gap-5 py-7 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="text-lg font-extrabold" style={{ color: "var(--accent)" }}>{step.num}</div>
              <div><h3 className="text-lg md:text-xl font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>{step.title}</h3><p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--muted)" }}>{step.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}