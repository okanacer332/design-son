// src/components/LanguageSelector.tsx
"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

interface LanguageSelectorProps {
  mode: 'design' | 'code';
}

export function LanguageSelector({ mode }: LanguageSelectorProps) {
  const [language, setLanguage] = React.useState("TR");

  // Mod'a göre hover ve text renklerini ayarla
  const activeColorClass = mode === 'design' 
    ? 'hover:text-purple-300 focus:text-purple-300' 
    : 'hover:text-blue-300 focus:text-blue-300';

  const dropdownBorderClass = mode === 'design'
    ? 'border-purple-500/20'
    : 'border-blue-500/20';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium text-white/90 transition-colors outline-none ${activeColorClass}`}>
        <span>{language}</span>
        <ChevronDown className="w-3 h-3 opacity-70" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className={`bg-slate-900/95 backdrop-blur-xl border ${dropdownBorderClass} text-white min-w-[4rem]`}
      >
        <DropdownMenuItem 
          onClick={() => setLanguage("TR")}
          className={`cursor-pointer justify-center text-xs font-medium focus:bg-white/10 focus:text-white ${language === 'TR' ? (mode === 'design' ? 'text-purple-300' : 'text-blue-300') : ''}`}
        >
          TR
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage("EN")}
          className={`cursor-pointer justify-center text-xs font-medium focus:bg-white/10 focus:text-white ${language === 'EN' ? (mode === 'design' ? 'text-purple-300' : 'text-blue-300') : ''}`}
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}