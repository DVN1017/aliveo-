import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, country, company, service, site, budget, deadline, message } = body;

    if (![name, email, country, service, budget, message].every((value) => typeof value === "string" && value.trim().length > 0)) {
      return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
    }
    if (String(name).length > 160 || String(email).length > 254 || String(message).length > 5000) {
      return NextResponse.json({ error: "Demande trop longue" }, { status: 400 });
    }

    const fields: [string, unknown][] = [
      ["Nom", name], ["Email", email], ["Pays", country], ["Entreprise / activité", company],
      ["Service demandé", service], ["Site actuel", site], ["Budget estimé", budget],
      ["Délai souhaité", deadline], ["Description du projet", message],
    ];
    const html = `<h2>Nouvelle demande — Veylan Digital</h2><table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ddd">${fields.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value || "Non renseigné")}</td></tr>`).join("")}</table>`;

    await resend.emails.send({
      from: "Veylan Digital <onboarding@resend.dev>",
      to: "servicealiveo@gmail.com",
      replyTo: String(email),
      subject: `Nouvelle demande Veylan Digital — ${String(name).slice(0, 100)}`,
      html,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}