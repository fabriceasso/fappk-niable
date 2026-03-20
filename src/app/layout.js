import './globals.css';

export const metadata = {
  title: 'FAPPK - Ferme Agropastorale Petit Kouassi de Niablé',
  description: 'Ferme agropastorale spécialisée dans l\'élevage et la vente de lapins, poulets, poissons, porcs, canards et escargots à Niablé, Côte d\'Ivoire. Abonnements produits frais, livraison Abidjan.',
  keywords: 'ferme agropastorale, Niablé, Côte d\'Ivoire, lapins, poulets, poissons, porcs, canards, escargots, élevage, abonnement viande fraîche, livraison Abidjan',
  openGraph: {
    title: 'FAPPK - Ferme Agropastorale Petit Kouassi de Niablé',
    description: 'Découvrez notre ferme agropastorale dédiée à l\'élevage de qualité. Abonnements mensuels, livraison gratuite.',
    type: 'website',
    locale: 'fr_CI',
    siteName: 'FAPPK',
    images: ['/fappk-niable/images/site_FAPPK_1.webp'],
  },
  robots: 'index, follow',
  authors: [{ name: 'Ferme Agropastorale Petit Kouassi de Niablé' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/fappk-niable/images/logo_FAPPK.jpeg" />
        <meta name="theme-color" content="#228B22" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
