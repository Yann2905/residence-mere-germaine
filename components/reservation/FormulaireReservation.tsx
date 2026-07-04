"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { chambres, infosSite } from "@/config/site";
import { formatPrix, lienWhatsApp } from "@/lib/utils";

type DonneesFormulaire = {
  nom: string;
  telephone: string;
  email: string;
  arrivee: string;
  depart: string;
  personnes: string;
  chambre: string;
  message: string;
};

/**
 * Formulaire de réservation.
 * À l'envoi, le client choisit :
 *  - WhatsApp : ouvre une conversation préremplie avec la résidence ;
 *  - E-mail : ouvre son logiciel de messagerie avec la demande prérédigée.
 * Aucune donnée n'est stockée sur un serveur.
 */
export default function FormulaireReservation() {
  const parametres = useSearchParams();
  const chambreInitiale = parametres.get("chambre") ?? "";

  const [donnees, setDonnees] = useState<DonneesFormulaire>({
    nom: "",
    telephone: "",
    email: "",
    arrivee: "",
    depart: "",
    personnes: "1",
    chambre: chambres.some((c) => c.id === chambreInitiale) ? chambreInitiale : "",
    message: "",
  });
  const [canal, setCanal] = useState<"whatsapp" | "email">("whatsapp");
  const [envoye, setEnvoye] = useState(false);

  const aujourdHui = new Date().toISOString().split("T")[0];

  const mettreAJour = (champ: keyof DonneesFormulaire, valeur: string) =>
    setDonnees((precedent) => ({ ...precedent, [champ]: valeur }));

  /** Construit le texte de la demande de réservation. */
  const construireMessage = () => {
    const chambreChoisie = chambres.find((c) => c.id === donnees.chambre);
    return [
      `Bonjour ${infosSite.nomCourt},`,
      ``,
      `Je souhaite effectuer une réservation :`,
      ``,
      `👤 Nom : ${donnees.nom}`,
      `📞 Téléphone : ${donnees.telephone}`,
      donnees.email ? `✉️ Email : ${donnees.email}` : "",
      `📅 Arrivée : ${donnees.arrivee}`,
      `📅 Départ : ${donnees.depart}`,
      `👥 Nombre de personnes : ${donnees.personnes}`,
      `🛏️ Appartement souhaité : ${chambreChoisie ? `${chambreChoisie.nom} — ${chambreChoisie.sousTitre} (dès ${formatPrix(chambreChoisie.prix)}/nuit)` : "À définir"}`,
      donnees.message ? `\n💬 Message : ${donnees.message}` : "",
      ``,
      `Merci de me confirmer la disponibilité.`,
    ]
      .filter((ligne) => ligne !== "")
      .join("\n");
  };

  const soumettre = (evenement: FormEvent) => {
    evenement.preventDefault();
    const texte = construireMessage();

    if (canal === "whatsapp") {
      window.open(lienWhatsApp(texte), "_blank", "noopener,noreferrer");
    } else {
      const sujet = encodeURIComponent(`Demande de réservation — ${donnees.nom}`);
      window.location.href = `mailto:${infosSite.email}?subject=${sujet}&body=${encodeURIComponent(texte)}`;
    }
    setEnvoye(true);
  };

  const styleChamp =
    "w-full rounded-xl border border-charbon-200 bg-white px-4 py-3 text-sm text-charbon-950 placeholder:text-charbon-400 transition-colors focus:border-rubis-500 focus:outline-none focus:ring-2 focus:ring-rubis-500/20";
  const styleLabel = "mb-1.5 block text-sm font-medium text-charbon-800";

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-charbon-950/10 sm:p-10">
      {envoye && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-start gap-3 rounded-2xl border border-foret-500/30 bg-foret-500/10 p-5"
          role="status"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foret-600" aria-hidden="true" />
          <div className="text-sm text-charbon-800">
            <p className="font-semibold">Votre demande a bien été préparée !</p>
            <p className="mt-1">
              {canal === "whatsapp"
                ? "Une conversation WhatsApp s'est ouverte avec votre demande préremplie. Il ne vous reste qu'à appuyer sur « Envoyer »."
                : "Votre logiciel de messagerie s'est ouvert avec votre demande prérédigée. Il ne vous reste qu'à l'envoyer."}
              {" "}Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={soumettre} className="grid gap-6 sm:grid-cols-2">
        {/* Nom */}
        <div className="sm:col-span-2">
          <label htmlFor="nom" className={styleLabel}>
            Nom complet <span className="text-rubis-600">*</span>
          </label>
          <input
            id="nom"
            type="text"
            required
            autoComplete="name"
            placeholder="Ex. : Awa Traoré"
            value={donnees.nom}
            onChange={(e) => mettreAJour("nom", e.target.value)}
            className={styleChamp}
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className={styleLabel}>
            Téléphone <span className="text-rubis-600">*</span>
          </label>
          <input
            id="telephone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Ex. : 07 00 00 00 00"
            value={donnees.telephone}
            onChange={(e) => mettreAJour("telephone", e.target.value)}
            className={styleChamp}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={styleLabel}>
            Adresse e-mail
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Ex. : vous@exemple.com"
            value={donnees.email}
            onChange={(e) => mettreAJour("email", e.target.value)}
            className={styleChamp}
          />
        </div>

        {/* Dates */}
        <div>
          <label htmlFor="arrivee" className={styleLabel}>
            Date d'arrivée <span className="text-rubis-600">*</span>
          </label>
          <input
            id="arrivee"
            type="date"
            required
            min={aujourdHui}
            value={donnees.arrivee}
            onChange={(e) => mettreAJour("arrivee", e.target.value)}
            className={styleChamp}
          />
        </div>
        <div>
          <label htmlFor="depart" className={styleLabel}>
            Date de départ <span className="text-rubis-600">*</span>
          </label>
          <input
            id="depart"
            type="date"
            required
            min={donnees.arrivee || aujourdHui}
            value={donnees.depart}
            onChange={(e) => mettreAJour("depart", e.target.value)}
            className={styleChamp}
          />
        </div>

        {/* Personnes */}
        <div>
          <label htmlFor="personnes" className={styleLabel}>
            Nombre de personnes <span className="text-rubis-600">*</span>
          </label>
          <select
            id="personnes"
            required
            value={donnees.personnes}
            onChange={(e) => mettreAJour("personnes", e.target.value)}
            className={styleChamp}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n > 1 ? "personnes" : "personne"}
              </option>
            ))}
            <option value="7+">Plus de 6 personnes</option>
          </select>
        </div>

        {/* Type d'appartement */}
        <div>
          <label htmlFor="chambre" className={styleLabel}>
            Type d'appartement <span className="text-rubis-600">*</span>
          </label>
          <select
            id="chambre"
            required
            value={donnees.chambre}
            onChange={(e) => mettreAJour("chambre", e.target.value)}
            className={styleChamp}
          >
            <option value="" disabled>
              Choisissez un appartement…
            </option>
            {chambres.map((chambre) => (
              <option key={chambre.id} value={chambre.id}>
                {chambre.nom} — dès {formatPrix(chambre.prix)}/nuit
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={styleLabel}>
            Message (optionnel)
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Une demande particulière ? Heure d'arrivée, lit bébé, séjour longue durée…"
            value={donnees.message}
            onChange={(e) => mettreAJour("message", e.target.value)}
            className={styleChamp}
          />
        </div>

        {/* Choix du canal d'envoi */}
        <fieldset className="sm:col-span-2">
          <legend className={styleLabel}>Comment souhaitez-vous envoyer votre demande ?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                canal === "whatsapp"
                  ? "border-[#25D366] bg-[#25D366]/5"
                  : "border-charbon-200 hover:border-charbon-300"
              }`}
            >
              <input
                type="radio"
                name="canal"
                value="whatsapp"
                checked={canal === "whatsapp"}
                onChange={() => setCanal("whatsapp")}
                className="h-4 w-4 accent-[#25D366]"
              />
              <span>
                <span className="block text-sm font-semibold text-charbon-950">Par WhatsApp</span>
                <span className="block text-xs text-charbon-500">Réponse rapide — recommandé</span>
              </span>
            </label>
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${
                canal === "email"
                  ? "border-rubis-500 bg-rubis-50"
                  : "border-charbon-200 hover:border-charbon-300"
              }`}
            >
              <input
                type="radio"
                name="canal"
                value="email"
                checked={canal === "email"}
                onChange={() => setCanal("email")}
                className="h-4 w-4 accent-rubis-600"
              />
              <span>
                <span className="block text-sm font-semibold text-charbon-950">Par e-mail</span>
                <span className="block text-xs text-charbon-500">Via votre messagerie</span>
              </span>
            </label>
          </div>
        </fieldset>

        {/* Bouton d'envoi */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-rubis-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-creme shadow-lg shadow-rubis-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rubis-700"
          >
            {canal === "whatsapp" ? (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Envoyer la demande sur WhatsApp
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Envoyer la demande par e-mail
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-charbon-500">
            Votre demande sera confirmée par notre équipe selon les disponibilités. Aucune donnée
            n'est enregistrée sur ce site.
          </p>
        </div>
      </form>
    </div>
  );
}
