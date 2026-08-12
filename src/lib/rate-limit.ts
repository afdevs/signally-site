/**
 * Limitation de débit en mémoire, par adresse IP.
 *
 * Suffisant pour un formulaire de contact sur une instance unique.
 * Si le site passe derrière plusieurs répliques, il faudra un magasin
 * partagé (Redis) : ce compteur est local au processus.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

/** Purge paresseuse : évite que la Map ne grandisse indéfiniment. */
function sweep(now: number): void {
  if (buckets.size < 500) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export type RateResult = { allowed: boolean; retryAfterSeconds: number };

export function checkRateLimit(ip: string): RateResult {
  const now = Date.now();
  sweep(now);

  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  bucket.count += 1;

  if (bucket.count > MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

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
