"use client";

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote';
import { useMode } from '@/src/lib/context/ModeContext';
import { useLanguage } from '@/src/lib/i18n/LanguageContext';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { fetchHubDetail } from '@/src/lib/actions';
import type { ContentItem } from '@/src/lib/mdx';

export default function HubDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  // params bir Promise olduğu için use() ile çözüyoruz
  const { category, slug } = use(params);
  
  const { mode, toggleMode } = useMode();
  const { language } = useLanguage();
  
  const [item, setItem] = useState<ContentItem | null>(null);
  const [loading, setLoading] = useState(true);

  // URL Güvenliği: Sadece geçerli kategoriler
  const validCategories = ['projects', 'articles', 'demos'];
  if (!validCategories.includes(category)) {
    return notFound();
  }

  useEffect(() => {
    async function loadItem() {
      setLoading(true);
      try {
        console.log(`Veri isteniyor -> Kategori: ${category}, Dil: ${language}, Slug: ${slug}`);
        
        // slug ve category (klasör adı) eşleşiyorsa veriyi getirir
        const data = await fetchHubDetail(category as any, language, slug);
        
        if (data) {
          console.log("Veri bulundu:", data.frontMatter.title);
          setItem(data);
        } else {
          console.warn("Veri bulunamadı (Dosya yok veya isim yanlış)");
          setItem(null); 
        }
      } catch (error) {
        console.error("Detay verisi çekilemedi:", error);
      } finally {
        setLoading(false);
      }
    }
    loadItem();
  }, [category, slug, language]);

  // Yükleme bitti ve öğe yoksa -> 404 Sayfasına yönlendir
  if (!loading && !item) {
    return notFound();
  }

  const colors = {
    bg: 'bg-slate-950',
    headerGradient: mode === 'design'
      ? 'from-purple-900/30 to-slate-950'
      : 'from-blue-900/30 to-slate-950',
    textGradient: mode === 'design'
      ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300'
      : 'bg-gradient-to-r from-blue-200 to-cyan-300',
    badge: mode === 'design'
      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
      : 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    backLink: mode === 'design'
      ? 'text-purple-400 hover:text-purple-300'
      : 'text-blue-400 hover:text-blue-300',
    prose: mode === 'design' 
      ? 'prose-headings:text-purple-200 prose-a:text-purple-400 prose-strong:text-purple-200' 
      : 'prose-headings:text-blue-200 prose-a:text-blue-400 prose-strong:text-blue-200'
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-950 text-white ${colors.bg}`}>
      <Header mode={mode} onToggle={toggleMode} isScrolled={true} />

      <main className="flex-1 pt-24 pb-16">
        {loading ? (
           <div className="flex justify-center items-center h-64 text-gray-500">İçerik Yükleniyor...</div>
        ) : item && (
          <>
            {/* Hero Section */}
            <div className={`relative pt-12 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b ${colors.headerGradient}`}>
              <div className="max-w-4xl mx-auto relative z-10">
                
                <Link 
                  href={`/hub/${category}`} 
                  className={`inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors ${colors.backLink}`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Geri Dön
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge variant="outline" className={`px-3 py-1 ${colors.badge}`}>
                    {item.frontMatter.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{item.frontMatter.date}</span>
                  </div>
                </div>

                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent ${colors.textGradient}`}>
                  {item.frontMatter.title}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
                  {item.frontMatter.description}
                </p>
                
                {/* Main Image */}
                {item.frontMatter.image && (
                  <div className="mt-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img src={item.frontMatter.image} alt={item.frontMatter.title} className="w-full h-auto" />
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-12">
              <article className={`prose prose-invert prose-lg max-w-none text-gray-300 ${colors.prose}`}>
                <MDXRemote {...item.content} />
              </article>

              <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                <span className="text-gray-500 text-sm">Paylaş:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                    <Share2 className="w-4 h-4 text-gray-300" />
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer mode={mode} />
    </div>
  );
}