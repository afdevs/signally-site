---
title: "Insérer un logo dans une signature Outlook sans qu'il se casse"
description: "Logo flou, image remplacée par une croix rouge, redimensionnement sauvage : les quatre causes réelles d'un logo cassé dans une signature Outlook, et la méthode pour qu'il s'affiche partout."
keyword: "logo signature outlook"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-20
summary:
  - "Un logo collé depuis Word ou Paint est intégré en pièce jointe locale : il disparaît chez le destinataire."
  - "Outlook ignore les attributs CSS de dimensionnement : la taille doit être portée par les attributs HTML width et height."
  - "Un logo doit être exporté au double de sa taille d'affichage pour rester net sur écran haute densité."
  - "L'image doit être hébergée sur une URL publique et stable, en HTTPS."
related:
  - "taille-logo-signature-mail"
  - "signature-mail-html"
  - "signature-mail-outlook-entreprise"
faq:
  - q: "Pourquoi mon logo apparaît-il comme une croix rouge chez le destinataire ?"
    a: "L'image pointe vers une ressource inaccessible : un chemin de fichier local, un lecteur réseau interne, ou une URL protégée par authentification. Le destinataire, hors de votre réseau, ne peut pas la charger. Hébergez le logo sur une URL publique en HTTPS."
  - q: "Faut-il intégrer le logo en pièce jointe ou le lier ?"
    a: "Le liage vers une URL publique est préférable dans une signature d'entreprise : le fichier reste léger, se met à jour partout d'un coup, et n'apparaît pas comme une pièce jointe parasite dans la boîte du destinataire."
  - q: "Pourquoi mon logo est-il flou sur un écran Retina ?"
    a: "Il est affiché à sa taille native. Exportez l'image au double des dimensions d'affichage — 360 px de large pour un logo affiché à 180 px — puis contraignez la taille avec les attributs width et height."
  - q: "Les images sont-elles bloquées par défaut dans Outlook ?"
    a: "Outlook peut bloquer le chargement des images distantes pour un expéditeur inconnu. C'est pourquoi une signature ne doit jamais reposer uniquement sur une image : le nom, la fonction et les coordonnées doivent rester en texte."
---

Le logo est l'élément d'une signature qui casse le plus souvent, et pour des raisons presque
toujours identiques. Sur Outlook en particulier, les écarts entre les versions Windows, Mac, Web
et mobile amplifient chaque approximation du fichier ou du code. Voici les quatre causes réelles,
et ce qu'il faut faire à la place.

## Cause n°1 : une image collée depuis un fichier local

C'est la plus fréquente. Un collaborateur ouvre son logo dans Word ou dans l'explorateur, le copie,
le colle dans la fenêtre de signature. Outlook l'intègre alors en pièce jointe locale, avec une
référence de type `cid:` ou un chemin `file://`.

Chez l'expéditeur tout paraît normal. Chez le destinataire, l'image est absente — remplacée par un
cadre vide ou une croix rouge — parce que la ressource référencée n'existe que sur le poste
d'origine. Le même problème se produit avec un logo hébergé sur un lecteur réseau interne ou une
intranet protégée par authentification.

La règle est simple : **le logo doit vivre sur une URL publique, en HTTPS, accessible sans
connexion**. Un CDN, un bucket de stockage, ou l'hébergement fourni par votre outil de signatures.

## Cause n°2 : la taille définie en CSS plutôt qu'en attributs HTML

Outlook pour Windows utilise le moteur de rendu de Microsoft Word, qui ignore une bonne partie du
CSS — dont, très souvent, `width` et `height` déclarés dans un attribut `style`. L'image s'affiche
alors à sa taille native : un fichier de 1200 px de large occupe toute la largeur du message.

La parade consiste à porter la dimension sur les **attributs HTML** de la balise, pas seulement en
CSS :

```
<img src="https://cdn.exemple.fr/logo.png"
     width="180" height="48"
     alt="Nom de l'entreprise"
     style="display:block;border:0;width:180px;height:48px" />
```

Les deux sont utiles : les attributs pour Outlook, le CSS pour les clients modernes. Le
`display:block` évite l'espace parasite sous l'image dans certains clients, et `border:0` supprime
le liseré bleu quand le logo est cliquable.

## Cause n°3 : un fichier exporté à la taille d'affichage

Sur un écran haute densité — la quasi-totalité des portables récents et tous les mobiles — une
image affichée à sa taille native paraît floue. Le logo doit être exporté au **double** de sa
taille d'affichage, puis contraint par les attributs.

Pour un logo affiché à 180 × 48 px, exportez un fichier de 360 × 96 px. Le poids reste modeste si
le format est bien choisi : PNG-24 avec transparence pour un logo à aplats, ou SVG converti en PNG
si votre outil ne gère pas le vectoriel. Les questions de poids et de format sont détaillées dans
l'article sur [la taille du logo dans une signature](/blog/taille-logo-signature-mail).

## Cause n°4 : une signature entièrement en image

Certaines organisations exportent toute la signature — nom, fonction, coordonnées, logo — en une
seule image. C'est une mauvaise idée pour trois raisons cumulatives.

D'abord, Outlook bloque par défaut le chargement des images distantes pour les expéditeurs
inconnus : le destinataire voit un rectangle vide à la place de vos coordonnées. Ensuite, aucun
texte n'est sélectionnable ni copiable : impossible de récupérer un numéro de téléphone. Enfin,
les lecteurs d'écran n'ont rien à lire, hors l'attribut `alt`.

Le nom, la fonction, le téléphone et l'adresse doivent rester du texte HTML. Seuls le logo, les
icônes sociales et la bannière de campagne sont des images. Les contraintes générales du HTML
d'e-mail, dont dépend ce comportement, sont détaillées dans
[signature mail en HTML](/blog/signature-mail-html).

> **Bon à savoir :** renseignez toujours un attribut `alt` sur le logo, avec le nom de
> l'entreprise. Il s'affiche quand l'image est bloquée et il est lu par les technologies
> d'assistance.

## La méthode qui tient à l'échelle

Sur un poste isolé, appliquer les règles ci-dessus suffit. Sur un parc de plusieurs dizaines de
boîtes, le problème n'est plus technique mais organisationnel : chaque collaborateur qui recolle
son logo à la main réintroduit les quatre erreurs.

C'est précisément ce que règle un gabarit centralisé. Le logo est déposé une fois, hébergé sur une
URL stable, dimensionné correctement dans le modèle, et verrouillé : le collaborateur ne peut ni
le remplacer, ni le redimensionner. Quand la charte évolue, vous remplacez le fichier et toutes
les signatures suivent. C'est le rôle de
[l'éditeur de signatures Signally](/fonctionnalites), qui génère un HTML déjà conforme aux
contraintes d'Outlook.

Avant tout déploiement, testez le rendu sur au moins Outlook Windows, Outlook Web et Outlook
mobile : ce sont les trois environnements où les écarts apparaissent en premier.
