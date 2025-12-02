export type ProjectItem = {
  title: string;
  category: string;
  description: string;
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
    description: string; // "Design" modu için açıklama
    descriptionCode: string; // "Code" modu için açıklama
    viewAll: string;
    designProjects: ProjectItem[]; // Design proje listesi
    codeProjects: ProjectItem[];   // Code proje listesi
  };
};