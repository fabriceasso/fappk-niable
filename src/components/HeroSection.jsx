'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ForestDivider from './ForestDivider';

const heroSlides = [
  { src: '/images/site_FAPPK_1.webp', alt: 'Ferme FAPPK Niablé' },
  { src: '/images/poulets_0.webp', alt: 'Poulets fermiers' },
  { src: '/images/lapins_0.webp', alt: 'Élevage de lapins' },
  { src: '/images/poissons_0.webp', alt: 'Pisciculture' },
  { src: '/images/porcs_0.webp', alt: 'Élevage porcin' },
  { src: '/images/escargots_0.png', alt: 'Héliciculture' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [typedText, setTypedText] = useState('');
  const videoRef = useRef(null);
  const fullText = 'Bienvenue à la Ferme Agropastorale Petit Kouassi (FAPPK) de Niablé';

  // Typewriter effect
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

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="accueil" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/fappk-niable/images/site_FAPPK_1.webp"
          className="w-full h-full object-cover"
        >
          <source src="/fappk-niable/images/hero.webm" type="video/webm" />
          <source src="/fappk-niable/images/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay absolute inset-0" />
      </div>

      {/* Animated Background Slides (behind overlay, subtler) */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-20' : 'opacity-0'
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

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-accent rounded-full opacity-40"
          animate={{ y: [0, 30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-white rounded-full opacity-30"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-4 h-4 bg-accent rounded-full opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          {/* Logo Hero (Positioned top right of content, enlarged, faded) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute top-0 right-8 pointer-events-none hidden lg:block"
          >
            <Image
              src="/images/logo_hero.png"
              alt="FAPPK Logo Hero"
              width={350}
              height={350}
              priority
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium tracking-wide">
                🌿 Niablé, Côte d&apos;Ivoire
              </span>
            </motion.div>

            {/* Title with typewriter */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl"
            >
              {typedText}
              <span className="animate-pulse text-accent">|</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl"
            >
              Découvrez notre ferme agropastorale dédiée à l&apos;élevage et à la vente de lapins, poulets, poissons et porcs. Nous nous engageons à fournir des produits de qualité supérieure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#produits"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              >
                <span>Nos Produits</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Nous Contacter</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-accent' : 'w-3 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase rotate-90 origin-center mb-10">Défiler</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      {/* Forest Divider */}
      <ForestDivider color="#FFFFFF" opacity={1} />
    </section>
  );
}
