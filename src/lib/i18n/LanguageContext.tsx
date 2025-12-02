"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dictionaries, LanguageCode } from './locales';
import { Dictionary } from './types';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Dictionary;
  availableLanguages: LanguageCode[];
  isRTL: boolean; // UI'da RTL'e göre stil vermek gerekirse diye
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('TR');

  const t = dictionaries[language];
  const availableLanguages = Object.keys(dictionaries) as LanguageCode[];
  const isRTL = language === 'AR';

  // Dil değiştiğinde HTML tag'ine dir attribute'unu bas
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}