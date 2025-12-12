"use client";

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Search } from 'lucide-react';
import { useMode } from '@/src/lib/context/ModeContext';
import { useLanguage } from '@/src/lib/i18n/LanguageContext';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { TransitionWrapper } from '@/src/components/TransitionWrapper';
import { Card, CardTitle, CardDescription } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Input } from '@/src/components/ui/input';
import { fetchHubContent } from '@/src/lib/actions';
import type { ContentItem } from '@/src/lib/mdx';

// Next.js'e bu sayfaların var olduğunu statik olarak bildiriyoruz (404 Hatasını çözer)
// Not: "use client" olduğu için bu fonksiyonun çalışması için next.config ayarı gerekebilir ama 
// genellikle App Router bunu otomatik algılar veya build sırasında kullanır.
// Eğer build hatası alırsanız bu fonksiyonu ayrı bir dosyaya taşıyabiliriz.
// Şimdilik client component içinde bu şekilde bırakmak yerine manuel kontrolü sıkı tutuyoruz.

export default function HubCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const { mode, toggleMode } = useMode();
  const { language } = useLanguage();

  const validCategories = ['projects', 'articles', 'demos'];
  
  // Kategori geçerli mi kontrolü
  if (!validCategories.includes(category)) {
    return notFound();
  }

  // State
  const [items, setItems] = useState<ContentItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Veri Çekme
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const data = await fetchHubContent(category as any, language);
        setItems(data);
      } catch (error) {
        console.error("Kategori verisi çekilemedi:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [category, language]);

  // Filtreleme
  const filteredItems = items.filter(item => {
    if (searchTerm.length >= 3) {
      const term = searchTerm.toLowerCase();
      const title = item.frontMatter.title?.toLowerCase() || '';
      const desc = item.frontMatter.description?.toLowerCase() || '';
      return title.includes(term) || desc.includes(term);
    }
    return true;
  });

  const colors = {
    bg: mode === 'design' 
      ? 'bg-gradient-to-br from-slate-900 via-purple-950/20 to-slate-900' 
      : 'bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900',
    textGradient: mode === 'design'
      ? 'bg-gradient-to-r from-purple-200 to-fuchsia-300'
      : 'bg-gradient-to-r from-blue-200 to-cyan-300',
    border: mode === 'design'
      ? 'border-purple-500/20 hover:border-purple-500/50'
      : 'border-blue-500/20 hover:border-blue-500/50',
    badge: mode === 'design'
      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
      : 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    icon: mode === 'design' ? 'text-purple-400' : 'text-blue-400',
    overlay: mode === 'design' ? 'bg-purple-900' : 'bg-blue-900',
    activeFilter: mode === 'design' ? 'bg-purple-500/20 text-white border-purple-500/30' : 'bg-blue-500/20 text-white border-blue-500/30'
  };

  const categories = [
    { id: 'all', label: 'Tümü', path: '/hub' },
    { id: 'projects', label: 'Projeler', path: '/hub/projects' },
    { id: 'articles', label: 'Makaleler', path: '/hub/articles' },
    { id: 'demos', label: 'Demolar', path: '/hub/demos' }
  ];

  const currentCategoryLabel = categories.find(c => c.id === category)?.label || 'Hub';

  return (
    <div className={`min-h-screen flex flex-col bg-slate-950 transition-colors duration-1000 ${colors.bg}`}>
      <Header mode={mode} onToggle={toggleMode} isScrolled={true} />

      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Menü */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/50 backdrop-blur-md rounded-xl border border-white/10">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    cat.id === category
                      ? `${colors.activeFilter} shadow-lg` 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input 
                placeholder={`${currentCategoryLabel} içinde ara...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 bg-slate-900/50 border-white/10 text-white placeholder:text-gray-600 focus:border-white/20 rounded-xl"
              />
            </div>
          </div>

          <TransitionWrapper modeKey={category + searchTerm + mode}>
            {loading ? (
              <div className="text-center text-gray-500 py-20">Yükleniyor...</div>
            ) : filteredItems.length === 0 ? (
              <div className="text-center text-gray-500 py-20">
                {searchTerm.length >= 3 
                  ? 'Aradığınız kriterlere uygun içerik bulunamadı.' 
                  : 'Bu kategoride henüz içerik bulunmuyor.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Link key={item.slug} href={`/hub/${category}/${item.slug}`} className="group h-full block">
                    <Card className={`h-full bg-slate-900/40 backdrop-blur-sm border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${colors.border}`}>
                      <div className="h-52 w-full bg-slate-950/50 relative overflow-hidden rounded-t-xl border-b border-white/5">
                        <div className={`absolute inset-0 opacity-20 transition-colors duration-500 ${colors.overlay}`}></div>
                        
                        {item.frontMatter.image && (
                           <img 
                             src={item.frontMatter.image} 
                             alt={item.frontMatter.title} 
                             className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                           />
                        )}

                        <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 transition-colors duration-500 ${mode === 'design' ? 'bg-fuchsia-600' : 'bg-cyan-600'}`}></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span className="text-white/80 bg-black/50 px-3 py-1 rounded-full font-medium text-xs tracking-widest uppercase backdrop-blur-md">
                            {item.type.slice(0, -1).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col p-6">
                        <div className="flex justify-between items-start mb-4">
                          <Badge variant="outline" className={`font-normal ${colors.badge}`}>
                            {item.frontMatter.category}
                          </Badge>
                          <span className="text-xs text-gray-500 font-mono">{item.frontMatter.date}</span>
                        </div>
                        
                        <CardTitle className="text-white text-xl mb-3 group-hover:text-white/90 transition-colors">
                          {item.frontMatter.title}
                        </CardTitle>
                        
                        <CardDescription className="text-gray-400 line-clamp-2 leading-relaxed mb-6">
                          {item.frontMatter.description}
                        </CardDescription>

                        <div className={`mt-auto flex items-center gap-2 text-sm font-medium transition-colors ${colors.icon}`}>
                          İncele <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </TransitionWrapper>

        </div>
      </main>
      <Footer mode={mode} />
    </div>
  );
}