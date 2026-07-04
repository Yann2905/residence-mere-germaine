import AnimationApparition from "@/components/ui/AnimationApparition";

type Props = {
  surtitre: string;
  titre: string;
  description?: string;
};

/**
 * Bannière d'en-tête des pages intérieures
 * (Nos chambres, Galerie, Contact, Réservation).
 */
export default function BanniereTitre({ surtitre, titre, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-charbon-950 pb-20 pt-36 md:pb-24 md:pt-44">
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-rubis-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-or-500/10 blur-3xl"
        aria-hidden="true"
      />

      <AnimationApparition className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-or-400">
          {surtitre}
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-creme md:text-5xl">{titre}</h1>
        <div className="separateur-or mx-auto mt-6" aria-hidden="true" />
        {description && (
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-creme/80 md:text-lg">
            {description}
          </p>
        )}
      </AnimationApparition>
    </section>
  );
}
