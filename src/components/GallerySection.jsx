'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import ForestDivider from './ForestDivider';
import prefix from '../utils/prefix';

const galleryImages = [
  {
    src: `${prefix}/images/escargot.webp`,
    title: "Héliciculture",
    comment: "La délicatesse de nos escargots, un produit d'exception très prisé."
  },
  {
    src: `${prefix}/images/lapins_3.webp`,
    title: "Cuniculture de Qualité",
    comment: "Des lapins élevés dans des conditions optimales d'hygiène et de bien-être."
  },
  {
    src: `${prefix}/images/oeufs.webp`,
    title: "Production d'Œufs",
    comment: "Des œufs frais du jour, récoltés avec soin pour nos clients."
  },
  {
    src: `${prefix}/images/poissons_3.webp`,
    title: "Pisciculture Dynamique",
    comment: "Nos bassins de Tilapia et de Clarias, nourris avec soin pour une croissance saine."
  },
  {
    src: `${prefix}/images/poissons_5.webp`,
    title: "Poissons Frais",
    comment: "Une production piscicole maîtrisée pour des poissons de haute qualité."
  },
  {
    src: `${prefix}/images/pintades.webp`,
    title: "Élevage de Pintades",
    comment: "Une volaille rustique appréciée pour sa chair savoureuse."
  },
  {
    src: `${prefix}/images/canards_0.png`,
    title: "Nos Canards",
    comment: "Élevés avec soin dans un environnement naturel et aquatique."
  },
  {
    src: `${prefix}/images/porcs_4.webp`,
    title: "Élevage Porcin",
    comment: "Une rigueur sanitaire absolue pour garantir une viande de premier choix."
  },
  {
    src: `${prefix}/images/porcs_6.webp`,
    title: "Porcherie Moderne",
    comment: "Des porcs élevés dans des enclos modernes et bien entretenus."
  },
  {
    src: `${prefix}/images/poulets_4.webp`,
    title: "Nos Poulets Fermiers",
    comment: "Élevés en plein air avec une alimentation 100% naturelle pour une saveur authentique."
  },
  {
    src: `${prefix}/images/poulets_5.webp`,
    title: "Poulailler FAPPK",
    comment: "Des volailles saines, avec un suivi vétérinaire rigoureux."
  },
  {
    src: `${prefix}/images/site_2.webp`,
    title: "Infrastructures Modernes",
    comment: "Nous investissons continuellement dans des équipements modernes pour améliorer notre productivité."
  },
  {
    src: `${prefix}/images/site_3.webp`,
    title: "Nos Espaces Verts",
    comment: "Un domaine agropastoral intégré et respectueux de l'écosystème."
  },
  {
    src: `${prefix}/images/site_FAPPK_1.webp`,
    title: "Vue d'ensemble de la ferme",
    comment: "Notre site principal à Niablé, un cadre verdoyant et propice à l'élevage durable."
  },
  {
    src: `${prefix}/images/site_FAPPK_2.webp`,
    title: "Installations Agropastorales",
    comment: "Des bâtiments adaptés et un environnement serein pour le bien-être animal."
  },
  {
    src: `${prefix}/images/site_4.webp`,
    title: "La Nature au Cœur de FAPPK",
    comment: "Un écosystème préservé pour une agriculture saine et durable."
  }
];


export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            📸 Notre Galerie
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-6">
            La Vie à la <span className="gradient-text">Ferme en Images</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Plongez au cœur de notre quotidien et découvrez la passion qui anime chaque membre de la Ferme Agropastorale Petit Kouassi.
          </p>
          <div className="section-divider mx-auto mt-8" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg bg-white border border-primary/5"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              />
              
              {/* Overlay on hover */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 cursor-pointer pointer-events-none"
              >
                <motion.h4 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="text-white font-bold text-xl mb-2"
                >
                  {item.title}
                </motion.h4>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-200 text-sm leading-relaxed"
                >
                  {item.comment}
                </motion.p>
              </div>

              {/* Static label (mobile) */}
              <div className="absolute bottom-4 left-4 right-4 sm:hidden pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm">
                  <p className="text-dark font-bold text-sm truncate">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-pointer"
            >
              <div className="relative max-w-6xl w-full h-[85vh] flex flex-col items-center justify-center">
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 md:right-0 text-white hover:text-accent z-50 bg-black/50 rounded-full p-2 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(null);
                  }}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Prev Button */}
                <button 
                  className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 text-white hover:text-accent z-50 bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all"
                  onClick={handlePrev}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button 
                  className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 text-white hover:text-accent z-50 bg-black/50 hover:bg-black/80 rounded-full p-3 transition-all"
                  onClick={handleNext}
                >
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="relative w-full h-[70vh]">
                  <Image
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">{galleryImages[selectedIndex].title}</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto px-12">{galleryImages[selectedIndex].comment}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
          >
            Vous souhaitez visiter la ferme ? Contactez-nous
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
      <ForestDivider color="#8B4513" />
    </section>
  );
}
