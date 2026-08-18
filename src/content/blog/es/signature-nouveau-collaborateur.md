---
slug: "firma-nuevo-empleado"
title: "Incorporación: preparar la firma de una nueva persona"
description: "La firma forma parte del kit de bienvenida, igual que la tarjeta de acceso y el portátil. Cómo lograr que quien se incorpora la tenga desde su primer mensaje, sin tutorial ni ticket."
keyword: "firma nuevo empleado"
cluster: "Gestion & gouvernance"
pubDate: 2026-03-13
summary:
  - "En gestión manual, una nueva incorporación tarda de media varios días en tener una firma correcta."
  - "Y sus primeros mensajes son precisamente los que salen hacia personas que no la conocen."
  - "Con una sincronización de directorio, la firma existe desde la creación de la cuenta."
  - "La condición es que los atributos del directorio estén rellenados en el momento de la creación, no después."
related:
  - "depart-collaborateur-signature-mail"
  - "gestion-des-signatures-mail-en-entreprise"
  - "signature-entra-id-azure-ad"
faq:
  - q: "¿En qué momento debe tener su firma una nueva incorporación?"
    a: "Desde su primer mensaje, es decir, desde la apertura de su buzón. Es factible si la firma la aplica el servicio a partir de los atributos del directorio, ya que estos se rellenan al crear la cuenta."
  - q: "¿Qué pasa si su cargo todavía no está en el directorio?"
    a: "La línea correspondiente debe desaparecer de la firma en lugar de mostrar una etiqueta vacía. La persona dispone entonces de una firma reducida pero correcta, que se completa automáticamente en cuanto se rellena el atributo."
  - q: "¿Hay que incluir la firma en el kit de incorporación que se entrega?"
    a: "No, es precisamente lo que hay que evitar: todo lo que dependa de una operación del empleado produce diferencias. La firma debe estar presente sin que tenga que configurarla, ni siquiera saber que existe."
  - q: "¿Cómo gestionar a alguien en periodo de prueba o a un proveedor?"
    a: "Vinculándolos a una unidad organizativa dedicada, con una plantilla que refleje su situación si tu organización lo desea; por ejemplo, sin mención de cargo para un proveedor externo."
---

La llegada de una persona es el momento en que la organización enseña su nivel de preparación. La
tarjeta está lista, el ordenador está configurado, los accesos están abiertos, y la firma llega tres
semanas después, tras dos recordatorios.

## El coste real de los primeros mensajes

Quien se incorpora escribe desde su primer día, y sus primeros mensajes son precisamente los que
salen hacia gente que no la conoce: presentación a un cliente, primer contacto con un proveedor,
respuesta a una candidatura.

Son, por tanto, los mensajes donde la firma más cuenta, y donde más a menudo está ausente o
improvisada. Cuando por fin aparece, suele haberse copiado de la de un compañero, con sus eventuales
errores, su versión caducada del logotipo y a veces el número de teléfono de dicho compañero.

## Por qué la gestión manual falla sistemáticamente aquí

El recorrido habitual tiene demasiados pasos para sobrevivir a la realidad de una semana de
incorporación.

Alguien tiene que acordarse de enviar el modelo. La nueva persona tiene que encontrar ese mensaje
entre los otros cuarenta de su primera semana. Tiene que abrir los ajustes de su cliente de correo,
pegar el HTML, sustituir la información personal y ajustar el logotipo. Y después repetirlo en su
teléfono, cosa que nadie hace.

Cada uno de esos pasos tiene una tasa de pérdida. Multiplicados, explican que una parte significativa
de las firmas de una organización sea incorrecta de forma permanente.

## Lo que cambia una firma aplicada por el servicio

Con un complemento y una sincronización de directorio, el recorrido desaparece. Se crea la cuenta, se
rellenan los atributos, la persona se vincula a una unidad o a un grupo: la firma existe.

Abre Outlook o Gmail, redacta su primer mensaje y la firma está ahí, con su nombre, su cargo, su
departamento, el logotipo de la empresa y el banner de campaña en curso. No ha configurado nada y
probablemente ignora que un sistema se ha encargado de ello. Es el resultado buscado.

El mecanismo se describe en
[sincronizar las firmas con el directorio](/es/blog/firma-entra-id-azure-ad) y, del lado del
despliegue, en la página del
[complemento de Microsoft 365](/es/integraciones/microsoft-365-outlook).

## La verdadera condición: atributos rellenados en la creación

El automatismo vale lo que vale el directorio. Si la cuenta se crea solo con un nombre y una
dirección, la firma se reducirá a eso.

El punto de control útil está por tanto en el proceso de creación de cuentas de recursos humanos.
Cuatro atributos deben rellenarse desde la apertura, no «más adelante»:

- el cargo, tomado del catálogo interno en lugar de improvisado;
- el departamento;
- el teléfono profesional, en formato internacional;
- la sede o la entidad jurídica.

Es una modificación leve del formulario de creación, y resuelve el tema de forma definitiva. Si tu
herramienta de recursos humanos ya alimenta el directorio automáticamente, comprueba simplemente que
esos cuatro campos formen parte del mapeo.

> **Conviene saberlo:** prevé explícitamente el comportamiento cuando falta un atributo. Una línea
> vacía debe desaparecer **entera**, etiqueta incluida. Una firma que muestra «Cargo:» seguido de nada
> es peor que la ausencia de la línea.

## Los casos particulares que hay que resolver una vez

**Proveedores y personal temporal.** ¿Deben llevar la firma de la empresa? Muchas organizaciones
prefieren una variante sin mención de cargo, o con una mención explícita de la situación. Hay que
resolverlo con jurídico y plasmarlo después en una unidad organizativa dedicada.

**Personas en prácticas y en formación dual.** La misma pregunta, con una respuesta generalmente más
sencilla: la firma estándar, con el cargo real.

**Los periodos de prueba.** No hay razón para tratarlos de otro modo: la persona representa a la
empresa desde el primer día.

**Los buzones compartidos y funcionales.** No deben recibir una firma nominal. Aíslalos en una unidad
sin plantilla vinculada, o dales una plantilla de departamento.

## El reverso de la salida

Lo que vale a la llegada vale a la salida, en sentido inverso: la firma debe desaparecer con el acceso
y el buzón debe tratarse con limpieza. Es el tema de
[la salida de un empleado](/es/blog/baja-empleado-firma-correo).

Los dos momentos dependen del mismo mecanismo —la vinculación con el directorio— y se resuelven por
tanto juntos. Es uno de los argumentos más sólidos frente a un departamento de informática que hoy
gestiona esas transiciones a mano, como se detalla en
[la guía de gestión en la empresa](/es/blog/gestion-de-firmas-de-correo-en-la-empresa).
