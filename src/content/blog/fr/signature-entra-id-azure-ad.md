---
slug: "signature-entra-id-azure-ad"
title: "Synchroniser les signatures avec l'annuaire Entra ID"
description: "Comment les champs d'une signature se remplissent depuis Microsoft Entra ID : attributs utilisés, qualité des données, gestion des champs vides et propagation d'un changement de fonction."
keyword: "signature entra id azure ad"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-29
summary:
  - "Les champs dynamiques d'une signature se remplissent depuis les attributs Entra ID : displayName, jobTitle, department, mobilePhone, officeLocation."
  - "La synchronisation se fait en lecture seule : l'outil ne modifie jamais votre annuaire."
  - "Un attribut vide doit faire disparaître sa ligne, pas laisser un libellé orphelin dans la signature."
  - "La qualité de l'annuaire devient visible : un déploiement de signatures révèle systématiquement des données manquantes."
related:
  - "deployer-signature-microsoft-365"
  - "signature-nouveau-collaborateur"
  - "signature-mail-outlook-entreprise"
faq:
  - q: "Quels attributs Entra ID sont utilisés dans une signature ?"
    a: "Les plus courants sont displayName (nom affiché), jobTitle (fonction), department (service), mail, mobilePhone et businessPhones, officeLocation et companyName. Le choix des champs réellement affichés vous appartient : seuls ceux-là sont synchronisés."
  - q: "La synchronisation modifie-t-elle mon annuaire ?"
    a: "Non. L'accès est en lecture seule. Aucune écriture n'est effectuée dans Entra ID, et le consentement demandé ne comporte pas de permission d'écriture."
  - q: "Que se passe-t-il si un attribut est vide ?"
    a: "La ligne correspondante doit disparaître entièrement de la signature, libellé compris. Une signature bien construite ne laisse jamais apparaître « Mobile : » suivi de rien."
  - q: "Combien de temps met un changement de fonction à se refléter ?"
    a: "La signature est reconstruite à partir des données synchronisées : une fois l'annuaire à jour et la synchronisation passée, le changement apparaît sur les messages suivants, sans action de l'utilisateur."
---

Une signature d'entreprise n'a d'intérêt à l'échelle que si elle se remplit toute seule. C'est le
rôle des champs dynamiques : le gabarit contient des emplacements — nom, fonction, téléphone — que
le système remplace par les valeurs de l'annuaire au moment de l'insertion. Sur un tenant
Microsoft, l'annuaire en question est Entra ID.

## Quels attributs sont utilisés

Une signature type mobilise une poignée d'attributs standards :

| Champ de la signature | Attribut Entra ID |
| --- | --- |
| Nom affiché | `displayName` |
| Fonction | `jobTitle` |
| Service | `department` |
| Adresse e-mail | `mail` |
| Téléphone mobile | `mobilePhone` |
| Téléphone fixe | `businessPhones` |
| Bureau / site | `officeLocation` |
| Entité juridique | `companyName` |

Seuls les attributs que vous décidez d'afficher sont synchronisés. C'est l'application directe du
principe de minimisation : rien ne justifie de récupérer des champs qui n'apparaîtront jamais dans
une signature. Le périmètre exact est décrit sur notre page
[sécurité et RGPD](/securite-rgpd).

L'accès est en **lecture seule**. L'écran de consentement Microsoft le montre explicitement au
moment de la connexion du tenant, décrite dans
[le guide de déploiement](/blog/deployer-signature-microsoft-365).

## Ce qu'un déploiement révèle de votre annuaire

Voici ce que personne n'anticipe : mettre les données d'annuaire dans une signature les rend
publiques. Elles partent chez vos clients, sur chaque message. Et l'état réel de l'annuaire
apparaît d'un coup.

Les cas classiques se ressemblent d'une organisation à l'autre. Des `jobTitle` vides pour la
moitié d'un service. Des intitulés incohérents — « Resp. Commercial », « Responsable commercial »,
« Sales Manager » — pour le même poste. Des numéros au format hétéroclite : `0612345678`,
`06 12 34 56 78`, `+33612345678`. Des `department` renseignés en code interne plutôt qu'en libellé
lisible.

C'est une bonne nouvelle déguisée : le déploiement d'une signature est le meilleur audit d'annuaire
gratuit qui soit. Prévoyez simplement une passe de nettoyage avant la généralisation, pas après.

> **Bon à savoir :** normalisez les numéros de téléphone au format international (`+33 6 12 34 56
> 78`) avant le déploiement. C'est le seul format qui reste cliquable de façon fiable depuis un
> mobile étranger.

## Gérer proprement les champs vides

Le piège le plus courant du gabarit débutant est le libellé orphelin. Le modèle contient
« Mobile : {mobilePhone} », l'attribut est vide, et la signature affiche « Mobile : » suivi du
néant. Multiplié par les collaborateurs sans mobile professionnel, l'effet est déplorable.

Un gabarit correct traite la **ligne entière** comme conditionnelle : si l'attribut est vide, le
libellé, la valeur et le séparateur disparaissent ensemble, et le bloc se resserre. C'est un
comportement à vérifier explicitement lors de la recette, en prévisualisant un profil volontairement
incomplet.

Le même raisonnement vaut pour les blocs entiers : une ligne « Bureau » n'a pas lieu d'exister pour
une équipe entièrement à distance.

## La propagation d'un changement

Le bénéfice réel de la synchronisation se voit lors d'une mobilité interne. Un collaborateur change
de fonction : le service RH met à jour `jobTitle` dans l'annuaire — geste qu'il fait de toute façon
— et la signature suit sur les messages suivants. Aucun ticket, aucune consigne, aucune relance.

À l'inverse, sans synchronisation, la mise à jour dépend du collaborateur lui-même. En pratique,
elle n'a pas lieu : on trouve couramment des signatures qui annoncent une fonction abandonnée
depuis deux ans.

Le même mécanisme couvre l'arrivée d'un nouveau collaborateur, traitée dans
[l'article sur l'onboarding](/blog/signature-nouveau-collaborateur).

## Champs d'annuaire et champs de gabarit

Tout ne vient pas de l'annuaire, et c'est voulu. Trois familles cohabitent dans un gabarit :

**Les champs dynamiques**, remplis depuis Entra ID, propres à chaque collaborateur.

**Les éléments fixes du gabarit** — logo, mentions légales, disclaimer, charte graphique — communs
à toute l'organisation ou à une équipe, et verrouillés par l'administrateur.

**Les bannières de campagne**, pilotées par un calendrier et pouvant cibler certaines équipes,
comme décrit sur la page [campagnes](/campagnes).

Cette séparation est ce qui permet de laisser un collaborateur ajuster son numéro direct sans
qu'il puisse toucher au logo ni aux mentions légales. Le paramétrage se fait champ par champ dans
[l'éditeur](/fonctionnalites).
