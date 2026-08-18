---
slug: "firma-unidad-organizativa"
title: "Gestionar las firmas por unidad organizativa de Google"
description: "Las unidades organizativas de Google Workspace permiten asignar una plantilla de firma distinta por filial, país o departamento. Cómo estructurar las UO para que las firmas sigan a la organización."
keyword: "unidad organizativa firma google"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-10
summary:
  - "Una unidad organizativa de Google puede llevar su propia plantilla de firma."
  - "Un usuario pertenece a una sola UO: la asignación es, por tanto, inequívoca, a diferencia de los grupos."
  - "Los grupos de Google siguen siendo útiles para una segmentación transversal, sobre todo de banners de campaña."
  - "Un árbol de UO calcado de la organización real evita la mayoría de los casos particulares."
related:
  - "signature-gmail-entreprise"
  - "signature-mail-groupe-filiales"
  - "gestion-signature-gmail"
faq:
  - q: "¿Puede un usuario pertenecer a varias unidades organizativas?"
    a: "No. En Google Workspace, cada usuario pertenece a exactamente una UO. Eso es lo que hace que la asignación de una plantilla no sea ambigua, a diferencia de los grupos, en los que se puede estar simultáneamente."
  - q: "¿Qué diferencia hay entre unidad organizativa y grupo de Google?"
    a: "La UO es una estructura jerárquica de pertenencia única, usada para aplicar ajustes. El grupo es una lista de pertenencia múltiple, más orientada a la difusión y los permisos. Para una plantilla base, la UO encaja; para segmentar una campaña transversal, el grupo es más flexible."
  - q: "¿Las sub-unidades heredan los ajustes de una UO?"
    a: "Sí, por defecto una sub-UO hereda los ajustes de su padre y puede sobrescribirlos. Es lo que permite una plantilla de grupo sobrescrita por filial."
  - q: "¿Hay que reestructurar mis UO para desplegar firmas?"
    a: "Pocas veces. Si tu árbol ya refleja la organización real, sirve tal cual. Una reestructuración solo se justifica si las UO se construyeron sobre un criterio técnico sin relación con las entidades."
---

En Google Workspace, la unidad organizativa es la pieza que lleva los ajustes. Es por tanto en ese
nivel donde se asigna de forma natural una plantilla de firma. Bien utilizada, resuelve de golpe la
cuestión de las filiales, las marcas y los países. Mal estructurada, multiplica las excepciones.

## Por qué la UO es el nivel correcto de asignación

Un usuario de Google Workspace pertenece a **exactamente una** unidad organizativa. Esa unicidad es
valiosa: cuando se vincula una plantilla a una UO, no existe ninguna ambigüedad sobre qué firma debe
recibir un empleado.

Los grupos, en cambio, permiten pertenencias múltiples. Un comercial puede pertenecer al grupo
«Comerciales», al grupo «España» y al grupo «Comité de producto»: si cada uno llevara una plantilla,
habría que arbitrar. Por eso la plantilla base se vincula a la UO, y los grupos sirven para la
segmentación transversal, típicamente los banners de campaña.

La herencia completa el cuadro: una sub-UO toma por defecto los ajustes de su padre y puede
sobrescribirlos. Defines así una plantilla de grupo en la cima y solo sobrescribes donde hace falta.

## Un árbol que refleja la organización real

El principio rector es sencillo: **el árbol de UO debe parecerse al organigrama, no a la
infraestructura**. Una estructura típica de grupo con varias filiales es así:

```
/ (raíz — plantilla de grupo)
├── /Filial A         (plantilla A, logotipo y avisos propios)
│   ├── /Comercial
│   └── /Soporte
├── /Filial B         (plantilla B)
└── /España           (plantilla A, avisos legales locales)
```

En cada nivel solo se sobrescribe lo que difiere. Las sub-UO Comercial y Soporte de la filial A no
necesitan plantilla propia si su firma es idéntica: la heredan. En cambio, pueden llevar banners
distintos.

Las entidades extranjeras merecen atención: mismo logotipo, mismos colores, pero avisos legales y
número de registro distintos. Es exactamente lo que permite la sobrescritura; ver también
[firmas multimarca](/es/blog/firmas-correo-multimarca-filiales).

## Qué comprobar antes de vincular las plantillas

**El estado real del árbol.** En muchas organizaciones, las UO se crearon sobre la marcha, a veces
con criterios técnicos: «/Usuarios», «/Cuentas de servicio», «/Migración 2021». Si es tu caso,
vincular las plantillas sacará a la luz la incoherencia. Limpia antes, no después.

**Las cuentas fuera de ámbito.** Cuentas de servicio, buzones compartidos, salas de reunión, alias
técnicos: no deben recibir una firma de empleado. Aíslalos en una UO dedicada, sin plantilla
vinculada.

**Los casos particulares asumidos.** Dirección general, apoderados, portavoces: algunas
organizaciones quieren una variante. Crea una sub-UO explícita en lugar de una excepción gestionada
a mano.

> **Conviene saberlo:** un usuario trasladado de una UO a otra cambia de plantilla automáticamente.
> Es el mecanismo que hace indoloras las movilidades internas, ya que el traslado en la consola lo
> hacen de todos modos recursos humanos o informática.

## Dónde acaba la UO y dónde empiezan los grupos

La UO responde bien a la pregunta «qué firma». Responde mal a «quién lleva qué banner», porque una
campaña rara vez sigue las fronteras del organigrama.

Una campaña de selección de personal se dirige a todo el mundo. Una campaña de producto apunta a los
comerciales de dos filiales de tres. Un seminario web afecta a los equipos técnicos, estén donde
estén. Esos perímetros se describen de forma natural con grupos, no con UO.

La combinación que funciona: **plantilla por UO, banner por grupo**. El detalle de la segmentación
está en la página de [campañas y banners](/es/campanas).

## La sincronización de los datos individuales

La plantilla viene de la UO; los valores que la rellenan vienen del directorio. Nombre, cargo,
departamento, teléfono: esos atributos se leen en Google Directory, en solo lectura, y se inyectan
en los campos dinámicos.

Igual que en el lado de Microsoft, un despliegue saca a la luz el estado real del directorio: cargos
ausentes, formatos de teléfono heterogéneos, departamentos rellenados con códigos internos. Prevé
una pasada de limpieza en la planificación: es sistemáticamente la tarea infravalorada, como recuerda
nuestra guía de
[paso a una gestión centralizada](/es/blog/gestion-centralizada-firma-gmail).

El recorrido completo de instalación está en la página del
[complemento de Google Workspace](/es/integraciones/google-workspace-gmail).
