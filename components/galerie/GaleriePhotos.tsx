"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { imagesGalerie, categoriesGalerie, type CategorieGalerie } from "@/config/site";

type Filtre = CategorieGalerie | "toutes";

/**
 * Galerie photos interactive :
 * - filtres par catégorie ;
 * - grille animée ;
 * - visionneuse plein écran (lightbox) avec navigation clavier.
 * Les images se gèrent dans config/site.ts → `imagesGalerie`.
 */
export default function GaleriePhotos() {
  const [filtre, setFiltre] = useState<Filtre>("toutes");
  const [indexOuvert, setIndexOuvert] = useState<number | null>(null);

  const imagesFiltrees =
    filtre === "toutes" ? imagesGalerie : imagesGalerie.filter((img) => img.categorie === filtre);

  const fermer = useCallback(() => setIndexOuvert(null), []);

  const naviguer = useCallback(
    (sens: 1 | -1) => {
      setIndexOuvert((actuel) => {
        if (actuel === null) return null;
        return (actuel + sens + imagesFiltrees.length) % imagesFiltrees.length;
      });
    },
    [imagesFiltrees.length]
  );

  // Navigation au clavier dans la visionneuse
  useEffect(() => {
    if (indexOuvert === null) return;
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowRight") naviguer(1);
      if (e.key === "ArrowLeft") naviguer(-1);
    };
    window.addEventListener("keydown", surTouche);
    // Bloquer le défilement de la page derrière la visionneuse
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", surTouche);
      document.body.style.overflow = "";
    };
  }, [indexOuvert, fermer, naviguer]);

  return (
    <div>
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3" role="group" aria-label="Filtrer la galerie par catégorie">
        {categoriesGalerie.map((categorie) => (
          <button
            key={categorie.id}
            type="button"
            onClick={() => {
              setFiltre(categorie.id);
              setIndexOuvert(null);
            }}
            aria-pressed={filtre === categorie.id}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              filtre === categorie.id
                ? "bg-rubis-600 text-creme shadow-lg shadow-rubis-600/25"
                : "bg-white text-charbon-700 hover:bg-rubis-50 hover:text-rubis-700"
            }`}
          >
            {categorie.label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <motion.div layout className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {imagesFiltrees.map((image, index) => (
            <motion.button
              key={image.src}
              layout
              type="button"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIndexOuvert(index)}
              aria-label={`Agrandir : ${image.alt}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md shadow-charbon-950/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-charbon-950/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-sm font-medium text-creme">{image.alt}</span>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Visionneuse plein écran */}
      <AnimatePresence>
        {indexOuvert !== null && imagesFiltrees[indexOuvert] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charbon-950/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={imagesFiltrees[indexOuvert].alt}
            onClick={fermer}
          >
            {/* Bouton fermer */}
            <button
              type="button"
              onClick={fermer}
              aria-label="Fermer la visionneuse"
              className="absolute right-5 top-5 z-10 rounded-full bg-creme/10 p-3 text-creme transition-colors hover:bg-rubis-600"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Précédent */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                naviguer(-1);
              }}
              aria-label="Photo précédente"
              className="absolute left-3 z-10 rounded-full bg-creme/10 p-3 text-creme transition-colors hover:bg-rubis-600 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Image */}
            <motion.div
              key={imagesFiltrees[indexOuvert].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagesFiltrees[indexOuvert].src}
                alt={imagesFiltrees[indexOuvert].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
              <p className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-charbon-950/80 px-5 py-2 text-center text-sm text-creme">
                {imagesFiltrees[indexOuvert].alt} — {indexOuvert + 1} / {imagesFiltrees.length}
              </p>
            </motion.div>

            {/* Suivant */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                naviguer(1);
              }}
              aria-label="Photo suivante"
              className="absolute right-3 z-10 rounded-full bg-creme/10 p-3 text-creme transition-colors hover:bg-rubis-600 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
