import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { infosSite } from "@/config/site";
import { lienWhatsApp, messageWhatsAppDefaut } from "@/lib/utils";

const liensRapides = [
  { href: "/", label: "Accueil" },
  { href: "/chambres", label: "Nos appartements" },
  { href: "/galerie", label: "Galerie" },
  { href: "/reservation", label: "Réservation" },
  { href: "/contact", label: "Contact" },
];

/**
 * Pied de page : logo, liens rapides, coordonnées, réseaux sociaux.
 */
export default function PiedDePage() {
  const annee = new Date().getFullYear();
  const { reseauxSociaux } = infosSite;

  return (
    <footer className="bg-charbon-950 text-creme/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Logo & présentation */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`Logo ${infosSite.nomCourt}`}
              width={56}
              height={56}
              className="h-14 w-14 rounded-xl bg-white object-contain p-1"
            />
            <span className="font-serif text-xl font-semibold text-creme">
              Résidences
              <span className="block text-sm font-normal text-or-400">Mère Germaine</span>
            </span>
          </Link>
          <p className="mt-5 font-serif text-sm italic leading-relaxed text-or-400">
            « {infosSite.devise} »
          </p>
          <p className="mt-3 text-sm leading-relaxed">{infosSite.slogan}</p>
          {/* Réseaux sociaux */}
          <div className="mt-6 flex gap-3">
            {reseauxSociaux.facebook && (
              <a
                href={reseauxSociaux.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notre page Facebook"
                className="rounded-full bg-creme/10 p-2.5 transition-colors hover:bg-rubis-600 hover:text-creme"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
            {reseauxSociaux.instagram && (
              <a
                href={reseauxSociaux.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Notre page Instagram"
                className="rounded-full bg-creme/10 p-2.5 transition-colors hover:bg-rubis-600 hover:text-creme"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Liens rapides */}
        <nav aria-label="Liens rapides">
          <h3 className="font-serif text-lg font-semibold text-creme">Liens rapides</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {liensRapides.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} className="transition-colors hover:text-or-400">
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coordonnées */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-creme">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-or-400" aria-hidden="true" />
              <span>
                {infosSite.adresse}
                <br />
                {infosSite.ville}, {infosSite.pays}
              </span>
            </li>
            <li>
              <a
                href={`tel:${infosSite.telephone.replace(/ /g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-or-400"
              >
                <Phone className="h-5 w-5 shrink-0 text-or-400" aria-hidden="true" />
                {infosSite.telephone}
              </a>
            </li>
            <li>
              <a
                href={lienWhatsApp(messageWhatsAppDefaut)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-or-400"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-or-400" aria-hidden="true" />
                WhatsApp : {infosSite.whatsappAffiche}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${infosSite.email}`}
                className="flex items-center gap-3 transition-colors hover:text-or-400"
              >
                <Mail className="h-5 w-5 shrink-0 text-or-400" aria-hidden="true" />
                {infosSite.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-or-400" aria-hidden="true" />
              {infosSite.horaires}
            </li>
          </ul>
        </div>

        {/* Réservation rapide */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-creme">Réservez votre séjour</h3>
          <p className="mt-5 text-sm leading-relaxed">
            Une envie d'évasion ou un déplacement à Daloa ? Réservez dès maintenant, nous nous
            occupons du reste.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/reservation"
              className="rounded-full bg-rubis-600 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-creme transition-colors hover:bg-rubis-500"
            >
              Réserver maintenant
            </Link>
            <a
              href={lienWhatsApp(messageWhatsAppDefaut)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-creme/30 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-creme transition-colors hover:border-or-400 hover:text-or-400"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-creme/10 py-6 text-center text-xs text-creme/50">
        <p>
          © {annee} {infosSite.nom} — Tous droits réservés. {infosSite.ville}, {infosSite.pays}.
        </p>
      </div>
    </footer>
  );
}
