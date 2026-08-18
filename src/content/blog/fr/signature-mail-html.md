---
slug: "signature-mail-html"
title: "Signature mail en HTML : les règles de compatibilité à respecter"
description: "Le HTML d'une signature n'est pas du HTML de site web. Tableaux, styles en ligne, dimensions en attributs : les règles qui font qu'une signature s'affiche pareil sur Outlook, Gmail et mobile."
keyword: "signature mail html"
cluster: "Créer sa signature"
pubDate: 2026-02-26
summary:
  - "Outlook pour Windows affiche le HTML avec le moteur de Microsoft Word : une grande partie du CSS moderne y est ignorée."
  - "La mise en page doit reposer sur des tableaux, pas sur flexbox ni grid."
  - "Les styles doivent être en ligne : les feuilles de style et les balises <style> sont souvent supprimées."
  - "Les dimensions d'image doivent figurer en attributs HTML, pas seulement en CSS."
related:
  - "logo-signature-outlook"
  - "creer-une-signature-mail"
  - "taille-logo-signature-mail"
faq:
  - q: "Pourquoi ne peut-on pas utiliser flexbox dans une signature mail ?"
    a: "Le moteur de rendu d'Outlook pour Windows, hérité de Microsoft Word, ne prend pas en charge flexbox ni grid. Les éléments s'empilent alors verticalement, ce qui détruit toute mise en page en colonnes. Les tableaux restent le seul mécanisme de positionnement fiable."
  - q: "Les balises <style> fonctionnent-elles dans une signature ?"
    a: "Pas de façon fiable. Beaucoup de clients suppriment le bloc <style> lors du nettoyage du HTML, et une signature collée dans un champ de configuration perd généralement tout ce qui n'est pas en ligne. Les styles doivent être portés par des attributs style sur chaque élément."
  - q: "Peut-on utiliser une police personnalisée ?"
    a: "Non, pas de façon fiable : les polices web ne se chargent pas dans la plupart des clients de messagerie. Utilisez une police système et déclarez une pile de substitution."
  - q: "Faut-il écrire ce HTML à la main ?"
    a: "Ce n'est pas nécessaire, et c'est même déconseillé : les erreurs classiques (tableaux mal fermés, styles oubliés, dimensions manquantes) sont difficiles à repérer. Un éditeur visuel qui génère un HTML déjà conforme évite ce travail."
---

Le HTML d'un e-mail n'obéit pas aux mêmes règles que celui d'un site web. Ce qui fonctionne dans un
navigateur moderne peut se disloquer dans Outlook, et un code parfaitement valide au sens du W3C
peut donner un résultat inutilisable. Voici les contraintes réelles, et leurs raisons.

## Pourquoi ces contraintes existent

Les clients de messagerie n'utilisent pas tous un moteur de rendu web. Outlook pour Windows
— dans sa version classique, encore très présente en entreprise — affiche le HTML avec le moteur
de **Microsoft Word**. Word n'a jamais été conçu pour cela, et sa prise en charge du CSS s'arrête à
un sous-ensemble limité.

Les webmails, de leur côté, nettoient le HTML entrant pour des raisons de sécurité : ils
suppriment les scripts, souvent les balises `<style>`, parfois des attributs entiers.

Une signature doit donc s'afficher correctement sur le dénominateur commun le plus bas. Le nouveau
Outlook améliore la situation — voir
[ce qui change en 2026](/blog/nouveau-outlook-signature) — mais tant que l'ancien client
circule dans les parcs, la contrainte demeure.

## Règle 1 — Les tableaux pour la mise en page

`flexbox` et `grid` ne sont pas pris en charge par le moteur Word. Les éléments s'empilent alors
verticalement et toute mise en page en colonnes disparaît.

Le positionnement doit donc reposer sur des tableaux :

```
<table cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding-right:16px;vertical-align:top">
      <img src="..." width="120" height="40" alt="Entreprise" />
    </td>
    <td style="vertical-align:top">
      <div style="font-weight:700">Nom Prénom</div>
    </td>
  </tr>
</table>
```

Trois détails comptent. `cellpadding="0" cellspacing="0" border="0"` neutralise les espacements par
défaut, variables d'un client à l'autre. `role="presentation"` indique aux lecteurs d'écran que le
tableau sert à la mise en page et non à des données. Et `vertical-align` doit être explicite : les
valeurs par défaut diffèrent.

## Règle 2 — Tous les styles en ligne

Une feuille de style externe est inaccessible. Une balise `<style>` est fréquemment supprimée. Et
lorsqu'on colle une signature dans le champ de configuration d'un client, tout ce qui n'est pas
porté par un attribut `style` disparaît.

Chaque propriété doit donc être déclarée sur l'élément concerné. C'est verbeux, redondant, et
sans alternative.

## Règle 3 — Les dimensions d'image en attributs

Outlook ignore fréquemment `width` et `height` déclarés en CSS. L'image s'affiche alors à sa taille
native : un fichier de 1 200 px occupe toute la largeur du message.

Portez la dimension sur les **attributs HTML**, en doublant en CSS pour les clients modernes :

```
<img src="https://cdn.exemple.fr/logo.png"
     width="180" height="48" alt="Entreprise"
     style="display:block;border:0;width:180px;height:48px" />
```

`display:block` supprime l'espace parasite sous l'image ; `border:0` retire le liseré bleu quand
elle est cliquable. Le détail figure dans
[insérer un logo sans qu'il se casse](/blog/logo-signature-outlook).

## Règle 4 — Des polices système, avec pile de substitution

Les polices web ne se chargent pas de façon fiable. Déclarez une pile réaliste :

```
font-family: Arial, Helvetica, sans-serif;
```

Choisir soi-même le substitut vaut mieux que le laisser choisir par le client.

## Règle 5 — Des unités absolues

Les unités relatives — `rem`, `em`, pourcentages sur les tailles de texte — se comportent
irrégulièrement. Utilisez des pixels pour les tailles de police, les marges internes et les
dimensions d'image. Les pourcentages restent acceptables sur la largeur des tableaux.

## Règle 6 — Des liens explicites

Un lien doit porter son protocole complet, y compris pour le téléphone :

```
<a href="tel:+33612345678" style="color:#1A1A1A;text-decoration:none">+33 6 12 34 56 78</a>
```

Sans `style` explicite, certains clients appliquent leur propre bleu souligné, qui jurera avec
votre charte.

## Règle 7 — Un contenu accessible sans les images

Les images distantes sont bloquées par défaut pour les expéditeurs inconnus. Si votre signature
repose sur une image, le destinataire voit un rectangle vide à la place de vos coordonnées.

Le nom, la fonction, le téléphone et les mentions légales doivent rester du texte. Et chaque image
porte un `alt` utile — le nom de l'entreprise pour le logo, le nom du réseau pour une icône.

> **Bon à savoir :** testez toujours avec les images désactivées. C'est le test le plus rapide pour
> savoir si votre signature reste exploitable dans le pire cas.

## Faut-il écrire ce HTML à la main ?

C'est possible, et c'est un mauvais emploi du temps. Les erreurs classiques — tableau non fermé,
`cellspacing` oublié, dimension absente, style perdu lors d'un copier-coller — sont difficiles à
repérer à la lecture et n'apparaissent que sur certains clients.

Un éditeur visuel qui génère directement un HTML conforme à ces règles, et qui prévisualise le
rendu sur Outlook Windows, Outlook Web, Gmail, Apple Mail et mobile, évite l'essentiel du
problème. C'est ce que fait [l'éditeur Signally](/fonctionnalites), dont l'accès est gratuit.

Le gain n'est pas seulement de temps : il est de fiabilité. Un gabarit centralisé garantit que les
règles ci-dessus sont respectées **par toutes les signatures de l'organisation**, y compris celles
des personnes qui n'ont jamais entendu parler de `cellpadding`.
