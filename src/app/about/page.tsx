import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = generatePageMetadata({
  title: "关于我们",
  description:
    "简职了——让每一次招聘和求职都更有效率、更有尊严。了解我们的使命、团队和发展历程。",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
