import { Suspense } from 'react';
import { HubFeed } from '@/src/components/hub/HubFeed';

export default function HubPage() {
  return (
    // Suspense boundary, useSearchParams kullanan client component'i sarmalar.
    // Bu sayede build sırasında Next.js burayı atlayıp "Yükleniyor..." gösterip geçebilir.
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-gray-500 animate-pulse">İçerikler yükleniyor...</div>
      </div>
    }>
      <HubFeed initialCategory="all" />
    </Suspense>
  );
}