import type { Contact } from '../fr/contact';

export const contact = {
  meta: {
    title: 'Contacto y demo — hablemos de tu despliegue',
    description:
      'Una demo de Signally dura veinte minutos: tu directorio, tu plantilla, tu primera campaña. Escríbenos o reserva un hueco.',
  },

  hero: {
    eyebrow: 'Contacto y demo',
    title: 'Hablemos de tu despliegue.',
    lede: 'Una demo dura veinte minutos: tu directorio, tu plantilla, tu primera campaña.',
  },

  form: {
    title: 'Solicitar una demo',
    successTitle: 'Mensaje enviado.',
    successText: 'Te respondemos en un día laborable, a la dirección que has indicado.',
    submit: 'Solicitar mi demo',
    submitting: 'Enviando…',
    legal:
      'Tus datos se usan únicamente para atender tu solicitud. Están alojados en la Unión Europea y nunca se ceden.',
    honeypot: 'No rellenes este campo',
    fields: {
      name: { label: 'Nombre y apellidos', placeholder: 'Camille Durand' },
      email: { label: 'Correo profesional', placeholder: 'camille@empresa.es' },
      company: { label: 'Empresa', placeholder: 'Nombre de la empresa' },
      headcount: { label: 'Número de empleados', placeholder: '120' },
      environment: { label: 'Entorno de correo' },
      message: {
        label: 'Qué necesitas',
        placeholder:
          'Unificar las firmas de tres filiales y lanzar una campaña de selección de personal.',
      },
    },
    environments: [
      'Microsoft 365 / Outlook',
      'Google Workspace / Gmail',
      'Ambos',
      'Otro',
    ],
    errors: {
      name: 'Indica tu nombre y tus apellidos.',
      emailRequired: 'Indica tu correo profesional.',
      emailInvalid: 'Esta dirección de correo no es válida.',
      company: 'Indica el nombre de tu empresa.',
      environment: 'Elige un entorno de correo.',
      message: 'Describe lo que necesitas en unas palabras (10 caracteres como mínimo).',
      tooLong: 'Este campo es demasiado largo.',
    },
    alerts: {
      validation: 'Algunos campos están incompletos o no son válidos. Revisa el formulario.',
      frequence: 'Demasiadas solicitudes desde esta dirección. Inténtalo de nuevo en unos minutos.',
      envoi: 'El envío ha fallado. Inténtalo dentro de un momento o escríbenos a',
      format: 'No se ha podido leer la solicitud. Inténtalo de nuevo.',
      network: 'No se ha podido conectar. Revisa tu red o escríbenos a',
    },
  },

  side: {
    tryTitle: '¿Prefieres probarlo primero?',
    tryText:
      'El editor está abierto: crea una firma completa, pruébala en tu cliente de correo y decide después.',
    tag: 'SIGNALLY',
    points: [
      'Software europeo de gestión de firmas de correo',
      'Datos alojados en la Unión Europea',
      'Soporte incluido en la suscripción',
    ],
    mailLabel: 'Escríbenos directamente:',
    todo: 'Bloque pendiente de completar: dirección postal, teléfono, CIF, contacto del delegado de protección de datos.',
  },
} satisfies Contact;
