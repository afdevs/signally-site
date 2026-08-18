/**
 * Toutes les FAQ du site, reprises mot pour mot du prototype
 * (« Signally Site.dc.html », lignes 1285-1431).
 *
 * Chaque jeu alimente à la fois l'accordéon de la page et les données
 * structurées FAQPage — d'où la source unique.
 */

export type FaqItem = { q: string; a: string };

export const featuresFaq: FaqItem[] = [
  {
    q: "Comment créer une signature mail professionnelle ?",
    a: "Partez d'un modèle de la bibliothèque ou d'une page blanche, ajoutez votre logo, vos coordonnées et vos réseaux sociaux, puis remplacez les informations personnelles par des champs dynamiques. Le gabarit devient alors valable pour toute l'entreprise : chaque collaborateur verra ses propres données.",
  },
  {
    q: "Faut-il savoir coder en HTML ?",
    a: "Non. L'éditeur est entièrement visuel. Le HTML généré est optimisé pour les clients de messagerie, ce qui évite les erreurs classiques d'un code écrit à la main : tableaux mal fermés, images non redimensionnées, styles ignorés par Outlook.",
  },
  {
    q: "Puis-je empêcher les collaborateurs de modifier leur signature ?",
    a: "Oui. L'administrateur définit champ par champ ce qui est modifiable et ce qui est verrouillé. Le logo, les mentions légales et la structure du gabarit restent intouchables, même si vous laissez le collaborateur ajuster son numéro de téléphone direct.",
  },
  {
    q: "Peut-on avoir plusieurs signatures par collaborateur ?",
    a: "Oui : une signature de premier message et une signature de réponse plus courte, par exemple, ou une signature par marque pour les commerciaux qui gèrent plusieurs entités.",
  },
  {
    q: "Comment vérifier le rendu avant de déployer ?",
    a: "Chaque gabarit dispose d'une prévisualisation multi-clients : Outlook Windows et Mac, Outlook Web, Gmail, Apple Mail, mobiles iOS et Android. Vous pouvez également vous envoyer un test avant publication.",
  },
  {
    q: "Les informations viennent-elles automatiquement de l'annuaire ?",
    a: "Oui. Les champs dynamiques se remplissent depuis Microsoft Entra ID ou Google Directory. Quand une fonction change dans l'annuaire, la signature suit sans intervention.",
  },
];

export const campaignsFaq: FaqItem[] = [
  {
    q: "Qu'est-ce qu'une campagne de bannière dans une signature mail ?",
    a: "C'est une bannière cliquable, statique ou animée, ajoutée sous la signature d'un groupe de collaborateurs pendant une période définie. Elle transforme chaque e-mail sortant en support de communication ciblé.",
  },
  {
    q: "Combien d'impressions peut-on espérer ?",
    a: "Comptez en moyenne une trentaine d'e-mails sortants par collaborateur et par jour. Une entreprise de 100 personnes génère ainsi de l'ordre de 300 000 impressions par an, auprès d'une audience déjà en relation avec elle.",
  },
  {
    q: "Peut-on cibler une bannière sur une seule équipe ?",
    a: "Oui. Le ciblage se fait par équipe, service, filiale, pays ou sélection manuelle de collaborateurs. Les commerciaux peuvent porter une bannière produit pendant que le support en porte une autre.",
  },
  {
    q: "Les campagnes se lancent-elles automatiquement ?",
    a: "Oui. Vous définissez une date de début et une date de fin ; la bannière apparaît et disparaît toute seule. Vous pouvez enchaîner plusieurs campagnes sur un trimestre.",
  },
  {
    q: "Peut-on suivre les clics sur une bannière ?",
    a: "Oui. Chaque campagne dispose de son suivi de clics, par période et par équipe, ce qui permet de comparer les messages entre eux et d'arbitrer le calendrier suivant.",
  },
  {
    q: "Une bannière animée s'affiche-t-elle partout ?",
    a: "Un GIF animé s'affiche sur la plupart des messageries modernes ; certaines versions d'Outlook n'affichent que la première image. C'est pourquoi nous recommandons de placer le message essentiel sur cette première image.",
  },
];

export const microsoftFaq: FaqItem[] = [
  {
    q: "Comment déployer une signature mail pour tous les utilisateurs Microsoft 365 ?",
    a: "Vous connectez votre tenant à Signally avec un consentement administrateur, vous déployez l'add-in depuis la section « Applications intégrées » du centre d'administration Microsoft 365, puis vous attribuez un gabarit à chaque groupe. Le déploiement complet prend une quinzaine de minutes.",
  },
  {
    q: "L'add-in fonctionne-t-il sur le nouveau Outlook ?",
    a: "Oui. L'add-in fonctionne sur Outlook Web, le nouveau Outlook pour Windows, Outlook Windows classique, Outlook pour Mac et Outlook mobile iOS et Android.",
  },
  {
    q: "Faut-il créer une règle de transport Exchange ?",
    a: "Non, et c'est un avantage : aucun reroutage de flux, aucun connecteur, aucune modification de votre routage sortant. La signature est insérée dans le message au moment de la rédaction.",
  },
  {
    q: "L'add-in a-t-il accès au contenu de mes e-mails ?",
    a: "Non. Il insère un bloc de signature dans le corps du message en cours de rédaction. Il ne lit pas, n'analyse pas et ne conserve pas le contenu de vos messages, et aucun e-mail ne transite par nos serveurs.",
  },
  {
    q: "Que se passe-t-il pour un nouvel arrivant ?",
    a: "Dès que son compte apparaît dans l'annuaire et qu'il appartient à un groupe rattaché à un gabarit, il obtient sa signature. Aucune action n'est demandée ni à lui ni à l'équipe informatique.",
  },
  {
    q: "Peut-on tester sur un groupe pilote avant de généraliser ?",
    a: "Oui. Le déploiement de l'add-in peut être limité à un groupe Microsoft 365 de votre choix, puis étendu à l'organisation entière une fois la validation faite.",
  },
];

export const googleFaq: FaqItem[] = [
  {
    q: "Comment mettre la même signature pour tous les utilisateurs Google Workspace ?",
    a: "Vous installez l'add-on Signally à l'échelle du domaine depuis la console d'administration Google, vous synchronisez l'annuaire, puis vous attribuez un gabarit à chaque unité organisationnelle ou groupe. La signature s'applique ensuite dans Gmail.",
  },
  {
    q: "Quelle différence avec le pied de page natif de Google Workspace ?",
    a: "Le pied de page de la console s'ajoute côté serveur, en bas de la conversation, avec une mise en forme très limitée. L'add-on Signally insère une signature HTML complète à la rédaction, avec logo, réseaux sociaux et bannière de campagne.",
  },
  {
    q: "Les unités organisationnelles sont-elles prises en compte ?",
    a: "Oui. Vous pouvez attribuer un gabarit différent par unité organisationnelle ou par groupe Google, ce qui couvre les organisations multi-filiales et multi-pays.",
  },
  {
    q: "La signature s'affiche-t-elle sur Gmail mobile ?",
    a: "Oui, la signature définie est appliquée aux messages rédigés depuis l'application Gmail, dans les limites de rendu propres aux clients mobiles.",
  },
  {
    q: "Signally envoie-t-il mes e-mails à ma place ?",
    a: "Non. Vos messages partent depuis votre propre compte Google Workspace. Nous n'intervenons ni dans l'envoi, ni dans le routage, ni dans la délivrabilité.",
  },
  {
    q: "Quelles autorisations sont demandées ?",
    a: "Un accès en lecture aux attributs d'annuaire nécessaires à la signature et l'autorisation d'insérer la signature à la rédaction. Aucun accès au contenu des messages n'est requis.",
  },
];

export const securityFaq: FaqItem[] = [
  {
    q: "Signally lit-il le contenu de mes e-mails ?",
    a: "Non. L'add-in insère un bloc de signature au moment de la rédaction. Le contenu du message n'est ni lu, ni analysé, ni stocké, et ne transite pas par nos serveurs.",
  },
  {
    q: "Où sont hébergées les données ?",
    a: "En France. Les gabarits, les visuels de campagne et les attributs d'annuaire synchronisés sont hébergés sur une infrastructure située sur le territoire français, soumise au RGPD.",
  },
  {
    q: "Quelles données personnelles sont traitées ?",
    a: "Uniquement les champs d'annuaire affichés dans la signature : nom, prénom, fonction, service, adresse e-mail, téléphone professionnel et rattachement organisationnel. C'est le principe de minimisation appliqué strictement.",
  },
  {
    q: "Signally est-il sous-traitant au sens du RGPD ?",
    a: "Oui. Signally agit comme sous-traitant de votre entreprise, responsable de traitement. Un accord de traitement des données précise les finalités, les durées de conservation et les mesures de sécurité.",
  },
  {
    q: "Que devient l'accès en cas de résiliation ?",
    a: "Vous récupérez vos gabarits et vos visuels, puis votre espace est supprimé. Aucune rétention n'est conservée au-delà des durées prévues au contrat.",
  },
  {
    q: "Vos serveurs sont-ils soumis à une législation extraterritoriale ?",
    a: "L'hébergement en France et l'absence de transfert hors Union européenne placent le service sous le seul droit européen, ce qui est précisément l'attente de nombreuses DSI et directions juridiques.",
  },
];

export const pricingFaq: FaqItem[] = [
  {
    q: "Combien coûte Signally pour 50, 100 ou 500 collaborateurs ?",
    a: "Le tarif est dégressif : 1,25 € HT par utilisateur et par mois jusqu'à 50 utilisateurs, 1,00 € jusqu'à 100, 0,75 € jusqu'à 500 et 0,50 € au-delà. Soit 62,50 € par mois pour 50 collaborateurs, 100 € pour 100 et 375 € pour 500. Le simulateur ci-dessus calcule votre montant exact.",
  },
  {
    q: "Toutes les fonctionnalités sont-elles incluses ?",
    a: "Oui. Éditeur, gabarits illimités, gestion des équipes, add-ins Microsoft et Google, campagnes de bannières, statistiques et support sont inclus quel que soit votre effectif. Il n'existe pas d'édition supérieure.",
  },
  {
    q: "Le générateur de signature est-il vraiment gratuit ?",
    a: "Oui. Créer une signature dans l'éditeur et l'installer manuellement dans votre messagerie ne coûte rien et ne demande pas de carte bancaire. L'abonnement concerne le déploiement automatique à l'échelle de l'entreprise et les campagnes.",
  },
  {
    q: "Comment est décompté un utilisateur ?",
    a: "Un utilisateur correspond à une boîte aux lettres qui reçoit une signature gérée par Signally. Les boîtes partagées et les alias ne sont pas facturés séparément.",
  },
  {
    q: "Que se passe-t-il si mon effectif change en cours d'année ?",
    a: "Le nombre d'utilisateurs actifs est ajusté ; en franchissant un palier, vous basculez sur le tarif dégressif correspondant.",
  },
  {
    // Laissé tel quel, volontairement : le prototype signale ce point comme
    // à confirmer par Signally. Rien n'est inventé à sa place.
    q: "Y a-t-il un engagement ?",
    a: "Élément à confirmer par vos soins : durée d'engagement, facturation mensuelle ou annuelle, conditions de résiliation.",
  },
];

export const articleFaq: FaqItem[] = [
  {
    q: "Peut-on déployer une signature Outlook sans passer par le service informatique ?",
    a: "L'installation initiale de l'add-in demande un consentement administrateur du tenant, donc une intervention de l'équipe informatique. Ensuite, la création des gabarits et le lancement des campagnes se font sans elle.",
  },
  {
    q: "Combien de temps prend le déploiement sur 200 boîtes ?",
    a: "Le déploiement technique de l'add-in prend une quinzaine de minutes, quel que soit le nombre de boîtes. La conception du gabarit et le rattachement des équipes représentent en général une demi-journée.",
  },
  {
    q: "La signature apparaît-elle dans les éléments envoyés ?",
    a: "Oui, puisqu'elle est insérée à la rédaction. C'est la différence majeure avec une règle de transport Exchange, qui ajoute le pied de page après l'envoi.",
  },
  {
    q: "Que faire des signatures locales déjà configurées par les collaborateurs ?",
    a: "Elles peuvent être remplacées par le gabarit d'entreprise lors du déploiement. Nous recommandons de communiquer en amont et de lancer d'abord un groupe pilote.",
  },
];

/** Données structurées FAQPage, demandées par le plan SEO du prototype. */
export function faqPageLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
