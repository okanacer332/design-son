import { Dictionary } from '../types';

export const de: Dictionary = {
  header: {
    menu: "Menü",
    portfolio: "Portfolio",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",
    readyText: "Bereit, Ihr neues Projekt zu starten?",
    getInTouch: "Kontakt aufnehmen"
  },
  hero: {
    designTag: "✨ End-to-End Produktmanagement",
    designTitle: ["Effektive", "Designlösungen", "die Ihr Geschäft stärken"],
    designDesc: "Wir vereinfachen Produktabläufe, stärken Schnittstellen und schaffen Erlebnisse, die dem Nutzer echten Mehrwert bieten.",
    designBtnPrimary: "Projekt besprechen",
    designBtnSecondary: "Unsere Arbeiten",
    codeTag: "💻 Unternehmenssoftware-Lösungen",
    codeTitle: ["Technologie", "Innovation", "Code"],
    codeDesc: "Wir entwickeln maßgeschneiderte ERP- und SaaS-Plattformen auf Unternehmensebene für jede Branche.",
    codeBtnPrimary: "Entwicklung starten",
    codeBtnSecondary: "Lösungen entdecken"
  },
  portfolio: {
    tag: "Neler Başardık?",
    title: "Seçilmiş Başarı Hikayeleri",
    description: "Tasarım odaklı düşünce yapımızla, iş hedeflerini kullanıcı ihtiyaçlarıyla buluşturduğumuz projeler.",
    descriptionCode: "Farklı sektörlerin en karmaşık problemlerine getirdiğimiz, ölçeklenebilir mühendislik çözümleri.",
    viewAll: "Tüm İşleri Gör",
    designProjects: [
      {
        title: 'Lojistik Operasyon Paneli',
        category: 'Ürün Tasarımı (UX/UI)',
        description: 'Operasyonel verimliliği artıran, dönüşüm oranını %45 yükselten komple arayüz yenilemesi.',
        image: '/portfolio/17.png'
      },
      {
        title: 'Online Eğitim Platformu',
        category: 'B2C Kullanıcı Yolculuğu',
        description: 'Kullanıcı tutundurma (retention) odaklı, oyunlaştırılmış servis tasarımı.',
        image: '/portfolio/18.png'
      },
      {
        title: 'Bulut Tabanlı SaaS',
        category: 'Tasarım Sistemi',
        description: 'Hızlı geliştirme sağlayan, ölçeklenebilir ve tutarlı atomik tasarım sistemi.',
        image: '/portfolio/20.png'
      },
      {
        title: 'Otel & Rezervasyon Motoru',
        category: 'UX Stratejisi',
        description: 'Satın alma hunisindeki terk oranlarını düşüren, akıcı rezervasyon deneyimi.',
        image: '/portfolio/22.png'
      }
    ],
    codeProjects: [
      {
        title: 'Akıllı Üretim ERP',
        category: 'Endüstri 4.0',
        description: '12 tesiste 500+ personelin anlık veri akışını yöneten mikro-servis mimarisi.',
        image: '/portfolio/code-1.jpg'
      },
      {
        title: 'Global B2B Pazaryeri',
        category: 'E-Ticaret Altyapısı',
        description: 'Günlük 10.000+ işlemi hatasız işleyen, yüksek trafikli ticaret platformu.',
        image: '/portfolio/code-2.jpg'
      },
      {
        title: 'Proje Yönetimi SaaS',
        category: 'Multi-Tenant Mimari',
        description: '50.000+ aktif kullanıcıya kesintisiz hizmet veren, bulut tabanlı performans aracı.',
        image: '/portfolio/code-3.jpg'
      },
      {
        title: 'Lojistik Takip Yazılımı',
        category: 'IoT & Real-time',
        description: 'Kurumsal filolar için milisaniyelik veri işleyen gerçek zamanlı takip sistemi.',
        image: '/portfolio/code-4.jpg'
      }
    ]
  },
  pricing: {
    tag: "Wie wir starten",
    title: "Wählen Sie Ihren Plan",
    description: "Flexible Designpakete, abgestimmt auf Ihre Projektanforderungen und Ihr Budget.",
    descriptionCode: "Skalierbare Softwarelösungen, die mit Ihrem Unternehmen wachsen.",
    learnMore: "Mehr über diesen Plan erfahren →",
    customSolution: "Benötigen Sie eine individuelle Lösung?",
    contactUs: "Kontaktieren Sie uns",
    forQuote: "und erhalten Sie ein persönliches Angebot.",
    designPlans: [
      {
        name: 'Basis Start',
        price: '$999',
        period: '/Monat $18',
        label: 'Für Einmalige Projekte',
        description: 'Perfekt für Gründer und kleine Unternehmen.',
        features: [
          'UI/UX Design-Beratung',
          'Webdesign & Werbebanner',
          'Design von bis zu 5 Seiten',
          'Grundlegende SEO-Optimierung',
        ],
        cta: 'Starter-Plan wählen',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professionell',
        price: '$1799',
        period: '/Projekt',
        label: 'Am Beliebtesten',
        description: 'Ideal für wachsende Unternehmen, die umfassende Designlösungen benötigen.',
        features: [
          'Unternehmens-Website Design + Entwicklung',
          'Verwaltungspanel (Admin Panel)',
          'Einrichtung von 2 Modulen (HR, Lager, CRM usw.)',
          'Nutzertests & Feedback',
        ],
        cta: 'Professional-Plan wählen',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$3499',
        period: '/Preis ab',
        label: 'Für Große Teams',
        description: 'Umfassende Design-Partnerschaft für etablierte Unternehmen und komplexe Projekte.',
        features: [
          'Alles aus dem Professional-Paket',
          'End-to-End Analyse & Entwicklung',
          'Priorisierter Support & Wartung',
          'Marketing-Beratung',
        ],
        cta: 'Kontakt aufnehmen',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Basis Start',
        price: '$999',
        period: '/Monat $18',
        label: 'Für Einmalige Projekte',
        description: 'Perfekt für Gründer und kleine Unternehmen.',
        features: [
          'UI/UX Design-Beratung',
          'Webdesign & Werbebanner',
          'Design von bis zu 5 Seiten',
          'Grundlegende SEO-Optimierung',
        ],
        cta: 'Starter-Plan wählen',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professionell',
        price: '$1799',
        period: '/Projekt',
        label: 'Am Beliebtesten',
        description: 'Ideal für wachsende Unternehmen, die umfassende Designlösungen benötigen.',
        features: [
          'Unternehmens-Website Design + Entwicklung',
          'Verwaltungspanel (Admin Panel)',
          'Einrichtung von 2 Modulen (HR, Lager, CRM usw.)',
          'Nutzertests & Feedback',
        ],
        cta: 'Professional-Plan wählen',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$3499',
        period: '/Preis ab',
        label: 'Für Große Teams',
        description: 'Umfassende Design-Partnerschaft für etablierte Unternehmen und komplexe Projekte.',
        features: [
          'Alles aus dem Professional-Paket',
          'End-to-End Analyse & Entwicklung',
          'Priorisierter Support & Wartung',
          'Marketing-Beratung',
        ],
        cta: 'Kontakt aufnehmen',
        link: '#contact',
        highlighted: false
      }
    ],
  },
  services: {
    tag: "Unsere Dienstleistungen",
    titleDesign: "Design-Expertise",
    titleCode: "Produktlösungen",
    descriptionDesign: "Umfassende UX/UI-Designdienstleistungen mit Fokus auf Benutzerfreundlichkeit, Prozessoptimierung und Produktstrategie.",
    descriptionCode: "Softwareentwicklung auf Unternehmensebene für robuste, skalierbare Lösungen für moderne Unternehmen.",
    loadMore: "Mehr anzeigen",
    showLess: "Weniger anzeigen",
    designServices: [
      {
        title: 'UX-Beratung',
        description: 'Strategische UX-Leitung zur Optimierung von Nutzererlebnissen durch datengestützte Erkenntnisse.'
      },
      {
        title: 'Product Doctoring',
        description: 'Ganzheitliche Neugestaltung Ihres bestehenden Produktkonzepts und der Vertriebsstrategie mit intuitiven Schnittstellen.'
      },
      {
        title: 'New Business Development',
        description: 'End-to-End-Unterstützung zur Identifizierung von Wachstumschancen und Entwicklung ansprechender digitaler Produkte.'
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Visualisierung und Optimierung jedes Kontaktpunkts (Touchpoint) in der Kundenreise für maximale Bindung.'
      },
      {
        title: 'CRM-Marketing',
        description: 'Entwicklung von Kundenbeziehungsstrategien, die Loyalität steigern und eine dauerhafte Markenbindung aufbauen.'
      }
    ],
    codeServices: [
      {
        title: 'ERP-Systeme',
        description: 'Umfassende Enterprise-Resource-Planning-Lösungen zur Organisation der Betriebsabläufe in Ihrem Unternehmen.'
      },
      {
        title: 'B2B-Plattformen',
        description: 'Skalierbare B2B-Web- und Mobilplattformen, die Unternehmen verbinden und den Handel effizient abwickeln.'
      },
      {
        title: 'SaaS-Entwicklung',
        description: 'Cloud-basierte Software-as-a-Service-Lösungen, entwickelt für Skalierbarkeit und Sicherheit.'
      },
      {
        title: 'Unternehmenssoftware',
        description: 'Maßgeschneiderte Softwareentwicklung, die speziell auf Ihre Branche und Geschäftsanforderungen zugeschnitten ist.'
      },
      {
        title: 'Individuelle Lösungen',
        description: 'Dedizierte Unternehmensanwendungen zur Lösung Ihrer einzigartigen geschäftlichen Herausforderungen und Workflows.'
      }
    ]
  },
  focusAreas: {
    tag: "Unsere Schwerpunkte",
    titleDesign: "Unsere Design-Philosophie",
    titleCode: "Unser Tech-Stack",
    designFocus: [
      {
        title: 'Customer Journey Mapping',
        description: 'Wir visualisieren jeden Berührungspunkt in Ihrer Kundenerfahrung und identifizieren Schwachstellen sowie Verbesserungschancen.',
        highlights: ['Nutzerforschung', 'Journey-Visualisierung', 'Touchpoint-Analyse', 'Messung']
      },
      {
        title: 'Neues Produktdesign',
        description: 'Wir begeistern Nutzer bei jeder Interaktion durch schöne und intuitive Schnittstellen, die zu Ihrer Marke passen.',
        highlights: ['Interface-Design', 'Design-Bibliothek', 'Prototyping', 'Werbevisuals']
      },
      {
        title: 'User Experience (UX)',
        description: 'Umfassende UX-Strategie, die Forschung, Tests und Iteration kombiniert, um nahtlose Erlebnisse zu schaffen.',
        highlights: ['UX-Forschung', 'Usability-Tests', 'Informationsarchitektur', 'Interaktionsdesign']
      },
    ],
    codeFocus: [
      {
        title: 'ERP-Lösungen',
        description: 'ERP-Systeme, die alle Aspekte Ihrer Geschäftsabläufe in einer einzigen, einheitlichen Plattform integrieren.',
        highlights: ['Prozessautomatisierung', 'Echtzeit-Analytik', 'Multi-Modul-Integration', 'Skalierbare Architektur']
      },
      {
        title: 'B2B & SaaS Plattformen',
        description: 'Robuste Web- und Mobilplattformen für Business-to-Business-Interaktionen und SaaS-Bereitstellung.',
        highlights: ['Mandantenfähige Architektur', 'API-Entwicklung', 'Cloud-Infrastruktur', 'Security First']
      },
      {
        title: 'Branchenspezifische Software',
        description: 'Maßgeschneiderte Unternehmenssoftware, angepasst an die einzigartigen Herausforderungen und Compliance-Anforderungen Ihrer Branche.',
        highlights: ['Branchenexpertise', 'Spezialfunktionen', 'Compliance-Ready', 'Integrationssupport']
      }
    ]
  },
  testimonials: {
    tag: "Kundenerfolg",
    title: "Was unsere Kunden sagen",
    descriptionDesign: "Führende Marken vertrauen uns, um außergewöhnliche Designerlebnisse zu liefern.",
    descriptionCode: "Wir stärken Unternehmen mit Softwarelösungen auf Enterprise-Niveau.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, RetailTech',
        company: 'E-Commerce',
        text: 'Das Customer Journey Mapping hat unser gesamtes Nutzererlebnis transformiert. Die Konversionsraten stiegen innerhalb von drei Monaten um 45%.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Director of Product',
        company: 'FinanceApp',
        text: 'Die UX-Beratung half uns, blinde Flecken zu identifizieren, die wir gar nicht kannten. Die Arbeit am Produktdesign war außergewöhnlich.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Marketing Manager',
        company: 'HealthCare Plus',
        text: 'Großartige Arbeit an unserer CRM-Marketingstrategie. Das Designteam versteht modernes Nutzerverhalten wirklich.',
        rating: 5
      }
    ],
    codeTestimonials: [
      {
        name: 'Michael Anderson',
        role: 'CTO, Manufacturing Co',
        company: 'Industriesektor',
        text: 'Das ERP-System, das sie gebaut haben, hat unsere Abläufe revolutioniert. Nahtlose Integration über alle Abteilungen hinweg.',
        rating: 5
      },
      {
        name: 'Lisa Thompson',
        role: 'VP of Technology',
        company: 'B2B Solutions',
        text: 'Hervorragende B2B-Plattform-Entwicklung. Das Team lieferte eine skalierbare Lösung, die unsere wachsenden Anforderungen perfekt erfüllte.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Gründer',
        company: 'SaaS Startup',
        text: 'Sie haben unsere gesamte SaaS-Plattform vom Konzept bis zum Deployment gebaut. Code-Qualität und Architektur sind erstklassig.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Bereit, mit uns zu arbeiten?",
    titleCode: "Bereit, mit uns zu arbeiten?",
    descDesign: "Lassen Sie uns heute beginnen, Designs zu entwickeln, die Ihre digitale Präsenz transformieren und echte Ergebnisse liefern.",
    descCode: "Lassen Sie uns heute beginnen, Unternehmenssoftware für Ihr Geschäft zu entwickeln.",
    btnPrimary: "Lassen Sie uns starten",
    btnSecondary: "Kennenlerngespräch",
    statProjects: "Abgeschlossene Projekte",
    statSystems: "Installierte Systeme",
    statSuccess: "Kundenerfolgsrate",
    statSupportDesign: "Laufender Support",
    statSupportCode: "Entwicklungssupport"
  },
  footer: {
    brandDescDesign: "Wir schaffen außergewöhnliche Nutzererlebnisse durch innovatives Design.",
    brandDescCode: "Wir bauen Softwarelösungen auf Unternehmensebene für moderne Firmen.",
    colServices: "Leistungen",
    colCompany: "Unternehmen",
    colContact: "Kontakt",
    designServices: ['UX-Berater', 'Produktdesign', 'Business Dev', 'Journey Mapping', 'CRM-Marketing'],
    codeServices: ['ERP-Systeme', 'B2B-Plattformen', 'SaaS-Entwicklung', 'Individualsoftware', 'API-Integration'],
    companyLinks: ['Über uns', 'Unsere Prozesse', 'Fallstudien', 'Karriere', 'Blog'],
    copyright: "Alle Rechte vorbehalten.",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
    cookie: "Cookie-Richtlinie"
  }
};