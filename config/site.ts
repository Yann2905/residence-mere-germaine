/**
 * ============================================================
 *  CONFIGURATION CENTRALE DU SITE
 *  Les Résidences Mère Germaine — Daloa, Côte d'Ivoire
 * ============================================================
 *
 *  👉 TOUT le contenu modifiable du site se trouve ici :
 *     coordonnées, textes, chambres, services, témoignages,
 *     statistiques, images de la galerie…
 *
 *  Pour mettre à jour le site, modifiez simplement ce fichier.
 *  Les images se trouvent dans /public/images — remplacez-les
 *  en conservant les mêmes noms de fichiers (ou changez les
 *  chemins ci-dessous).
 * ============================================================
 */

// ------------------------------------------------------------
// 1. INFORMATIONS GÉNÉRALES & COORDONNÉES
// ------------------------------------------------------------
export const infosSite = {
  nom: "Les Résidences Mère Germaine",
  nomCourt: "Résidences Mère Germaine",
  slogan: "Votre confort et votre tranquillité au cœur de Daloa.",
  devise: "Le choix d'être comme chez vous", // Devise officielle de l'établissement
  description:
    "Résidence hôtelière haut de gamme à Daloa : chambres climatisées, piscine, restaurant, Wi-Fi gratuit, parking sécurisé et accueil chaleureux. Réservez votre séjour au cœur du Haut-Sassandra, en Côte d'Ivoire.",

  // Coordonnées officielles (page Facebook de l'établissement)
  adresse: "Rue de l'Auberge, Tagoura",
  ville: "Daloa",
  region: "Haut-Sassandra",
  pays: "Côte d'Ivoire",

  telephone: "+225 07 10 61 56 56",
  telephoneAffiche: "07 10 61 56 56", // Format affiché sur le site
  whatsapp: "2250710615656", // Numéro WhatsApp SANS le « + » ni espaces
  email: "lesresidencesmg@hotmail.com",

  // URL publique du site (pour le SEO). À remplacer par le vrai domaine.
  url: "https://www.residencesmeregermaine.ci",

  // Lien d'intégration Google Maps (iframe).
  // Pour l'obtenir : Google Maps → rechercher l'établissement →
  // « Partager » → « Intégrer une carte » → copier l'URL du src.
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.5!2d-6.4502!3d6.8770!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInMzcuMiJOIDbCsDI3JzAwLjciVw!5e0!3m2!1sfr!2sci!4v1700000000000",

  // Coordonnées GPS (pour le SEO local / Schema.org)
  latitude: 6.877,
  longitude: -6.4502,

  // Réseaux sociaux — laissez la valeur vide ("") pour masquer un réseau
  reseauxSociaux: {
    facebook: "https://www.facebook.com/LesResidencesMereGermaineDaloa/", // Page officielle
    instagram: "",
    tiktok: "",
  },

  // Horaires de la réception
  horaires: "Réception ouverte 24h/24, 7j/7",
};

// ------------------------------------------------------------
// 2. SECTION « À PROPOS »
// ------------------------------------------------------------
export const aPropos = {
  titre: "Une hospitalité authentique au cœur du Haut-Sassandra",
  histoire:
    "Nées de l'amour de l'hospitalité et du sens de l'accueil légendaire de la région de Daloa, Les Résidences Mère Germaine offrent à leurs hôtes un havre de paix alliant confort moderne et chaleur africaine. Chaque détail a été pensé pour que vous vous sentiez chez vous, que vous soyez de passage pour affaires ou en séjour prolongé.",
  mission:
    "Offrir à chaque client un séjour paisible, confortable et sécurisé, dans un cadre élégant et accueillant, au meilleur rapport qualité-prix de la région.",
  valeurs: [
    { titre: "Hospitalité", texte: "Un accueil chaleureux et personnalisé, fidèle à la tradition ivoirienne." },
    { titre: "Confort", texte: "Des chambres soignées, climatisées et équipées pour votre bien-être." },
    { titre: "Sécurité", texte: "Un site clôturé, surveillé et un parking sécurisé 24h/24." },
    { titre: "Excellence", texte: "Une exigence de qualité dans chaque détail de votre séjour." },
  ],
  image: "/images/residence/facade-crepuscule.jpg", // Façade au coucher du soleil
};

// ------------------------------------------------------------
// 3. STATISTIQUES ANIMÉES
// ------------------------------------------------------------
export const statistiques = [
  { valeur: 20, suffixe: "+", label: "Chambres & suites" },
  { valeur: 10, suffixe: "+", label: "Années d'expérience" },
  { valeur: 2000, suffixe: "+", label: "Clients satisfaits" },
  { valeur: 8, suffixe: "", label: "Services proposés" },
];

// ------------------------------------------------------------
// 4. LES CHAMBRES
// ------------------------------------------------------------
export type Chambre = {
  id: string;
  nom: string;
  description: string;
  prix: number; // Prix par nuit en FCFA
  image: string;
  images: string[]; // Photos supplémentaires
  capacite: number; // Nombre de personnes
  equipements: string[];
  populaire?: boolean; // Affiche un badge « Populaire »
};

export const chambres: Chambre[] = [
  {
    id: "standard",
    nom: "Chambre Standard",
    description:
      "Une chambre confortable et lumineuse, idéale pour les voyageurs de passage. Tout le nécessaire pour un séjour agréable à petit prix.",
    prix: 15000,
    image: "/images/chambres/standard-1.jpg",
    images: [
      "/images/chambres/standard-1.jpg",
      "/images/chambres/standard-2.jpg",
      "/images/chambres/salle-de-bain-1.jpg",
    ],
    capacite: 2,
    equipements: ["Lit double", "Climatisation", "Wi-Fi gratuit", "Télévision", "Salle de bain privée"],
  },
  {
    id: "confort",
    nom: "Chambre Confort",
    description:
      "Plus spacieuse et raffinée, la chambre Confort offre un cadre élégant avec un coin salon pour travailler ou vous détendre.",
    prix: 25000,
    image: "/images/chambres/confort-1.jpg",
    images: ["/images/chambres/confort-1.jpg", "/images/chambres/salle-de-bain-2.jpg"],
    capacite: 2,
    equipements: [
      "Grand lit",
      "Climatisation",
      "Wi-Fi gratuit",
      "Télévision écran plat",
      "Coin salon",
      "Réfrigérateur",
      "Salle de bain moderne",
    ],
    populaire: true,
  },
  {
    id: "suite",
    nom: "Suite",
    description:
      "Notre offre la plus prestigieuse : un espace généreux avec salon séparé, pour un séjour d'exception en famille ou en voyage d'affaires.",
    prix: 40000,
    image: "/images/chambres/suite-1.jpg",
    images: ["/images/chambres/suite-1.jpg", "/images/chambres/suite-2.jpg"],
    capacite: 4,
    equipements: [
      "Lit king size",
      "Salon séparé",
      "Climatisation",
      "Wi-Fi haut débit",
      "Télévision écran plat",
      "Réfrigérateur & minibar",
      "Bureau de travail",
      "Salle de bain premium",
    ],
  },
];

// ------------------------------------------------------------
// 5. LES SERVICES
//    ➜ Mettez `actif: false` pour masquer un service du site.
// ------------------------------------------------------------
export type Service = {
  id: string;
  nom: string;
  description: string;
  icone: string; // Nom d'icône Lucide (voir components/ui/IconeService.tsx)
  actif: boolean;
};

export const services: Service[] = [
  {
    id: "wifi",
    nom: "Wi-Fi gratuit",
    description: "Connexion internet haut débit gratuite dans toutes les chambres et les espaces communs.",
    icone: "wifi",
    actif: true,
  },
  {
    id: "climatisation",
    nom: "Climatisation",
    description: "Toutes nos chambres sont climatisées pour un confort optimal en toute saison.",
    icone: "climatisation",
    actif: true,
  },
  {
    id: "parking",
    nom: "Parking sécurisé",
    description: "Parking privé, clôturé et surveillé 24h/24 pour votre véhicule.",
    icone: "parking",
    actif: true,
  },
  {
    id: "service-chambre",
    nom: "Service de chambre",
    description: "Ménage quotidien et service en chambre attentionné tout au long de votre séjour.",
    icone: "service-chambre",
    actif: true,
  },
  {
    id: "reception",
    nom: "Réception 24h/24",
    description: "Notre équipe vous accueille et reste à votre écoute à toute heure du jour et de la nuit.",
    icone: "reception",
    actif: true,
  },
  {
    id: "restaurant",
    nom: "Restaurant & bar",
    description:
      "Savourez nos spécialités ivoiriennes et nos cocktails au bord de la piscine : poulet braisé, poisson grillé, alloco…",
    icone: "restaurant",
    actif: true,
  },
  {
    id: "piscine",
    nom: "Piscine & paillotes",
    description:
      "Détendez-vous au bord de notre grande piscine, entre transats et paillotes, dans un cadre à la déco africaine unique.",
    icone: "piscine",
    actif: true,
  },
  {
    id: "salle-conference",
    nom: "Salle de conférence",
    description: "Un espace équipé pour vos réunions, séminaires et événements professionnels.",
    icone: "salle-conference",
    actif: false, // ← Passez à true si la résidence dispose d'une salle
  },
];

// ------------------------------------------------------------
// 6. « POURQUOI NOUS CHOISIR ? »
// ------------------------------------------------------------
export const pourquoiNous = [
  {
    titre: "Confort absolu",
    texte: "Des chambres spacieuses, climatisées et impeccablement entretenues pour un repos parfait.",
    icone: "confort",
  },
  {
    titre: "Sécurité garantie",
    texte: "Site clôturé, surveillance permanente et parking sécurisé : dormez sur vos deux oreilles.",
    icone: "securite",
  },
  {
    titre: "Calme & sérénité",
    texte: "Un environnement paisible, loin de l'agitation, pour vous ressourcer pleinement.",
    icone: "calme",
  },
  {
    titre: "Service de qualité",
    texte: "Une équipe professionnelle et disponible, attentive au moindre de vos besoins.",
    icone: "qualite",
  },
  {
    titre: "Accueil chaleureux",
    texte: "L'hospitalité ivoirienne dans toute sa splendeur, du premier sourire au dernier au revoir.",
    icone: "accueil",
  },
  {
    titre: "Emplacement idéal",
    texte: "Au cœur de Daloa, à proximité des commerces, administrations et axes principaux.",
    icone: "emplacement",
  },
];

// ------------------------------------------------------------
// 7. TÉMOIGNAGES CLIENTS
//    ➜ `photo` est optionnelle : laissez "" pour afficher les initiales.
// ------------------------------------------------------------
export type Temoignage = {
  nom: string;
  commentaire: string;
  note: number; // Note sur 5
  photo?: string;
  provenance?: string; // Ville ou pays d'origine (optionnel)
};

export const temoignages: Temoignage[] = [
  {
    nom: "Kouassi N'Guessan",
    commentaire:
      "Un séjour parfait ! Les chambres sont propres, le personnel est aux petits soins et le quartier est très calme. Je recommande vivement.",
    note: 5,
    provenance: "Abidjan",
  },
  {
    nom: "Mariam Coulibaly",
    commentaire:
      "J'ai séjourné une semaine pour le travail. Wi-Fi impeccable, climatisation efficace et un accueil vraiment chaleureux. J'y retournerai sans hésiter.",
    note: 5,
    provenance: "Bouaké",
  },
  {
    nom: "Jean-Marc Dubois",
    commentaire:
      "Une très belle découverte à Daloa. Le confort d'un grand hôtel avec la convivialité d'une maison de famille. Excellent rapport qualité-prix.",
    note: 4,
    provenance: "France",
  },
  {
    nom: "Awa Traoré",
    commentaire:
      "Le parking sécurisé et la tranquillité des lieux m'ont totalement rassurée. Le service de chambre est irréprochable.",
    note: 5,
    provenance: "Daloa",
  },
];

// ------------------------------------------------------------
// 8. GALERIE PHOTOS
//    Catégories possibles : "chambres" | "espaces-communs" | "services" | "residence"
// ------------------------------------------------------------
export type CategorieGalerie = "chambres" | "espaces-communs" | "services" | "residence";

export type ImageGalerie = {
  src: string;
  alt: string;
  categorie: CategorieGalerie;
};

export const categoriesGalerie: { id: CategorieGalerie | "toutes"; label: string }[] = [
  { id: "toutes", label: "Toutes" },
  { id: "chambres", label: "Chambres" },
  { id: "espaces-communs", label: "Espaces communs" },
  { id: "services", label: "Services" },
  { id: "residence", label: "Résidence" },
];

export const imagesGalerie: ImageGalerie[] = [
  // Chambres
  { src: "/images/chambres/standard-1.jpg", alt: "Chambre Standard — lit double et climatisation", categorie: "chambres" },
  { src: "/images/chambres/standard-2.jpg", alt: "Chambre Standard — ambiance chaleureuse", categorie: "chambres" },
  { src: "/images/chambres/confort-1.jpg", alt: "Chambre Confort — grand espace et télévision", categorie: "chambres" },
  { src: "/images/chambres/suite-1.jpg", alt: "Suite — chambre spacieuse avec coin salon", categorie: "chambres" },
  { src: "/images/chambres/suite-2.jpg", alt: "Suite — salon séparé avec canapés en cuir", categorie: "chambres" },
  { src: "/images/chambres/salle-de-bain-1.jpg", alt: "Salle de bain moderne avec douche à l'italienne", categorie: "chambres" },
  { src: "/images/chambres/salle-de-bain-2.jpg", alt: "Salle de bain contemporaine", categorie: "chambres" },
  // Espaces communs
  { src: "/images/espaces/salon.jpg", alt: "Grand salon commun de la résidence", categorie: "espaces-communs" },
  { src: "/images/espaces/piscine-paillotes.jpg", alt: "Piscine et paillotes africaines", categorie: "espaces-communs" },
  { src: "/images/espaces/piscine-vue-aerienne.jpg", alt: "Vue aérienne de l'espace piscine", categorie: "espaces-communs" },
  // Services
  { src: "/images/restaurant/salle.jpg", alt: "Notre restaurant-bar à la décoration africaine", categorie: "services" },
  { src: "/images/restaurant/cocktail.jpg", alt: "Cocktail servi par notre équipe", categorie: "services" },
  { src: "/images/restaurant/plat-1.jpg", alt: "Spécialité du restaurant — poulet sauce oignons", categorie: "services" },
  { src: "/images/restaurant/plat-2.jpg", alt: "Alloco et œufs — cuisine ivoirienne", categorie: "services" },
  { src: "/images/restaurant/plat-3.jpg", alt: "Poulet braisé du restaurant", categorie: "services" },
  { src: "/images/restaurant/plat-4.jpg", alt: "Poisson braisé au feu de bois", categorie: "services" },
  // Résidence
  { src: "/images/residence/facade.jpg", alt: "Façade de la résidence en journée", categorie: "residence" },
  { src: "/images/residence/facade-crepuscule.jpg", alt: "La résidence au coucher du soleil", categorie: "residence" },
  { src: "/images/residence/piscine-crepuscule.jpg", alt: "La piscine au crépuscule", categorie: "residence" },
  { src: "/images/residence/piscine-jour.jpg", alt: "L'espace piscine et son bar", categorie: "residence" },
];

// ------------------------------------------------------------
// 9. IMAGE DU HERO (page d'accueil)
// ------------------------------------------------------------
export const imageHero = "/images/residence/piscine-crepuscule.jpg";
