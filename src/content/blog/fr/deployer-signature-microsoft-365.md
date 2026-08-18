---
slug: "deployer-signature-microsoft-365"
title: "Déployer une signature depuis le centre d'administration Microsoft 365"
description: "Le parcours exact dans le centre d'administration Microsoft 365 : consentement administrateur, déploiement de l'add-in depuis Applications intégrées, groupe pilote, puis généralisation à l'organisation."
keyword: "déployer signature microsoft 365"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-24
summary:
  - "Le déploiement se fait depuis « Applications intégrées » du centre d'administration Microsoft 365."
  - "Un consentement administrateur en lecture seule sur l'annuaire suffit : aucun accès au contenu des messages n'est demandé."
  - "Le déploiement peut être limité à un groupe pilote, puis étendu à toute l'organisation."
  - "La propagation de l'add-in sur les postes prend de quelques minutes à quelques heures selon les clients."
related:
  - "signature-mail-outlook-entreprise"
  - "signature-entra-id-azure-ad"
  - "add-in-ou-regle-de-transport-exchange"
faq:
  - q: "Quel rôle faut-il avoir pour déployer l'add-in ?"
    a: "Le rôle d'administrateur général, ou un rôle disposant des permissions de gestion des applications intégrées. Le consentement au nom de l'organisation exige un administrateur général."
  - q: "Combien de temps l'add-in met-il à apparaître chez les utilisateurs ?"
    a: "Comptez quelques minutes sur Outlook Web et jusqu'à quelques heures sur les clients lourds, le temps que le manifeste soit récupéré. Un redémarrage d'Outlook accélère la prise en compte."
  - q: "Peut-on retirer l'add-in après déploiement ?"
    a: "Oui. La suppression se fait depuis la même section « Applications intégrées ». Les signatures cessent alors d'être insérées, sans effet sur les messages déjà envoyés."
  - q: "Le déploiement modifie-t-il la configuration de mon routage sortant ?"
    a: "Non. Un add-in n'intervient pas dans le transport : aucun connecteur, aucune règle de flux, aucun reroutage. Vos messages continuent de partir exactement comme avant."
---

Le déploiement d'une signature d'entreprise sur Microsoft 365 se joue en une poignée d'écrans du
centre d'administration. La partie technique est courte — une quinzaine de minutes — mais elle
suppose d'avoir tranché quelques questions en amont. Voici le parcours complet, dans l'ordre.

## Étape 1 — Connecter le tenant

Avant de déployer quoi que ce soit, l'application doit être autorisée sur votre tenant. La
connexion s'effectue depuis Signally, qui redirige vers l'écran de consentement Microsoft Entra ID.

Un administrateur général accorde le consentement **au nom de l'organisation**. Les permissions
demandées portent uniquement sur la lecture des attributs d'annuaire nécessaires à la signature :
nom, prénom, fonction, service, téléphone professionnel, rattachement organisationnel. Aucune
permission de lecture du courrier n'est requise, et aucune n'est demandée.

C'est le point que votre RSSI examinera en premier. L'écran de consentement liste explicitement
les autorisations : il constitue la preuve la plus directe du périmètre réel. Le détail de notre
approche figure sur la page [sécurité et RGPD](/securite-rgpd).

## Étape 2 — Déployer l'add-in

Dans le centre d'administration Microsoft 365, rendez-vous dans **Paramètres → Applications
intégrées**, puis « Obtenir des applications ». Recherchez l'add-in, sélectionnez-le et lancez le
déploiement.

L'écran suivant vous demande la portée. Trois options :

1. **Utilisateurs spécifiques ou groupes** — le choix recommandé pour un premier déploiement.
2. **Toute l'organisation** — une fois la validation faite.
3. **Moi uniquement** — utile pour un test individuel avant même le pilote.

Choisissez un groupe Microsoft 365 existant, ou créez-en un pour l'occasion avec une dizaine de
personnes représentatives : quelqu'un sur Outlook Windows, quelqu'un sur Mac, quelqu'un qui écrit
surtout depuis son téléphone.

> **Bon à savoir :** la propagation n'est pas instantanée. Sur Outlook Web, l'add-in apparaît en
> quelques minutes. Sur les clients lourds, le manifeste peut mettre plusieurs heures à être
> récupéré ; un redémarrage d'Outlook accélère les choses. Prévenez votre groupe pilote pour
> éviter une série de signalements prématurés.

## Étape 3 — Attribuer les gabarits aux groupes

Le déploiement de l'add-in rend le mécanisme disponible ; il ne dit pas encore quelle signature
chacun doit recevoir. Cette association se fait côté Signally, en rattachant chaque groupe
Microsoft 365 — ou chaque unité de votre annuaire — au gabarit correspondant.

C'est le moment où le découpage compte. Une organisation simple s'en tire avec un gabarit unique.
Dès qu'il y a plusieurs marques, plusieurs pays, ou des équipes commerciales qui portent des
bannières différentes du support, prévoyez une variante par groupe. Le principe est décrit sur la
page [éditeur de signatures](/fonctionnalites).

Un collaborateur qui appartient à plusieurs groupes reçoit le gabarit du groupe le plus
spécifique : pensez à vérifier l'ordre de priorité si vos groupes se recoupent.

## Étape 4 — Valider avec le groupe pilote

Laissez tourner une semaine. Demandez au pilote de vérifier trois choses précises, plutôt qu'un
vague « est-ce que ça marche » :

- la signature apparaît bien à la rédaction d'un **nouveau** message et d'une **réponse** ;
- les champs personnels sont corrects — c'est là qu'on découvre les données d'annuaire mal
  renseignées ;
- le rendu est propre chez un destinataire externe, notamment sur Gmail.

Ce dernier point est le plus utile : envoyez un message à une adresse personnelle et regardez ce
qui arrive vraiment.

## Étape 5 — Généraliser

Repassez dans « Applications intégrées », modifiez la portée du déploiement et basculez sur
l'organisation entière. Aucune nouvelle validation n'est demandée aux utilisateurs.

À partir de là, le système se maintient seul. Un nouvel arrivant qui apparaît dans l'annuaire et
appartient à un groupe rattaché reçoit sa signature sans intervention — ni de sa part, ni de
celle de l'équipe informatique. C'est le mécanisme décrit dans l'article sur
[la synchronisation avec Entra ID](/blog/signature-entra-id-azure-ad).

## Le point de comparaison à garder en tête

Ce parcours ne touche à aucun moment à votre configuration de transport. Pas de connecteur, pas de
règle de flux, pas de modification de l'acheminement sortant. C'est la différence de fond avec
l'approche par règle de transport Exchange, dont les implications sont analysées dans
[add-in ou règle de transport](/blog/add-in-ou-regle-de-transport-exchange).
