"use client";

import { useMemo, useState } from "react";

type Category = "Tout" | "Intelligence artificielle" | "Formations" | "Business" | "Outils" | "Développement personnel";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "Tout">;
  description: string;
  badge: string;
  priceLabel: string;
  checkoutUrl: string;
  accent: string;
  symbol: string;
};

const products: Product[] = [
  {
    id: "ia-guide",
    title: "Comprendre l’intelligence artificielle",
    subtitle: "Le guide essentiel pour débuter",
    category: "Intelligence artificielle",
    description: "Comprenez les fondamentaux de l’IA, ses usages concrets et les outils qui peuvent vous aider au quotidien.",
    badge: "Guide pratique",
    priceLabel: "Prix sur Chariow",
    checkoutUrl: "",
    accent: "from-amber-300/25 via-yellow-500/10 to-transparent",
    symbol: "✳",
  },
  {
    id: "chatgpt",
    title: "ChatGPT & l’IA pour débutants",
    subtitle: "Apprendre à utiliser l’IA efficacement",
    category: "Intelligence artificielle",
    description: "Découvrez les bases de ChatGPT et apprenez à formuler de meilleures demandes pour gagner du temps.",
    badge: "Pour débuter",
    priceLabel: "Prix sur Chariow",
    checkoutUrl: "",
    accent: "from-emerald-300/20 via-teal-500/10 to-transparent",
    symbol: "◎",
  },
  {
    id: "websites",
    title: "Apprendre à créer des sites web",
    subtitle: "De l’idée à votre premier site",
    category: "Formations",
    description: "Une ressource pour comprendre les étapes de création d’un site web et développer vos premières compétences.",
    badge: "Formation",
    priceLabel: "Prix sur Chariow",
    checkoutUrl: "",
    accent: "from-sky-300/20 via-blue-500/10 to-transparent",
    symbol: "⌘",
  },
  {
    id: "revenus",
    title: "Guide 2026 – Recevoir ses revenus en ligne",
    subtitle: "Comprendre les options et les outils",
    category: "Business",
    description: "Explorez des pistes, des outils et des méthodes pour structurer une activité numérique.",
    badge: "Business",
    priceLabel: "Prix sur Chariow",
    checkoutUrl: "",
    accent: "from-orange-300/20 via-amber-500/10 to-transparent",
    symbol: "↗",
  },
  {
    id: "fasocv",
    title: "FasoCV Premium",
    subtitle: "Donnez une présentation professionnelle à votre CV",
    category: "Outils",
    description: "Accédez aux fonctionnalités Premium de FasoCV pour préparer des candidatures plus soignées.",
    badge: "Outil professionnel",
    priceLabel: "Prix sur Chariow",
    checkoutUrl: "",
    accent: "from-violet-300/20 via-purple-500/10 to-transparent",
    symbol: "▤",
  },
  {
    id: "confidence",
    title: "Comment avoir confiance en soi",
    subtitle: "Un guide pour progresser avec méthode",
    category: "Développement personnel",
    description: "Des pistes concrètes pour travailler votre confiance, vos habitudes et votre progression personnelle.",
    badge: "Développement personnel",
    priceLabel: "Prix sur Chariow",
    checkoutUrl: "",
    accent: "from-rose-300/20 via-pink-500/10 to-transparent",
    symbol: "✦",
  },
];

const categories: Category[] = [
  "Tout",
  "Intelligence artificielle",
  "Formations",
  "Business",
  "Outils",
  "Développement personnel",
];

function BrandMark() {
  return (
    <a href="#accueil" className="group inline-flex items-center gap-3" aria-label="Veylan Digital, accueil">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#d7b56d]/40 bg-[#d7b56d]/10 text-2xl font-black text-[#e4c47e] shadow-[0_0_28px_rgba(215,181,109,.12)]">V</span>
      <span className="leading-none">
        <span className="block text-lg font-extrabold tracking-[.12em] text-white">VEYLAN</span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[.48em] text-[#d7b56d]">DIGITAL</span>
      </span>
    </a>
  );
}

function CheckoutModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
      <div className="flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#111319] shadow-2xl sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#d7b56d]">Paiement sécurisé</p>
            <h2 id="checkout-title" className="mt-1 text-base font-semibold text-white">{product.title}</h2>
          </div>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xl text-white/70 hover:bg-white/10" aria-label="Fermer le paiement">×</button>
        </div>
        {product.checkoutUrl ? (
          <iframe title={`Paiement Chariow — ${product.title}`} src={product.checkoutUrl} className="min-h-[68vh] w-full flex-1 bg-white" allow="payment *; clipboard-write" />
        ) : (
          <div className="grid min-h-[340px] place-items-center p-8 text-center">
            <div className="max-w-md">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#d7b56d]/10 text-2xl text-[#e4c47e]">↗</div>
              <h3 className="text-xl font-bold text-white">Connexion Chariow à finaliser</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">Le lien de paiement de ce produit n’est pas encore configuré. Le catalogue est prêt ; il reste à raccorder les liens Chariow pour activer les achats.</p>
              <button onClick={onClose} className="mt-6 rounded-full bg-[#d7b56d] px-6 py-3 text-sm font-bold text-[#151515]">Retour à la boutique</button>
            </div>
          </div>
        )}
        <div className="border-t border-white/10 px-5 py-3 text-center text-[11px] text-white/40">La transaction est traitée par Chariow. Ne partagez jamais vos informations bancaires avec notre assistance.</div>
      </div>
    </div>
  );
}

export default function Storefront() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tout");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const filteredProducts = useMemo(
    () => activeCategory === "Tout" ? products : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <main id="accueil" className="min-h-screen overflow-hidden bg-[#0b0c10] text-white">
      <header className="sticky top-0 z-50 border-b border-white/[.08] bg-[#0b0c10]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="hover:text-[#e4c47e]" href="#boutique">Boutique</a>
            <a className="hover:text-[#e4c47e]" href="#univers">Nos univers</a>
            <a className="hover:text-[#e4c47e]" href="#marque">À propos</a>
          </nav>
          <a href="#boutique" className="rounded-full border border-[#d7b56d]/50 px-4 py-2.5 text-xs font-bold text-[#e4c47e] hover:bg-[#d7b56d] hover:text-[#141414]">Explorer la boutique <span aria-hidden>↗</span></a>
        </div>
      </header>

      <section className="relative isolate border-b border-white/[.07]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_18%,rgba(215,181,109,.17),transparent_38%),radial-gradient(ellipse_at_12%_80%,rgba(76,93,125,.16),transparent_38%)]" />
        <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7b56d]/30 bg-[#d7b56d]/[.07] px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#e4c47e]"><span className="h-1.5 w-1.5 rounded-full bg-[#d7b56d]" /> Solutions numériques sélectionnées</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-7xl">Le numérique,<br />à <span className="bg-gradient-to-r from-[#f4dfaa] via-[#d7b56d] to-[#a77c35] bg-clip-text text-transparent">un autre niveau.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">Formations, ebooks et outils numériques pour apprendre, créer, entreprendre et progresser dans un monde qui évolue.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#boutique" className="rounded-full bg-[#d7b56d] px-7 py-4 text-sm font-extrabold text-[#161616] shadow-[0_10px_35px_rgba(215,181,109,.18)] transition hover:-translate-y-0.5 hover:bg-[#ebcd8c]">Découvrir les produits <span aria-hidden>→</span></a>
              <a href="#univers" className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white hover:border-[#d7b56d]/60">Explorer nos univers</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/45"><span>✓ Ressources numériques</span><span>✓ Paiement via Chariow</span><span>✓ Assistance client</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-8 rounded-full bg-[#d7b56d]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d7b56d]/25 bg-gradient-to-br from-[#25221b] via-[#17181c] to-[#0e1014] p-6 shadow-2xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-[10px] font-bold tracking-[.25em] text-[#d7b56d]">VEYLAN DIGITAL / COLLECTION</span><span className="text-xs text-white/35">01 — 05</span></div>
              <div className="py-10">
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/45">Technology. Knowledge. Growth.</p>
                <div className="mt-5 text-6xl font-black tracking-[-.08em] text-[#e4c47e] sm:text-8xl">V<span className="text-white">.</span></div>
                <p className="mt-4 max-w-xs text-2xl font-semibold leading-tight text-white sm:text-3xl">Apprendre.<br />Créer. Évoluer.</p>
              </div>
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center">
                {[["AI","Intelligence"],["EDU","Formation"],["TOOLS","Outils"]].map(([code,label]) => <div key={code} className="rounded-xl border border-white/[.07] bg-white/[.03] px-2 py-3"><div className="text-xs font-extrabold tracking-widest text-[#d7b56d]">{code}</div><div className="mt-1 text-[10px] text-white/45">{label}</div></div>)}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#17191f] px-4 py-3 shadow-xl sm:-left-7"><span className="block text-[9px] uppercase tracking-[.18em] text-white/40">Notre engagement</span><span className="mt-1 block text-sm font-semibold text-[#e4c47e]">Le savoir en mouvement.</span></div>
          </div>
        </div>
      </section>

      <section id="univers" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#d7b56d]">Explorer</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Nos univers</h2></div><p className="max-w-md text-sm leading-6 text-white/50">Des ressources organisées par objectif pour trouver plus facilement ce dont vous avez besoin.</p></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["✳","Veylan AI","Comprendre et utiliser l’intelligence artificielle.","Intelligence artificielle"],
            ["⌘","Veylan Academy","Développer des compétences numériques utiles.","Formations"],
            ["▤","Veylan Tools","Des outils pour travailler plus efficacement.","Outils"],
            ["✦","Veylan Growth","Progresser avec méthode et confiance.","Développement personnel"],
            ["↗","Veylan Business","Explorer les opportunités du numérique.","Business"],
          ].map(([icon,title,desc,category]) => <button key={title} onClick={() => { setActiveCategory(category as Category); document.getElementById("boutique")?.scrollIntoView({behavior:"smooth"}); }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.055] to-white/[.015] p-5 text-left transition hover:-translate-y-1 hover:border-[#d7b56d]/50"><span className="text-3xl text-[#d7b56d]">{icon}</span><h3 className="mt-7 font-bold text-white">{title}</h3><p className="mt-2 text-xs leading-5 text-white/45">{desc}</p><span className="mt-5 inline-block text-xs font-bold text-[#d7b56d]">Explorer →</span></button>)}
        </div>
      </section>

      <section id="boutique" className="border-y border-white/[.07] bg-[#101116]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#d7b56d]">La sélection Veylan</p><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">La boutique</h2><p className="mt-3 text-sm text-white/50">Des ressources pour passer de l’envie à l’action.</p></div><span className="text-xs text-white/35">{filteredProducts.length} produits</span></div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition ${activeCategory === category ? "border-[#d7b56d] bg-[#d7b56d] text-[#151515]" : "border-white/10 bg-white/[.03] text-white/60 hover:border-[#d7b56d]/40 hover:text-white"}`}>{category}</button>)}
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product,index) => <article key={product.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#17191f] transition hover:-translate-y-1 hover:border-[#d7b56d]/45">
              <div className={`relative flex h-56 items-end overflow-hidden bg-gradient-to-br ${product.accent} p-6`}>
                <div className="absolute inset-0 opacity-30" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",backgroundSize:"28px 28px"}} />
                <div className="absolute right-6 top-4 text-8xl font-black text-white/[.07]">{product.symbol}</div>
                <div className="relative w-full rounded-xl border border-white/15 bg-[#111319]/90 p-5 shadow-2xl backdrop-blur">
                  <div className="text-[9px] font-bold tracking-[.25em] text-[#d7b56d]">VEYLAN DIGITAL</div>
                  <div className="mt-4 text-2xl font-extrabold leading-tight text-white">{product.title}</div>
                  <div className="mt-3 h-0.5 w-12 bg-[#d7b56d]" />
                  <div className="mt-3 text-[10px] uppercase tracking-[.18em] text-white/40">{product.badge}</div>
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] text-white/70">{product.category}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{product.title}</h3>
                <p className="mt-1 text-xs font-medium text-[#d7b56d]">{product.subtitle}</p>
                <p className="mt-3 min-h-[60px] text-sm leading-6 text-white/50">{product.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[.08] pt-4"><span className="text-xs text-white/45">{product.priceLabel}</span><button onClick={() => setSelectedProduct(product)} className="rounded-full bg-[#d7b56d] px-4 py-2.5 text-xs font-extrabold text-[#171717] transition hover:bg-[#edcf91]">Voir / Acheter ↗</button></div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="marque" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center">
        <div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#d7b56d]">Notre vision</p><h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Le numérique doit ouvrir des possibilités, pas créer des barrières.</h2></div>
        <div><p className="text-sm leading-7 text-white/55">Veylan Digital sélectionne et développe des ressources numériques pour accompagner celles et ceux qui souhaitent apprendre, entreprendre et évoluer. Notre ambition : rendre les compétences et les outils digitaux plus accessibles, en Afrique francophone et à l’international.</p><div className="mt-7 grid grid-cols-3 gap-3">{[["01","Apprendre"],["02","Créer"],["03","Évoluer"]].map(([n,t])=><div key={n} className="rounded-xl border border-white/10 bg-white/[.03] p-4"><span className="text-xs text-[#d7b56d]">{n}</span><span className="mt-2 block text-sm font-bold">{t}</span></div>)}</div></div>
      </section>

      <footer className="border-t border-white/10 bg-[#08090c] px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center"><BrandMark /><p className="max-w-sm text-xs leading-6 text-white/40">Technology. Knowledge. Growth.<br/>Des ressources numériques pour apprendre, créer et progresser.</p><div className="text-xs text-white/40">© {new Date().getFullYear()} Veylan Digital. Tous droits réservés.</div></div>
      </footer>

      {selectedProduct && <CheckoutModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </main>
  );
}
