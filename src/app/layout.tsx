import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veylan Digital | Formations, ebooks et outils numériques",
  description:
    "Découvrez les formations, ebooks et outils numériques Veylan Digital pour apprendre, créer, entreprendre et progresser en Afrique francophone et à l’international.",
  metadataBase: new URL("https://veylan-digital.vercel.app"),
  openGraph: {
    title: "Veylan Digital | Technology. Knowledge. Growth.",
    description:
      "Des ressources numériques pour apprendre, créer et évoluer.",
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
