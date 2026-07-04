import Link from "next/link";
import type { ReactNode } from "react";

type Variante = "primaire" | "or" | "contour" | "contour-clair";

type Props = {
  children: ReactNode;
  /** Si `href` est fourni, rend un lien ; sinon un <button>. */
  href?: string;
  type?: "button" | "submit";
  variante?: Variante;
  className?: string;
  /** Lien externe (WhatsApp, tel:, mailto:…) */
  externe?: boolean;
  onClick?: () => void;
};

const styles: Record<Variante, string> = {
  primaire:
    "bg-rubis-600 text-creme hover:bg-rubis-700 shadow-lg shadow-rubis-600/25 hover:shadow-rubis-700/30",
  or: "bg-or-500 text-charbon-950 hover:bg-or-400 shadow-lg shadow-or-500/25",
  contour:
    "border-2 border-rubis-600 text-rubis-700 hover:bg-rubis-600 hover:text-creme",
  "contour-clair":
    "border-2 border-creme/70 text-creme hover:bg-creme hover:text-charbon-950 backdrop-blur-sm",
};

/**
 * Bouton / lien stylisé réutilisable avec effet de survol élégant.
 */
export default function Bouton({
  children,
  href,
  type = "button",
  variante = "primaire",
  className = "",
  externe = false,
  onClick,
}: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles[variante]} ${className}`;

  if (href) {
    if (externe) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
