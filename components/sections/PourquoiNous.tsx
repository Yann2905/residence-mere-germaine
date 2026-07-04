import AnimationApparition from "@/components/ui/AnimationApparition";
import TitreSection from "@/components/ui/TitreSection";
import IconeService from "@/components/ui/IconeService";
import { pourquoiNous } from "@/config/site";

/**
 * Section « Pourquoi nous choisir ? » sur fond sombre premium.
 * Contenu modifiable dans config/site.ts → `pourquoiNous`.
 */
export default function PourquoiNous() {
  return (
    <section className="relative overflow-hidden bg-charbon-950 py-20 md:py-28">
      {/* Halo décoratif */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-rubis-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitreSection
          surtitre="Pourquoi nous choisir ?"
          titre="L'excellence au service de votre séjour"
          description="Bien plus qu'un hébergement : une expérience de confort, de calme et d'hospitalité authentique."
          clair
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pourquoiNous.map((atout, index) => (
            <AnimationApparition key={atout.titre} delai={0.08 * index}>
              <div className="group h-full rounded-3xl border border-creme/10 bg-creme/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-or-500/40 hover:bg-creme/10">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-or-500/15 p-3 text-or-400 transition-transform duration-500 group-hover:scale-110">
                  <IconeService nom={atout.icone} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-creme">{atout.titre}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-creme/70">{atout.texte}</p>
              </div>
            </AnimationApparition>
          ))}
        </div>
      </div>
    </section>
  );
}
