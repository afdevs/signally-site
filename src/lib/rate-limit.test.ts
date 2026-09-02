import { test, mock } from 'node:test';
import assert from 'node:assert/strict';
import { createRateLimiter } from './rate-limit.ts';

test('la n-ième requête sous la limite est autorisée', () => {
  const limiter = createRateLimiter({ windowMs: 1000, max: 3 });
  const first = limiter.check('1.1.1.1');
  const second = limiter.check('1.1.1.1');
  const third = limiter.check('1.1.1.1');
  assert.equal(first.allowed, true);
  assert.equal(second.allowed, true);
  assert.equal(third.allowed, true);
});

test('la requête au-delà de max est refusée avec un retryAfterSeconds positif', () => {
  const limiter = createRateLimiter({ windowMs: 1000, max: 2 });
  limiter.check('2.2.2.2');
  limiter.check('2.2.2.2');
  const blocked = limiter.check('2.2.2.2');
  assert.equal(blocked.allowed, false);
  assert.ok(blocked.retryAfterSeconds > 0);
});

test('deux limiteurs créés séparément ne partagent pas leurs seaux', () => {
  const contactLimiter = createRateLimiter({ windowMs: 1000, max: 1 });
  const chatLimiter = createRateLimiter({ windowMs: 1000, max: 1 });
  const contactResult = contactLimiter.check('3.3.3.3');
  const chatResult = chatLimiter.check('3.3.3.3');
  assert.equal(contactResult.allowed, true);
  assert.equal(chatResult.allowed, true);
});

test('le seau repart à zéro après windowMs', () => {
  mock.timers.enable({ apis: ['Date'], now: 0 });
  try {
    const limiter = createRateLimiter({ windowMs: 1000, max: 1 });
    limiter.check('4.4.4.4');
    const blocked = limiter.check('4.4.4.4');
    assert.equal(blocked.allowed, false);

    mock.timers.tick(1001);

    const allowed = limiter.check('4.4.4.4');
    assert.equal(allowed.allowed, true);
  } finally {
    mock.timers.reset();
  }
});

test('deux IP différentes ont des seaux indépendants', () => {
  const limiter = createRateLimiter({ windowMs: 1000, max: 1 });
  const first = limiter.check('5.5.5.5');
  const second = limiter.check('6.6.6.6');
  assert.equal(first.allowed, true);
  assert.equal(second.allowed, true);
});
