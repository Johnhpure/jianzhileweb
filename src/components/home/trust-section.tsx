"use client";

import { motion } from "framer-motion";
import { Star, Building2 } from "lucide-react";
import { staggerContainer, fadeInUp, fadeIn, viewportConfig } from "@/lib/animations";

const testimonials = [
  { quote: "使用简职了后，我们的简历筛选时间从每天 4 小时缩短到了 20 分钟。", author: "张经理", role: "HR 总监 · 某互联网公司" },
  { quote: "投了一周简历，收到了比之前一个月还多的面试邀请。", author: "李同学", role: "2025 届应届生" },
  { quote: "AI 评分帮我们发现了好几个被传统筛选遗漏的优质候选人。", author: "王总", role: "招聘负责人 · 某制造企业" },
];

const partnerIndustries = ["互联网科技", "智能制造", "金融服务", "医疗健康", "新能源", "教育培训"];

export function TrustSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Partner marquee */}
        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeIn}>
          <p className="mb-8 text-center text-sm font-medium text-gray-400 dark:text-slate-500">他们都在使用简职了</p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-800/50" />
            <div className="flex animate-[marquee_30s_linear_infinite] gap-6">
              {[...partnerIndustries, ...partnerIndustries].map((name, i) => (
                <div key={`${name}-${i}`} className="flex h-14 min-w-[140px] items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 shadow-sm dark:border-slate-600 dark:bg-slate-800">
                  <Building2 className="h-4 w-4 text-gray-300 dark:text-slate-500" />
                  <span className="whitespace-nowrap text-sm font-medium text-gray-400 dark:text-slate-400">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUp}>
          用户真实评价
        </motion.h2>
        <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={fadeInUp} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
              <div className="mb-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 border-t border-gray-50 pt-3 dark:border-slate-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.author}</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
