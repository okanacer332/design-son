import { Dictionary } from '../types';

export const en: Dictionary = {
  header: {
    menu: "Menu",
    portfolio: "Portfolio",
    services: "Services",
    about: "About",
    contact: "Contact",
    readyText: "Ready to start your next project?",
    getInTouch: "Get in Touch"
  },
  hero: {
    designTag: "✨ Global Design Agency",
    designTitle: ["Modern", "Design", "Solutions"],
    designDesc: "We craft exceptional user experiences through customer journey mapping and UI design.",
    designBtnPrimary: "Start Your Project",
    designBtnSecondary: "View Our Work",
    codeTag: "💻 Enterprise Software Solutions",
    codeTitle: ["Tech", "Innovation", "Code"],
    codeDesc: "We build enterprise-grade ERP and SaaS platforms customized for every industry sector.",
    codeBtnPrimary: "Start Development",
    codeBtnSecondary: "View Solutions"
  },
  portfolio: {
    tag: "Our Work",
    title: "Featured Projects",
    description: "Explore our portfolio of successful design projects that transformed user experiences.",
    descriptionCode: "Discover enterprise solutions we've built for businesses across various industries.",
    viewAll: "View All Projects",
    designProjects: [
      {
        title: 'E-Commerce Platform',
        category: 'Product Design',
        description: 'Complete UX redesign increasing conversion by 45%'
      },
      {
        title: 'Banking App',
        category: 'Customer Journey',
        description: 'Mapped and optimized 12 key user touchpoints'
      },
      {
        title: 'SaaS Dashboard',
        category: 'UI Design',
        description: 'Modern interface with comprehensive design system'
      },
      {
        title: 'Healthcare Portal',
        category: 'UX Consulting',
        description: 'Streamlined patient experience and accessibility'
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
        description: 'Cloud-based PM tool serving 50K+ active users'
      },
      {
        title: 'Logistics Software',
        category: 'Custom Solution',
        description: 'Real-time tracking system for enterprise logistics'
      }
    ]
  }
};