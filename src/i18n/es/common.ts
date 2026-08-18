/**
 * Textos compartidos — español.
 *
 * Como en inglés, el argumento « Données en France » se adapta a
 * alojamiento en la Unión Europea: es el que resulta convincente fuera
 * de Francia.
 */

import type { Common } from '../fr/common';

export const common = {
  site: {
    tagline: 'Customized Email Signature',
    description:
      'El gestor de firmas de correo y campañas de banners para empresas. Datos alojados en la Unión Europea.',
  },

  actions: {
    signup: 'Crear mi firma',
    login: 'Iniciar sesión',
    demo: 'Ver una demo',
    requestDemo: 'Solicitar una demo',
  },

  layout: {
    skipToContent: 'Ir al contenido principal',
    homeAria: 'Signally — inicio',
    mainNavAria: 'Navegación principal',
    mobileNavAria: 'Navegación móvil',
    openMenu: 'Abrir el menú',
    closeMenu: 'Cerrar el menú',
    languageAria: 'Elegir idioma',
  },

  pages: {
    home: { label: 'Inicio', desc: '' },
    features: {
      label: 'Editor de firmas',
      desc: 'Plantillas, campos dinámicos, equipos',
    },
    campaigns: {
      label: 'Campañas y banners',
      desc: 'Planificación y segmentación por equipo',
    },
    useCases: {
      label: 'Casos de uso',
      desc: 'TI, marketing, recursos humanos',
    },
    pricing: { label: 'Precios', desc: 'Precio decreciente y simulador' },
    compare: {
      label: 'Comparativas',
      desc: 'Criterios de elección y alternativas',
    },
    security: {
      label: 'Seguridad y RGPD',
      desc: 'Alojamiento en la UE, no leemos tus correos',
    },
    contact: {
      label: 'Contacto y demo',
      desc: 'Veinte minutos con un experto',
    },
    blog: { label: 'Blog', desc: 'Guías, tutoriales y buenas prácticas' },
    microsoft: {
      label: 'Microsoft 365 y Outlook',
      desc: 'Complemento desplegado desde tu tenant',
    },
    google: {
      label: 'Google Workspace y Gmail',
      desc: 'Instalación en todo el dominio',
    },
  },

  nav: {
    product: 'Producto',
    integrations: 'Integraciones',
    resources: 'Recursos',
  },

  footer: {
    columns: {
      product: 'PRODUCTO',
      integrations: 'INTEGRACIONES',
      resources: 'RECURSOS',
      company: 'EMPRESA',
    },
    teams: 'Gestión de equipos',
    pricingFull: 'Precios y simulador',
    badges: 'ALOJAMIENTO EN LA UE · RGPD · SIN ACCESO A TUS CORREOS',
  },

  sections: {
    marqueeAria: 'Empresas que usan Signally',
    satellites: 'Ir más lejos',
  },

  cta: {
    title: 'Empieza con Signally',
    text:
      'Crea tu firma en línea, gratis y sin tarjeta de crédito. Desplegarla en toda la empresa solo lleva unos minutos más.',
  },
} satisfies Common;
