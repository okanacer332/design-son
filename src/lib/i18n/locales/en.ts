import { Dictionary } from '../types';

export const en: Dictionary = {
  header: {
    menu: "Menu",
    portfolio: "Portfolio",
    services: "Services",
    about: "About",
    contact: "Contact",
    readyText: "Ready to start your new project?",
    getInTouch: "Get in Touch"
  },
  hero: {
    designTag: "✨ Global Design Agency",
    designTitle: ["Modern", "Design", "Solutions"],
    designDesc: "We create exceptional experiences through customer journey mapping and UI design.",
    designBtnPrimary: "Let's Discuss Your Project",
    designBtnSecondary: "Our Work",
    codeTag: "💻 Enterprise Software Solutions",
    codeTitle: ["Technology", "Innovation", "Code"],
    codeDesc: "We build customized, enterprise-grade ERP and SaaS platforms for every sector.",
    codeBtnPrimary: "Start Development",
    codeBtnSecondary: "View Solutions"
  },
  portfolio: {
    tag: "Our Projects",
    title: "Featured Works",
    description: "Discover our successful design projects that transform user experiences.",
    descriptionCode: "Examine the enterprise design solutions we developed for businesses in different sectors.",
    viewAll: "View All Projects",
    designProjects: [
      {
        title: 'Logistics Platform',
        category: 'Product Design',
        description: 'Complete UX renewal increasing conversion rate by 45%'
      },
      {
        title: 'Education Platform',
        category: 'B2C Journey',
        description: 'Optimized with a focus on Product and Service Design'
      },
      {
        title: 'Cloud Platform',
        category: 'UI Design',
        description: 'Modern interface with a comprehensive design system'
      },
      {
        title: 'Hotel & Booking Platform',
        category: 'UX Consulting',
        description: 'Customer discovery and purchasing experience improved'
      }
    ],
    codeProjects: [
      {
        title: 'Manufacturing ERP',
        category: 'ERP System',
        description: 'Full-scale ERP managing 500+ users across 12 facilities'
      },
      {
        title: 'B2B Marketplace',
        category: 'B2B Platform',
        description: 'Multi-vendor platform processing 10K+ transactions daily'
      },
      {
        title: 'Project Management SaaS',
        category: 'SaaS Development',
        description: 'Cloud-based tool serving 50K+ active users'
      },
      {
        title: 'Logistics Software',
        category: 'Custom Solution',
        description: 'Real-time tracking system for enterprise logistics'
      }
    ]
  },
  pricing: {
    tag: "How Can We Start",
    title: "Let's Choose Your Plan",
    description: "Flexible design packages suited to your project needs and budget.",
    descriptionCode: "Scalable software solutions that grow with your business.",
    viewDetails: "View Details",
    learnMore: "More info about this plan →",
    customSolution: "Need a custom solution?",
    contactUs: "Contact us",
    forQuote: "and get a custom quote.",
    designPlans: [
      {
        name: 'Starter',
        price: '$2,500',
        period: '/project',
        label: 'For One-off Projects',
        description: 'Perfect for Entrepreneurs and Small Businesses.',
        features: [
          'UI/UX Design Consultation',
          'Web Design & Ad Banner',
          'Up to 5 Pages Design',
          'Basic Brand Guidelines',
          '2 Revisions',
          'Email Support'
        ],
        cta: 'Choose Starter Plan',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professional',
        price: '$5,000',
        period: '/project',
        label: 'Most Popular',
        description: 'Ideal for growing businesses needing comprehensive design solutions.',
        features: [
          'Everything in Starter',
          'Customer Journey Mapping',
          'Up to 15 Pages Design',
          'Comprehensive Design System',
          'Interactive Prototypes',
          '5 Revisions',
          'Priority Support',
          'SEO and Mobile Friendly'
        ],
        cta: 'Choose Professional Plan',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$10,000+',
        period: '/project',
        label: 'For Large Teams',
        description: 'Comprehensive design partnership for established companies and complex projects.',
        features: [
          'Everything in Professional',
          'End-to-end Product Design',
          '30+ Pages and Menu Design',
          'Marketing Advice',
          'Business Development Consulting',
          'Team Training',
          'Dedicated Designer',
          '24/7 Priority Support',
          'Continuous Maintenance'
        ],
        cta: 'Choose Enterprise Plan',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Basic',
        price: '$5,000',
        period: '/project',
        label: 'Best for MVP',
        description: 'Perfect for startups building their first software product or MVP.',
        features: [
          'Custom Web Application',
          'Mobile Compatible Design',
          'Basic API Integration',
          'Database Setup',
          '3 Months Support',
          'Documentation'
        ],
        cta: 'Choose Basic Plan',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Business',
        price: '$15,000',
        period: '/project',
        label: 'Most Popular',
        description: 'Comprehensive solution for businesses needing robust software systems.',
        features: [
          'Everything in Basic',
          'ERP/B2B Platform',
          'Advanced API Development',
          'Multi-user System',
          'Admin Panel (Dashboard)',
          'Payment System Integration',
          '6 Months Support',
          'Security Audit',
          'Performance Optimization'
        ],
        cta: 'Choose Business Plan',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$30,000+',
        period: '/project',
        label: 'Enterprise Level',
        description: 'Full-scale enterprise software development with dedicated team support.',
        features: [
          'Everything in Business',
          'Custom SaaS Platform',
          'Sector-Specific Features',
          'Advanced Security',
          'Microservices Architecture',
          'CI/CD Processes',
          'Load Balancing',
          'Dedicated Software Team',
          '12 Months Support',
          'Training & Onboarding'
        ],
        cta: 'Choose Enterprise Plan',
        link: '#contact',
        highlighted: false
      }
    ]
  },
  services: {
    tag: "Our Services",
    titleDesign: "Design Expertise",
    titleCode: "Product Solutions",
    descriptionDesign: "Comprehensive UX/UI design services focusing on usability, flow optimization, and product strategy.",
    descriptionCode: "Enterprise-grade software development services offering robust, scalable solutions for modern businesses.",
    loadMore: "Show More",
    showLess: "Show Less",
    designServices: [
      {
        title: 'UX Consulting',
        description: 'Strategic UX guidance to optimize user experiences and drive business growth through data-driven insights.'
      },
      {
        title: 'Product Doctoring',
        description: 'End-to-end redesign of your existing product concept and sales strategy with intuitive interfaces users love.'
      },
      {
        title: 'New Business Development',
        description: 'End-to-end support to identify growth opportunities for your idea and create compelling digital products.'
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Visualize and optimize every touchpoint in your customer\'s journey for maximum engagement.'
      },
      {
        title: 'CRM Marketing',
        description: 'Design customer relationship strategies that boost retention and create lasting brand loyalty.'
      }
    ],
    codeServices: [
      {
        title: 'ERP Systems',
        description: 'Comprehensive enterprise resource planning solutions that streamline operations across your organization.'
      },
      {
        title: 'B2B Platforms',
        description: 'Scalable B2B web and mobile platforms that connect businesses and drive commerce efficiently.'
      },
      {
        title: 'SaaS Development',
        description: 'Cloud-based software solutions built for scale, security, and seamless user experiences.'
      },
      {
        title: 'Corporate Software',
        description: 'Specialized software development tailored to your industry sector and business requirements.'
      },
      {
        title: 'Custom Solutions',
        description: 'Bespoke enterprise applications designed to solve your unique business challenges and workflows.'
      }
    ]
  },
  focusAreas: {
    tag: "Topics We Focus On",
    titleDesign: "Our Design Philosophy",
    titleCode: "Our Tech Stack",
    designFocus: [
      {
        title: 'Customer Journey Mapping',
        description: 'We visualize every touchpoint in your customer\'s experience, identifying pain points and opportunities for improvement.',
        highlights: ['User Research', 'Journey Visualization', 'Touchpoint Analysis', 'Measurement']
      },
      {
        title: 'New Product Design',
        description: 'Creating beautiful, intuitive interfaces that align with your brand and delight users at every interaction.',
        highlights: ['Interface Design', 'Design Library', 'Prototyping', 'Ad Visuals']
      },
      {
        title: 'User Experience (UX)',
        description: 'Comprehensive UX strategy combining research, testing, and iteration to create seamless user experiences.',
        highlights: ['UX Research', 'Usability Testing', 'Information Architecture', 'Interaction Design']
      }
    ],
    codeFocus: [
      {
        title: 'ERP Solutions',
        description: 'Enterprise resource planning systems integrating all aspects of your business operations into a unified platform.',
        highlights: ['Process Automation', 'Real-time Analytics', 'Multi-module Integration', 'Scalable Architecture']
      },
      {
        title: 'B2B & SaaS Platforms',
        description: 'Building robust web and mobile platforms designed for B2B interactions and SaaS delivery.',
        highlights: ['Multi-tenant Architecture', 'API Development', 'Cloud Infrastructure', 'Security First']
      },
      {
        title: 'Sector-Specific Software',
        description: 'Custom corporate software tailored to your industry\'s unique challenges, compliance requirements, and workflows.',
        highlights: ['Industry Expertise', 'Custom Features', 'Compliance Ready', 'Integration Support']
      }
    ]
  },
  testimonials: {
    tag: "Client Success",
    title: "What Our Clients Say",
    descriptionDesign: "Trusted by leading brands for exceptional design experiences.",
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
        role: 'Product Director',
        company: 'FinanceApp',
        text: 'UX consulting helped us identify blind spots we didn\'t know existed. The product design work was exceptional.',
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
        role: 'VP Technology',
        company: 'B2B Solutions',
        text: 'Exceptional B2B platform development. The team delivered a scalable solution that perfectly meets our growing demands.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Founder',
        company: 'SaaS Startup',
        text: 'From concept to deployment, they built our entire SaaS platform. Code quality and architecture are top-notch.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "Are You Ready to Work With Us?",
    titleCode: "Are You Ready to Work With Us?",
    descDesign: "Let's start working today to create designs that transform your digital presence and provide real results.",
    descCode: "Let's start working today to build enterprise-grade software for your business.",
    btnPrimary: "Let's Start",
    btnSecondary: "Book a Call",
    statProjects: "Projects Completed",
    statSystems: "Systems Built",
    statSuccess: "Client Success Rate",
    statSupportDesign: "Available Support",
    statSupportCode: "Development Support"
  },
  footer: {
    brandDescDesign: "We create exceptional user experiences through innovative design.",
    brandDescCode: "We build enterprise-grade software solutions for modern businesses.",
    colServices: "Services",
    colCompany: "Company",
    colContact: "Contact",
    designServices: ['UX Consultant', 'Product Design', 'Business Development', 'Journey Mapping', 'CRM Marketing'],
    codeServices: ['ERP Systems', 'B2B Platforms', 'SaaS Development', 'Custom Software', 'API Integration'],
    companyLinks: ['About', 'Processes', 'Case Studies', 'Careers', 'Blog'],
    copyright: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy"
  }
};