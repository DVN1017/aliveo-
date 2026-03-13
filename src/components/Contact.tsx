"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const WHATSAPP = "22669064476";
const WA_TEXT = encodeURIComponent("Bonjour, je souhaite un audit SEO gratuit pour mon site.");

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, site, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setSite(""); setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-20" style={{ background: "var(--light)" }}>
      <div className="max-w-6xl mx-auto">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
          style={{ background: "#eff6ff", color: "var(--accent)" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
          Passons à l&apos;action
        </div>

        <h2 className="font-black tracking-tight leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ink)" }}>
          Votre audit gratuit<br />en 48 heures.
        </h2>

        <p className="text-base mb-14 max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
          Partagez l&apos;URL de votre site. On revient vers vous avec les problèmes prioritaires — sans engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 rounded-2xl"
            style={{ background: "#fff", border: "1px solid var(--border)" }}>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Votre nom</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Dan Ki" required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "var(--light)", border: "1px solid var(--border)", color: "var(--ink)" }} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Votre email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="vous@exemple.com" required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "var(--light)", border: "1px solid var(--border)", color: "var(--ink)" }} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>URL de votre site</label>
              <input type="url" value={site} onChange={e => setSite(e.target.value)} placeholder="https://votresite.com" required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: "var(--light)", border: "1px solid var(--border)", color: "var(--ink)" }} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>Message (optionnel)</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)}
                placeholder="Décrivez votre objectif..." rows={4}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all"
                style={{ background: "var(--light)", border: "1px solid var(--border)", color: "var(--ink)" }} />
            </div>

            <button type="submit" disabled={status === "loading"}
              className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: "var(--accent)", color: "#fff" }}>
              {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande →"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-center" style={{ color: "#16a34a" }}>
                ✓ Message envoyé ! On vous répond sous 48h.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-center text-red-500">
                Une erreur s&apos;est produite. Écrivez-nous sur WhatsApp.
              </p>
            )}

          </form>

          <div className="flex flex-col justify-center gap-8">

            <div className="p-8 rounded-2xl" style={{ background: "#fff", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>Email</p>
              <a href="mailto:servicealiveo@gmail.com" className="text-base font-semibold hover:underline" style={{ color: "var(--accent)" }}>
                servicealiveo@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: "#fff", border: "1px solid var(--border)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>WhatsApp</p>
              <a href={"https://wa.me/" + WHATSAPP + "?text=" + WA_TEXT}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                style={{ background: "#25D366", color: "#fff" }}>
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="p-8 rounded-2xl" style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}>
              <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--accent)" }}>
                ✓ Réponse garantie sous 48h<br />
                ✓ Audit initial 100% gratuit<br />
                ✓ Sans engagement
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}