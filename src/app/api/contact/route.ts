import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, site, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Aliveo Contact <onboarding@resend.dev>",
      to: "servicealiveo@gmail.com",
      subject: `Nouvelle demande d'audit — ${name}`,
      html: `
        <h2>Nouvelle demande d'audit SEO</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Site :</strong> ${site}</p>
        <p><strong>Message :</strong> ${message || "Aucun message"}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erreur envoi email" }, { status: 500 });
  }
}

