import { tr } from './locales/tr';
import { en } from './locales/en';

// İleride 'de' eklediğinde: import { de } from './locales/de';

export const dictionaries = {
  TR: tr,
  EN: en,
  // DE: de,
};

export type LanguageCode = keyof typeof dictionaries;