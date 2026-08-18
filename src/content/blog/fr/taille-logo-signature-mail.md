---
slug: "taille-logo-signature-mail"
title: "Poids, taille et format du logo dans une signature mail"
description: "Les dimensions, le poids et le format de fichier à respecter pour un logo de signature mail : export au double pour les écrans haute densité, PNG ou JPEG, et budget de poids réaliste."
keyword: "taille logo signature mail"
cluster: "Créer sa signature"
pubDate: 2026-03-02
summary:
  - "Une largeur d'affichage de 140 à 200 px convient à la majorité des logos."
  - "Le fichier doit être exporté au double de la taille d'affichage pour rester net sur écran haute densité."
  - "Visez moins de 30 Ko pour le logo et moins de 100 Ko pour l'ensemble des images de la signature."
  - "PNG-24 pour un logo à aplats avec transparence, JPEG pour une photo, jamais de SVG."
related:
  - "logo-signature-outlook"
  - "signature-mail-html"
  - "banniere-signature-mail"
faq:
  - q: "Quelle taille doit faire un logo de signature mail ?"
    a: "Entre 140 et 200 px de large à l'affichage pour un logo horizontal, 40 à 60 px de haut pour un logo carré ou un monogramme. Le fichier lui-même doit être exporté au double de ces dimensions."
  - q: "Le SVG fonctionne-t-il dans une signature mail ?"
    a: "Non, pas de façon fiable. La plupart des clients de messagerie ne l'affichent pas, et certains le bloquent pour des raisons de sécurité. Convertissez votre logo vectoriel en PNG avant de l'utiliser."
  - q: "Quel poids maximal pour les images d'une signature ?"
    a: "Restez sous 30 Ko pour le logo et sous 100 Ko pour l'ensemble des images, bannière comprise. Ce n'est pas une contrainte de bande passante mais de perception : une signature lente à afficher paraît cassée."
  - q: "Faut-il un logo différent pour le mode sombre ?"
    a: "C'est souhaitable si votre logo est en noir sur fond transparent : il devient invisible sur fond sombre. La parade la plus simple et la plus fiable reste un logo sur fond blanc légèrement arrondi, plutôt que la transparence."
---

Le logo est le seul élément graphique obligatoire d'une signature d'entreprise, et celui dont les
caractéristiques techniques sont le plus souvent laissées au hasard. Trois paramètres décident du
résultat : les dimensions, la densité, et le format de fichier.

## Les dimensions d'affichage

La contrainte de départ est la largeur totale de la signature, qui doit rester entre 500 et
600 px pour passer sur mobile. Le logo ne peut donc pas dépasser un tiers de cette largeur sans
écraser le reste.

En pratique :

| Type de logo | Largeur d'affichage | Hauteur d'affichage |
| --- | --- | --- |
| Logo horizontal (mot + symbole) | 140 – 200 px | 32 – 56 px |
| Logo carré ou monogramme | 48 – 64 px | 48 – 64 px |
| Signature de groupe (deux logos) | 120 px chacun | 32 – 40 px |

Un logo plus grand ne renforce pas la marque : il déséquilibre le bloc et repousse les coordonnées
hors du premier regard.

## La densité : exporter au double

C'est le point technique le plus souvent manqué. La quasi-totalité des écrans récents — portables,
tablettes, téléphones — affichent deux pixels physiques ou plus pour un pixel logique. Une image
exportée à sa taille d'affichage y paraît floue.

La règle est donc : **exportez au double, affichez à la moitié**.

Pour un logo affiché à 180 × 48 px, produisez un fichier de 360 × 96 px, puis contraignez les
dimensions dans le HTML :

```
<img src="logo@2x.png" width="180" height="48" alt="Entreprise"
     style="display:block;border:0;width:180px;height:48px" />
```

Les attributs HTML sont indispensables : Outlook ignore fréquemment les dimensions déclarées
uniquement en CSS, et afficherait alors l'image à ses 360 px natifs. Le mécanisme est détaillé
dans [signature mail en HTML](/blog/signature-mail-html), et les autres causes de logo cassé dans
[insérer un logo dans une signature Outlook](/blog/logo-signature-outlook).

## Le format de fichier

**PNG-24** pour un logo à aplats, avec transparence. C'est le choix par défaut : rendu net des
contours, transparence propre, et prise en charge universelle.

**PNG-8** si votre logo compte peu de couleurs. Le fichier est nettement plus léger, mais les
dégradés et les bords anticrénelés se dégradent.

**JPEG** uniquement pour une photographie — un portrait, par exemple. Jamais pour un logo à
aplats : la compression produit des artefacts visibles autour des contours nets.

**Pas de SVG.** Le vectoriel serait idéal en théorie — net à toutes les densités, très léger — mais
la plupart des clients de messagerie ne l'affichent pas, et certains le bloquent pour des raisons
de sécurité. Convertissez votre source vectorielle en PNG.

**GIF** uniquement pour une bannière animée, jamais pour un logo. Sa palette limitée à 256 couleurs
dégrade les dégradés.

## Le budget de poids

Restez sous **30 Ko pour le logo** et sous **100 Ko pour l'ensemble des images** de la signature,
bannière comprise.

Ce n'est pas une question de bande passante : personne ne s'inquiète de 200 Ko aujourd'hui. C'est
une question de perception. Les images d'une signature se chargent après le corps du message ; si
elles tardent, le destinataire voit d'abord un bloc disloqué, avec des cadres vides qui se
remplissent progressivement. L'impression est celle d'un message cassé.

Une passe de compression sans perte suffit généralement à diviser le poids d'un PNG par deux, sans
différence visible.

> **Bon à savoir :** vérifiez le poids du fichier réellement servi, pas celui de votre export. Il
> arrive qu'un logo de 8 Ko soit remplacé par une version 1 200 px de 400 Ko lors d'une
> réactualisation de charte, sans que personne ne le remarque.

## Le cas du mode sombre

De plus en plus de clients de messagerie proposent un thème sombre, qui inverse le fond du message.
Un logo noir sur fond transparent y devient invisible.

Trois approches, par ordre de fiabilité :

**Le logo sur pastille blanche.** Le fichier inclut un fond blanc légèrement arrondi. C'est laid
en théorie, robuste en pratique, et cela fonctionne partout.

**Un logo bicolore qui tient sur les deux fonds.** Si votre charte le permet — un logo avec une
couleur d'accent suffisamment contrastée sur clair comme sur sombre — c'est la meilleure solution.

**La bascule par media query.** `prefers-color-scheme` fonctionne dans certains clients seulement,
et pas dans Outlook Windows. À traiter comme une amélioration progressive, jamais comme la
solution principale.

## Le vrai enjeu : que le bon fichier soit utilisé partout

Toutes ces règles se respectent facilement une fois. Le problème survient quand quarante personnes
collent chacune leur version du logo : l'une prend le fichier de la plaquette imprimée, l'autre une
capture d'écran du site, une troisième l'ancienne charte.

Un gabarit centralisé règle ce point : le logo est déposé une fois, hébergé sur une URL stable,
dimensionné correctement, et verrouillé. Quand la charte évolue, vous remplacez le fichier et
toutes les signatures suivent. C'est le rôle de [l'éditeur Signally](/fonctionnalites).
