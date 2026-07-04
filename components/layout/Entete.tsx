"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { infosSite } from "@/config/site";

const liensNavigation = [
  { href: "/", label: "Accueil" },
  { href: "/chambres", label: "Nos chambres" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

/**
 * Barre de navigation fixe :
 * - transparente au-dessus du Hero de la page d'accueil ;
 * - fond crème + ombre dès que l'on défile ou sur les autres pages ;
 * - menu latéral animé sur mobile.
 */
export default function Entete() {
  const [defile, setDefile] = useState(false);
  const [menuOuvert, setMenuOuvert] = useState(false);
  const cheminActuel = usePathname();

  useEffect(() => {
    const surDefilement = () => setDefile(window.scrollY > 40);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  // Fermer le menu mobile à chaque changement de page
  useEffect(() => {
    setMenuOuvert(false);
  }, [cheminActuel]);

  const surAccueil = cheminActuel === "/";
  const fondSolide = defile || !surAccueil || menuOuvert;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        fondSolide ? "bg-creme/95 shadow-md shadow-charbon-950/5 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Retour à l'accueil">
          <Image
            src="/images/logo.png"
            alt={`Logo ${infosSite.nomCourt}`}
            width={48}
            height={48}
            className="h-11 w-11 rounded-lg bg-white object-contain p-0.5 shadow-sm"
            priority
          />
          <span
            className={`font-serif text-lg font-semibold leading-tight transition-colors sm:text-xl ${
              fondSolide ? "text-charbon-950" : "text-creme"
            }`}
          >
            Résidences
            <span className="block text-sm font-normal tracking-wide text-or-500">Mère Germaine</span>
          </span>
        </Link>

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {liensNavigation.map((lien) => {
            const actif = cheminActuel === lien.href;
            return (
              <Link
                key={lien.href}
                href={lien.href}
                aria-current={actif ? "page" : undefined}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-or-500 after:transition-all after:duration-300 hover:after:w-full ${
                  actif ? "after:w-full" : "after:w-0"
                } ${
                  fondSolide
                    ? actif
                      ? "text-rubis-700"
                      : "text-charbon-800 hover:text-rubis-700"
                    : "text-creme hover:text-or-300"
                }`}
              >
                {lien.label}
              </Link>
            );
          })}
          <Link
            href="/reservation"
            className="rounded-full bg-rubis-600 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-creme shadow-lg shadow-rubis-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rubis-700"
          >
            Réserver
          </Link>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-expanded={menuOuvert}
          aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          className={`rounded-lg p-2 transition-colors lg:hidden ${
            fondSolide ? "text-charbon-950" : "text-creme"
          }`}
        >
          {menuOuvert ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOuvert && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-charbon-100 bg-creme lg:hidden"
            aria-label="Navigation mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {liensNavigation.map((lien) => (
                <Link
                  key={lien.href}
                  href={lien.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    cheminActuel === lien.href
                      ? "bg-rubis-50 text-rubis-700"
                      : "text-charbon-800 hover:bg-creme-fonce"
                  }`}
                >
                  {lien.label}
                </Link>
              ))}
              <Link
                href="/reservation"
                className="mt-2 rounded-xl bg-rubis-600 px-4 py-3 text-center text-base font-semibold text-creme"
              >
                Réserver maintenant
              </Link>
              <a
                href={`tel:${infosSite.telephone.replace(/ /g, "")}`}
                className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-charbon-200 px-4 py-3 text-base font-medium text-charbon-800"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {infosSite.telephoneAffiche}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
