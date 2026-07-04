import type { Metadata } from "next";
import BanniereTitre from "@/components/ui/BanniereTitre";
import GaleriePhotos from "@/components/galerie/GaleriePhotos";
import BandeauReservation from "@/components/sections/BandeauReservation";

export const metadata: Metadata = {
  title: "Galerie photos",
  description:
    "Parcourez les photos des Résidences Mère Germaine à Daloa : chambres, espaces communs, services et extérieurs de la résidence.",
  alternates: { canonical: "/galerie" },
};

/**
 * Page « Galerie » : photos filtrables par catégorie
 * avec visionneuse plein écran.
 */
export default function PageGalerie() {
  return (
    <>
      <BanniereTitre
        surtitre="Galerie"
        titre="La résidence en images"
        description="Chambres, espaces communs, services… découvrez l'atmosphère chaleureuse qui vous attend à Daloa."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GaleriePhotos />
        </div>
      </section>

      <BandeauReservation />
    </>
  );
}
