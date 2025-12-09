"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { useMode } from '@/src/lib/context/ModeContext';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { TransitionWrapper } from '@/src/components/TransitionWrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { Input } from '@/src/components/ui/input';

export default function HubPage() {
  const { mode, toggleMode } = useMode();
  const [filter, setFilter] = useState('all');

  // Hub İçerikleri (Şimdilik statik, sonra veritabanına bağlanabilir)
  const hubItems = [
    {
      id: 1,
      type: 'project',
      title: 'E-Commerce Dashboard Kit',
      category: 'Design System',
      description: 'Figma ve React için geliştirdiğimiz, 50+ bileşen içeren kapsamlı dashboard kiti.',
      date: '12 Dec 2024',
      image: 'project'
    },
    {
      id: 2,
      type: 'article',
      title: 'Next.js 15 Server Actions',
      category: 'Development',
      description: 'Modern web uygulamalarında form yönetimi ve backend iletişiminde devrim.',
      date: '10 Dec 2024',
      image: 'article'
    },
    {
      id: 3,
      type: 'demo',
      title: '3D Product Viewer',
      category: 'Three.js',
      description: 'E-ticaret siteleri için yüksek performanslı, interaktif 3D ürün görüntüleyici.',
      date: '08 Dec 2024',
      image: 'demo'
    },
    {
      id: 4,
      type: 'project',
      title: 'Banking App UI',
      category: 'Mobile Design',
      description: 'Fintech sektörü için modern, güvenli ve kullanıcı dostu mobil arayüz çalışması.',
      date: '05 Dec 2024',
      image: 'project'
    },
    {
      id: 5,
      type: 'article',
      title: 'Micro-Interactions Guide',
      category: 'UX Design',
      description: 'Kullanıcı deneyimini güçlendiren mikro etkileşimlerin psikolojisi ve uygulaması.',
      date: '01 Dec 2024',
      image: 'article'
    }
  ];

  // Filtreleme Mantığı
  const filteredItems = filter === 'all' 
    ? hubItems 
    : hubItems.filter(item => item.type === filter);

  // Dinamik Renk Paleti
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

  return (
    <div className={`min-h-screen flex flex-col bg-slate-950 transition-colors duration-1000 ${colors.bg}`}>
      {/* Header: isScrolled=true vererek her zaman arka planlı olmasını sağlıyoruz */}
      <Header mode={mode} onToggle={toggleMode} isScrolled={true} />

      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Hub Hero */}
          <TransitionWrapper modeKey={mode}>
            <div className="text-center mb-16">
              <div className={`inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border text-xs font-medium backdrop-blur-sm transition-colors duration-500 ${colors.badge}`}>
                ACR HUB
              </div>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent transition-all duration-500 ${colors.textGradient}`}>
                Bilgi ve Üretim Merkezi
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Şirketimizin geliştirdiği açık kaynak projeler, teknik makaleler, 
                vaka analizleri ve çalışan canlı demoların bulunduğu laboratuvar.
              </p>
            </div>
          </TransitionWrapper>

          {/* Kontrol Paneli: Arama ve Filtreler */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            
            {/* Filtre Butonları */}
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/50 backdrop-blur-md rounded-xl border border-white/10">
              {[
                { id: 'all', label: 'Tümü' },
                { id: 'project', label: 'Projeler' },
                { id: 'article', label: 'Makaleler' },
                { id: 'demo', label: 'Demolar' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === f.id 
                      ? `${colors.activeFilter} shadow-lg` 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            
            {/* Arama Kutusu */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input 
                placeholder="Hub içinde ara..." 
                className="pl-10 h-11 bg-slate-900/50 border-white/10 text-white placeholder:text-gray-600 focus:border-white/20 rounded-xl"
              />
            </div>
          </div>

          {/* İçerik Grid */}
          <TransitionWrapper modeKey={filter + mode}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Link key={item.id} href={`#`} className="group h-full block">
                  <Card className={`h-full bg-slate-900/40 backdrop-blur-sm border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${colors.border}`}>
                    
                    {/* Görsel Alanı */}
                    <div className="h-52 w-full bg-slate-950/50 relative overflow-hidden rounded-t-xl border-b border-white/5">
                      <div className={`absolute inset-0 opacity-20 transition-colors duration-500 ${colors.overlay}`}></div>
                      {/* Dekoratif Gradyan Efekt */}
                      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-40 transition-colors duration-500 ${mode === 'design' ? 'bg-fuchsia-600' : 'bg-cyan-600'}`}></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-sm tracking-widest uppercase">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col p-6">
                      <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className={`font-normal ${colors.badge}`}>
                          {item.category}
                        </Badge>
                        <span className="text-xs text-gray-500 font-mono">{item.date}</span>
                      </div>
                      
                      <CardTitle className="text-white text-xl mb-3 group-hover:text-white/90 transition-colors">
                        {item.title}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-400 line-clamp-2 leading-relaxed mb-6">
                        {item.description}
                      </CardDescription>

                      <div className={`mt-auto flex items-center gap-2 text-sm font-medium transition-colors ${colors.icon}`}>
                        İncele <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TransitionWrapper>

        </div>
      </main>

      <Footer mode={mode} />
    </div>
  );
}