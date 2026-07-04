import { infosSite } from "@/config/site";

/**
 * Formate un prix en Francs CFA : 25000 → « 25 000 FCFA »
 */
export function formatPrix(prix: number): string {
  return `${prix.toLocaleString("fr-FR").replace(/ /g, " ")} FCFA`;
}

/**
 * Construit un lien WhatsApp avec un message prérempli.
 */
export function lienWhatsApp(message: string): string {
  return `https://wa.me/${infosSite.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Message WhatsApp par défaut (bouton flottant, CTA…).
 */
export const messageWhatsAppDefaut = `Bonjour ${infosSite.nomCourt}, je souhaite avoir des informations pour une réservation.`;

/**
 * Renvoie les initiales d'un nom : « Awa Traoré » → « AT »
 */
export function initiales(nom: string): string {
  return nom
    .split(" ")
    .map((mot) => mot[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
