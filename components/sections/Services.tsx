import AnimationApparition from "@/components/ui/AnimationApparition";
import TitreSection from "@/components/ui/TitreSection";
import IconeService from "@/components/ui/IconeService";
import { services } from "@/config/site";

/**
 * Section « Nos services » : cartes modernes avec icônes.
 * Seuls les services marqués `actif: true` dans config/site.ts
 * sont affichés.
 */
export default function Services() {
  const servicesActifs = services.filter((service) => service.actif);

  return (
    <section className="bg-creme-fonce/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <TitreSection
          surtitre="Nos services"
          titre="Tout pour un séjour parfait"
          description="Des prestations pensées pour votre confort, du premier au dernier jour de votre séjour."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesActifs.map((service, index) => (
            <AnimationApparition key={service.id} delai={0.08 * index}>
              <div className="group h-full rounded-3xl bg-white p-8 shadow-sm shadow-charbon-950/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-charbon-950/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rubis-50 text-rubis-600 transition-colors duration-500 group-hover:bg-rubis-600 group-hover:text-creme">
                  <IconeService nom={service.icone} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-charbon-950">
                  {service.nom}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charbon-600">
                  {service.description}
                </p>
              </div>
            </AnimationApparition>
          ))}
        </div>
      </div>
    </section>
  );
}
