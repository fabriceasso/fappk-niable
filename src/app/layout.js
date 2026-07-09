import './globals.css';
import Script from 'next/script';
import { PHONE, EMAIL, SITE_URL } from '../config/constants';

const siteUrl = SITE_URL;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ferme Agropastorale Petit Kouassi de Niablé',
  alternateName: 'FAPPK',
  description: 'Ferme agropastorale spécialisée dans l\'élevage de lapins, poulets, poissons, porcs, canards et escargots à Niablé. Produits fermiers frais de qualité supérieure.',
  url: siteUrl,
  telephone: `+${PHONE}`,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Niablé',
    addressCountry: 'CI',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.673054,
    longitude: -3.279161,
  },
  image: '/images/site_FAPPK_1.webp',
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Produits de la ferme',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Poulets fermiers',
          description: 'Poulets élevés en plein air, de 2kg minimum',
          image: '/images/poulets_6.webp',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Lapins de chair',
          description: 'Lapins nourris avec des aliments naturels, nettoyage et recettes inclus',
          image: '/images/lapins_4.webp',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Poissons frais',
          description: 'Poissons issus de pisciculture durable, livraison sous glace',
          image: '/images/poissons_5.webp',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Porcs',
          description: 'Élevage porcin avec alimentation saine, découpé et emballé',
          image: '/images/porcs_5.webp',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Canards de lac',
          description: 'Canards élevés dans nos lacs, qualité supérieure',
          image: '/images/canards_0.png',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Escargots gros calibre',
          description: 'Escargots élevés en milieu contrôlé, nettoyés et prêts à cuire',
          image: '/images/escargots_1.webp',
        },
      },
    ],
  },
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ferme Agropastorale Niablé — Lapins, Poulets, Poissons, Porcs | FAPPK',
  description: 'Ferme agropastorale spécialisée dans l\'élevage de lapins, poulets, poissons, porcs, canards et escargots à Niablé, Côte d\'Ivoire. Produits fermiers frais, livraison à Abidjan.',
  keywords: 'ferme agropastorale, Niablé, Côte d\'Ivoire, lapins de chair, poulets fermiers, poissons frais, élevage de porcs, canards de lac, escargots gros calibre, cuniculture, héliciculture, pisciculture, aviculture, produits fermiers frais, livraison Abidjan, livraison interieur du pays, achat porc sur pied, tilapia frais Côte d\'Ivoire',
  openGraph: {
    title: 'Ferme Agropastorale Niablé — Lapins, Poulets, Poissons, Porcs | FAPPK',
    description: 'Découvrez notre ferme agropastorale dédiée à l\'élevage de qualité. Traitement personnalisé, livraison à Abidjan et à l\'intérieur de la Côte d\'Ivoire.',
    url: siteUrl,
    type: 'website',
    locale: 'fr_CI',
    siteName: 'FAPPK',
    images: [
      {
        url: '/images/site_FAPPK_1.webp',
        width: 1200,
        height: 630,
        alt: 'Ferme Agropastorale Petit Kouassi de Niablé',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: 'index, follow',
  authors: [{ name: 'Ferme Agropastorale Petit Kouassi de Niablé' }],
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo_FAPPK.jpeg" />
        <meta name="theme-color" content="#228B22" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JZ0XNGJ0N0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZ0XNGJ0N0');
          `}
        </Script>
      </body>
    </html>
  );
}
