import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "隐私政策",
  description: "简职了隐私政策，了解我们如何收集、使用和保护您的个人信息。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16">
      <div className="prose prose-gray mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-xl bg-amber-50 p-4 text-sm text-amber-700">
          本页面为占位内容，正式上线前须替换为经法务审核的正式隐私政策文本。
        </div>

        <h1>隐私政策</h1>
        <p className="text-sm text-gray-500">
          版本：{siteConfig.policyVersion} | 生效日期：（待填写）
        </p>

        <h2>1. 信息收集</h2>
        <p>
          我们通过官网表单收集以下信息：姓名、手机号、公司名称、职位、招聘需求信息、求职意向信息等。
          这些信息仅用于为您提供服务和沟通。
        </p>

        <h2>2. 信息使用</h2>
        <p>
          收集的信息将用于：响应您的咨询和服务请求、改进产品和服务质量、发送相关的产品信息（经您同意）。
        </p>

        <h2>3. 信息保护</h2>
        <p>
          我们采用行业标准的安全措施保护您的个人信息，包括数据加密、访问控制和安全审计。
        </p>

        <h2>4. 信息共享</h2>
        <p>
          我们不会将您的个人信息出售给第三方。仅在法律要求或获得您明确同意的情况下，我们才会共享您的信息。
        </p>

        <h2>5. Cookie 与分析</h2>
        <p>
          我们使用分析工具（如 Google Analytics、Hotjar）来改进产品体验。
          这些工具仅在您明确同意后才会加载。您可以随时撤回同意。
        </p>

        <h2>6. 您的权利</h2>
        <p>
          您有权访问、更正或删除您的个人信息。如需行使相关权利，请联系{" "}
          {siteConfig.company.email}。
        </p>

        <h2>7. 联系我们</h2>
        <p>
          如对本隐私政策有任何疑问，请联系：{siteConfig.company.email}
        </p>
      </div>
    </section>
  );
}
