import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { BEndValue } from "@/components/home/b-end-value";
import { CEndValue } from "@/components/home/c-end-value";
import { TrustSection } from "@/components/home/trust-section";
import { TechSection } from "@/components/home/tech-section";
import { ScenariosSection } from "@/components/home/scenarios-section";
import { SecuritySection } from "@/components/home/security-section";

export const metadata: Metadata = generatePageMetadata({
  title: `${siteConfig.name} - AI 驱动的智能招聘平台`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.company.name,
            url: siteConfig.url,
            email: siteConfig.company.email,
          }),
        }}
      />
      <HeroSection />
      <StatsSection />
      <BEndValue />
      <CEndValue />
      <TechSection />
      <ScenariosSection />
      <SecuritySection />
      <TrustSection />
    </>
  );
}
