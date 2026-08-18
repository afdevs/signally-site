---
slug: "tamano-logotipo-firma-correo"
title: "Peso, tamaño y formato del logotipo en una firma de correo"
description: "Las dimensiones, el peso y el formato de archivo que hay que respetar para el logotipo de una firma de correo: exportación al doble para pantallas de alta densidad, PNG o JPEG y un presupuesto de peso realista."
keyword: "tamano logotipo firma correo"
cluster: "Créer sa signature"
pubDate: 2026-03-02
summary:
  - "Un ancho de visualización de 140 a 200 px sirve para la mayoría de los logotipos."
  - "El archivo debe exportarse al doble del tamaño de visualización para verse nítido en pantallas de alta densidad."
  - "Apunta a menos de 30 KB para el logotipo y menos de 100 KB para el conjunto de imágenes de la firma."
  - "PNG-24 para un logotipo de tintas planas con transparencia, JPEG para una foto, nunca SVG."
related:
  - "logo-signature-outlook"
  - "signature-mail-html"
  - "banniere-signature-mail"
faq:
  - q: "¿Qué tamaño debe tener el logotipo de una firma de correo?"
    a: "Entre 140 y 200 px de ancho en pantalla para un logotipo horizontal, y de 40 a 60 px de alto para un logotipo cuadrado o un monograma. El archivo en sí debe exportarse al doble de esas dimensiones."
  - q: "¿Funciona el SVG en una firma de correo?"
    a: "No de forma fiable. La mayoría de los clientes de correo no lo muestran y algunos lo bloquean por seguridad. Convierte tu logotipo vectorial a PNG antes de usarlo."
  - q: "¿Cuál es el peso máximo para las imágenes de una firma?"
    a: "Mantente por debajo de 30 KB para el logotipo y de 100 KB para el conjunto de imágenes, banner incluido. No es una restricción de ancho de banda, sino de percepción: una firma lenta en aparecer parece rota."
  - q: "¿Hace falta un logotipo distinto para el modo oscuro?"
    a: "Es deseable si tu logotipo es negro sobre fondo transparente: se vuelve invisible sobre fondo oscuro. La solución más simple y fiable sigue siendo un logotipo sobre una placa blanca ligeramente redondeada, en lugar de la transparencia."
---

El logotipo es el único elemento gráfico obligatorio de una firma de empresa, y aquel cuyas
características técnicas se dejan más a menudo al azar. Tres parámetros deciden el resultado: las
dimensiones, la densidad y el formato de archivo.

## Las dimensiones de visualización

La restricción de partida es el ancho total de la firma, que debe mantenerse entre 500 y 600 px para
pasar en móvil. El logotipo no puede, por tanto, superar un tercio de ese ancho sin aplastar al
resto.

En la práctica:

| Tipo de logotipo | Ancho en pantalla | Alto en pantalla |
| --- | --- | --- |
| Logotipo horizontal (palabra + símbolo) | 140 – 200 px | 32 – 56 px |
| Logotipo cuadrado o monograma | 48 – 64 px | 48 – 64 px |
| Firma de grupo (dos logotipos) | 120 px cada uno | 32 – 40 px |

Un logotipo más grande no refuerza la marca: desequilibra el bloque y empuja los datos de contacto
fuera del primer vistazo.

## La densidad: exportar al doble

Es el punto técnico que más se pasa por alto. Casi todas las pantallas recientes —portátiles,
tabletas, teléfonos— muestran dos o más píxeles físicos por cada píxel lógico. Una imagen exportada a
su tamaño de visualización se ve borrosa allí.

La regla es, por tanto: **exporta al doble, muestra a la mitad**.

Para un logotipo mostrado a 180 × 48 px, produce un archivo de 360 × 96 px y después limita las
dimensiones en el HTML:

```
<img src="logo@2x.png" width="180" height="48" alt="Empresa"
     style="display:block;border:0;width:180px;height:48px" />
```

Los atributos HTML son imprescindibles: Outlook ignora con frecuencia las dimensiones declaradas solo
en CSS y mostraría entonces la imagen a sus 360 px nativos. El mecanismo se detalla en
[firma de correo en HTML](/es/blog/firma-de-correo-html), y las demás causas de un logotipo roto en
[insertar un logotipo en una firma de Outlook](/es/blog/logotipo-firma-outlook).

## El formato de archivo

**PNG-24** para un logotipo de tintas planas, con transparencia. Es la opción por defecto: contornos
nítidos, transparencia limpia y compatibilidad universal.

**PNG-8** si tu logotipo tiene pocos colores. El archivo es bastante más ligero, pero los degradados
y los bordes suavizados se degradan.

**JPEG** únicamente para una fotografía, un retrato por ejemplo. Nunca para un logotipo de tintas
planas: la compresión produce artefactos visibles alrededor de los contornos nítidos.

**Nada de SVG.** El vectorial sería ideal en teoría —nítido a cualquier densidad, muy ligero— pero la
mayoría de los clientes de correo no lo muestran y algunos lo bloquean por seguridad. Convierte tu
original vectorial a PNG.

**GIF** solo para un banner animado, nunca para un logotipo. Su paleta limitada a 256 colores degrada
los degradados.

## El presupuesto de peso

Mantente por debajo de **30 KB para el logotipo** y de **100 KB para el conjunto de imágenes** de la
firma, banner incluido.

No es una cuestión de ancho de banda: hoy nadie se preocupa por 200 KB. Es una cuestión de
percepción. Las imágenes de una firma se cargan después del cuerpo del mensaje; si tardan, el
destinatario ve primero un bloque descompuesto, con marcos vacíos que se van rellenando. La impresión
es la de un mensaje roto.

Una pasada de compresión sin pérdida suele bastar para dividir por dos el peso de un PNG, sin
diferencia visible.

> **Conviene saberlo:** comprueba el peso del archivo que se sirve realmente, no el de tu
> exportación. Ocurre que un logotipo de 8 KB se sustituye por una versión de 1200 px y 400 KB en una
> actualización de identidad, sin que nadie se dé cuenta.

## El caso del modo oscuro

Cada vez más clientes de correo ofrecen un tema oscuro, que invierte el fondo del mensaje. Un
logotipo negro sobre fondo transparente se vuelve invisible.

Tres enfoques, por orden de fiabilidad:

**El logotipo sobre placa blanca.** El archivo incluye un fondo blanco ligeramente redondeado. Feo en
teoría, robusto en la práctica, y funciona en todas partes.

**Un logotipo bicolor que aguanta sobre ambos fondos.** Si tu identidad lo permite —un logotipo con un
color de acento con suficiente contraste tanto en claro como en oscuro—, es la mejor solución.

**El cambio por media query.** `prefers-color-scheme` funciona solo en algunos clientes, y no en
Outlook para Windows. Trátalo como una mejora progresiva, nunca como la solución principal.

## El verdadero reto: que se use el archivo correcto en todas partes

Todas estas reglas se respetan fácilmente una vez. El problema llega cuando cuarenta personas pegan
cada una su versión del logotipo: una coge el archivo del folleto impreso, otra una captura de
pantalla de la web, una tercera la identidad antigua.

Una plantilla centralizada resuelve este punto: el logotipo se sube una vez, se aloja en una URL
estable, se dimensiona correctamente y se bloquea. Cuando cambia la identidad, sustituyes el archivo
y todas las firmas siguen. Es el papel del [editor de Signally](/es/funcionalidades).
