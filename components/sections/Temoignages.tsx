import Image from "next/image";
import { Star, Quote } from "lucide-react";
import AnimationApparition from "@/components/ui/AnimationApparition";
import TitreSection from "@/components/ui/TitreSection";
import { temoignages } from "@/config/site";
import { initiales } from "@/lib/utils";

/**
 * Note en étoiles (sur 5), accessible aux lecteurs d'écran.
 */
function Etoiles({ note }: { note: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`Note : ${note} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < note ? "fill-or-500 text-or-500" : "fill-charbon-100 text-charbon-100"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/**
 * Section « Témoignages clients ».
 * Contenu modifiable dans config/site.ts → `temoignages`.
 */
export default function Temoignages() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitreSection
          surtitre="Témoignages"
          titre="Ils ont séjourné chez nous"
          description="La satisfaction de nos hôtes est notre plus belle récompense."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {temoignages.map((temoignage, index) => (
            <AnimationApparition key={temoignage.nom} delai={0.1 * index}>
              <figure className="flex h-full flex-col rounded-3xl border border-charbon-100 bg-white p-7 shadow-sm shadow-charbon-950/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-charbon-950/10">
                <Quote className="h-8 w-8 text-rubis-200" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charbon-700">
                  « {temoignage.commentaire} »
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-charbon-100 pt-5">
                  {temoignage.photo ? (
                    <Image
                      src={temoignage.photo}
                      alt={`Photo de ${temoignage.nom}`}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-rubis-100 font-serif text-sm font-semibold text-rubis-700"
                      aria-hidden="true"
                    >
                      {initiales(temoignage.nom)}
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-charbon-950">{temoignage.nom}</p>
                    {temoignage.provenance && (
                      <p className="text-xs text-charbon-500">{temoignage.provenance}</p>
                    )}
                    <div className="mt-1">
                      <Etoiles note={temoignage.note} />
                    </div>
                  </div>
                </figcaption>
              </figure>
            </AnimationApparition>
          ))}
        </div>
      </div>
    </section>
  );
}
