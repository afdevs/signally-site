---
title: "Signature Gmail sur mobile : ce qui s'affiche réellement"
description: "L'application Gmail gère une signature mobile distincte de celle du web, souvent réduite à « Envoyé de mon iPhone ». Ce qui s'affiche vraiment sur mobile et comment obtenir un rendu cohérent."
keyword: "signature gmail mobile"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-07
summary:
  - "L'application Gmail dispose d'un réglage de signature mobile indépendant de celui du webmail."
  - "Par défaut, elle applique un texte générique du type « Envoyé de mon iPhone »."
  - "Le champ mobile n'accepte pas de HTML riche : logo et mise en page ne s'y transposent pas."
  - "Une signature appliquée par un add-on reste identique sur web et sur mobile, sans réglage utilisateur."
related:
  - "signature-gmail-entreprise"
  - "gestion-signature-gmail"
  - "signature-outlook-mobile"
faq:
  - q: "Pourquoi ma signature Gmail du web n'apparaît-elle pas sur mon téléphone ?"
    a: "L'application Gmail gère un réglage de signature propre à l'appareil, distinct de celui du webmail. Les deux ne se synchronisent pas : configurer l'un ne configure pas l'autre."
  - q: "Peut-on mettre un logo dans la signature mobile de Gmail ?"
    a: "Le champ de signature de l'application mobile est prévu pour du texte simple. Y coller un bloc HTML avec image donne un résultat aléatoire. Pour un logo fiable sur mobile, la signature doit être insérée par un add-on plutôt que saisie dans l'application."
  - q: "Comment enlever « Envoyé de mon iPhone » ?"
    a: "Dans l'application Gmail : Menu → Paramètres → sélectionner le compte → Signature mobile. Sur un parc géré, mieux vaut imposer la signature centralement que demander cette manipulation à chacun."
  - q: "La bannière de campagne s'affiche-t-elle sur Gmail mobile ?"
    a: "Oui, dès lors que la signature est insérée à la rédaction par l'add-on : la bannière fait partie du bloc, quel que soit l'appareil utilisé."
---

Sur Google Workspace, la signature soignée configurée dans le webmail ne suit pas sur le
téléphone. À sa place, un « Envoyé de mon iPhone » que personne n'a choisi, ou rien. Comme les
messages partis du mobile sont rarement relus, l'écart peut durer des mois sans que personne ne le
remarque.

## Deux réglages qui s'ignorent

Gmail web stocke la signature dans les paramètres du compte, sous **Paramètres → Général →
Signature**. L'application mobile, elle, expose un réglage distinct — « Signature mobile » —
propre à l'appareil, et pré-rempli avec un texte générique.

Les deux ne communiquent pas. Un collaborateur qui a passé dix minutes à mettre en forme sa
signature dans le navigateur repart donc avec une signature mobile par défaut, qu'il n'a pas vue
et dont il ignore souvent l'existence.

Le résultat est un dédoublement : la même personne a deux signatures, dont une qu'elle n'a pas
écrite. C'est exactement la même mécanique que du côté Microsoft, décrite dans
[signature Outlook mobile](/blog/signature-outlook-mobile).

## Ce que le champ mobile accepte réellement

Le réglage mobile est prévu pour du texte simple. On peut y mettre plusieurs lignes, mais on ne
dispose ni d'éditeur riche, ni de gestion d'image fiable, ni de contrôle sur la mise en page.

Y coller un gabarit HTML complet — ce que certains tentent — produit selon les cas du code brut
affiché tel quel, une mise en forme partielle, ou un bloc dépouillé de son logo. Le rendu varie
selon la version de l'application et le système.

Autrement dit : la signature de marque de votre entreprise ne peut pas être reproduite dans ce
champ. Ce n'est pas une question d'effort, c'est une limite du réglage.

## Pourquoi cela compte plus qu'il n'y paraît

Il est tentant de traiter le mobile comme un cas secondaire. En pratique, une part importante des
réponses professionnelles part d'un téléphone : en déplacement, entre deux réunions, en fin de
journée. Ce sont fréquemment les échanges les plus réactifs, donc ceux qui comptent
commercialement.

La signature manque donc précisément là où elle servirait le plus : sur des réponses rapides
adressées à des interlocuteurs qui découvrent votre entreprise.

## Les contournements et leurs limites

**Demander à chacun de configurer sa signature mobile.** C'est la réponse habituelle. Elle échoue
pour trois raisons cumulées : le champ ne permet pas de reproduire le gabarit, la consigne n'est
appliquée que par une fraction du parc, et les nouveaux arrivants ne la reçoivent jamais.

**Utiliser le pied de page de la console.** Il couvre bien le mobile, puisqu'il agit côté serveur.
Mais il apporte ses propres limites — pas de champ personnalisé, empilement dans les fils,
invisible pour l'expéditeur — détaillées dans
[pied de page Google Workspace](/blog/google-workspace-signature).

**Se contenter d'un texte court sur mobile.** Solution de repli honnête : nom, fonction,
téléphone, en trois lignes. Cela vaut mieux que « Envoyé de mon iPhone », mais la cohérence de
marque n'y est pas.

## L'approche qui donne le même rendu partout

Pour que la signature soit identique sur web et sur mobile, elle ne doit dépendre d'aucun réglage
local. L'add-on s'exécute dans Gmail au moment de la rédaction — y compris dans l'application
mobile — et insère le bloc complet, avec les données de l'annuaire et la bannière en cours.

Le collaborateur n'a rien à paramétrer, sur aucun de ses appareils. Le mécanisme est décrit sur la
page [add-on Google Workspace](/integrations/google-workspace-gmail).

> **Bon à savoir :** pensez à vider le champ « Signature mobile » de l'application lors du
> déploiement. Sinon les deux se cumulent, et le message se termine par votre signature
> d'entreprise suivie du texte générique.

## Concevoir un gabarit lisible sur un écran de téléphone

Trois précautions couvrent l'essentiel des cas.

**Contraindre la largeur.** Un bloc de 500 à 600 px maximum. Au-delà, le client mobile impose un
défilement horizontal ou réduit l'ensemble jusqu'à l'illisibilité.

**Éviter les colonnes multiples.** Logo à gauche, coordonnées à droite : cela passe. Trois
colonnes : non.

**Dimensionner les cibles tactiles.** Un numéro de téléphone ou une icône sociale doit rester
cliquable au doigt, ce qui suppose une hauteur suffisante et un espacement réel entre les
éléments.

La prévisualisation multi-clients de [l'éditeur](/fonctionnalites) couvre le rendu mobile, mais
envoyez toujours un message de test sur votre propre téléphone avant de généraliser.
