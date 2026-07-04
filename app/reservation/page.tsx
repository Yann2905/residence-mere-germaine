import type { Metadata } from "next";
import { Suspense } from "react";
import { ShieldCheck, Clock3, BadgeCheck } from "lucide-react";
import BanniereTitre from "@/components/ui/BanniereTitre";
import AnimationApparition from "@/components/ui/AnimationApparition";
import FormulaireReservation from "@/components/reservation/FormulaireReservation";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre chambre aux Résidences Mère Germaine à Daloa en quelques clics : demande par WhatsApp ou e-mail, réponse rapide garantie.",
  alternates: { canonical: "/reservation" },
};

const garanties = [
  { icone: Clock3, titre: "Réponse rapide", texte: "Confirmation sous quelques heures, 7j/7." },
  { icone: ShieldCheck, titre: "Sans engagement", texte: "Votre demande ne vaut pas paiement." },
  { icone: BadgeCheck, titre: "Meilleur tarif", texte: "Réservez en direct, sans commission." },
];

/**
 * Page « Réservation » : formulaire de demande envoyée
 * par WhatsApp ou par e-mail.
 */
export default function PageReservation() {
  return (
    <>
      <BanniereTitre
        surtitre="Réservation"
        titre="Réservez votre séjour"
        description="Remplissez le formulaire ci-dessous : votre demande nous parvient directement par WhatsApp ou par e-mail, et nous vous confirmons la disponibilité dans les plus brefs délais."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Garanties */}
          <div className="mb-12 grid gap-5 sm:grid-cols-3">
            {garanties.map((garantie, index) => (
              <AnimationApparition key={garantie.titre} delai={0.1 * index}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-charbon-100 bg-white/70 p-6 text-center">
                  <garantie.icone className="h-7 w-7 text-rubis-600" aria-hidden="true" />
                  <h2 className="mt-3 font-serif text-lg font-semibold text-charbon-950">
                    {garantie.titre}
                  </h2>
                  <p className="mt-1 text-sm text-charbon-600">{garantie.texte}</p>
                </div>
              </AnimationApparition>
            ))}
          </div>

          {/* Formulaire (Suspense requis pour lire ?chambre=… dans l'URL) */}
          <AnimationApparition delai={0.2}>
            <Suspense
              fallback={
                <div className="rounded-3xl bg-white p-10 text-center text-charbon-500 shadow-xl shadow-charbon-950/10">
                  Chargement du formulaire…
                </div>
              }
            >
              <FormulaireReservation />
            </Suspense>
          </AnimationApparition>
        </div>
      </section>
    </>
  );
}
