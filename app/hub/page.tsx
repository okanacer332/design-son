import { Suspense } from 'react';
import { HubFeed } from '@/src/components/hub/HubFeed';

// BU SATIR KRİTİK: Sayfanın statik değil, dinamik (sunucu tarafında anlık) oluşturulmasını sağlar.
// Böylece build sırasında "useSearchParams" hatası almazsınız.
export const dynamic = 'force-dynamic';

export default function HubPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-gray-500 animate-pulse">İçerikler yükleniyor...</div>
      </div>
    }>
      <HubFeed initialCategory="all" />
    </Suspense>
  );
}