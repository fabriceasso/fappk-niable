'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ForestDivider from './ForestDivider';
import prefix from '../utils/prefix';

const heroSlides = [
  { src: `${prefix}/images/site_FAPPK_1.webp`, alt: 'Ferme FAPPK Niablé' },
  { src: `${prefix}/images/poulets_4.webp`, alt: 'Poulets fermiers' },
  { src: `${prefix}/images/lapins_4.webp`, alt: 'Élevage de lapins' },
  { src: `${prefix}/images/site_4.webp`, alt: 'Pisciculture' },
  { src: `${prefix}/images/porcs_6.webp`, alt: 'Élevage porcin' },
  { src: `${prefix}/images/escargots_0.png`, alt: 'Héliciculture' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState('');
  const videoRef = useRef(null);
  const fullText = 'Bienvenue à la Ferme Agropastorale Petit Kouassi (FAPPK) de Niablé';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative h-screen min-h-[600px] overflow-hidden bg-dark-green">
      {/* Carousel images - pleine opacité */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
            }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}

      {/* Overlay sombre pour contraste du texte */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Éléments décoratifs */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-accent rounded-full opacity-50"
          animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full opacity-40"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-accent rounded-full opacity-30"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          {/* Logo Hero avec dégradé jaune-vert */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute top-[-140px] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:top-0 lg:right-8 lg:left-auto pointer-events-none"
          >
            <div className="relative w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px]">
              <Image
                src={`${prefix}/images/logo_hero.png`}
                alt="FAPPK Logo Hero"
                width={350}
                height={350}
                className="w-full h-full object-contain"
                priority
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #228B22 100%)',
                  opacity: 0.35
                }}
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Titre avec effet machine à écrire */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)' }}
            >
              {typedText}
              <span className="animate-pulse text-accent">|</span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-10 max-w-2xl"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}
            >
              Découvrez notre ferme agropastorale dédiée à l&apos;élevage et à la vente de lapins, poulets, poissons et porcs. Nous nous engageons à fournir des produits de qualité supérieure.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#produits"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Nos Produits</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/40 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Nous Contacter</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicateurs de diapositive */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-accent' : 'w-3 bg-white/50 hover:bg-white/70'
              }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/60 text-xs tracking-widest uppercase rotate-90 origin-center mb-10" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Défiler</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      <ForestDivider color="#FFFFFF" opacity={1} />
    </section>
  );
}
