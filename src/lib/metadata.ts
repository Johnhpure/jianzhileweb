import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "zh_CN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
