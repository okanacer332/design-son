"use server";

import { getAllContent, getContentBySlug, ContentType } from './mdx';

// Dil kodunu (TR, EN) klasör adına (tr, en) çevir
function normalizeLang(lang: string) {
  return lang.toLowerCase();
}

// Client bileşeninden çağrılacak fonksiyon: Listeyi getir
export async function fetchHubContent(type: ContentType, lang: string) {
  const normalizedLang = normalizeLang(lang);
  const items = await getAllContent(type, normalizedLang);
  return items;
}

// Client bileşeninden çağrılacak fonksiyon: Detayı getir
export async function fetchHubDetail(type: ContentType, lang: string, slug: string) {
  const normalizedLang = normalizeLang(lang);
  const item = await getContentBySlug(type, normalizedLang, slug);
  return item;
}