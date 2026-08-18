---
slug: "nuevo-outlook-firma"
title: "Firma de correo en el nuevo Outlook para Windows: lo que cambia en 2026"
description: "El nuevo Outlook para Windows se apoya en el motor de Outlook Web, no en el de Word. Lo que eso cambia para tus firmas, las trampas de la migración y qué comprobar antes de dar el salto."
keyword: "nuevo outlook firma"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-22
summary:
  - "El nuevo Outlook comparte el motor de representación de Outlook Web: el HTML de las firmas se ve mejor que en el Outlook clásico."
  - "Las firmas creadas localmente en el Outlook antiguo no siempre migran: se almacenan de otra manera."
  - "Los complementos compatibles con Outlook Web funcionan en el nuevo Outlook, a diferencia de los antiguos complementos COM."
  - "Mientras conviven los dos clientes, una plantilla centralizada evita tener que mantener dos juegos de firmas."
related:
  - "signature-mail-outlook-entreprise"
  - "signature-outlook-mobile"
  - "signature-mail-html"
faq:
  - q: "¿Se conservan mis firmas actuales al pasar al nuevo Outlook?"
    a: "No siempre. El Outlook antiguo guarda las firmas como archivos locales en el perfil de Windows; el nuevo las sincroniza con la cuenta. La migración funciona en muchos casos, pero falla sobre todo cuando la firma contiene imágenes incrustadas localmente."
  - q: "¿Funcionan los complementos COM de firma en el nuevo Outlook?"
    a: "No. El nuevo Outlook solo ejecuta complementos en formato web. Una herramienta basada en un complemento COM clásico deja de funcionar en el momento del cambio."
  - q: "¿El resultado HTML es mejor en el nuevo Outlook?"
    a: "Sí, de forma apreciable. El nuevo cliente comparte el motor de Outlook Web, que gestiona el CSS mucho mejor que el motor de Word del Outlook clásico. Una firma construida para el Outlook clásico se verá bien en el nuevo; lo contrario no está garantizado."
  - q: "¿Conviene esperar antes de migrar?"
    a: "Esa es una cuestión de tu planificación de TI, no de la firma. Ahora bien, si tienes prevista la migración, es el buen momento para centralizar las firmas: te ahorrarás reconstruirlas puesto por puesto."
---

Microsoft está haciendo converger progresivamente sus clientes de Outlook para Windows hacia una
base común con Outlook Web. Para los equipos que gestionan firmas de empresa, ese cambio de motor
tiene consecuencias concretas: más bien buenas en la representación, más delicadas en la migración
de lo existente.

## Un motor de representación por fin coherente con la web

El Outlook clásico para Windows muestra el HTML de los mensajes con el motor de Microsoft Word. De
ahí vienen la mayoría de las contorsiones históricas del HTML de correo: tablas anidadas, atributos
de dimensión fijos, propiedades `mso-` propietarias, ausencia de `float` fiable.

El nuevo Outlook se apoya en la misma base que Outlook Web. El CSS está mucho mejor soportado, los
márgenes se comportan con normalidad, las imágenes se dimensionan como se espera. Una firma diseñada
para sobrevivir al motor de Word se verá sin problemas en el nuevo cliente: la compatibilidad hacia
atrás está garantizada. Lo contrario no: una firma escrita libremente para el nuevo Outlook se
degradará en el antiguo.

Así que, mientras los dos clientes convivan en tu parque, la regla sigue siendo producir un HTML
conservador, compatible con el Outlook clásico. Las restricciones correspondientes se detallan en
nuestro artículo sobre [el HTML de una firma de correo](/es/blog/firma-de-correo-html).

## El verdadero punto de fricción: migrar las firmas existentes

El Outlook antiguo conserva las firmas en el perfil de Windows del usuario, como archivos `.htm`,
`.rtf` y `.txt`, junto con una carpeta de recursos que contiene las imágenes. El nuevo Outlook, en
cambio, vincula las firmas a la cuenta y las sincroniza en el servicio.

La recuperación automática funciona en muchos casos, pero falla con regularidad en las firmas que
contienen imágenes incrustadas localmente: precisamente el caso más extendido cuando cada cual ha
pegado su logotipo a mano. El usuario cambia y se encuentra con una firma sin su logotipo, o vacía.

En un parque de unos pocos puestos, se repara a mano. En doscientos buzones, el cambio genera una
oleada de tickets que llega toda a la vez.

> **Conviene saberlo:** si tus firmas las gestiona una plantilla centralizada en lugar de archivos
> locales, la cuestión no se plantea. La firma se vuelve a aplicar desde el servidor, sea cual sea el
> cliente utilizado.

## Complementos COM frente a complementos web

Es el punto de ruptura más claro para las herramientas de terceros. El nuevo Outlook no ejecuta
complementos COM, esas extensiones instaladas en el puesto Windows que durante mucho tiempo usaron
las soluciones de firma de la generación anterior. Solo se admiten los complementos en formato web,
los que ya funcionan en Outlook Web.

En la práctica, si tu herramienta actual se basa en un complemento COM, dejará de funcionar al
cambiar. Es una pregunta que hay que plantear explícitamente a tu proveedor antes de planificar la
migración.

El complemento de Signally es un complemento web: funciona en Outlook Web, el nuevo Outlook para
Windows, el Outlook clásico de Windows, Outlook para Mac y Outlook móvil. El detalle de los entornos
cubiertos está en la página del
[complemento de Microsoft 365](/es/integraciones/microsoft-365-outlook).

## Qué comprobar antes de cambiar

Cuatro puntos, en orden.

**El inventario de las firmas existentes.** ¿Cuántas son locales y cuántas están gestionadas de
forma centralizada? Las primeras son las que darán problemas.

**La compatibilidad de tu herramienta.** Complemento web o complemento COM. Es binario.

**El resultado en los dos clientes.** Durante el periodo de convivencia, cada plantilla debe
previsualizarse en el Outlook antiguo y en el nuevo. Una diferencia de representación que pase
desapercibida internamente la verán tus clientes.

**El móvil.** El cambio en Windows no afecta a Outlook móvil, pero es la ocasión de revisar un
entorno a menudo descuidado: ver
[firma en Outlook móvil](/es/blog/firma-outlook-movil).

## Convertir la migración en una oportunidad, no en una carga

Una migración de cliente de correo es el momento en el que, de todos modos, se toca la configuración
de cada puesto. Es por tanto el mejor momento para dejar de gestionar las firmas puesto por puesto.

Al centralizar la plantilla antes del cambio, la firma pasa a ser independiente del cliente: se
vuelve a aplicar al redactar, con los datos del directorio, tanto si el empleado usa el Outlook
antiguo como el nuevo, la web o su teléfono. La migración deja entonces de generar tickets de firma,
y de paso recuperas el control sobre la identidad gráfica, los avisos legales y las
[campañas de banners](/es/campanas).
