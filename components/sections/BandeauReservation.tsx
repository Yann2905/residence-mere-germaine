import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import AnimationApparition from "@/components/ui/AnimationApparition";
import Bouton from "@/components/ui/Bouton";
import { infosSite, imageHero } from "@/config/site";

/**
 * Bandeau d'appel à l'action « Réservez votre séjour »,
 * affiché en bas de plusieurs pages.
 */
export default function BandeauReservation() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Image
        src={imageHero}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-charbon-950/80" aria-hidden="true" />

      <AnimationApparition className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold leading-tight text-creme md:text-4xl lg:text-5xl">
          Prêt à vivre l'expérience
          <span className="block text-or-400">Mère Germaine ?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-creme/85 md:text-lg">
          Réservez dès aujourd'hui et laissez-nous prendre soin de vous au cœur de Daloa.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Bouton href="/reservation" variante="or">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Réserver maintenant
          </Bouton>
          <Bouton href={`tel:${infosSite.telephone.replace(/ /g, "")}`} variante="contour-clair" externe>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {infosSite.telephoneAffiche}
          </Bouton>
        </div>
      </AnimationApparition>
    </section>
  );
}
