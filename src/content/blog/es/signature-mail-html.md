---
slug: "firma-de-correo-html"
title: "Firma de correo en HTML: las reglas de compatibilidad que hay que respetar"
description: "El HTML de una firma no es el HTML de una web. Tablas, estilos en línea, dimensiones en atributos: las reglas que hacen que una firma se vea igual en Outlook, Gmail y móvil."
keyword: "firma de correo html"
cluster: "Créer sa signature"
pubDate: 2026-02-26
summary:
  - "Outlook para Windows muestra el HTML con el motor de Microsoft Word: gran parte del CSS moderno se ignora."
  - "La maquetación debe apoyarse en tablas, no en flexbox ni grid."
  - "Los estilos deben ir en línea: las hojas de estilo y las etiquetas <style> se eliminan a menudo."
  - "Las dimensiones de imagen deben figurar en atributos HTML, no solo en CSS."
related:
  - "logo-signature-outlook"
  - "creer-une-signature-mail"
  - "taille-logo-signature-mail"
faq:
  - q: "¿Por qué no se puede usar flexbox en una firma de correo?"
    a: "El motor de representación de Outlook para Windows, heredado de Microsoft Word, no admite ni flexbox ni grid. Los elementos se apilan entonces en vertical, lo que destruye cualquier maquetación en columnas. Las tablas siguen siendo el único mecanismo de posicionamiento fiable."
  - q: "¿Funcionan las etiquetas <style> en una firma?"
    a: "No de forma fiable. Muchos clientes eliminan el bloque <style> al sanear el HTML, y una firma pegada en un campo de configuración pierde por lo general todo lo que no esté en línea. Los estilos deben ir en atributos style en cada elemento."
  - q: "¿Se puede usar una tipografía personalizada?"
    a: "No de forma fiable: las fuentes web no se cargan en la mayoría de los clientes de correo. Usa una tipografía del sistema y declara una pila de sustitución."
  - q: "¿Hay que escribir este HTML a mano?"
    a: "No hace falta, y ni siquiera es aconsejable: los errores clásicos (tablas mal cerradas, estilos olvidados, dimensiones ausentes) son difíciles de detectar. Un editor visual que genera un HTML ya conforme evita ese trabajo."
---

El HTML de un correo no obedece a las mismas reglas que el de una web. Lo que funciona en un
navegador moderno puede descomponerse en Outlook, y un código perfectamente válido según el W3C
puede dar un resultado inservible. Estas son las restricciones reales y sus razones.

## Por qué existen estas restricciones

Los clientes de correo no usan todos un motor de representación web. Outlook para Windows —en su
versión clásica, todavía muy presente en las empresas— muestra el HTML con el motor de **Microsoft
Word**. Word nunca se diseñó para eso, y su soporte de CSS se detiene en un subconjunto limitado.

Los webmails, por su parte, sanean el HTML entrante por razones de seguridad: eliminan los scripts,
a menudo las etiquetas `<style>` y a veces atributos enteros.

Una firma debe, por tanto, verse correctamente en el mínimo común denominador. El nuevo Outlook
mejora la situación —ver [lo que cambia en 2026](/es/blog/nuevo-outlook-firma)— pero mientras el
cliente antiguo circule por los parques, la restricción sigue vigente.

## Regla 1 — Tablas para la maquetación

`flexbox` y `grid` no están soportados por el motor de Word. Los elementos se apilan en vertical y
cualquier maquetación en columnas desaparece.

El posicionamiento debe apoyarse por tanto en tablas:

```
<table cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding-right:16px;vertical-align:top">
      <img src="..." width="120" height="40" alt="Empresa" />
    </td>
    <td style="vertical-align:top">
      <div style="font-weight:700">Nombre Apellidos</div>
    </td>
  </tr>
</table>
```

Tres detalles importan. `cellpadding="0" cellspacing="0" border="0"` neutraliza los espaciados por
defecto, variables de un cliente a otro. `role="presentation"` indica a los lectores de pantalla que
la tabla sirve para maquetar y no para datos. Y `vertical-align` debe ser explícito: los valores por
defecto difieren.

## Regla 2 — Todos los estilos en línea

Una hoja de estilo externa es inaccesible. Una etiqueta `<style>` se elimina con frecuencia. Y cuando
se pega una firma en el campo de configuración de un cliente, todo lo que no vaya en un atributo
`style` desaparece.

Cada propiedad debe declararse, por tanto, en el elemento correspondiente. Es verboso, redundante y
no hay alternativa.

## Regla 3 — Las dimensiones de imagen en atributos

Outlook ignora con frecuencia `width` y `height` declarados en CSS. La imagen se muestra entonces a
su tamaño nativo: un archivo de 1200 px ocupa todo el ancho del mensaje.

Lleva la dimensión a los **atributos HTML**, duplicándola en CSS para los clientes modernos:

```
<img src="https://cdn.ejemplo.es/logo.png"
     width="180" height="48" alt="Empresa"
     style="display:block;border:0;width:180px;height:48px" />
```

`display:block` elimina el espacio parásito bajo la imagen; `border:0` quita el borde azul cuando es
clicable. El detalle está en
[insertar un logotipo sin que se rompa](/es/blog/logotipo-firma-outlook).

## Regla 4 — Tipografías del sistema, con pila de sustitución

Las fuentes web no se cargan de forma fiable. Declara una pila realista:

```
font-family: Arial, Helvetica, sans-serif;
```

Elegir uno mismo el sustituto vale más que dejar que lo elija el cliente.

## Regla 5 — Unidades absolutas

Las unidades relativas —`rem`, `em`, porcentajes en los tamaños de texto— se comportan de forma
irregular. Usa píxeles para los tamaños de fuente, los márgenes internos y las dimensiones de imagen.
Los porcentajes siguen siendo aceptables en el ancho de las tablas.

## Regla 6 — Enlaces explícitos

Un enlace debe llevar su protocolo completo, también para el teléfono:

```
<a href="tel:+34612345678" style="color:#1A1A1A;text-decoration:none">+34 612 34 56 78</a>
```

Sin un `style` explícito, algunos clientes aplican su propio azul subrayado, que chocará con tu
identidad.

## Regla 7 — Un contenido accesible sin las imágenes

Las imágenes remotas están bloqueadas por defecto para los remitentes desconocidos. Si tu firma se
apoya en una imagen, el destinatario ve un rectángulo vacío en lugar de tus datos.

El nombre, el cargo, el teléfono y los avisos legales deben seguir siendo texto. Y cada imagen lleva
un `alt` útil: el nombre de la empresa para el logotipo, el nombre de la red para un icono.

> **Conviene saberlo:** prueba siempre con las imágenes desactivadas. Es la prueba más rápida para
> saber si tu firma sigue siendo utilizable en el peor de los casos.

## ¿Hay que escribir este HTML a mano?

Se puede, y es un mal empleo del tiempo. Los errores clásicos —una tabla sin cerrar, un
`cellspacing` olvidado, una dimensión ausente, un estilo perdido al copiar y pegar— son difíciles de
detectar leyendo y solo aparecen en algunos clientes.

Un editor visual que genera directamente un HTML conforme con estas reglas, y que previsualiza el
resultado en Outlook para Windows, Outlook Web, Gmail, Apple Mail y móvil, evita lo esencial del
problema. Es lo que hace [el editor de Signally](/es/funcionalidades), cuyo acceso es gratuito.

La ganancia no es solo de tiempo: es de fiabilidad. Una plantilla centralizada garantiza que las
reglas anteriores se respetan **en todas las firmas de la organización**, incluidas las de quienes
nunca han oído hablar de `cellpadding`.
