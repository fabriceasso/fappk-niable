'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import ForestDivider from './ForestDivider';
import prefix from '../utils/prefix';

const testimonials = [
  {
    name: 'La Marmite de Kpongbassou',
    role: 'Restauratrice, Yamoussoukro',
    content: 'Nous nous approvisionnons régulièrement auprès de la Ferme Agropastorale Petit Kouassi pour nos besoins en lapins et poulets. La qualité de la viande est exceptionnelle et nos clients en redemandent. Un partenaire de confiance que nous recommandons vivement !',
    rating: 5,
    image: `${prefix}/images/temoignages/PDG_Kpongbassou.jpg`
  },
  {
    name: 'Aka Francis',
    role: 'Chef cusinier, Abidjan',
    content: 'J\'ai souscrit au plan mixte pour ma famille et je suis ravi du service. Les produits sont toujours frais et livrés à temps. C\'est un vrai bonheur de pouvoir manger des produits sains et locaux en toute simplicité.',
    rating: 5,
    image: `${prefix}/images/temoignages/Aka_Francis.jpg`
  },
  {
    name: 'Akoubla Abla',
    role: 'Menagere, Abengourou',
    content: 'Je me ravitaille regulierement à la Ferme FAPPK en produits frais . Les enfants aimant beaucoup le poulets. Je suis tres satisfaite de la qualité des produits et du service de livraison.',
    rating: 5,
    image: `${prefix}/images/temoignages/Akouba_Abla.jpg`
  }
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-dark-green overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 3.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/15 text-white/90 text-sm font-semibold rounded-full mb-4 backdrop-blur-sm border border-white/20">
            ⭐ Témoignages
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ils nous ont fait <span className="text-accent">confiance</span>
          </h2>
          <div className="w-20 h-1 bg-accent/60 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[400px] md:min-h-[350px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: i === current ? 1 : 0,
                  x: i === current ? 0 : i < current ? -100 : 100,
                  zIndex: i === current ? 10 : 0
                }}
                transition={{ duration: 3.5, ease: "anticipate" }}
                className={`${i === current ? 'relative' : 'absolute inset-0 pointer-events-none'} w-full`}
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/15 shadow-2xl">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-white font-heading leading-relaxed mb-10 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-inner bg-white/5">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl">{t.name}</h4>
                      <p className="text-accent font-medium text-sm tracking-wide uppercase">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${i === current ? 'w-10 bg-accent h-2' : 'w-2 bg-white/30 h-2 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <ForestDivider color="#FFFFFF" opacity={0.3} />
    </section>
  );
}
