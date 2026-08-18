import type { Integrations } from '../fr/integrations';

export const integrations = {
  microsoft: {
    meta: {
      title: 'Firma de correo Microsoft 365 y Outlook — complemento de despliegue centralizado',
      description:
        'Despliega la firma de Outlook de toda la empresa desde el centro de administración de Microsoft 365. Sin regla de transporte de Exchange, sin redirecciones, en quince minutos.',
    },
    hero: {
      eyebrow: 'Complemento de Microsoft 365',
      title:
        'Firma en Outlook y Microsoft 365: despliegue centralizado, sin regla de transporte.',
      lede:
        'El complemento de Signally se instala desde tu centro de administración de Microsoft 365 y aplica la firma correcta a cada empleado, en Outlook Web, Windows, Mac y móvil. Tus correos siguen saliendo de tu propio tenant.',
    },
    journeysTitle: 'Lo que ocurre de verdad, del lado del administrador y del empleado',
    adminTag: 'LADO ADMINISTRADOR — 15 MINUTOS',
    adminSteps: [
      {
        title: 'Conexión del tenant',
        text:
          'Autorizas Signally desde Entra ID con consentimiento de administrador, en solo lectura sobre el directorio.',
      },
      {
        title: 'Despliegue del complemento',
        text:
          'En «Aplicaciones integradas» despliegas el complemento a toda la organización o a un grupo piloto.',
      },
      {
        title: 'Asignación de plantillas',
        text: 'Vinculas cada grupo de Microsoft 365 con la plantilla de firma que le corresponde.',
      },
      {
        title: 'Actualización permanente',
        text:
          'Aparece una nueva incorporación en el directorio: recibe su firma sin que tengas que hacer nada.',
      },
    ],
    userTag: 'LADO EMPLEADO — 0 MINUTOS',
    userSteps: [
      {
        title: 'Abre Outlook',
        text: 'Nada que instalar, nada que copiar y pegar, ningún tutorial que seguir.',
      },
      {
        title: 'Redacta un mensaje',
        text:
          'La firma se inserta en el cuerpo del mensaje, con sus datos y el banner del momento.',
      },
      {
        title: 'Lo envía',
        text: 'El mensaje sale por su cuenta de Microsoft 365. Signally no interviene en el envío.',
      },
      {
        title: 'Ve lo mismo que el destinatario',
        text:
          'La firma se ve en los elementos enviados, a diferencia de las reglas de transporte del servidor.',
      },
    ],
    callout: {
      title: '¿Por qué un complemento y no una regla de transporte de Exchange?',
      text:
        'Una regla de transporte añade la firma después del envío, en el servidor: el empleado nunca la ve, las respuestas encadenadas se apilan mal y el cifrado puede dar problemas. El complemento inserta la firma al redactar, en el mensaje que el usuario tiene delante, sin redirigir el tráfico ni mantener un conector SMTP.',
    },
    environmentsTitle: 'Entornos compatibles',
    environments: [
      { name: 'Outlook Web', detail: 'Navegador, todos los sistemas' },
      { name: 'Outlook Windows', detail: 'Outlook clásico y nuevo' },
      { name: 'Outlook Mac', detail: 'Versión actual' },
      { name: 'Outlook móvil', detail: 'iOS y Android' },
      { name: 'Exchange Online', detail: 'Tenants de Microsoft 365' },
    ],
    howToName: 'Desplegar una firma de correo en Microsoft 365 y Outlook',
    faq: {
      title: 'Preguntas frecuentes — Microsoft 365 y Outlook',
      items: [
        {
          q: '¿Cómo despliego una firma de correo para todos los usuarios de Microsoft 365?',
          a: 'Conectas tu tenant a Signally con consentimiento de administrador, despliegas el complemento desde la sección «Aplicaciones integradas» del centro de administración de Microsoft 365 y después asignas una plantilla a cada grupo. El despliegue completo lleva unos quince minutos.',
        },
        {
          q: '¿El complemento funciona en el nuevo Outlook?',
          a: 'Sí. El complemento funciona en Outlook Web, el nuevo Outlook para Windows, el Outlook clásico de Windows, Outlook para Mac y Outlook móvil en iOS y Android.',
        },
        {
          q: '¿Hay que crear una regla de transporte de Exchange?',
          a: 'No, y es una ventaja: sin redirigir el tráfico, sin conector y sin modificar tu enrutamiento saliente. La firma se inserta en el mensaje en el momento de redactarlo.',
        },
        {
          q: '¿El complemento accede al contenido de mis correos?',
          a: 'No. Inserta un bloque de firma en el cuerpo del mensaje que se está redactando. No lee, no analiza y no conserva el contenido de tus mensajes, y ningún correo pasa por nuestros servidores.',
        },
        {
          q: '¿Qué pasa con una nueva incorporación?',
          a: 'En cuanto su cuenta aparece en el directorio y pertenece a un grupo vinculado a una plantilla, recibe su firma. No se le pide nada, ni a él ni al equipo de informática.',
        },
        {
          q: '¿Se puede probar en un grupo piloto antes de generalizar?',
          a: 'Sí. El despliegue del complemento puede limitarse a un grupo de Microsoft 365 que elijas y ampliarse después a toda la organización cuando lo valides.',
        },
      ],
    },
    cta: {
      title: 'Despliega tus firmas de Outlook con Signally',
      text:
        'Quince minutos desde tu centro de administración de Microsoft 365, sin tocar tu enrutamiento.',
      secondaryLabel: 'Solicitar una demo',
    },
  },

  google: {
    meta: {
      title: 'Firma de Gmail y Google Workspace — complemento de despliegue en todo el dominio',
      description:
        'Gestiona la firma de Gmail de todo el dominio desde la consola de administración de Google: complemento para todo el dominio, plantillas por unidad organizativa y banners programados.',
    },
    hero: {
      eyebrow: 'Complemento de Google Workspace',
      title:
        'Firma de Gmail para toda la empresa, gestionada desde la consola de administración de Google.',
      lede:
        'Instalación en todo el dominio, sincronización de las unidades organizativas y firma aplicada en Gmail web y móvil. Tus mensajes siguen saliendo por tu cuenta de Google Workspace.',
    },
    stepsTitle: 'Instalación en todo el dominio, en cuatro pasos',
    steps: [
      {
        n: '01',
        title: 'Instalación en todo el dominio',
        text:
          'Desde la consola de administración de Google, instalas el complemento de Signally para todo el dominio.',
      },
      {
        n: '02',
        title: 'Sincronización del directorio',
        text: 'Los usuarios y sus atributos llegan desde Google Directory, en solo lectura.',
      },
      {
        n: '03',
        title: 'Plantillas por unidad organizativa',
        text: 'Cada unidad organizativa o grupo de Google recibe su plantilla de firma y sus banners.',
      },
      {
        n: '04',
        title: 'Aplicación en Gmail',
        text:
          'La firma aparece al redactar, en Gmail web y en móvil, siempre actualizada.',
      },
    ],
    callout: {
      title: '¿Y el límite de las firmas nativas de Gmail?',
      text:
        'Gmail permite que cada usuario defina su propia firma, sin control central, sin plantilla bloqueada y sin banner programado. La función de «añadir pie de página» de la consola de Google se aplica en el servidor en texto plano y rompe el formato. Signally aporta la plantilla única, el bloqueo de administrador y las campañas, sin cambiar nada de tu enrutamiento.',
    },
    howToName: 'Desplegar una firma de Gmail en todo el dominio de Google Workspace',
    faq: {
      title: 'Preguntas frecuentes — Google Workspace y Gmail',
      items: [
        {
          q: '¿Cómo pongo la misma firma para todos los usuarios de Google Workspace?',
          a: 'Instalas el complemento de Signally para todo el dominio desde la consola de administración de Google, sincronizas el directorio y después asignas una plantilla a cada unidad organizativa o grupo. La firma se aplica entonces en Gmail.',
        },
        {
          q: '¿Qué diferencia hay con el pie de página nativo de Google Workspace?',
          a: 'El pie de página de la consola se añade en el servidor, al final de la conversación, con un formato muy limitado. El complemento de Signally inserta una firma HTML completa al redactar, con logotipo, redes sociales y banner de campaña.',
        },
        {
          q: '¿Se tienen en cuenta las unidades organizativas?',
          a: 'Sí. Puedes asignar una plantilla distinta por unidad organizativa o por grupo de Google, lo que cubre organizaciones con varias filiales y varios países.',
        },
        {
          q: '¿La firma se ve en Gmail móvil?',
          a: 'Sí, la firma definida se aplica a los mensajes redactados desde la aplicación de Gmail, dentro de los límites de representación propios de los clientes móviles.',
        },
        {
          q: '¿Signally envía mis correos en mi lugar?',
          a: 'No. Tus mensajes salen desde tu propia cuenta de Google Workspace. No intervenimos ni en el envío, ni en el enrutamiento, ni en la entregabilidad.',
        },
        {
          q: '¿Qué permisos se solicitan?',
          a: 'Acceso de lectura a los atributos de directorio que la firma necesita y permiso para insertar la firma al redactar. No se requiere ningún acceso al contenido de los mensajes.',
        },
      ],
    },
    cta: {
      title: 'Unifica tus firmas de Gmail con Signally',
      text:
        'Un complemento instalado en todo el dominio, plantillas por unidad organizativa y ninguna firma improvisada.',
      secondaryLabel: 'Solicitar una demo',
    },
  },
} satisfies Integrations;
