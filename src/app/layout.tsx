import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aliveo — Consultant SEO Remote & International",
  description: "Aliveo identifie ce qui freine votre visibilité sur Google et corrige les problèmes techniques qui vous coûtent des clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}