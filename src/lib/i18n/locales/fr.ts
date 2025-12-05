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
    designTag: "✨ Agence de Design Mondiale",
    designTitle: ["Solutions", "de Design", "Modernes"],
    designDesc: "Nous créons des expériences exceptionnelles grâce à la cartographie du parcours client et au design UI.",
    designBtnPrimary: "Parlons de votre projet",
    designBtnSecondary: "Nos Réalisations",
    codeTag: "💻 Solutions Logicielles d'Entreprise",
    codeTitle: ["Technologie", "Innovation", "Code"],
    codeDesc: "Nous construisons des plateformes ERP et SaaS d'entreprise personnalisées pour chaque secteur.",
    codeBtnPrimary: "Démarrer le Développement",
    codeBtnSecondary: "Voir les Solutions"
  },
  portfolio: {
    tag: "Nos Projets",
    title: "Travaux en Vedette",
    description: "Découvrez nos projets de design réussis qui transforment les expériences utilisateur.",
    descriptionCode: "Examinez les solutions de design d'entreprise que nous avons développées pour des entreprises de différents secteurs.",
    viewAll: "Voir Tous les Projets",
    designProjects: [
      {
        title: 'Plateforme Logistique',
        category: 'Design Produit',
        description: 'Refonte UX complète augmentant le taux de conversion de 45%'
      },
      {
        title: 'Plateforme Éducative',
        category: 'Parcours B2C',
        description: 'Optimisé avec un accent sur le Design de Produit et de Service'
      },
      {
        title: 'Plateforme Cloud',
        category: 'Design UI',
        description: 'Interface moderne avec un système de design complet'
      },
      {
        title: 'Plateforme Hôtelière',
        category: 'Conseil UX',
        description: 'Amélioration de l\'expérience de découverte et d\'achat client'
      }
    ],
    codeProjects: [
      {
        title: 'ERP Industriel',
        category: 'Système ERP',
        description: 'ERP à grande échelle gérant 500+ utilisateurs sur 12 sites'
      },
      {
        title: 'Marketplace B2B',
        category: 'Plateforme B2B',
        description: 'Plateforme multi-vendeurs traitant 10K+ transactions quotidiennes'
      },
      {
        title: 'SaaS Gestion de Projet',
        category: 'Dév. SaaS',
        description: 'Outil basé sur le cloud servant 50K+ utilisateurs actifs'
      },
      {
        title: 'Logiciel Logistique',
        category: 'Solution Sur Mesure',
        description: 'Système de suivi en temps réel pour la logistique d\'entreprise'
      }
    ]
  },
  pricing: {
    tag: "Comment Commencer",
    title: "Choisissons Votre Plan",
    description: "Des forfaits de design flexibles adaptés aux besoins et au budget de votre projet.",
    descriptionCode: "Des solutions logicielles évolutives qui grandissent avec votre entreprise.",
    viewDetails: "Voir Détails",
    learnMore: "Plus d'infos sur ce plan →",
    customSolution: "Besoin d'une solution personnalisée ?",
    contactUs: "Contactez-nous",
    forQuote: "pour un devis sur mesure.",
    designPlans: [
      {
        name: 'Starter',
        price: '2 500 €',
        period: '/projet',
        label: 'Pour Projets Ponctuels',
        description: 'Parfait pour les entrepreneurs et les petites entreprises.',
        features: [
          'Conseil Design UI/UX',
          'Design Web & Bannières Pub',
          'Jusqu\'à 5 Pages de Design',
          'Guide de Marque Basique',
        ],
        cta: 'Choisir Plan Starter',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professionnel',
        price: '5 000 €',
        period: '/projet',
        label: 'Le Plus Populaire',
        description: 'Idéal pour les entreprises en croissance ayant besoin de solutions de design complètes.',
        features: [
          'Tout du Pack Starter',
          'Cartographie Parcours Client',
          'Jusqu\'à 15 Pages de Design',
          'Système de Design Complet',
        ],
        cta: 'Choisir Plan Professionnel',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Entreprise',
        price: '10 000 €+',
        period: '/projet',
        label: 'Pour Grandes Équipes',
        description: 'Partenariat de design complet pour entreprises établies et projets complexes.',
        features: [
          'Tout du Pack Professionnel',
          'Design Produit de Bout en Bout',
          'Design 30+ Pages et Menus',
          'Conseils Marketing',
        ],
        cta: 'Choisir Plan Entreprise',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Basique',
        price: '5 000 €',
        period: '/projet',
        label: 'Idéal pour MVP',
        description: 'Parfait pour les startups construisant leur premier produit logiciel ou MVP.',
        features: [
          'Application Web Sur Mesure',
          'Design Compatible Mobile',
          'Intégration API Basique',
          'Configuration Base de Données',
        ],
        cta: 'Choisir Plan Basique',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Business',
        price: '15 000 €',
        period: '/projet',
        label: 'Le Plus Populaire',
        description: 'Solution complète pour les entreprises nécessitant des systèmes logiciels robustes.',
        features: [
          'Tout du Pack Basique',
          'Plateforme ERP/B2B',
          'Dév. API Avancé',
          'Système Multi-utilisateurs',
        ],
        cta: 'Choisir Plan Business',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Corporatif',
        price: '30 000 €+',
        period: '/projet',
        label: 'Niveau Entreprise',
        description: 'Développement logiciel d\'entreprise à grande échelle avec support d\'équipe dédié.',
        features: [
          'Tout du Pack Business',
          'Plateforme SaaS Sur Mesure',
          'Fonctions Spécifiques Secteur',
          'Sécurité Avancée',
        ],
        cta: 'Choisir Plan Corporatif',
        link: '#contact',
        highlighted: false
      }
    ]
  },
  services: {
    tag: "Nos Services",
    titleDesign: "Expertise Design",
    titleCode: "Solutions Produit",
    descriptionDesign: "Services complets de design UX/UI axés sur l'utilisabilité, l'optimisation des flux et la stratégie produit.",
    descriptionCode: "Services de développement logiciel d'entreprise offrant des solutions robustes et évolutives pour les entreprises modernes.",
    loadMore: "Voir Plus",
    showLess: "Voir Moins",
    designServices: [
      {
        title: 'Conseil UX',
        description: 'Guidance stratégique UX pour optimiser les expériences utilisateur et stimuler la croissance grâce à des insights basés sur les données.'
      },
      {
        title: 'Diagnostic Produit',
        description: 'Refonte complète de votre concept produit existant et de votre stratégie de vente avec des interfaces intuitives que les utilisateurs adorent.'
      },
      {
        title: 'Développement Commercial',
        description: 'Support complet pour identifier les opportunités de croissance pour votre idée et créer des produits numériques convaincants.'
      },
      {
        title: 'Cartographie Parcours Client',
        description: 'Visualisez et optimisez chaque point de contact dans le parcours de votre client pour un engagement maximal.'
      },
      {
        title: 'Marketing CRM',
        description: 'Conception de stratégies de relation client qui augmentent la rétention et créent une fidélité à la marque durable.'
      }
    ],
    codeServices: [
      {
        title: 'Systèmes ERP',
        description: 'Solutions complètes de planification des ressources d\'entreprise qui rationalisent les opérations dans toute votre organisation.'
      },
      {
        title: 'Plateformes B2B',
        description: 'Plateformes web et mobiles B2B évolutives qui connectent les entreprises et stimulent le commerce efficacement.'
      },
      {
        title: 'Développement SaaS',
        description: 'Solutions logicielles basées sur le cloud, conçues pour l\'échelle, la sécurité et des expériences utilisateur fluides.'
      },
      {
        title: 'Logiciel Corporatif',
        description: 'Développement logiciel spécialisé adapté à votre secteur industriel et à vos exigences commerciales.'
      },
      {
        title: 'Solutions Sur Mesure',
        description: 'Applications d\'entreprise sur mesure conçues pour résoudre vos défis commerciaux uniques et vos flux de travail.'
      }
    ]
  },
  focusAreas: {
    tag: "Sujets Ciblés",
    titleDesign: "Notre Philosophie Design",
    titleCode: "Notre Stack Technique",
    designFocus: [
      {
        title: 'Cartographie Parcours Client',
        description: 'Nous visualisons chaque point de contact dans l\'expérience de votre client, identifiant les points de friction et les opportunités d\'amélioration.',
        highlights: ['Recherche Utilisateur', 'Visualisation Parcours', 'Analyse Points Contact', 'Mesure']
      },
      {
        title: 'Design Nouveau Produit',
        description: 'Création d\'interfaces belles et intuitives qui s\'alignent avec votre marque et ravissent les utilisateurs à chaque interaction.',
        highlights: ['Design Interface', 'Bibliothèque Design', 'Prototypage', 'Visuels Publicitaires']
      },
      {
        title: 'Expérience Utilisateur (UX)',
        description: 'Stratégie UX complète combinant recherche, tests et itération pour créer des expériences utilisateur fluides.',
        highlights: ['Recherche UX', 'Tests Utilisabilité', 'Architecture Information', 'Design Interaction']
      }
    ],
    codeFocus: [
      {
        title: 'Solutions ERP',
        description: 'Systèmes de planification des ressources d\'entreprise intégrant tous les aspects de vos opérations commerciales dans une plateforme unifiée.',
        highlights: ['Automatisation Processus', 'Analytique Temps Réel', 'Intégration Multi-module', 'Architecture Évolutive']
      },
      {
        title: 'Plateformes B2B & SaaS',
        description: 'Construction de plateformes web et mobiles robustes conçues pour les interactions B2B et la livraison SaaS.',
        highlights: ['Architecture Multi-locataire', 'Dév. API', 'Infra. Cloud', 'Sécurité d\'Abord']
      },
      {
        title: 'Logiciel Sectoriel',
        description: 'Logiciel corporatif personnalisé adapté aux défis uniques, aux exigences de conformité et aux flux de travail de votre industrie.',
        highlights: ['Expertise Industrie', 'Fonctions Sur Mesure', 'Conformité Prête', 'Support Intégration']
      }
    ]
  },
  testimonials: {
    tag: "Succès Client",
    title: "Ce Que Disent Nos Clients",
    descriptionDesign: "Confiance des grandes marques pour offrir des expériences de design exceptionnelles.",
    descriptionCode: "Propulser les entreprises avec des solutions logicielles de niveau entreprise.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'PDG, RetailTech',
        company: 'E-Commerce',
        text: 'La cartographie du parcours client a transformé toute notre expérience utilisateur. Les taux de conversion ont augmenté de 45% en trois mois.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Directeur Produit',
        company: 'FinanceApp',
        text: 'Le conseil UX nous a aidés à identifier des angles morts que nous ignorions. Le travail de design produit était exceptionnel.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Responsable Marketing',
        company: 'HealthCare Plus',
        text: 'Excellent travail sur notre stratégie marketing CRM. L\'équipe de design comprend vraiment le comportement de l\'utilisateur moderne.',
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
        company: 'Solutions B2B',
        text: 'Développement de plateforme B2B exceptionnel. L\'équipe a livré une solution évolutive qui répond parfaitement à nos demandes croissantes.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Fondateur',
        company: 'Startup SaaS',
        text: 'Du concept au déploiement, ils ont construit toute notre plateforme SaaS. La qualité du code et l\'architecture sont de premier ordre.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Êtes-vous prêt à travailler avec nous ?",
    titleCode: "Êtes-vous prêt à travailler avec nous ?",
    descDesign: "Commençons à travailler dès aujourd'hui pour créer des designs qui transforment votre présence numérique et apportent des résultats réels.",
    descCode: "Commençons à travailler dès aujourd'hui pour construire des logiciels d'entreprise pour votre activité.",
    btnPrimary: "Commençons",
    btnSecondary: "Réserver un Appel",
    statProjects: "Projets Terminés",
    statSystems: "Systèmes Construits",
    statSuccess: "Taux de Succès Client",
    statSupportDesign: "Support Disponible",
    statSupportCode: "Support Dév."
  },
  footer: {
    brandDescDesign: "Nous créons des expériences utilisateur exceptionnelles grâce à un design innovant.",
    brandDescCode: "Nous construisons des solutions logicielles d'entreprise pour les entreprises modernes.",
    colServices: "Services",
    colCompany: "Entreprise",
    colContact: "Contact",
    designServices: ['Conseil UX', 'Design Produit', 'Dév. Affaires', 'Cartographie Parcours', 'Marketing CRM'],
    codeServices: ['Systèmes ERP', 'Plateformes B2B', 'Dév. SaaS', 'Logiciel Sur Mesure', 'Intégration API'],
    companyLinks: ['À Propos', 'Processus', 'Études de Cas', 'Carrières', 'Blog'],
    copyright: "Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
    cookie: "Politique de Cookies"
  }
};