// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/src/components/Header';
import { Hero } from '@/src/components/Hero';
import { Portfolio } from '@/src/components/Portfolio';
import { PricingPlans } from '@/src/components/PricingPlans';
import { Services } from '@/src/components/Services';
import { FocusAreas } from '@/src/components/FocusAreas';
import { Testimonials } from '@/src/components/Testimonials';
import { CTA } from '@/src/components/CTA';
import { Footer } from '@/src/components/Footer';

export default function Home() {
  const [mode, setMode] = useState<'design' | 'code'>('design');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      // duration-1000 (1 saniye) ekleyerek arka plan geçişini çok yumuşattık
      <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${
        mode === 'design' 
          ? 'bg-slate-950' // Sabit koyu tema, sadece nüanslar değişecek
          : 'bg-slate-950'
      }`}>
        <Header mode={mode} onToggle={setMode} isScrolled={isScrolled} />
        
        <main>
          <Hero mode={mode} />
          <Portfolio mode={mode} />
          <PricingPlans mode={mode} />
          <Services mode={mode} />
          <FocusAreas mode={mode} />
          <Testimonials mode={mode} />
          <CTA mode={mode} />
        </main>
        
        <Footer mode={mode} />
      </div>
    );
}