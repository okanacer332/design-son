import { Dictionary } from '../types';

export const de: Dictionary = {
  header: {
    menu: "Menü",
    portfolio: "Portfolio",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",
    readyText: "Bereit für Ihr neues Projekt?",
    getInTouch: "Kontaktieren Sie uns"
  },
  hero: {
    designTag: "✨ Globale Designagentur",
    designTitle: ["Moderne", "Design", "Lösungen"],
    designDesc: "Wir schaffen außergewöhnliche Erlebnisse durch Customer Journey Mapping und UI-Design.",
    designBtnPrimary: "Lassen Sie uns sprechen",
    designBtnSecondary: "Unsere Arbeiten",
    codeTag: "💻 Enterprise Softwarelösungen",
    codeTitle: ["Technologie", "Innovation", "Code"],
    codeDesc: "Wir entwickeln maßgeschneiderte ERP- und SaaS-Plattformen auf Unternehmensebene für jede Branche.",
    codeBtnPrimary: "Entwicklung starten",
    codeBtnSecondary: "Lösungen ansehen"
  },
  portfolio: {
    tag: "Unsere Projekte",
    title: "Ausgewählte Arbeiten",
    description: "Entdecken Sie unsere erfolgreichen Designprojekte, die Benutzererlebnisse transformieren.",
    descriptionCode: "Untersuchen Sie die Unternehmens-Designlösungen, die wir für Unternehmen in verschiedenen Sektoren entwickelt haben.",
    viewAll: "Alle Projekte ansehen",
    designProjects: [
      {
        title: 'Logistik-Plattform',
        category: 'Produktdesign',
        description: 'Komplette UX-Erneuerung mit 45% Steigerung der Konversionsrate'
      },
      {
        title: 'Bildungsplattform',
        category: 'B2C Journey',
        description: 'Optimiert mit Fokus auf Produkt- und Service-Design'
      },
      {
        title: 'Cloud-Plattform',
        category: 'UI-Design',
        description: 'Modernes Interface mit umfassendem Designsystem'
      },
      {
        title: 'Hotel & Buchungsplattform',
        category: 'UX-Beratung',
        description: 'Kundenentdeckung und Kauferlebnis verbessert'
      }
    ],
    codeProjects: [
      {
        title: 'Produktions-ERP',
        category: 'ERP-System',
        description: 'Vollständiges ERP zur Verwaltung von 500+ Benutzern in 12 Werken'
      },
      {
        title: 'B2B-Marktplatz',
        category: 'B2B-Plattform',
        description: 'Multi-Vendor-Plattform mit 10K+ täglichen Transaktionen'
      },
      {
        title: 'Projektmanagement SaaS',
        category: 'SaaS-Entwicklung',
        description: 'Cloud-basiertes Tool für 50K+ aktive Nutzer'
      },
      {
        title: 'Logistik-Software',
        category: 'Individuelle Lösung',
        description: 'Echtzeit-Tracking-System für Unternehmenslogistik'
      }
    ]
  },
  pricing: {
    tag: "Wie können wir starten",
    title: "Wählen wir Ihren Plan",
    description: "Flexible Designpakete, angepasst an Ihre Projektbedürfnisse und Ihr Budget.",
    descriptionCode: "Skalierbare Softwarelösungen, die mit Ihrem Unternehmen wachsen.",
    viewDetails: "Details ansehen",
    learnMore: "Mehr Infos zu diesem Plan →",
    customSolution: "Benötigen Sie eine individuelle Lösung?",
    contactUs: "Kontaktieren Sie uns",
    forQuote: "und erhalten Sie ein individuelles Angebot.",
    designPlans: [
      {
        name: 'Starter',
        price: '€2.500',
        period: '/projekt',
        label: 'Für einmalige Projekte',
        description: 'Perfekt für Unternehmer und kleine Unternehmen.',
        features: [
          'UI/UX Design-Beratung',
          'Webdesign & Werbebanner',
          'Bis zu 5 Seiten Design',
          'Basis Markenrichtlinien',
        ],
        cta: 'Starter-Plan wählen',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professional',
        price: '€5.000',
        period: '/projekt',
        label: 'Am beliebtesten',
        description: 'Ideal für wachsende Unternehmen, die umfassende Designlösungen benötigen.',
        features: [
          'Alles im Starter-Paket',
          'Customer Journey Mapping',
          'Bis zu 15 Seiten Design',
          'Umfassendes Designsystem',
        ],
        cta: 'Professional-Plan wählen',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '€10.000+',
        period: '/projekt',
        label: 'Für große Teams',
        description: 'Umfassende Designpartnerschaft für etablierte Unternehmen und komplexe Projekte.',
        features: [
          'Alles im Professional-Paket',
          'End-to-End Produktdesign',
          '30+ Seiten und Menüdesign',
          'Marketing-Beratung',
        ],
        cta: 'Enterprise-Plan wählen',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Basic',
        price: '€5.000',
        period: '/projekt',
        label: 'Beste für MVPs',
        description: 'Perfekt für Startups, die ihr erstes Softwareprodukt oder MVP entwickeln.',
        features: [
          'Individuelle Webanwendung',
          'Mobil-kompatibles Design',
          'Basis API-Integration',
          'Datenbank-Setup',
        ],
        cta: 'Basic-Plan wählen',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Business',
        price: '€15.000',
        period: '/projekt',
        label: 'Am beliebtesten',
        description: 'Umfassende Lösung für Unternehmen, die robuste Softwaresysteme benötigen.',
        features: [
          'Alles im Basic-Paket',
          'ERP/B2B-Plattform',
          'Erweiterte API-Entwicklung',
          'Multi-User-System',
        ],
        cta: 'Business-Plan wählen',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '€30.000+',
        period: '/projekt',
        label: 'Enterprise-Level',
        description: 'Full-Scale Enterprise-Softwareentwicklung mit dediziertem Team-Support.',
        features: [
          'Alles im Business-Paket',
          'Custom SaaS-Plattform',
          'Sektorspezifische Funktionen',
          'Erweiterte Sicherheit',
        ],
        cta: 'Enterprise-Plan wählen',
        link: '#contact',
        highlighted: false
      }
    ]
  },
  services: {
    tag: "Unsere Dienstleistungen",
    titleDesign: "Design-Expertise",
    titleCode: "Produktlösungen",
    descriptionDesign: "Umfassende UX/UI-Designservices mit Fokus auf Benutzerfreundlichkeit, Flow-Optimierung und Produktstrategie.",
    descriptionCode: "Enterprise-Softwareentwicklung, die robuste, skalierbare Lösungen für moderne Unternehmen bietet.",
    loadMore: "Mehr anzeigen",
    showLess: "Weniger anzeigen",
    designServices: [
      {
        title: 'UX-Beratung',
        description: 'Strategische UX-Führung zur Optimierung von Benutzererlebnissen und Förderung des Geschäftswachstums durch datengestützte Erkenntnisse.'
      },
      {
        title: 'Produkt-Optimierung',
        description: 'End-to-End-Neugestaltung Ihres bestehenden Produktkonzepts und Ihrer Verkaufsstrategie mit intuitiven Schnittstellen, die Benutzer lieben.'
      },
      {
        title: 'Neugeschäftsentwicklung',
        description: 'End-to-End-Unterstützung zur Identifizierung von Wachstumschancen für Ihre Idee und Erstellung überzeugender digitaler Produkte.'
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Visualisieren und optimieren Sie jeden Touchpoint in der Reise Ihres Kunden für maximales Engagement.'
      },
      {
        title: 'CRM-Marketing',
        description: 'Design von Kundenbeziehungsstrategien, die die Loyalität steigern und dauerhafte Markenbindung schaffen.'
      }
    ],
    codeServices: [
      {
        title: 'ERP-Systeme',
        description: 'Umfassende Enterprise Resource Planning Lösungen, die Abläufe in Ihrer gesamten Organisation rationalisieren.'
      },
      {
        title: 'B2B-Plattformen',
        description: 'Skalierbare B2B Web- und Mobile-Plattformen, die Unternehmen verbinden und den Handel effizient vorantreiben.'
      },
      {
        title: 'SaaS-Entwicklung',
        description: 'Cloud-basierte Softwarelösungen, gebaut für Skalierung, Sicherheit und nahtlose Benutzererlebnisse.'
      },
      {
        title: 'Corporate Software',
        description: 'Spezialisierte Softwareentwicklung, maßgeschneidert auf Ihre Industriebranche und Geschäftsanforderungen.'
      },
      {
        title: 'Individuelle Lösungen',
        description: 'Maßgeschneiderte Unternehmensanwendungen zur Lösung Ihrer einzigartigen geschäftlichen Herausforderungen und Workflows.'
      }
    ]
  },
  focusAreas: {
    tag: "Themen im Fokus",
    titleDesign: "Unsere Design-Philosophie",
    titleCode: "Unser Tech-Stack",
    designFocus: [
      {
        title: 'Customer Journey Mapping',
        description: 'Wir visualisieren jeden Touchpoint in der Erfahrung Ihres Kunden und identifizieren Schmerzpunkte und Verbesserungsmöglichkeiten.',
        highlights: ['Benutzerforschung', 'Journey Visualisierung', 'Touchpoint Analyse', 'Messung']
      },
      {
        title: 'Neues Produktdesign',
        description: 'Erstellung schöner, intuitiver Schnittstellen, die mit Ihrer Marke übereinstimmen und Benutzer bei jeder Interaktion begeistern.',
        highlights: ['Interface Design', 'Design-Bibliothek', 'Prototyping', 'Werbe-Visuals']
      },
      {
        title: 'User Experience (UX)',
        description: 'Umfassende UX-Strategie, die Forschung, Tests und Iteration kombiniert, um nahtlose Benutzererlebnisse zu schaffen.',
        highlights: ['UX Forschung', 'Usability Testing', 'Informationsarchitektur', 'Interaktionsdesign']
      }
    ],
    codeFocus: [
      {
        title: 'ERP-Lösungen',
        description: 'Enterprise Resource Planning Systeme, die alle Aspekte Ihrer Geschäftsabläufe in einer einheitlichen Plattform integrieren.',
        highlights: ['Prozessautomatisierung', 'Echtzeit-Analytik', 'Multi-Modul Integration', 'Skalierbare Architektur']
      },
      {
        title: 'B2B & SaaS Plattformen',
        description: 'Bau robuster Web- und Mobile-Plattformen, konzipiert für B2B-Interaktionen und SaaS-Bereitstellung.',
        highlights: ['Multi-Tenant Architektur', 'API Entwicklung', 'Cloud Infrastruktur', 'Sicherheit zuerst']
      },
      {
        title: 'Sektorspezifische Software',
        description: 'Individuelle Unternehmenssoftware, zugeschnitten auf die einzigartigen Herausforderungen, Compliance-Anforderungen und Workflows Ihrer Branche.',
        highlights: ['Branchenexpertise', 'Spezialfunktionen', 'Compliance Ready', 'Integrationssupport']
      }
    ]
  },
  testimonials: {
    tag: "Kundenerfolg",
    title: "Was unsere Kunden sagen",
    descriptionDesign: "Vertraut von führenden Marken für außergewöhnliche Designerlebnisse.",
    descriptionCode: "Wir stärken Unternehmen mit Enterprise-Grade Softwarelösungen.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, RetailTech',
        company: 'E-Commerce',
        text: 'Das Customer Journey Mapping hat unser gesamtes Benutzererlebnis transformiert. Die Konversionsraten stiegen innerhalb von drei Monaten um 45%.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Produktdirektor',
        company: 'FinanceApp',
        text: 'Die UX-Beratung half uns, blinde Flecken zu identifizieren, von denen wir nichts wussten. Das Produktdesign war außergewöhnlich.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Marketing Managerin',
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
        role: 'VP Technologie',
        company: 'B2B Lösungen',
        text: 'Außergewöhnliche B2B-Plattform-Entwicklung. Das Team lieferte eine skalierbare Lösung, die unsere wachsenden Anforderungen perfekt erfüllt.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Gründer',
        company: 'SaaS Startup',
        text: 'Vom Konzept bis zum Deployment haben sie unsere gesamte SaaS-Plattform gebaut. Code-Qualität und Architektur sind erstklassig.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Sind Sie bereit, mit uns zu arbeiten?",
    titleCode: "Sind Sie bereit, mit uns zu arbeiten?",
    descDesign: "Lassen Sie uns heute beginnen, Designs zu schaffen, die Ihre digitale Präsenz transformieren und echte Ergebnisse liefern.",
    descCode: "Lassen Sie uns heute beginnen, Enterprise-Grade Software für Ihr Unternehmen zu bauen.",
    btnPrimary: "Lassen Sie uns starten",
    btnSecondary: "Gespräch buchen",
    statProjects: "Abgeschlossene Projekte",
    statSystems: "Erstellte Systeme",
    statSuccess: "Kundenerfolgsrate",
    statSupportDesign: "Verfügbarer Support",
    statSupportCode: "Entwicklungs-Support"
  },
  footer: {
    brandDescDesign: "Wir schaffen außergewöhnliche Benutzererlebnisse durch innovatives Design.",
    brandDescCode: "Wir bauen Enterprise-Softwarelösungen für moderne Unternehmen.",
    colServices: "Dienstleistungen",
    colCompany: "Unternehmen",
    colContact: "Kontakt",
    designServices: ['UX Berater', 'Produktdesign', 'Business Development', 'Journey Mapping', 'CRM Marketing'],
    codeServices: ['ERP Systeme', 'B2B Plattformen', 'SaaS Entwicklung', 'Individuelle Software', 'API Integration'],
    companyLinks: ['Über uns', 'Prozesse', 'Fallstudien', 'Karriere', 'Blog'],
    copyright: "Alle Rechte vorbehalten.",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    cookie: "Cookie-Richtlinie"
  }
};