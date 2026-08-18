---
slug: "firma-de-correo-rgpd"
title: "Firma de correo y RGPD: lo que dice realmente el reglamento"
description: "Los datos de una firma son datos personales. Lo que eso implica en concreto: base jurídica, minimización, encargo del tratamiento y derechos de las personas."
keyword: "firma de correo rgpd"
cluster: "RGPD & sécurité"
pubDate: 2026-04-14
summary:
  - "El nombre, el cargo y el teléfono profesional de un empleado son datos personales según el RGPD."
  - "El tratamiento se basa por lo general en el interés legítimo del empleador, no en el consentimiento del trabajador."
  - "El principio de minimización obliga a sincronizar solo los campos que se muestran realmente."
  - "Un proveedor de firmas actúa como encargado del tratamiento: se requiere un acuerdo de tratamiento."
related:
  - "securite-outil-signature-mail"
  - "hebergement-donnees-france-saas"
  - "mentions-legales-email-professionnel"
faq:
  - q: "¿Los datos de una firma son datos personales?"
    a: "Sí. El nombre, el cargo, la dirección de correo profesional y el teléfono profesional de una persona identificable entran en el ámbito del RGPD, aunque se trate de datos profesionales."
  - q: "¿Hace falta el consentimiento de los trabajadores para mostrar sus datos?"
    a: "El consentimiento rara vez es la base jurídica elegida en una relación laboral, porque la relación de subordinación debilita su carácter libre. El tratamiento se basa por lo general en el interés legítimo o en la ejecución del contrato de trabajo. Haz calificar la base jurídica por tu delegado de protección de datos."
  - q: "¿Un proveedor de firmas es responsable o encargado del tratamiento?"
    a: "Encargado, en el sentido del artículo 28: trata los datos por cuenta de tu empresa, que sigue siendo la responsable. Eso exige un acuerdo de tratamiento que precise finalidades, plazos y medidas de seguridad."
  - q: "¿Hay que inscribir las firmas en el registro de actividades de tratamiento?"
    a: "El tratamiento correspondiente —gestión de firmas y del directorio asociado— debe figurar en el registro, generalmente vinculado al tratamiento más amplio de gestión de personal. Consulta con tu delegado cómo está ya cubierto."
---

Una firma de correo muestra el nombre, el cargo y los datos profesionales de una persona
identificable. Son datos personales, y su tratamiento entra en el ámbito del RGPD. Eso no vuelve el
tema complicado, pero sí impone algunas comprobaciones que muchas organizaciones nunca han hecho.

> Este artículo presenta el marco general. No sustituye el análisis de tu delegado de protección de
> datos o de tu asesoría, los únicos capaces de calificar tu situación.

## Qué entra en el ámbito del RGPD en una firma

El reglamento se aplica a los datos que permiten identificar a una persona física, directa o
indirectamente. El carácter profesional del dato no lo excluye del ámbito.

En una firma, eso cubre: el nombre y los apellidos, el cargo, la dirección de correo profesional, el
teléfono profesional, el departamento y la sede, y eventualmente la fotografía.

Que esa información esté destinada a difundirse no cambia nada de su naturaleza: siguen siendo datos
personales, tratados por tu organización.

## La base jurídica del tratamiento

Es la pregunta que más se repite: ¿hay que pedir su conformidad a los trabajadores?

En una relación laboral, el consentimiento es una base jurídica frágil. La relación de subordinación
hace difícil demostrar que se otorga libremente, y un consentimiento revocable en cualquier momento
encaja mal con un dispositivo de empresa.

Las bases que suelen elegirse son la **ejecución del contrato de trabajo** —la persona debe poder ser
identificada en sus intercambios profesionales— o el **interés legítimo** del empleador en mantener
una comunicación coherente. La calificación precisa corresponde a tu delegado de protección de datos.

El caso de la fotografía es distinto: mostrarla rara vez es necesario para ejecutar el contrato, y el
consentimiento es ahí más pertinente. Es un argumento más para dejar la foto como opcional en lugar de
imponerla por plantilla.

## El principio de minimización, aplicado en concreto

El artículo 5 obliga a limitar los datos tratados a lo necesario para la finalidad. Para una firma,
eso se traduce muy sencillamente: **sincroniza solo los campos que aparecen realmente en la firma**.

Si tu plantilla muestra nombre, cargo, departamento y móvil, no hay ninguna razón para recuperar la
fecha de alta, el número de empleado o el responsable jerárquico, aunque el directorio los contenga y
aunque la API los ofrezca.

Es un punto comprobable y que se comprueba en las revisiones de cumplimiento. El perímetro exacto que
sincronizamos está en nuestra página de [seguridad y RGPD](/es/seguridad-rgpd).

## La relación con el proveedor: el encargo del tratamiento

Una herramienta de gestión de firmas trata datos personales por cuenta de tu empresa. Es, por tanto,
**encargada del tratamiento** en el sentido del artículo 28, y tu empresa sigue siendo la responsable.

Esa calificación conlleva obligaciones concretas. Debe firmarse un acuerdo de tratamiento de datos que
precise las finalidades, las categorías de datos, los plazos de conservación, las medidas de seguridad
y el destino de los datos al final del contrato. Debe comunicarse la lista de posibles
subencargados, el proveedor de alojamiento en particular. Y el proveedor debe asistirte en caso de
ejercicio de derechos o de incidente.

Pide esos elementos por escrito antes de contratar, sea cual sea el proveedor.

## Los derechos de las personas

Un empleado puede ejercer sus derechos sobre los datos que le conciernen. En la práctica, para una
firma, dos derechos aparecen de verdad.

**El derecho de rectificación.** Un cargo erróneo, un número obsoleto. La respuesta operativa consiste
en corregir el directorio: la firma sigue. Es una ventaja directa de la sincronización: ver
[sincronizar las firmas con el directorio](/es/blog/firma-entra-id-azure-ad).

**El derecho de oposición.** Puede referirse a un elemento concreto, normalmente la fotografía o un
número de móvil personal. De ahí el interés de prever campos opcionales en lugar de una plantilla
totalmente rígida.

La supresión completa es más teórica: un trabajador no puede oponerse a que su nombre aparezca en sus
comunicaciones profesionales, ya que esa identificación forma parte de la ejecución de su contrato.

## Las preguntas que hay que hacer a un proveedor

Cinco preguntas, que cubren lo esencial de una revisión de cumplimiento:

1. ¿Qué datos se sincronizan exactamente y se puede restringir el perímetro?
2. ¿Se accede al contenido de los correos en algún momento? — ver
   [¿puede una herramienta de firma leer tus correos?](/es/blog/seguridad-herramienta-firma-correo).
3. ¿Dónde se alojan los datos y bajo qué jurisdicción? — ver
   [soberanía de los datos](/es/blog/alojamiento-datos-ue-saas).
4. ¿Se facilita un acuerdo de tratamiento y qué subencargados menciona?
5. ¿Qué pasa con los datos al final del contrato y en qué plazo?

Las respuestas deben ser por escrito. Un proveedor que responde de palabra a estas preguntas no te
protege.

## Lo que no es un tema de RGPD

Para terminar con una aclaración útil: el **banner de campaña** insertado en una firma no constituye
un tratamiento de datos del destinatario. No lo añades a una lista ni lo perfilas; muestras una imagen
en un mensaje que tu empleado le envía de todos modos.

El matiz merece, no obstante, la opinión de tu delegado de protección de datos si tus banners se
vuelven puramente promocionales y si implantas un seguimiento de clics nominal: ver la página de
[campañas](/es/campanas).
