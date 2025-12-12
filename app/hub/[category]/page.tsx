"use client";

import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { HubFeed } from '@/src/components/hub/HubFeed';

export default function HubCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);

  const validCategories = ['projects', 'articles', 'demos'];
  
  if (!validCategories.includes(category)) {
    return notFound();
  }

  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-500">Yükleniyor...</div>}>
      <HubFeed initialCategory={category as any} />
    </Suspense>
  );
}