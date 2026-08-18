import type { Security } from '../fr/security';

export const security = {
  meta: {
    title: 'Seguridad, RGPD y soberanía — Signally no lee tus correos',
    description:
      'Lo que Signally hace y lo que no: ningún correo leído, nada que pase por nuestros servidores, datos alojados en la Unión Europea, encargado del tratamiento según el artículo 28.',
  },

  hero: {
    eyebrow: 'Seguridad, RGPD y soberanía',
    title: 'Tus correos no pasan por nosotros. Tus datos se quedan en la UE.',
    lede:
      'La página que puedes pasar a tu departamento de TI, a tu delegado de protección de datos y a tu responsable de seguridad. Describe con precisión lo que Signally hace, lo que no hace y dónde viven los datos.',
  },

  scope: {
    doesTag: 'LO QUE SIGNALLY HACE',
    does: [
      'Almacenar tus plantillas de firma y tus materiales de campaña',
      'Leer, con acceso restringido, los atributos de directorio que la firma necesita (nombre, cargo, teléfono, departamento, dependencia organizativa)',
      'Insertar un bloque HTML de firma en el momento en que el empleado redacta su mensaje',
      'Contabilizar los clics en los enlaces de banner que has creado',
    ],
    doesNotTag: 'LO QUE SIGNALLY NO HACE',
    doesNot: [
      'Leer, analizar o indexar el contenido de tus correos',
      'Almacenar tus mensajes, tus adjuntos o tus libretas de direcciones',
      'Hacer pasar tus correos por sus servidores',
      'Enviar correos en tu nombre o modificar tu enrutamiento SMTP',
      'Transferir datos fuera de la Unión Europea',
    ],
  },

  guarantees: [
    {
      title: 'Alojamiento en la Unión Europea',
      text:
        'Infraestructura situada en Francia, operada bajo derecho europeo. Ninguna transferencia a un tercer país en el marco del servicio.',
    },
    {
      title: 'Cumplimiento del RGPD',
      text:
        'Signally actúa como encargado del tratamiento en el sentido del artículo 28. Acuerdo de tratamiento, registro, plazos de conservación y procedimiento de supresión documentados.',
    },
    {
      title: 'Minimización de datos',
      text:
        'Solo se sincronizan los campos de directorio que realmente aparecen en la firma. Nada más.',
    },
    {
      title: 'Autenticación y acceso',
      text:
        'Inicio de sesión mediante tu proveedor de identidad de Microsoft o Google, roles de administrador granulares y registro de acciones.',
    },
    {
      title: 'Cifrado',
      text: 'Cifrado del tráfico en tránsito y de los datos en reposo, en toda la plataforma.',
    },
    {
      title: 'Reversibilidad',
      text:
        'Exportación de tus plantillas y supresión completa de tu espacio a petición, sin retención oculta.',
    },
  ],

  todo:
    'Bloque pendiente de completar con tus datos contractuales reales: nombre del proveedor de alojamiento, ubicación exacta de los centros de datos, certificaciones obtenidas o en curso, DPA descargable, contacto del delegado de protección de datos.',

  faq: {
    title: 'Preguntas frecuentes — seguridad y cumplimiento',
    items: [
      {
        q: '¿Signally lee el contenido de mis correos?',
        a: 'No. El complemento inserta un bloque de firma en el momento de la redacción. El contenido del mensaje no se lee, ni se analiza, ni se almacena, y no pasa por nuestros servidores.',
      },
      {
        q: '¿Dónde se alojan los datos?',
        a: 'En la Unión Europea. Las plantillas, los materiales de campaña y los atributos de directorio sincronizados se alojan en una infraestructura situada en Francia, sujeta al RGPD.',
      },
      {
        q: '¿Qué datos personales se tratan?',
        a: 'Únicamente los campos de directorio que aparecen en la firma: nombre, apellidos, cargo, departamento, dirección de correo, teléfono profesional y dependencia organizativa. Es el principio de minimización aplicado con rigor.',
      },
      {
        q: '¿Signally es encargado del tratamiento según el RGPD?',
        a: 'Sí. Signally actúa como encargado del tratamiento por cuenta de tu empresa, que es la responsable. Un acuerdo de tratamiento de datos precisa las finalidades, los plazos de conservación y las medidas de seguridad.',
      },
      {
        q: '¿Qué ocurre con el acceso si cancelamos?',
        a: 'Recuperas tus plantillas y tus materiales, y después tu espacio se elimina. No se conserva nada más allá de los plazos previstos en el contrato.',
      },
      {
        q: '¿Vuestros servidores están sujetos a legislación extraterritorial?',
        a: 'El alojamiento en Francia y la ausencia de transferencias fuera de la Unión Europea sitúan el servicio bajo el derecho europeo exclusivamente, que es precisamente lo que buscan muchos departamentos de TI y jurídicos.',
      },
    ],
  },

  cta: {
    title: '¿Una duda de cumplimiento? Hablemos.',
    text:
      'Respondemos con gusto a los cuestionarios de seguridad de tus departamentos de TI y jurídico.',
    secondaryLabel: 'Contactar con el equipo',
  },
} satisfies Security;
