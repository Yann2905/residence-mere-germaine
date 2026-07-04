import {
  Wifi,
  AirVent,
  SquareParking,
  ConciergeBell,
  BellRing,
  UtensilsCrossed,
  Waves,
  Presentation,
  BedDouble,
  ShieldCheck,
  Leaf,
  Award,
  HeartHandshake,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/**
 * Associe les identifiants d'icônes utilisés dans config/site.ts
 * aux icônes Lucide correspondantes.
 * ➜ Pour changer une icône, modifiez simplement ce tableau.
 */
const icones: Record<string, LucideIcon> = {
  // Services
  wifi: Wifi,
  climatisation: AirVent,
  parking: SquareParking,
  "service-chambre": ConciergeBell,
  reception: BellRing,
  restaurant: UtensilsCrossed,
  piscine: Waves,
  "salle-conference": Presentation,
  // Pourquoi nous choisir
  confort: BedDouble,
  securite: ShieldCheck,
  calme: Leaf,
  qualite: Award,
  accueil: HeartHandshake,
  emplacement: MapPin,
};

type Props = {
  nom: string;
  className?: string;
};

export default function IconeService({ nom, className = "h-6 w-6" }: Props) {
  const Icone = icones[nom] ?? BellRing;
  return <Icone className={className} aria-hidden="true" />;
}
