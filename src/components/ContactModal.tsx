// src/components/ContactModal.tsx

"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialPlan: string;
}

export function ContactModal({ isOpen, onOpenChange, initialPlan }: ContactModalProps) {
  const [selectedPlan, setSelectedPlan] = useState("");

  // Modal her açıldığında veya initialPlan değiştiğinde dropdown'ı güncelle
  useEffect(() => {
    if (isOpen) {
      // Gelen plan ismine göre eşleştirme yapıyoruz
      if (initialPlan.includes("Başlangıç") || initialPlan.includes("Basic")) {
        setSelectedPlan("baslangic");
      } else if (initialPlan.includes("Büyüme") || initialPlan.includes("Scale") || initialPlan.includes("Profesyonel")) {
        setSelectedPlan("buyume");
      } else if (initialPlan.includes("Kurumsal") || initialPlan.includes("Enterprise")) {
        setSelectedPlan("kurumsal");
      } else {
        setSelectedPlan("baslangic");
      }
    }
  }, [isOpen, initialPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemleri buraya gelecek
    console.log("Form gönderildi");
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-slate-900 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Projenizi Başlatalım
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Aşağıdaki formu doldurun, size özel çözüm için hemen iletişime geçelim.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-5 py-4">
          
          {/* 1. PLAN SEÇİMİ (DROPDOWN) */}
          <div className="grid gap-2">
            <Label htmlFor="plan" className="text-gray-300">Seçilen Paket</Label>
            <Select value={selectedPlan} onValueChange={setSelectedPlan}>
              <SelectTrigger className="bg-slate-800/50 border-white/10 text-white">
                <SelectValue placeholder="Paket Seçiniz" />
              </SelectTrigger>
              <SelectContent className="bg-slate-900 border-white/10 text-white">
                <SelectItem value="baslangic">Başlangıç - $999</SelectItem>
                <SelectItem value="buyume">Büyüme (Growth) - $1799</SelectItem>
                <SelectItem value="kurumsal">Kurumsal Partner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 2. AD SOYAD */}
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-gray-300">Ad Soyad</Label>
            <Input 
              id="name" 
              placeholder="Adınız Soyadınız" 
              className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500"
              required 
            />
          </div>

          {/* 3. TELEFON (TR KODLU) */}
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-gray-300">Telefon Numarası</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium border-r border-white/10 pr-2">
                +90
              </div>
              <Input 
                id="phone" 
                type="tel"
                placeholder="5XX XXX XX XX" 
                className="pl-14 bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500"
                required 
              />
            </div>
          </div>

          {/* 4. EMAIL (OPSİYONEL) */}
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="email" className="text-gray-300">E-Posta</Label>
              <span className="text-xs text-gray-500">(Opsiyonel)</span>
            </div>
            <Input 
              id="email" 
              type="email"
              placeholder="ornek@sirket.com" 
              className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500"
            />
          </div>

          {/* 5. PROJE AÇIKLAMASI */}
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-gray-300">Projenizden Bahsedin</Label>
            <Textarea 
              id="message" 
              placeholder="Projeniz hakkında kısa bir bilgi..." 
              className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 min-h-[100px]"
              required
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium py-6"
            >
              Gönder
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}