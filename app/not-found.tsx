import Link from "next/link";
import { Home } from "lucide-react";

/**
 * Page 404 personnalisée.
 */
export default function PageNonTrouvee() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-charbon-950 px-4 text-center">
      <p className="font-serif text-8xl font-semibold text-or-400">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-creme">
        Cette page n'existe pas
      </h1>
      <p className="mt-3 max-w-md text-creme/70">
        La page que vous recherchez a peut-être été déplacée ou n'existe plus. Retrouvez le confort
        de notre accueil en revenant à la page principale.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-rubis-600 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:-translate-y-0.5 hover:bg-rubis-700"
      >
        <Home className="h-4 w-4" aria-hidden="true" />
        Retour à l'accueil
      </Link>
    </section>
  );
}
