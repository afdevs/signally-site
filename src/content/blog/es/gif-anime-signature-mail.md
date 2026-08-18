---
slug: "gif-animado-firma-correo"
title: "Banner animado en una firma: lo que muestra cada cliente de correo"
description: "Un GIF animado no se anima en todas partes. Lo que muestra realmente cada cliente de correo y la regla de diseño que hace la animación segura."
keyword: "gif animado firma correo"
cluster: "Campagnes & bannières"
pubDate: 2026-04-10
summary:
  - "Algunas versiones de Outlook solo muestran el primer fotograma de un GIF animado."
  - "El mensaje esencial debe estar por tanto en ese primer fotograma, y la animación solo enriquecerlo."
  - "Un GIF animado debe mantenerse por debajo de 150 KB, lo que en la práctica limita a unos pocos fotogramas."
  - "Los formatos de vídeo modernos no están soportados en los clientes de correo."
related:
  - "banniere-signature-mail"
  - "signature-mail-html"
  - "idees-campagne-signature-mail"
faq:
  - q: "¿Funciona el GIF animado en Outlook?"
    a: "Depende de la versión. Varias versiones de Outlook para Windows muestran únicamente el primer fotograma del GIF, sin reproducir la animación. Outlook Web, Gmail y Apple Mail la reproducen con normalidad."
  - q: "¿Cuál es el peso máximo de un GIF animado de firma?"
    a: "Mantente por debajo de 150 KB. Es exigente: en la práctica limita a cuatro o cinco fotogramas al tamaño de un banner de firma. Por encima, la visualización se retrasa y el mensaje parece roto."
  - q: "¿Se puede poner un vídeo en una firma de correo?"
    a: "No. Las etiquetas de vídeo no están soportadas por los clientes de correo. La práctica habitual es usar una imagen fija que evoque un vídeo, enlazada a la página donde está alojado."
  - q: "¿La animación mejora la tasa de clics?"
    a: "Atrae más la vista, pero el efecto depende del mensaje. Una animación que retrasa la lectura de la información esencial puede reducir la eficacia. Prueba en lugar de suponer."
---

La animación atrae la vista, y es precisamente lo que se busca en un banner. Pero en un correo no se
comporta como en la web: según el cliente de correo del destinatario, tu GIF se anima o se queda
congelado en un solo fotograma.

## Lo que muestra cada cliente

| Cliente | Comportamiento |
| --- | --- |
| Outlook Web | Animación reproducida |
| Outlook para Windows (algunas versiones) | Solo el primer fotograma |
| Nuevo Outlook para Windows | Animación reproducida |
| Outlook para Mac | Animación reproducida |
| Outlook móvil | Animación reproducida |
| Gmail (web y móvil) | Animación reproducida |
| Apple Mail | Animación reproducida |

El caso particular es, por tanto, Outlook para Windows en sus versiones históricas, que muestra el
primer fotograma sin reproducir el resto. Ese cliente sigue muy presente en los parques de empresa, lo
que basta para imponer una regla de diseño; el movimiento de fondo se describe en
[lo que cambia con el nuevo Outlook](/es/blog/nuevo-outlook-firma).

## La regla que hace la animación segura

Cabe en una frase: **el mensaje esencial debe estar en el primer fotograma**.

La animación pasa entonces a ser un enriquecimiento para quienes la ven, y su ausencia no priva a
nadie de la información. En concreto, el primer fotograma debe contener por sí solo el titular, el
elemento de identificación y la llamada a la acción.

Lo que no hay que hacer: construir una secuencia donde el mensaje se revela poco a poco —una palabra
por fotograma o un gancho que solo tiene sentido tras tres segundos—. Para una parte de tus
destinatarios, el banner mostrará solo un fragmento incomprensible.

> **Conviene saberlo:** la prueba más sencilla consiste en exportar el primer fotograma solo y mirarlo.
> Si se basta a sí mismo, tu animación es segura. Si no, revisa el montaje.

## La restricción de peso

Un GIF animado pesa la suma de sus fotogramas. Con un tope de **150 KB** para un banner de 600 px de
ancho, en la práctica caben cuatro o cinco fotogramas, no más.

Tres palancas permiten respetar ese presupuesto. Reducir el número de fotogramas prefiriendo cortes
netos a fundidos, que multiplican los pasos intermedios. Limitar la paleta de colores, ya que el GIF
está de todos modos limitado a 256 tonos. Y animar solo **una parte** de la superficie, manteniendo el
fondo fijo: los fotogramas sucesivos almacenan entonces únicamente la zona que cambia.

El presupuesto de peso global de una firma se trata en
[banner de firma de correo: formatos y peso](/es/blog/banner-firma-correo).

## Cuántos bucles

Tres opciones, con efectos distintos.

**Una sola reproducción.** La animación se reproduce y se detiene en el último fotograma. Es la opción
más segura: la atención se capta una vez y el banner queda después estable. Cuidado entonces con que
el **último** fotograma lleve también el mensaje, ya que es el que se quedará a la vista.

**De dos a tres bucles.** Compromiso habitual, que da una segunda oportunidad a un destinatario que
miraba a otro lado.

**Bucle infinito.** Hay que evitarlo. Un banner que parpadea de forma permanente bajo cada mensaje de
una conversación se vuelve enseguida irritante y da un tono publicitario que desentona en un
intercambio profesional.

## Lo que no funciona en absoluto

**El vídeo.** Las etiquetas de vídeo no están soportadas por los clientes de correo. La práctica
habitual es una imagen fija que evoque un vídeo —con un botón de reproducción dibujado— enlazada a la
página donde está alojado.

**Las animaciones CSS.** No sobreviven al saneamiento del HTML de los webmails ni al motor de
representación de Outlook. Ver [firma de correo en HTML](/es/blog/firma-de-correo-html).

**El SVG animado.** No se muestra y a veces se bloquea por seguridad.

El GIF sigue siendo, por tanto, el único formato de animación utilizable, con sus límites.

## ¿Hay que animar?

La pregunta merece plantearse en lugar de zanjarse por principio. La animación atrae la vista, pero
añade peso, complica la producción e impone la restricción del primer fotograma.

Se justifica para un mensaje que gana realmente con la secuencia: una cuenta atrás antes de un evento,
una sucesión de tres logotipos de socios, la revelación de una cifra. No se justifica para un mensaje
que cabe en una frase, es decir, la mayoría de las campañas descritas en
[12 ideas de campañas](/es/blog/ideas-campana-firma-correo).

En caso de duda, un banner estático bien diseñado, con un contraste nítido y una llamada a la acción
clara, suele funcionar igual de bien por una décima parte del esfuerzo. Y puedes compararlo: el
seguimiento por campaña descrito en [medir el ROI](/es/blog/roi-firma-correo) permite probar una
versión animada frente a una fija en dos periodos comparables.
