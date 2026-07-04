import type { Metadata } from "next";
import BanniereTitre from "@/components/ui/BanniereTitre";
import CarteChambre from "@/components/chambres/CarteChambre";
import AnimationApparition from "@/components/ui/AnimationApparition";
import BandeauReservation from "@/components/sections/BandeauReservation";
import { chambres } from "@/config/site";

export const metadata: Metadata = {
  title: "Nos chambres et suites",
  description:
    "Découvrez nos chambres Standard, Confort et Suites à Daloa : climatisation, Wi-Fi gratuit, télévision et salle de bain privée. Réservez au meilleur prix.",
  alternates: { canonical: "/chambres" },
};

/**
 * Page « Nos chambres » : liste complète des chambres avec
 * tous les équipements et boutons de réservation.
 */
export default function PageChambres() {
  return (
    <>
      <BanniereTitre
        surtitre="Hébergement"
        titre="Nos chambres & suites"
        description="Trois catégories de chambres pour répondre à toutes vos envies, du séjour d'affaires à l'escapade en famille. Toutes sont climatisées, connectées et impeccablement entretenues."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {chambres.map((chambre, index) => (
              <AnimationApparition key={chambre.id} delai={0.12 * index} className="h-full">
                <CarteChambre chambre={chambre} detaille />
              </AnimationApparition>
            ))}
          </div>

          <AnimationApparition className="mt-14">
            <p className="mx-auto max-w-2xl rounded-2xl border border-or-500/30 bg-or-500/5 p-6 text-center text-sm leading-relaxed text-charbon-700">
              💡 <strong>Séjour longue durée ou groupe ?</strong> Contactez-nous directement pour
              bénéficier de tarifs préférentiels adaptés à vos besoins.
            </p>
          </AnimationApparition>
        </div>
      </section>

      <BandeauReservation />
    </>
  );
}
