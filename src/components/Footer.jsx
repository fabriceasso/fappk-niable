'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Produits', href: '#produits' },
  { label: 'Activités', href: '#activites' },
  { label: 'Contacts', href: '#contacts' },
];

const products = ['Poulets', 'Lapins', 'Poissons', 'Porcs', 'Canards', 'Escargots'];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="relative bg-dark-green text-white overflow-hidden" ref={ref}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/40">
                <Image src="/images/logo_FAPPK.jpeg" alt="FAPPK Logo" fill className="object-cover" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white block">FAPPK</span>
                <span className="text-xs text-white/50">Niablé, Côte d&apos;Ivoire</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Ferme Agropastorale Petit Kouassi de Niablé — Élevage et vente de produits frais de qualité supérieure.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/2250707664011"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </a>
              <a
                href="tel:+2250707664011"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-primary transition-all"
                aria-label="Téléphone"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Navigation</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-3 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Nos Produits</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#produits"
                    className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full group-hover:w-3 transition-all" />
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-lg mb-5 text-white">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/60">Niablé, Côte d&apos;Ivoire</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2250707664011" className="text-white/60 hover:text-accent transition-colors">
                  +225 07 07 66 40 11
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                <a href="https://wa.me/2250707664011" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#produits"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-light transition-all"
            >
              <span>Souscrire</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} FAPPK — Ferme Agropastorale Petit Kouassi de Niablé. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs text-white/30">
            <span>🇨🇮 Niablé, Côte d&apos;Ivoire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
