/** Política de privacidad — español. */

import type { Privacy } from '../fr/privacy';

export const privacy = {
  meta: {
    title: 'Política de privacidad — Signally',
    description:
      'Qué datos recopila Signally, por qué, dónde se alojan, a quién se confían y cómo ejercer sus derechos. Sin cookies de medición ni rastreadores de terceros.',
  },

  hero: {
    eyebrow: 'Política de privacidad',
    title: 'Lo que recopilamos y lo que no',
    lede:
      'Esta política describe el tratamiento de los datos personales en este sitio y en el servicio Signally. Complementa nuestros términos de servicio y nuestra página Seguridad y RGPD.',
  },

  updated: {
    label: 'Última actualización',
    value: '4 de septiembre de 2026',
  },

  sections: [
    {
      title: '1. Responsable del tratamiento',
      paragraphs: [
        'Signally edita este sitio y el servicio del mismo nombre. Para cualquier cuestión relativa a sus datos, la dirección de contacto figura al final del documento.',
      ],
    },
    {
      title: '2. Dos funciones distintas',
      paragraphs: [
        'Signally interviene en dos calidades diferentes, y esa distinción rige el resto de este documento.',
        'En este sitio, Signally es responsable del tratamiento: nosotros decidimos qué datos se recopilan de los visitantes y con qué finalidad.',
        'En el servicio, Signally es encargado del tratamiento en el sentido del artículo 28 del Reglamento General de Protección de Datos. Es la organización cliente quien decide sobre los datos de sus empleados; nosotros los tratamos siguiendo sus instrucciones, para prestarle el servicio.',
      ],
    },
    {
      title: '3. Datos recopilados en este sitio',
      paragraphs: [
        'Formulario de contacto: nombre, dirección de correo electrónico, organización y contenido del mensaje. Esta información nos llega por correo electrónico y no se registra en ninguna base de datos del sitio.',
        'Asistente de soporte: el contenido de sus preguntas y las respuestas asociadas, para tramitar la conversación y mejorar la calidad de las respuestas. Un identificador de conversación se conserva en el almacenamiento local de su navegador, únicamente para recuperar el hilo si vuelve a abrir la ventana.',
        'Registros técnicos: dirección IP e información de la petición, conservadas en memoria del servidor el tiempo necesario para aplicar nuestros límites contra abusos.',
      ],
    },
    {
      title: '4. Datos tratados en el servicio',
      paragraphs: [
        'Cuenta: identidad profesional, dirección de correo electrónico, función y organización de pertenencia.',
        'Atributos de firma: nombre, cargo, teléfono, departamento y demás campos que el cliente decida mostrar en las firmas de sus empleados.',
        'Contenidos: plantillas de firma, imágenes de campaña y parámetros asociados.',
        'Signally no lee el contenido de los correos de sus clientes, y estos no transitan por nuestros servidores.',
      ],
    },
    {
      title: '5. Finalidades y bases jurídicas',
      paragraphs: [
        'Responder a las solicitudes de contacto y de demostración: interés legítimo en atender una solicitud que se nos dirige.',
        'Prestar y administrar el servicio, gestionar las suscripciones y la facturación: ejecución del contrato.',
        'Garantizar la seguridad del sitio y del servicio y prevenir abusos: interés legítimo.',
        'Cumplir nuestras obligaciones contables y legales: obligación legal.',
      ],
    },
    {
      title: '6. Destinatarios y encargados',
      paragraphs: [
        'Los datos no se venden, ni se alquilan, ni se ceden a terceros con fines publicitarios.',
        'Recurrimos a proveedores técnicos estrictamente necesarios para el funcionamiento: alojamiento de la aplicación y de la base de datos en Francia; almacenamiento de archivos e imágenes en Amazon S3, región de París; protección antirrobot del formulario y del asistente mediante Cloudflare Turnstile; generación de las respuestas del asistente mediante la API de Anthropic; tratamiento de los pagos por suscripción mediante Stripe.',
        'Cuando un cliente conecta una plataforma de terceros —Microsoft 365, Google Workspace o Canva—, los intercambios con dicha plataforma se rigen además por su propia política de privacidad.',
      ],
    },
    {
      title: '7. Localización y transferencias',
      paragraphs: [
        'La aplicación, la base de datos y los archivos están alojados en la Unión Europea, en Francia.',
        'Algunos de los proveedores mencionados están establecidos fuera de la Unión Europea. Las eventuales transferencias se amparan en las cláusulas contractuales tipo de la Comisión Europea o en un mecanismo equivalente.',
      ],
    },
    {
      title: '8. Plazos de conservación',
      paragraphs: [
        'Solicitudes de contacto: tres años desde el último intercambio.',
        'Conversaciones con el asistente: el tiempo necesario para el seguimiento de la solicitud y la mejora del servicio, sin exceder los doce meses.',
        'Datos de cuenta y contenidos: la vigencia de la suscripción y, después, supresión de los sistemas de producción en un plazo razonable tras la finalización del contrato.',
        'Documentos contables: el plazo legal de conservación aplicable.',
      ],
    },
    {
      title: '9. Cookies y almacenamiento local',
      paragraphs: [
        'Este sitio no instala ninguna cookie de medición de audiencia, ninguna cookie publicitaria ni ningún rastreador de terceros. Por tanto, no hay banner de consentimiento que mostrar.',
        'Dos excepciones técnicas, sin finalidad de seguimiento: el almacenamiento local de su navegador conserva el identificador de conversación del asistente de soporte, y Cloudflare Turnstile puede instalar los elementos necesarios para la verificación antirrobot.',
      ],
    },
    {
      title: '10. Seguridad',
      paragraphs: [
        'Los intercambios con el sitio y con el servicio están cifrados en tránsito. Los accesos a los datos de producción están restringidos y registrados.',
        'El detalle de las medidas técnicas y organizativas figura en nuestra página Seguridad y RGPD.',
      ],
    },
    {
      title: '11. Sus derechos',
      paragraphs: [
        'Usted dispone de los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad sobre sus datos, así como del derecho a definir directrices sobre su destino tras su fallecimiento.',
        'Estos derechos se ejercen ante nosotros en la dirección indicada más abajo. Si sus datos se tratan en el marco del servicio por cuenta de su empleador, trasladaremos su solicitud a este último, que es el responsable.',
        'También puede presentar una reclamación ante la autoridad de control francesa, la Commission nationale de l’informatique et des libertés.',
      ],
    },
    {
      title: '12. Modificación de esta política',
      paragraphs: [
        'Esta política puede evolucionar, en particular si cambia un proveedor o una funcionalidad. La fecha de última actualización figura al principio de la página, y toda modificación sustancial se comunica a los clientes.',
      ],
    },
  ],

  todo:
    'Por completar antes de la publicación: identidad y dirección del responsable del tratamiento, datos de contacto del delegado de protección de datos si lo hubiera, dirección dedicada a las solicitudes de ejercicio de derechos, y validación de la lista de encargados y de los plazos de conservación. Este texto es una base de trabajo y debe ser revisado por un asesor jurídico antes de su publicación.',

  contact: {
    title: 'Ejercer sus derechos o hacer una consulta',
    text: 'Escríbanos y le responderemos en un plazo de dos días hábiles.',
    label: 'Contactar',
  },
} satisfies Privacy;
