import { infosSite, chambres, temoignages } from "@/config/site";

/**
 * Données structurées Schema.org (JSON-LD) pour le référencement local :
 * Hotel + LodgingBusiness + LocalBusiness, avec les chambres en offres.
 * Injectées une seule fois dans le layout racine.
 */
export default function DonneesStructurees() {
  const noteMoyenne =
    temoignages.reduce((somme, t) => somme + t.note, 0) / Math.max(temoignages.length, 1);

  const donnees = {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
    name: infosSite.nom,
    description: infosSite.description,
    slogan: infosSite.slogan,
    url: infosSite.url,
    telephone: infosSite.telephone,
    email: infosSite.email,
    image: `${infosSite.url}/images/residence/facade-crepuscule.jpg`,
    logo: `${infosSite.url}/images/logo.png`,
    priceRange: "22500-150000 XOF",
    currenciesAccepted: "XOF",
    checkinTime: "12:00",
    checkoutTime: "11:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: infosSite.adresse,
      addressLocality: infosSite.ville,
      addressRegion: infosSite.region,
      addressCountry: "CI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: infosSite.latitude,
      longitude: infosSite.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: noteMoyenne.toFixed(1),
      reviewCount: temoignages.length,
      bestRating: 5,
    },
    makesOffer: chambres.map((chambre) => ({
      "@type": "Offer",
      name: chambre.nom,
      description: chambre.description,
      price: chambre.prix,
      priceCurrency: "XOF",
      itemOffered: {
        "@type": "HotelRoom",
        name: chambre.nom,
        occupancy: {
          "@type": "QuantitativeValue",
          maxValue: chambre.capacite,
        },
      },
    })),
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Piscine Nubela Beach", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurant Nubela Lounge", value: true },
      { "@type": "LocationFeatureSpecification", name: "Jacuzzi privé", value: true },
      { "@type": "LocationFeatureSpecification", name: "Wi-Fi gratuit", value: true },
      { "@type": "LocationFeatureSpecification", name: "Climatisation", value: true },
      { "@type": "LocationFeatureSpecification", name: "Parking sécurisé", value: true },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }}
    />
  );
}
