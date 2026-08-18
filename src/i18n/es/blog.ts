import type { Blog } from '../fr/blog';

export const blog = {
  index: {
    meta: {
      title: 'Blog — todo sobre la firma de correo en la empresa',
      description:
        'Guías prácticas, tutoriales de Microsoft 365 y Google Workspace, encuadre del RGPD e ideas de campañas de banners. El blog de Signally.',
    },
    eyebrow: 'El blog de Signally',
    title: 'Todo sobre la firma de correo: gestión, despliegue, cumplimiento y comunicación.',
    lede:
      'Guías prácticas, tutoriales de Microsoft 365 y Google Workspace, encuadre del RGPD e ideas de campañas. Cuarenta artículos organizados en siete pilares.',
    filterAria: 'Filtrar por temática',
    all: 'Todas',
    countOne: 'artículo',
    countMany: 'artículos',
    empty: 'Los primeros artículos llegan muy pronto.',
    emptyFiltered: 'Todavía no hay ningún artículo en esta temática.',
  },

  article: {
    breadcrumbAria: 'Ruta de navegación',
    home: 'Inicio',
    blog: 'Blog',
    kind: 'GUÍA',
    updatedOn: 'ACTUALIZADO EN',
    readingTime: 'MIN DE LECTURA',
    brief: 'EN RESUMEN',
    faqTitle: 'Preguntas frecuentes',
    tocAria: 'Índice',
    toc: 'ÍNDICE',
    internalLinks: 'PÁGINAS RELACIONADAS',
    pillarPrefix: 'Página pilar:',
    securityLink: 'Seguridad, RGPD y datos alojados en la UE →',
    pricingLink: 'Simulador de coste →',
    campaignsLink: 'Campañas de banners →',
    sameCluster: 'MÁS SOBRE ESTA TEMÁTICA',
    convert: {
      title: 'Despliega tu firma con Signally',
      text:
        'Crea tu plantilla gratis y despliégala en toda la organización desde tu consola de administración.',
    },
    side: {
      title: 'Prueba el editor',
      text: 'Crea una firma completa en cinco minutos, sin tarjeta de crédito.',
      cta: 'Abrir el editor',
    },
  },

  clusters: {
    'Microsoft 365 & Outlook': 'Microsoft 365 y Outlook',
    'Google Workspace & Gmail': 'Google Workspace y Gmail',
    'Créer sa signature': 'Diseñar la firma',
    'Gestion & gouvernance': 'Gestión y gobernanza',
    'Campagnes & bannières': 'Campañas y banners',
    'RGPD & sécurité': 'RGPD y seguridad',
    'Comparatifs & alternatives': 'Comparativas y alternativas',
  },

  clusterDesc: {
    'Microsoft 365 & Outlook': 'Despliegue, complemento, Exchange y directorio de Entra ID.',
    'Google Workspace & Gmail': 'Consola de administración, unidades organizativas y Gmail.',
    'Créer sa signature': 'Editor, plantillas, HTML y buenas prácticas de diseño.',
    'Gestion & gouvernance': 'Incorporaciones, filiales, normativa interna y coste de hacerlo a mano.',
    'Campagnes & bannières': 'Planificación, segmentación y medición de tus banners.',
    'RGPD & sécurité': 'Cumplimiento, soberanía y alcance del acceso a los datos.',
    'Comparatifs & alternatives': 'Criterios de elección y panorama del mercado.',
  },

  pillarAnchor: {
    'Microsoft 365 & Outlook': 'el complemento de Microsoft 365',
    'Google Workspace & Gmail': 'el complemento de Google Workspace',
    'Créer sa signature': 'el editor de firmas de Signally',
    'Gestion & gouvernance': 'la gestión de firmas por equipo',
    'Campagnes & bannières': 'las campañas de banners en la firma',
    'RGPD & sécurité': 'el enfoque de seguridad y RGPD de Signally',
    'Comparatifs & alternatives': 'la comparativa de software de firma de correo',
  },
} satisfies Blog;
