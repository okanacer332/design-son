"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Mode = 'design' | 'code';

interface ModeContextType {
  mode: Mode;
  toggleMode: (selectedMode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('design');

  // 1. Kullanıcının daha önceki mod tercihini hatırla (Sayfa yenilendiğinde)
  useEffect(() => {
    const savedMode = localStorage.getItem('acr-mode') as Mode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // 2. YENİ ÖZELLİK: İlk ziyaret intro animasyonu
  useEffect(() => {
    // Kullanıcı daha önce introyu izlemiş mi?
    const hasSeenIntro = localStorage.getItem('has-seen-intro');
    // Kullanıcının kayıtlı bir mod tercihi var mı?
    const hasSavedMode = localStorage.getItem('acr-mode');

    // Eğer introyu görmediyse VE özel bir tercih yapmadıysa (Tamamen yeni ziyaretçi)
    if (!hasSeenIntro && !hasSavedMode) {
      
      // Adım 1: Site açıldıktan 1.5 saniye sonra CODE moduna geç
      const timer1 = setTimeout(() => {
        setMode('code');
      }, 1500);

      // Adım 2: Code modunda 2.5 saniye durduktan sonra DESIGN moduna geri dön
      const timer2 = setTimeout(() => {
        setMode('design');
        
        // İşaretle: Artık introyu gördü, bir daha tekrarlama
        localStorage.setItem('has-seen-intro', 'true');
        
        // Varsayılan tercihi design olarak kaydet
        localStorage.setItem('acr-mode', 'design');
      }, 4000); // 1500ms (başlangıç) + 2500ms (bekleme) = 4000ms

      // Temizlik (Component unmount olursa timerları iptal et)
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  const toggleMode = (selectedMode: Mode) => {
    setMode(selectedMode);
    localStorage.setItem('acr-mode', selectedMode);
    // Kullanıcı manuel değişim yaparsa da introyu görmüş sayalım
    localStorage.setItem('has-seen-intro', 'true');
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}