---
slug: "firma-gmail-movil"
title: "Firma de Gmail en el móvil: lo que se ve realmente"
description: "La aplicación de Gmail gestiona una firma móvil distinta de la de la web, a menudo reducida a «Enviado desde mi iPhone». Lo que se ve de verdad en el móvil y cómo lograr un resultado coherente."
keyword: "firma gmail movil"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-07
summary:
  - "La aplicación de Gmail tiene un ajuste de firma móvil independiente del webmail."
  - "Por defecto aplica un texto genérico del tipo «Enviado desde mi iPhone»."
  - "El campo móvil no acepta HTML rico: el logotipo y la maquetación no se trasladan."
  - "Una firma aplicada por un complemento se mantiene idéntica en web y en móvil, sin configuración del usuario."
related:
  - "signature-gmail-entreprise"
  - "gestion-signature-gmail"
  - "signature-outlook-mobile"
faq:
  - q: "¿Por qué mi firma de Gmail web no aparece en el teléfono?"
    a: "La aplicación de Gmail gestiona un ajuste de firma propio del dispositivo, distinto del webmail. Los dos no se sincronizan: configurar uno no configura el otro."
  - q: "¿Se puede poner un logotipo en la firma móvil de Gmail?"
    a: "El campo de firma de la aplicación móvil está pensado para texto simple. Pegar en él un bloque HTML con imagen da un resultado aleatorio. Para un logotipo fiable en el móvil, la firma debe insertarla un complemento en lugar de escribirse en la aplicación."
  - q: "¿Cómo quito «Enviado desde mi iPhone»?"
    a: "En la aplicación de Gmail: Menú → Configuración → seleccionar la cuenta → Firma móvil. En un parque gestionado, es mejor imponer la firma de forma centralizada que pedir esta operación a cada persona."
  - q: "¿El banner de campaña se ve en Gmail móvil?"
    a: "Sí, siempre que el complemento inserte la firma al redactar: el banner forma parte del bloque, sea cual sea el dispositivo."
---

En Google Workspace, la firma cuidada que se ha configurado en el webmail no sigue al teléfono. En su
lugar, un «Enviado desde mi iPhone» que nadie ha elegido, o nada. Como los mensajes enviados desde el
móvil rara vez se releen, la diferencia puede durar meses sin que nadie se dé cuenta.

## Dos ajustes que se ignoran

Gmail web guarda la firma en los ajustes de la cuenta, en **Configuración → General → Firma**. La
aplicación móvil, por su parte, expone un ajuste distinto —«Firma móvil»— propio del dispositivo y
rellenado previamente con un texto genérico.

Los dos no se comunican. Quien ha pasado diez minutos dando formato a su firma en el navegador se
marcha, por tanto, con una firma móvil por defecto que no ha visto y cuya existencia a menudo
desconoce.

El resultado es un desdoblamiento: la misma persona tiene dos firmas, una de las cuales no ha
escrito. Es exactamente la misma mecánica que en el lado de Microsoft, descrita en
[firma en Outlook móvil](/es/blog/firma-outlook-movil).

## Lo que el campo móvil acepta realmente

El ajuste móvil está pensado para texto simple. Se pueden poner varias líneas, pero no hay editor
rico, ni gestión fiable de imágenes, ni control sobre la maquetación.

Pegar ahí una plantilla HTML completa —cosa que algunos intentan— produce, según el caso, código en
bruto mostrado tal cual, un formato parcial o un bloque despojado de su logotipo. El resultado varía
según la versión de la aplicación y el sistema.

Dicho de otro modo: la firma de marca de tu empresa no puede reproducirse en ese campo. No es
cuestión de esfuerzo, es un límite del ajuste.

## Por qué importa más de lo que parece

Resulta tentador tratar el móvil como un caso secundario. En la práctica, una parte importante de las
respuestas profesionales sale de un teléfono: de viaje, entre dos reuniones, al final del día. Suelen
ser los intercambios más reactivos y, por tanto, los que cuentan comercialmente.

La firma falta así precisamente donde más serviría: en respuestas rápidas dirigidas a interlocutores
que están descubriendo tu empresa.

## Los apaños y sus límites

**Pedir a cada cual que configure su firma móvil.** Es la respuesta habitual. Falla por tres razones
acumuladas: el campo no permite reproducir la plantilla, la instrucción solo la aplica una fracción
del parque y las nuevas incorporaciones nunca la reciben.

**Usar el pie de página de la consola.** Cubre bien el móvil, ya que actúa en el servidor. Pero
aporta sus propios límites —sin campos personalizados, apilamiento en los hilos, invisible para el
remitente—, detallados en
[pie de página de Google Workspace](/es/blog/firma-google-workspace).

**Conformarse con un texto corto en el móvil.** Solución de repliegue honesta: nombre, cargo,
teléfono, en tres líneas. Vale más que «Enviado desde mi iPhone», pero la coherencia de marca no
está.

## El enfoque que da el mismo resultado en todas partes

Para que la firma sea idéntica en web y en móvil, no debe depender de ningún ajuste local. El
complemento se ejecuta dentro de Gmail en el momento de redactar —también en la aplicación móvil— e
inserta el bloque completo, con los datos del directorio y el banner en curso.

El empleado no tiene nada que configurar, en ninguno de sus dispositivos. El mecanismo se describe en
la página del [complemento de Google Workspace](/es/integraciones/google-workspace-gmail).

> **Conviene saberlo:** acuérdate de vaciar el campo «Firma móvil» de la aplicación durante el
> despliegue. Si no, las dos se acumulan y el mensaje termina con tu firma de empresa seguida del
> texto genérico.

## Diseñar una plantilla legible en una pantalla de teléfono

Tres precauciones cubren lo esencial.

**Limitar el ancho.** Un bloque de 500 a 600 px como máximo. Más allá, el cliente móvil impone un
desplazamiento horizontal o encoge el conjunto hasta hacerlo ilegible.

**Evitar las columnas múltiples.** Logotipo a la izquierda, datos a la derecha: eso pasa. Tres
columnas: no.

**Dimensionar las zonas táctiles.** Un número de teléfono o un icono social debe seguir siendo
pulsable con el dedo, lo que supone una altura suficiente y un espaciado real entre elementos.

La vista previa multicliente del [editor](/es/funcionalidades) cubre el resultado en móvil, pero
envía siempre un mensaje de prueba a tu propio teléfono antes de generalizar.
