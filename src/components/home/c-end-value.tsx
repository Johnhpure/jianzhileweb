"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Compass, Timer } from "lucide-react";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const cards = [
  { icon: Send, pain: "海投没回音", current: "投了 100 家公司，只收到 5 个回复，完全不知道问题出在哪", solution: "AI 分析你的简历与岗位匹配度，只推荐高匹配岗位，回复率提升 5 倍" },
  { icon: Compass, pain: "不知道投哪里", current: "招聘网站信息过载，相似岗位几百条，越看越迷茫", solution: "AI 根据你的技能、经验和职业发展意向，智能推荐最适合的 20 个岗位" },
  { icon: Timer, pain: "投简历太耗时", current: "每家公司都要重新填表格、上传附件，一个下午只能投 10 家", solution: "一键批量投递 + 简历自动适配，同样时间投出 10 倍数量的精准申请" },
];

export function CEndValue() {
  return (
    <section className="bg-white py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            让每份简历都投到对的地方
          </motion.h2>
          <motion.p variants={fadeInUp} className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400">
            AI 帮你分析能力、匹配岗位、批量投递，求职效率翻倍
          </motion.p>
        </motion.div>

        <motion.div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          {cards.map((card) => (
            <motion.div key={card.pain} variants={fadeInUp} className="cursor-pointer rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600">
              <card.icon className="mb-4 h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.pain}</h3>
              <p className="mt-2 text-sm text-red-500 dark:text-red-400">{card.current}</p>
              <p className="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">{card.solution}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewportConfig} transition={{ duration: 0.5, delay: 0.3 }}>
          <Link href="/contact?tab=candidate" className="inline-block rounded-xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-500 dark:hover:bg-emerald-400">
            免费注册体验
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
