import type { Home } from '../fr/home';

export const home = {
  meta: {
    title: 'Signally — Firmas de correo y campañas de banners para empresas',
    description:
      'Crea, despliega y programa las firmas de correo de toda la empresa desde una sola interfaz. Complementos para Microsoft 365 y Google Workspace, datos alojados en la Unión Europea.',
  },

  hero: {
    badge: 'Firmas de correo y campañas',
    title: 'Tus firmas para',
    /** La cuarta entrada repite la primera: el keyframe sgWord vuelve a ella. */
    rotating: [
      'Toda la empresa.',
      'Todas tus filiales.',
      'Todas tus campañas.',
      'Toda la empresa.',
    ],
    lede:
      'Crea, despliega y programa las firmas de toda tu empresa en unos pocos clics y con total seguridad.',
    /** Sellos de confianza: la vista les añade un escudo. */
    badges: [
      'Tus datos están alojados y protegidos en la UE',
      'No leemos tus correos: los envías desde tu propio servidor',
      'Sin tarjeta bancaria',
    ],
  },

  /**
   * Testimonios de clientes (componente Testimonials).
   *
   * `items` queda vacío mientras no se hayan recogido los testimonios: la
   * sección muestra entonces un cartel «pendiente», igual que las capturas
   * ausentes de la sección App. Basta con rellenar las entradas.
   */
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Nuestros clientes están encantados',
    placeholder: 'TESTIMONIO PENDIENTE',
    placeholderText:
      'Un testimonio de un directivo, con su foto, su cargo y su empresa. Con tres basta: van pasando aquí.',
    items: [] as {
      quote: string;
      author: string;
      role: string;
      /** Ruta de una foto en /public; si no, se usan las iniciales. */
      photo?: string;
    }[],
  },

  /** Sección «La herramienta, en tres pantallas» (componente AppTabs). */
  app: {
    title: 'La herramienta, en tres pantallas.',
    tablistAria: 'Pantallas de la aplicación',
    placeholderBadge: 'CAPTURA PENDIENTE',
    /** Mismo orden que las pestañas técnicas: editor, equipos, campañas. */
    tabs: [
      {
        label: 'Editor',
        alt: 'Editor de firmas de Signally',
        placeholder: 'Captura del editor de firmas',
      },
      {
        label: 'Equipos',
        alt: 'Gestión de equipos y empleados',
        placeholder: 'Captura de la gestión de equipos y empleados',
      },
      {
        label: 'Campañas',
        alt: 'Planificación de campañas de banners',
        placeholder: 'Captura de la planificación de campañas',
      },
    ],
    notes: [
      {
        title: 'Un editor, no un formulario',
        text:
          'Tú compones la plantilla y Signally genera una firma en código HTML compatible con tus ordenadores, tus móviles y tus tablets.',
      },
      {
        title: 'Equipos, no archivos',
        text:
          'Cada grupo y subgrupo recibe su firma, que se despliega automáticamente. La sincronización se hace directamente desde el directorio de tu empresa.',
      },
      {
        title: 'Una planificación, no recordatorios',
        text:
          'Programa con antelación tus banners de comunicación: se despliegan en todos tus empleados al minuto exacto.',
      },
    ],
  },

  problem: {
    eyebrow: 'El problema',
    title: 'Cambiar la firma de 200 empleados lleva semanas. O cinco minutos.',
    withoutTag: 'SIN SIGNALLY',
    withTag: 'CON SIGNALLY',
    without: [
      'Una plantilla pegada torcida',
      'Logotipos deformados, enlaces rotos',
      'Avisos legales sin actualizar',
      'Tres semanas persiguiendo a informática',
    ],
    with: [
      'Una firma unificada para toda tu empresa, o diferenciada por grupo y por filial',
      'Campos rellenados directamente desde tu directorio',
      'Avisos legales bloqueados',
      'Actualizaciones desplegadas en 1 clic',
    ],
    stats: [
      { value: '5 min', label: 'para desplegar en toda la empresa' },
      { value: '100 %', label: 'de firmas conformes' },
      { value: '0 €', label: 'para crear tu firma' },
      { value: '0,50 €', label: 'por usuario a partir de 500' },
    ],
  },

  why: {
    eyebrow: 'Por qué Signally',
    title: 'Crear, desplegar, programar.',
    deploy: {
      tag: 'DESPLEGAR',
      title: 'Un cambio en la firma y todo el mundo está al día al instante.',
      text:
        'Nuestros complementos de Microsoft y Google aplican la firma a cada empleado, sin ninguna intervención por su parte.',
      rowStatus: 'AL DÍA',
      metrics: [
        { value: '1 min', label: 'para toda la empresa' },
        { value: '0', label: 'acciones por parte del empleado' },
      ],
    },
    create: {
      tag: 'CREAR',
      title: 'Un editor visual y plantillas bloqueadas',
      text:
        'Un mismo resultado en Outlook, Gmail y móvil. El administrador decide qué queda intocable.',
      link: 'El editor →',
    },
    schedule: {
      tag: 'PROGRAMAR',
      title: 'Banners programados y segmentados por equipo',
      text: 'La campaña arranca y se detiene sola. Los clics se atribuyen por equipo.',
      link: 'Las campañas →',
    },
  },

  campaigns: {
    eyebrow: 'Campañas',
    /** Dos líneas: el corte lo impone la maqueta (componente Lines). */
    title: [
      'Tu correo saliente, un canal de comunicación sin explotar.',
      'Conviértelo en tu primer medio.',
    ],
    lede:
      'Una empresa de 100 personas envía 300 000 correos al año. Otras tantas impresiones publicitarias gratuitas.',
    points: [
      'Banners animados, clicables y medidos',
      'Segmentación por equipo, departamento o filial',
      'Inicio y fin automáticos',
      'Estadísticas de clics por campaña',
    ],
    cta: 'Descubrir las campañas',
  },

  /** Diagrama «Planificación de campañas» (componente CampaignPlanner). */
  planner: {
    title: 'Planificación de campañas',
    period: 'T1 2026',
    months: ['ENE', 'FEB', 'MAR'],
    /** Mismo orden que la geometría de las barras, que sigue en la vista. */
    rows: [
      { team: 'Toda la empresa', label: 'Felicitación 2026' },
      { team: 'Comerciales', label: 'Feria Vivatech' },
      { team: 'RR. HH.', label: 'Campaña de contratación' },
      { team: 'Soporte', label: 'Nuevas preguntas frecuentes' },
    ],
    statsTitle: 'ESTADÍSTICAS',
    stats: [
      { value: '4', label: 'campañas activas' },
      { value: '312k', label: 'impresiones / trimestre' },
      { value: '2,4 %', label: 'tasa de clics media' },
    ],
  },

  integrations: {
    eyebrow: 'Integraciones',
    title: 'Una integración sin complicaciones.',
    note:
      'Los complementos se instalan con total seguridad desde tu propia consola de administración. Sin redirecciones ni interrupciones.',
    microsoft: {
      tag: 'MICROSOFT 365 · OUTLOOK · EXCHANGE',
      title: 'Complemento de Microsoft',
      text:
        'Despliegue centralizado desde el centro de administración de Microsoft 365. La firma se inserta al redactar, en Outlook Web, Windows, Mac y móvil.',
      link: 'Cómo funciona el complemento de Microsoft →',
    },
    google: {
      tag: 'GOOGLE WORKSPACE · GMAIL',
      title: 'Complemento de Google',
      text:
        'Instalación en todo el dominio desde la consola de administración de Google. Sincronización de unidades organizativas y directorios.',
      link: 'Cómo funciona el complemento de Google →',
    },
  },

  privacy: {
    eyebrow: 'Privacidad y cumplimiento',
    title: [
      'El respeto de tus datos es nuestra prioridad.',
      'Signally añade una firma. Nada más.',
    ],
    lede: 'La primera pregunta de tu departamento de TI, respondida en una frase.',
    cards: [
      {
        title: 'Datos alojados en la UE',
        text: 'Directorio y plantillas alojados en servidores dentro de la Unión Europea.',
      },
      {
        title: 'No leemos tus correos',
        text: 'El complemento inserta una firma. No lee nada más.',
      },
      {
        title: 'Nada pasa por nosotros',
        text: 'Sin relé SMTP, sin conector saliente.',
      },
      {
        title: 'Envío desde tu propia cuenta',
        text: 'Tus mensajes salen de tu tenant de Microsoft o de Google.',
      },
    ],
    cta: 'Leer nuestro enfoque de seguridad y RGPD',
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Todas las funciones, desde el primer usuario.',
    lede:
      'Un único precio decreciente, de 1,50 € a 0,50 € sin IVA por usuario y mes. Desliza el control.',
    cta: 'Simulador detallado',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Tienes preguntas, nosotros respondemos',
    items: [
      {
        q: '¿Cómo implanto la misma firma de correo para todos los empleados?',
        a: 'Creas una única plantilla en el editor de Signally, colocas campos dinámicos (nombre, cargo, teléfono, departamento) y la asignas a un equipo o a toda la empresa. El complemento de Microsoft 365 o de Google Workspace aplica después la firma a cada empleado, sin que tenga que hacer nada.',
      },
      {
        q: '¿Signally lee el contenido de mis correos?',
        a: 'No. El complemento inserta un bloque de firma en el momento de redactar el mensaje. No accede al cuerpo de tus correos, no los analiza y no los almacena. Ningún contenido de correo pasa por nuestros servidores.',
      },
      {
        q: '¿Signally envía mis correos?',
        a: 'No, nunca. Tus mensajes salen desde tu propia cuenta de Microsoft 365 o Google Workspace, con tu dominio, tu entregabilidad y tus reglas de seguridad. Signally no es un relé de envío: solo añadimos la firma.',
      },
      {
        q: '¿Dónde se alojan los datos de Signally?',
        a: 'En la Unión Europea. Los datos de directorio, las plantillas y los materiales de campaña se almacenan en servidores situados en Francia, sujetos al RGPD y al derecho europeo.',
      },
      {
        q: '¿Puedo crear una firma de correo gratis?',
        a: 'Sí. El generador de firmas está disponible libremente en app.signally.io: creas tu firma, la pruebas y la instalas en tu cliente de correo sin tarjeta de crédito. La suscripción solo es necesaria para el despliegue automático y las campañas.',
      },
      {
        q: '¿Cuánto cuesta Signally para 100 empleados?',
        a: 'El precio es decreciente: 1,50 € sin IVA por usuario y mes hasta 10 usuarios, 1,25 € de 11 a 50, 1,00 € de 51 a 100, 0,75 € de 101 a 500 y 0,50 € a partir de 500. Para 100 empleados, son 100 € sin IVA al mes. El simulador de la página de precios calcula tu importe exacto.',
      },
      {
        q: '¿Cuánto tarda el despliegue en una empresa?',
        a: 'Instalar el complemento desde tu consola de administración lleva unos diez minutos. Crear la plantilla y asignar los equipos suele llevar media jornada. Estás operativo el mismo día.',
      },
      {
        q: '¿Qué es una campaña de banner en una firma de correo?',
        a: 'Es un banner —animado o estático, clicable— añadido bajo la firma de todos o parte de tus empleados, durante un periodo que programas por adelantado. Convierte cada correo saliente en un soporte de comunicación: eventos, contratación, lanzamientos de producto, encuestas de satisfacción.',
      },
      {
        q: '¿La firma se ve correctamente en Outlook, Gmail y móvil?',
        a: 'Sí. Las plantillas de Signally están diseñadas en HTML compatible con Outlook para Windows y Mac, Outlook Web, Gmail, Apple Mail y los clientes móviles de iOS y Android. Cada plantilla se puede previsualizar antes de desplegarla.',
      },
      {
        q: '¿Se pueden tener firmas distintas por filial o por marca?',
        a: 'Sí. Creas tantas plantillas como necesites y las asignas por equipo, departamento, filial o unidad organizativa. Cada entidad conserva su identidad visual, dentro de una sola cuenta de administración.',
      },
    ],
  },
} satisfies Home;
