# Les Résidences Mère Germaine — Site vitrine

Site web officiel des **Résidences Mère Germaine** (Daloa, Côte d'Ivoire) : résidence hôtelière haut de gamme.

Construit avec **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** et **Lucide React**.

---

## 🚀 Démarrage rapide

```bash
# Installer les dépendances (une seule fois)
npm install

# Lancer le site en mode développement
npm run dev
# ➜ http://localhost:3000

# Construire la version de production
npm run build
npm run start
```

---

## ✏️ Modifier le contenu du site (le plus important !)

**Tout le contenu se modifie dans un seul fichier : [`config/site.ts`](config/site.ts)**

| Ce que vous voulez changer | Où le faire |
|---|---|
| Téléphone, WhatsApp, e-mail, adresse | `config/site.ts` → `infosSite` |
| Textes « À propos », mission, valeurs | `config/site.ts` → `aPropos` |
| Statistiques animées (chambres, clients…) | `config/site.ts` → `statistiques` |
| Chambres (noms, prix, équipements, photos) | `config/site.ts` → `chambres` |
| Services (activer/désactiver piscine, restaurant…) | `config/site.ts` → `services` (champ `actif`) |
| Témoignages clients | `config/site.ts` → `temoignages` |
| Photos de la galerie et leurs catégories | `config/site.ts` → `imagesGalerie` |
| Réseaux sociaux | `config/site.ts` → `infosSite.reseauxSociaux` |
| Carte Google Maps | `config/site.ts` → `infosSite.googleMapsEmbed` |

> ✅ Les coordonnées officielles (téléphone `07 10 61 56 56`, e-mail, adresse, page Facebook)
> sont déjà renseignées depuis la page Facebook de l'établissement.
>
> ⚠️ **Avant la mise en ligne**, il reste à remplacer dans `infosSite` :
> l'**URL du site** (une fois le nom de domaine acheté) et le **lien Google Maps**
> (Google Maps → rechercher l'établissement → Partager → Intégrer une carte).
> Vérifiez aussi que le numéro WhatsApp est bien celui utilisé pour recevoir les réservations.

---

## 🖼️ Gérer les images

Les **vraies photos de la résidence** sont en place dans [`public/images/`](public/images/) :

```
public/images/
├── logo.png                       ← Logo officiel (aussi dans app/icon.png pour le favicon)
├── residence/
│   ├── piscine-crepuscule.jpg     ← Photo du Hero (page d'accueil)
│   ├── facade-crepuscule.jpg      ← Section « À propos » + partage réseaux sociaux
│   ├── facade.jpg
│   └── piscine-jour.jpg
├── chambres/
│   ├── standard-1.jpg / standard-2.jpg
│   ├── confort-1.jpg
│   ├── suite-1.jpg / suite-2.jpg
│   └── salle-de-bain-1.jpg / salle-de-bain-2.jpg
├── espaces/
│   ├── salon.jpg
│   ├── piscine-paillotes.jpg
│   └── piscine-vue-aerienne.jpg
└── restaurant/
    ├── salle.jpg / cocktail.jpg
    └── plat-1.jpg … plat-5.jpg
```

Pour **ajouter ou changer une photo** : déposez le fichier dans le bon dossier,
puis mettez à jour le chemin correspondant dans `config/site.ts`
(sections `chambres`, `imagesGalerie`, `imageHero`, `aPropos.image`).

Conseil : privilégiez des photos d'environ **1200 px de large**, en `.jpg` ou `.webp` compressé.

---

## 🎨 Couleurs de la marque

La palette est **extraite du logo officiel** et se règle dans
[`app/globals.css`](app/globals.css) (bloc `@theme`) :

- `--color-rubis-*` : rouge carmin du logo (boutons, accents) ;
- `--color-charbon-*` : noir du logo (textes, fonds sombres) ;
- `--color-or-*` : doré premium (étoiles, détails) ;
- `--color-creme` : fond clair du site.

Tout le site se met à jour automatiquement si vous modifiez ces valeurs.

---

## 📁 Structure du projet

```
app/                    Pages du site (App Router)
│   layout.tsx          Structure globale + SEO + polices
│   page.tsx            Page d'accueil
│   chambres/           Page « Nos chambres »
│   galerie/            Page « Galerie »
│   contact/            Page « Contact »
│   reservation/        Page « Réservation »
│   sitemap.ts          sitemap.xml automatique
│   robots.ts           robots.txt automatique
components/
│   accueil/            Hero, À propos, Statistiques
│   chambres/           Carte de chambre
│   galerie/            Galerie interactive (filtres + plein écran)
│   layout/             En-tête, pied de page, bouton WhatsApp
│   reservation/        Formulaire de réservation
│   sections/           Services, Pourquoi nous, Témoignages, CTA
│   seo/                Données structurées Schema.org
│   ui/                 Boutons, titres, animations réutilisables
config/
│   site.ts             ⭐ TOUT LE CONTENU MODIFIABLE
lib/
│   utils.ts            Fonctions utilitaires (prix, WhatsApp…)
public/images/          Toutes les images du site
```

---

## 📬 Fonctionnement des réservations

Le formulaire de réservation ne nécessite **aucun serveur ni base de données** :

- **WhatsApp** (recommandé) : ouvre une conversation préremplie avec le numéro configuré ;
- **E-mail** : ouvre la messagerie du client avec la demande prérédigée.

Le bouton WhatsApp flottant (en bas à droite) utilise le même numéro.

---

## 🔍 SEO inclus

- Metadata Next.js + Open Graph + Twitter Cards sur chaque page ;
- `sitemap.xml` et `robots.txt` générés automatiquement ;
- Données structurées **Schema.org** (`Hotel`, `LodgingBusiness`, `LocalBusiness`) avec chambres, tarifs et note moyenne ;
- Mots-clés locaux : « Résidence à Daloa », « Hôtel à Daloa », « Hébergement à Daloa »…

Après la mise en ligne : déclarez le site sur [Google Search Console](https://search.google.com/search-console) et créez une fiche [Google Business Profile](https://business.google.com) pour le référencement local.

---

## 🌐 Mise en ligne

Le plus simple : [Vercel](https://vercel.com) (gratuit pour ce type de site).

1. Poussez le projet sur GitHub ;
2. Importez-le sur Vercel ;
3. Ajoutez votre nom de domaine (ex. `residencesmeregermaine.ci`) ;
4. Mettez à jour `infosSite.url` dans `config/site.ts`.
