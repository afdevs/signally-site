---
title: "Signatures multi-filiales et multi-marques : comment s'organiser"
description: "Un groupe avec plusieurs entités juridiques ne peut pas se contenter d'un gabarit unique. Comment structurer les gabarits par filiale, marque et pays sans multiplier la charge d'entretien."
keyword: "signature mail groupe filiales"
cluster: "Gestion & gouvernance"
pubDate: 2026-03-18
summary:
  - "Les mentions légales suivent l'entité juridique qui envoie le message, pas le siège du groupe."
  - "Un gabarit par entité, hérité d'une structure commune, limite la charge d'entretien."
  - "La question de l'endossement de marque — filiale seule ou filiale plus groupe — doit être tranchée avant la conception."
  - "Le pilotage reste centralisé dans un seul compte d'administration, avec des rôles par entité."
related:
  - "unite-organisationnelle-signature"
  - "signature-mail-bilingue"
  - "gouvernance-de-marque-email"
faq:
  - q: "Faut-il un gabarit par filiale ?"
    a: "Oui dès qu'il y a plusieurs entités juridiques, parce que les mentions légales diffèrent. En revanche, ces gabarits peuvent partager la même structure et ne se distinguer que par le logo, les mentions et éventuellement la couleur d'accent."
  - q: "Faut-il afficher le logo du groupe en plus de celui de la filiale ?"
    a: "Cela dépend de votre stratégie de marque. Un endossement visible — « une société du groupe X » — renforce le groupe ; l'absence d'endossement préserve l'autonomie perçue de la filiale. C'est une décision de direction, pas une décision technique."
  - q: "Peut-on gérer toutes les filiales depuis un seul compte ?"
    a: "Oui. Un compte d'administration unique peut porter autant de gabarits que nécessaire, avec des rôles délégués par entité si vous souhaitez que chaque filiale gère ses propres bannières."
  - q: "Comment gérer un collaborateur rattaché à deux entités ?"
    a: "Il faut trancher une entité principale, celle dont il porte les mentions légales. Les cas de double rattachement réel sont rares et se traitent au cas par cas avec une variante explicite."
---

Un groupe de plusieurs sociétés ne peut pas traiter ses signatures comme une entreprise unique. Ce
n'est pas une question d'esthétique mais de droit : les mentions obligatoires suivent l'entité qui
envoie le message. Reste à organiser cela sans créer une charge d'entretien ingérable.

## Le point de départ : la carte des entités

Avant toute conception, établissez la liste réelle. Elle est souvent plus longue que ce que la
direction de la communication imagine, et elle ne recoupe pas toujours l'organigramme
opérationnel.

Trois axes se superposent, et il faut les distinguer :

**Les entités juridiques.** Chacune a sa raison sociale, son immatriculation, son adresse de siège.
C'est cet axe qui commande les mentions légales.

**Les marques commerciales.** Une entité peut en exploiter plusieurs, ou plusieurs entités partager
une marque. C'est cet axe qui commande le logo et les couleurs.

**Les pays.** Ils commandent la langue et les obligations locales — voir
[signature mail bilingue](/blog/signature-mail-bilingue).

Un tableau à trois colonnes suffit à cartographier l'ensemble, et il révèle généralement quelques
incohérences historiques qu'il vaut mieux traiter avant qu'après.

## La décision d'endossement

C'est la question que la technique ne tranche pas et que la direction doit trancher : la signature
d'une filiale mentionne-t-elle le groupe ?

**Endossement visible.** Le logo de la filiale, accompagné d'une mention « une société du groupe X »
ou du logo du groupe en second. Renforce la notoriété du groupe, utile quand la filiale est peu
connue et le groupe l'est.

**Pas d'endossement.** La filiale apparaît seule. Préserve son autonomie perçue, pertinent quand
les marques s'adressent à des marchés différents, voire concurrents.

**Endossement asymétrique.** Certaines filiales endossent, d'autres non. C'est fréquent après une
acquisition, et parfaitement défendable — à condition que ce soit une décision et non un oubli.

Cette décision conditionne la structure du gabarit : autant la prendre avant.

## Structurer les gabarits sans les multiplier

Le piège serait de créer un gabarit indépendant par entité, puis de devoir répercuter chaque
évolution douze fois.

La bonne approche consiste à définir une **structure commune** — la disposition, la hiérarchie
typographique, l'ordre des informations, la largeur — et à ne faire varier que trois éléments :

| Élément | Varie selon |
| --- | --- |
| Logo | La marque |
| Mentions légales | L'entité juridique |
| Couleur d'accent | La marque |
| Langue | Le pays |
| Structure, hiérarchie, largeur | Jamais — commun à tout le groupe |

Une évolution de structure se répercute alors partout ; seule une évolution de charte propre à une
marque touche un gabarit isolé.

Côté Google Workspace, l'héritage entre unités organisationnelles matérialise exactement ce
principe — voir
[gérer les signatures par unité organisationnelle](/blog/unite-organisationnelle-signature).

## Le rattachement des collaborateurs

Chaque collaborateur doit être rattaché à une entité, et une seule. C'est ce rattachement qui
détermine son gabarit, donc ses mentions légales.

Dans la plupart des annuaires, l'attribut existe déjà — `companyName` côté Microsoft, l'unité
organisationnelle côté Google. Il est simplement mal renseigné, parce que personne ne s'en servait.
Sa fiabilisation fait partie du chantier de nettoyage d'annuaire décrit dans
[uniformiser les signatures](/blog/harmoniser-les-signatures-mail).

Les cas de double rattachement réel — une personne partagée entre deux entités — sont rares.
Tranchez une entité principale plutôt que d'inventer un mécanisme pour une poignée de personnes.

> **Bon à savoir :** vérifiez le comportement des alias d'envoi. Un collaborateur qui écrit parfois
> depuis l'adresse d'une autre marque doit-il porter la signature correspondante ? La réponse est
> souvent oui, et elle demande une configuration explicite.

## Centraliser le pilotage, déléguer les campagnes

L'erreur symétrique du gabarit unique serait de laisser chaque filiale acheter son propre outil.
Vous perdriez la cohérence de structure, la visibilité groupe et le bénéfice tarifaire.

Le modèle qui fonctionne : **un compte d'administration unique**, portant tous les gabarits, avec
des rôles délégués par entité. La direction groupe garde la main sur la structure et les gabarits ;
chaque filiale pilote ses propres bannières sur son propre périmètre — voir la page
[campagnes](/campagnes).

C'est aussi ce qui permet à une DSI groupe de répondre à une question simple mais habituellement
sans réponse : combien de signatures différentes circulent réellement sous nos couleurs, et
lesquelles sont à jour ? Ce point relève de la gouvernance de marque, traitée dans
[pourquoi la signature est votre point faible](/blog/gouvernance-de-marque-email).
