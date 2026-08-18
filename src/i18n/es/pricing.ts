import type { Pricing } from '../fr/pricing';

export const pricing = {
  meta: {
    title: 'Precios — un precio único y decreciente, de 1,50 € a 0,50 € por usuario',
    description:
      'Todas las funciones incluidas desde el primer usuario. Precio decreciente de 1,50 € a 0,50 € sin IVA por usuario y mes. Simulador de coste en línea.',
  },

  hero: {
    eyebrow: 'Precios',
    title: 'Un precio único, decreciente según el número de empleados.',
    lede:
      'Todas las funciones están incluidas desde el primer usuario: editor, despliegue, equipos, campañas, estadísticas y soporte. El precio por usuario baja a medida que crece tu organización.',
  },

  tiers: [
    '1 – 10 USUARIOS',
    '11 – 50 USUARIOS',
    '51 – 100 USUARIOS',
    '101 – 500 USUARIOS',
    '500 + USUARIOS',
  ],
  tierUnit: 'sin IVA / usuario / mes',

  simulator: {
    title: 'Simulador de coste',
    intro:
      'Ajusta el número de empleados y tus propias hipótesis: el simulador compara el coste de Signally con el tiempo dedicado a gestionar las firmas a mano.',
    assumptions: 'HIPÓTESIS DE GESTIÓN MANUAL',
    sliders: {
      users: 'Número de empleados',
      updates: 'Cambios de firma al año',
      minutes: 'Minutos dedicados por firma',
      hourly: 'Coste horario con cargas',
    },
    units: { minutes: 'min', hours: 'h' },
    resultTag: 'TU PRECIO',
    perMonth: 'sin IVA al mes',
    perUser: 'por usuario',
    amountNoteJoin: '— es decir',
    metrics: {
      yearly: 'coste anual de Signally',
      manualHours: 'horas anuales de gestión manual',
      manualCost: 'coste anual de la gestión manual',
      saved: 'ahorro estimado el primer año',
    },
    cta: 'Empezar gratis',
    disclaimer:
      'Estimación orientativa, sin impuestos. El tiempo de gestión manual depende de tu organización; ajusta las hipótesis para reflejar tu realidad.',
  },

  compact: {
    label: 'Tus empleados',
    perMonth: 'sin IVA al mes',
    perUser: 'por usuario',
  },

  faq: {
    title: 'Preguntas frecuentes sobre los precios',
    items: [
      {
        q: '¿Cuánto cuesta Signally para 50, 100 o 500 empleados?',
        a: 'El precio es decreciente: 1,25 € sin IVA por usuario y mes hasta 50 usuarios, 1,00 € hasta 100, 0,75 € hasta 500 y 0,50 € a partir de ahí. Es decir, 62,50 € al mes para 50 empleados, 100 € para 100 y 375 € para 500. El simulador de arriba calcula tu importe exacto.',
      },
      {
        q: '¿Están incluidas todas las funciones?',
        a: 'Sí. Editor, plantillas ilimitadas, gestión de equipos, complementos de Microsoft y Google, campañas de banners, estadísticas y soporte están incluidos sea cual sea tu plantilla. No existe una edición superior.',
      },
      {
        q: '¿El generador de firmas es realmente gratuito?',
        a: 'Sí. Crear una firma en el editor e instalarla manualmente en tu cliente de correo no cuesta nada y no requiere tarjeta de crédito. La suscripción cubre el despliegue automático en toda la empresa y las campañas.',
      },
      {
        q: '¿Cómo se contabiliza un usuario?',
        a: 'Un usuario es un buzón que recibe una firma gestionada por Signally. Los buzones compartidos y los alias no se facturan por separado.',
      },
      {
        q: '¿Qué pasa si mi plantilla cambia durante el año?',
        a: 'El número de usuarios activos se ajusta; al cruzar un umbral pasas a la tarifa decreciente correspondiente.',
      },
      {
        // Se deja abierto a propósito: el prototipo lo marca como pendiente
        // de confirmación por parte de Signally. No se inventa nada.
        q: '¿Hay permanencia?',
        a: 'Punto pendiente de confirmar por tu parte: duración del compromiso, facturación mensual o anual, condiciones de cancelación.',
      },
    ],
  },

  cta: {
    title: 'Prueba Signally sin compromiso',
    text:
      'El editor es gratuito y no pide tarjeta de crédito. La suscripción solo empieza con el despliegue automático.',
    secondaryLabel: 'Solicitar presupuesto',
  },
} satisfies Pricing;
