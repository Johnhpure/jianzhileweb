import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ChevronDown } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { PricingFAQ } from "@/components/pricing/faq-accordion";

export const metadata: Metadata = generatePageMetadata({
  title: "定价方案",
  description:
    "简职了企业招聘方案定价。免费体验版、企业标准版、企业旗舰版，满足不同规模企业的招聘需求。",
  path: "/pricing",
});

const plans = [
  {
    name: "免费体验版",
    price: "¥0",
    period: "/月",
    desc: "快速体验 AI 招聘能力，适合小团队或个人 HR 评估产品",
    highlight: false,
    features: [
      { label: "简历处理量", value: "50 份/月" },
      { label: "活跃岗位数", value: "1 个" },
      { label: "团队账号", value: "1 个" },
      { label: "AI 简历评分", value: true },
      { label: "JD 智能解析", value: true },
      { label: "面试问题生成", value: "基础" },
      { label: "API 对接", value: false },
      { label: "专属客户成功经理", value: false },
      { label: "数据导出", value: "基础 CSV" },
      { label: "数据保留期", value: "30 天" },
    ],
    cta: "免费注册",
  },
  {
    name: "企业标准版",
    price: "联系我们",
    period: "获取报价",
    desc: "适合 50-500 人规模企业的日常社招和校招需求",
    highlight: true,
    features: [
      { label: "简历处理量", value: "500 份/月" },
      { label: "活跃岗位数", value: "10 个" },
      { label: "团队账号", value: "5 个" },
      { label: "AI 简历评分", value: true },
      { label: "JD 智能解析", value: true },
      { label: "面试问题生成", value: "完整" },
      { label: "API 对接", value: "可选" },
      { label: "专属客户成功经理", value: false },
      { label: "数据导出", value: "完整 Excel" },
      { label: "数据保留期", value: "12 个月" },
    ],
    cta: "联系销售",
  },
  {
    name: "企业旗舰版",
    price: "联系我们",
    period: "定制方案",
    desc: "适合大型企业批量招聘、深度定制和私有化部署需求",
    highlight: false,
    features: [
      { label: "简历处理量", value: "不限量" },
      { label: "活跃岗位数", value: "不限" },
      { label: "团队账号", value: "自定义" },
      { label: "AI 简历评分", value: true },
      { label: "JD 智能解析", value: true },
      { label: "面试问题生成", value: "完整+定制" },
      { label: "API 对接", value: true },
      { label: "专属客户成功经理", value: true },
      { label: "数据导出", value: "完整+API" },
      { label: "数据保留期", value: "永久" },
    ],
    cta: "联系销售",
  },
];

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-5 w-5 text-emerald-500" />;
  if (value === false) return <X className="h-5 w-5 text-gray-300 dark:text-slate-600" />;
  return <span className="text-sm text-gray-700 dark:text-slate-300">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            选择适合你的方案
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-slate-400">
            从免费体验开始，按需升级。所有方案均包含核心 AI 招聘能力。
          </p>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-bg">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlight
                  ? "border-blue-200 bg-blue-50/50 shadow-lg ring-2 ring-blue-600 dark:border-blue-800 dark:bg-blue-950/30 dark:ring-blue-500"
                  : "border-gray-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                  推荐
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">{plan.desc}</p>
              <div className="mt-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="ml-1 text-sm text-gray-500 dark:text-slate-400">
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600 dark:text-slate-400">{f.label}</span>
                    <FeatureValue value={f.value} />
                  </li>
                ))}
              </ul>

              <Link
                href="/contact?tab=employer"
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                    : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* All plans include */}
      <section className="bg-white py-16 dark:bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-gray-900 dark:text-white">
            所有方案均包含
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-gray-500 dark:text-slate-400">
            无论选择哪个版本，你都能获得以下核心能力
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "NLP 语义简历解析引擎",
              "23 维度人岗匹配算法",
              "AI 面试问题生成",
              "简历格式自动标准化",
              "候选人去重与合并",
              "AES-256 数据加密",
              "TLS 1.3 传输加密",
              "RBAC 权限管理",
              "7×12 小时在线客服",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-sm text-gray-700 dark:text-slate-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingFAQ />
    </>
  );
}
