const steps = [
  {
    num: "01",
    title: "Analyse de votre site",
    desc: "On commence par un audit complet — technique, contenu, mobile, vitesse. On cartographie tout ce qui freine votre visibilité sur Google.",
  },
  {
    num: "02",
    title: "Rapport priorisé",
    desc: "Vous recevez un rapport clair avec les problèmes classés par impact. Ce qui coûte le plus de trafic en premier, sans jargon inutile.",
  },
  {
    num: "03",
    title: "Correction et suivi",
    desc: "On corrige les problèmes identifiés et on suit l'évolution de votre positionnement dans le temps pour mesurer les résultats réels.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-20" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
          style={{ background: "#eff6ff", color: "var(--accent)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
          La méthode
        </div>

        <h2 className="font-black tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ink)" }}>
          Simple, direct,<br />efficace.
        </h2>

        <p className="text-base mb-14 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Pas de jargon, pas de promesses vagues. On identifie, on corrige, on mesure.
        </p>

        <div className="flex flex-col gap-4">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-6 p-8 rounded-2xl transition-all hover:shadow-md"
              style={{ background: "var(--light)", border: "1px solid var(--border)" }}>

              <div className="text-4xl font-black shrink-0" style={{ color: "var(--border)" }}>
                {step.num}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}