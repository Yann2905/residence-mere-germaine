import AnimationApparition from "@/components/ui/AnimationApparition";

type Props = {
  /** Petit texte au-dessus du titre (ex. « Nos chambres ») */
  surtitre?: string;
  titre: string;
  description?: string;
  centre?: boolean;
  /** Variante pour fonds sombres */
  clair?: boolean;
};

/**
 * Titre de section homogène sur tout le site :
 * surtitre doré, grand titre serif et séparateur décoratif.
 */
export default function TitreSection({ surtitre, titre, description, centre = true, clair = false }: Props) {
  return (
    <AnimationApparition className={centre ? "text-center" : ""}>
      {surtitre && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-rubis-600">
          {surtitre}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold leading-tight md:text-4xl lg:text-[2.75rem] ${
          clair ? "text-creme" : "text-charbon-950"
        }`}
      >
        {titre}
      </h2>
      <div className={`separateur-or mt-5 ${centre ? "mx-auto" : ""}`} aria-hidden="true" />
      {description && (
        <p
          className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${
            clair ? "text-creme/80" : "text-charbon-700"
          } ${centre ? "" : "mx-0"}`}
        >
          {description}
        </p>
      )}
    </AnimationApparition>
  );
}
