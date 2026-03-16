"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Target,
    Eye,
    Heart,
    Lightbulb,
    Scale,
    Handshake,
} from "lucide-react";
import {
    staggerContainer,
    fadeInUp,
    fadeIn,
    scaleIn,
    viewportConfig,
} from "@/lib/animations";

const team = [
    {
        name: "王晨",
        role: "CEO / 联合创始人",
        bio: "曾任国内某头部招聘平台产品负责人，主导过日活千万级产品的从 0 到 1。在招聘行业深耕 11 年，经历了从传统纸质简历到在线招聘再到智能招聘的三次行业变革，深刻理解 HR 的真实痛点。",
        avatar: "/images/team-ceo.png",
    },
    {
        name: "陈邦",
        role: "CTO / 联合创始人",
        bio: "NLP/CV 方向博士，前某一线互联网大厂算法团队 Tech Lead，带队完成过多个亿级数据量的 NLP 项目落地。在 ACL、EMNLP 等顶会发表论文 12 篇，持有简历解析相关技术专利 5 项。",
        avatar: "/images/team-cto.png",
    },
    {
        name: "敬若涵",
        role: "CPO / 产品副总裁",
        bio: "9 年 HR SaaS 产品经验，曾主导某知名 ATS 产品从 0 到 5 万+ 企业客户的全过程。擅长将复杂的技术能力翻译为 HR 能理解的产品功能，坚信好产品应该让用户不需要看说明书。",
        avatar: "/images/team-cpo.png",
    },
    {
        name: "陈思远",
        role: "VP of Engineering",
        bio: "15 年后端架构经验，前某云计算公司基础架构负责人。主导了简职了分布式简历处理引擎的设计，实现单集群每秒处理 2,000+ 份简历的解析吞吐量，系统可用性 99.97%。",
        avatar: "/images/team-vpe.png",
    },
];

const values = [
    {
        icon: Heart,
        title: "用户第一",
        desc: "每个功能上线前都经过至少 20 位真实 HR 的深度试用。我们不做自嗨的功能——用户不需要，就不做。",
    },
    {
        icon: Lightbulb,
        title: "技术信仰",
        desc: "我们相信 AI 不是噱头，是实实在在能改变招聘行业的力量。团队 40% 是算法和工程人才，持续投入底层技术研发。",
    },
    {
        icon: Scale,
        title: "公平透明",
        desc: "AI 评分的每一个维度都可解释、可追溯。我们主动消除算法偏见，确保候选人不因年龄、性别、院校出身被不公正对待。",
    },
    {
        icon: Handshake,
        title: "长期主义",
        desc: "不追求短期增长黑客，不做数据二次贩卖。我们靠产品口碑获客——超过 60% 的新客户来自老客户推荐。",
    },
];

const milestones = [
    {
        date: "2023.Q4",
        event: "核心团队组建",
        detail: "4 位联合创始人在北京正式启动项目，确定「AI+招聘」双端平台方向",
    },
    {
        date: "2024.Q1",
        event: "完成天使轮融资",
        detail: "获得某知名早期基金数百万美元投资，团队扩展至 18 人",
    },
    {
        date: "2024.Q2",
        event: "NLP 引擎 v1.0 发布",
        detail: "简历解析准确率突破 95%，支持 8 种文档格式，覆盖中英文",
    },
    {
        date: "2024.Q3",
        event: "封闭内测启动",
        detail: "邀请 100 家企业 HR 深度试用，收集超过 2,000 条产品反馈并快速迭代",
    },
    {
        date: "2024.Q4",
        event: "通过等保三级认证",
        detail: "完成信息安全等级保护三级评测，企业数据安全合规能力获权威认证",
    },
    {
        date: "2025.Q1",
        event: "产品正式上线",
        detail: "面向全行业开放注册，首月即突破 300 家付费企业，简历处理量超 100 万份",
    },
    {
        date: "2025.Q3",
        event: "服务企业 500+，完成 Pre-A 轮",
        detail: "产品 NPS 达到 72 分，获得某产业基金千万级 Pre-A 轮投资",
    },
    {
        date: "2025.Q4",
        event: "C 端求职者产品上线",
        detail: "推出求职者端 AI 简历优化与精准岗位推荐功能，实现双端闭环",
    },
];

const mediaList = [
    { name: "36 氪", desc: "「AI 招聘赛道新锐」" },
    { name: "创业邦", desc: "「最具潜力 HR Tech」" },
    { name: "猎云网", desc: "「年度创新企业」" },
    { name: "亿欧", desc: "「AI 应用 50 强」" },
    { name: "极客公园", desc: "「技术创新案例」" },
];

export function AboutContent() {
    return (
        <>
            {/* Hero — Mission & Vision */}
            <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
                <motion.div
                    className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white"
                    >
                        关于简职了
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-slate-400"
                    >
                        我们不是又一个招聘网站，而是让招聘和求职这件事本身变得更聪明的 AI 基础设施
                    </motion.p>

                    <motion.div
                        className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2"
                        variants={staggerContainer}
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border dark:border-slate-700 dark:bg-slate-800"
                        >
                            <Target className="mx-auto mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                我们的使命
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                                让每一次招聘都有据可依，让每一份简历都被认真对待。用 AI
                                消除信息不对称，让优秀的人才不被埋没，让企业不再大海捞针。
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border dark:border-slate-700 dark:bg-slate-800"
                        >
                            <Eye className="mx-auto mb-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                我们的愿景
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                                成为中国最懂招聘场景的 AI
                                平台。不只是工具提效——我们要重新定义企业和人才之间建立连接的方式。
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Values */}
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
                            价值观
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            我们相信的事
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        className="mt-12 grid gap-8 sm:grid-cols-2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        {values.map((v) => (
                            <motion.div
                                key={v.title}
                                variants={fadeInUp}
                                className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                                    <v.icon className="h-6 w-6 text-primary dark:text-primary-light" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                        {v.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                                        {v.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team */}
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
                            团队
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            一群真正懂招聘的技术人
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600 dark:text-slate-400"
                        >
                            核心团队来自国内头部招聘平台、一线互联网大厂和知名 AI
                            实验室，既写得了算法也听得懂 HR 的需求
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={fadeInUp}
                                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                            >
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    width={64}
                                    height={64}
                                    className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                                />
                                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                                    {member.role}
                                </p>
                                <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-slate-400">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Team stats */}
                    <motion.div
                        className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                    >
                        {[
                            { label: "团队规模", value: "45+" },
                            { label: "算法工程师占比", value: "40%" },
                            { label: "平均行业经验", value: "8 年" },
                            { label: "顶会论文", value: "26 篇" },
                        ].map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={fadeInUp}
                                className="text-center"
                            >
                                <p className="text-2xl font-bold text-primary dark:text-primary-light">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-white py-20 dark:bg-dark-bg">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
                            里程碑
                        </motion.p>
                        <motion.h2
                            variants={fadeInUp}
                            className="mt-3 text-center text-2xl font-bold text-gray-900 dark:text-white"
                        >
                            发展历程
                        </motion.h2>
                    </motion.div>

                    <div className="mt-12 space-y-6">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={m.date}
                                className="flex gap-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={viewportConfig}
                                transition={{
                                    duration: 0.4,
                                    delay: i * 0.08,
                                    ease: "easeOut",
                                }}
                            >
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white dark:bg-blue-500"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={viewportConfig}
                                        transition={{
                                            duration: 0.3,
                                            delay: i * 0.08 + 0.1,
                                            ease: "easeOut",
                                        }}
                                    >
                                        {i + 1}
                                    </motion.div>
                                    {i < milestones.length - 1 && (
                                        <div className="mt-2 h-full w-0.5 bg-blue-100 dark:bg-blue-900/50" />
                                    )}
                                </div>
                                <div className="pb-6">
                                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                        {m.date}
                                    </p>
                                    <p className="mt-0.5 font-semibold text-gray-900 dark:text-white">
                                        {m.event}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-slate-400">
                                        {m.detail}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media */}
            <section className="bg-slate-50 py-16 dark:bg-slate-800/50">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.h2
                        className="text-2xl font-bold text-gray-900 dark:text-white"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={fadeInUp}
                    >
                        媒体与行业认可
                    </motion.h2>
                    <motion.div
                        className="mt-10 flex flex-wrap items-center justify-center gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={staggerContainer}
                    >
                        {mediaList.map((m) => (
                            <motion.div
                                key={m.name}
                                variants={scaleIn}
                                className="flex h-20 w-40 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white text-center shadow-sm transition-colors hover:border-gray-300 hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:hover:border-slate-500"
                            >
                                <span className="text-sm font-semibold text-gray-700 dark:text-slate-300">
                                    {m.name}
                                </span>
                                <span className="mt-1 text-xs text-gray-400 dark:text-slate-500">
                                    {m.desc}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
