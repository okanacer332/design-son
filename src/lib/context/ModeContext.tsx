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

  // Sayfa yenilendiğinde tercihi hatırla
  useEffect(() => {
    const savedMode = localStorage.getItem('acr-mode') as Mode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const toggleMode = (selectedMode: Mode) => {
    setMode(selectedMode);
    localStorage.setItem('acr-mode', selectedMode);
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