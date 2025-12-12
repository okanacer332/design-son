"use client";

import { Suspense } from 'react';
import { HubFeed } from '@/src/components/hub/HubFeed';

export default function HubPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-500">Yükleniyor...</div>}>
      <HubFeed initialCategory="all" />
    </Suspense>
  );
}