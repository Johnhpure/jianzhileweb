import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { EmployerSolutionContent } from "@/components/solutions/employer-content";

export const metadata: Metadata = generatePageMetadata({
  title: "企业 HR 智能招聘方案",
  description:
    "AI 驱动的简历筛选和候选人管理平台，帮助 HR 将筛选效率提升 10 倍。",
  path: "/solutions/employer",
});

export default function EmployerSolutionPage() {
  return <EmployerSolutionContent />;
}
