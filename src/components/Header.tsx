// src/components/Header.tsx
import { useState } from 'react';
import { Switch } from './Switch';
import { LanguageSelector } from './LanguageSelector';
import { Menu, X, ArrowRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose
} from '@/src/components/ui/sheet';

interface HeaderProps {
  mode: 'design' | 'code';
  onToggle: (mode: 'design' | 'code') => void;
  isScrolled: boolean;
}

export function Header({ mode, onToggle, isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  // Mod'a göre tema renkleri
  const gradientText = mode === 'design' 
    ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300' 
    : 'bg-gradient-to-r from-blue-200 to-cyan-300';
  
  const hoverBg = mode === 'design'
    ? 'hover:bg-purple-500/10 hover:text-purple-300'
    : 'hover:bg-blue-500/10 hover:text-blue-300';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md shadow-2xl py-3 border-b border-white/5'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- SOL: LOGO (ACR / ACRTECH) --- */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            
            {/* LOGOMARK: Renkli kutu + SVG Sembol */}
            <div className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br transition-all duration-700 shadow-lg group-hover:scale-105 ${
              mode === 'design'
                ? 'from-purple-500 to-fuchsia-500 group-hover:shadow-purple-500/30'
                : 'from-blue-500 to-cyan-500 group-hover:shadow-blue-500/30'
            }`}>
              {/* Soyut "A" Sembolü */}
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-md" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Modern, teknolojik "A" harfi stilizasyonu */}
                <path d="M12 2L2 22h20" />
                <path d="M5 12h14" />
                <path d="M12 2v20" className="opacity-50" />
              </svg>
            </div>

            <span className="text-white text-lg sm:text-xl font-bold tracking-tight group-hover:opacity-90 transition-opacity">
              {/* Mobilde Sadece ACR */}
              <span className="md:hidden">ACR</span>
              {/* Desktopta ACRTECH */}
              <span className="hidden md:inline">ACRTECH</span>
            </span>
          </div>

          {/* --- SAĞ: KONTROL BLOĞU (Switch | Dil | Menü) --- */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* 1. Switch (Design/Code) */}
            <div className="transform scale-90 sm:scale-100 origin-right">
              <Switch mode={mode} onToggle={onToggle} />
            </div>

            {/* Ayırıcı Çizgi */}
            <div className="h-6 w-px bg-white/10 hidden sm:block"></div>

            {/* 2. Dil Seçimi */}
            <div className="relative z-10">
              <LanguageSelector mode={mode} />
            </div>

            {/* 3. Hamburger Menü (Sheet) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className={`p-2 rounded-full transition-colors ${hoverBg} group`}>
                  <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </SheetTrigger>
              
              <SheetContent 
                side="right" 
                className="w-full sm:w-[400px] bg-slate-950 border-l border-white/10 p-0 flex flex-col"
              >
                {/* Menü Başlığı / Kapatma Alanı */}
                <div className="p-6 flex items-center justify-between border-b border-white/5">
                  <SheetTitle className={`text-xl font-bold bg-clip-text text-transparent ${gradientText}`}>
                    Menu
                  </SheetTitle>
                  <SheetClose className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Navigasyon Linkleri */}
                <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
                  {menuItems.map((item, index) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl sm:text-4xl font-light text-white/80 hover:text-white transition-all group flex items-center gap-4`}
                    >
                      <span className={`w-0 h-px transition-all duration-300 group-hover:w-8 ${
                        mode === 'design' ? 'bg-purple-500' : 'bg-blue-500'
                      }`}></span>
                      {item.label}
                    </a>
                  ))}
                </div>

                {/* Alt Kısım: İletişim Butonu & Info */}
                <div className="p-8 border-t border-white/5 bg-white/[0.02]">
                  <p className="text-gray-500 text-sm mb-6">
                    Ready to start your next project? Let's build something amazing together.
                  </p>
                  <button className={`w-full py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02] ${
                    mode === 'design'
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:shadow-purple-500/25'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-blue-500/25'
                  }`}>
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>
    </header>
  );
}