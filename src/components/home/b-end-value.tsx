import Link from "next/link";
import Image from "next/image";
import { Clock, BarChart3, Zap } from "lucide-react";
import {
  MotionWrapper,
  MotionItem,
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/components/ui/motion-wrapper";

const cards = [
  {
    icon: Clock,
    pain: "简历太多看不过来",
    current: "每天花 3 小时以上逐份翻看简历，加班成常态",
    solution: "系统自动解析评分，生成候选人排序，重点简历一目了然",
  },
  {
    icon: BarChart3,
    pain: "靠感觉选人不靠谱",
    current: "主观判断导致错过优质人才，面试通过率偏低",
    solution: "23 个维度量化评分，每个维度可查看评分依据和原文出处",
  },
  {
    icon: Zap,
    pain: "招聘周期太长",
    current: "平均 30 多天才找到合适人选，用人部门频繁催促",
    solution: "匹配推荐 + 面试问题生成，帮助缩短大约 60% 的招聘周期",
  },
];

export function BEndValue() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧图文 */}
          <MotionWrapper variants={fadeInUp} viewport={viewportConfig}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/hr-dashboard-office.png"
                alt="HR 使用简职了筛选简历"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </MotionWrapper>

          {/* 右侧内容 */}
          <div>
            <MotionWrapper variants={staggerContainer} viewport={viewportConfig}>
              <MotionItem
                as="h2"
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                帮 HR 从重复劳动中解放
              </MotionItem>
              <MotionItem
                as="p"
                variants={fadeInUp}
                className="mt-4 text-gray-600 dark:text-slate-400"
              >
                让系统处理重复性的简历筛选工作，HR 聚焦在真正需要判断力的环节
              </MotionItem>
            </MotionWrapper>

            <MotionWrapper
              className="mt-8 space-y-6"
              variants={staggerContainer}
              viewport={viewportConfig}
            >
              {cards.map((card) => (
                <MotionItem
                  key={card.pain}
                  variants={fadeInUp}
                  className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <card.icon className="h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {card.pain}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-400 line-through dark:text-slate-500">
                    {card.current}
                  </p>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    → {card.solution}
                  </p>
                </MotionItem>
              ))}
            </MotionWrapper>

            <MotionWrapper
              className="mt-8"
              initialState={{ opacity: 0, y: 16 }}
              animateState={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/contact?tab=employer"
                className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                了解企业招聘方案
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
