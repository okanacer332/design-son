import { Dictionary } from '../types';

export const es: Dictionary = {
  header: {
    menu: "Menú",
    portfolio: "Portafolio",
    services: "Servicios",
    about: "Nosotros",
    contact: "Contacto",
    readyText: "¿Estás listo para comenzar tu proyecto?",
    getInTouch: "Contáctanos"
  },
  hero: {
    designTag: "✨ Agencia de Diseño Global",
    designTitle: ["Soluciones", "de Diseño", "Modernas"],
    designDesc: "Creamos experiencias de usuario excepcionales a través del mapeo del viaje del cliente y diseño de UI de productos.",
    designBtnPrimary: "Iniciar Proyecto",
    designBtnSecondary: "Ver Trabajos",
    codeTag: "💻 Soluciones de Software Empresarial",
    codeTitle: ["Tecnología", "Innovación", "Código"],
    codeDesc: "Construimos plataformas ERP y SaaS de nivel empresarial personalizadas para cada sector industrial.",
    codeBtnPrimary: "Iniciar Desarrollo",
    codeBtnSecondary: "Ver Soluciones"
  },
  portfolio: {
    tag: "Nuestros Proyectos",
    title: "Proyectos Destacados",
    description: "Explora nuestros exitosos proyectos de diseño que transformaron experiencias de usuario.",
    descriptionCode: "Descubre las soluciones empresariales que hemos desarrollado para empresas de diversos sectores.",
    viewAll: "Ver Todos",
    designProjects: [
      {
        title: 'Plataforma E-Commerce',
        category: 'Diseño de Producto',
        description: 'Rediseño completo de UX aumentando la conversión en un 45%'
      },
      {
        title: 'App Bancaria',
        category: 'Viaje del Cliente',
        description: '12 puntos de contacto clave del usuario mapeados y optimizados'
      },
      {
        title: 'Panel SaaS',
        category: 'Diseño UI',
        description: 'Interfaz moderna con sistema de diseño integral'
      },
      {
        title: 'Portal de Salud',
        category: 'Consultoría UX',
        description: 'Experiencia del paciente y accesibilidad mejoradas'
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
        title: 'SaaS Gestión de Proyectos',
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
    tag: "Trabaja Conmigo",
    title: "Elige tu Plan",
    description: "Paquetes de diseño flexibles adaptados a las necesidades y presupuesto de tu proyecto.",
    descriptionCode: "Soluciones de software escalables diseñadas para crecer con tu negocio.",
    viewDetails: "Ver Detalles",
    learnMore: "Más información sobre este plan →",
    customSolution: "¿Necesitas una solución personalizada?",
    contactUs: "Contáctanos",
    forQuote: "para una cotización a medida.",
    designPlans: [
      {
        name: 'Starter',
        price: '$2,500',
        period: '/proyecto',
        label: 'Para Pequeños Proyectos',
        description: 'Perfecto para startups y pequeñas empresas que buscan establecer su base de diseño.',
        features: [
          'Consultoría de Diseño UI/UX',
          'Wireframing y Prototipado',
          'Hasta 5 Páginas de Diseño',
          'Guía de Marca Básica',
          '2 Rondas de Revisión',
          'Soporte por Email'
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
          'Hasta 15 Páginas de Diseño',
          'Sistema de Diseño Completo',
          'Prototipos Interactivos',
          'Revisiones Ilimitadas',
          'Soporte Prioritario',
          'Sesión de Pruebas de Usuario'
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
          'Diseño de Producto Completo',
          'Páginas Ilimitadas',
          'Estrategia de Marketing CRM',
          'Desarrollo de Nuevos Negocios',
          'Capacitación del Equipo de Diseño',
          'Diseñador Dedicado',
          'Soporte Prioritario 24/7',
          'Mantenimiento Continuo'
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
        label: 'Mejor para MVPs',
        description: 'Perfecto para startups construyendo su primer producto de software o MVP.',
        features: [
          'Aplicación Web Personalizada',
          'Diseño Responsivo',
          'Integración de API Básica',
          'Configuración de Base de Datos',
          '3 Meses de Soporte',
          'Documentación'
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
          'Panel de Administración',
          'Integración de Pagos',
          '6 Meses de Soporte',
          'Auditoría de Seguridad',
          'Optimización de Rendimiento'
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
          'Arquitectura de Microservicios',
          'Canal CI/CD',
          'Balanceo de Carga',
          'Equipo de Desarrollo Dedicado',
          '12 Meses de Soporte',
          'Capacitación e Incorporación'
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
    titleCode: "Soluciones de Software",
    descriptionDesign: "Servicios integrales de diseño UX-UI enfocados en crear experiencias de usuario excepcionales e impulsar resultados comerciales.",
    descriptionCode: "Servicios de desarrollo de software de nivel empresarial que ofrecen soluciones robustas y escalables para empresas modernas.",
    loadMore: "Cargar Más",
    showLess: "Mostrar Menos",
    designServices: [
      {
        title: 'Consultoría UX',
        description: 'Orientación estratégica de UX para optimizar experiencias de usuario e impulsar el crecimiento empresarial a través de insights basados en datos.'
      },
      {
        title: 'Diseño de Producto',
        description: 'Diseño de producto de extremo a extremo, desde el concepto hasta el lanzamiento, creando interfaces intuitivas que los usuarios aman.'
      },
      {
        title: 'Desarrollo de Nuevos Negocios',
        description: 'Design thinking estratégico para identificar oportunidades y crear productos digitales atractivos para el crecimiento.'
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
        description: 'Soluciones de software como servicio basadas en la nube construidas para escala, seguridad y experiencias de usuario fluidas.'
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
    tag: "Nuestro Enfoque",
    titleDesign: "Filosofía de Diseño",
    titleCode: "Stack Tecnológico",
    designFocus: [
      {
        title: 'Mapeo del Viaje del Cliente',
        description: 'Visualizamos cada punto de contacto en la experiencia de su cliente, identificando puntos débiles y oportunidades de mejora.',
        highlights: ['Investigación de Usuarios', 'Visualización del Viaje', 'Análisis de Puntos de Contacto', 'Optimización de Experiencia']
      },
      {
        title: 'Diseño UI de Producto',
        description: 'Creación de interfaces hermosas e intuitivas que se alinean con su marca y deleitan a los usuarios en cada interacción.',
        highlights: ['Diseño de Interfaz', 'Sistemas de Diseño', 'Prototipado', 'Diseño Visual']
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
        description: 'Construcción de plataformas web y móviles robustas diseñadas para interacciones B2B y entrega de software como servicio.',
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
    title: "Lo Que Dicen los Clientes",
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
        text: 'Su consultoría UX nos ayudó a identificar puntos ciegos que ni siquiera sabíamos que existían. El trabajo de diseño de producto fue excepcional.',
        rating: 5
      },
      {
        name: 'Emma Rodriguez',
        role: 'Jefa de Marketing',
        company: 'HealthCare Plus',
        text: 'Trabajo sobresaliente en nuestra estrategia de marketing CRM. El equipo de diseño realmente entiende el comportamiento del usuario moderno.',
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
        text: 'Desarrollo excepcional de plataforma B2B. El equipo entregó una solución escalable que maneja perfectamente nuestras demandas crecientes.',
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
    titleDesign: "¿Listo para Contratar un Diseñador?",
    titleCode: "¿Listo para Contratar un Desarrollador?",
    descDesign: "Trabajemos juntos para crear diseños excepcionales que transformen su presencia digital e impulsen resultados reales.",
    descCode: "Asóciese con un desarrollador experimentado para construir software de nivel empresarial que escale con su negocio.",
    btnPrimary: "Contrátame Ahora",
    btnSecondary: "Ver Disponibilidad",
    statProjects: "Proyectos Completados",
    statSystems: "Sistemas Construidos",
    statSuccess: "Tasa de Éxito del Cliente",
    statSupportDesign: "Soporte Disponible",
    statSupportCode: "Soporte de Desarrollo"
  },
  footer: {
    brandDescDesign: "Creando experiencias de usuario excepcionales a través de un diseño innovador.",
    brandDescCode: "Construyendo soluciones de software empresarial para empresas modernas.",
    colServices: "Servicios",
    colCompany: "Empresa",
    colContact: "Contacto",
    designServices: ['Consultor UX', 'Diseño de Producto', 'Desarrollo de Negocios', 'Mapeo de Viaje', 'Marketing CRM'],
    codeServices: ['Sistemas ERP', 'Plataformas B2B', 'Desarrollo SaaS', 'Software Personalizado', 'Integración de API'],
    companyLinks: ['Sobre Nosotros', 'Procesos de Diseño', 'Casos de Estudio', 'Carreras', 'Blog'],
    copyright: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    cookie: "Política de Cookies"
  }
};