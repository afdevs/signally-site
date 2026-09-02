import { test } from 'node:test';
import assert from 'node:assert/strict';
import { verifyTurnstile } from './turnstile.ts';

type FetchCall = { input: string; init?: RequestInit };

function fakeFetch(response: () => Promise<Response> | Response) {
  const calls: FetchCall[] = [];
  const fn = (async (input: RequestInfo | URL, init?: RequestInit) => {
    calls.push({ input: String(input), init });
    return response();
  }) as typeof fetch;
  return { fn, calls };
}

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status });
}

test('clé absente => true, sans appel réseau', async () => {
  const { fn, calls } = fakeFetch(() => jsonResponse({ success: true }));
  const result = await verifyTurnstile('un-jeton', '1.2.3.4', { fetch: fn, secret: '' });
  assert.equal(result, true);
  assert.equal(calls.length, 0);
});

test('jeton absent avec secret configuré => false, sans appel réseau', async () => {
  const { fn, calls } = fakeFetch(() => jsonResponse({ success: true }));
  const result = await verifyTurnstile(undefined, '1.2.3.4', { fetch: fn, secret: 'un-secret' });
  assert.equal(result, false);
  assert.equal(calls.length, 0);
});

test('réponse Cloudflare success:true => true', async () => {
  const { fn } = fakeFetch(() => jsonResponse({ success: true }));
  const result = await verifyTurnstile('un-jeton', '1.2.3.4', { fetch: fn, secret: 'un-secret' });
  assert.equal(result, true);
});

test("réponse Cloudflare success:false => false", async () => {
  const { fn } = fakeFetch(() => jsonResponse({ success: false, 'error-codes': ['invalid-input-response'] }));
  const result = await verifyTurnstile('un-jeton', '1.2.3.4', { fetch: fn, secret: 'un-secret' });
  assert.equal(result, false);
});

test('fetch qui rejette => false (échec fermé)', async () => {
  const fn = (async () => {
    throw new Error('panne réseau simulée');
  }) as typeof fetch;
  const result = await verifyTurnstile('un-jeton', '1.2.3.4', { fetch: fn, secret: 'un-secret' });
  assert.equal(result, false);
});

test('réponse HTTP 500 => false', async () => {
  const { fn } = fakeFetch(() => jsonResponse({ success: true }, 500));
  const result = await verifyTurnstile('un-jeton', '1.2.3.4', { fetch: fn, secret: 'un-secret' });
  assert.equal(result, false);
});

test('corps JSON illisible => false', async () => {
  const fn = (async () => new Response('pas-du-json', { status: 200 })) as typeof fetch;
  const result = await verifyTurnstile('un-jeton', '1.2.3.4', { fetch: fn, secret: 'un-secret' });
  assert.equal(result, false);
});

test("l'IP est transmise dans le champ remoteip du corps posté", async () => {
  const { fn, calls } = fakeFetch(() => jsonResponse({ success: true }));
  await verifyTurnstile('un-jeton', '9.9.9.9', { fetch: fn, secret: 'un-secret' });
  assert.equal(calls.length, 1);
  const body = calls[0]!.init?.body;
  const params = new URLSearchParams(body as string);
  assert.equal(params.get('remoteip'), '9.9.9.9');
  assert.equal(params.get('secret'), 'un-secret');
  assert.equal(params.get('response'), 'un-jeton');
});
