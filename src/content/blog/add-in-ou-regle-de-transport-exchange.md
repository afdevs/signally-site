---
title: "Add-in ou règle de transport Exchange : quelle méthode de signature choisir"
description: "Insertion à la rédaction ou ajout côté serveur : les deux méthodes de signature Exchange n'ont ni les mêmes limites, ni les mêmes effets sur les fils de discussion, le chiffrement et la visibilité côté utilisateur."
keyword: "signature exchange règle de transport"
cluster: "Microsoft 365 & Outlook"
pubDate: 2026-01-16
summary:
  - "La règle de transport s'applique après l'envoi : l'expéditeur ne voit jamais sa signature et ne peut pas la vérifier."
  - "Dans une conversation en fil, la règle empile un bloc à chaque réponse ; l'add-in n'en insère qu'un."
  - "La règle échoue sur les messages chiffrés, qui ne peuvent pas être modifiés en transit."
  - "La règle reste pertinente pour un disclaimer juridique en texte imposé à 100 % du flux, y compris aux applications automatisées."
related:
  - "signature-mail-outlook-entreprise"
  - "deployer-signature-microsoft-365"
  - "nouveau-outlook-signature"
faq:
  - q: "Peut-on combiner une règle de transport et un add-in ?"
    a: "Oui, et c'est parfois pertinent : l'add-in porte la signature de marque à la rédaction, la règle de transport ajoute un disclaimer juridique minimal en fin de message pour couvrir aussi les envois automatisés qui ne passent pas par Outlook. Il faut simplement veiller à ce que les deux blocs ne fassent pas doublon."
  - q: "La règle de transport ralentit-elle l'envoi des messages ?"
    a: "L'impact est négligeable pour un pied de page simple. Il devient perceptible si la règle applique des conditions nombreuses ou des modèles HTML lourds sur un volume important."
  - q: "Pourquoi ma règle de transport n'applique-t-elle rien sur certains messages ?"
    a: "Les messages chiffrés ne peuvent pas être modifiés en transit : Exchange laisse alors le message intact. Les envois internes peuvent également être exclus selon la portée que vous avez définie dans la règle."
  - q: "L'add-in fonctionne-t-il si l'utilisateur écrit depuis un autre client que Outlook ?"
    a: "Non. Un add-in s'exécute dans Outlook (web, Windows, Mac, mobile). Pour un client tiers ou un envoi applicatif, seule une règle de transport côté serveur peut intervenir."
---

Sur un tenant Microsoft 365, deux mécanismes distincts permettent d'ajouter une signature à des
messages sortants : l'add-in, qui écrit dans le message pendant sa rédaction, et la règle de
transport Exchange, qui l'ajoute au passage sur le serveur. Le choix entre les deux n'est pas une
question de préférence : il découle de ce que vous voulez faire figurer dans la signature, et de
qui doit pouvoir la voir.

## Comment fonctionne une règle de transport Exchange

Une règle de flux de messagerie s'applique dans le service de transport, après que l'utilisateur a
cliqué sur « Envoyer ». Vous définissez une condition — par exemple « tous les messages sortants du
domaine » — et une action : « ajouter un avertissement en bas du message ». Exchange applique le
bloc HTML que vous avez saisi, puis achemine le message.

L'avantage est réel : rien à installer, portée totale, et le mécanisme couvre aussi les envois qui
ne viennent pas d'Outlook — une application métier, un outil de facturation, un script. C'est
d'ailleurs le seul moyen d'imposer une mention légale à 100 % du flux sortant, sans exception.

## Pourquoi l'expéditeur ne voit jamais sa signature

C'est la conséquence la plus lourde de l'insertion côté serveur, et elle surprend souvent au
moment du déploiement. La signature n'existe pas au moment de la rédaction, ni dans la copie
conservée dans les éléments envoyés. Le collaborateur ne peut donc ni la relire, ni constater
qu'un lien est cassé, ni signaler que sa fonction est erronée.

Concrètement, votre boucle de contrôle qualité disparaît. Sur une signature de marque avec logo,
coordonnées et bannière, ce sont plusieurs centaines de paires d'yeux que vous perdez. Avec
l'add-in décrit sur notre page [add-in Microsoft 365](/integrations/microsoft-365-outlook), la
signature est visible dans la fenêtre de rédaction : toute erreur remonte en quelques heures.

## Les fils de discussion et l'empilement des blocs

Une règle de transport ne sait pas si le message est un premier envoi ou la sixième réponse d'une
conversation. Elle applique son bloc à chaque fois. Après quelques allers-retours, le message se
termine par une pile de pieds de page identiques, souvent plus longue que l'échange lui-même.

Il existe des contournements — conditionner la règle à l'absence d'un marqueur inséré
précédemment, par exemple — mais ils sont fragiles : le marqueur disparaît si le destinataire
répond depuis un client qui reformate le HTML. L'add-in, lui, gère nativement la distinction entre
signature de premier message et signature de réponse.

## Le cas des messages chiffrés

Un message chiffré ne peut pas être modifié en transit : c'est le principe même du chiffrement. La
règle de transport le laisse donc passer intact, sans signature et sans erreur visible. Si votre
organisation utilise le chiffrement pour une partie de ses échanges — cabinets juridiques, santé,
finance — une part de votre flux échappera silencieusement à la règle.

> **Bon à savoir :** l'add-in écrit dans le corps du message avant chiffrement, côté client. La
> signature est donc présente, y compris sur les messages protégés.

## Tableau de décision

| Besoin | Règle de transport | Add-in |
| --- | --- | --- |
| Disclaimer juridique sur 100 % du flux, y compris applicatif | Oui | Non |
| Signature de marque avec logo et réseaux sociaux | Mal adapté | Oui |
| Visible par l'expéditeur et dans les éléments envoyés | Non | Oui |
| Pas d'empilement dans les fils | Non | Oui |
| Fonctionne sur les messages chiffrés | Non | Oui |
| Champs personnalisés depuis l'annuaire | Limité | Oui |
| Bannières de campagne datées | Non | Oui |

## Ce que nous recommandons en pratique

Pour la grande majorité des organisations, l'add-in couvre le besoin réel : une signature de
marque, personnalisée, vérifiable, mise à jour depuis l'annuaire. La méthode complète est décrite
dans notre guide sur
[le déploiement d'une signature Outlook](/blog/signature-mail-outlook-entreprise).

La combinaison des deux reste défendable dans un cas précis : quand une mention légale doit
absolument figurer sur tout ce qui sort du domaine, y compris les notifications automatiques
émises par vos applications. On garde alors une règle de transport minimaliste, en texte, pour ce
socle juridique, et l'add-in pour la signature visible. Il faut simplement s'assurer que les deux
ne se répètent pas.

C'est aussi le moment de vérifier la compatibilité avec votre parc de clients : l'add-in doit
fonctionner sur le nouveau Outlook comme sur l'ancien, sujet traité dans
[ce qui change en 2026](/blog/nouveau-outlook-signature).

Un dernier critère, souvent décisif côté DSI : la règle de transport modifie votre flux sortant,
l'add-in non. Aucun connecteur, aucun reroutage, aucune modification de votre configuration
d'acheminement. C'est un argument qui pèse dans les revues de sécurité — le sujet est traité en
détail sur notre page [sécurité et RGPD](/securite-rgpd).
