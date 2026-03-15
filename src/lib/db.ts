import { Pool } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    // 捕获连接池级别的意外错误，防止未处理异常导致进程崩溃
    pool.on("error", (err) => {
      console.error("数据库连接池意外错误:", err);
    });
  }
  return pool;
}

/**
 * 优雅关闭连接池
 * 在进程退出前调用，确保所有连接正确释放
 */
async function gracefulShutdown() {
  if (pool) {
    console.log("正在关闭数据库连接池...");
    await pool.end();
    pool = null;
    console.log("数据库连接池已关闭");
  }
}

// 注册进程退出信号处理
process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
