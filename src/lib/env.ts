import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SITE_ENV: z
    .enum(["development", "preview", "production"])
    .default("development"),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_HOTJAR_SITE_ID: z.string().optional(),
  NEXT_PUBLIC_POLICY_VERSION: z.string().default("1.0.0"),
  TURNSTILE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error("Environment validation failed:", result.error.format());
    throw new Error("Invalid environment variables");
  }
  return result.data;
}

export function getEnv() {
  return {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    siteEnv: (process.env.NEXT_PUBLIC_SITE_ENV ?? "development") as
      | "development"
      | "preview"
      | "production",
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    hotjarId: process.env.NEXT_PUBLIC_HOTJAR_SITE_ID,
    policyVersion: process.env.NEXT_PUBLIC_POLICY_VERSION ?? "1.0.0",
    isProduction: process.env.NEXT_PUBLIC_SITE_ENV === "production",
    isPreview: process.env.NEXT_PUBLIC_SITE_ENV === "preview",
  };
}
