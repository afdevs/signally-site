---
slug: "google-workspace-signature"
title: "Pied de page Google Workspace : ce que la console d'administration ne sait pas faire"
description: "La fonction d'ajout de pied de page de la console Google rend un service précis, et seulement celui-là. Ce qu'elle couvre, ce qu'elle ne couvrira jamais, et à quel moment elle ne suffit plus."
keyword: "google workspace signature"
cluster: "Google Workspace & Gmail"
pubDate: 2026-02-05
summary:
  - "Le pied de page de la console s'ajoute côté serveur, après l'envoi : l'expéditeur ne le voit jamais."
  - "La mise en forme est limitée et les champs personnalisés par collaborateur ne sont pas gérés."
  - "Le bloc se répète à chaque réponse dans une conversation en fil."
  - "C'est un outil de conformité juridique, efficace pour cela, et inadapté à une signature de marque."
related:
  - "signature-gmail-entreprise"
  - "gestion-signature-gmail"
  - "unite-organisationnelle-signature"
faq:
  - q: "Où se trouve la fonction d'ajout de pied de page dans la console Google ?"
    a: "Dans les paramètres de Gmail, section conformité : on y définit une règle qui ajoute un contenu au bas des messages, avec une portée par unité organisationnelle. Le libellé exact évolue au fil des versions de la console."
  - q: "Peut-on y insérer le nom et la fonction de chaque collaborateur ?"
    a: "Non. Le pied de page est un contenu unique appliqué à un périmètre. Il ne dispose pas de champs dynamiques alimentés par l'annuaire, contrairement à un add-on."
  - q: "Le pied de page s'affiche-t-il dans les messages envoyés ?"
    a: "Non. L'ajout se fait au transport, après que le message a quitté la boîte de l'expéditeur : la copie conservée dans « Messages envoyés » ne le contient pas."
  - q: "Faut-il désactiver le pied de page si on installe un add-on ?"
    a: "Pas nécessairement. Beaucoup d'organisations gardent un pied de page minimal en texte pour couvrir les envois applicatifs, et confient la signature de marque à l'add-on. Vérifiez simplement que les deux ne font pas doublon."
---

La console d'administration Google propose une fonction d'ajout de contenu en bas des messages
sortants. On l'utilise souvent comme une solution de signature d'entreprise, avant de découvrir
qu'elle n'en est pas une. Elle fait bien une chose : imposer un texte à l'ensemble du flux. Tout
le reste lui échappe, par construction.

## Ce que la fonction fait réellement bien

Le pied de page s'applique dans le service de transport, sur les messages qui quittent le domaine.
Sa portée peut être restreinte à une unité organisationnelle, ce qui permet un texte différent par
entité juridique.

Son avantage décisif est l'exhaustivité : **tout** ce qui sort du domaine reçoit le bloc, y compris
ce qui n'est pas envoyé depuis Gmail. Les notifications de votre outil de facturation, les alertes
de votre application métier, les envois automatisés d'un script — rien n'y échappe. Pour une
mention légale obligatoire, c'est le seul mécanisme qui garantit une couverture totale.

Si votre besoin s'arrête là — une ligne de disclaimer juridique, en texte, sur cent pour cent du
trafic — la console suffit et il n'y a aucune raison d'ajouter un outil.

## Limite 1 — L'expéditeur ne voit jamais le résultat

L'ajout se produit après l'envoi. Le collaborateur ne voit pas le bloc pendant la rédaction, et la
copie conservée dans « Messages envoyés » ne le contient pas non plus.

Personne ne peut donc vérifier quoi que ce soit. Un lien cassé, une mention obsolète, une faute de
frappe dans l'adresse du siège : l'erreur circule jusqu'à ce qu'un destinataire la signale, ce
qu'un destinataire ne fait jamais. Vous perdez la boucle de contrôle la plus efficace dont vous
disposiez : plusieurs dizaines de collaborateurs qui regardent leur propre message.

## Limite 2 — Aucun champ personnalisé

Le pied de page est un contenu unique appliqué à un périmètre. Il ne sait pas qui envoie le
message et ne peut donc pas afficher son nom, sa fonction, son téléphone direct ou son site de
rattachement.

Ce n'est pas un défaut d'implémentation, c'est la nature du mécanisme : il agit sur un flux, pas
sur une personne. Dès que la signature doit être personnelle — et c'est le propre d'une signature —
il faut un système qui connaisse l'utilisateur. C'est le rôle de la synchronisation d'annuaire,
décrite dans notre page [add-on Google Workspace](/integrations/google-workspace-gmail).

## Limite 3 — La mise en forme

Le champ accepte un contenu balisé, mais les résultats sont irréguliers d'un client à l'autre et
la gestion des images relève du bricolage. Un logo correctement dimensionné, des icônes sociales
alignées, un séparateur coloré : ce n'est pas le terrain de cet outil.

Les contraintes générales du HTML d'e-mail — qui s'appliquent quel que soit le mécanisme
d'insertion — sont détaillées dans
[signature mail en HTML](/blog/signature-mail-html).

## Limite 4 — L'empilement dans les fils

Le mécanisme ne distingue pas un premier message d'une réponse. Sur une conversation de six
échanges, le message final se termine par six pieds de page identiques.

C'est supportable pour une ligne de texte discrète. Cela devient ridicule dès que le bloc contient
une adresse postale complète et un disclaimer de quatre lignes.

> **Bon à savoir :** c'est exactement pour cette raison qu'on recommande de garder le pied de page
> console **court**. Une phrase, pas un paragraphe. La signature riche, elle, doit venir de
> l'add-on, qui n'insère qu'un bloc par message.

## Limite 5 — Ni ciblage temporel, ni campagne

Une bannière de communication a une date de début et une date de fin. La console n'offre pas de
calendrier : modifier le pied de page suppose une intervention manuelle de l'administrateur à
chaque changement, et il faut penser à le retirer après l'événement.

En pratique, personne ne le retire. On trouve encore, en octobre, des pieds de page qui annoncent
un salon de mars. C'est précisément le problème que résolvent les
[campagnes planifiées](/campagnes).

## La bonne façon d'articuler les deux

L'opposition n'a pas lieu d'être : les deux mécanismes ne traitent pas le même besoin.

**La console** couvre le socle juridique, en texte court, sur cent pour cent du flux — y compris
applicatif. C'est son terrain, et rien d'autre ne fait cela.

**L'add-on** porte la signature de marque : personnalisée depuis l'annuaire, verrouillée sur ses
parties sensibles, visible par l'expéditeur, avec bannières datées et ciblage par unité
organisationnelle.

Le seul point de vigilance dans cette combinaison est la redondance. Si votre mention légale
figure déjà dans le gabarit de l'add-on, retirez-la du pied de page console pour éviter qu'elle
n'apparaisse deux fois. La transition depuis une gestion purement console est décrite dans
[passer à une gestion centralisée](/blog/gestion-signature-gmail).
