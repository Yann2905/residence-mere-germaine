"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, CalendarCheck, Phone } from "lucide-react";
import Bouton from "@/components/ui/Bouton";
import { infosSite, imageHero } from "@/config/site";

/**
 * Section Hero immersive de la page d'accueil :
 * image plein écran, slogan animé, boutons d'action
 * et indicateur de défilement.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src={imageHero}
        alt={`Vue de ${infosSite.nom} à Daloa`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Voile sombre pour la lisibilité */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-charbon-950/70 via-charbon-950/45 to-charbon-950/80"
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-or-400"
        >
          {infosSite.ville} · {infosSite.pays}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl font-semibold leading-tight text-creme sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Résidences
          <span className="block text-or-400">Mère Germaine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-creme/90 md:text-xl"
        >
          {infosSite.slogan}
        </motion.p>

        {/* Devise officielle de l'établissement */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 font-serif text-base italic text-or-300 md:text-lg"
        >
          « {infosSite.devise} »
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Bouton href="/reservation" variante="primaire">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Réserver maintenant
          </Bouton>
          <Bouton href="/contact" variante="contour-clair">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Nous contacter
          </Bouton>
        </motion.div>
      </div>

      {/* Indicateur de défilement */}
      <motion.a
        href="#a-propos"
        aria-label="Faire défiler vers la section suivante"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-creme/80 transition-colors hover:text-or-400"
      >
        <span className="animate-defilement block">
          <ChevronDown className="h-8 w-8" aria-hidden="true" />
        </span>
      </motion.a>
    </section>
  );
}
