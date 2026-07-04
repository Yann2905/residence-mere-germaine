import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import Entete from "@/components/layout/Entete";
import PiedDePage from "@/components/layout/PiedDePage";
import BoutonWhatsApp from "@/components/layout/BoutonWhatsApp";
import DonneesStructurees from "@/components/seo/DonneesStructurees";
import { infosSite } from "@/config/site";
import "./globals.css";

/** Typographie des titres : serif élégant */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/** Typographie du corps de texte */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * Métadonnées globales du site (SEO, Open Graph, Twitter Cards).
 * Les pages définissent ensuite leurs propres titres/descriptions.
 */
export const metadata: Metadata = {
  metadataBase: new URL(infosSite.url),
  title: {
    default: `${infosSite.nom} — Résidence hôtelière à Daloa, Côte d'Ivoire`,
    template: `%s | ${infosSite.nomCourt}`,
  },
  description: infosSite.description,
  keywords: [
    "Résidence à Daloa",
    "Hôtel à Daloa",
    "Hébergement à Daloa",
    "Chambre à louer à Daloa",
    "Appartement meublé à Daloa",
    "Résidence hôtelière à Daloa",
    "Résidences Mère Germaine",
    "Piscine Daloa",
    "Nubela Beach",
    "Nubela Lounge",
    "Hôtel Haut-Sassandra",
    "Côte d'Ivoire",
  ],
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: infosSite.url,
    siteName: infosSite.nom,
    title: `${infosSite.nom} — Votre confort au cœur de Daloa`,
    description: infosSite.description,
    images: [
      {
        url: "/images/residence/facade-crepuscule.jpg",
        width: 960,
        height: 1280,
        alt: `Façade de ${infosSite.nom} au coucher du soleil`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${infosSite.nom} — Votre confort au cœur de Daloa`,
    description: infosSite.description,
    images: ["/images/residence/facade-crepuscule.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${montserrat.variable}`}>
      <body>
        <DonneesStructurees />
        {/* Lien d'évitement pour la navigation clavier */}
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rubis-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-creme"
        >
          Aller au contenu principal
        </a>
        <Entete />
        <main id="contenu-principal">{children}</main>
        <PiedDePage />
        <BoutonWhatsApp />
      </body>
    </html>
  );
}
