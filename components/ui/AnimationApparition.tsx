"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Délai avant l'animation, en secondes */
  delai?: number;
  /** Direction d'apparition */
  direction?: "haut" | "bas" | "gauche" | "droite" | "aucune";
  className?: string;
};

/**
 * Enveloppe ses enfants d'une animation d'apparition discrète
 * déclenchée lorsque l'élément entre dans le viewport.
 * Respecte la préférence « réduire les animations » du visiteur.
 */
export default function AnimationApparition({
  children,
  delai = 0,
  direction = "haut",
  className,
}: Props) {
  const reduireAnimations = useReducedMotion();

  const decalages = {
    haut: { y: 32, x: 0 },
    bas: { y: -32, x: 0 },
    gauche: { x: 32, y: 0 },
    droite: { x: -32, y: 0 },
    aucune: { x: 0, y: 0 },
  } as const;

  const depart = reduireAnimations ? { opacity: 0 } : { opacity: 0, ...decalages[direction] };

  return (
    <motion.div
      className={className}
      initial={depart}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: delai, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
