export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center px-5 md:px-8 pt-32 pb-20 overflow-hidden" style={{ background: "radial-gradient(ellipse at 78% 28%, rgba(250,204,21,0.10), transparent 35%), #0b0b0d" }}>
      <div className="absolute top-28 right-[12%] w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(250,204,21,0.06)" }} />
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border" style={{ background: "rgba(250,204,21,0.07)", color: "var(--accent)", borderColor: "rgba(250,204,21,0.24)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            STRATÉGIE DIGITALE · WEB · SEO · IA
          </div>
          <h1 className="font-extrabold tracking-[-0.055em] leading-[0.98] mb-7" style={{ fontSize: "clamp(3rem, 7vw, 6.8rem)", color: "var(--ink)", fontFamily: "Manrope, sans-serif" }}>
            Votre présence<br />digitale, <span style={{ color: "var(--accent)" }}>mieux</span><br />pensée.
          </h1>
          <p className="text-base md:text-lg max-w-xl leading-relaxed mb-9" style={{ color: "var(--muted)" }}>
            Nous créons des sites web professionnels, améliorons votre visibilité sur Google et concevons des solutions digitales utiles pour développer votre activité.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <a href="#contact" className="inline-flex items-center gap-3 px-6 md:px-7 py-4 rounded-full font-bold text-sm hover:-translate-y-0.5 hover:shadow-xl" style={{ background: "var(--accent)", color: "#111" }}>
              Parlons de votre projet <span aria-hidden="true">↗</span>
            </a>
            <a href="#realisations" className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-sm border hover:bg-white/5" style={{ borderColor: "var(--border)", color: "var(--ink)" }}>
              Voir les réalisations
            </a>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs md:text-sm" style={{ color: "var(--muted)" }}>
            <span>✓ Approche orientée objectifs</span>
            <span>✓ Adapté au mobile</span>
            <span>✓ SEO dès la conception</span>
          </div>
        </div>
        <div className="relative max-w-xl w-full mx-auto">
          <div className="absolute -inset-4 rounded-[2rem] blur-2xl" style={{ background: "rgba(250,204,21,0.08)" }} />
          <div className="relative rounded-[1.75rem] border p-5 md:p-7 overflow-hidden" style={{ background: "linear-gradient(145deg, #1b1b20, #101013)", borderColor: "#33333a" }}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400/70"/><span className="w-2.5 h-2.5 rounded-full bg-yellow-300/70"/><span className="w-2.5 h-2.5 rounded-full bg-green-400/70"/></div>
              <span className="text-[10px] tracking-[0.2em]" style={{ color: "var(--muted)" }}>VEYLAN DIGITAL / STUDIO</span>
            </div>
            <div className="rounded-2xl p-5 md:p-7 mb-4" style={{ background: "#0b0b0d", border: "1px solid #29292f" }}>
              <div className="text-xs tracking-[0.18em] mb-4" style={{ color: "var(--accent)" }}>DIGITAL THAT WORKS</div>
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>Construire.<br/>Optimiser.<br/><span style={{ color: "var(--accent)" }}>Développer.</span></div>
              <div className="h-1 w-20 rounded-full mb-6" style={{ background: "var(--accent)" }}/>
              <div className="grid grid-cols-3 gap-2">
                {[{n:"WEB",i:"⌘"},{n:"SEO",i:"↗"},{n:"AUTOMATION",i:"◎"}].map((item) => <div key={item.n} className="rounded-xl p-3 text-center" style={{ background: "#19191e", border: "1px solid #29292f" }}><div className="text-2xl mb-2" style={{ color: "var(--accent)" }}>{item.i}</div><div className="text-[9px] tracking-wider" style={{ color: "var(--muted)" }}>{item.n}</div></div>)}
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
              <span className="text-xs" style={{ color: "var(--muted)" }}>Une stratégie pensée pour votre activité.</span>
              <span className="text-xs font-bold" style={{ color: "var(--accent)" }}>VD / 01</span>
            </div>
          </div>
          <p className="text-center text-xs mt-4" style={{ color: "#777780" }}>Visuel de marque temporaire — le portrait réel de Veylan sera intégré dès que son fichier sera disponible.</p>
        </div>
      </div>
    </section>
  );
}