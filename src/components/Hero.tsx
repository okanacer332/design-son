// src/components/Hero.tsx

"use client";

import { useState } from 'react';
import { TransitionWrapper } from '@/src/components/TransitionWrapper';
import { useLanguage } from '@/src/lib/i18n/LanguageContext';
import { ContactModal } from '@/src/components/ContactModal';

interface HeroProps {
  mode: 'design' | 'code';
}

export function Hero({ mode }: HeroProps) {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Açma Fonksiyonu
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Portfolyo Bölümüne Kaydırma (Secondary Buton İçin)
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen flex flex-col overflow-hidden transition-colors duration-1000 ease-in-out ${
      mode === 'design' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900' 
        : 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900'
    }`}>
      {/* Spacer for sticky header */}
      <div className="h-24"></div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-16 relative z-10">
        <div className="max-w-7xl w-full">
          
          <TransitionWrapper modeKey={mode}>
            {mode === 'design' ? (
              // --- DESIGN MODE CONTENT ---
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-500/30 rounded-full text-purple-200 text-xs sm:text-sm backdrop-blur-md">
                    {t.hero.designTag}
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent leading-tight font-medium tracking-tight">
                    {t.hero.designTitle[0]}
                    <br />
                    {t.hero.designTitle[1]}
                    <br />
                    {t.hero.designTitle[2]}
                  </h1>
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-purple-200/80 max-w-2xl leading-relaxed">
                  {t.hero.designDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <button 
                    onClick={handleOpenModal}
                    className="cursor-pointer px-8 py-4 bg-white text-purple-950 rounded-full hover:bg-purple-50 transition-all font-medium shadow-lg hover:shadow-purple-500/20 shadow-purple-500/10 w-full sm:w-auto"
                  >
                    {t.hero.designBtnPrimary}
                  </button>
                  <button 
                    onClick={scrollToPortfolio}
                    className="cursor-pointer px-8 py-4 bg-transparent text-white rounded-full hover:bg-white/5 transition-colors border border-white/10 w-full sm:w-auto"
                  >
                    {t.hero.designBtnSecondary}
                  </button>
                </div>
              </div>
            ) : (
              // --- CODE MODE CONTENT ---
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-200 text-sm backdrop-blur-md">
                    {t.hero.codeTag}
                  </div>
                  <h1 className="text-7xl md:text-8xl lg:text-9xl bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent font-medium tracking-tight">
                    {t.hero.codeTitle[0]}
                    <br />
                    {t.hero.codeTitle[1]}
                    <br />
                    {t.hero.codeTitle[2]}
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-blue-200/80 max-w-2xl leading-relaxed">
                  {t.hero.codeDesc}
                </p>
                <div className="flex gap-4 flex-wrap pt-4">
                  <button 
                    onClick={handleOpenModal}
                    className="cursor-pointer px-8 py-4 bg-white text-blue-950 rounded-full hover:bg-blue-50 transition-all font-medium shadow-lg hover:shadow-blue-500/20 shadow-blue-500/10"
                  >
                    {t.hero.codeBtnPrimary}
                  </button>
                  <button 
                    onClick={scrollToPortfolio}
                    className="cursor-pointer px-8 py-4 bg-transparent text-white rounded-full hover:bg-white/5 transition-colors border border-white/10"
                  >
                    {t.hero.codeBtnSecondary}
                  </button>
                </div>
              </div>
            )}
          </TransitionWrapper>

        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000 ${
          mode === 'design' ? 'bg-purple-600/20' : 'bg-blue-600/20'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000 ${
          mode === 'design' ? 'bg-fuchsia-600/20' : 'bg-cyan-600/20'
        }`}></div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen}
        initialPlan="Genel Başvuru" // Hero'dan gelindiğinde varsayılan (Başlangıç) seçilecek
        mode={mode}
      />
    </section>
  );
}