import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veylan Digital — Création web, SEO & automatisation",
  description:
    "Veylan Digital accompagne les entreprises avec des sites web professionnels, le référencement naturel et des solutions digitales utiles.",
  metadataBase: new URL("https://aliveo.vercel.app"),
  openGraph: {
    title: "Veylan Digital — Création web, SEO & automatisation",
    description:
      "Des solutions digitales pensées pour présenter votre activité, renforcer votre visibilité et générer des demandes qualifiées.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}