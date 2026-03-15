import Image from "next/image";
import { CheckCircle } from "lucide-react";
import {
  MotionWrapper,
  MotionItem,
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/components/ui/motion-wrapper";

const scenarios = [
  {
    tag: "校园招聘",
    title: "秋招万份简历，快速锁定优质候选人",
    image: "/images/hr-dashboard-office.png",
    story:
      "每年秋招季，大量校园简历涌入，HR 团队的筛选压力巨大。简职了帮助企业在短时间内完成全量简历评估，自动按岗位需求排序候选人，让 HR 把精力聚焦在真正需要人工判断的面试环节。",
    result: "筛选效率平均提升 10 倍以上",
    accent: "border-blue-200 dark:border-blue-800",
    tagBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
  },
  {
    tag: "社会招聘",
    title: "技术岗精准匹配，缩短招聘周期",
    image: "/images/case-manufacturing-hr.png",
    story:
      "技术类岗位的简历筛选门槛高，HR 很难准确评估候选人的技术水平。简职了通过多维度技能分析，帮助 HR 快速识别技术匹配度高的候选人，显著缩短了社招周期。",
    result: "招聘周期平均缩短 60%",
    accent: "border-emerald-200 dark:border-emerald-800",
    tagBg: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
  },
  {
    tag: "求职辅助",
    title: "告别盲目海投，精准匹配理想岗位",
    image: "/images/candidate-hired-success.png",
    story:
      "很多求职者面临信息过载的问题——招聘网站上相似岗位几百条，越看越迷茫。简职了帮助求职者分析自身优势和市场需求的匹配度，推荐真正适合的岗位方向。",
    result: "投递回复率平均提升 5 倍",
    accent: "border-violet-200 dark:border-violet-800",
    tagBg: "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300",
  },
  {
    tag: "批量招聘",
    title: "旺季紧急补员，快速到岗",
    image: "/images/case-enterprise-team.png",
    story:
      "物流、零售等行业在旺季需要短时间内大量补充一线员工。简职了帮助企业快速匹配周边可用人才，根据工作经验、时间意愿等条件筛选，缩短从发布到到岗的时间。",
    result: "平均到岗时间缩短至 5 个工作日",
    accent: "border-amber-200 dark:border-amber-800",
    tagBg: "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300",
  },
];

export function ScenariosSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper variants={staggerContainer} viewport={viewportConfig}>
          <MotionItem
            as="p"
            variants={fadeInUp}
            className="text-center text-sm font-semibold uppercase tracking-widest text-primary dark:text-primary-light"
          >
            应用场景
          </MotionItem>
          <MotionItem
            as="h2"
            variants={fadeInUp}
            className="mt-3 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            不同场景，同一个高效解决方案
          </MotionItem>
          <MotionItem
            as="p"
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400"
          >
            无论是万人校招还是个人求职，简职了都能适配你的需求
          </MotionItem>
        </MotionWrapper>

        <MotionWrapper
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          viewport={viewportConfig}
        >
          {scenarios.map((s) => (
            <MotionItem
              key={s.title}
              variants={fadeInUp}
              className={`overflow-hidden rounded-2xl border ${s.accent} bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800`}
            >
              {/* 场景配图 */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                <span className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${s.tagBg}`}>
                  {s.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  {s.story}
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-700/50">
                  <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
                  <p className="text-sm font-medium text-gray-800 dark:text-slate-200">
                    {s.result}
                  </p>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
