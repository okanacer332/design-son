"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/src/lib/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

interface LanguageSelectorProps {
  mode: 'design' | 'code';
}

// --- Bayrak Bileşenleri ---
const FlagTR = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="16" fill="#E30A17" />
    <path fill="white" d="M13.5 8.5a7.5 7.5 0 1 0 0 15 8.5 8.5 0 0 1 0-15z" />
    <path fill="white" d="M18.8 13.8l.9 2.8h2.9l-2.4 1.7.9 2.8-2.3-1.7-2.3 1.7.9-2.8-2.4-1.7h2.9z" transform="translate(1 0) scale(0.8)" />
  </svg>
);

const FlagEN = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className}>
    <circle cx="16" cy="16" r="16" fill="#012169" />
    <path fill="white" d="M0,0 L32,32 M32,0 L0,32" strokeWidth="4" />
    <path fill="none" stroke="#C8102E" strokeWidth="2" d="M0,0 L32,32 M32,0 L0,32" />
    <path fill="white" d="M16,0 V32 M0,16 H32" strokeWidth="6" />
    <path fill="none" stroke="#C8102E" strokeWidth="4" d="M16,0 V32 M0,16 H32" />
  </svg>
);

// Yeni dil eklendiğinde sadece buraya bayrağını eklemen yeterli
const FlagMap: Record<string, React.ElementType> = {
  TR: FlagTR,
  EN: FlagEN,
  // DE: FlagDE (Yarın eklediğinde buraya koyacağız)
};

const LanguageNames: Record<string, string> = {
  TR: "Turkish",
  EN: "English",
  // DE: "Deutsch"
};

export function LanguageSelector({ mode }: LanguageSelectorProps) {
  const { language, setLanguage, availableLanguages } = useLanguage();

  const activeColorClass = mode === 'design' 
    ? 'hover:text-purple-300 focus:text-purple-300' 
    : 'hover:text-blue-300 focus:text-blue-300';

  const dropdownBorderClass = mode === 'design'
    ? 'border-purple-500/20'
    : 'border-blue-500/20';

  const activeItemBg = mode === 'design'
    ? 'bg-purple-500/10 text-purple-300'
    : 'bg-blue-500/10 text-blue-300';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium text-white/90 transition-colors outline-none group ${activeColorClass}`}>
        <span className="tracking-wide">{language}</span>
        <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        sideOffset={8}
        className={`bg-slate-900/95 backdrop-blur-xl border ${dropdownBorderClass} text-white min-w-[140px] p-1.5 rounded-xl shadow-xl`}
      >
        {/* Dinamik Liste Döngüsü */}
        {availableLanguages.map((langCode) => {
          const FlagComponent = FlagMap[langCode] || FlagEN; // Bayrak yoksa default EN göster
          const langName = LanguageNames[langCode] || langCode;
          const isActive = language === langCode;

          return (
            <DropdownMenuItem 
              key={langCode}
              onClick={() => setLanguage(langCode)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-all focus:bg-white/5 focus:text-white ${isActive ? activeItemBg : 'text-gray-400 hover:text-white'}`}
            >
              <FlagComponent className="w-5 h-5 shadow-sm rounded-full" />
              <span>{langName}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]"></span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}