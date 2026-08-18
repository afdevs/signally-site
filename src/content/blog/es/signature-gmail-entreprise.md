---
slug: "firma-gmail-empresa"
title: "Poner la misma firma de Gmail para todos los usuarios del dominio"
description: "Tres formas de imponer una firma de Gmail en todo un dominio de Google Workspace: la configuración individual, el pie de página de la consola de administración y el complemento instalado en todo el dominio."
keyword: "firma gmail empresa"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-03
summary:
  - "Gmail solo prevé de forma nativa una firma por usuario, configurada por el propio usuario."
  - "El pie de página de la consola de administración se aplica en el servidor, con un formato muy limitado."
  - "Un complemento instalado en todo el dominio inserta una firma HTML completa al redactar."
  - "Solo este último método permite plantillas por unidad organizativa y banners con fechas."
related:
  - "google-workspace-signature"
  - "unite-organisationnelle-signature"
  - "gestion-signature-gmail"
faq:
  - q: "¿Se puede forzar una firma de Gmail desde la consola de administración de Google?"
    a: "La consola permite añadir un pie de página en el servidor mediante los ajustes de cumplimiento, pero no imponer una firma rica dentro de la interfaz de Gmail del usuario. Para una firma de marca completa hay que pasar por un complemento instalado en todo el dominio."
  - q: "¿Los usuarios pueden seguir modificando su firma?"
    a: "Con un complemento y plantillas bloqueadas, el administrador decide campo por campo qué sigue siendo editable. El logotipo y los avisos legales pueden quedar intocables dejando un campo libre, por ejemplo el teléfono directo."
  - q: "¿La firma se aplica también a los alias de envío?"
    a: "Un usuario que envía desde un alias conserva la firma de la plantilla vinculada a su cuenta. Si tus alias corresponden a marcas distintas, prevé una plantilla por entidad y comprueba el comportamiento deseado durante la validación."
  - q: "¿Hay que modificar los registros MX o el enrutamiento?"
    a: "No. Un complemento se ejecuta dentro de Gmail en el momento de redactar: no interviene ni en el enrutamiento ni en la entrega. Tus mensajes salen de tu dominio exactamente igual que antes."
---

En Google Workspace, la pregunta «cómo pongo la misma firma para todo el mundo» no tiene una
respuesta evidente en la consola. Gmail se pensó para que cada usuario definiera la suya, y las
herramientas de administración siguen, en este punto, por detrás de lo que ofrece Microsoft.
Coexisten tres enfoques, con resultados muy distintos.

## Enfoque 1 — Dejar que cada cual configure su firma

Es el comportamiento por defecto. Cada usuario abre **Configuración → General → Firma**, escribe su
bloque y Gmail lo añade a los mensajes nuevos.

Funciona en una estructura pequeña donde todo el mundo se habla. Más allá, los mismos síntomas
aparecen en todas partes: tipografías distintas según quién haya copiado de qué documento, logotipos
redimensionados a mano, avisos legales ausentes en las últimas incorporaciones y firmas que anuncian
cargos caducados.

El coste real no es la puesta en marcha inicial, es el mantenimiento: en cada cambio de identidad
gráfica hay que volver a explicar la operación a todo el dominio y confiar en una tasa de aplicación
decente. Ese coste está cuantificado en nuestro
[artículo sobre la gestión manual](/es/blog/coste-gestion-firmas-correo).

## Enfoque 2 — El pie de página de la consola de administración

Google ofrece, en los ajustes de cumplimiento de Gmail, una función para añadir texto al final de los
mensajes. Se aplica en el servidor a todo el tráfico que sale del dominio.

Presta un servicio real: imponer una mención legal al 100 % de los envíos, incluidos los que emiten
las aplicaciones. Pero sus límites son importantes. El formato es reducido, la inserción se hace
después del envío —el usuario nunca ve el resultado— y no hay ni campos personalizados por empleado,
ni plantillas por equipo, ni banners.

Es una herramienta de cumplimiento, no de marca. La comparación detallada está en
[el artículo sobre el pie de página de Google Workspace](/es/blog/firma-google-workspace).

## Enfoque 3 — Un complemento instalado en todo el dominio

El complemento se instala desde la consola de administración de Google, en una sola operación, para
todo el dominio. Se ejecuta dentro de Gmail en el momento de redactar e inserta una firma HTML
completa, rellenada con los datos del usuario traídos de Google Directory.

El recorrido de instalación son cuatro pasos, detallados en nuestra página del
[complemento de Google Workspace](/es/integraciones/google-workspace-gmail):

1. Instalación del complemento en todo el dominio desde la consola.
2. Sincronización del directorio, en solo lectura.
3. Asignación de una plantilla por unidad organizativa o por grupo.
4. Aplicación automática en Gmail, web y móvil.

> **Conviene saberlo:** la instalación en todo el dominio no exige ninguna acción de los usuarios. No
> tienen ni que aceptar una autorización individual ni que instalar nada.

## Lo que aporta en concreto el tercer enfoque

**Campos personalizados.** Nombre, cargo, departamento y teléfono vienen del directorio. Un cambio de
puesto se propaga sin que nadie tenga que pensar en ello.

**Plantillas por entidad.** Cada unidad organizativa puede recibir su propio modelo, lo que cubre las
organizaciones multimarca y multipaís. El mecanismo se describe en
[gestionar las firmas por unidad organizativa](/es/blog/firma-unidad-organizativa).

**Avisos legales bloqueados.** El administrador fija lo que debe quedar fijo. El empleado no puede
borrar la cláusula de confidencialidad por descuido al reescribir su firma.

**Banners con fechas.** Una campaña arranca y se detiene en las fechas fijadas, en los equipos
elegidos: ver la página de [campañas y banners](/es/campanas).

## Cómo elegir

| Tu situación | Enfoque adecuado |
| --- | --- |
| Menos de diez personas, sin cuestión de marca | Configuración individual |
| Mención legal obligatoria en todo el tráfico, aplicaciones incluidas | Pie de página de la consola |
| Firma de marca coherente en todo el dominio | Complemento en todo el dominio |
| Varias marcas, filiales o países | Complemento con una plantilla por unidad |

Las dos últimas filas se combinan a menudo con la segunda: un pie de página mínimo en la consola
para el suelo jurídico y el complemento para la firma visible. Lo esencial es comprobar que los dos
bloques no se repitan en el mensaje final.

Si partes de una situación en la que cada cual gestiona la suya, la transición se describe paso a
paso en [pasar a una gestión centralizada](/es/blog/gestion-centralizada-firma-gmail).
