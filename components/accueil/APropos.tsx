import Image from "next/image";
import { Sparkles } from "lucide-react";
import AnimationApparition from "@/components/ui/AnimationApparition";
import Statistiques from "@/components/accueil/Statistiques";
import { aPropos, infosSite } from "@/config/site";

/**
 * Section « À propos » : histoire, mission, valeurs + statistiques animées.
 * Tous les textes se modifient dans config/site.ts → `aPropos`.
 */
export default function APropos() {
  return (
    <section id="a-propos" className="scroll-mt-20">
      {/* Présentation */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <AnimationApparition direction="droite" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-charbon-950/20 md:aspect-[5/6]">
            <Image
              src={aPropos.image}
              alt={`Façade de ${infosSite.nom}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Encadré décoratif */}
          <div
            className="absolute -bottom-5 -right-5 -z-10 h-full w-full rounded-3xl border-2 border-or-500/40"
            aria-hidden="true"
          />
        </AnimationApparition>

        {/* Texte */}
        <div>
          <AnimationApparition>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-rubis-600">
              À propos de nous
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-charbon-950 md:text-4xl">
              {aPropos.titre}
            </h2>
            <div className="separateur-or mt-5" aria-hidden="true" />
            <p className="mt-6 leading-relaxed text-charbon-700">{aPropos.histoire}</p>
            <p className="mt-4 leading-relaxed text-charbon-700">
              <strong className="text-charbon-900">Notre mission :</strong> {aPropos.mission}
            </p>
          </AnimationApparition>

          {/* Valeurs */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aPropos.valeurs.map((valeur, index) => (
              <AnimationApparition key={valeur.titre} delai={0.1 * index}>
                <div className="h-full rounded-2xl border border-charbon-100 bg-white/60 p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-charbon-950/5">
                  <Sparkles className="h-5 w-5 text-or-500" aria-hidden="true" />
                  <h3 className="mt-3 font-serif text-lg font-semibold text-charbon-950">
                    {valeur.titre}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charbon-600">{valeur.texte}</p>
                </div>
              </AnimationApparition>
            ))}
          </div>
        </div>
      </div>

      {/* Statistiques sur fond sombre */}
      <div className="bg-charbon-950 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Statistiques />
        </div>
      </div>
    </section>
  );
}
