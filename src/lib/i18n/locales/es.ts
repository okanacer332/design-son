import { Dictionary } from '../types';

export const es: Dictionary = {
  header: {
    menu: "Menú",
    portfolio: "Portafolio",
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    readyText: "¿Listo para comenzar tu nuevo proyecto?",
    getInTouch: "Ponerse en Contacto"
  },
  hero: {
    designTag: "✨ Gestión Integral de Productos",
    designTitle: ["Soluciones de", "Diseño Efectivo", "Para Su Negocio"],
    designDesc: "Simplificamos flujos de productos, potenciamos interfaces y creamos experiencias que agregan valor al usuario.",
    designBtnPrimary: "Hablemos de Su Proyecto",
    designBtnSecondary: "Nuestros Trabajos",
    codeTag: "💻 Soluciones de Software Empresarial",
    codeTitle: ["Tecnología", "Innovación", "Código"],
    codeDesc: "Construimos plataformas ERP y SaaS de nivel empresarial personalizadas para cada industria.",
    codeBtnPrimary: "Empezar a Desarrollar",
    codeBtnSecondary: "Explorar Soluciones"
  },
  portfolio: {
    tag: "Nuestros Proyectos",
    title: "Trabajos Destacados",
    description: "Descubra nuestros exitosos proyectos de diseño que transforman experiencias de usuario.",
    descriptionCode: "Examine las soluciones de diseño empresarial que hemos desarrollado para empresas de diversos sectores.",
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
        description: 'Optimizado con enfoque en Diseño de Producto y Servicio'
      },
      {
        title: 'Plataforma SaaS (Nube)',
        category: 'Diseño UI',
        description: 'Interfaz moderna con un sistema de diseño integral'
      },
      {
        title: 'Plataforma de Hotel y Reservas',
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
        title: 'Marketplace B2B',
        category: 'Plataforma B2B',
        description: 'Plataforma multi-vendedor procesando 10k+ transacciones diarias'
      },
      {
        title: 'SaaS de Gestión de Proyectos',
        category: 'Desarrollo SaaS',
        description: 'Herramienta basada en la nube sirviendo a 50k+ usuarios activos'
      },
      {
        title: 'Software Logístico',
        category: 'Solución Personalizada',
        description: 'Sistema de seguimiento en tiempo real para logística corporativa'
      }
    ]
  },
  pricing: {
    tag: "Cómo Empezar",
    title: "Elija Su Plan",
    description: "Paquetes de diseño flexibles adaptados a las necesidades y presupuesto de su proyecto.",
    descriptionCode: "Soluciones de software escalables que crecerán con su negocio.",
    learnMore: "Más información sobre este plan →",
    customSolution: "¿Necesita una solución personalizada?",
    contactUs: "Contáctenos",
    forQuote: "y obtenga una cotización a medida.",
    designPlans: [
      {
        name: 'Inicio Básico',
        price: '$999',
        period: '/Mes $18',
        label: 'Para Proyectos Únicos',
        description: 'Perfecto para Emprendedores y Pequeñas Empresas.',
        features: [
          'Consultoría de Diseño UI/UX',
          'Diseño Web y Banners Publicitarios',
          'Diseño de hasta 5 Páginas',
          'Optimización SEO Básica',
        ],
        cta: 'Seleccionar Plan Inicio',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Profesional',
        price: '$1799',
        period: '/proyecto',
        label: 'Más Popular',
        description: 'Ideal para empresas en crecimiento que necesitan soluciones de diseño integrales.',
        features: [
          'Diseño + Desarrollo de Sitio Web Corporativo',
          'Panel de Administración (Admin Panel)',
          'Instalación de 2 Módulos (RRHH, Almacén, CRM, etc.)',
          'Pruebas de Usuario y Feedback',
        ],
        cta: 'Seleccionar Plan Profesional',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Empresarial',
        price: '$3499',
        period: '/precio desde',
        label: 'Para Grandes Equipos',
        description: 'Alianza de diseño integral para empresas establecidas y proyectos complejos.',
        features: [
          'Todo lo del paquete Profesional',
          'Análisis y Desarrollo de Extremo a Extremo',
          'Soporte Prioritario y Mantenimiento',
          'Asesoramiento de Marketing',
        ],
        cta: 'Contactar',
        link: '#contact',
        highlighted: false
      }
    ],
    codePlans: [
      {
        name: 'Inicio Básico',
        price: '$999',
        period: '/Mes $18',
        label: 'Para Proyectos Únicos',
        description: 'Perfecto para Emprendedores y Pequeñas Empresas.',
        features: [
          'Consultoría de Diseño UI/UX',
          'Diseño Web y Banners Publicitarios',
          'Diseño de hasta 5 Páginas',
          'Optimización SEO Básica',
        ],
        cta: 'Seleccionar Plan Inicio',
        link: '#contact',
        highlighted: false
      },
      {
        name: 'Profesional',
        price: '$1799',
        period: '/proyecto',
        label: 'Más Popular',
        description: 'Ideal para empresas en crecimiento que necesitan soluciones de diseño integrales.',
        features: [
          'Diseño + Desarrollo de Sitio Web Corporativo',
          'Panel de Administración (Admin Panel)',
          'Instalación de 2 Módulos (RRHH, Almacén, CRM, etc.)',
          'Pruebas de Usuario y Feedback',
        ],
        cta: 'Seleccionar Plan Profesional',
        link: '#contact',
        highlighted: true
      },
      {
        name: 'Empresarial',
        price: '$3499',
        period: '/precio desde',
        label: 'Para Grandes Equipos',
        description: 'Alianza de diseño integral para empresas establecidas y proyectos complejos.',
        features: [
          'Todo lo del paquete Profesional',
          'Análisis y Desarrollo de Extremo a Extremo',
          'Soporte Prioritario y Mantenimiento',
          'Asesoramiento de Marketing',
        ],
        cta: 'Contactar',
        link: '#contact',
        highlighted: false
      }
    ],
  },
  services: {
    tag: "Nuestros Servicios",
    titleDesign: "Experiencia en Diseño",
    titleCode: "Soluciones de Producto",
    descriptionDesign: "Servicios integrales de diseño UX/UI centrados en usabilidad, optimización de flujos y estrategia de producto.",
    descriptionCode: "Servicios de desarrollo de software empresarial que ofrecen soluciones robustas y escalables.",
    loadMore: "Mostrar Más",
    showLess: "Mostrar Menos",
    designServices: [
      {
        title: 'Consultoría UX',
        description: 'Guía estratégica de UX para optimizar experiencias de usuario con insights basados en datos.'
      },
      {
        title: 'Doctorado de Producto',
        description: 'Rediseño integral de su concepto de producto y estrategia de ventas con interfaces intuitivas.'
      },
      {
        title: 'Desarrollo de Nuevos Negocios',
        description: 'Soporte de extremo a extremo para identificar oportunidades de crecimiento y crear productos digitales atractivos.'
      },
      {
        title: 'Mapeo del Viaje del Cliente',
        description: 'Visualice y optimice cada punto de contacto en el viaje de su cliente para el máximo compromiso.'
      },
      {
        title: 'Marketing CRM',
        description: 'Diseño de estrategias de relación con el cliente que aumentan la lealtad y construyen afinidad de marca.'
      }
    ],
    codeServices: [
      {
        title: 'Sistemas ERP',
        description: 'Soluciones integrales de planificación de recursos empresariales que organizan operaciones en toda su organización.'
      },
      {
        title: 'Plataformas B2B',
        description: 'Plataformas web y móviles B2B escalables que conectan empresas y realizan comercio eficientemente.'
      },
      {
        title: 'Desarrollo SaaS',
        description: 'Soluciones de software como servicio basadas en la nube construidas para escala y seguridad.'
      },
      {
        title: 'Software Empresarial',
        description: 'Desarrollo de software personalizado adaptado específicamente a su industria y requisitos.'
      },
      {
        title: 'Soluciones Personalizadas',
        description: 'Aplicaciones empresariales dedicadas diseñadas para resolver sus desafíos y flujos de trabajo únicos.'
      }
    ]
  },
  focusAreas: {
    tag: "Nuestras Áreas de Enfoque",
    titleDesign: "Filosofía de Diseño",
    titleCode: "Pila Tecnológica",
    designFocus: [
      {
        title: 'Mapeo del Viaje del Cliente',
        description: 'Visualizamos cada punto de contacto en la experiencia de su cliente, identificando puntos débiles y oportunidades.',
        highlights: ['Investigación de Usuario', 'Visualización de Viaje', 'Análisis de Puntos de Contacto', 'Medición']
      },
      {
        title: 'Diseño de Nuevos Productos',
        description: 'Deleitamos a los usuarios en cada interacción creando interfaces hermosas e intuitivas alineadas con su marca.',
        highlights: ['Diseño de Interfaz', 'Biblioteca de Diseño', 'Prototipado', 'Visuales Publicitarios']
      },
      {
        title: 'Experiencia de Usuario (UX)',
        description: 'Estrategia UX integral que combina investigación, pruebas e iteración para crear experiencias fluidas.',
        highlights: ['Investigación UX', 'Pruebas de Usabilidad', 'Arquitectura de Información', 'Diseño de Interacción']
      },
    ],
    codeFocus: [
      {
        title: 'Soluciones ERP',
        description: 'Sistemas ERP que integran todos los aspectos de sus operaciones comerciales en una plataforma unificada.',
        highlights: ['Automatización de Procesos', 'Analítica en Tiempo Real', 'Integración Multi-módulo', 'Arquitectura Escalable']
      },
      {
        title: 'Plataformas B2B y SaaS',
        description: 'Plataformas web y móviles robustas diseñadas para interacciones entre empresas y entrega de SaaS.',
        highlights: ['Arquitectura Multi-inquilino', 'Desarrollo de API', 'Infraestructura en la Nube', 'Seguridad Primero']
      },
      {
        title: 'Software Específico de Industria',
        description: 'Software empresarial personalizado adaptado a los desafíos únicos y flujos de trabajo de su sector.',
        highlights: ['Experiencia en Industria', 'Funciones Personalizadas', 'Listo para Cumplimiento', 'Soporte de Integración']
      }
    ]
  },
  testimonials: {
    tag: "Éxito del Cliente",
    title: "Lo Que Dicen Nuestros Clientes",
    descriptionDesign: "Marcas líderes confían en nosotros para ofrecer experiencias de diseño excepcionales.",
    descriptionCode: "Empoderamos a las empresas con soluciones de software de nivel empresarial.",
    designTestimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'CEO, RetailTech',
        company: 'E-Commerce',
        text: 'El mapeo del viaje del cliente transformó toda nuestra experiencia de usuario. Las tasas de conversión aumentaron un 45%.',
        rating: 5
      },
      {
        name: 'David Chen',
        role: 'Director de Producto',
        company: 'FinanceApp',
        text: 'La consultoría UX nos ayudó a identificar puntos ciegos que no conocíamos. El trabajo de diseño de producto fue excepcional.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Gerente de Marketing',
        company: 'HealthCare Plus',
        text: 'Gran trabajo en nuestra estrategia de marketing CRM. El equipo de diseño realmente entiende el comportamiento moderno.',
        rating: 5
      }
    ],
    codeTestimonials: [
      {
        name: 'Michael Anderson',
        role: 'CTO, Manufacturing Co',
        company: 'Sector Industrial',
        text: 'El sistema ERP que construyeron revolucionó nuestras operaciones. Integración perfecta entre todos los departamentos.',
        rating: 5
      },
      {
        name: 'Lisa Thompson',
        role: 'VP de Tecnología',
        company: 'Soluciones B2B',
        text: 'Desarrollo de plataforma B2B excepcional. El equipo entregó una solución escalable que cumplió perfectamente nuestras demandas.',
        rating: 5
      },
      {
        name: 'James Wilson',
        role: 'Fundador',
        company: 'Startup SaaS',
        text: 'Construyeron toda nuestra plataforma SaaS desde el concepto hasta el despliegue. La calidad del código es de primer nivel.',
        rating: 5
      }
    ]
  },
  cta: {
    titleDesign: "¿Listo para Trabajar con Nosotros?",
    titleCode: "¿Listo para Trabajar con Nosotros?",
    descDesign: "Comencemos hoy a crear diseños que transformen su presencia digital y brinden resultados reales.",
    descCode: "Comencemos hoy a construir software de nivel empresarial para su negocio.",
    btnPrimary: "Empecemos",
    btnSecondary: "Llamada de Descubrimiento",
    statProjects: "Proyectos Completados",
    statSystems: "Sistemas Instalados",
    statSuccess: "Tasa de Éxito",
    statSupportDesign: "Soporte Continuo",
    statSupportCode: "Soporte de Desarrollo"
  },
  footer: {
    brandDescDesign: "Creando experiencias de usuario excepcionales a través de un diseño innovador.",
    brandDescCode: "Construyendo soluciones de software empresarial para empresas modernas.",
    colServices: "Servicios",
    colCompany: "Empresa",
    colContact: "Contacto",
    designServices: ['Consultor UX', 'Diseño de Producto', 'Desarrollo de Negocio', 'Mapeo de Viaje', 'Marketing CRM'],
    codeServices: ['Sistemas ERP', 'Plataformas B2B', 'Desarrollo SaaS', 'Software Personalizado', 'Integración API'],
    companyLinks: ['Nosotros', 'Nuestros Procesos', 'Casos de Estudio', 'Carreras', 'Blog'],
    copyright: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    cookie: "Política de Cookies"
  }
};