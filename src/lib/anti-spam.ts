/**
 * 反垃圾：内存级 IP 限流 + Honeypot 检测
 * 注意：生产环境建议使用 Redis（如 @upstash/ratelimit）实现分布式限流
 */

const ipCounts = new Map<string, { count: number; resetAt: number }>();

const MAX_REQUESTS = 5;
const WINDOW_MS = 60_000;

// 定期清理过期条目，防止内存泄漏
const CLEANUP_INTERVAL_MS = 5 * 60_000; // 每 5 分钟清理一次
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of ipCounts) {
    if (now > entry.resetAt) {
      ipCounts.delete(ip);
    }
  }
}, CLEANUP_INTERVAL_MS).unref?.(); // unref 确保定时器不阻止进程退出

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
