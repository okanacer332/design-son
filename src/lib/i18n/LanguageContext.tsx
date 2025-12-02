"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { dictionaries, LanguageCode } from './locales';
import { Dictionary } from './types';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Dictionary;
  availableLanguages: LanguageCode[]; // UI'da listelemek için dilleri de veriyoruz
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Varsayılan dili TR yaptık
  const [language, setLanguage] = useState<LanguageCode>('TR');

  // Seçili dilin sözlüğünü otomatik çekiyoruz
  const t = dictionaries[language];
  
  // Mevcut dillerin listesini (['TR', 'EN']) alıyoruz
  const availableLanguages = Object.keys(dictionaries) as LanguageCode[];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
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