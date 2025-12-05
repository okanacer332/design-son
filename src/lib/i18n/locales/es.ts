import { Dictionary } from '../types';

export const es: Dictionary = {
  header: {
    menu: "Menú",
    portfolio: "Portafolio",
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    readyText: "¿Listo para comenzar tu nuevo proyecto?",
    getInTouch: "Contáctanos"
  },
  hero: {
    designTag: "✨ Agencia de Diseño Global",
    designTitle: ["Soluciones", "de Diseño", "Modernas"],
    designDesc: "Creamos experiencias excepcionales a través del mapeo del viaje del cliente y el diseño UI.",
    designBtnPrimary: "Cuéntanos tu Proyecto",
    designBtnSecondary: "Nuestros Trabajos",
    codeTag: "💻 Soluciones de Software Empresarial",
    codeTitle: ["Tecnología", "Innovación", "Código"],
    codeDesc: "Construimos plataformas ERP y SaaS de nivel empresarial personalizadas para cada sector.",
    codeBtnPrimary: "Iniciar Desarrollo",
    codeBtnSecondary: "Ver Soluciones"
  },
  portfolio: {
    tag: "Nuestros Proyectos",
    title: "Trabajos Destacados",
    description: "Descubre nuestros exitosos proyectos de diseño que transforman las experiencias de usuario.",
    descriptionCode: "Examina las soluciones de diseño empresarial que hemos desarrollado para empresas de diversos sectores.",
    viewAll: "Ver Todos los Proyectos",
    designProjects: [
      {
        title: 'Plataforma Logística',
        category: 'Diseño de Producto',
        description: 'Renovación completa de UX aumentando la tasa de conversión en un 45%'
      },
      {
        title: 'Plataforma Educativa',
        category: 'Viaje B2C',
        description: 'Optimizado con un enfoque en Diseño de Producto y Servicio'
      },
      {
        title: 'Plataforma en la Nube',
        category: 'Diseño UI',
        description: 'Interfaz moderna con un sistema de diseño integral'
      },
      {
        title: 'Plataforma de Hoteles y Reservas',
        category: 'Consultoría UX',
        description: 'Mejora de la experiencia de descubrimiento y compra del cliente'
      }
    ],
    codeProjects: [
      {
        title: 'ERP de Manufactura',
        category: 'Sistema ERP',
        description: 'ERP a gran escala gestionando 500+ usuarios en 12 instalaciones'
      },
      {
        title: 'Mercado B2B',
        category: 'Plataforma B2B',
        description: 'Plataforma multi-vendedor procesando 10K+ transacciones diarias'
      },
      {
        title: 'SaaS de Gestión de Proyectos',
        category: 'Desarrollo SaaS',
        description: 'Herramienta basada en la nube sirviendo a 50K+ usuarios activos'
      },
      {
        title: 'Software Logístico',
        category: 'Solución Personalizada',
        description: 'Sistema de seguimiento en tiempo real para logística empresarial'
      }
    ]
  },
  pricing: {
    tag: "Cómo Podemos Empezar",
    title: "Elija Su Plan",
    description: "Paquetes de diseño flexibles adaptados a las necesidades y presupuesto de su proyecto.",
    descriptionCode: "Soluciones de software escalables que crecen con su negocio.",
    viewDetails: "Ver Detalles",
    learnMore: "Más información sobre este plan →",
    customSolution: "¿Necesita una solución personalizada?",
    contactUs: "Contáctenos",
    forQuote: "y obtenga una cotización a medida.",
    designPlans: [
      {
        name: 'Starter',
        price: '$2,500',
        period: '/proyecto',
        label: 'Para Proyectos Puntuales',
        description: 'Perfecto para Emprendedores y Pequeñas Empresas.',
        features: [
          'Consultoría de Diseño UI/UX',
          'Diseño Web y Banners Publicitarios',
          'Diseño de hasta 5 Páginas',
          'Guía de Marca Básica',
        ],
        cta: 'Elegir Plan Starter',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Profesional',
        price: '$5,000',
        period: '/proyecto',
        label: 'Más Popular',
        description: 'Ideal para empresas en crecimiento que necesitan soluciones de diseño integrales.',
        features: [
          'Todo en el Paquete Starter',
          'Mapeo del Viaje del Cliente',
          'Diseño de hasta 15 Páginas',
          'Sistema de Diseño Completo',
        ],
        cta: 'Elegir Plan Profesional',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Empresarial',
        price: '$10,000+',
        period: '/proyecto',
        label: 'Para Grandes Equipos',
        description: 'Asociación de diseño integral para empresas establecidas y proyectos complejos.',
        features: [
          'Todo en el Paquete Profesional',
          'Diseño de Producto de Extremo a Extremo',
          'Diseño de 30+ Páginas y Menús',
          'Asesoramiento de Marketing',
        ],
        cta: 'Elegir Plan Empresarial',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Básico',
        price: '$5,000',
        period: '/proyecto',
        label: 'Mejor para MVP',
        description: 'Perfecto para startups construyendo su primer producto de software o MVP.',
        features: [
          'Aplicación Web Personalizada',
          'Diseño Compatible con Móviles',
          'Integración de API Básica',
          'Configuración de Base de Datos',
        ],
        cta: 'Elegir Plan Básico',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Negocio',
        price: '$15,000',
        period: '/proyecto',
        label: 'Más Popular',
        description: 'Solución integral para empresas que necesitan sistemas de software robustos.',
        features: [
          'Todo en el Paquete Básico',
          'Plataforma ERP/B2B',
          'Desarrollo de API Avanzada',
          'Sistema Multi-usuario',
        ],
        cta: 'Elegir Plan Negocio',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Corporativo',
        price: '$30,000+',
        period: '/proyecto',
        label: 'Nivel Empresarial',
        description: 'Desarrollo de software empresarial a gran escala con soporte de equipo dedicado.',
        features: [
          'Todo en el Paquete Negocio',
          'Plataforma SaaS Personalizada',
          'Funciones Específicas del Sector',
          'Seguridad Avanzada',
        ],
        cta: 'Elegir Plan Corporativo',
        link: '#contact',
        highlighted: false
      }
    ]
  },
  services: {
    tag: "Nuestros Servicios",
    titleDesign: "Experiencia en Diseño",
    titleCode: "Soluciones de Producto",
    descriptionDesign: "Servicios integrales de diseño UX/UI centrados en la usabilidad, la optimización del flujo y la estrategia de producto.",
    descriptionCode: "Servicios de desarrollo de software de nivel empresarial que ofrecen soluciones robustas y escalables para empresas modernas.",
    loadMore: "Mostrar Más",
    showLess: "Mostrar Menos",
    designServices: [
      {
        title: 'Consultoría UX',
        description: 'Orientación estratégica de UX para optimizar experiencias de usuario e impulsar el crecimiento empresarial a través de insights basados en datos.'
      },
      {
        title: 'Diagnóstico de Producto',
        description: 'Rediseño de extremo a extremo de su concepto de producto y estrategia de ventas existente con interfaces intuitivas que los usuarios aman.'
      },
      {
        title: 'Desarrollo de Nuevos Negocios',
        description: 'Soporte integral para identificar oportunidades de crecimiento para su idea y crear productos digitales atractivos.'
      },
      {
        title: 'Mapeo del Viaje del Cliente',
        description: 'Visualice y optimice cada punto de contacto en el viaje de su cliente para lograr el máximo compromiso.'
      },
      {
        title: 'Marketing CRM',
        description: 'Diseño de estrategias de relación con el cliente que impulsan la retención y crean lealtad de marca duradera.'
      }
    ],
    codeServices: [
      {
        title: 'Sistemas ERP',
        description: 'Soluciones integrales de planificación de recursos empresariales que agilizan las operaciones en toda su organización.'
      },
      {
        title: 'Plataformas B2B',
        description: 'Plataformas web y móviles B2B escalables que conectan empresas e impulsan el comercio de manera eficiente.'
      },
      {
        title: 'Desarrollo SaaS',
        description: 'Soluciones de software basadas en la nube construidas para escala, seguridad y experiencias de usuario fluidas.'
      },
      {
        title: 'Software Corporativo',
        description: 'Desarrollo de software especializado adaptado a su sector industrial y requisitos comerciales.'
      },
      {
        title: 'Soluciones Personalizadas',
        description: 'Aplicaciones empresariales a medida diseñadas para resolver sus desafíos comerciales y flujos de trabajo únicos.'
      }
    ]
  },
  focusAreas: {
    tag: "Temas en los que nos Enfocamos",
    titleDesign: "Nuestra Filosofía de Diseño",
    titleCode: "Nuestro Stack Tecnológico",
    designFocus: [
      {
        title: 'Mapeo del Viaje del Cliente',
        description: 'Visualizamos cada punto de contacto en la experiencia de su cliente, identificando puntos débiles y oportunidades de mejora.',
        highlights: ['Investigación de Usuarios', 'Visualización del Viaje', 'Análisis de Puntos de Contacto', 'Medición']
      },
      {
        title: 'Diseño de Nuevo Producto',
        description: 'Creación de interfaces hermosas e intuitivas que se alinean con su marca y deleitan a los usuarios en cada interacción.',
        highlights: ['Diseño de Interfaz', 'Biblioteca de Diseño', 'Prototipado', 'Visuales Publicitarios']
      },
      {
        title: 'Experiencia de Usuario (UX)',
        description: 'Estrategia integral de UX que combina investigación, pruebas e iteración para crear experiencias de usuario fluidas.',
        highlights: ['Investigación UX', 'Pruebas de Usabilidad', 'Arquitectura de Información', 'Diseño de Interacción']
      }
    ],
    codeFocus: [
      {
        title: 'Soluciones ERP',
        description: 'Sistemas de planificación de recursos empresariales que integran todos los aspectos de sus operaciones comerciales en una plataforma unificada.',
        highlights: ['Automatización de Procesos', 'Analítica en Tiempo Real', 'Integración Multi-módulo', 'Arquitectura Escalable']
      },
      {
        title: 'Plataformas B2B y SaaS',
        description: 'Construcción de plataformas web y móviles robustas diseñadas para interacciones B2B y entrega de SaaS.',
        highlights: ['Arquitectura Multi-inquilino', 'Desarrollo de API', 'Infraestructura en la Nube', 'Seguridad Primero']
      },
      {
        title: 'Software Específico del Sector',
        description: 'Software corporativo personalizado adaptado a los desafíos únicos, requisitos de cumplimiento y flujos de trabajo de su industria.',
        highlights: ['Experiencia en la Industria', 'Funciones Personalizadas', 'Listo para Cumplimiento', 'Soporte de Integración']
      }
    ]
  },
  testimonials: {
    tag: "Éxito del Cliente",
    title: "Lo Que Dicen Nuestros Clientes",
    descriptionDesign: "Marcas líderes confían en nosotros para ofrecer experiencias de diseño excepcionales.",
    descriptionCode: "Potenciando empresas con soluciones de software de nivel empresarial.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, RetailTech',
        company: 'E-Commerce',
        text: 'El mapeo del viaje del cliente transformó toda nuestra experiencia de usuario. Las tasas de conversión aumentaron un 45% en tres meses.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Director de Producto',
        company: 'FinanceApp',
        text: 'La consultoría UX nos ayudó a identificar puntos ciegos que no sabíamos que existían. El trabajo de diseño de producto fue excepcional.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Gerente de Marketing',
        company: 'HealthCare Plus',
        text: 'Gran trabajo en nuestra estrategia de marketing CRM. El equipo de diseño realmente entiende el comportamiento del usuario moderno.',
        rating: 5
      }
    ],
    codeTestimonials: [
      {
        name: 'Michael Anderson',
        role: 'CTO, Manufacturing Co',
        company: 'Sector Industrial',
        text: 'El sistema ERP que construyeron revolucionó nuestras operaciones. Integración perfecta en todos los departamentos.',
        rating: 5
      },
      {
        name: 'Lisa Thompson',
        role: 'VP de Tecnología',
        company: 'Soluciones B2B',
        text: 'Desarrollo excepcional de plataforma B2B. El equipo entregó una solución escalable que satisface perfectamente nuestras demandas crecientes.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Fundador',
        company: 'SaaS Startup',
        text: 'Desde el concepto hasta la implementación, construyeron toda nuestra plataforma SaaS. La calidad del código y la arquitectura son de primera categoría.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "¿Está Listo para Trabajar con Nosotros?",
    titleCode: "¿Está Listo para Trabajar con Nosotros?",
    descDesign: "Comencemos a trabajar hoy para crear diseños que transformen su presencia digital y brinden resultados reales.",
    descCode: "Comencemos a trabajar hoy para construir software de nivel empresarial para su negocio.",
    btnPrimary: "Empecemos",
    btnSecondary: "Agendar Llamada",
    statProjects: "Proyectos Completados",
    statSystems: "Sistemas Construidos",
    statSuccess: "Tasa de Éxito del Cliente",
    statSupportDesign: "Soporte Disponible",
    statSupportCode: "Soporte de Desarrollo"
  },
  footer: {
    brandDescDesign: "Creamos experiencias de usuario excepcionales a través de un diseño innovador.",
    brandDescCode: "Construimos soluciones de software empresarial para empresas modernas.",
    colServices: "Servicios",
    colCompany: "Empresa",
    colContact: "Contacto",
    designServices: ['Consultor UX', 'Diseño de Producto', 'Desarrollo de Negocios', 'Mapeo de Viaje', 'Marketing CRM'],
    codeServices: ['Sistemas ERP', 'Plataformas B2B', 'Desarrollo SaaS', 'Software Personalizado', 'Integración de API'],
    companyLinks: ['Acerca de', 'Procesos', 'Casos de Estudio', 'Carreras', 'Blog'],
    copyright: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    cookie: "Política de Cookies"
  }
};