import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/accueil/Hero";
import APropos from "@/components/accueil/APropos";
import Services from "@/components/sections/Services";
import PourquoiNous from "@/components/sections/PourquoiNous";
import Temoignages from "@/components/sections/Temoignages";
import BandeauReservation from "@/components/sections/BandeauReservation";
import CarteChambre from "@/components/chambres/CarteChambre";
import TitreSection from "@/components/ui/TitreSection";
import AnimationApparition from "@/components/ui/AnimationApparition";
import { chambres } from "@/config/site";

/**
 * Page d'accueil : Hero, À propos, aperçu des chambres,
 * services, pourquoi nous choisir, témoignages et appel à l'action.
 */
export default function PageAccueil() {
  return (
    <>
      <Hero />
      <APropos />

      {/* Aperçu des chambres */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TitreSection
            surtitre="Nos chambres"
            titre="Un cocon pour chaque envie"
            description="De la chambre Standard à la Suite, chaque espace a été pensé pour votre repos et votre bien-être."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {chambres.map((chambre, index) => (
              <AnimationApparition key={chambre.id} delai={0.12 * index} className="h-full">
                <CarteChambre chambre={chambre} />
              </AnimationApparition>
            ))}
          </div>
          <AnimationApparition className="mt-12 text-center">
            <Link
              href="/chambres"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-rubis-700 transition-all hover:gap-3 hover:text-rubis-600"
            >
              Découvrir toutes nos chambres
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </AnimationApparition>
        </div>
      </section>

      <Services />
      <PourquoiNous />
      <Temoignages />
      <BandeauReservation />
    </>
  );
}
