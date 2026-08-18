---
slug: "signature-mail-rgpd"
title: "Signature mail et RGPD : ce que dit vraiment le règlement"
description: "Les données d'une signature sont des données personnelles. Ce que cela implique concrètement : base légale, minimisation, sous-traitance et droits des personnes."
keyword: "signature mail rgpd"
cluster: "RGPD & sécurité"
pubDate: 2026-04-14
summary:
  - "Nom, fonction et téléphone professionnel d'un collaborateur sont des données personnelles au sens du RGPD."
  - "Le traitement repose généralement sur l'intérêt légitime de l'employeur, pas sur le consentement du salarié."
  - "Le principe de minimisation impose de ne synchroniser que les champs réellement affichés."
  - "Un éditeur de signatures agit comme sous-traitant : un accord de traitement est requis."
related:
  - "securite-outil-signature-mail"
  - "hebergement-donnees-france-saas"
  - "mentions-legales-email-professionnel"
faq:
  - q: "Les données d'une signature sont-elles des données personnelles ?"
    a: "Oui. Le nom, la fonction, l'adresse e-mail professionnelle et le téléphone professionnel d'une personne identifiable relèvent du RGPD, même s'il s'agit de données professionnelles."
  - q: "Faut-il le consentement des salariés pour afficher leurs coordonnées ?"
    a: "Le consentement est rarement la base légale retenue dans une relation employeur-salarié, du fait du lien de subordination qui en fragilise le caractère libre. Le traitement repose généralement sur l'intérêt légitime ou sur l'exécution du contrat de travail. Faites qualifier la base légale par votre DPO."
  - q: "Un éditeur de signatures est-il responsable de traitement ou sous-traitant ?"
    a: "Sous-traitant, au sens de l'article 28 : il traite les données pour le compte de votre entreprise, qui reste responsable de traitement. Cela impose un accord de traitement précisant finalités, durées et mesures de sécurité."
  - q: "Faut-il inscrire les signatures au registre des traitements ?"
    a: "Le traitement correspondant — gestion des signatures et de l'annuaire associé — a vocation à figurer au registre, généralement rattaché au traitement plus large de gestion du personnel. Voyez avec votre DPO la façon dont il est déjà couvert."
---

Une signature mail affiche le nom, la fonction et les coordonnées professionnelles d'une personne
identifiable. Ce sont des données personnelles, et leur traitement entre dans le champ du RGPD.
Cela ne rend pas le sujet compliqué, mais cela impose quelques vérifications que beaucoup
d'organisations n'ont jamais faites.

> Cet article présente le cadre général. Il ne remplace pas l'analyse de votre DPO ou de votre
> conseil, seuls à même de qualifier votre situation.

## Ce qui relève du RGPD dans une signature

Le règlement s'applique aux données permettant d'identifier une personne physique, directement ou
indirectement. Le caractère professionnel de la donnée ne l'exclut pas du champ.

Dans une signature, cela couvre : le nom et le prénom, la fonction, l'adresse e-mail
professionnelle, le téléphone professionnel, le service et le site de rattachement, et
éventuellement la photographie.

Le fait que ces informations soient destinées à être diffusées ne change rien à leur nature : elles
restent des données personnelles, traitées par votre organisation.

## La base légale du traitement

C'est la question qui revient le plus souvent : faut-il demander leur accord aux salariés ?

Dans une relation employeur-salarié, le consentement est une base juridique fragile. Le lien de
subordination rend difficile de démontrer qu'il est librement donné, et un consentement retirable à
tout moment s'accorde mal avec un dispositif d'entreprise.

Les bases généralement retenues sont l'**exécution du contrat de travail** — le salarié doit
pouvoir être identifié dans ses échanges professionnels — ou l'**intérêt légitime** de l'employeur
à maintenir une communication cohérente. La qualification précise relève de votre DPO.

Le cas de la photographie est différent : son affichage est rarement nécessaire à l'exécution du
contrat, et le consentement y est plus souvent pertinent. C'est un argument de plus pour laisser la
photo optionnelle plutôt que de l'imposer par gabarit.

## Le principe de minimisation, appliqué concrètement

L'article 5 impose de limiter les données traitées à ce qui est nécessaire à la finalité. Pour une
signature, cela se traduit très simplement : **ne synchronisez que les champs qui apparaissent
réellement dans la signature**.

Si votre gabarit affiche nom, fonction, service et mobile, il n'y a aucune raison de récupérer la
date d'embauche, le matricule ou le responsable hiérarchique — même si l'annuaire les contient et
même si l'API les propose.

C'est un point vérifiable et vérifié lors des revues de conformité. Le périmètre exact que nous
synchronisons figure sur notre page [sécurité et RGPD](/securite-rgpd).

## La relation avec l'éditeur : sous-traitance

Un outil de gestion de signatures traite des données personnelles pour le compte de votre
entreprise. Il est donc **sous-traitant** au sens de l'article 28, votre entreprise restant
responsable de traitement.

Cette qualification emporte des obligations concrètes. Un accord de traitement des données doit
être conclu, précisant les finalités, les catégories de données, les durées de conservation, les
mesures de sécurité et le sort des données en fin de contrat. La liste des éventuels
sous-traitants ultérieurs — hébergeur notamment — doit être communiquée. Et l'éditeur doit vous
assister en cas d'exercice de droits ou d'incident.

Demandez ces éléments par écrit avant de contractualiser, quel que soit le fournisseur.

## Les droits des personnes

Un collaborateur peut exercer ses droits sur les données qui le concernent. En pratique, pour une
signature, deux droits se rencontrent réellement.

**Le droit de rectification.** Une fonction erronée, un numéro obsolète. La réponse opérationnelle
consiste à corriger l'annuaire : la signature suit. C'est un avantage direct de la
synchronisation — voir
[synchroniser les signatures avec l'annuaire](/blog/signature-entra-id-azure-ad).

**Le droit d'opposition.** Il peut porter sur un élément particulier, typiquement la photographie
ou un numéro de mobile personnel. D'où l'intérêt de prévoir des champs optionnels plutôt qu'un
gabarit entièrement rigide.

L'effacement complet est plus théorique : un salarié ne peut pas s'opposer à ce que son nom
apparaisse dans ses communications professionnelles, cette identification relevant de l'exécution
de son contrat.

## Les questions à poser à un fournisseur

Cinq questions, qui recouvrent l'essentiel d'une revue de conformité :

1. Quelles données sont synchronisées, exactement, et peut-on restreindre le périmètre ?
2. Le contenu des e-mails est-il accédé, à un quelconque moment ? — voir
   [un outil de signature peut-il lire vos e-mails](/blog/securite-outil-signature-mail).
3. Où sont hébergées les données, et sous quelle juridiction ? — voir
   [souveraineté des données](/blog/hebergement-donnees-france-saas).
4. Un accord de traitement est-il fourni, et quels sous-traitants ultérieurs mentionne-t-il ?
5. Que deviennent les données en fin de contrat, et sous quel délai ?

Les réponses doivent être écrites. Un fournisseur qui répond oralement à ces questions ne vous
protège pas.

## Ce qui n'est pas un sujet RGPD

Pour finir par une clarification utile : la **bannière de campagne** insérée dans une signature ne
constitue pas un traitement de données du destinataire. Vous n'ajoutez pas ce dernier à une liste,
vous ne le profilez pas ; vous affichez une image dans un message que votre collaborateur lui
envoie de toute façon.

La nuance mérite néanmoins un avis de votre DPO si vos bannières deviennent purement
promotionnelles et si vous mettez en place un suivi de clics nominatif — voir la page
[campagnes](/campagnes).
