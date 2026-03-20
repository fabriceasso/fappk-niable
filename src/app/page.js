'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SmoothScroll from '@/components/SmoothScroll';
import Loader from '@/components/Loader';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <SmoothScroll>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ActivitiesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SmoothScroll>
  );
}
