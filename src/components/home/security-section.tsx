"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Server,
  FileCheck,
  ArrowRight,
} from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from "@/lib/animations";

const securityFeatures = [
  {
    icon: Lock,
    title: "端到端加密",
    desc: "AES-256 加密存储 + TLS 1.3 传输加密，简历数据从上传到分析全程密文处理",
  },
  {
    icon: Shield,
    title: "细粒度权限管理",
    desc: "基于 RBAC 的访问控制，支持按岗位、部门、操作类型设定 HR 数据查看权限",
  },
  {
    icon: Server,
    title: "数据主权保障",
    desc: "所有数据存储在国内合规机房，支持私有化部署方案，数据完全归属企业",
  },
  {
    icon: FileCheck,
    title: "合规认证",
    desc: "已通过等保三级、符合 GDPR 合规要求，定期接受第三方安全审计",
  },
];

const integrations = [
  "企业微信",
  "钉钉",
  "飞书",
  "北森",
  "Moka",
  "SAP SuccessFactors",
  "自有 ATS",
  "邮件系统",
];

export function SecuritySection() {
  return (
    <section className="bg-white py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Security */}
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
            安全与合规
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            你的候选人数据，由我们全力守护
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400"
          >
            招聘数据涉及大量个人隐私，我们从架构层面确保数据安全，而非事后补救
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {securityFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
            >
              <motion.div variants={scaleIn}>
                <f.icon className="mx-auto mb-4 h-8 w-8 text-primary dark:text-primary-light" />
              </motion.div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integrations */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-center text-xl font-bold text-gray-900 dark:text-white"
          >
            无缝对接你现有的工具
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600 dark:text-slate-400"
          >
            通过标准 API 和预置连接器，简职了可以与主流 HR 系统、企业 IM 和
            ATS 平台双向打通，无需更换现有工作流
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            variants={staggerContainer}
          >
            {integrations.map((name) => (
              <motion.div
                key={name}
                variants={scaleIn}
                className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-600 transition-colors hover:border-primary/30 hover:bg-white hover:text-primary dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-primary-light/30 dark:hover:text-primary-light"
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/contact?tab=employer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl dark:bg-primary-light dark:text-slate-900 dark:hover:bg-sky-400"
          >
            了解完整安全白皮书
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
