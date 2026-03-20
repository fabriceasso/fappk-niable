'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Produits', href: '#produits' },
  { label: 'Activités', href: '#activites' },
  { label: 'Contacts', href: '#contacts' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary transition-all">
              <Image src="/images/logo_FAPPK.jpeg" alt="FAPPK Logo" fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-lg leading-tight block ${scrolled ? 'text-primary' : 'text-white'} transition-colors`}>
                FAPPK
              </span>
              <span className={`text-[10px] tracking-wider uppercase ${scrolled ? 'text-gray-500' : 'text-white/70'} transition-colors`}>
                Niablé
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10 ${
                    scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className={`flex flex-col items-end gap-0.5 border-l pl-6 transition-colors ${scrolled ? 'border-gray-200' : 'border-white/20'}`}>
              <a 
                href="tel:+2250707664011" 
                className={`text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 07 66 40 11
              </a>
              <a 
                href="mailto:komessou@yahoo.fr" 
                className={`text-xs font-medium hover:text-accent transition-colors ${scrolled ? 'text-gray-500' : 'text-white/70'}`}
              >
                komessou@yahoo.fr
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-3 text-gray-700 font-medium rounded-xl hover:bg-primary/5 hover:text-primary transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-6 border-t border-gray-100 px-4">
                <a 
                  href="tel:+2250707664011" 
                  className="flex items-center gap-4 text-primary font-bold mb-4"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>07 07 66 40 11</span>
                </a>
                <a 
                  href="mailto:komessou@yahoo.fr" 
                  className="flex items-center gap-4 text-gray-600 font-medium"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>komessou@yahoo.fr</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
