import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/src/lib/context/ModeContext";
import { LanguageProvider } from '@/src/lib/i18n/LanguageContext';

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
          </LanguageProvider>
        </ModeProvider>
      </body>
    </html>
  );
}