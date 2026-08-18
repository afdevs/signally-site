---
slug: "firma-entra-id-azure-ad"
title: "Sincronizar las firmas con el directorio de Entra ID"
description: "Cómo se rellenan los campos de una firma desde Microsoft Entra ID: atributos utilizados, calidad de los datos, gestión de los campos vacíos y propagación de un cambio de cargo."
keyword: "firma entra id azure ad"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-29
summary:
  - "Los campos dinámicos de una firma se rellenan desde los atributos de Entra ID: displayName, jobTitle, department, mobilePhone, officeLocation."
  - "La sincronización es de solo lectura: la herramienta nunca modifica tu directorio."
  - "Un atributo vacío debe hacer desaparecer toda su línea, no dejar una etiqueta huérfana en la firma."
  - "La calidad del directorio se hace visible: desplegar firmas revela sistemáticamente los datos que faltan."
related:
  - "deployer-signature-microsoft-365"
  - "signature-nouveau-collaborateur"
  - "signature-mail-outlook-entreprise"
faq:
  - q: "¿Qué atributos de Entra ID se usan en una firma?"
    a: "Los más habituales son displayName, jobTitle, department, mail, mobilePhone y businessPhones, officeLocation y companyName. Qué campos se muestran realmente lo decides tú: solo esos se sincronizan."
  - q: "¿La sincronización modifica mi directorio?"
    a: "No. El acceso es de solo lectura. No se escribe nada en Entra ID y el consentimiento solicitado no incluye ningún permiso de escritura."
  - q: "¿Qué pasa si un atributo está vacío?"
    a: "La línea correspondiente debe desaparecer por completo de la firma, etiqueta incluida. Una firma bien construida nunca muestra «Móvil:» seguido de nada."
  - q: "¿Cuánto tarda en reflejarse un cambio de cargo?"
    a: "La firma se reconstruye a partir de los datos sincronizados: una vez actualizado el directorio y pasada la sincronización, el cambio aparece en los mensajes siguientes, sin ninguna acción del usuario."
---

Una firma de empresa solo merece la pena a escala si se rellena sola. Ese es el papel de los campos
dinámicos: la plantilla contiene huecos —nombre, cargo, teléfono— que el sistema sustituye por los
valores del directorio en el momento de la inserción. En un tenant de Microsoft, ese directorio es
Entra ID.

## Qué atributos se utilizan

Una firma tipo moviliza un puñado de atributos estándar:

| Campo de la firma | Atributo de Entra ID |
| --- | --- |
| Nombre mostrado | `displayName` |
| Cargo | `jobTitle` |
| Departamento | `department` |
| Dirección de correo | `mail` |
| Teléfono móvil | `mobilePhone` |
| Teléfono fijo | `businessPhones` |
| Oficina / sede | `officeLocation` |
| Entidad jurídica | `companyName` |

Solo se sincronizan los atributos que decides mostrar. Es la aplicación directa del principio de
minimización: nada justifica recuperar campos que no van a aparecer nunca en una firma. El alcance
exacto se describe en nuestra página de [seguridad y RGPD](/es/seguridad-rgpd).

El acceso es de **solo lectura**. La pantalla de consentimiento de Microsoft lo muestra
explícitamente al conectar el tenant, como se describe en
[la guía de despliegue](/es/blog/desplegar-firma-microsoft-365).

## Lo que un despliegue revela de tu directorio

Esto es lo que nadie anticipa: poner los datos del directorio en una firma los hace públicos. Salen
hacia tus clientes, en cada mensaje. Y el estado real del directorio aparece de golpe.

Los casos clásicos se parecen de una organización a otra. `jobTitle` vacíos en la mitad de un
departamento. Denominaciones incoherentes —«Resp. Comercial», «Responsable comercial», «Sales
Manager»— para el mismo puesto. Números en formatos dispares: `612345678`, `612 34 56 78`,
`+34612345678`. `department` rellenado con un código interno en lugar de una etiqueta legible.

Es una buena noticia disfrazada: desplegar una firma es la mejor auditoría de directorio gratuita
que existe. Simplemente, prevé una pasada de limpieza antes de generalizar, no después.

> **Conviene saberlo:** normaliza los números de teléfono al formato internacional
> (`+34 612 34 56 78`) antes del despliegue. Es el único formato que sigue siendo pulsable de forma
> fiable desde un móvil extranjero.

## Gestionar bien los campos vacíos

La trampa más habitual de una plantilla novata es la etiqueta huérfana. El modelo contiene «Móvil:
{mobilePhone}», el atributo está vacío y la firma muestra «Móvil:» seguido de nada. Multiplicado por
todas las personas sin móvil profesional, el efecto es lamentable.

Una plantilla correcta trata la **línea entera** como condicional: si el atributo está vacío, la
etiqueta, el valor y el separador desaparecen juntos, y el bloque se cierra. Es un comportamiento
que hay que comprobar explícitamente durante la validación, previsualizando un perfil
deliberadamente incompleto.

El mismo razonamiento vale para bloques enteros: una línea «Oficina» no tiene razón de ser en un
equipo totalmente en remoto.

## La propagación de un cambio

El beneficio real de la sincronización se ve en una movilidad interna. Alguien cambia de cargo:
recursos humanos actualiza `jobTitle` en el directorio —gesto que hace de todos modos— y la firma
sigue en los mensajes siguientes. Ningún ticket, ninguna instrucción, ningún recordatorio.

Sin sincronización, en cambio, la actualización depende del propio empleado. En la práctica, no
ocurre: es habitual encontrar firmas que anuncian un cargo abandonado hace dos años.

El mismo mecanismo cubre la llegada de una nueva persona, tratada en
[el artículo sobre la incorporación](/es/blog/firma-nuevo-empleado).

## Campos de directorio y campos de plantilla

No todo viene del directorio, y es deliberado. En una plantilla conviven tres familias:

**Los campos dinámicos**, rellenados desde Entra ID, propios de cada empleado.

**Los elementos fijos de la plantilla** —logotipo, avisos legales, cláusula de confidencialidad,
identidad gráfica—, comunes a toda la organización o a un equipo, y bloqueados por el administrador.

**Los banners de campaña**, gobernados por un calendario y capaces de dirigirse a equipos concretos,
como se describe en la página de [campañas](/es/campanas).

Esta separación es lo que permite dejar que un empleado ajuste su número directo sin que pueda tocar
el logotipo ni los avisos legales. Se configura campo por campo en
[el editor](/es/funcionalidades).
