import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import BanniereTitre from "@/components/ui/BanniereTitre";
import AnimationApparition from "@/components/ui/AnimationApparition";
import Bouton from "@/components/ui/Bouton";
import { infosSite } from "@/config/site";
import { lienWhatsApp, messageWhatsAppDefaut } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & accès",
  description: `Contactez ${infosSite.nom} à Daloa : téléphone, WhatsApp, e-mail et plan d'accès. Réception ouverte 24h/24.`,
  alternates: { canonical: "/contact" },
};

const coordonnees = [
  {
    icone: MapPin,
    titre: "Adresse & accès",
    contenu: `${infosSite.adresse}, ${infosSite.ville}, ${infosSite.pays} — ${infosSite.acces}`,
    lien: undefined as string | undefined,
  },
  {
    icone: Phone,
    titre: "Téléphone",
    contenu: infosSite.telephone,
    lien: `tel:${infosSite.telephone.replace(/ /g, "")}`,
  },
  {
    icone: MessageCircle,
    titre: "WhatsApp",
    contenu: `+225 ${infosSite.whatsappAffiche}`,
    lien: lienWhatsApp(messageWhatsAppDefaut),
  },
  {
    icone: Mail,
    titre: "E-mail",
    contenu: infosSite.email,
    lien: `mailto:${infosSite.email}`,
  },
  {
    icone: Clock,
    titre: "Horaires",
    contenu: infosSite.horaires,
    lien: undefined,
  },
];

/**
 * Page « Contact » : coordonnées, boutons d'appel / WhatsApp
 * et carte Google Maps.
 */
export default function PageContact() {
  return (
    <>
      <BanniereTitre
        surtitre="Contact"
        titre="Nous restons à votre écoute"
        description="Une question, une réservation, une demande particulière ? Notre équipe vous répond rapidement, 7 jours sur 7."
      />

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Coordonnées */}
          <div>
            <AnimationApparition>
              <h2 className="font-serif text-3xl font-semibold text-charbon-950">Nos coordonnées</h2>
              <div className="separateur-or mt-5" aria-hidden="true" />
            </AnimationApparition>

            <div className="mt-10 space-y-6">
              {coordonnees.map((info, index) => (
                <AnimationApparition key={info.titre} delai={0.08 * index}>
                  <div className="flex items-start gap-5 rounded-2xl border border-charbon-100 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-charbon-950/5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rubis-50 text-rubis-600">
                      <info.icone className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charbon-950">{info.titre}</h3>
                      {info.lien ? (
                        <a
                          href={info.lien}
                          className="mt-1 block text-sm text-charbon-600 transition-colors hover:text-rubis-700"
                        >
                          {info.contenu}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm text-charbon-600">{info.contenu}</p>
                      )}
                    </div>
                  </div>
                </AnimationApparition>
              ))}
            </div>

            {/* Boutons d'action */}
            <AnimationApparition delai={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Bouton href={`tel:${infosSite.telephone.replace(/ /g, "")}`} externe variante="primaire">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Appeler maintenant
              </Bouton>
              <Bouton
                href={lienWhatsApp(messageWhatsAppDefaut)}
                externe
                variante="contour"
                className="!border-[#25D366] !text-[#128C4A] hover:!bg-[#25D366] hover:!text-white"
              >
                Écrire sur WhatsApp
              </Bouton>
            </AnimationApparition>
          </div>

          {/* Carte Google Maps */}
          <AnimationApparition direction="gauche">
            <div className="h-full min-h-[420px] overflow-hidden rounded-3xl shadow-xl shadow-charbon-950/10">
              <iframe
                src={infosSite.googleMapsEmbed}
                title={`Localisation de ${infosSite.nom} sur Google Maps`}
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimationApparition>
        </div>
      </section>
    </>
  );
}
