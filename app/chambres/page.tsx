import type { Metadata } from "next";
import BanniereTitre from "@/components/ui/BanniereTitre";
import CarteChambre from "@/components/chambres/CarteChambre";
import AnimationApparition from "@/components/ui/AnimationApparition";
import BandeauReservation from "@/components/sections/BandeauReservation";
import { chambres } from "@/config/site";

export const metadata: Metadata = {
  title: "Nos appartements meublés",
  description:
    "7 appartements meublés à Daloa : studio, 2 pièces et 3 pièces avec balcon, climatisation, Wi-Fi et accès à la piscine Nubela Beach. Dès 22 500 FCFA la nuit.",
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
        titre="Nos appartements meublés"
        description="7 appartements en 3 types d'aménagement — studio, 2 pièces et 3 pièces — tous avec balcon, accès à la piscine Nubela Beach et service de chambre. Tarif réduit du lundi au jeudi (Happy Discount) et forfait 3 nuits le week-end."
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
