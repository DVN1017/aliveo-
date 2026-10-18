"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const WHATSAPP = "22669064476";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Création de site web");
  const [site, setSite] = useState("");
  const [budget, setBudget] = useState("À définir");
  const [deadline, setDeadline] = useState("Dans le mois");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, country, company, service, site, budget, deadline, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setCountry(""); setCompany(""); setSite(""); setMessage("");
        setService("Création de site web"); setBudget("À définir"); setDeadline("Dans le mois"); setConsent(false);
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all";
  const fieldStyle = { background: "#111114", border: "1px solid #303037", color: "var(--ink)" };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8" style={{ background: "#111114" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div>
            <div className="text-xs font-bold tracking-[0.22em] mb-5" style={{ color: "var(--accent)" }}>PARLONS DE VOTRE PROJET</div>
            <h2 className="font-extrabold tracking-tight leading-[1.05] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.8rem)", fontFamily: "Manrope, sans-serif" }}>Une idée ?<br/><span style={{ color: "var(--accent)" }}>Construisons-la.</span></h2>
            <p className="leading-relaxed mb-8 max-w-md" style={{ color: "var(--muted)" }}>Décrivez votre besoin en quelques lignes. Nous examinerons votre demande et reviendrons vers vous pour discuter de la solution la plus adaptée.</p>
            <div className="space-y-4 text-sm" style={{ color: "var(--muted)" }}>
              <p><span style={{ color: "var(--accent)" }}>01</span> · Vous décrivez votre projet</p>
              <p><span style={{ color: "var(--accent)" }}>02</span> · Nous étudions le besoin et le budget</p>
              <p><span style={{ color: "var(--accent)" }}>03</span> · Vous recevez une proposition claire</p>
            </div>
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Bonjour Veylan Digital, je souhaite discuter d'un projet.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex mt-8 items-center gap-3 rounded-full px-5 py-3 font-bold text-sm" style={{ background: "#15281d", color: "#86efac", border: "1px solid #244a32" }}>
              Discuter sur WhatsApp ↗
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 md:p-8 rounded-2xl border" style={{ background: "#17171b", borderColor: "var(--border)" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Nom complet *</label>
                <input id="name" value={name} onChange={e => setName(e.target.value)} placeholder="Votre nom" required autoComplete="name" className={fieldClass} style={fieldStyle}/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Email *</label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="vous@entreprise.com" required autoComplete="email" className={fieldClass} style={fieldStyle}/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Pays *</label>
                <input id="country" value={country} onChange={e => setCountry(e.target.value)} placeholder="Indiquez votre pays" required autoComplete="country-name" className={fieldClass} style={fieldStyle}/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Entreprise / activité</label>
                <input id="company" value={company} onChange={e => setCompany(e.target.value)} placeholder="Nom de votre entreprise" className={fieldClass} style={fieldStyle}/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Service recherché *</label>
                <select id="service" value={service} onChange={e => setService(e.target.value)} className={fieldClass} style={fieldStyle}>
                  <option>Création de site web</option><option>Refonte de site web</option><option>Site e-commerce</option><option>SEO & visibilité Google</option><option>Automatisation</option><option>Stratégie digitale</option><option>Autre besoin</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="site" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Site actuel (facultatif)</label>
                <input id="site" type="url" value={site} onChange={e => setSite(e.target.value)} placeholder="https://votresite.com" className={fieldClass} style={fieldStyle}/>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Budget estimé *</label>
                <select id="budget" value={budget} onChange={e => setBudget(e.target.value)} className={fieldClass} style={fieldStyle}>
                  <option>À définir</option><option>Moins de 300 € / équivalent</option><option>300–700 € / équivalent</option><option>700–1 200 € / équivalent</option><option>Plus de 1 200 € / équivalent</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="deadline" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Délai souhaité</label>
                <select id="deadline" value={deadline} onChange={e => setDeadline(e.target.value)} className={fieldClass} style={fieldStyle}>
                  <option>Dès que possible</option><option>Dans le mois</option><option>Dans 2 à 3 mois</option><option>Flexible</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold" style={{ color: "#d4d4d8" }}>Parlez-nous de votre projet *</label>
              <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Votre activité, vos objectifs, les fonctionnalités souhaitées..." rows={5} required minLength={10} className={fieldClass} style={{ ...fieldStyle, resize: "vertical" }}/>
            </div>
            <label className="flex items-start gap-3 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required className="mt-0.5 accent-yellow-400"/>
              <span>J'accepte que les informations ci-dessus soient utilisées pour répondre à ma demande. Elles ne seront pas utilisées pour m'envoyer des communications marketing sans consentement distinct.</span>
            </label>
            <button type="submit" disabled={status === "loading" || !consent} className="w-full py-4 rounded-full font-extrabold text-sm hover:opacity-90 disabled:opacity-50" style={{ background: "var(--accent)", color: "#111" }}>
              {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande ↗"}
            </button>
            {status === "success" && <p role="status" className="text-sm text-center" style={{ color: "#86efac" }}>Merci ! Votre demande a bien été envoyée. Nous reviendrons vers vous.</p>}
            {status === "error" && <p role="alert" className="text-sm text-center" style={{ color: "#fca5a5" }}>L'envoi a échoué. Réessayez ou contactez-nous sur WhatsApp.</p>}
            <p className="text-[11px] leading-relaxed" style={{ color: "#777780" }}>Les informations sont utilisées uniquement pour traiter votre demande. Les délais de réponse seront confirmés après réception.</p>
          </form>
        </div>
      </div>
    </section>
  );
}