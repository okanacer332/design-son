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
  },
  services: {
    tag: "Our Services",
    titleDesign: "Design Expertise",
    titleCode: "Development Solutions",
    descriptionDesign: "Comprehensive UX-UI design services focused on creating exceptional user experiences and driving business results.",
    descriptionCode: "Enterprise-grade software development services delivering robust, scalable solutions for modern businesses.",
    loadMore: "Load More Services",
    showLess: "Show Less",
    designServices: [
      {
        title: 'UX Consultant',
        description: 'Strategic UX guidance to optimize user experiences and drive business growth through data-driven insights.'
      },
      {
        title: 'Product Design',
        description: 'End-to-end product design from concept to launch, creating intuitive interfaces that users love.'
      },
      {
        title: 'New Business Development',
        description: 'Strategic design thinking to identify opportunities and create compelling digital products for growth.'
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
        description: 'Cloud-based software as a service solutions built for scale, security, and seamless user experiences.'
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
    tag: "What We Focus On",
    titleDesign: "Our Design Philosophy",
    titleCode: "Our Tech Stack",
    designFocus: [
      {
        title: 'Customer Journey Mapping',
        description: 'We visualize every touchpoint in your customer\'s experience, identifying pain points and opportunities for improvement.',
        highlights: ['User Research', 'Journey Visualization', 'Touchpoint Analysis', 'Experience Optimization']
      },
      {
        title: 'Product UI Design',
        description: 'Creating beautiful, intuitive interfaces that align with your brand and delight users at every interaction.',
        highlights: ['Interface Design', 'Design Systems', 'Prototyping', 'Visual Design']
      },
      {
        title: 'User Experience',
        description: 'Comprehensive UX strategy that combines research, testing, and iteration to create seamless user experiences.',
        highlights: ['UX Research', 'Usability Testing', 'Information Architecture', 'Interaction Design']
      }
    ],
    codeFocus: [
      {
        title: 'ERP Solutions',
        description: 'Enterprise resource planning systems that integrate all aspects of your business operations into one unified platform.',
        highlights: ['Process Automation', 'Real-time Analytics', 'Multi-module Integration', 'Scalable Architecture']
      },
      {
        title: 'B2B & SaaS Platforms',
        description: 'Build robust web and mobile platforms designed for business-to-business interactions and software-as-a-service delivery.',
        highlights: ['Multi-tenant Architecture', 'API Development', 'Cloud Infrastructure', 'Security First']
      },
      {
        title: 'Sector-Specific Software',
        description: 'Custom corporate software tailored to your industry\'s unique challenges, compliance requirements, and workflows.',
        highlights: ['Industry Expertise', 'Custom Features', 'Compliance Ready', 'Integration Support']
      }
    ]
  }
};