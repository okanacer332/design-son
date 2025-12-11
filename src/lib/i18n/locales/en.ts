import { Dictionary } from '../types';

export const en: Dictionary = {
  header: {
    menu: "Menu",
    portfolio: "Portfolio",
    services: "Services",
    about: "About Us",
    contact: "Contact",
    readyText: "Ready to start your new project?",
    getInTouch: "Get in Touch"
  },
  hero: {
    designTag: "✨ End-to-End Product Management",
    designTitle: ["Empowering Business", "Effective Design", "Solutions"],
    designDesc: "We simplify product flows, empower interfaces, and create experiences that add value to the user.",
    designBtnPrimary: "Let's Discuss Your Project",
    designBtnSecondary: "Our Work",
    codeTag: "💻 Enterprise Software Solutions",
    codeTitle: ["Technology", "Innovation", "Code"],
    codeDesc: "We build customized, enterprise-grade ERP and SaaS platforms for every industry.",
    codeBtnPrimary: "Start Developing",
    codeBtnSecondary: "Explore Solutions"
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
    tag: "How to Start",
    title: "Choose Your Plan",
    description: "Flexible design packages tailored to your project needs and budget.",
    descriptionCode: "Scalable software solutions that will grow with your business.",
    learnMore: "Learn more about this plan →",
    customSolution: "Need a custom solution?",
    contactUs: "Contact us",
    forQuote: "and get a custom quote.",
    designPlans: [
      {
        name: 'Basic Starter',
        price: '$999',
        period: '/Month $18',
        label: 'For One-Time Projects',
        description: 'Perfect for Entrepreneurs and Small Businesses.',
        features: [
          'UI/UX Design Consultancy',
          'Web Design & Ad Banners',
          'Design up to 5 Pages',
          'Basic SEO Optimization',
        ],
        cta: 'Select Starter Plan',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professional',
        price: '$1799',
        period: '/project',
        label: 'Most Popular',
        description: 'Ideal for growing businesses needing comprehensive design solutions.',
        features: [
          'Corporate Website Design + Development',
          'Management Panel (Admin Panel)',
          'Setup of 2 Modules (HR, Warehouse, CRM, etc.)',
          'User Testing & Feedback',
        ],
        cta: 'Select Professional Plan',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$3499',
        period: '/starting price',
        label: 'For Large Teams',
        description: 'Comprehensive design partnership for established companies and complex projects.',
        features: [
          'Everything in Professional',
          'End-to-End Analysis & Development',
          'Priority Support & Maintenance',
          'Marketing Advice',
        ],
        cta: 'Get in Touch',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Basic Starter',
        price: '$999',
        period: '/Month $18',
        label: 'For One-Time Projects',
        description: 'Perfect for Entrepreneurs and Small Businesses.',
        features: [
          'UI/UX Design Consultancy',
          'Web Design & Ad Banners',
          'Design up to 5 Pages',
          'Basic SEO Optimization',
        ],
        cta: 'Select Starter Plan',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professional',
        price: '$1799',
        period: '/project',
        label: 'Most Popular',
        description: 'Ideal for growing businesses needing comprehensive design solutions.',
        features: [
          'Corporate Website Design + Development',
          'Management Panel (Admin Panel)',
          'Setup of 2 Modules (HR, Warehouse, CRM, etc.)',
          'User Testing & Feedback',
        ],
        cta: 'Select Professional Plan',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$3499',
        period: '/starting price',
        label: 'For Large Teams',
        description: 'Comprehensive design partnership for established companies and complex projects.',
        features: [
          'Everything in Professional',
          'End-to-End Analysis & Development',
          'Priority Support & Maintenance',
          'Marketing Advice',
        ],
        cta: 'Get in Touch',
        link: '#contact',
        highlighted: false
      }
    ],
  },
  services: {
    tag: "Our Services",
    titleDesign: "Design Expertise",
    titleCode: "Product Solutions",
    descriptionDesign: "Comprehensive UX/UI design services focusing on usability, flow optimization, and product strategy.",
    descriptionCode: "Enterprise-grade software development services delivering robust, scalable solutions for modern businesses.",
    loadMore: "Show More",
    showLess: "Show Less",
    designServices: [
      {
        title: 'UX Consultancy',
        description: 'Strategic UX guidance to optimize user experiences with data-driven insights and drive business growth.'
      },
      {
        title: 'Product Doctoring',
        description: 'End-to-end redesign of your existing product concept and sales strategy with intuitive interfaces users love.'
      },
      {
        title: 'New Business Development',
        description: 'End-to-end support to identify growth opportunities for your idea and create engaging digital products.'
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Visualize and optimize every touchpoint in your customer\'s journey for maximum engagement.'
      },
      {
        title: 'CRM Marketing',
        description: 'Design customer relationship strategies that increase loyalty and build lasting brand affinity.'
      }
    ],
    codeServices: [
      {
        title: 'ERP Systems',
        description: 'Comprehensive enterprise resource planning solutions organizing operations across your organization.'
      },
      {
        title: 'B2B Platforms',
        description: 'Scalable B2B web and mobile platforms connecting businesses and conducting trade efficiently.'
      },
      {
        title: 'SaaS Development',
        description: 'Cloud-based software-as-a-service solutions built for scale, security, and seamless user experiences.'
      },
      {
        title: 'Enterprise Software',
        description: 'Customized software development tailored specifically to your industry and business requirements.'
      },
      {
        title: 'Custom Solutions',
        description: 'Dedicated enterprise applications designed to solve your unique business challenges and workflows.'
      }
    ]
  },
  focusAreas: {
    tag: "Our Focus Areas",
    titleDesign: "Our Design Philosophy",
    titleCode: "Our Tech Stack",
    designFocus: [
      {
        title: 'Customer Journey Mapping',
        description: 'We visualize every touchpoint in your customer experience, identifying pain points and opportunities for improvement.',
        highlights: ['User Research', 'Journey Visualization', 'Touchpoint Analysis', 'Measurement']
      },
      {
        title: 'New Product Design',
        description: 'We delight users in every interaction by creating beautiful and intuitive interfaces aligned with your brand.',
        highlights: ['Interface Design', 'Design Library', 'Prototyping', 'Ad Visuals']
      },
      {
        title: 'User Experience (UX)',
        description: 'Comprehensive UX strategy combining research, testing, and iteration to create seamless user experiences.',
        highlights: ['UX Research', 'Usability Testing', 'Information Architecture', 'Interaction Design']
      },
    ],
    codeFocus: [
      {
        title: 'ERP Solutions',
        description: 'Enterprise resource planning systems integrating all aspects of your business operations into a single unified platform.',
        highlights: ['Process Automation', 'Real-time Analytics', 'Multi-module Integration', 'Scalable Architecture']
      },
      {
        title: 'B2B & SaaS Platforms',
        description: 'Robust web and mobile platforms designed for business-to-business interactions and software-as-a-service delivery.',
        highlights: ['Multi-tenant Architecture', 'API Development', 'Cloud Infrastructure', 'Security First']
      },
      {
        title: 'Industry Specific Software',
        description: 'Custom enterprise software tailored to your industry\'s unique challenges, compliance requirements, and workflows.',
        highlights: ['Industry Expertise', 'Custom Features', 'Compliance Ready', 'Integration Support']
      }
    ]
  },
  testimonials: {
    tag: "Client Success",
    title: "What Our Clients Say",
    descriptionDesign: "Trusted by leading brands to deliver exceptional design experiences.",
    descriptionCode: "Empowering businesses with enterprise-grade software solutions.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, RetailTech',
        company: 'E-Commerce',
        text: 'Customer journey mapping transformed our entire user experience. Conversion rates increased by 45% within three months.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Director of Product',
        company: 'FinanceApp',
        text: 'UX consultancy helped us identify blind spots we didn\'t even know existed. The product design work was exceptional.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Marketing Manager',
        company: 'HealthCare Plus',
        text: 'Great work on our CRM marketing strategy. The design team truly understands modern user behavior.',
        rating: 5
      }
    ],
    codeTestimonials: [
      {
        name: 'Michael Anderson',
        role: 'CTO, Manufacturing Co',
        company: 'Industrial Sector',
        text: 'The ERP system they built revolutionized our operations. Seamless integration across all departments.',
        rating: 5
      },
      {
        name: 'Lisa Thompson',
        role: 'VP of Technology',
        company: 'B2B Solutions',
        text: 'Exceptional B2B platform development. The team delivered a scalable solution that perfectly met our growing demands.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Founder',
        company: 'SaaS Startup',
        text: 'They built our entire SaaS platform from concept to deployment. Code quality and architecture are top-notch.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Ready to Work With Us?",
    titleCode: "Ready to Work With Us?",
    descDesign: "Let's start working today to create designs that transform your digital presence and deliver real results.",
    descCode: "Let's start working today to build enterprise-grade software for your business.",
    btnPrimary: "Let's Start",
    btnSecondary: "Discovery Call",
    statProjects: "Projects Completed",
    statSystems: "Systems Installed",
    statSuccess: "Client Success Rate",
    statSupportDesign: "Ongoing Support",
    statSupportCode: "Development Support"
  },
  footer: {
    brandDescDesign: "Creating exceptional user experiences through innovative design.",
    brandDescCode: "Building enterprise-grade software solutions for modern businesses.",
    colServices: "Services",
    colCompany: "Company",
    colContact: "Contact",
    designServices: ['UX Consultancy', 'Product Design', 'Business Development', 'Journey Mapping', 'CRM Marketing'],
    codeServices: ['ERP Systems', 'B2B Platforms', 'SaaS Development', 'Custom Software', 'API Integration'],
    companyLinks: ['About Us', 'Our Process', 'Case Studies', 'Careers', 'Blog'],
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy"
  }
};