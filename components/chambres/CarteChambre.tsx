import Image from "next/image";
import Link from "next/link";
import { Users, Check, ArrowRight } from "lucide-react";
import { formatPrix } from "@/lib/utils";
import type { Chambre } from "@/config/site";

type Props = {
  chambre: Chambre;
  /** Affiche la liste complète des équipements (page /chambres) */
  detaille?: boolean;
};

/**
 * Carte de présentation d'une chambre : photo, prix, équipements
 * et bouton de réservation prérempli.
 */
export default function CarteChambre({ chambre, detaille = false }: Props) {
  const equipementsAffiches = detaille ? chambre.equipements : chambre.equipements.slice(0, 4);
  const equipementsRestants = chambre.equipements.length - equipementsAffiches.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-charbon-950/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-charbon-950/15">
      {/* Photo */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={chambre.image}
          alt={`${chambre.nom} — ${chambre.description.slice(0, 60)}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {chambre.populaire && (
          <span className="absolute left-4 top-4 rounded-full bg-or-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-charbon-950 shadow-lg">
            Populaire
          </span>
        )}
        {/* Prix */}
        <div className="absolute bottom-4 right-4 rounded-2xl bg-charbon-950/85 px-4 py-2 text-creme backdrop-blur-sm">
          <span className="font-serif text-lg font-semibold text-or-400">{formatPrix(chambre.prix)}</span>
          <span className="text-xs text-creme/70"> / nuit</span>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl font-semibold text-charbon-950">{chambre.nom}</h3>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-creme-fonce px-3 py-1 text-xs font-medium text-charbon-700">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {chambre.capacite} pers.
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-charbon-600">{chambre.description}</p>

        {/* Équipements */}
        <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {equipementsAffiches.map((equipement) => (
            <li key={equipement} className="flex items-center gap-2 text-sm text-charbon-700">
              <Check className="h-4 w-4 shrink-0 text-foret-500" aria-hidden="true" />
              {equipement}
            </li>
          ))}
          {equipementsRestants > 0 && (
            <li className="text-sm font-medium text-rubis-600">
              + {equipementsRestants} autres équipements
            </li>
          )}
        </ul>

        {/* Bouton */}
        <div className="mt-auto pt-6">
          <Link
            href={`/reservation?chambre=${chambre.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-rubis-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:gap-3 hover:bg-rubis-700"
          >
            Réserver cette chambre
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
