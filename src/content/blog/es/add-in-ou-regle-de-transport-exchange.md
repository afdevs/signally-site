---
slug: "complemento-outlook-o-regla-transporte-exchange"
title: "Complemento o regla de transporte de Exchange: qué método de firma elegir"
description: "Inserción al redactar o añadido en el servidor: los dos métodos de firma de Exchange no tienen los mismos límites ni los mismos efectos sobre los hilos, el cifrado y lo que ve el remitente."
keyword: "regla de transporte exchange firma"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-16
summary:
  - "La regla de transporte se aplica después del envío: el remitente nunca ve su firma y no puede comprobarla."
  - "En una conversación encadenada, la regla apila un bloque en cada respuesta; el complemento inserta solo uno."
  - "La regla falla en los mensajes cifrados, que no pueden modificarse en tránsito."
  - "La regla sigue siendo pertinente para un aviso legal en texto plano impuesto al 100 % del tráfico, incluidas las aplicaciones automatizadas."
related:
  - "signature-mail-outlook-entreprise"
  - "deployer-signature-microsoft-365"
  - "nouveau-outlook-signature"
faq:
  - q: "¿Se pueden combinar una regla de transporte y un complemento?"
    a: "Sí, y a veces tiene sentido: el complemento lleva la firma de marca al redactar, y la regla de transporte añade un aviso legal mínimo que cubre también los envíos automatizados que nunca pasan por Outlook. Solo hay que asegurarse de que los dos bloques no se dupliquen."
  - q: "¿La regla de transporte ralentiza el envío de los mensajes?"
    a: "El impacto es insignificante para un pie de página sencillo. Se nota si la regla aplica muchas condiciones o plantillas HTML pesadas con gran volumen."
  - q: "¿Por qué mi regla de transporte no aplica nada en algunos mensajes?"
    a: "Los mensajes cifrados no pueden modificarse en tránsito: Exchange los deja intactos. Los envíos internos también pueden quedar excluidos según el alcance que hayas definido en la regla."
  - q: "¿El complemento funciona si el usuario escribe desde otro cliente que no sea Outlook?"
    a: "No. Un complemento se ejecuta dentro de Outlook (web, Windows, Mac, móvil). Para un cliente de terceros o un envío desde una aplicación, solo puede intervenir una regla de transporte en el servidor."
---

En un tenant de Microsoft 365, dos mecanismos distintos permiten añadir una firma a los mensajes
salientes: el complemento, que escribe en el mensaje mientras se redacta, y la regla de transporte
de Exchange, que la añade al paso por el servidor. Elegir entre los dos no es una cuestión de
preferencia: se deriva de lo que quieres que lleve la firma y de quién debe poder verla.

## Cómo funciona una regla de transporte de Exchange

Una regla de flujo de correo se aplica en el servicio de transporte, después de que el usuario haya
pulsado «Enviar». Defines una condición —«todos los mensajes que salen del dominio», por ejemplo— y
una acción: «añadir un aviso al final del mensaje». Exchange aplica el bloque HTML que has
introducido y después encamina el mensaje.

La ventaja es real: nada que instalar, alcance total, y el mecanismo cubre también los envíos que no
vienen de Outlook: una aplicación de negocio, una herramienta de facturación, un script. Es, de
hecho, la única manera de imponer una mención legal al 100 % del tráfico saliente, sin excepción.

## Por qué el remitente nunca ve su firma

Es la consecuencia más pesada de la inserción en el servidor, y suele sorprender en el momento del
despliegue. La firma no existe mientras se redacta el mensaje, ni en la copia guardada en los
elementos enviados. El empleado no puede, por tanto, ni releerla, ni detectar un enlace roto, ni
avisar de que su cargo es incorrecto.

En la práctica, tu bucle de control de calidad desaparece. En una firma de marca con logotipo, datos
de contacto y banner, son varios cientos de pares de ojos los que pierdes. Con el complemento
descrito en nuestra página del [complemento de Microsoft 365](/es/integraciones/microsoft-365-outlook),
la firma se ve en la ventana de redacción: cualquier error sale a la luz en unas horas.

## Los hilos y el apilamiento de bloques

Una regla de transporte no sabe si el mensaje es un primer envío o la sexta respuesta de una
conversación. Aplica su bloque cada vez. Tras unas cuantas idas y venidas, el mensaje termina con
una pila de pies de página idénticos, a menudo más larga que el propio intercambio.

Existen soluciones de apaño —condicionar la regla a la ausencia de un marcador insertado
previamente, por ejemplo— pero son frágiles: el marcador desaparece si el destinatario responde
desde un cliente que reformatea el HTML. El complemento, en cambio, distingue de forma nativa entre
firma de primer mensaje y firma de respuesta.

## El caso de los mensajes cifrados

Un mensaje cifrado no puede modificarse en tránsito: es el principio mismo del cifrado. La regla de
transporte lo deja pasar intacto, sin firma y sin error visible. Si tu organización cifra parte de
sus intercambios —despachos jurídicos, sanidad, finanzas—, una parte de tu tráfico escapará a la
regla en silencio.

> **Conviene saberlo:** el complemento escribe en el cuerpo del mensaje antes del cifrado, en el
> lado del cliente. La firma está presente, por tanto, también en los mensajes protegidos.

## Tabla de decisión

| Necesidad | Regla de transporte | Complemento |
| --- | --- | --- |
| Aviso legal en el 100 % del tráfico, aplicaciones incluidas | Sí | No |
| Firma de marca con logotipo y redes sociales | Poco adecuado | Sí |
| Visible para el remitente y en los elementos enviados | No | Sí |
| Sin apilamiento en los hilos | No | Sí |
| Funciona en mensajes cifrados | No | Sí |
| Campos personalizados desde el directorio | Limitado | Sí |
| Banners de campaña con fechas | No | Sí |

## Lo que recomendamos en la práctica

Para la gran mayoría de las organizaciones, el complemento cubre la necesidad real: una firma de
marca, personalizada, comprobable y actualizada desde el directorio. El método completo se describe
en nuestra guía sobre [el despliegue de una firma en Outlook](/es/blog/firma-correo-outlook-empresa).

Combinar ambos sigue siendo defendible en un caso concreto: cuando una mención legal debe figurar
sin falta en todo lo que sale del dominio, incluidas las notificaciones automáticas que emiten tus
aplicaciones. Se mantiene entonces una regla de transporte minimalista, en texto, para ese suelo
jurídico, y el complemento para la firma visible. Solo hay que asegurarse de que no se repitan.

Es también el momento de comprobar la compatibilidad con tu parque de clientes: el complemento debe
funcionar tanto en el nuevo Outlook como en el antiguo, tema tratado en
[lo que cambia en 2026](/es/blog/nuevo-outlook-firma).

Un último criterio, a menudo decisivo para el departamento de TI: la regla de transporte modifica tu
flujo saliente, el complemento no. Ningún conector, ninguna redirección, ninguna modificación de tu
configuración de encaminamiento. Es un argumento que pesa en las revisiones de seguridad; el tema se
trata en detalle en nuestra página de [seguridad y RGPD](/es/seguridad-rgpd).
