---
slug: "firma-outlook-movil"
title: "Firma en Outlook móvil: por qué desaparece y cómo recuperarla"
description: "«Enviado desde mi iPhone» en lugar de tu firma de empresa: por qué Outlook móvil ignora las firmas locales del ordenador y cómo conseguir una firma coherente en el teléfono."
keyword: "firma outlook movil"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-27
summary:
  - "Las firmas creadas en Outlook para Windows o Mac son locales al puesto: no se sincronizan con el teléfono."
  - "Outlook móvil aplica por defecto su propia firma, normalmente el texto genérico «Enviado desde Outlook»."
  - "Una parte importante del correo profesional sale desde un móvil: la firma está allí tan expuesta como en cualquier otro sitio."
  - "Solo una firma aplicada desde el servicio, mediante un complemento, se mantiene idéntica en ordenador y en móvil."
related:
  - "nouveau-outlook-signature"
  - "signature-mail-outlook-entreprise"
  - "signature-gmail-mobile"
faq:
  - q: "¿Por qué mi firma de empresa no aparece en Outlook móvil?"
    a: "Porque se creó localmente en el Outlook del ordenador. Esas firmas se guardan en el perfil del equipo y no se sincronizan con la aplicación móvil, que gestiona su propia firma independiente."
  - q: "¿Se puede poner una firma HTML completa en Outlook móvil?"
    a: "La aplicación móvil solo ofrece un campo de firma en texto enriquecido muy limitado, sin un editor HTML real. Pegar un bloque HTML completo da un resultado imprevisible. Por eso la firma debe venir del servicio, no de la aplicación."
  - q: "¿Cómo elimino «Enviado desde Outlook para iOS»?"
    a: "En la aplicación: Configuración → Firma, y después sustituye el texto por defecto. En un parque gestionado, es preferible imponer la firma de forma centralizada en lugar de pedir la operación a cada empleado."
  - q: "¿Los banners de campaña se ven en el móvil?"
    a: "Sí, siempre que la firma la inserte el complemento: el banner forma parte del bloque insertado al redactar, sea cual sea el cliente utilizado."
---

Es una de las diferencias más visibles y menos tratadas: la firma cuidada que se ha desplegado en
los ordenadores desaparece en cuanto el empleado responde desde su teléfono. En su lugar, un
«Enviado desde Outlook para iOS», o nada. En conversaciones comerciales, el efecto es inmediato.

## Por qué la firma del ordenador no sigue

La causa es estructural. Una firma creada en Outlook para Windows o para Mac es un artefacto
**local**: vive en el perfil del usuario en ese ordenador, como archivos HTML y RTF acompañados de
una carpeta de imágenes. Nada en ese mecanismo está pensado para subir hacia el servicio.

La aplicación de Outlook móvil, por su parte, gestiona un campo de firma propio, guardado en los
ajustes de la aplicación y rellenado previamente con un texto genérico. Los dos sistemas se ignoran.

El resultado es que una misma persona dispone en la práctica de dos firmas distintas, una de las
cuales nunca ha elegido. Y como nadie relee sus propios mensajes enviados desde el teléfono, la
diferencia pasa desapercibida durante meses.

## La magnitud real del problema

Resulta tentador considerar el móvil como algo marginal. Hace mucho que dejó de serlo: una parte
importante de las respuestas profesionales —de viaje, entre dos reuniones, por la tarde— sale desde
un teléfono. Suelen ser los intercambios más reactivos y, por tanto, los más sensibles
comercialmente.

Dicho de otro modo, la firma falta precisamente donde sería más útil: en respuestas rápidas a
interlocutores que todavía no te conocen.

## Los apaños, y por qué aguantan mal

**Pedir a cada cual que configure su firma móvil.** Es la solución más extendida y la menos
duradera. El campo móvil no acepta HTML rico: pegar una plantilla produce un resultado degradado,
sin logotipo y con saltos de línea aleatorios. Y cada empleado produce su variante.

**Enviar una instrucción con un texto para copiar.** Mismo problema, más la pérdida habitual: al cabo
de tres meses, la mitad del parque no lo ha hecho y las nuevas incorporaciones nunca recibieron la
instrucción.

**Pasar por una regla de transporte de Exchange.** Cubre bien el móvil, ya que actúa en el servidor,
pero trae sus propios límites: el remitente nunca ve su firma, los hilos apilan bloques y los
mensajes cifrados se le escapan. El detalle está en
[complemento o regla de transporte](/es/blog/complemento-outlook-o-regla-transporte-exchange).

## El único enfoque que da el mismo resultado en todas partes

Para que la firma sea idéntica en ordenador y en móvil, no debe depender ni del puesto ni de la
aplicación, sino del servicio. Es el principio del complemento: se ejecuta dentro de Outlook
—incluido Outlook móvil en iOS y Android— e inserta el bloque al redactar, con los datos del
directorio y el banner de campaña en curso.

Es el mismo mecanismo que resuelve el despliegue en el ordenador, descrito en
[cómo desplegar una firma en Outlook](/es/blog/firma-correo-outlook-empresa): el móvil deja entonces
de ser un caso aparte y pasa a ser un cliente más.

El empleado no tiene nada que configurar, en ninguno de sus dispositivos. Si cambia de teléfono, la
firma le sigue. Si cambia de cargo en el directorio, se actualiza en todas partes a la vez. Los
entornos cubiertos están en la página del
[complemento de Microsoft 365](/es/integraciones/microsoft-365-outlook).

> **Conviene saberlo:** acuérdate de quitar la antigua firma local de la aplicación móvil durante el
> despliegue. Si no, las dos se acumulan y el mensaje termina con la firma de empresa seguida de
> «Enviado desde Outlook para iOS».

## Diseñar una plantilla que aguante en una pantalla de teléfono

Una firma pensada para una pantalla de 1400 px de ancho pasa mal a 390 px. Tres precauciones bastan
para cubrir la mayoría de los casos.

**Limitar el ancho.** Un bloque de 500 a 600 px como máximo, que se reduzca con limpieza. Más allá,
el cliente móvil impone un desplazamiento horizontal o encoge el conjunto hasta hacerlo ilegible.

**Evitar las maquetaciones de varias columnas apretadas.** Un logotipo a la izquierda y un bloque de
datos a la derecha funciona; tres columnas no.

**Probar de verdad.** La vista previa multicliente del [editor de Signally](/es/funcionalidades)
incluye el resultado en móvil, pero nada sustituye a un envío real a tu propio teléfono antes de
generalizar.
