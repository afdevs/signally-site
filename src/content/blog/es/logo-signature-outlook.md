---
slug: "logotipo-firma-outlook"
title: "Insertar un logotipo en una firma de Outlook sin que se rompa"
description: "Logotipo borroso, imagen sustituida por una cruz roja, redimensionado salvaje: las cuatro causas reales de un logotipo roto en una firma de Outlook y el método para que se vea en todas partes."
keyword: "logotipo firma outlook"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-20
summary:
  - "Un logotipo pegado desde Word o Paint se incrusta como adjunto local: desaparece en el destinatario."
  - "Outlook ignora el dimensionado por CSS: el tamaño debe ir en los atributos HTML width y height."
  - "Un logotipo debe exportarse al doble de su tamaño de visualización para verse nítido en pantallas de alta densidad."
  - "La imagen debe alojarse en una URL pública y estable, en HTTPS."
related:
  - "taille-logo-signature-mail"
  - "signature-mail-html"
  - "signature-mail-outlook-entreprise"
faq:
  - q: "¿Por qué mi logotipo aparece como una cruz roja en el destinatario?"
    a: "La imagen apunta a un recurso inaccesible: una ruta de archivo local, una unidad de red interna o una URL protegida por autenticación. El destinatario, fuera de tu red, no puede cargarla. Aloja el logotipo en una URL pública en HTTPS."
  - q: "¿Hay que incrustar el logotipo como adjunto o enlazarlo?"
    a: "Enlazar a una URL pública es preferible en una firma de empresa: el mensaje sigue siendo ligero, el logotipo se actualiza en todas partes de golpe y no aparece como un adjunto parásito en la bandeja del destinatario."
  - q: "¿Por qué mi logotipo se ve borroso en una pantalla Retina?"
    a: "Se está mostrando a su tamaño nativo. Exporta la imagen al doble de las dimensiones de visualización —360 px de ancho para un logotipo mostrado a 180 px— y después limita el tamaño con los atributos width y height."
  - q: "¿Outlook bloquea las imágenes por defecto?"
    a: "Outlook puede bloquear la carga de imágenes remotas de un remitente desconocido. Por eso una firma nunca debe apoyarse solo en una imagen: el nombre, el cargo y los datos de contacto tienen que seguir siendo texto."
---

El logotipo es el elemento de una firma que más se rompe, y casi siempre por las mismas razones. En
Outlook en particular, las diferencias entre las versiones de Windows, Mac, Web y móvil amplifican
cada aproximación del archivo o del código. Estas son las cuatro causas reales y qué hacer en su
lugar.

## Causa n.º 1: una imagen pegada desde un archivo local

Es la más frecuente. Alguien abre su logotipo en Word o en el explorador, lo copia y lo pega en la
ventana de la firma. Outlook lo incrusta entonces como adjunto local, con una referencia de tipo
`cid:` o una ruta `file://`.

En el remitente todo parece normal. En el destinatario, la imagen no está —sustituida por un marco
vacío o una cruz roja— porque el recurso referenciado solo existe en el puesto de origen. El mismo
problema se produce con un logotipo alojado en una unidad de red interna o en una intranet protegida
por autenticación.

La regla es sencilla: **el logotipo debe vivir en una URL pública, en HTTPS, accesible sin iniciar
sesión**. Una CDN, un bucket de almacenamiento o el alojamiento que proporciona tu herramienta de
firmas.

## Causa n.º 2: el tamaño definido en CSS y no en atributos HTML

Outlook para Windows usa el motor de representación de Microsoft Word, que ignora buena parte del
CSS, incluidos muy a menudo `width` y `height` declarados en un atributo `style`. La imagen se
muestra entonces a su tamaño nativo: un archivo de 1200 px de ancho ocupa todo el ancho del mensaje.

La solución consiste en llevar la dimensión a los **atributos HTML** de la etiqueta, no solo al CSS:

```
<img src="https://cdn.ejemplo.es/logo.png"
     width="180" height="48"
     alt="Nombre de la empresa"
     style="display:block;border:0;width:180px;height:48px" />
```

Los dos son útiles: los atributos para Outlook, el CSS para los clientes modernos. El
`display:block` evita el espacio parásito bajo la imagen en algunos clientes, y `border:0` elimina
el borde azul cuando el logotipo es clicable.

## Causa n.º 3: un archivo exportado al tamaño de visualización

En una pantalla de alta densidad —casi todos los portátiles recientes y todos los móviles— una
imagen mostrada a su tamaño nativo se ve borrosa. El logotipo debe exportarse al **doble** de su
tamaño de visualización y después limitarse con los atributos.

Para un logotipo mostrado a 180 × 48 px, exporta un archivo de 360 × 96 px. El peso sigue siendo
modesto si el formato está bien elegido: PNG-24 con transparencia para un logotipo de tintas planas,
o SVG convertido a PNG si tu herramienta no gestiona el vectorial. Las cuestiones de peso y formato
se detallan en el artículo sobre
[el tamaño del logotipo en una firma](/es/blog/tamano-logotipo-firma-correo).

## Causa n.º 4: una firma enteramente en imagen

Algunas organizaciones exportan toda la firma —nombre, cargo, datos de contacto, logotipo— como una
sola imagen. Es mala idea por tres razones que se acumulan.

Primero, Outlook bloquea por defecto la carga de imágenes remotas de remitentes desconocidos: el
destinatario ve un rectángulo vacío en lugar de tus datos. Segundo, ningún texto es seleccionable ni
copiable: no hay forma de coger un número de teléfono. Tercero, los lectores de pantalla no tienen
nada que leer, más allá del atributo `alt`.

El nombre, el cargo, el teléfono y la dirección deben seguir siendo texto HTML. Solo el logotipo, los
iconos sociales y el banner de campaña son imágenes. Las restricciones generales del HTML de correo,
de las que depende este comportamiento, se detallan en
[firma de correo en HTML](/es/blog/firma-de-correo-html).

> **Conviene saberlo:** rellena siempre un atributo `alt` en el logotipo, con el nombre de la
> empresa. Se muestra cuando la imagen está bloqueada y lo leen las tecnologías de asistencia.

## El método que aguanta a escala

En un puesto aislado, aplicar las reglas anteriores basta. En un parque de varias decenas de
buzones, el problema ya no es técnico sino organizativo: cada empleado que vuelve a pegar su
logotipo a mano reintroduce los cuatro errores.

Es precisamente lo que resuelve una plantilla centralizada. El logotipo se sube una vez, se aloja en
una URL estable, se dimensiona correctamente en el modelo y se bloquea: el empleado no puede ni
sustituirlo ni redimensionarlo. Cuando cambia la identidad gráfica, sustituyes el archivo y todas las
firmas siguen. Es el papel del [editor de firmas de Signally](/es/funcionalidades), que genera un
HTML ya conforme con las restricciones de Outlook.

Antes de cualquier despliegue, prueba el resultado al menos en Outlook para Windows, Outlook Web y
Outlook móvil: son los tres entornos donde las diferencias aparecen primero.
