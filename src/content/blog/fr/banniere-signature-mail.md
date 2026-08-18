---
slug: "banniere-signature-mail"
title: "Bannière de signature mail : formats, poids et bonnes pratiques"
description: "Les dimensions, le poids et les règles de conception d'une bannière de signature mail : largeur utile, densité d'écran, lisibilité à petite taille et zone cliquable."
keyword: "bannière signature mail"
cluster: "Campagnes & bannières"
pubDate: 2026-04-01
summary:
  - "La largeur utile d'une bannière est de 500 à 600 px, contrainte par les écrans mobiles."
  - "Le fichier doit être exporté au double de sa taille d'affichage pour rester net."
  - "Visez moins de 60 Ko pour une bannière statique, moins de 150 Ko pour un GIF animé."
  - "Un seul message, une seule action : une bannière qui dit deux choses n'en fait passer aucune."
related:
  - "gif-anime-signature-mail"
  - "taille-logo-signature-mail"
  - "idees-campagne-signature-mail"
faq:
  - q: "Quelle taille pour une bannière de signature mail ?"
    a: "Entre 500 et 600 px de large à l'affichage, pour une hauteur de 80 à 120 px. Le fichier doit être exporté au double de ces dimensions pour rester net sur écran haute densité."
  - q: "Quel poids maximal pour une bannière ?"
    a: "Moins de 60 Ko pour une bannière statique et moins de 150 Ko pour un GIF animé. Au-delà, l'affichage tarde et le message paraît cassé au moment où le destinataire ouvre l'e-mail."
  - q: "Faut-il mettre un bouton dans la bannière ?"
    a: "Un élément visuel qui ressemble à un bouton aide à signaler que la bannière est cliquable, mais ce n'est pas un vrai bouton : c'est une image. Toute la bannière doit être cliquable, pas seulement la zone du faux bouton."
  - q: "Combien de texte peut contenir une bannière ?"
    a: "Un titre de cinq à huit mots, une ligne de précision, et un libellé d'action. Au-delà, le texte devient illisible à la taille réelle d'affichage dans un e-mail."
---

La bannière est l'élément d'une signature qui porte un message temporaire : un événement, un
recrutement, une nouveauté. Ses contraintes techniques ressemblent à celles du logo, mais ses
contraintes de conception sont celles d'un support publicitaire vu pendant une seconde.

## Les dimensions

La largeur de la bannière est bornée par celle de la signature, elle-même bornée par les écrans
mobiles.

| Paramètre | Valeur recommandée |
| --- | --- |
| Largeur d'affichage | 500 – 600 px |
| Hauteur d'affichage | 80 – 120 px |
| Ratio | environ 5:1 |
| Fichier exporté | le double des dimensions d'affichage |

Une bannière plus haute empiète sur le message et donne l'impression d'un encart publicitaire. Une
bannière plus étroite que la signature crée un décalage visuel disgracieux : alignez sa largeur sur
celle du bloc.

Comme pour le logo, l'export se fait au double — 1 200 × 200 px pour un affichage à 600 × 100 —
avec les dimensions portées par les **attributs HTML** `width` et `height`, faute de quoi Outlook
affiche l'image à sa taille native. Le détail figure dans
[signature mail en HTML](/blog/signature-mail-html).

## Le poids

Restez sous **60 Ko** pour une bannière statique, sous **150 Ko** pour un GIF animé.

L'enjeu n'est pas la bande passante mais le rendu perçu. Les images d'un e-mail se chargent après
le texte : une bannière lourde apparaît en retard, et le destinataire voit d'abord un cadre vide
sous la signature. L'impression est celle d'un message mal construit.

Une compression PNG sans perte divise généralement le poids par deux sans différence visible. Pour
un visuel photographique, le JPEG en qualité 80 est un bon compromis.

## Les règles de conception

**Un seul message.** C'est la règle la plus enfreinte. Une bannière qui annonce un salon *et* un
livre blanc *et* un recrutement n'en fait passer aucun. Si vous avez trois messages, faites trois
campagnes successives.

**Un titre court.** Cinq à huit mots. À la taille réelle d'affichage — souvent réduite par le
client de messagerie — un titre long devient illisible.

**Une action explicite.** « S'inscrire », « Voir les offres », « Télécharger le rapport ». Le
libellé doit dire ce qui se passe au clic.

**Un contraste suffisant.** La bannière est vue en une seconde, parfois sur un écran de téléphone
en extérieur. Texte foncé sur fond clair, ou l'inverse, mais pas de gris sur gris.

**De la place autour du texte.** Une marge intérieure d'au moins 16 px. Un texte collé au bord
paraît accidentel.

## La zone cliquable

Toute la bannière doit être cliquable, pas seulement la zone qui ressemble à un bouton. C'est une
image enveloppée dans un lien :

```
<a href="https://exemple.fr/salon" style="display:block;text-decoration:none">
  <img src="https://cdn.exemple.fr/banniere@2x.png"
       width="600" height="100"
       alt="Salon Vivatech — Hall 2, stand B34. Prendre rendez-vous."
       style="display:block;border:0;width:600px;height:100px" />
</a>
```

Deux détails comptent. L'attribut `alt` doit décrire le message **et** l'action : c'est ce que
verra un destinataire dont le client bloque les images, et ce que lira un lecteur d'écran. Et
`border:0` supprime le liseré bleu que certains clients ajoutent autour d'une image liée.

> **Bon à savoir :** utilisez une URL de destination traçable, distincte par campagne. Sans cela,
> vous ne pourrez pas attribuer le trafic à la bonne bannière — voir
> [mesurer le ROI](/blog/roi-signature-mail).

## Le cas de l'animation

Un GIF animé attire davantage l'œil, mais certaines versions d'Outlook n'affichent que sa première
image. La règle qui en découle est absolue : **le message essentiel doit figurer sur la première
image**, l'animation ne servant qu'à enrichir.

Le sujet, y compris les questions de poids et de nombre de boucles, est traité dans
[bannière animée dans une signature](/blog/gif-anime-signature-mail).

## Ce qui distingue une bonne bannière d'une bonne publicité

Une différence de registre mérite d'être soulignée. La bannière apparaît sous la signature d'une
personne, dans un message professionnel adressé à quelqu'un qui la connaît. Un ton publicitaire
appuyé y détonne et rejaillit sur l'expéditeur.

Les bannières qui fonctionnent le mieux ressemblent moins à une publicité qu'à une information
utile : une date de salon, un poste ouvert, un rapport disponible. Le catalogue de formats
saisonniers figure dans
[12 idées de campagnes](/blog/idees-campagne-signature-mail), et le cadre général du canal dans
[marketing par signature mail](/blog/marketing-par-signature-mail).

Enfin, vérifiez le rendu avant diffusion. Une bannière parfaite dans un outil de conception peut
apparaître recadrée ou redimensionnée dans un client de messagerie : la prévisualisation
multi-clients de [l'éditeur](/fonctionnalites) évite la mauvaise surprise après l'envoi à trois
cents personnes.
