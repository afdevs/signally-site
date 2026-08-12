---
title: "Gérer les signatures par unité organisationnelle Google"
description: "Les unités organisationnelles Google Workspace permettent d'attribuer un gabarit de signature différent par filiale, pays ou service. Comment structurer les OU pour que les signatures suivent l'organisation."
keyword: "unité organisationnelle signature"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-10
summary:
  - "Une unité organisationnelle Google peut porter son propre gabarit de signature."
  - "Un utilisateur n'appartient qu'à une seule OU : l'attribution est donc sans ambiguïté, contrairement aux groupes."
  - "Les groupes Google restent utiles pour un ciblage transversal, notamment des bannières de campagne."
  - "Une arborescence d'OU calquée sur l'organisation réelle évite la plupart des cas particuliers."
related:
  - "signature-gmail-entreprise"
  - "signature-mail-groupe-filiales"
  - "gestion-signature-gmail"
faq:
  - q: "Un utilisateur peut-il appartenir à plusieurs unités organisationnelles ?"
    a: "Non. Dans Google Workspace, chaque utilisateur appartient à exactement une OU. C'est ce qui rend l'attribution d'un gabarit non ambiguë, contrairement aux groupes auxquels on peut appartenir simultanément."
  - q: "Quelle différence entre unité organisationnelle et groupe Google ?"
    a: "L'OU est une structure hiérarchique d'appartenance unique, utilisée pour appliquer des paramètres. Le groupe est une liste d'appartenance multiple, plutôt utilisée pour la diffusion et les autorisations. Pour un gabarit de base, l'OU convient ; pour cibler une campagne transversale, le groupe est plus souple."
  - q: "Les paramètres d'une OU sont-ils hérités par ses sous-unités ?"
    a: "Oui, par défaut, une sous-OU hérite des paramètres de son parent, et peut les surcharger. C'est ce qui permet un gabarit groupe surchargé par filiale."
  - q: "Faut-il restructurer mes OU pour déployer des signatures ?"
    a: "Rarement. Si votre arborescence reflète déjà l'organisation réelle, elle convient telle quelle. Une restructuration ne se justifie que si les OU ont été construites sur un critère technique sans rapport avec les entités."
---

Dans Google Workspace, l'unité organisationnelle est la brique qui porte les paramètres. C'est
donc naturellement à ce niveau que s'attribue un gabarit de signature. Bien utilisée, elle règle
d'un coup la question des filiales, des marques et des pays. Mal structurée, elle multiplie les
exceptions.

## Pourquoi l'OU est le bon niveau d'attribution

Un utilisateur Google Workspace appartient à **exactement une** unité organisationnelle. Cette
unicité est précieuse : quand on rattache un gabarit à une OU, il n'existe aucune ambiguïté sur la
signature qu'un collaborateur doit recevoir.

Les groupes, à l'inverse, autorisent les appartenances multiples. Un commercial peut appartenir au
groupe « Commerciaux », au groupe « France » et au groupe « Comité produit » : si chacun portait un
gabarit, il faudrait arbitrer. C'est pourquoi le gabarit de base se rattache à l'OU, et les
groupes servent au ciblage transversal — typiquement les bannières de campagne.

L'héritage complète le tableau : une sous-OU reprend par défaut les paramètres de son parent, et
peut les surcharger. Vous définissez donc un gabarit groupe au sommet, et vous ne surchargez que
là où c'est nécessaire.

## Une arborescence qui reflète l'organisation réelle

Le principe directeur est simple : **l'arborescence des OU doit ressembler à l'organigramme, pas à
l'infrastructure**. Une structure typique de groupe multi-filiales ressemble à ceci :

```
/ (racine — gabarit groupe)
├── /Filiale A       (gabarit A, logo et mentions propres)
│   ├── /Commerce
│   └── /Support
├── /Filiale B       (gabarit B)
└── /Espagne         (gabarit A, mentions légales locales)
```

À chaque niveau, on ne surcharge que ce qui diffère. Les sous-OU Commerce et Support de la filiale
A n'ont pas besoin de gabarit propre si leur signature est identique : elles héritent. En
revanche, elles peuvent porter des bannières différentes.

Le cas des entités étrangères mérite attention : même logo, mêmes couleurs, mais mentions légales
et numéro d'immatriculation différents. C'est exactement ce que permet la surcharge — voir aussi
[signatures multi-filiales](/blog/signature-mail-groupe-filiales).

## Ce qu'il faut vérifier avant de rattacher les gabarits

**L'état réel de l'arborescence.** Dans beaucoup d'organisations, les OU ont été créées au fil de
l'eau, parfois sur des critères techniques — « /Utilisateurs », « /Comptes de service »,
« /Migration 2021 ». Si c'est votre cas, le rattachement des gabarits révélera l'incohérence.
Nettoyez avant, pas après.

**Les comptes hors périmètre.** Comptes de service, boîtes partagées, salles de réunion, alias
techniques : ils ne doivent pas recevoir de signature de collaborateur. Isolez-les dans une OU
dédiée, sans gabarit rattaché.

**Les cas particuliers assumés.** Direction générale, mandataires sociaux, porte-parole : certaines
organisations veulent une variante. Créez une sous-OU explicite plutôt qu'une exception gérée à la
main.

> **Bon à savoir :** un utilisateur déplacé d'une OU à une autre change de gabarit automatiquement.
> C'est le mécanisme qui rend les mobilités internes indolores — le déplacement dans la console est
> de toute façon effectué par les RH ou l'IT.

## Où s'arrête l'OU, où commencent les groupes

L'OU répond bien à la question « quelle signature ». Elle répond mal à « qui porte quelle
bannière », parce qu'une campagne suit rarement les frontières de l'organigramme.

Une campagne de recrutement s'adresse à tout le monde. Une campagne produit vise les commerciaux
de deux filiales sur trois. Un webinaire concerne les équipes techniques, où qu'elles soient. Ces
périmètres se décrivent naturellement avec des groupes, pas avec des OU.

La combinaison qui fonctionne : **gabarit par OU, bannière par groupe**. Le détail du ciblage est
décrit sur la page [campagnes et bannières](/campagnes).

## La synchronisation des données individuelles

Le gabarit vient de l'OU ; les valeurs qui le remplissent viennent de l'annuaire. Nom, fonction,
service, téléphone : ces attributs sont lus dans Google Directory, en lecture seule, et injectés
dans les champs dynamiques.

Comme du côté Microsoft, un déploiement met en lumière l'état réel de l'annuaire : intitulés de
poste absents, formats de téléphone hétérogènes, services renseignés en code interne. Prévoyez une
passe de nettoyage dans le planning — c'est systématiquement le poste de travail sous-estimé, comme
le rappelle notre guide de
[passage à une gestion centralisée](/blog/gestion-signature-gmail).

Le parcours complet d'installation figure sur la page
[add-on Google Workspace](/integrations/google-workspace-gmail).
