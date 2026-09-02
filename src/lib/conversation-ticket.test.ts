import { test } from 'node:test';
import assert from 'node:assert/strict';
import { issueConversationTicket, verifyConversationTicket } from './conversation-ticket.ts';

const SECRET = 'un-secret-partagé';
const CONVERSATION = '10771105-87d9-452e-aa12-eda02b2acf75';
const VISITOR = 'fb854b75-8c40-45e0-8533-01bb958f4dc5';

function ticket(): string {
  const issued = issueConversationTicket(CONVERSATION, VISITOR, SECRET);
  assert.ok(issued !== undefined);
  return issued;
}

test('un ticket émis ici est accepté pour son couple', () => {
  assert.equal(verifyConversationTicket(ticket(), CONVERSATION, VISITOR, SECRET), true);
});

test('secret absent => aucun ticket émis, aucun ticket accepté', () => {
  assert.equal(issueConversationTicket(CONVERSATION, VISITOR, ''), undefined);
  assert.equal(verifyConversationTicket(ticket(), CONVERSATION, VISITOR, ''), false);
});

test('ticket absent => false', () => {
  assert.equal(verifyConversationTicket(undefined, CONVERSATION, VISITOR, SECRET), false);
});

test("le ticket d'une autre conversation ne sert pas", () => {
  const other = '00000000-0000-4000-8000-000000000000';
  assert.equal(verifyConversationTicket(ticket(), other, VISITOR, SECRET), false);
});

test("le ticket d'un autre visiteur ne sert pas", () => {
  assert.equal(verifyConversationTicket(ticket(), CONVERSATION, 'un-autre-visiteur', SECRET), false);
});

test('un autre secret ne signe pas le même ticket', () => {
  assert.equal(verifyConversationTicket(ticket(), CONVERSATION, VISITOR, 'autre-secret'), false);
});

// C'est le cœur du contournement que ce module ferme : un uuid inventé n'est
// pas accompagné d'un ticket, donc il n'exempte pas du défi.
test('un conversationId inventé sans ticket => false', () => {
  assert.equal(
    verifyConversationTicket(undefined, '11111111-2222-4333-8444-555555555555', VISITOR, SECRET),
    false,
  );
});

test('expiration dépassée => false', () => {
  const past = Math.floor(Date.now() / 1000) - 1;
  // Reconstruit à la main : la seule façon de fabriquer un ticket expiré sans
  // déplacer l'horloge du test.
  const forged = ticket().replace(/^v1\.\d+\./, `v1.${past}.`);
  assert.equal(verifyConversationTicket(forged, CONVERSATION, VISITOR, SECRET), false);
});

test('expiration falsifiée => false, la signature la couvre', () => {
  const future = Math.floor(Date.now() / 1000) + 86_400 * 365;
  const forged = ticket().replace(/^v1\.\d+\./, `v1.${future}.`);
  assert.equal(verifyConversationTicket(forged, CONVERSATION, VISITOR, SECRET), false);
});

test('formes malformées => false, sans lever', () => {
  for (const malformed of [
    '',
    'v1',
    'v1.',
    'v1.abc.signature',
    'v2.9999999999.signature',
    ticket().slice(0, -4),
    `${ticket()}.de-trop`,
  ]) {
    assert.equal(
      verifyConversationTicket(malformed, CONVERSATION, VISITOR, SECRET),
      false,
      `accepté à tort : ${malformed}`,
    );
  }
});
