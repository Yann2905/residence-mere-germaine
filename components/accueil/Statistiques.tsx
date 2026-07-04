"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { statistiques } from "@/config/site";

/**
 * Compteur animé : la valeur monte de 0 jusqu'à la cible
 * lorsque le bloc devient visible à l'écran.
 */
function Compteur({ valeur, suffixe }: { valeur: number; suffixe: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: "-60px" });
  const reduireAnimations = useReducedMotion();
  const [affiche, setAffiche] = useState(0);

  useEffect(() => {
    if (!visible) return;
    if (reduireAnimations) {
      setAffiche(valeur);
      return;
    }
    const duree = 1800; // ms
    const debut = performance.now();
    let idAnimation: number;

    const etape = (maintenant: number) => {
      const progression = Math.min((maintenant - debut) / duree, 1);
      // Décélération douce (ease-out cubique)
      const facteur = 1 - Math.pow(1 - progression, 3);
      setAffiche(Math.round(valeur * facteur));
      if (progression < 1) idAnimation = requestAnimationFrame(etape);
    };
    idAnimation = requestAnimationFrame(etape);
    return () => cancelAnimationFrame(idAnimation);
  }, [visible, valeur, reduireAnimations]);

  return (
    <span ref={ref}>
      {affiche.toLocaleString("fr-FR")}
      {suffixe}
    </span>
  );
}

/**
 * Bandeau de statistiques animées (chambres, années, clients…).
 * Les valeurs se modifient dans config/site.ts → `statistiques`.
 */
export default function Statistiques() {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {statistiques.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-serif text-4xl font-semibold text-or-400 md:text-5xl">
            <Compteur valeur={stat.valeur} suffixe={stat.suffixe} />
          </p>
          <p className="mt-2 text-sm uppercase tracking-wider text-creme/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
