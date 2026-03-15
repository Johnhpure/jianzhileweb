"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Truck, Crown } from "lucide-react";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const scenarios = [
  {
    icon: GraduationCap,
    tag: "校园招聘",
    title: "秋招 12,000 份简历，3 天完成初筛",
    story:
      "某头部互联网公司每年秋招收到超过 12,000 份校园简历。过去需要 8 名 HR 花费 3 周完成第一轮筛选，且因疲劳导致误判率高。使用简职了后，AI 在 72 小时内完成全部初筛，并根据岗位画像自动生成 Top 500 候选人短名单。",
    result: "进入笔试的候选人质量从 35% 提升到 78%，HR 将精力聚焦在面试评估环节",
    accent: "border-blue-200 dark:border-blue-800",
    tagBg: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Briefcase,
    tag: "社会招聘",
    title: "15 个高级工程师岗位，3 周满编",
    story:
      "某制造业上市公司需要招聘 15 名自动化高级工程师，传统渠道投了 2 个月只到岗 4 人。接入简职了后，AI 从多个渠道汇集的 3,200 份简历中精准筛选出 87 名高匹配候选人，按技能契合度和稳定性指数排序。",
    result: "3 周内 15 个岗位全部发出 Offer，较传统流程节省 68% 的招聘周期",
    accent: "border-emerald-200 dark:border-emerald-800",
    tagBg:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Truck,
    tag: "批量招聘",
    title: "旺季补员 200+，从发布到到岗仅 5 天",
    story:
      "某头部物流企业在双十一前需要紧急补充 200+ 名分拣员和配送员。简职了自动匹配仓库周边 10 公里内、有相关经验的候选人，并根据排班意愿和交通距离智能推荐。",
    result: "首批 120 人在 48 小时内确认到岗，一周内全部 200+ 名额招满",
    accent: "border-amber-200 dark:border-amber-800",
    tagBg:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Crown,
    tag: "高端猎聘",
    title: "CFO 候选人深度画像，决策周期缩短 60%",
    story:
      "某 Pre-IPO 企业招聘 CFO，需要从 40+ 份高管简历中找到兼具 IPO 经验、行业资源和文化契合度的人选。简职了对每位候选人生成包含过往业绩、行业影响力、管理风格在内的深度分析报告。",
    result: "董事会评审效率提升 60%，最终入选者在试用期表现评分为团队最高",
    accent: "border-violet-200 dark:border-violet-800",
    tagBg:
      "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
];

export function ScenariosSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-center text-sm font-semibold uppercase tracking-widest text-primary dark:text-primary-light"
          >
            真实场景
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            不同招聘场景，同一个解决方案
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400"
          >
            无论是万人校招还是高管猎聘，简职了都能适配你的招聘节奏
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {scenarios.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              className={`rounded-2xl border ${s.accent} bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800`}
            >
              <div className="flex items-center gap-3">
                <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${s.tagBg}`}
                >
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                {s.story}
              </p>
              <div className="mt-4 rounded-lg bg-slate-50 px-4 py-3 dark:bg-slate-700/50">
                <p className="text-sm font-medium text-gray-800 dark:text-slate-200">
                  <span className="mr-1 text-emerald-600 dark:text-emerald-400">
                    &#10003;
                  </span>
                  {s.result}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
