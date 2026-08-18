---
slug: "desplegar-firma-microsoft-365"
title: "Desplegar una firma desde el centro de administración de Microsoft 365"
description: "El recorrido exacto por el centro de administración de Microsoft 365: consentimiento de administrador, despliegue del complemento desde Aplicaciones integradas, grupo piloto y generalización a toda la organización."
keyword: "desplegar firma microsoft 365"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-24
summary:
  - "El despliegue se hace desde «Aplicaciones integradas» del centro de administración de Microsoft 365."
  - "Basta con un consentimiento de administrador en solo lectura sobre el directorio: no se pide ningún acceso al contenido de los mensajes."
  - "El despliegue puede limitarse a un grupo piloto y extenderse después a toda la organización."
  - "El complemento tarda de unos minutos a unas horas en llegar a los puestos, según el cliente."
related:
  - "signature-mail-outlook-entreprise"
  - "signature-entra-id-azure-ad"
  - "add-in-ou-regle-de-transport-exchange"
faq:
  - q: "¿Qué rol hace falta para desplegar el complemento?"
    a: "El rol de administrador general, o un rol con permisos de gestión de aplicaciones integradas. El consentimiento en nombre de la organización exige un administrador general."
  - q: "¿Cuánto tarda el complemento en aparecer a los usuarios?"
    a: "Cuenta con unos minutos en Outlook Web y hasta unas horas en los clientes de escritorio, mientras se recupera el manifiesto. Reiniciar Outlook acelera el proceso."
  - q: "¿Se puede retirar el complemento después del despliegue?"
    a: "Sí. La eliminación se hace desde la misma sección «Aplicaciones integradas». Las firmas dejan entonces de insertarse, sin efecto sobre los mensajes ya enviados."
  - q: "¿El despliegue modifica la configuración de mi enrutamiento saliente?"
    a: "No. Un complemento no interviene en el transporte: ningún conector, ninguna regla de flujo, ninguna redirección. Tus mensajes siguen saliendo exactamente igual que antes."
---

El despliegue de una firma de empresa en Microsoft 365 se juega en un puñado de pantallas del centro
de administración. La parte técnica es corta —unos quince minutos—, pero supone haber resuelto antes
algunas preguntas. Este es el recorrido completo, en orden.

## Paso 1 — Conectar el tenant

Antes de desplegar nada, la aplicación debe estar autorizada en tu tenant. La conexión se hace desde
Signally, que redirige a la pantalla de consentimiento de Microsoft Entra ID.

Un administrador general concede el consentimiento **en nombre de la organización**. Los permisos
solicitados se limitan a la lectura de los atributos de directorio que la firma necesita: nombre,
apellidos, cargo, departamento, teléfono profesional y dependencia organizativa. No se requiere
ningún permiso de lectura del correo, y no se solicita ninguno.

Es el punto que tu responsable de seguridad examinará primero. La pantalla de consentimiento
enumera explícitamente las autorizaciones: constituye la prueba más directa del alcance real.
Nuestro enfoque está detallado en la página de [seguridad y RGPD](/es/seguridad-rgpd).

## Paso 2 — Desplegar el complemento

En el centro de administración de Microsoft 365, ve a **Configuración → Aplicaciones integradas** y
después a «Obtener aplicaciones». Busca el complemento, selecciónalo y lanza el despliegue.

La pantalla siguiente te pide el alcance. Tres opciones:

1. **Usuarios o grupos concretos**: la opción recomendada para un primer despliegue.
2. **Toda la organización**: una vez hecha la validación.
3. **Solo yo**: útil para una prueba individual incluso antes del piloto.

Elige un grupo de Microsoft 365 existente o crea uno para la ocasión con una decena de personas
representativas: alguien en Outlook para Windows, alguien en Mac, alguien que escriba sobre todo
desde el móvil.

> **Conviene saberlo:** la propagación no es instantánea. En Outlook Web, el complemento aparece en
> unos minutos. En los clientes de escritorio, el manifiesto puede tardar varias horas en
> recuperarse; reiniciar Outlook acelera las cosas. Avisa a tu grupo piloto para evitar una serie de
> avisos prematuros.

## Paso 3 — Asignar las plantillas a los grupos

Desplegar el complemento pone el mecanismo a disposición; todavía no dice qué firma debe recibir
cada persona. Esa asociación se hace del lado de Signally, vinculando cada grupo de Microsoft 365
—o cada unidad de tu directorio— con su plantilla.

Aquí es donde importa el reparto. Una organización sencilla se apaña con una única plantilla. En
cuanto hay varias marcas, varios países o equipos comerciales que llevan banners distintos de los de
soporte, prevé una variante por grupo. El principio se describe en la página del
[editor de firmas](/es/funcionalidades).

Quien pertenece a varios grupos recibe la plantilla del grupo más específico: comprueba el orden de
prioridad si tus grupos se solapan.

## Paso 4 — Validar con el grupo piloto

Déjalo funcionar una semana. Pide al piloto que compruebe tres cosas concretas, en lugar de un vago
«¿funciona?»:

- la firma aparece efectivamente al redactar un mensaje **nuevo** y una **respuesta**;
- los campos personales son correctos: aquí es donde salen a la luz los datos de directorio mal
  rellenados;
- el resultado es limpio en un destinatario externo, sobre todo en Gmail.

Este último punto es el más útil: envía un mensaje a una dirección personal y mira lo que llega de
verdad.

## Paso 5 — Generalizar

Vuelve a «Aplicaciones integradas», modifica el alcance del despliegue y pasa a toda la
organización. No se pide ninguna nueva validación a los usuarios.

A partir de ahí, el sistema se mantiene solo. Una nueva incorporación que aparece en el directorio y
pertenece a un grupo vinculado recibe su firma sin intervención, ni suya ni del equipo de
informática. Es el mecanismo descrito en el artículo sobre
[la sincronización con Entra ID](/es/blog/firma-entra-id-azure-ad).

## El punto de comparación que conviene recordar

Este recorrido no toca en ningún momento tu configuración de transporte. Sin conector, sin regla de
flujo, sin modificación del encaminamiento saliente. Es la diferencia de fondo con el enfoque por
regla de transporte de Exchange, cuyas implicaciones se analizan en
[complemento o regla de transporte](/es/blog/complemento-outlook-o-regla-transporte-exchange).
