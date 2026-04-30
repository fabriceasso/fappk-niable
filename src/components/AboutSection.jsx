'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import ForestDivider from './ForestDivider';
import prefix from '../utils/prefix';

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
    title: 'Elevage Durable',
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
    title: 'Livraison sur demande',
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

const images = [
  { id: 1, src: `${prefix}/images/porcs_5.webp`, alt: "Porcs" },
  { id: 2, src: `${prefix}/images/poulets_4.webp`, alt: "Poulets fermiers" },
  { id: 3, src: `${prefix}/images/lapins_3.webp`, alt: "Lapins" },
  { id: 4, src: `${prefix}/images/poissons_4.webp`, alt: "Poissons" },
];

const positions = [
  { top: '0%', left: '0%', width: '55%', height: '60%', zIndex: 30 },
  { top: '10%', right: '0%', width: '40%', height: '45%', zIndex: 20 },
  { bottom: '0%', left: '5%', width: '45%', height: '35%', zIndex: 10 },
  { bottom: '5%', right: '5%', width: '45%', height: '40%', zIndex: 20 },
];

function ImageSwapper({ src, alt, positionIndex }) {
  const pos = positions[positionIndex];

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        top: pos.top,
        left: pos.left,
        right: pos.right,
        bottom: pos.bottom,
        width: pos.width,
        height: pos.height,
        zIndex: pos.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.5
      }}
      className="absolute rounded-2xl overflow-hidden shadow-lg border-2 border-white/50 bg-gray-200"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-110 transition-transform duration-700"
      />
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [order, setOrder] = useState([0, 1, 2, 3]);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isInView]);

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
          {/* Swapping Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px]"
          >
            <div className="relative w-full h-full">
              {images.map((img, i) => (
                <ImageSwapper
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  positionIndex={order[i]}
                />
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl z-40"
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
