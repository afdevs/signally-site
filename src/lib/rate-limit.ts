/**
 * Limitation de débit en mémoire, par adresse IP.
 *
 * `createRateLimiter` fabrique des instances indépendantes (chacune son
 * `Map`, sa fenêtre, son plafond) : le formulaire de contact et le chat
 * ont chacun leur budget, sans se manger l'un l'autre.
 *
 * Le compteur reste local au processus, pour un budget comme pour l'autre.
 * Si le site passe en mode cluster (voir `ecosystem.config.cjs`, qui
 * l'interdit aujourd'hui), chaque instance tiendrait son propre compteur
 * et la limite réelle serait multipliée par le nombre d'instances : il
 * faudrait alors un magasin partagé (Redis).
 */

type Bucket = { count: number; resetAt: number };

export type RateResult = { allowed: boolean; retryAfterSeconds: number };

export function createRateLimiter({ windowMs, max }: { windowMs: number; max: number }) {
  const buckets = new Map<string, Bucket>();

  /** Purge paresseuse : évite que la Map ne grandisse indéfiniment. */
  function sweep(now: number): void {
    if (buckets.size < 500) return;
    for (const [key, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(key);
    }
  }

  function check(ip: string): RateResult {
    const now = Date.now();
    sweep(now);

    const bucket = buckets.get(ip);

    if (!bucket || bucket.resetAt <= now) {
      buckets.set(ip, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfterSeconds: 0 };
    }

    bucket.count += 1;

    if (bucket.count > max) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
      };
    }

    return { allowed: true, retryAfterSeconds: 0 };
  }

  return { check };
}

export const checkRateLimit = createRateLimiter({ windowMs: 10 * 60 * 1000, max: 5 }).check;

/**
 * Adresse IP du client. Derrière un reverse proxy (nginx, Traefik),
 * `x-forwarded-for` contient la chaîne complète : la première entrée
 * est le client d'origine.
 */
export function clientIp(request: Request, fallback?: string): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();
  return request.headers.get('x-real-ip') ?? fallback ?? 'unknown';
}
