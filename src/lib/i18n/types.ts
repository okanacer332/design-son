// --- Alt Tipler ---

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  label?: string;
  description: string;
  features: string[];
  cta: string;
  link: string;
  highlighted: boolean;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type FocusAreaItem = {
  title: string;
  description: string;
  highlights: string[];
};

// --- Ana Sözlük Tipi ---

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
  pricing: {
    tag: string;
    title: string;
    description: string;
    descriptionCode: string;
    viewDetails: string;
    learnMore: string;
    customSolution: string;
    contactUs: string;
    forQuote: string;
    designPlans: PricingPlan[];
    codePlans: PricingPlan[];
  };
  services: {
    tag: string;
    titleDesign: string;
    titleCode: string;
    descriptionDesign: string;
    descriptionCode: string;
    loadMore: string;
    showLess: string;
    designServices: ServiceItem[];
    codeServices: ServiceItem[];
  };
  // YENİ EKLENEN KISIM:
  focusAreas: {
    tag: string;
    titleDesign: string;
    titleCode: string;
    designFocus: FocusAreaItem[];
    codeFocus: FocusAreaItem[];
  };
};