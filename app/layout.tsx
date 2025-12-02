import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Projede default font kullanımı analiz edildiğinde sans-serif kullanıldığı görülüyor.
// Inter en güvenli ve modern seçimdir.
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullpage Banner Design",
  description: "Modern Design and Code Agency Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}