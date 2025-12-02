export type ProjectItem = {
  title: string;
  category: string;
  description: string;
};

// YENİ: Plan Tipi
export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  label?: string; // Opsiyonel, her planda olmayabilir
  description: string;
  features: string[];
  cta: string;
  link: string; // Genelde sabit ama çeviride değişebilir (örn: /tr/iletisim)
  highlighted: boolean; // Stil mantığı için gerekli
};

export type Dictionary = {
  header: {
    menu: string;
    portfolio: string;
    services: string;
    about: string;
    contact: string;
    readyText: string;
    getInTouch: string;
  };
  hero: {
    designTag: string;
    designTitle: string[];
    designDesc: string;
    designBtnPrimary: string;
    designBtnSecondary: string;
    codeTag: string;
    codeTitle: string[];
    codeDesc: string;
    codeBtnPrimary: string;
    codeBtnSecondary: string;
  };
  portfolio: {
    tag: string;
    title: string;
    description: string;
    descriptionCode: string;
    viewAll: string;
    designProjects: ProjectItem[];
    codeProjects: ProjectItem[];
  };
  // YENİ EKLENEN KISIM:
  pricing: {
    tag: string;
    title: string;
    description: string; // Design modu
    descriptionCode: string; // Code modu
    viewDetails: string; // "View Details" butonu için ortak metin
    learnMore: string; // "Learn more about this plan" metni
    customSolution: string; // "Need a custom solution?" metni
    contactUs: string; // "Contact us" link metni
    forQuote: string; // "for a tailored quote." metni
    designPlans: PricingPlan[];
    codePlans: PricingPlan[];
  };
};