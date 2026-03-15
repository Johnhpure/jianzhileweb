"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Search,
    BarChart3,
    Zap,
    MessageSquare,
    ArrowRight,
    FileText,
    Users,
    LineChart,
    Settings,
    ShieldCheck,
    Plug,
} from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    fadeIn,
    scaleIn,
    viewportConfig,
} from "@/lib/animations";

const features = [
    {
        icon: Search,
        title: "智能 JD 解析",
        desc: "上传岗位描述，AI 自动提取关键能力要求、技能权重和隐含偏好。支持从 Word、PDF 甚至图片截图中识别 JD 内容，无需手动填表。",
        detail: "识别率 98.6%，覆盖 36 个行业术语库",
    },
    {
        icon: BarChart3,
        title: "多维度简历评分",
        desc: "从技能匹配度、经验相关性、稳定性预测、成长潜力等 23 个维度综合评分，每个维度的权重可按岗位特性自定义调整。",
        detail: "评分可解释、可追溯，HR 不再「黑盒」决策",
    },
    {
        icon: Zap,
        title: "批量对比推荐",
        desc: "一次导入数百份简历，AI 秒级完成全部解析和评分，自动按综合匹配度排序呈现 Top 候选人。支持按单维度（如薪资预期、入职时间）快速重排。",
        detail: "100 份简历从导入到排序仅需 3 分钟",
    },
    {
        icon: MessageSquare,
        title: "AI 面试助手",
        desc: "根据候选人简历与岗位 JD 的差异点，自动生成个性化面试问题清单。涵盖技术验证题、行为面试题和情境模拟题三种类型。",
        detail: "支持导出为面试评估表，面试官可直接使用",
    },
    {
        icon: FileText,
        title: "智能简历格式化",
        desc: "将不同格式、不同排版的简历统一转化为结构化数据，生成标准化的候选人档案卡片。HR 不再需要逐份打开简历文件。",
        detail: "支持 PDF、Word、图片等 12 种格式自动识别",
    },
    {
        icon: LineChart,
        title: "招聘数据看板",
        desc: "实时追踪各岗位的招聘漏斗数据：简历量、筛选通过率、面试到场率、Offer 接受率等。用数据驱动招聘策略优化。",
        detail: "支持按部门、时间段、招聘渠道多维筛选",
    },
];

const workflow = [
    {
        step: "上传 JD",
        desc: "粘贴文本或上传文件",
    },
    {
        step: "AI 解析岗位要求",
        desc: "自动提取关键技能和权重",
    },
    {
        step: "导入候选人简历",
        desc: "批量上传或 ATS 同步",
    },
    {
        step: "AI 批量评分",
        desc: "23 维度综合评估",
    },
    {
        step: "查看匹配排序",
        desc: "Top 候选人一目了然",
    },
    {
        step: "导出面试名单",
        desc: "含面试问题建议",
    },
];

const comparison = [
    { metric: "处理 100 份简历", traditional: "约 5 小时", jzl: "约 3 分钟" },
    { metric: "候选人推荐准确率", traditional: "约 60%", jzl: "≥ 90%" },
    { metric: "招聘周期（中端岗）", traditional: "平均 30 天", jzl: "缩短至 12-15 天" },
    { metric: "单次招聘成本", traditional: "平均 ¥8,000", jzl: "降低 40-60%" },
    { metric: "候选人体验满意度", traditional: "无法量化", jzl: "NPS 78 分" },
];

const caseStudies = [
    {
        company: "某头部互联网公司",
        industry: "互联网 · 5,000+ 人",
        challenge:
            "每年秋招收到 12,000+ 份校园简历，8 名 HR 需要 3 周完成初筛。由于筛选疲劳，优质候选人经常被误判淘汰。",
        solution:
            "接入简职了后，AI 72 小时内完成全部初筛。系统根据岗位画像生成 Top 500 短名单，并标注每位候选人的核心亮点和潜在风险点。",
        results: [
            "初筛效率提升 15 倍",
            "进入笔试候选人质量从 35% 提升到 78%",
            "HR 团队将精力聚焦面试评估，招聘满意度提升 45%",
        ],
    },
    {
        company: "某制造业上市公司",
        industry: "智能制造 · 2,000+ 人",
        challenge:
            "需要招聘 15 名自动化高级工程师，传统渠道 2 个月仅到岗 4 人。核心问题是技术类岗位简历筛选门槛高，HR 难以准确评估候选人技术能力。",
        solution:
            "简职了为自动化工程师岗位建立专属技能图谱，从 3,200 份简历中精准筛选出 87 名高匹配候选人，按技能契合度、项目经验和稳定性综合排序。",
        results: [
            "3 周内 15 个岗位全部发出 Offer",
            "较传统流程节省 68% 招聘周期",
            "入职 6 个月后留存率达 93%",
        ],
    },
];

const additionalCapabilities = [
    {
        icon: Users,
        title: "团队协作",
        desc: "多角色权限管理，HR、用人经理、面试官各有专属视图",
    },
    {
        icon: Settings,
        title: "灵活配置",
        desc: "评分维度权重、筛选规则、流程节点均可按企业需求自定义",
    },
    {
        icon: ShieldCheck,
        title: "数据安全",
        desc: "等保三级、AES-256 加密、支持私有化部署",
    },
    {
        icon: Plug,
        title: "开放集成",
        desc: "标准 API 对接企业微信、钉钉、北森、Moka 等主流系统",
    },
];

export function EmployerSolutionContent() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
                <motion.div
                    className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.p
                        variants={fadeInUp}
                        className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-primary-light"
                    >
                        企业 HR 解决方案
                    </motion.p>
                    <motion.h1
                        variants={fadeInUp}
                        className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
                    >
                        AI 赋能 HR，将筛简效率提升{" "}
                        <span className="text-blue-600 dark:text-blue-400">10 倍</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-slate-400"
                    >
                        适用于校园招聘、社会招聘、批量蓝领招聘、高端猎聘等多种场景。
                        不是关键词匹配，是真正理解岗位需求和候选人能力的 AI 招聘助手。
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                    >
                        <Link
                            href="/contact?tab=employer"
                            className="w-full rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-400"
                        >
                            申请 14 天免费试用
                        </Link>
                        <Link
                            href="/contact?tab=employer"
                            className="w-full rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 sm:w-auto dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                        >
                            预约 30 分钟演示
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features */}
            <section className="bg-white py-20 dark:bg-dark-bg">
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
                            核心功能
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            覆盖招聘全链路的 AI 能力
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        {features.map((f) => (
                            <motion.div
                                key={f.title}
                                variants={fadeInUp}
                                className="cursor-pointer rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                            >
                                <f.icon className="mb-4 h-9 w-9 text-blue-600 dark:text-blue-400" />
                                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                                    {f.desc}
                                </p>
                                <p className="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                    {f.detail}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Workflow */}
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
                            使用流程
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            6 步完成从 JD 发布到面试邀约
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.12,
                                    delayChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {workflow.map((w, i) => (
                            <motion.div
                                key={w.step}
                                className="flex items-center gap-2"
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            duration: 0.4,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                            >
                                <div className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm dark:bg-slate-800 dark:shadow-slate-900/30">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <span className="block text-sm font-semibold text-gray-800 dark:text-slate-200">
                                            {w.step}
                                        </span>
                                        <span className="block text-xs text-gray-500 dark:text-slate-400">
                                            {w.desc}
                                        </span>
                                    </div>
                                </div>
                                {i < workflow.length - 1 && (
                                    <motion.div
                                        variants={fadeIn}
                                        className="hidden lg:block"
                                    >
                                        <ArrowRight className="h-5 w-5 text-gray-300 dark:text-slate-600" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Comparison */}
            <section className="bg-white py-20 dark:bg-dark-bg">
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
                            效果对比
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            数据说话：与传统方式的差距
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-700"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={scaleIn}
                    >
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-slate-800">
                                    <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                                        维度
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold text-gray-500 dark:text-slate-400">
                                        传统方式
                                    </th>
                                    <th className="px-6 py-4 text-left font-semibold text-blue-600 dark:text-blue-400">
                                        使用简职了
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row) => (
                                    <tr
                                        key={row.metric}
                                        className="border-t border-gray-50 dark:border-slate-700"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {row.metric}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-slate-400">
                                            {row.traditional}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-400">
                                            {row.jzl}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies */}
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
                            客户案例
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            看看他们怎么用简职了
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="mt-12 grid gap-8 lg:grid-cols-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        {caseStudies.map((cs) => (
                            <motion.div
                                key={cs.company}
                                variants={fadeInUp}
                                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50">
                                        <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 dark:text-white">
                                            {cs.company}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-slate-400">
                                            {cs.industry}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                                            挑战
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                                            {cs.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                                            方案
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                                            {cs.solution}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                                            成果
                                        </p>
                                        <ul className="mt-2 space-y-1.5">
                                            {cs.results.map((r) => (
                                                <li
                                                    key={r}
                                                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300"
                                                >
                                                    <span className="mt-0.5 text-emerald-500">
                                                        &#10003;
                                                    </span>
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Additional Capabilities */}
            <section className="bg-white py-20 dark:bg-dark-bg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-center text-2xl font-bold text-gray-900 dark:text-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={fadeInUp}
                    >
                        企业级能力支撑
                    </motion.h2>
                    <motion.div
                        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        {additionalCapabilities.map((cap) => (
                            <motion.div
                                key={cap.title}
                                variants={fadeInUp}
                                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                            >
                                <cap.icon className="mx-auto mb-3 h-8 w-8 text-primary dark:text-primary-light" />
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                                    {cap.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-slate-400">
                                    {cap.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 py-16 dark:bg-blue-700">
                <motion.div
                    className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-2xl font-bold text-white sm:text-3xl"
                    >
                        立即体验 AI 智能招聘
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-blue-100"
                    >
                        14 天免费试用，无需信用卡，随时取消。已有 500+
                        企业正在使用简职了提升招聘效率。
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                    >
                        <Link
                            href="/contact?tab=employer"
                            className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-xl"
                        >
                            申请 14 天免费试用
                        </Link>
                        <Link
                            href="/contact?tab=employer"
                            className="rounded-xl border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600"
                        >
                            预约 30 分钟在线演示
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
