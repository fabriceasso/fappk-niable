'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import ForestDivider from './ForestDivider';

const activities = [
  {
    id: 'aviculture',
    title: 'Aviculture',
    description: 'Notre pôle avicole est dédié à l\'élevage de poulets et de canards dans le respect des normes sanitaires et environnementales. Nous veillons à la santé de nos volailles pour vous offrir une viande de qualité.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4m0 0l-2-1m2 1l2-1M6 10h12M7 10v10a1 1 0 001 1h8a1 1 0 001-1V10M9 21v-4m6 4v-4" />
      </svg>
    ),
    color: 'bg-primary/10',
    accent: 'text-primary'
  },
  {
    id: 'cuniculture',
    title: 'Cuniculture',
    description: 'Spécialistes de l\'élevage de lapins, nous mettons un point d\'honneur à offrir un cadre de vie sain et une alimentation naturelle à nos animaux. Notre expertise nous permet de produire une viande de lapin tendre et savoureuse.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10c0-3.314 2.686-6 6-6s6 2.686 6 6v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4z M7 4L5 2m10 2l2-2" />
      </svg>
    ),
    color: 'bg-primary/10',
    accent: 'text-primary'
  },
  {
    id: 'pisciculture',
    title: 'Pisciculture',
    description: 'Grâce à nos bassins aménagés, nous développons une activité piscicole dynamique. Nous produisons différentes espèces de poissons, nourries avec soin pour garantir une croissance saine et une excellente qualité gustative.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7zm-3-2l-4 4m0-4l4 4" />
      </svg>
    ),
    color: 'bg-primary/10',
    accent: 'text-primary'
  },
  {
    id: 'porciculture',
    title: 'Porciculture',
    description: 'Notre élevage de porcs est géré avec rigueur, en mettant l\'accent sur l\'hygiène et le bien-être animal. Nous fournissons une viande de porc de premier choix, répondant aux attentes des consommateurs les plus exigeants.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-primary/10',
    accent: 'text-primary'
  },
  {
    id: 'heliciculture',
    title: 'Héliciculture',
    description: 'Élevage d\'escargots de qualité supérieure. Nous maîtrisons tout le cycle de production pour garantir un produit sain et savoureux.',
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z M12 14v7 M7 12l-5 5 M17 12l5 5" />
      </svg>
    ),
    color: 'bg-primary/10',
    accent: 'text-primary'
  }
];

export default function ActivitiesSection() {
  const [activeTab, setActiveTab] = useState(activities[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="activites" className="py-20 md:py-28 bg-white relative overflow-hidden" ref={ref}>
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              🚜 Nos Activités
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
              Une Agriculture <span className="gradient-text">Durable & Moderne</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Découvrez nos pôles d&apos;expertise et comment nous transformons l&apos;agriculture locale avec passion et savoir-faire.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {activities.map((activity) => (
              <button
                key={activity.id}
                onClick={() => setActiveTab(activity.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === activity.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {activity.title}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content Display */}
        <div className="bg-cream rounded-[2.5rem] overflow-hidden shadow-xl border border-primary/5">
          <AnimatePresence mode="wait">
            {activities.map((activity) => activity.id === activeTab && (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-12 lg:p-16"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 rounded-2xl ${activity.color} flex items-center justify-center p-5 shadow-inner`}>
                        <div className={`w-full h-full ${activity.accent}`}>
                          {activity.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-dark mb-2">{activity.title}</h3>
                        <div className="w-12 h-1 bg-accent rounded-full" />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed font-medium italic border-l-4 border-primary/20 pl-6">
                      &quot;{activity.description}&quot;
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary/5">
                        <div className={`text-xl font-bold ${activity.accent} mb-2`}>Expertise</div>
                        <p className="text-sm text-gray-600">Savoir-faire artisanal combiné aux techniques modernes.</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary/5">
                        <div className={`text-xl font-bold ${activity.accent} mb-2`}>Qualité</div>
                        <p className="text-sm text-gray-600">Contrôle rigoureux à chaque étape de production.</p>
                      </div>
                    </div>
                    
                    <a
                      href="#contacts"
                      className={`inline-flex items-center gap-3 px-8 py-4 bg-dark text-white font-bold rounded-full hover:bg-primary transition-all duration-300 shadow-lg`}
                    >
                      En savoir plus
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                  
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl group">
                    <Image
                      src={`/images/${activity.id === 'aviculture' ? 'poulets_0.webp' : activity.id === 'cuniculture' ? 'lapins_0.webp' : activity.id === 'pisciculture' ? 'poissons_0.webp' : activity.id === 'porciculture' ? 'porcs_0.webp' : 'escargots_0.png'}`}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-white">
                        <div className="text-xs uppercase tracking-widest font-bold text-accent mb-1">Production</div>
                        <div className="text-xl font-bold">100% Naturel & Bio</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <ForestDivider color="#8B4513" />
    </section>
  );
}
