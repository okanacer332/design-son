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
  },
  pricing: {
    tag: "Hire Me",
    title: "Choose Your Plan",
    description: "Flexible design packages tailored to your project needs and budget.",
    descriptionCode: "Scalable development solutions designed to grow with your business.",
    viewDetails: "View Details",
    learnMore: "Learn more about this plan →",
    customSolution: "Need a custom solution?",
    contactUs: "Contact us",
    forQuote: "for a tailored quote.",
    designPlans: [
      {
        name: 'Starter',
        price: '$2,500',
        period: '/project',
        label: 'Best for Small Projects',
        description: 'Perfect for startups and small businesses looking to establish their design foundation.',
        features: [
          'UI/UX Design Consultation',
          'Wireframing & Prototyping',
          'Up to 5 Page Designs',
          'Basic Brand Guidelines',
          '2 Revision Rounds',
          'Email Support'
        ],
        cta: 'Hire for Starter',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Professional',
        price: '$5,000',
        period: '/project',
        label: 'Most Popular',
        description: 'Ideal for growing businesses that need comprehensive design solutions.',
        features: [
          'Everything in Starter',
          'Customer Journey Mapping',
          'Up to 15 Page Designs',
          'Complete Design System',
          'Interactive Prototypes',
          'Unlimited Revisions',
          'Priority Support',
          'User Testing Session'
        ],
        cta: 'Hire for Professional',
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
          'Full Product Design',
          'Unlimited Page Designs',
          'CRM Marketing Strategy',
          'New Business Development',
          'Design Team Training',
          'Dedicated Designer',
          '24/7 Priority Support',
          'Ongoing Maintenance'
        ],
        cta: 'Hire for Enterprise',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Basic',
        price: '$5,000',
        period: '/project',
        label: 'Best for MVPs',
        description: 'Perfect for startups building their first software product or MVP.',
        features: [
          'Custom Web Application',
          'Responsive Design',
          'Basic API Integration',
          'Database Setup',
          '3 Months Support',
          'Documentation'
        ],
        cta: 'Hire for Basic',
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
          'Admin Dashboard',
          'Payment Integration',
          '6 Months Support',
          'Security Audit',
          'Performance Optimization'
        ],
        cta: 'Hire for Business',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Corporate',
        price: '$30,000+',
        period: '/project',
        label: 'Enterprise Grade',
        description: 'Full-scale enterprise software development with dedicated team support.',
        features: [
          'Everything in Business',
          'Custom SaaS Platform',
          'Sector-Specific Features',
          'Advanced Security',
          'Microservices Architecture',
          'CI/CD Pipeline',
          'Load Balancing',
          'Dedicated Dev Team',
          '12 Months Support',
          'Training & Onboarding'
        ],
        cta: 'Hire for Corporate',
        link: '#contact',
        highlighted: false
      }
    ]
  }
};