const ipCounts = new Map<string, { count: number; resetAt: number }>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000;

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipCounts.get(ip);

  if (!entry || now > entry.resetAt) {
    ipCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

export function checkHoneypot(value: string | undefined): boolean {
  return !value || value.length === 0;
}
