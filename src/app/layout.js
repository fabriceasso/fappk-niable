import './globals.css';

export const metadata = {
  title: 'FAPPK - Ferme Agropastorale Petit Kouassi de Niablé',
  description: 'Ferme agropastorale spécialisée dans l\'élevage de lapins, poulets, poissons, porcs, canards et escargots à Niablé. Produits fermiers frais de qualité supérieure, livraison à Abidjan et à l\'intérieur de la Côte d\'Ivoire.',
  keywords: 'ferme agropastorale, Niablé, Côte d\'Ivoire, lapins de chair, poulets fermiers, poissons frais, élevage de porcs, canards de lac, escargots gros calibre, cuniculture, héliciculture, pisciculture, aviculture, produits fermiers frais, livraison Abidjan, livraison interieur du pays, achat porc sur pied, tilapia frais Côte d\'Ivoire',
  openGraph: {
    title: 'FAPPK - Ferme Agropastorale Petit Kouassi de Niablé',
    description: 'Découvrez notre ferme agropastorale dédiée à l\'élevage de qualité. Traitement personnalisé, livraison à Abidjan et à l\'intérieur de la Côte d\'Ivoire.',
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
