---
slug: "hebergement-donnees-france-saas"
title: "Souveraineté des données : pourquoi choisir un éditeur français"
description: "Ce que recouvre réellement la souveraineté des données pour un outil SaaS : localisation, droit applicable, législations extraterritoriales et questions à poser à un fournisseur."
keyword: "hébergement données france saas"
cluster: "RGPD & sécurité"
pubDate: 2026-04-20
summary:
  - "Localisation des serveurs et droit applicable sont deux questions distinctes qu'on confond souvent."
  - "Un hébergement en Europe ne suffit pas si l'éditeur relève d'une juridiction extraterritoriale."
  - "Les données d'annuaire synchronisées sont des données de vos salariés : leur localisation est un sujet de conformité."
  - "Cinq questions écrites permettent de qualifier n'importe quel fournisseur sur ce point."
related:
  - "signature-mail-rgpd"
  - "securite-outil-signature-mail"
  - "comparatif-outil-signature-mail"
faq:
  - q: "Un hébergement en Europe suffit-il à garantir la souveraineté ?"
    a: "Pas nécessairement. La localisation physique des serveurs et la juridiction dont relève l'éditeur sont deux questions distinctes. Un éditeur soumis à une législation extraterritoriale peut être tenu de fournir des données quelle que soit leur localisation."
  - q: "Quelles données sont concernées dans un outil de signatures ?"
    a: "Les attributs d'annuaire synchronisés — noms, fonctions, téléphones professionnels de vos salariés — ainsi que les gabarits et les visuels de campagne. Le contenu des e-mails ne l'est pas, à condition que l'outil n'y accède pas."
  - q: "Comment vérifier les affirmations d'un fournisseur ?"
    a: "En demandant par écrit le nom de l'hébergeur, la localisation des datacenters, la juridiction de la société éditrice et la liste des sous-traitants ultérieurs. Ces éléments figurent normalement dans l'accord de traitement des données."
  - q: "La souveraineté est-elle une obligation légale ?"
    a: "Non, le RGPD n'impose pas un hébergement en France. Il encadre les transferts hors Union européenne. La souveraineté relève donc d'un choix de réduction du risque, souvent exigé par les DSI et les acheteurs publics."
---

« Données hébergées en France » figure sur la plupart des sites d'éditeurs français, sans qu'on
sache toujours ce que la formule recouvre. Pour une DSI qui instruit un dossier, deux questions
distinctes se posent — et elles sont régulièrement confondues.

## Deux questions différentes

**Où sont physiquement les données ?** C'est la localisation. Elle se vérifie : nom de
l'hébergeur, régions de datacenters, éventuelles réplications.

**Quel droit s'applique à l'entité qui les détient ?** C'est la juridiction. Elle dépend de la
nationalité de la société éditrice et de sa structure capitalistique, pas de l'emplacement de ses
serveurs.

La confusion vient de ce que la première question est facile à poser et la seconde, rarement posée.
Un service dont les serveurs sont en Europe mais dont l'éditeur relève d'une législation
extraterritoriale peut, en théorie, se voir enjoindre de produire des données indépendamment de
leur localisation.

C'est précisément ce raisonnement qui a conduit les DSI et les acheteurs publics à formuler des
exigences de souveraineté plutôt que de simple localisation.

## Ce que le RGPD impose, et ce qu'il n'impose pas

Point important pour cadrer la discussion : **le RGPD n'exige pas un hébergement en France**. Il
encadre les transferts de données hors de l'Union européenne, en les subordonnant à des garanties
appropriées.

Un hébergement en France n'est donc pas une obligation légale mais une **réduction de risque** : en
l'absence de transfert hors UE, la question des garanties ne se pose plus, et le service relève du
seul droit européen. C'est plus simple à documenter et plus solide à défendre.

Le cadre RGPD général applicable aux signatures est traité dans
[signature mail et RGPD](/blog/signature-mail-rgpd).

## Quelles données sont réellement en jeu

Pour un outil de gestion de signatures, le périmètre est circonscrit et mérite d'être posé
explicitement.

**Les attributs d'annuaire synchronisés** : nom, prénom, fonction, service, adresse
professionnelle, téléphone. Ce sont des données personnelles de vos salariés, ce qui suffit à
qualifier le sujet.

**Les gabarits et visuels** : logos, bannières, modèles. Faible sensibilité, mais ce sont des actifs
de marque.

**Les statistiques de clics** : agrégées par campagne et par équipe dans un dispositif bien conçu,
elles ne devraient pas être nominatives.

**Ce qui ne devrait pas y être** : le contenu de vos e-mails. Un outil correctement conçu n'y accède
jamais — voir
[un outil de signature peut-il lire vos e-mails](/blog/securite-outil-signature-mail).

Ce périmètre restreint est en soi un argument : il y a peu à protéger, à condition que le peu en
question soit bien traité.

## Les cinq questions à poser par écrit

Elles suffisent à qualifier n'importe quel fournisseur, et les réponses doivent être écrites.

1. **Quel est le nom de l'hébergeur et où sont les datacenters ?** Une réponse précise, pas
   « en Europe ».
2. **Quelle est la juridiction de la société éditrice ?** Nationalité, siège, et structure
   capitalistique si elle est susceptible d'emporter un rattachement à un autre droit.
3. **Quels sous-traitants ultérieurs interviennent ?** La liste doit figurer dans l'accord de
   traitement. C'est souvent là qu'apparaît un service tiers hors UE.
4. **Y a-t-il réplication ou sauvegarde hors UE ?** Une question rarement posée, et où les réponses
   surprennent parfois.
5. **Que deviennent les données en fin de contrat, et sous quel délai ?** La réversibilité fait
   partie de la souveraineté : des données qu'on ne peut pas récupérer ni faire effacer restent
   captives.

> **Bon à savoir :** demandez ces éléments avant la démonstration commerciale, pas après. Un
> fournisseur qui met trois semaines à répondre à la question 3 vous renseigne déjà.

## Ce que cela change en pratique

Pour beaucoup d'organisations, ces questions ne sont pas théoriques : elles conditionnent la
validation du dossier.

**Dans le secteur public et parapublic**, les exigences de localisation sont fréquemment inscrites
dans les cahiers des charges.

**Dans les secteurs régulés** — santé, banque, assurance, défense — les revues de sécurité
comportent systématiquement ce volet.

**Dans les grands groupes**, la fonction achats et la DSI appliquent des grilles qui incluent ces
critères, même sans obligation réglementaire.

C'est aussi pourquoi ce point figure dans la
[grille de comparaison des outils](/blog/comparatif-outil-signature-mail) : c'est un critère
discriminant, facile à vérifier, et sur lequel les réponses des éditeurs diffèrent réellement.

## La position de Signally

Nos données — annuaire synchronisé, gabarits, visuels de campagne — sont hébergées sur une
infrastructure située sur le territoire français, et nous ne transférons pas de données hors de
l'Union européenne dans le cadre du service. Signally agit en sous-traitant au sens de
l'article 28, avec l'accord de traitement correspondant.

Le détail, y compris ce que nous ne faisons pas, figure sur notre page
[sécurité et RGPD](/securite-rgpd). Les éléments contractuels précis — nom de l'hébergeur,
localisation exacte, certifications, DPA téléchargeable — sont fournis sur demande dans le cadre
d'une revue de sécurité.
