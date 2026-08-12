---
title: "Mettre une signature Gmail identique pour tous les utilisateurs du domaine"
description: "Trois façons d'imposer une signature Gmail à l'échelle d'un domaine Google Workspace : la configuration individuelle, le pied de page de la console d'administration et l'add-on installé domain-wide."
keyword: "signature gmail entreprise"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-03
summary:
  - "Gmail ne prévoit nativement qu'une signature par utilisateur, configurée par l'utilisateur lui-même."
  - "Le pied de page de la console d'administration s'applique côté serveur, en mise en forme très limitée."
  - "Un add-on installé à l'échelle du domaine insère une signature HTML complète à la rédaction."
  - "Seule cette dernière méthode permet des gabarits par unité organisationnelle et des bannières datées."
related:
  - "google-workspace-signature"
  - "unite-organisationnelle-signature"
  - "gestion-signature-gmail"
faq:
  - q: "Peut-on forcer une signature Gmail depuis la console d'administration Google ?"
    a: "La console permet d'ajouter un pied de page côté serveur via les paramètres de conformité, mais pas d'imposer une signature riche dans l'interface Gmail de l'utilisateur. Pour une signature de marque complète, il faut passer par un add-on installé à l'échelle du domaine."
  - q: "Les utilisateurs peuvent-ils encore modifier leur signature ?"
    a: "Avec un add-on et des gabarits verrouillés, l'administrateur décide champ par champ de ce qui reste modifiable. Le logo et les mentions légales peuvent être rendus intouchables tout en laissant un champ libre, par exemple le téléphone direct."
  - q: "La signature s'applique-t-elle aussi aux alias d'envoi ?"
    a: "Un utilisateur qui envoie depuis un alias conserve la signature du gabarit rattaché à son compte. Si vos alias correspondent à des marques distinctes, prévoyez un gabarit par entité et vérifiez le comportement souhaité lors de la recette."
  - q: "Faut-il modifier les enregistrements MX ou le routage ?"
    a: "Non. Un add-on s'exécute dans Gmail au moment de la rédaction : il n'intervient ni dans le routage, ni dans l'acheminement. Vos messages partent de votre domaine exactement comme avant."
---

Sur Google Workspace, la question « comment mettre la même signature pour tout le monde » n'a pas
de réponse évidente dans la console. Gmail a été pensé pour que chaque utilisateur définisse la
sienne, et l'outillage d'administration reste, sur ce point, en retrait de ce que propose
Microsoft. Trois approches coexistent, avec des résultats très différents.

## Approche 1 — Laisser chacun configurer sa signature

C'est le comportement par défaut. Chaque utilisateur ouvre **Paramètres → Général → Signature**,
saisit son bloc, et Gmail l'ajoute aux nouveaux messages.

Cela fonctionne pour une petite structure où tout le monde se parle. Au-delà, les mêmes symptômes
apparaissent partout : des polices différentes selon qui a copié depuis quel document, des logos
redimensionnés à la main, des mentions légales absentes chez les derniers arrivés, et des
signatures qui annoncent des fonctions périmées.

Le coût réel n'est pas la mise en place initiale, c'est la maintenance : à chaque changement de
charte, il faut réexpliquer la manipulation à l'ensemble du domaine et espérer un taux
d'application correct. Ce coût est chiffré dans notre
[article sur la gestion manuelle](/blog/cout-gestion-signatures-mail).

## Approche 2 — Le pied de page de la console d'administration

Google propose, dans les paramètres de conformité de Gmail, une fonction d'ajout de texte en pied
de message. Elle s'applique côté serveur à tout le trafic sortant du domaine.

Elle rend un service réel : imposer une mention légale à 100 % des envois, y compris ceux émis par
des applications. Mais ses limites sont importantes. La mise en forme est réduite, l'insertion se
fait après l'envoi — l'utilisateur ne voit donc jamais le résultat — et il n'y a ni champ
personnalisé par collaborateur, ni gabarit par équipe, ni bannière.

C'est un outil de conformité, pas un outil de marque. La comparaison détaillée figure dans
[l'article sur le pied de page Google Workspace](/blog/google-workspace-signature).

## Approche 3 — Un add-on installé à l'échelle du domaine

L'add-on s'installe depuis la console d'administration Google, en une opération, pour l'ensemble du
domaine. Il s'exécute dans Gmail au moment de la rédaction et insère une signature HTML complète,
remplie avec les données de l'utilisateur remontées de Google Directory.

Le parcours d'installation tient en quatre étapes, détaillées sur notre page
[add-on Google Workspace](/integrations/google-workspace-gmail) :

1. Installation de l'add-on à l'échelle du domaine depuis la console.
2. Synchronisation de l'annuaire, en lecture seule.
3. Attribution d'un gabarit par unité organisationnelle ou par groupe.
4. Application automatique dans Gmail, web et mobile.

> **Bon à savoir :** l'installation domain-wide n'exige aucune action des utilisateurs. Ils n'ont
> ni à accepter une autorisation individuelle, ni à installer quoi que ce soit.

## Ce que la troisième approche apporte concrètement

**Des champs personnalisés.** Nom, fonction, service et téléphone viennent de l'annuaire. Un
changement de poste s'y répercute sans que personne n'y pense.

**Des gabarits par entité.** Chaque unité organisationnelle peut recevoir son propre modèle, ce
qui couvre les organisations multi-marques et multi-pays. Le mécanisme est décrit dans
[gérer les signatures par unité organisationnelle](/blog/unite-organisationnelle-signature).

**Des mentions légales verrouillées.** L'administrateur fige ce qui doit l'être. Le collaborateur
ne peut pas supprimer le disclaimer par inadvertance en réécrivant sa signature.

**Des bannières datées.** Une campagne démarre et s'arrête aux dates fixées, sur les équipes
choisies — voir la page [campagnes et bannières](/campagnes).

## Comment choisir

| Votre situation | Approche adaptée |
| --- | --- |
| Moins de dix personnes, pas d'enjeu de marque | Configuration individuelle |
| Mention légale obligatoire sur tout le flux, y compris applicatif | Pied de page console |
| Signature de marque cohérente sur tout le domaine | Add-on domain-wide |
| Plusieurs marques, filiales ou pays | Add-on avec un gabarit par unité |

Les deux dernières lignes se combinent souvent avec la deuxième : un pied de page minimal côté
console pour le socle juridique, et l'add-on pour la signature visible. L'essentiel est de
vérifier que les deux blocs ne se répètent pas dans le message final.

Si vous partez d'une situation où chacun gère la sienne, la transition est décrite pas à pas dans
[passer à une gestion centralisée](/blog/gestion-signature-gmail).
