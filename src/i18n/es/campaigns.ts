import type { Campaigns } from '../fr/campaigns';

export const campaigns = {
  meta: {
    title: 'Campañas de banners en la firma de correo — marketing por correo saliente',
    description:
      'Convierte cada correo saliente en un soporte de comunicación: banners clicables, segmentación por equipo, planificación automática y seguimiento de clics.',
  },

  hero: {
    eyebrow: 'Campañas y banners',
    title: 'El marketing por firma de correo: el canal que ya posees.',
    lede:
      'Una campaña de Signally es un banner colocado bajo la firma de tus empleados, dirigido a los equipos que elijas y planificado en el tiempo. Sin coste de medios, sin fricción y ante una audiencia que ya está en contacto contigo.',
  },

  uses: {
    title: 'Lo que puedes difundir sin escribir una newsletter',
    lede:
      'Más de nueve de cada diez correos profesionales se abren. Un banner de firma lo ven tus clientes, tus posibles clientes, tus proveedores y tus candidatos.',
    items: [
      {
        tag: 'EVENTOS',
        title: 'Ferias y seminarios web',
        text:
          'Anuncia tu estand tres semanas antes y detén la campaña la tarde del cierre, sin volver a pensar en ello.',
      },
      {
        tag: 'MARCA EMPLEADORA',
        title: 'Selección de personal',
        text:
          'Difunde tus ofertas desde la firma de toda la empresa: tus empleados se convierten en tu primer canal de captación.',
      },
      {
        tag: 'PRODUCTO',
        title: 'Lanzamientos y novedades',
        text:
          'Dirige el banner a los equipos comerciales mientras soporte mantiene el suyo.',
      },
      {
        tag: 'REPUTACIÓN',
        title: 'Reseñas de clientes',
        text:
          'Un botón de reseña de Google en la firma de soporte: la petición llega en el momento justo, tras un buen intercambio.',
      },
      {
        tag: 'RSC E INTERNO',
        title: 'Compromisos y actualidad',
        text:
          'Una certificación obtenida, la memoria anual, una acción solidaria: la prueba circula en cada intercambio.',
      },
      {
        tag: 'COMERCIAL',
        title: 'Reserva de citas',
        text:
          'Un enlace de reserva de agenda bajo cada correo comercial, sin seguimiento adicional.',
      },
    ],
  },

  pillars: {
    title: 'Planificar, segmentar, medir',
    items: [
      {
        title: 'Una fecha de inicio y una de fin',
        text:
          'El banner aparece y desaparece solo. Se acabaron las campañas fantasma que siguen tres meses después del evento.',
      },
      {
        title: 'Segmentación por equipo',
        text: 'Toda la empresa, una filial, un país, un departamento o un puñado de personas.',
      },
      {
        title: 'Campañas que se suceden',
        text:
          'Construye tu calendario por trimestres: cada campaña toma el relevo de la anterior.',
      },
      {
        title: 'Clics atribuidos',
        text:
          'Sabes qué banner generó tráfico, en qué periodo y desde qué equipo.',
      },
    ],
  },

  preview: {
    tag: 'VISTA PREVIA DEL BANNER',
    items: [
      { title: 'Seminario web — Firmas y cumplimiento', sub: 'Jueves 12 de marzo, 11 h', cta: 'Inscribirse' },
      { title: 'Buscamos 12 perfiles', sub: 'Tecnología, producto, ventas', cta: 'Ver ofertas' },
      { title: 'Tu opinión cuenta', sub: '30 segundos, una estrella', cta: 'Dejar mi opinión' },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes sobre las campañas de banners',
    items: [
      {
        q: '¿Qué es una campaña de banner en una firma de correo?',
        a: 'Es un banner clicable, estático o animado, añadido bajo la firma de un grupo de empleados durante un periodo definido. Convierte cada correo saliente en un soporte de comunicación segmentado.',
      },
      {
        q: '¿Cuántas impresiones se pueden esperar?',
        a: 'Cuenta con unos treinta correos salientes por empleado y día. Una empresa de 100 personas genera así del orden de 300 000 impresiones al año, ante una audiencia que ya está en contacto con ella.',
      },
      {
        q: '¿Se puede dirigir un banner a un solo equipo?',
        a: 'Sí. La segmentación se hace por equipo, departamento, filial, país o selección manual de empleados. Los comerciales pueden llevar un banner de producto mientras soporte lleva otro.',
      },
      {
        q: '¿Las campañas se lanzan automáticamente?',
        a: 'Sí. Defines una fecha de inicio y otra de fin; el banner aparece y desaparece solo. Puedes encadenar varias campañas a lo largo de un trimestre.',
      },
      {
        q: '¿Se pueden seguir los clics en un banner?',
        a: 'Sí. Cada campaña tiene su propio seguimiento de clics, por periodo y por equipo, lo que permite comparar mensajes entre sí y decidir el calendario siguiente.',
      },
      {
        q: '¿Un banner animado se ve en todas partes?',
        a: 'Un GIF animado se ve en la mayoría de clientes de correo modernos; algunas versiones de Outlook solo muestran el primer fotograma. Por eso recomendamos poner el mensaje esencial en ese primer fotograma.',
      },
    ],
  },

  cta: {
    title: 'Lanza tu primera campaña con Signally',
    text: 'Crea el banner, elige los equipos, fija las fechas. El resto se activa solo.',
    secondaryLabel: 'Hablar con un experto',
  },
} satisfies Campaigns;
