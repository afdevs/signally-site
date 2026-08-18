---
slug: "seguridad-herramienta-firma-correo"
title: "¿Puede una herramienta de firma leer tus correos? La respuesta técnica"
description: "Según su arquitectura, una herramienta de firma accede o no al contenido de tus mensajes. La diferencia entre complemento en el cliente, regla de transporte y relé SMTP, explicada para una revisión de seguridad."
keyword: "seguridad herramienta firma correo"
cluster: "RGPD & sécurité"
pubDate: 2026-04-22
summary:
  - "Existen tres arquitecturas, y no tienen el mismo perímetro de acceso."
  - "Un complemento en el cliente escribe en el mensaje que se está redactando, sin leerlo ni almacenarlo."
  - "Una regla de transporte mantiene el mensaje dentro de tu propio servidor de correo, sin paso por el proveedor."
  - "Un relé SMTP hace pasar tus correos por un tercero: es el caso que hay que examinar de cerca."
related:
  - "signature-mail-rgpd"
  - "hebergement-donnees-france-saas"
  - "add-in-ou-regle-de-transport-exchange"
faq:
  - q: "¿Puede un complemento leer el contenido de mis correos?"
    a: "Los permisos que solicita un complemento se declaran en su manifiesto y se muestran en el consentimiento del administrador. Un complemento de firma solicita escritura en el mensaje que se está redactando y lectura de los atributos del directorio, no lectura del buzón."
  - q: "¿Cómo comprobar lo que un complemento pide realmente?"
    a: "La pantalla de consentimiento de tu proveedor de identidad enumera los permisos solicitados antes de aprobarlos. Es la prueba más directa del perímetro: viene de Microsoft o de Google, no del proveedor."
  - q: "¿Mis correos pasan por los servidores del proveedor?"
    a: "Con un complemento, no: el mensaje sale de tu tenant hacia su destinatario sin pasar por un tercero. Con un relé SMTP, sí, y es el punto que hay que examinar primero en una revisión de seguridad."
  - q: "¿Qué pasa si la herramienta se ve comprometida?"
    a: "El perímetro del riesgo es el de los datos que se guardan. Para un complemento, eso cubre el directorio sincronizado y las plantillas, no el contenido de los mensajes, que nunca fue accesible."
---

Es la primera pregunta de una revisión de seguridad, y es legítima: una herramienta que interviene en
tus correos, ¿tiene acceso a su contenido? La respuesta depende por completo de la arquitectura
elegida, y las tres arquitecturas del mercado no tienen el mismo perímetro.

## Arquitectura 1 — El complemento en el cliente

El complemento se ejecuta dentro del cliente de correo, en el momento en que la persona redacta su
mensaje. Inserta un bloque HTML en el cuerpo del mensaje en curso.

El perímetro de acceso se corresponde con los permisos declarados en el manifiesto del complemento:
escritura en el elemento que se está redactando y lectura de los atributos de directorio necesarios
para rellenar los campos.

De ahí se derivan dos propiedades, y son las que cuentan en una revisión de seguridad:

**El mensaje no pasa por el proveedor.** La inserción se produce en el puesto, en la ventana de
redacción. El mensaje sale después de tu tenant de Microsoft o Google hacia su destinatario, por tu
enrutamiento habitual, sin rodeos.

**El buzón no se lee.** El complemento interviene sobre un mensaje en curso de redacción, no sobre la
bandeja de entrada, el historial o los archivos.

Es la arquitectura de Signally, descrita en la página del
[complemento de Microsoft 365](/es/integraciones/microsoft-365-outlook).

## Arquitectura 2 — La regla de transporte

La firma la añade tu propio servidor de correo —Exchange Online o el servicio de cumplimiento de
Google Workspace— durante la entrega.

Aquí el proveedor no interviene en absoluto en el tratamiento del mensaje: facilita el contenido del
pie de página y tu servidor lo aplica. Sin acceso, sin paso.

A cambio, esta arquitectura tiene límites funcionales importantes —el remitente nunca ve su firma, los
hilos apilan bloques, los mensajes cifrados se le escapan— detallados en
[complemento o regla de transporte](/es/blog/complemento-outlook-o-regla-transporte-exchange).

## Arquitectura 3 — El relé SMTP

Es la que exige un examen atento. El mensaje sale de tu servidor, pasa por la infraestructura del
proveedor, que le añade la firma, y después continúa hacia su destinatario.

Esta arquitectura implica por construcción que **el contenido completo de tus mensajes pasa por un
tercero**: cuerpo, adjuntos, destinatarios. Implica también una modificación de tu enrutamiento
saliente, con las consecuencias asociadas sobre la entregabilidad y sobre tu configuración de SPF y
DKIM.

No es ilegítima en sí, y algunos proveedores la implementan con seriedad. Pero cambia la naturaleza de
la pregunta que se plantea a tu responsable de seguridad: ya no se trata de autorizar un componente,
sino de insertar a un tercero en tu cadena de entrega.

## Cómo comprobar, en lugar de creer

Tres comprobaciones concretas que no se apoyan en la palabra del proveedor.

**La pantalla de consentimiento.** Al conectar el tenant, tu proveedor de identidad —Microsoft Entra
ID o Google— muestra la lista exacta de permisos solicitados. Esa lista viene de Microsoft o de
Google, no del proveedor. Es la prueba más directa del perímetro.

**La documentación de la API.** Los permisos solicitados corresponden a ámbitos documentados
públicamente por Microsoft y Google. Puedes comprobar qué cubre cada uno.

**La configuración de enrutamiento.** Si la instalación pide modificar tus conectores, tus registros MX
o tu SPF, estás en una arquitectura de relé. Si no toca nada del enrutamiento, no lo estás.

> **Conviene saberlo:** haz capturar la pantalla de consentimiento durante la instalación y adjúntala al
> expediente de seguridad. Es una prueba fechada, que vale más que un compromiso comercial.

## El perímetro del riesgo residual

Ninguna herramienta tiene un riesgo nulo, y es más honesto delimitar el riesgo que negarlo.

Con un complemento, lo que obtendría un atacante en caso de compromiso del proveedor son los **datos
guardados**: el directorio sincronizado —nombres, cargos, teléfonos profesionales— y las plantillas.
No el contenido de los mensajes, que nunca fue accesible.

Es una diferencia de naturaleza, no de grado. Un directorio profesional filtrado es un incidente serio;
el historial de correos de una organización es otra cosa.

La localización y la jurisdicción aplicables a esos datos guardados son la otra mitad del expediente,
tratada en [soberanía de los datos](/es/blog/alojamiento-datos-ue-saas).

## El resumen que puedes pasar a tu responsable de seguridad

Bastan cuatro líneas para la arquitectura de complemento:

- La firma se inserta al redactar, en el cliente, en el mensaje en curso.
- Ningún contenido de correo se lee, se analiza, se almacena ni pasa por el proveedor.
- Los únicos datos sincronizados son los atributos de directorio que se muestran en la firma.
- Ninguna modificación del enrutamiento saliente: ni conector, ni relé, ni cambio de SPF.

Esos elementos y el detalle de lo que Signally no hace están en nuestra página de
[seguridad y RGPD](/es/seguridad-rgpd), pensada para reenviarse tal cual a un departamento de
informática.
