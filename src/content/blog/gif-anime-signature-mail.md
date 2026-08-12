---
title: "Bannière animée dans une signature : ce qui s'affiche selon les messageries"
description: "Un GIF animé ne s'anime pas partout. Ce que chaque client de messagerie affiche réellement, et la règle de conception qui rend l'animation sans risque."
keyword: "gif animé signature mail"
cluster: "Campagnes & bannières"
pubDate: 2026-04-10
summary:
  - "Certaines versions d'Outlook n'affichent que la première image d'un GIF animé."
  - "Le message essentiel doit donc figurer sur cette première image, l'animation n'étant qu'un enrichissement."
  - "Le poids d'un GIF animé doit rester sous 150 Ko, ce qui limite en pratique à quelques images."
  - "Les formats vidéo modernes ne sont pas pris en charge dans les clients de messagerie."
related:
  - "banniere-signature-mail"
  - "signature-mail-html"
  - "idees-campagne-signature-mail"
faq:
  - q: "Le GIF animé fonctionne-t-il dans Outlook ?"
    a: "Cela dépend de la version. Plusieurs versions d'Outlook pour Windows affichent uniquement la première image du GIF, sans jouer l'animation. Outlook Web, Gmail et Apple Mail jouent l'animation normalement."
  - q: "Quel poids maximal pour un GIF animé de signature ?"
    a: "Restez sous 150 Ko. C'est contraignant : cela limite en pratique à quatre ou cinq images à la taille d'une bannière de signature. Au-delà, l'affichage tarde et le message paraît cassé."
  - q: "Peut-on mettre une vidéo dans une signature mail ?"
    a: "Non. Les balises vidéo ne sont pas prises en charge par les clients de messagerie. La pratique courante consiste à utiliser une image fixe évoquant une vidéo, liée vers la page où elle est hébergée."
  - q: "L'animation améliore-t-elle le taux de clic ?"
    a: "Elle attire davantage l'œil, mais l'effet dépend du message. Une animation qui retarde la lecture de l'information essentielle peut réduire l'efficacité. Testez plutôt que de supposer."
---

L'animation attire l'œil, et c'est précisément ce qu'on cherche pour une bannière. Mais dans un
e-mail, elle ne se comporte pas comme sur le web : selon le client de messagerie du destinataire,
votre GIF s'anime, ou bien reste figé sur une seule image.

## Ce que chaque client affiche

| Client | Comportement |
| --- | --- |
| Outlook Web | Animation jouée |
| Outlook Windows (certaines versions) | Première image seulement |
| Nouveau Outlook Windows | Animation jouée |
| Outlook Mac | Animation jouée |
| Outlook mobile | Animation jouée |
| Gmail (web et mobile) | Animation jouée |
| Apple Mail | Animation jouée |

Le cas particulier est donc Outlook pour Windows dans ses versions historiques, qui affiche la
première image sans jouer la suite. Ce client reste très présent dans les parcs d'entreprise, ce
qui suffit à imposer une règle de conception — le mouvement de fond est décrit dans
[ce qui change avec le nouveau Outlook](/blog/nouveau-outlook-signature).

## La règle qui rend l'animation sans risque

Elle tient en une phrase : **le message essentiel doit figurer sur la première image**.

L'animation devient alors un enrichissement pour ceux qui la voient, et son absence ne prive
personne de l'information. Concrètement, la première image doit contenir à elle seule le titre,
l'élément d'identification et l'appel à l'action.

Ce qu'il ne faut pas faire : construire une séquence où le message se révèle progressivement — un
mot par image, ou une accroche qui n'a de sens qu'après trois secondes. Pour une partie de vos
destinataires, la bannière n'affichera qu'un fragment incompréhensible.

> **Bon à savoir :** le test le plus simple consiste à exporter la première image seule et à la
> regarder. Si elle se suffit à elle-même, votre animation est sûre. Sinon, revoyez le montage.

## La contrainte de poids

Un GIF animé pèse la somme de ses images. Avec un plafond de **150 Ko** pour une bannière de
600 px de large, on tient en pratique quatre à cinq images — pas davantage.

Trois leviers permettent de tenir ce budget. Réduire le nombre d'images en privilégiant des
transitions nettes plutôt que des fondus, qui multiplient les étapes intermédiaires. Limiter la
palette de couleurs, le GIF étant de toute façon plafonné à 256 teintes. Et n'animer qu'une
**partie** de la surface, en gardant le fond fixe : les images successives ne stockent alors que la
zone qui change.

Le budget de poids global d'une signature est traité dans
[bannière de signature mail : formats et poids](/blog/banniere-signature-mail).

## Combien de boucles

Trois options, avec des effets différents.

**Une seule lecture.** L'animation se joue puis s'arrête sur la dernière image. C'est le choix le
plus sûr : l'attention est captée une fois, et la bannière reste ensuite stable. Attention alors à
ce que la **dernière** image porte aussi le message, puisque c'est elle qui restera affichée.

**Deux à trois boucles.** Compromis courant, qui laisse une seconde chance à un destinataire qui
regardait ailleurs.

**Boucle infinie.** À éviter. Une bannière qui clignote en permanence sous chaque message d'une
conversation devient rapidement irritante, et donne un ton publicitaire qui détonne dans un échange
professionnel.

## Ce qui ne fonctionne pas du tout

**La vidéo.** Les balises vidéo ne sont pas prises en charge par les clients de messagerie. La
pratique courante est une image fixe évoquant une vidéo — avec un bouton de lecture dessiné — liée
vers la page où elle est hébergée.

**Les animations CSS.** Elles ne survivent pas au nettoyage du HTML par les webmails, ni au moteur
de rendu d'Outlook. Voir [signature mail en HTML](/blog/signature-mail-html).

**Le SVG animé.** Non affiché, et parfois bloqué pour des raisons de sécurité.

Le GIF reste donc le seul format d'animation utilisable, avec ses limites.

## Faut-il animer

La question mérite d'être posée plutôt que tranchée par principe. L'animation attire l'œil, mais
elle ajoute du poids, complique la production, et impose la contrainte de la première image.

Elle se justifie pour un message qui gagne réellement à la séquence : un compte à rebours avant un
événement, une succession de trois logos partenaires, une révélation de chiffre. Elle ne se
justifie pas pour un message qui tient en une phrase — c'est-à-dire la plupart des campagnes
décrites dans
[12 idées de campagnes](/blog/idees-campagne-signature-mail).

Dans le doute, une bannière statique bien conçue, avec un contraste net et un appel à l'action
clair, fait généralement aussi bien pour un dixième de l'effort. Et vous pouvez comparer : le suivi
par campagne décrit dans [mesurer le ROI](/blog/roi-signature-mail) permet de tester une version
animée contre une version fixe sur deux périodes comparables.
