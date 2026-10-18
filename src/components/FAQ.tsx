const questions = [
  { q: "À qui s’adressent les services de Veylan Digital ?", a: "Aux entrepreneurs, indépendants et entreprises qui veulent une présence en ligne plus professionnelle, améliorer leur visibilité ou simplifier certaines tâches grâce au numérique." },
  { q: "Pouvez-vous créer un site adapté à mon activité ?", a: "Oui. Le périmètre est défini selon votre objectif : site vitrine, boutique en ligne, page de campagne ou outil web. Nous clarifions les besoins avant de proposer une solution." },
  { q: "Le référencement Google garantit-il la première place ?", a: "Non. Personne ne peut garantir une position précise sur Google. Le travail SEO consiste à améliorer la structure, les performances, le contenu et les signaux techniques du site pour favoriser sa visibilité." },
  { q: "Comment obtenir un devis ?", a: "Décrivez votre activité, votre objectif, les fonctionnalités souhaitées et votre délai dans le formulaire de contact. Nous pourrons ensuite préciser le périmètre, le budget et les prochaines étapes." },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-20 md:px-8 md:py-28" style={{ background: "#0f192a" }}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[0.22em]" style={{ color: "var(--accent)" }}>QUESTIONS FRÉQUENTES</p>
          <h2 className="mb-5 font-extrabold leading-tight tracking-tight" style={{ fontFamily: "Manrope, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>Avant de vous lancer.</h2>
          <p className="max-w-md leading-relaxed" style={{ color: "var(--muted)" }}>Les informations essentielles pour comprendre notre approche et préparer votre projet.</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold" style={{ color: "var(--accent)" }}>Poser une question ↗</a>
        </div>
        <div>
          {questions.map((item, i) => (
            <details key={item.q} className="border-t py-5" style={{ borderColor: "var(--border)" }}>
              <summary className="cursor-pointer list-none text-base font-bold md:text-lg">{item.q}<span className="float-right ml-4" style={{ color: "var(--accent)" }}>+</span></summary>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
