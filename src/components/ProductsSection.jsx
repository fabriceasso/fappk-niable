'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import ForestDivider from './ForestDivider';
import prefix from '../utils/prefix';

const products = [
  {
    id: 'poulets',
    title: 'Poulets',
    description: 'Nous proposons des poulets élevés en plein air, offrant une viande riche en saveurs. Nos méthodes d\'élevage respectueuses de l\'environnement assurent la qualité supérieure de nos volailles.',
    price: '20 000',
    image: `${prefix}/images/poulets_0.webp`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L9 4l-3 4-2 6v6h16v-6l-2-6-3-4-3-2zM9 22H7m10 0h-2m-8-2h12M4 14l3-2m13 2l-3-2M8 8V6m8 2V6" />
      </svg>
    ),
    plan: 'Plan Volailles',
    planDesc: '8 poulets par mois, livraison gratuite à domicile. Poulets de 2kg minimum.',
    features: [
      '8 poulets par mois',
      'Livraison gratuite',
      'Poulets de 2kg min'
    ],
    color: 'from-primary to-primary-dark',
    bgColor: 'bg-primary/10',
    accent: 'text-primary',
  },
  {
    id: 'canards',
    title: 'Canards',
    description: 'Nous proposons aussi ces canards élevés dans nos lacs, offrant une viande riche en saveurs. Nos méthodes d\'élevage assurent la qualité supérieure de nos volailles.',
    price: '20 000',
    image: `${prefix}/images/canards_0.png`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18M5 12a7 7 0 0114 0M7 12V9a2 2 0 114 0v3m2 0V9a2 2 0 114 0v3" />
      </svg>
    ),
    plan: 'Plan Canards',
    planDesc: '5 canards par mois, livraison incluse. Idéal pour rôtis et confits.',
    features: [
      '5 canards par mois',
      'Livraison incluse',
      'Qualité supérieure'
    ],
    color: 'from-primary to-primary-dark',
    bgColor: 'bg-primary/10',
    accent: 'text-primary',
  },
  {
    id: 'lapins',
    title: 'Lapins',
    description: 'Notre ferme se spécialise dans l\'élevage de lapins, garantissant des animaux en bonne santé et élevés dans des conditions optimales. Nos lapins sont nourris avec des aliments naturels.',
    price: '15 000',
    image: `${prefix}/images/lapins_0.webp`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v2m-4-7V5a2 2 0 114 0v4m0 0V5a2 2 0 114 0v4m-8 5a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
    plan: 'Plan Lapins',
    planDesc: '4 lapins par mois, nettoyage inclus. Recettes exclusives offertes.',
    features: [
      '4 lapins par mois',
      'Nettoyage inclus',
      'Recettes offertes'
    ],
    color: 'from-amber-600 to-amber-800',
    bgColor: 'bg-primary/10',
    accent: 'text-primary',
  },
  {
    id: 'poissons',
    title: 'Poissons',
    description: 'Nous proposons une variété de poissons issus de notre propre élevage piscicole. Nos bassins sont gérés de manière durable pour garantir la fraîcheur.',
    price: '25 000',
    image: `${prefix}/images/poissons_0.webp`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7zm-3-2l-4 4m0-4l4 4" />
      </svg>
    ),
    plan: 'Plan Poissons',
    planDesc: '15kg de Tilapia ou Carpe, livraison sous glace. Possibilité de poissons vivants.',
    features: [
      '15kg de Tilapia/Carpe',
      'Livraison sous glace',
      'Fraîcheur garantie'
    ],
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-primary/10',
    accent: 'text-primary',
  },
  {
    id: 'porcs',
    title: 'Porcs',
    description: 'Notre élevage de porcs est conduit avec le plus grand soin, en privilégiant une alimentation saine et un environnement propre.',
    price: '35 000',
    image: `${prefix}/images/porcs_0.webp`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    plan: 'Plan Porcs',
    planDesc: '10kg de viande de porc, choix des morceaux privilégié. Découpé et emballé.',
    features: [
      '10kg de viande',
      'Choix des morceaux',
      'Prêt à cuisiner'
    ],
    color: 'from-secondary to-secondary-light',
    bgColor: 'bg-primary/10',
    accent: 'text-primary',
  },
  {
    id: 'escargots',
    title: 'Escargots',
    description: 'Nous élevons des escargots dans un milieu contrôlé garantissant un goût unique et une chair tendre.',
    price: '35 000',
    image: `${prefix}/images/escargots_0.png`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z M12 14v7 M7 12l-5 5 M17 12l5 5" />
      </svg>
    ),
    plan: 'Plan Escargots',
    planDesc: '10kg d\'escargots gros calibre, nettoyés et prêts à cuire.',
    features: [
      '10kg d\'escargots',
      'Gros calibre',
      'Prêt à cuire'
    ],
    color: 'from-emerald-600 to-emerald-800',
    bgColor: 'bg-primary/10',
    accent: 'text-primary',
  }
];

const mixPlan = {
  title: 'Plan Mixte',
  description: 'Le meilleur de notre ferme dans un seul pack. Profitez d\'une sélection variée de nos meilleurs produits chaque mois.',
  price: '30 000',
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
  ),
  features: [
    '5 lapins + 5 poulets par mois',
    'Remise fidélité de 10%',
    'Inclus option poisson à prix réduit',
    'Réductions sur achats en gros'
  ]
};

function ProductCard({ product, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [showPlan, setShowPlan] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 card-glow border border-gray-100 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:saturate-[1.2]"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-dark shadow-sm flex items-center gap-2">
              <span className={product.accent}>{product.icon}</span>
              {product.title}
            </span>
          </div>
          {product.price && (
            <div className="absolute bottom-4 right-4 focus-visible:scale-105 transition-transform">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {product.price} FCFA<span className="text-xs font-normal opacity-80">/mois</span>
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="mt-auto">
            {product.plan && (
              <>
                <button
                  onClick={() => setShowPlan(!showPlan)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl ${product.bgColor} transition-all duration-300 group/btn border border-transparent hover:border-current`}
                >
                  <span className={`font-bold text-sm ${product.accent}`}>
                    {product.plan}
                  </span>
                  <svg
                    className={`w-4 h-4 ${product.accent} transition-transform duration-300 ${showPlan ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`accordion-content ${showPlan ? 'open' : ''}`}>
                  <div className="pt-4 pb-2">
                    <p className="text-sm text-gray-500 mb-4 italic leading-relaxed">{product.planDesc}</p>
                    <ul className="space-y-2.5">
                      {product.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                          <div className={`w-5 h-5 rounded-full ${product.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className={`w-3 h-3 ${product.accent}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/2250708313132?text=Bonjour, je suis intéressé(e) par le ${product.plan} (${product.price} FCFA/mois). Merci de me donner plus d'informations.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-lg group/cta shadow-md"
                >
                  <span>Souscrire via WhatsApp</span>
                  <svg className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="produits" className="relative py-20 md:py-28 bg-cream overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            🛒 Nos Produits
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
            Produits <span className="gradient-text">Frais & Naturels</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            À la Ferme Agropastorale Petit Kouassi de Niablé, nous sommes spécialisés dans l&apos;élevage et la vente de divers animaux. Découvrez notre gamme de produits incluant des lapins, poulets, poissons et porcs, élevés dans des conditions optimales pour garantir la meilleure qualité.
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 text-sm mt-3">
            Que vous soyez un consommateur à la recherche de produits frais ou un revendeur, notre ferme répond à vos besoins avec professionnalisme et passion.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mix Plan - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-br from-primary via-primary-dark to-dark-green rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full mb-6 text-sm text-white/90">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    ⭐ Le Plus Populaire
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                    {mixPlan.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {mixPlan.description}
                  </p>
                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-5xl md:text-6xl font-bold text-accent font-heading">{mixPlan.price}</span>
                    <span className="text-white/60 text-lg mb-2">FCFA/mois</span>
                  </div>
                  <a
                    href={`https://wa.me/2250708313132?text=Bonjour, je suis intéressé(e) par le Plan Mixte (30 000 FCFA/mois). Merci de me donner plus d'informations.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-dark font-bold rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <span>Souscrire Maintenant</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                <div>
                  <ul className="space-y-4">
                    {mixPlan.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90">{f}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Schematic icons decoration */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                    {products.map((p, i) => (
                      <motion.span
                        key={i}
                        className="text-white/40 hover:text-accent transition-all cursor-default"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        title={p.title}
                      >
                        <div className="w-8 h-8">
                          {p.icon}
                        </div>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ForestDivider color="#228B22" />
    </section>
  );
}
