---
slug: "signature-outlook-mobile"
title: "Signature Outlook mobile : pourquoi elle disparaît et comment la rétablir"
description: "« Envoyé depuis mon iPhone » à la place de votre signature d'entreprise : pourquoi Outlook mobile ignore les signatures locales du poste, et comment obtenir une signature cohérente sur téléphone."
keyword: "signature outlook mobile"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-27
summary:
  - "Les signatures créées dans Outlook Windows ou Mac sont locales au poste : elles ne se synchronisent pas vers le téléphone."
  - "Outlook mobile applique par défaut sa propre signature, souvent le texte générique « Envoyé depuis Outlook »."
  - "Une part significative des e-mails professionnels part d'un mobile : la signature y est donc autant exposée qu'ailleurs."
  - "Seule une signature appliquée côté service, via un add-in, reste identique sur poste et sur mobile."
related:
  - "nouveau-outlook-signature"
  - "signature-mail-outlook-entreprise"
  - "signature-gmail-mobile"
faq:
  - q: "Pourquoi ma signature d'entreprise n'apparaît-elle pas sur Outlook mobile ?"
    a: "Parce qu'elle a été créée localement dans Outlook sur poste. Ces signatures sont stockées dans le profil de l'ordinateur et ne sont pas synchronisées vers l'application mobile, qui gère sa propre signature indépendante."
  - q: "Peut-on mettre une signature HTML complète dans Outlook mobile ?"
    a: "L'application mobile n'offre qu'un champ de signature en texte enrichi très limité, sans véritable éditeur HTML. Coller un bloc HTML complet donne un résultat imprévisible. C'est pourquoi la signature doit venir du service, pas de l'application."
  - q: "Comment supprimer « Envoyé depuis Outlook pour iOS » ?"
    a: "Dans l'application : Paramètres → Signature, puis remplacez le texte par défaut. Sur un parc géré, il est préférable d'imposer la signature centralement plutôt que de demander la manipulation à chaque collaborateur."
  - q: "Les bannières de campagne s'affichent-elles sur mobile ?"
    a: "Oui, dès lors que la signature est insérée par l'add-in : la bannière fait partie du bloc inséré à la rédaction, quel que soit le client utilisé."
---

C'est un des écarts les plus visibles et les moins traités : la signature soignée déployée sur les
postes disparaît dès que le collaborateur répond depuis son téléphone. À la place, un « Envoyé
depuis Outlook pour iOS », ou rien du tout. Sur des échanges commerciaux, l'effet est immédiat.

## Pourquoi la signature du poste ne suit pas

La cause est structurelle. Une signature créée dans Outlook pour Windows ou pour Mac est un
artefact **local** : elle vit dans le profil de l'utilisateur sur cet ordinateur, sous forme de
fichiers HTML et RTF accompagnés d'un dossier d'images. Rien dans ce mécanisme ne prévoit de
remonter vers le service.

L'application Outlook mobile, de son côté, gère un champ de signature qui lui est propre, stocké
dans les réglages de l'application, et pré-rempli avec un texte générique. Les deux systèmes
s'ignorent.

Le résultat est qu'une même personne dispose en pratique de deux signatures différentes, dont une
qu'elle n'a jamais choisie. Et comme personne ne relit ses propres messages envoyés depuis le
téléphone, l'écart passe inaperçu pendant des mois.

## L'ampleur réelle du problème

Il est tentant de considérer le mobile comme marginal. Ce n'est plus le cas depuis longtemps : une
part importante des réponses professionnelles — en déplacement, entre deux réunions, en soirée —
part d'un téléphone. Ce sont souvent les échanges les plus réactifs, donc les plus commercialement
sensibles.

Autrement dit, la signature manque précisément là où elle serait la plus utile : sur des réponses
rapides à des interlocuteurs qui ne vous connaissent pas encore.

## Les rustines, et pourquoi elles tiennent mal

**Demander à chacun de configurer sa signature mobile.** C'est la solution la plus répandue et la
moins durable. Le champ mobile n'accepte pas de HTML riche : coller un gabarit produit un résultat
dégradé, sans logo, avec des retours à la ligne aléatoires. Et chaque collaborateur produit sa
variante.

**Envoyer une consigne avec un texte à copier.** Même problème, plus la déperdition habituelle :
au bout de trois mois, la moitié du parc ne l'a pas fait, et les nouveaux arrivants n'ont jamais
reçu la consigne.

**Passer par une règle de transport Exchange.** Elle couvre bien le mobile, puisqu'elle agit côté
serveur — mais elle apporte ses propres limites : l'expéditeur ne voit jamais sa signature,
les fils empilent les blocs, et les messages chiffrés y échappent. Le détail figure dans
[add-in ou règle de transport](/blog/add-in-ou-regle-de-transport-exchange).

## La seule approche qui donne le même résultat partout

Pour que la signature soit identique sur poste et sur mobile, elle ne doit dépendre ni du poste ni
de l'application, mais du service. C'est le principe de l'add-in : il s'exécute dans Outlook — y
compris Outlook mobile sur iOS et Android — et insère le bloc à la rédaction, avec les données de
l'annuaire et la bannière de campagne en cours.

C'est le même mécanisme qui règle le déploiement sur poste, décrit dans
[comment déployer une signature Outlook](/blog/signature-mail-outlook-entreprise) : le mobile n'est
alors plus un cas à part, mais un client de plus.

Le collaborateur n'a rien à configurer, sur aucun de ses appareils. S'il change de téléphone, la
signature suit. S'il change de fonction dans l'annuaire, elle se met à jour partout en même temps.
Les environnements couverts sont listés sur la page
[add-in Microsoft 365](/integrations/microsoft-365-outlook).

> **Bon à savoir :** pensez à retirer l'ancienne signature locale de l'application mobile lors du
> déploiement. Sinon les deux se cumulent, et le message se termine par la signature d'entreprise
> suivie de « Envoyé depuis Outlook pour iOS ».

## Concevoir un gabarit qui tienne sur un écran de téléphone

Une signature pensée pour un écran de 1 400 px de large passe mal sur 390 px. Trois précautions
suffisent à couvrir la majorité des cas.

**Limiter la largeur.** Un bloc de 500 à 600 px maximum, qui se réduit proprement. Au-delà, le
client mobile impose un défilement horizontal ou réduit l'ensemble jusqu'à l'illisible.

**Éviter les mises en page à plusieurs colonnes serrées.** Un logo à gauche et un pavé de
coordonnées à droite fonctionne ; trois colonnes ne fonctionnent pas.

**Tester réellement.** La prévisualisation multi-clients de
[l'éditeur Signally](/fonctionnalites) inclut le rendu mobile, mais rien ne remplace un envoi
réel sur votre propre téléphone avant de généraliser.
