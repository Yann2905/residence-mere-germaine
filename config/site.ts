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
    "Le petit paradis de Daloa : 7 appartements meublés (studio, 2 pièces, 3 pièces), piscine Nubela Beach, restaurant-lounge panoramique Nubela Lounge, jacuzzi privé, Wi-Fi et parking sécurisé. Réservez votre séjour au cœur du Haut-Sassandra.",

  // Coordonnées officielles (pages Facebook et TikTok de l'établissement)
  adresse: "Rue de l'Auberge, Tagoura",
  acces:
    "Entre Tagoura et Gueya, dernier carrefour avant le corridor de Vavoua, à 200 m du goudron.",
  ville: "Daloa",
  region: "Haut-Sassandra",
  pays: "Côte d'Ivoire",

  telephone: "+225 07 10 61 56 56", // Ligne d'appel principale
  telephoneAffiche: "07 10 61 56 56", // Format affiché sur le site
  whatsapp: "2250504192000", // WhatsApp officiel : 05 04 19 20 00 (sans « + » ni espaces)
  whatsappAffiche: "05 04 19 20 00",
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
  titre: "Le petit paradis de Daloa",
  histoire:
    "Nichées entre Tagoura et Gueya, Les Résidences Mère Germaine (LRMG) sont un havre de paix alliant confort moderne et chaleur africaine : 7 appartements meublés avec balcon, la piscine Nubela Beach avec ses paillotes, et le Nubela Lounge, notre restaurant panoramique au 4e étage. Que vous soyez de passage pour affaires, en famille ou en séjour prolongé, chaque détail a été pensé pour que vous vous sentiez chez vous.",
  mission:
    "Vous permettre de vous détendre et de vous amuser : un séjour paisible, confortable et sécurisé, dans un cadre élégant, au meilleur rapport qualité-prix de la région.",
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
  { valeur: 7, suffixe: "", label: "Appartements meublés" },
  { valeur: 3, suffixe: "", label: "Types d'aménagement" },
  { valeur: 2000, suffixe: "+", label: "Clients satisfaits" },
  { valeur: 9, suffixe: "", label: "Services proposés" },
];

// ------------------------------------------------------------
// 4. LES APPARTEMENTS MEUBLÉS
//    7 appartements en 3 types d'aménagement, tous avec balcon,
//    accès à la piscine Nubela Beach et service de chambre.
//    (Tarifs officiels publiés par l'établissement.)
// ------------------------------------------------------------
export type Chambre = {
  id: string;
  nom: string;
  sousTitre: string;
  description: string;
  prix: number; // Prix par nuitée du lundi au jeudi (« Happy Discount »), en FCFA
  prixWeekend: number; // Prix par nuitée le week-end
  forfait3Nuits: number; // Forfait 3 nuits (vendredi, samedi, dimanche)
  image: string;
  images: string[]; // Photos supplémentaires
  capacite: number; // Nombre de personnes
  equipements: string[];
  populaire?: boolean; // Affiche un badge « Populaire »
};

export const chambres: Chambre[] = [
  {
    id: "studio",
    nom: "Appartement 1 Pièce",
    sousTitre: "Studio avec balcon",
    description:
      "Un studio meublé, confortable et lumineux avec balcon privé. Idéal pour une personne seule ou un couple, en court ou long séjour.",
    prix: 22500,
    prixWeekend: 30000,
    forfait3Nuits: 80000,
    image: "/images/chambres/standard-1.jpg",
    images: [
      "/images/chambres/standard-1.jpg",
      "/images/chambres/standard-2.jpg",
      "/images/chambres/salle-de-bain-1.jpg",
    ],
    capacite: 2,
    equipements: [
      "Balcon privé",
      "Climatisation",
      "Wi-Fi gratuit",
      "Télévision",
      "Accès piscine Nubela Beach",
      "Service de chambre",
    ],
  },
  {
    id: "deux-pieces",
    nom: "Appartement 2 Pièces",
    sousTitre: "Chambre + salon avec balcon",
    description:
      "Un appartement meublé avec chambre et salon séparés, parfait pour allier travail et détente dans un cadre spacieux et élégant.",
    prix: 30000,
    prixWeekend: 35000,
    forfait3Nuits: 95000,
    image: "/images/chambres/confort-1.jpg",
    images: [
      "/images/chambres/confort-1.jpg",
      "/images/chambres/suite-2.jpg",
      "/images/chambres/salle-de-bain-2.jpg",
    ],
    capacite: 3,
    equipements: [
      "Salon séparé",
      "Balcon privé",
      "Climatisation",
      "Wi-Fi gratuit",
      "Télévision écran plat",
      "Accès piscine Nubela Beach",
      "Service de chambre",
    ],
    populaire: true,
  },
  {
    id: "trois-pieces",
    nom: "Appartement 3 Pièces",
    sousTitre: "2 chambres + salon avec balcon",
    description:
      "Notre plus grand appartement : deux chambres et un salon, l'idéal pour les familles ou les groupes qui veulent séjourner comme à la maison.",
    prix: 45000,
    prixWeekend: 50000,
    forfait3Nuits: 150000,
    image: "/images/chambres/suite-1.jpg",
    images: ["/images/chambres/suite-1.jpg", "/images/chambres/suite-2.jpg"],
    capacite: 5,
    equipements: [
      "2 chambres",
      "Grand salon",
      "Balcon privé",
      "Climatisation",
      "Wi-Fi gratuit",
      "Télévision écran plat",
      "Accès piscine Nubela Beach",
      "Service de chambre",
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
    nom: "Nubela Lounge — Restaurant",
    description:
      "Au 4e étage avec vue panoramique sur la nature : spécialités africaines et européennes de notre chef, cocktails et boissons de qualité.",
    icone: "restaurant",
    actif: true,
  },
  {
    id: "piscine",
    nom: "Piscine Nubela Beach",
    description:
      "Grande piscine avec paillotes et maître-nageur. Droit de nage : 5 000 F (adultes et enfants), piscine de nuit à 3 000 F, cours de natation.",
    icone: "piscine",
    actif: true,
  },
  {
    id: "jacuzzi",
    nom: "Jacuzzi privé",
    description:
      "Offrez-vous un moment de détente absolue dans notre jacuzzi privé, pour couronner votre séjour au petit paradis de Daloa.",
    icone: "jacuzzi",
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
