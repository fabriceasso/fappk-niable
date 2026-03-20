'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import ForestDivider from './ForestDivider';

const iconsPath = {
  plant: "M12 21a9.003 9.003 0 008.313-5.547 M12 21a9.003 9.003 0 01-8.313-5.547 M12 3V2 M12 21V12 M12 12l0-9 M8 7.5L12 12l4-4.5 M4 11.5L12 12l8-0.5",
  award: "M9 12l2 2 4-4M7.835 4.697a.75.75 0 001.034 1.034 1.25 1.25 0 011.83 1.83.75.75 0 101.034 1.034 1.25 1.25 0 011.83-1.83 1.25 1.25 0 011.83 1.83.75.75 0 101.034-1.034 1.25 1.25 0 01-1.83-1.83 1.25 1.25 0 01-1.83-1.83.75.75 0 00-1.034 1.034 1.25 1.25 0 01-1.83 1.83z",
  truck: "M8.25 18.75a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zm11.25 0a1.5 1.5 0 01-3 0 1.5 1.5 0 013 0zM15.75 6.75h3.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75H15.75a.75.75 0 01-.75-.75V7.5a.75.75 0 01.75-.75zM15 15h3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75zM3.75 8.25h11.25a.75.75 0 01.75.75v8.25a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V9a.75.75 0 01.75-.75z",
  heart: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
};

const features = [
  { 
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconsPath.plant} />
      </svg>
    ), 
    title: 'Agriculture Durable', 
    desc: 'Pratiques respectueuses de l\'environnement' 
  },
  { 
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconsPath.award} />
      </svg>
    ), 
    title: 'Qualité Supérieure', 
    desc: 'Produits frais et naturels garantis' 
  },
  { 
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconsPath.truck} />
      </svg>
    ), 
    title: 'Livraison Gratuite', 
    desc: 'Directement à votre domicile' 
  },
  { 
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconsPath.heart} />
      </svg>
    ), 
    title: 'Bien-être Animal', 
    desc: 'Élevage en plein air, sans OGM' 
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden leaf-pattern" ref={ref}>
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            À Propos de Nous
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
            Notre <span className="gradient-text">Engagement</span>
          </h2>
          <div className="section-divider mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden img-grayscale">
                  <Image src="/images/site_FAPPK_1.webp" alt="Ferme FAPPK" fill className="object-cover" />
                </div>
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden img-grayscale">
                  <Image src="/images/poulets_1.webp" alt="Poulets fermiers" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden img-grayscale">
                  <Image src="/images/lapins_1.webp" alt="Lapins" fill className="object-cover" />
                </div>
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden img-grayscale">
                  <Image src="/images/site_FAPPK_2.webp" alt="Site de la ferme" fill className="object-cover" />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-3xl font-bold font-heading">100%</div>
              <div className="text-sm opacity-90">Naturel</div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
              Située à Niablé, la Ferme Agropastorale Petit Kouassi est un acteur clé dans le domaine de l&apos;élevage et de la production animale. Spécialisée dans l&apos;élevage et la vente de lapins, poulets, poissons et porcs, notre ferme s&apos;engage à fournir des produits de haute qualité tout en adoptant des pratiques durables et respectueuses de l&apos;environnement.
            </p>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-10">
              Grâce à notre expertise et à notre passion pour l&apos;élevage, nous avons su nous établir comme une référence dans notre région.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 rounded-xl bg-cream hover:bg-primary/10 transition-all duration-300 group inline-flex flex-col items-start"
                >
                  <div className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-sm text-dark mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <ForestDivider color="#8B4513" />
    </section>
  );
}
