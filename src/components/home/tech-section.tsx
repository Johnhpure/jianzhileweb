import { Brain, GitBranch, RefreshCw, ShieldCheck } from "lucide-react";
import {
  MotionWrapper,
  MotionItem,
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/components/ui/motion-wrapper";

const techPillars = [
  {
    icon: Brain,
    title: "NLP 语义理解引擎",
    desc: "基于 Transformer 架构的简历与 JD 深度解析，支持 PDF、Word、图片等 12 种格式自动识别与结构化提取。中英文混合简历解析准确率达 97.3%，行业术语识别覆盖 36 个细分领域。",
    detail: "已处理 2,600 万+ 段工作经历描述",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-100 dark:border-blue-900/50",
  },
  {
    icon: GitBranch,
    title: "多维度人岗匹配",
    desc: "涵盖硬技能、软技能、行业经验、教育背景、职业发展轨迹等 23 个评估维度。通过加权图神经网络建模岗位与人才的深层匹配关系，而非简单的关键词匹配。",
    detail: "相比关键词匹配，召回率提升 41%",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-100 dark:border-emerald-900/50",
  },
  {
    icon: RefreshCw,
    title: "自适应学习系统",
    desc: "根据 HR 的面试反馈和最终录用结果持续优化推荐模型。每家企业拥有独立的匹配权重参数——用得越多，推荐越精准，真正理解你的用人标准。",
    detail: "平均使用 3 个月后匹配精度提升 28%",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-100 dark:border-violet-900/50",
  },
  {
    icon: ShieldCheck,
    title: "隐私计算与安全架构",
    desc: "采用联邦学习架构，候选人数据在企业侧加密处理，企业间数据零共享。全链路 AES-256 加密存储 + TLS 1.3 传输加密，已通过国家信息安全等级保护三级认证。",
    detail: "支持私有化部署，数据不出企业网络",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-100 dark:border-amber-900/50",
  },
];

export function TechSection() {
  return (
    <section className="bg-white py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper variants={staggerContainer} viewport={viewportConfig}>
          <MotionItem as="p" variants={fadeInUp} className="text-center text-sm font-semibold uppercase tracking-widest text-primary dark:text-primary-light">
            技术实力
          </MotionItem>
          <MotionItem as="h2" variants={fadeInUp} className="mt-3 text-center text-3xl font-bold text-gray-900 dark:text-white">
            不是简单的关键词匹配，是真正的语义理解
          </MotionItem>
          <MotionItem as="p" variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400">
            简职了的 AI 引擎经过 800 万+ 真实招聘场景训练，能理解&quot;3 年 Java
            后端&quot;与&quot;熟悉 Spring 生态的中级工程师&quot;是同一类人才
          </MotionItem>
        </MotionWrapper>

        <MotionWrapper className="mt-14 grid gap-6 sm:grid-cols-2" variants={staggerContainer} viewport={viewportConfig}>
          {techPillars.map((t) => (
            <MotionItem
              key={t.title}
              variants={fadeInUp}
              className={`rounded-2xl border ${t.border} ${t.bg} p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <t.icon className={`mb-4 h-10 w-10 ${t.color}`} />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                {t.desc}
              </p>
              <p className={`mt-4 text-xs font-semibold ${t.color}`}>
                {t.detail}
              </p>
            </MotionItem>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
