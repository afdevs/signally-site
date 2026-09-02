import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localizeAnswerLinks } from './localizeAnswerLinks.ts';

const NO_ARTICLES = new Map<string, string>();
const FR_IDENTITY = new Map<string, string>([['creer-une-signature-mail', 'creer-une-signature-mail']]);
const EN_SLUGS = new Map<string, string>([['creer-une-signature-mail', 'create-professional-email-signature']]);

// --- Rejet : la liste blanche se juge sur ce qu'elle refuse. ---

test('schéma absolu https:// => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Site](https://evil.example)', 'fr', NO_ARTICLES),
    'Site',
  );
});

test('//host protocole-relatif => texte brut (hors origine dans le navigateur)', () => {
  assert.equal(
    localizeAnswerLinks('[Phishing](//evil.example/phish)', 'fr', NO_ARTICLES),
    'Phishing',
  );
});

test('javascript: => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Cliquez](javascript:alert(1))', 'fr', NO_ARTICLES),
    'Cliquez',
  );
});

test('mailto: => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Écrire](mailto:x@y.z)', 'fr', NO_ARTICLES),
    'Écrire',
  );
});

test('data: => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Voir](data:text/html,x)', 'fr', NO_ARTICLES),
    'Voir',
  );
});

test('chemin relatif ../secret => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Secret](../secret)', 'fr', NO_ARTICLES),
    'Secret',
  );
});

test("cible sans slash initial => texte brut", () => {
  assert.equal(
    localizeAnswerLinks('[Relatif](relatif)', 'fr', NO_ARTICLES),
    'Relatif',
  );
});

test('chemin absent de la table des pages => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Inconnu](/page-inexistante)', 'fr', NO_ARTICLES),
    'Inconnu',
  );
});

test('slug de blog absent de la carte => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Article](/blog/slug-inconnu)', 'fr', NO_ARTICLES),
    'Article',
  );
});

test('chaîne de requête jetée, le lien légitime survit', () => {
  assert.equal(
    localizeAnswerLinks('[Tarifs](/tarifs?utm=x)', 'fr', NO_ARTICLES),
    '[Tarifs](/tarifs)',
  );
});

test('fragment non conforme jeté, le lien légitime survit sans lui', () => {
  assert.equal(
    localizeAnswerLinks('[Tarifs](/tarifs#<script>)', 'fr', NO_ARTICLES),
    '[Tarifs](/tarifs)',
  );
});

// Ces deux cibles sont malformées mais `parseAnswer` les reconnaît quand même :
// son motif de cible (`[^)\s]+`) accepte une parenthèse ouvrante non appariée.
// Si ce module ne les voyait pas, elles arriveraient intactes jusqu'au rendu et
// deviendraient des liens hors origine — le contournement exact que la liste
// blanche existe pour empêcher.

test('cible malformée avec ] et parenthèse non appariée, schéma absolu => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Piège](https://evil.example](/tarifs)', 'fr', NO_ARTICLES),
    'Piège',
  );
});

test('cible malformée déguisée en chemin interne, //host caché => texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Piège](/tarifs](//evil.example)', 'fr', NO_ARTICLES),
    'Piège',
  );
});

// --- Acceptation : les chemins réels du corpus, dans les trois langues. ---

test('/tarifs se localise en fr, en, es', () => {
  assert.equal(localizeAnswerLinks('[Tarifs](/tarifs)', 'fr', NO_ARTICLES), '[Tarifs](/tarifs)');
  assert.equal(localizeAnswerLinks('[Tarifs](/tarifs)', 'en', NO_ARTICLES), '[Tarifs](/en/pricing)');
  assert.equal(localizeAnswerLinks('[Tarifs](/tarifs)', 'es', NO_ARTICLES), '[Tarifs](/es/precios)');
});

test('/securite-rgpd se localise en en, es', () => {
  assert.equal(
    localizeAnswerLinks('[Sécurité](/securite-rgpd)', 'en', NO_ARTICLES),
    '[Sécurité](/en/security-gdpr)',
  );
  assert.equal(
    localizeAnswerLinks('[Sécurité](/securite-rgpd)', 'es', NO_ARTICLES),
    '[Sécurité](/es/seguridad-rgpd)',
  );
});

test('/ (racine) se localise en fr, en, es', () => {
  assert.equal(localizeAnswerLinks('[Accueil](/)', 'fr', NO_ARTICLES), '[Accueil](/)');
  assert.equal(localizeAnswerLinks('[Accueil](/)', 'en', NO_ARTICLES), '[Accueil](/en)');
  assert.equal(localizeAnswerLinks('[Accueil](/)', 'es', NO_ARTICLES), '[Accueil](/es)');
});

test('/integrations/microsoft-365-outlook se localise en es', () => {
  assert.equal(
    localizeAnswerLinks('[Microsoft 365](/integrations/microsoft-365-outlook)', 'es', NO_ARTICLES),
    '[Microsoft 365](/es/integraciones/microsoft-365-outlook)',
  );
});

test('un fragment conforme est conservé après localisation', () => {
  assert.equal(
    localizeAnswerLinks('[Simulateur](/tarifs#simulateur)', 'en', NO_ARTICLES),
    '[Simulateur](/en/pricing#simulateur)',
  );
});

// --- Articles de blog : le piège des slugs qui diffèrent par langue. ---

test('carte de traduction : le slug FR devient le slug EN', () => {
  assert.equal(
    localizeAnswerLinks('[Signature mail](/blog/creer-une-signature-mail)', 'en', EN_SLUGS),
    '[Signature mail](/en/blog/create-professional-email-signature)',
  );
});

test('carte identité en fr : le chemin ne change pas', () => {
  assert.equal(
    localizeAnswerLinks('[Signature mail](/blog/creer-une-signature-mail)', 'fr', FR_IDENTITY),
    '[Signature mail](/blog/creer-une-signature-mail)',
  );
});

test('carte vide => article réduit en texte brut', () => {
  assert.equal(
    localizeAnswerLinks('[Signature mail](/blog/creer-une-signature-mail)', 'en', NO_ARTICLES),
    'Signature mail',
  );
});

// --- Robustesse : le module ne touche qu'aux cibles de liens. ---

test('plusieurs liens dans le même paragraphe sont traités indépendamment', () => {
  const input = 'Voir [Tarifs](/tarifs) ou [Sécurité](/securite-rgpd) pour plus de détails.';
  const expected = 'Voir [Tarifs](/en/pricing) ou [Sécurité](/en/security-gdpr) pour plus de détails.';
  assert.equal(localizeAnswerLinks(input, 'en', NO_ARTICLES), expected);
});

test('un lien dans un élément de liste est réécrit, le reste du markdown intact', () => {
  const input = '- [Tarifs](/tarifs)\n- [Inconnu](/page-inexistante)';
  const expected = '- [Tarifs](/en/pricing)\n- Inconnu';
  assert.equal(localizeAnswerLinks(input, 'en', NO_ARTICLES), expected);
});

test('crochets non appariés dans un libellé : aucun lien reconnu, texte inchangé', () => {
  const input = 'Voir [Tarifs [Promo]](/tarifs) maintenant.';
  assert.equal(localizeAnswerLinks(input, 'en', NO_ARTICLES), input);
});

test('texte sans aucun lien traverse le module inchangé', () => {
  const input = 'Aucun lien ici, juste du texte simple.';
  assert.equal(localizeAnswerLinks(input, 'fr', NO_ARTICLES), input);
});
