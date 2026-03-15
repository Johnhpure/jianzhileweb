"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  staggerContainerSlow,
  fadeInUp,
  fadeIn,
} from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 sm:py-28 lg:py-32 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Decorative background blobs */}
      <div className="blob blob-blue absolute -left-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="blob blob-green absolute -bottom-24 -right-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem]" aria-hidden="true" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
        >
          让招聘和求职，
          <span className="text-gradient-brand">都更 AI</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-slate-400"
        >
          简职了——企业 HR 的智能筛选助手，求职者的精准投递神器
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact?tab=employer"
            className="w-full rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            我是企业 HR，免费试用
          </Link>
          <Link
            href="/contact?tab=candidate"
            className="w-full rounded-xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl sm:w-auto dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            我是求职者，免费注册
          </Link>
        </motion.div>

        <motion.p variants={fadeIn} className="mt-8 text-sm text-gray-400 dark:text-slate-500">
          已服务 500+ 企业 · 处理简历 2,600 万+ 段工作经历 · 覆盖 36 个行业
        </motion.p>
      </motion.div>
    </section>
  );
}
