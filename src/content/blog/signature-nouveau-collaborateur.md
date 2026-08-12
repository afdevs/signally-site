---
title: "Onboarding : préparer la signature d'un nouveau collaborateur"
description: "La signature fait partie du kit d'arrivée, au même titre que le badge et l'ordinateur. Comment faire pour qu'un nouvel arrivant l'ait dès son premier message, sans tutoriel ni ticket."
keyword: "signature nouveau collaborateur"
cluster: "Gestion & gouvernance"
pubDate: 2026-03-13
summary:
  - "En gestion manuelle, un nouvel arrivant met en moyenne plusieurs jours à disposer d'une signature correcte."
  - "Ses premiers messages sont pourtant ceux qui partent vers des interlocuteurs qui ne le connaissent pas."
  - "Avec une synchronisation d'annuaire, la signature existe dès la création du compte."
  - "La condition est que les attributs d'annuaire soient renseignés au moment de la création, pas après."
related:
  - "depart-collaborateur-signature-mail"
  - "gestion-des-signatures-mail-en-entreprise"
  - "signature-entra-id-azure-ad"
faq:
  - q: "À quel moment un nouvel arrivant doit-il avoir sa signature ?"
    a: "Dès son premier message, donc dès l'ouverture de sa boîte. C'est réalisable si la signature est appliquée par le service à partir des attributs d'annuaire, puisque ceux-ci sont renseignés à la création du compte."
  - q: "Que se passe-t-il si sa fonction n'est pas encore renseignée dans l'annuaire ?"
    a: "La ligne correspondante doit disparaître de la signature plutôt que d'afficher un libellé vide. Le collaborateur dispose alors d'une signature réduite mais correcte, qui se complète automatiquement dès que l'attribut est renseigné."
  - q: "Faut-il inclure la signature dans le kit d'onboarding remis au collaborateur ?"
    a: "Non, c'est précisément ce qu'il faut éviter : tout ce qui repose sur une manipulation du collaborateur produit des écarts. La signature doit être présente sans qu'il ait à la configurer, ni même à savoir qu'elle existe."
  - q: "Comment gérer un collaborateur en période d'essai ou un prestataire ?"
    a: "En les rattachant à une unité organisationnelle dédiée, avec un gabarit qui reflète leur statut si votre organisation le souhaite — par exemple sans mention de fonction pour un prestataire externe."
---

L'arrivée d'un collaborateur est le moment où l'organisation montre son niveau de préparation. Le
badge est prêt, l'ordinateur est configuré, les accès sont ouverts — et la signature, elle, arrive
trois semaines plus tard, après deux relances.

## Le coût réel des premiers messages

Un nouvel arrivant écrit dès son premier jour, et ses premiers messages sont précisément ceux qui
partent vers des gens qui ne le connaissent pas : présentation à un client, prise de contact avec
un fournisseur, réponse à un candidat.

Ce sont donc les messages où la signature compte le plus, et ceux où elle est le plus souvent
absente ou improvisée. Quand elle finit par apparaître, elle a généralement été copiée sur celle
d'un collègue — avec ses éventuelles erreurs, sa version périmée du logo, et parfois le numéro de
téléphone du collègue en question.

## Pourquoi la gestion manuelle échoue systématiquement ici

Le parcours habituel comporte trop d'étapes pour survivre à la réalité d'une semaine d'intégration.

Quelqu'un doit penser à envoyer le modèle. Le nouvel arrivant doit trouver le message parmi les
quarante autres de sa première semaine. Il doit ouvrir les paramètres de son client de messagerie,
coller le HTML, remplacer les informations personnelles, ajuster le logo. Puis recommencer sur son
téléphone, ce que personne ne fait.

Chacune de ces étapes a un taux de déperdition. Multipliées, elles expliquent qu'une part
significative des signatures d'une organisation soit incorrecte en permanence.

## Ce que change une signature appliquée par le service

Avec un add-in et une synchronisation d'annuaire, le parcours disparaît. Le compte est créé, les
attributs sont renseignés, le collaborateur est rattaché à une unité ou à un groupe : la signature
existe.

Il ouvre Outlook ou Gmail, rédige son premier message, et la signature est là — avec son nom, sa
fonction, son service, le logo de l'entreprise et la bannière de campagne en cours. Il n'a rien
configuré, et il ignore probablement qu'un système s'en est chargé. C'est le résultat recherché.

Le mécanisme est décrit dans
[synchroniser les signatures avec l'annuaire](/blog/signature-entra-id-azure-ad) et, côté
déploiement, sur la page [add-in Microsoft 365](/integrations/microsoft-365-outlook).

## La vraie condition : des attributs renseignés à la création

L'automatisme ne vaut que ce que vaut l'annuaire. Si le compte est créé avec seulement un nom et
une adresse, la signature sera réduite à cela.

Le point de contrôle utile se situe donc dans le processus RH de création de compte. Quatre
attributs doivent être renseignés dès l'ouverture, pas « plus tard » :

- l'intitulé de poste, tiré du référentiel interne plutôt qu'improvisé ;
- le service de rattachement ;
- le téléphone professionnel, au format international ;
- le site ou l'entité juridique.

C'est une modification légère du formulaire de création, et elle règle le sujet de façon
définitive. Si votre outil RH alimente déjà l'annuaire automatiquement, vérifiez simplement que ces
quatre champs font partie du mapping.

> **Bon à savoir :** prévoyez explicitement le comportement en cas d'attribut manquant. Une ligne
> vide doit disparaître **entièrement**, libellé compris. Une signature affichant « Fonction : »
> suivi de rien est pire que l'absence de la ligne.

## Les cas particuliers à trancher une fois

**Les prestataires et intérimaires.** Doivent-ils porter la signature de l'entreprise ? Beaucoup
d'organisations préfèrent une variante sans mention de fonction, ou avec une mention explicite du
statut. À trancher avec le juridique, puis à matérialiser par une unité organisationnelle dédiée.

**Les alternants et stagiaires.** Même question, réponse généralement plus simple : la signature
standard, avec l'intitulé réel.

**Les périodes d'essai.** Aucune raison de traiter différemment : le collaborateur représente
l'entreprise dès le premier jour.

**Les boîtes partagées et fonctionnelles.** Elles ne doivent pas recevoir de signature nominative.
Isolez-les dans une unité sans gabarit rattaché, ou donnez-leur un gabarit de service.

## Le pendant du départ

Ce qui vaut à l'arrivée vaut à la sortie, en sens inverse : la signature doit disparaître avec
l'accès, et la boîte doit être traitée proprement. C'est le sujet de
[départ d'un collaborateur](/blog/depart-collaborateur-signature-mail).

Les deux moments relèvent du même mécanisme — le rattachement à l'annuaire — et se règlent donc
ensemble. C'est l'un des arguments les plus solides face à une DSI qui gère aujourd'hui ces
transitions à la main, comme détaillé dans
[le guide de la gestion en entreprise](/blog/gestion-des-signatures-mail-en-entreprise).
