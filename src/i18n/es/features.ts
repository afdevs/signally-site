import type { Features } from '../fr/features';

export const features = {
  meta: {
    title: 'Editor de firmas de correo — crear y desplegar una plantilla de empresa',
    description:
      'El editor de Signally: plantillas bloqueadas, campos dinámicos desde tu directorio, vista previa en Outlook y Gmail, despliegue por equipo. Generador gratuito.',
  },

  hero: {
    eyebrow: 'Generador de firmas de correo',
    title: 'Crea una firma de correo profesional y despliégala automáticamente en toda la empresa.',
    lede:
      'El editor de Signally te permite diseñar una firma impecable, y su despliegue se hace automáticamente, sin ninguna intervención de los empleados.',
    cta: 'Abrir el editor gratis',
  },

  grid: {
    title: 'Todo lo que un gestor de firmas de correo debe saber hacer',
    items: [
      {
        title: 'Editor visual',
        text:
          'Arrastra tus bloques y ajusta colores, tipografías y separadores. Sin escribir una línea de HTML.',
      },
      {
        title: 'Biblioteca de plantillas',
        text:
          'Plantillas de firma por sector, listas para personalizar con los colores de tu marca.',
      },
      {
        title: 'Campos dinámicos',
        text:
          'Nombre, cargo, departamento, teléfono, oficina: los campos se rellenan desde tu directorio de Microsoft Entra ID o Google Directory.',
      },
      {
        // Ancla compartida por los tres idiomas — ver el original francés.
        id: 'equipes',
        title: 'Equipos y grupos',
        text:
          'Una firma por filial, marca, departamento o país. Los empleados heredan la correcta automáticamente.',
      },
      {
        title: 'Bloqueo de administrador',
        text:
          'Tú decides qué puede modificar un empleado y qué queda intocable: logotipo, avisos legales, cláusula de confidencialidad.',
      },
      {
        title: 'Redes sociales y CTA',
        text:
          'Iconos sociales, botón para reservar cita, enlace a una reseña de cliente: cada firma pasa a ser accionable.',
      },
      {
        title: 'Vista previa multicliente',
        text:
          'Resultado comprobado en Outlook para Windows y Mac, Outlook Web, Gmail, Apple Mail y móvil antes de cualquier despliegue.',
      },
      {
        title: 'vCard y código QR',
        text:
          'Añade una tarjeta de visita digital o un código QR para guardar el contacto directamente en la firma.',
      },
      {
        title: 'Estadísticas',
        text:
          'Seguimiento de clics en enlaces y banners, por campaña, por equipo y por periodo.',
      },
    ] as { id?: string; title: string; text: string }[],
  },

  steps: {
    title: 'Del diseño al despliegue, en cuatro pasos',
    items: [
      {
        n: '01',
        title: 'Creas tu firma',
        text: 'Desde una plantilla o una página en blanco, con los colores de tu marca.',
      },
      {
        n: '02',
        title: 'Conectas el directorio',
        text:
          'Microsoft 365 o Google Workspace: los empleados y sus datos llegan solos.',
      },
      {
        n: '03',
        title: 'Asignas por equipo',
        text: 'Cada grupo recibe su plantilla y, si hace falta, sus propios banners.',
      },
      {
        n: '04',
        title: 'El complemento hace el resto',
        text: 'La firma aparece al redactar el mensaje, actualizada, para todo el mundo.',
      },
    ],
  },

  faq: {
    title: 'Preguntas frecuentes sobre el editor de firmas',
    items: [
      {
        q: '¿Cómo se crea una firma de correo profesional?',
        a: 'Parte de una plantilla de la biblioteca o de una página en blanco, añade tu logotipo, tus datos de contacto y tus redes sociales, y sustituye la información personal por campos dinámicos. La plantilla pasa entonces a valer para toda la empresa: cada empleado verá sus propios datos.',
      },
      {
        q: '¿Hace falta saber HTML?',
        a: 'No. El editor es totalmente visual. El HTML generado está optimizado para clientes de correo, lo que evita los errores típicos de un código escrito a mano: tablas mal cerradas, imágenes sin redimensionar, estilos que Outlook ignora.',
      },
      {
        q: '¿Puedo impedir que los empleados modifiquen su firma?',
        a: 'Sí. El administrador define campo por campo qué es modificable y qué queda bloqueado. El logotipo, los avisos legales y la estructura de la plantilla siguen siendo intocables, aunque dejes que el empleado ajuste su teléfono directo.',
      },
      {
        q: '¿Puede un empleado tener varias firmas?',
        a: 'Sí: una firma para el primer mensaje y otra más corta para las respuestas, por ejemplo, o una firma por marca para los comerciales que llevan varias entidades.',
      },
      {
        q: '¿Cómo compruebo el resultado antes de desplegar?',
        a: 'Cada plantilla tiene una vista previa multicliente: Outlook para Windows y Mac, Outlook Web, Gmail, Apple Mail y móviles iOS y Android. También puedes enviarte una prueba antes de publicar.',
      },
      {
        q: '¿Los datos vienen automáticamente del directorio?',
        a: 'Sí. Los campos dinámicos se rellenan desde Microsoft Entra ID o Google Directory. Cuando un cargo cambia en el directorio, la firma se actualiza sin que nadie intervenga.',
      },
    ],
  },

  cta: {
    title: 'Crea tu primera firma con Signally',
    text:
      'El editor está abierto y es gratuito. El despliegue en toda la empresa viene después, en cuestión de minutos.',
    primaryLabel: 'Abrir el editor',
  },
} satisfies Features;
