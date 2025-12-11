import { Dictionary } from '../types';

export const fr: Dictionary = {
  header: {
    menu: "Menu",
    portfolio: "Portfolio",
    services: "Services",
    about: "À propos",
    contact: "Contact",
    readyText: "Prêt à démarrer votre nouveau projet ?",
    getInTouch: "Contactez-nous"
  },
  hero: {
    designTag: "✨ Gestion de Produit de Bout en Bout",
    designTitle: ["Solutions de", "Design Efficaces", "Pour Votre Entreprise"],
    designDesc: "Nous simplifions les flux de produits, renforçons les interfaces et créons des expériences qui ajoutent de la valeur à l'utilisateur.",
    designBtnPrimary: "Parlons de Votre Projet",
    designBtnSecondary: "Nos Réalisations",
    codeTag: "💻 Solutions Logicielles d'Entreprise",
    codeTitle: ["Technologie", "Innovation", "Code"],
    codeDesc: "Nous construisons des plateformes ERP et SaaS sur mesure, de niveau entreprise, pour chaque secteur.",
    codeBtnPrimary: "Commencer le Développement",
    codeBtnSecondary: "Explorer les Solutions"
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
    tag: "Comment Commencer",
    title: "Choisissez Votre Plan",
    description: "Des forfaits de design flexibles adaptés aux besoins et au budget de votre projet.",
    descriptionCode: "Des solutions logicielles évolutives qui grandiront avec votre entreprise.",
    learnMore: "En savoir plus sur ce plan →",
    customSolution: "Besoin d'une solution personnalisée ?",
    contactUs: "Contactez-nous",
    forQuote: "et obtenez un devis personnalisé.",
    designPlans: [
      {
        name: 'Démarrage Basique',
        price: '$999',
        period: '/Mois $18',
        label: 'Pour Projets Uniques',
        description: 'Parfait pour les entrepreneurs et les petites entreprises.',
        features: [
          'Consulting Design UI/UX',
          'Web Design & Bannières Publicitaires',
          'Design jusqu\'à 5 pages',
          'Optimisation SEO de base',
        ],
        cta: 'Choisir le Plan Démarrage',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professionnel',
        price: '$1799',
        period: '/projet',
        label: 'Le Plus Populaire',
        description: 'Idéal pour les entreprises en croissance nécessitant des solutions de design complètes.',
        features: [
          'Design + Développement Site Web Corporate',
          'Panneau d\'Administration (Admin Panel)',
          'Installation de 2 Modules (RH, Entrepôt, CRM etc.)',
          'Tests Utilisateurs & Feedback',
        ],
        cta: 'Choisir le Plan Professionnel',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Entreprise',
        price: '$3499',
        period: '/à partir de',
        label: 'Pour Grandes Équipes',
        description: 'Partenariat de design complet pour les entreprises établies et les projets complexes.',
        features: [
          'Tout ce qui est dans le pack Professionnel',
          'Analyse & Développement de Bout en Bout',
          'Support Prioritaire & Maintenance',
          'Conseils Marketing',
        ],
        cta: 'Contactez-nous',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      // Same structure as designPlans, repeating strictly for type consistency if needed, 
      // otherwise reusing translated strings logic
      {
        name: 'Démarrage Basique',
        price: '$999',
        period: '/Mois $18',
        label: 'Pour Projets Uniques',
        description: 'Parfait pour les entrepreneurs et les petites entreprises.',
        features: [
          'Consulting Design UI/UX',
          'Web Design & Bannières Publicitaires',
          'Design jusqu\'à 5 pages',
          'Optimisation SEO de base',
        ],
        cta: 'Choisir le Plan Démarrage',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professionnel',
        price: '$1799',
        period: '/projet',
        label: 'Le Plus Populaire',
        description: 'Idéal pour les entreprises en croissance nécessitant des solutions de design complètes.',
        features: [
          'Design + Développement Site Web Corporate',
          'Panneau d\'Administration (Admin Panel)',
          'Installation de 2 Modules (RH, Entrepôt, CRM etc.)',
          'Tests Utilisateurs & Feedback',
        ],
        cta: 'Choisir le Plan Professionnel',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Entreprise',
        price: '$3499',
        period: '/à partir de',
        label: 'Pour Grandes Équipes',
        description: 'Partenariat de design complet pour les entreprises établies et les projets complexes.',
        features: [
          'Tout ce qui est dans le pack Professionnel',
          'Analyse & Développement de Bout en Bout',
          'Support Prioritaire & Maintenance',
          'Conseils Marketing',
        ],
        cta: 'Contactez-nous',
        link: '#contact',
        highlighted: false
      }
    ],
  },
  services: {
    tag: "Nos Services",
    titleDesign: "Expertise Design",
    titleCode: "Solutions Produits",
    descriptionDesign: "Services complets de design UX/UI axés sur l'utilisabilité, l'optimisation des flux et la stratégie produit.",
    descriptionCode: "Services de développement logiciel de niveau entreprise offrant des solutions robustes et évolutives.",
    loadMore: "Voir Plus",
    showLess: "Voir Moins",
    designServices: [
      {
        title: 'Consulting UX',
        description: 'Guidance UX stratégique pour optimiser les expériences utilisateurs avec des insights basés sur les données.'
      },
      {
        title: 'Product Doctoring',
        description: 'Refonte de bout en bout de votre concept produit et stratégie de vente avec des interfaces intuitives.'
      },
      {
        title: 'Développement Nouveau Business',
        description: 'Soutien de bout en bout pour identifier les opportunités de croissance et créer des produits numériques attrayants.'
      },
      {
        title: 'Cartographie Parcours Client',
        description: 'Visualisez et optimisez chaque point de contact dans le parcours de votre client pour un engagement maximal.'
      },
      {
        title: 'Marketing CRM',
        description: 'Conception de stratégies de relation client qui augmentent la fidélité et construisent un attachement durable à la marque.'
      }
    ],
    codeServices: [
      {
        title: 'Systèmes ERP',
        description: 'Solutions complètes de planification des ressources d\'entreprise organisant les opérations de votre organisation.'
      },
      {
        title: 'Plateformes B2B',
        description: 'Plateformes web et mobiles B2B évolutives connectant les entreprises et facilitant le commerce.'
      },
      {
        title: 'Développement SaaS',
        description: 'Solutions logicielles en tant que service basées sur le cloud, conçues pour l\'échelle et la sécurité.'
      },
      {
        title: 'Logiciel d\'Entreprise',
        description: 'Développement de logiciels sur mesure adaptés spécifiquement à votre secteur et à vos besoins commerciaux.'
      },
      {
        title: 'Solutions Personnalisées',
        description: 'Applications d\'entreprise dédiées conçues pour résoudre vos défis commerciaux et flux de travail uniques.'
      }
    ]
  },
  focusAreas: {
    tag: "Nos Domaines d'Action",
    titleDesign: "Notre Philosophie de Design",
    titleCode: "Notre Stack Technique",
    designFocus: [
      {
        title: 'Cartographie Parcours Client',
        description: 'Nous visualisons chaque point de contact, identifiant les points de friction et les opportunités d\'amélioration.',
        highlights: ['Recherche Utilisateur', 'Visualisation de Parcours', 'Analyse des Points de Contact', 'Mesure']
      },
      {
        title: 'Design de Nouveaux Produits',
        description: 'Nous ravissons les utilisateurs en créant des interfaces belles et intuitives alignées avec votre marque.',
        highlights: ['Design d\'Interface', 'Bibliothèque de Design', 'Prototypage', 'Visuels Publicitaires']
      },
      {
        title: 'Expérience Utilisateur (UX)',
        description: 'Stratégie UX complète combinant recherche, tests et itération pour créer des expériences fluides.',
        highlights: ['Recherche UX', 'Tests d\'Utilisabilité', 'Architecture de l\'Information', 'Design d\'Interaction']
      },
    ],
    codeFocus: [
      {
        title: 'Solutions ERP',
        description: 'Systèmes ERP intégrant tous les aspects de vos opérations commerciales dans une plateforme unifiée.',
        highlights: ['Automatisation des Processus', 'Analytique Temps Réel', 'Intégration Multi-modules', 'Architecture Évolutive']
      },
      {
        title: 'Plateformes B2B & SaaS',
        description: 'Plateformes web et mobiles robustes conçues pour les interactions interentreprises et la livraison SaaS.',
        highlights: ['Architecture Multi-locataire', 'Développement API', 'Infrastructure Cloud', 'Sécurité d\'Abord']
      },
      {
        title: 'Logiciel Spécifique au Secteur',
        description: 'Logiciels d\'entreprise sur mesure adaptés aux défis uniques, aux exigences de conformité et aux flux de votre secteur.',
        highlights: ['Expertise Sectorielle', 'Fonctionnalités Personnalisées', 'Prêt pour la Conformité', 'Support d\'Intégration']
      }
    ]
  },
  testimonials: {
    tag: "Succès Client",
    title: "Ce Que Disent Nos Clients",
    descriptionDesign: "Les grandes marques nous font confiance pour offrir des expériences de design exceptionnelles.",
    descriptionCode: "Nous donnons aux entreprises les moyens d'agir grâce à des solutions logicielles de niveau entreprise.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'PDG, RetailTech',
        company: 'E-Commerce',
        text: 'La cartographie du parcours client a transformé toute notre expérience utilisateur. Les taux de conversion ont augmenté de 45%.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Directeur Produit',
        company: 'FinanceApp',
        text: 'Le consulting UX nous a aidés à identifier des angles morts que nous ignorions. Le travail de design produit était exceptionnel.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Responsable Marketing',
        company: 'HealthCare Plus',
        text: 'Excellent travail sur notre stratégie CRM. L\'équipe de design comprend vraiment le comportement moderne des utilisateurs.',
        rating: 5
      }
    ],
    codeTestimonials: [
      {
        name: 'Michael Anderson',
        role: 'CTO, Manufacturing Co',
        company: 'Secteur Industriel',
        text: 'Le système ERP qu\'ils ont construit a révolutionné nos opérations. Intégration transparente entre tous les départements.',
        rating: 5
      },
      {
        name: 'Lisa Thompson',
        role: 'VP Technologie',
        company: 'B2B Solutions',
        text: 'Développement de plateforme B2B exceptionnel. L\'équipe a livré une solution évolutive qui a parfaitement répondu à nos demandes.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Fondateur',
        company: 'Startup SaaS',
        text: 'Ils ont construit toute notre plateforme SaaS du concept au déploiement. La qualité du code et l\'architecture sont de haut niveau.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Prêt à Travailler Avec Nous ?",
    titleCode: "Prêt à Travailler Avec Nous ?",
    descDesign: "Commençons aujourd'hui à créer des designs qui transforment votre présence numérique et donnent de vrais résultats.",
    descCode: "Commençons aujourd'hui à construire des logiciels de niveau entreprise pour votre activité.",
    btnPrimary: "Commençons",
    btnSecondary: "Appel Découverte",
    statProjects: "Projets Terminés",
    statSystems: "Systèmes Installés",
    statSuccess: "Taux de Succès",
    statSupportDesign: "Support Continu",
    statSupportCode: "Support Développement"
  },
  footer: {
    brandDescDesign: "Créer des expériences utilisateurs exceptionnelles grâce à un design innovant.",
    brandDescCode: "Construire des solutions logicielles d'entreprise pour les sociétés modernes.",
    colServices: "Services",
    colCompany: "Entreprise",
    colContact: "Contact",
    designServices: ['Consultant UX', 'Design Produit', 'Business Dev', 'Cartographie Parcours', 'Marketing CRM'],
    codeServices: ['Systèmes ERP', 'Plateformes B2B', 'Développement SaaS', 'Logiciel Personnalisé', 'Intégration API'],
    companyLinks: ['À Propos', 'Nos Processus', 'Études de Cas', 'Carrières', 'Blog'],
    copyright: "Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    cookie: "Politique de Cookies"
  }
};