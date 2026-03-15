import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
    const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

    return {
        rules: {
            userAgent: "*",
            allow: isProduction ? "/" : undefined,
            disallow: isProduction ? ["/api/"] : "/",
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    };
}
