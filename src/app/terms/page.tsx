import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = generatePageMetadata({
  title: "用户协议",
  description: "简职了用户协议，了解使用简职了服务的条款和条件。",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="prose prose-gray mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-xl bg-amber-50 p-4 text-sm text-amber-700">
          本页面为占位内容，正式上线前须替换为经法务审核的正式用户协议文本。
        </div>

        <h1>用户协议</h1>
        <p className="text-sm text-gray-500">
          版本：{siteConfig.policyVersion} | 生效日期：（待填写）
        </p>

        <h2>1. 服务说明</h2>
        <p>
          简职了（以下简称"本平台"）是一款 AI
          驱动的智能招聘平台，为企业 HR
          提供智能简历筛选服务，为求职者提供智能投递服务。
        </p>

        <h2>2. 用户义务</h2>
        <p>
          用户应提供真实、准确的信息，不得利用本平台从事违法活动或损害他人合法权益。
        </p>

        <h2>3. 知识产权</h2>
        <p>
          本平台的所有内容（包括但不限于文字、图片、软件、技术）的知识产权归本平台所有。
        </p>

        <h2>4. 免责声明</h2>
        <p>
          本平台提供的 AI
          分析结果仅供参考，不构成招聘或求职决策的唯一依据。
        </p>

        <h2>5. 协议变更</h2>
        <p>
          本平台有权根据需要修改本协议。修改后的协议将在本页面公布，继续使用本服务即视为接受修改后的协议。
        </p>

        <h2>6. 联系方式</h2>
        <p>
          如对本协议有任何疑问，请联系：{siteConfig.company.email}
        </p>
      </div>
    </section>
  );
}
