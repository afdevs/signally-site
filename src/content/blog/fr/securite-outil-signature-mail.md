---
slug: "securite-outil-signature-mail"
title: "Un outil de signature peut-il lire vos e-mails ? La réponse technique"
description: "Selon son architecture, un outil de signature accède ou non au contenu de vos messages. La différence entre add-in côté client, règle de transport et relais SMTP, expliquée pour une revue de sécurité."
keyword: "sécurité outil signature mail"
cluster: "RGPD & sécurité"
pubDate: 2026-04-22
summary:
  - "Trois architectures existent, et elles n'ont pas le même périmètre d'accès."
  - "Un add-in côté client écrit dans le message en cours de rédaction, sans le lire ni le stocker."
  - "Une règle de transport laisse passer le message par le serveur de messagerie, sans transit chez l'éditeur."
  - "Un relais SMTP fait transiter vos e-mails par un tiers : c'est le cas à examiner de près."
related:
  - "signature-mail-rgpd"
  - "hebergement-donnees-france-saas"
  - "add-in-ou-regle-de-transport-exchange"
faq:
  - q: "Un add-in peut-il lire le contenu de mes e-mails ?"
    a: "Les autorisations demandées par un add-in sont déclarées dans son manifeste et affichées lors du consentement administrateur. Un add-in de signature demande l'écriture dans le message en cours de rédaction et la lecture des attributs d'annuaire, pas la lecture de la boîte."
  - q: "Comment vérifier ce qu'un add-in demande réellement ?"
    a: "L'écran de consentement de votre fournisseur d'identité liste les autorisations demandées avant validation. C'est la preuve la plus directe du périmètre : elle vient de Microsoft ou de Google, pas de l'éditeur."
  - q: "Mes e-mails transitent-ils par les serveurs de l'éditeur ?"
    a: "Avec un add-in, non : le message part de votre tenant vers son destinataire sans passer par un tiers. Avec un relais SMTP, oui, et c'est le point à examiner en priorité lors d'une revue de sécurité."
  - q: "Que se passe-t-il si l'outil est compromis ?"
    a: "Le périmètre du risque est celui des données détenues. Pour un add-in, cela couvre l'annuaire synchronisé et les gabarits, pas le contenu des messages, qui n'a jamais été accessible."
---

C'est la première question d'une revue de sécurité, et elle est légitime : un outil qui intervient
sur vos e-mails a-t-il accès à leur contenu ? La réponse dépend entièrement de l'architecture
retenue, et les trois architectures du marché n'ont pas le même périmètre.

## Architecture 1 — L'add-in côté client

L'add-in s'exécute dans le client de messagerie, au moment où l'utilisateur rédige son message. Il
insère un bloc HTML dans le corps du message en cours.

Le périmètre d'accès correspond aux autorisations déclarées dans le manifeste de l'add-in :
l'écriture dans l'élément en cours de composition, et la lecture des attributs d'annuaire
nécessaires au remplissage des champs.

Deux propriétés en découlent, et ce sont celles qui comptent en revue de sécurité :

**Le message ne transite pas par l'éditeur.** L'insertion se produit sur le poste, dans la fenêtre
de rédaction. Le message part ensuite de votre tenant Microsoft ou Google vers son destinataire, par
votre routage habituel, sans détour.

**La boîte n'est pas lue.** L'add-in intervient sur un message en cours de composition, pas sur la
boîte de réception, l'historique ou les archives.

C'est l'architecture de Signally, décrite sur la page
[add-in Microsoft 365](/integrations/microsoft-365-outlook).

## Architecture 2 — La règle de transport

La signature est ajoutée par votre propre serveur de messagerie — Exchange Online, ou le service de
conformité de Google Workspace — lors de l'acheminement.

Ici, l'éditeur n'intervient pas du tout dans le traitement du message : il fournit le contenu du
pied de page, votre serveur l'applique. Aucun accès, aucun transit.

En contrepartie, cette architecture a des limites fonctionnelles importantes — l'expéditeur ne voit
jamais sa signature, les fils empilent les blocs, les messages chiffrés y échappent — détaillées
dans [add-in ou règle de transport](/blog/add-in-ou-regle-de-transport-exchange).

## Architecture 3 — Le relais SMTP

C'est celle qui appelle un examen attentif. Le message quitte votre serveur, transite par
l'infrastructure de l'éditeur qui y ajoute la signature, puis repart vers son destinataire.

Cette architecture implique par construction que **le contenu complet de vos messages passe par un
tiers** — corps, pièces jointes, destinataires. Elle implique aussi une modification de votre
routage sortant, avec les conséquences associées sur la délivrabilité et sur votre configuration
SPF et DKIM.

Elle n'est pas illégitime en soi, et certains fournisseurs la mettent en œuvre sérieusement. Mais
elle change la nature de la question posée à votre RSSI : il ne s'agit plus d'autoriser un
composant, il s'agit d'insérer un tiers dans votre chaîne d'acheminement.

## Comment vérifier, plutôt que croire

Trois vérifications concrètes, qui ne reposent pas sur la parole de l'éditeur.

**L'écran de consentement.** Au moment de connecter le tenant, votre fournisseur d'identité —
Microsoft Entra ID ou Google — affiche la liste exacte des autorisations demandées. Cette liste
vient de Microsoft ou de Google, pas de l'éditeur. C'est la preuve la plus directe du périmètre.

**La documentation d'API.** Les autorisations demandées correspondent à des scopes documentés
publiquement par Microsoft et Google. Vous pouvez vérifier ce que chacun recouvre.

**La configuration de routage.** Si l'installation demande de modifier vos connecteurs, vos
enregistrements MX ou votre SPF, vous êtes en architecture de relais. Si elle ne touche à rien du
routage, vous ne l'êtes pas.

> **Bon à savoir :** faites capturer l'écran de consentement lors de l'installation et joignez-le
> au dossier de sécurité. C'est une pièce probante, datée, qui vaut mieux qu'un engagement
> commercial.

## Le périmètre du risque résiduel

Aucun outil n'a un risque nul, et il est plus honnête de délimiter le risque que de le nier.

Avec un add-in, ce qu'un attaquant obtiendrait en cas de compromission de l'éditeur, ce sont les
**données détenues** : l'annuaire synchronisé — noms, fonctions, téléphones professionnels — et les
gabarits. Pas le contenu des messages, qui n'a jamais été accessible.

C'est une différence de nature, pas de degré. Un annuaire professionnel qui fuite est un incident
sérieux ; l'historique des e-mails d'une organisation en est un autre.

La localisation et la juridiction applicables à ces données détenues sont l'autre volet du dossier,
traité dans [souveraineté des données](/blog/hebergement-donnees-france-saas).

## Le résumé à transmettre à votre RSSI

Quatre lignes suffisent pour l'architecture add-in :

- La signature est insérée à la rédaction, côté client, dans le message en cours.
- Aucun contenu d'e-mail n'est lu, analysé, stocké, ni ne transite par l'éditeur.
- Les seules données synchronisées sont les attributs d'annuaire affichés dans la signature.
- Aucune modification du routage sortant : ni connecteur, ni relais, ni changement de SPF.

Ces éléments et le détail de ce que Signally ne fait pas figurent sur notre page
[sécurité et RGPD](/securite-rgpd), conçue pour être transmise telle quelle à une DSI.
