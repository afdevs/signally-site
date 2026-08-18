import type { Compare } from '../fr/compare';

/**
 * La publicidad comparativa está regulada en Francia (art. L122-1 del
 * código de consumo) y en la UE. La misma regla se aplica a esta
 * traducción: objetiva, verificable y sin denigrar. Revisión jurídica
 * antes de publicar — ver la nota completa en el original francés.
 */
export const compare = {
  meta: {
    title: '¿Qué software de gestión de firmas de correo elegir en 2026?',
    description:
      'La tabla de ocho criterios para comparar con honestidad las herramientas de firma de correo: despliegue, ubicación de los datos, acceso al correo, campañas, precio y reversibilidad.',
  },

  hero: {
    eyebrow: 'Comparativas',
    title: '¿Qué software de gestión de firmas de correo elegir en 2026?',
    lede:
      'Los criterios que de verdad importan al elegir: el modo de despliegue, la ubicación de los datos, la gestión de campañas y el coste real para tu plantilla.',
  },

  criteria: {
    title: 'Los ocho criterios de una comparativa honesta',
    lede:
      'Usa esta tabla con cualquier proveedor del mercado. Aquí damos nuestras propias respuestas; pide las suyas por escrito.',
    items: [
      {
        n: 'CRITERIO 01',
        title: 'Modo de despliegue',
        text:
          '¿Complemento en el cliente o regla de transporte en el servidor? El primero deja que el empleado vea su firma; la segunda, no.',
        answer: 'Signally: complementos de Microsoft 365 y Google Workspace, sin redirecciones',
      },
      {
        n: 'CRITERIO 02',
        title: 'Ubicación de los datos',
        text:
          '¿Dónde se alojan el directorio sincronizado y las plantillas? Un proveedor fuera de la UE te expone a regímenes extraterritoriales.',
        answer: 'Signally: alojamiento en la Unión Europea',
      },
      {
        n: 'CRITERIO 03',
        title: 'Acceso al contenido de los correos',
        text:
          '¿El proveedor ve pasar tus mensajes? Es la pregunta que hay que plantear por escrito a tu responsable de seguridad.',
        answer: 'Signally: ningún contenido de correo leído ni de paso',
      },
      {
        n: 'CRITERIO 04',
        title: 'Campañas programadas',
        text:
          'Banners con fechas, segmentación por equipo, sucesión automática: ¿están incluidos o reservados a una edición superior?',
        answer: 'Signally: incluido en el precio único',
      },
      {
        n: 'CRITERIO 05',
        title: 'Tarifas públicas',
        text:
          '¿Un precio publicado o un presupuesto cada vez? La transparencia de precios cambia la negociación.',
        answer: 'Signally: tabla pública de 1,50 € a 0,50 € sin IVA / usuario / mes',
      },
      {
        n: 'CRITERIO 06',
        title: 'Una prueba real sin compromiso',
        text: '¿Puedes crear una firma y probarla antes de hablar con un comercial?',
        answer: 'Signally: editor accesible gratis, sin tarjeta de crédito',
      },
      {
        n: 'CRITERIO 07',
        title: 'Soporte e idioma',
        text:
          '¿Un equipo localizable en tu franja horaria y en tu idioma, o un centro de ayuda solo en inglés?',
        answer: 'Signally: equipo europeo, soporte incluido',
      },
      {
        n: 'CRITERIO 08',
        title: 'Reversibilidad',
        text:
          '¿Recuperas tus plantillas y tus datos si te vas, y en qué plazo se eliminan?',
        answer: 'Signally: exportación y supresión a petición',
      },
    ],
  },

  alternatives: {
    title: 'Comparativas detalladas',
    lede:
      'Cada alternativa tiene su propia página, construida sobre la misma tabla. Estas páginas captan las búsquedas de «alternativa a» y «comparativa», muy cualificadas al final del proceso de compra.',
    readMore: 'Leer la comparativa →',
    soon: 'Próximamente',
    note:
      'Las páginas de comparativa se redactan únicamente a partir de información pública y verificable, con fuentes y fechas, sin afirmaciones no verificables sobre los productos de la competencia.',
    items: [
      {
        title: 'Signally frente a Letsignit',
        keyword: 'alternativa letsignit',
        desc: 'Tabla de comparación sobre despliegue, ubicación de los datos y precios.',
        article: null,
      },
      {
        title: 'Signally frente a Exclaimer',
        keyword: 'alternativa exclaimer',
        desc:
          'Complemento en el cliente frente a procesamiento en el servidor: qué cambia para tus usuarios.',
        article: null,
      },
      {
        title: 'Signally frente a Signitic',
        keyword: 'alternativa signitic',
        desc: 'Dos soluciones europeas comparadas en campañas, gobernanza y precio.',
        article: null,
      },
      {
        title: 'Signally frente a MySignature',
        keyword: 'alternativa mysignature',
        desc: 'Generador individual o gestión de parque: cuándo cambia la necesidad.',
        article: null,
      },
      {
        title: 'Signally frente a las firmas nativas de Microsoft 365',
        keyword: 'firma nativa microsoft 365',
        desc: 'Lo que una regla de transporte de Exchange no sabe hacer con una firma de marca.',
        article: 'add-in-ou-regle-de-transport-exchange',
      },
      {
        title: 'Signally frente a las firmas nativas de Google Workspace',
        keyword: 'firma nativa google workspace',
        desc: 'Los límites del pie de página de la consola de administración de Google.',
        article: 'google-workspace-signature',
      },
    ] as { title: string; keyword: string; desc: string; article: string | null }[],
  },

  crosslinks: {
    pricing: {
      label: 'Nuestras tarifas públicas',
      desc: 'De 1,50 € a 0,50 € sin IVA por usuario, con simulador',
    },
    security: {
      label: 'Nuestro enfoque de seguridad y RGPD',
      desc: 'Alojamiento en la UE, ningún correo leído, reversibilidad',
    },
  },

  cta: {
    title: 'Prueba Signally antes de comparar sobre el papel',
    text:
      'El editor está abierto: crea una firma completa en unos minutos, sin tarjeta de crédito.',
    secondaryLabel: 'Hacer una pregunta',
  },
} satisfies Compare;
