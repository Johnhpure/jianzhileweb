"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Brain, Zap } from "lucide-react";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const cards = [
  { icon: Clock, pain: "简历太多看不过来", current: "每天耗时 3+ 小时逐份翻看简历，加班成常态", solution: "AI 秒级解析评分，自动生成 Top 候选人排序" },
  { icon: Brain, pain: "靠感觉选人不靠谱", current: "主观判断导致错过优质人才，面试通过率低于 30%", solution: "23 维度量化评分，每个维度可解释、可追溯" },
  { icon: Zap, pain: "招聘周期太长", current: "平均 30+ 天才找到合适人选，用人部门频频催促", solution: "智能匹配推荐 + 面试问题生成，招聘周期缩短 60%" },
];

export function BEndValue() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            帮 HR 从筛简中解放
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400">
            让 AI 处理重复性工作，HR 聚焦在真正需要判断力的环节
          </motion.p>
        </motion.div>

        <motion.div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          {cards.map((card) => (
            <motion.div key={card.pain} variants={fadeInUp} className="cursor-pointer rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <card.icon className="mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.pain}</h3>
              <p className="mt-2 text-sm text-red-500 dark:text-red-400">{card.current}</p>
              <p className="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">{card.solution}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ duration: 0.5, delay: 0.3 }}>
          <Link href="/contact?tab=employer" className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-400">
            预约产品演示
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
