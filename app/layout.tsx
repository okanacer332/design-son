import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/src/lib/context/ModeContext";
import { LanguageProvider } from '@/src/lib/i18n/LanguageContext';
// 1. Toaster bileşenini import ediyoruz
import { Toaster } from "@/src/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACR Tech - Design & Code Agency",
  description: "Modern Design and Code Agency Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ModeProvider>
          <LanguageProvider>
            {children}
            {/* 2. Toaster bileşenini buraya ekliyoruz. 
                Artık toast bildirimleri (başarılı/hata) ekranda görünecek. */}
            <Toaster position="top-center" richColors />
          </LanguageProvider>
        </ModeProvider>
      </body>
    </html>
  );
}