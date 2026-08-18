---
slug: "banner-firma-correo"
title: "Banner de firma de correo: formatos, peso y buenas prácticas"
description: "Las dimensiones, el peso y las reglas de diseño de un banner de firma de correo: ancho útil, densidad de pantalla, legibilidad a tamaño pequeño y zona clicable."
keyword: "banner firma correo"
cluster: "Campagnes & bannières"
pubDate: 2026-04-01
summary:
  - "El ancho útil de un banner es de 500 a 600 px, condicionado por las pantallas móviles."
  - "El archivo debe exportarse al doble de su tamaño de visualización para verse nítido."
  - "Apunta a menos de 60 KB para un banner estático y menos de 150 KB para un GIF animado."
  - "Un solo mensaje, una sola acción: un banner que dice dos cosas no transmite ninguna."
related:
  - "gif-anime-signature-mail"
  - "taille-logo-signature-mail"
  - "idees-campagne-signature-mail"
faq:
  - q: "¿Qué tamaño debe tener un banner de firma de correo?"
    a: "Entre 500 y 600 px de ancho en pantalla, con una altura de 80 a 120 px. El archivo debe exportarse al doble de esas dimensiones para verse nítido en pantallas de alta densidad."
  - q: "¿Cuál es el peso máximo de un banner?"
    a: "Menos de 60 KB para un banner estático y menos de 150 KB para un GIF animado. Por encima, la visualización se retrasa y el mensaje parece roto justo cuando el destinatario abre el correo."
  - q: "¿Hay que poner un botón en el banner?"
    a: "Un elemento visual que parezca un botón ayuda a señalar que el banner es clicable, pero no es un botón real: es una imagen. Todo el banner debe ser clicable, no solo la zona del botón falso."
  - q: "¿Cuánto texto puede llevar un banner?"
    a: "Un titular de cinco a ocho palabras, una línea de detalle y una etiqueta de acción. Más allá, el texto se vuelve ilegible al tamaño real de visualización en un correo."
---

El banner es el elemento de una firma que lleva un mensaje temporal: un evento, una contratación, una
novedad. Sus restricciones técnicas se parecen a las del logotipo, pero sus restricciones de diseño
son las de un soporte publicitario visto durante un segundo.

## Las dimensiones

El ancho del banner está limitado por el de la firma, que a su vez lo está por las pantallas móviles.

| Parámetro | Valor recomendado |
| --- | --- |
| Ancho en pantalla | 500 – 600 px |
| Alto en pantalla | 80 – 120 px |
| Proporción | en torno a 5:1 |
| Archivo exportado | el doble de las dimensiones en pantalla |

Un banner más alto invade el mensaje y da la impresión de un recuadro publicitario. Un banner más
estrecho que la firma crea un desajuste visual poco elegante: alinea su ancho con el del bloque.

Igual que con el logotipo, la exportación se hace al doble —1200 × 200 px para una visualización a
600 × 100— con las dimensiones en los **atributos HTML** `width` y `height`; de lo contrario, Outlook
muestra la imagen a su tamaño nativo. El detalle está en
[firma de correo en HTML](/es/blog/firma-de-correo-html).

## El peso

Mantente por debajo de **60 KB** para un banner estático y de **150 KB** para un GIF animado.

Lo que está en juego no es el ancho de banda sino el resultado percibido. Las imágenes de un correo se
cargan después del texto: un banner pesado aparece tarde y el destinatario ve primero un marco vacío
bajo la firma. La impresión es la de un mensaje mal construido.

Una compresión PNG sin pérdida suele dividir el peso por dos sin diferencia visible. Para un elemento
fotográfico, el JPEG con calidad 80 es un buen compromiso.

## Las reglas de diseño

**Un solo mensaje.** Es la regla que más se incumple. Un banner que anuncia una feria *y* un informe
*y* una contratación no transmite ninguno. Si tienes tres mensajes, haz tres campañas sucesivas.

**Un titular corto.** De cinco a ocho palabras. Al tamaño real de visualización —a menudo reducido por
el cliente de correo— un titular largo se vuelve ilegible.

**Una acción explícita.** «Inscribirse», «Ver ofertas», «Descargar el informe». La etiqueta debe decir
qué pasa al pulsar.

**Contraste suficiente.** El banner se ve en un segundo, a veces en la pantalla de un teléfono al aire
libre. Texto oscuro sobre fondo claro, o al revés, pero nada de gris sobre gris.

**Espacio alrededor del texto.** Un margen interior de al menos 16 px. Un texto pegado al borde parece
accidental.

## La zona clicable

Todo el banner debe ser clicable, no solo la zona que parece un botón. Es una imagen envuelta en un
enlace:

```
<a href="https://ejemplo.es/feria" style="display:block;text-decoration:none">
  <img src="https://cdn.ejemplo.es/banner@2x.png"
       width="600" height="100"
       alt="Feria Vivatech — Pabellón 2, estand B34. Reservar una cita."
       style="display:block;border:0;width:600px;height:100px" />
</a>
```

Dos detalles importan. El atributo `alt` debe describir el mensaje **y** la acción: es lo que verá un
destinatario cuyo cliente bloquea las imágenes y lo que leerá un lector de pantalla. Y `border:0`
elimina el borde azul que algunos clientes añaden alrededor de una imagen enlazada.

> **Conviene saberlo:** usa una URL de destino rastreable, distinta por campaña. Sin eso no podrás
> atribuir el tráfico al banner correcto: ver [medir el ROI](/es/blog/roi-firma-correo).

## El caso de la animación

Un GIF animado atrae más la vista, pero algunas versiones de Outlook solo muestran su primer
fotograma. La regla que se deriva es absoluta: **el mensaje esencial debe estar en el primer
fotograma**, y la animación solo debe enriquecerlo.

El tema, incluidas las cuestiones de peso y de número de bucles, se trata en
[banner animado en una firma](/es/blog/gif-animado-firma-correo).

## Lo que distingue un buen banner de un buen anuncio

Merece la pena subrayar una diferencia de registro. El banner aparece bajo la firma de una persona, en
un mensaje profesional dirigido a alguien que la conoce. Un tono publicitario marcado desentona ahí y
repercute en quien lo envía.

Los banners que mejor funcionan se parecen menos a un anuncio que a una información útil: una fecha de
feria, un puesto abierto, un informe disponible. El catálogo de formatos estacionales está en
[12 ideas de campañas](/es/blog/ideas-campana-firma-correo), y el marco general del canal en
[marketing con firma de correo](/es/blog/marketing-con-firma-de-correo).

Por último, comprueba el resultado antes de difundir. Un banner perfecto en una herramienta de diseño
puede aparecer recortado o redimensionado en un cliente de correo: la vista previa multicliente del
[editor](/es/funcionalidades) evita la mala sorpresa después de enviarlo a trescientas personas.
