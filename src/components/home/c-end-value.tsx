import Link from "next/link";
import Image from "next/image";
import { Send, Compass, Timer } from "lucide-react";
import {
  MotionWrapper,
  MotionItem,
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/components/ui/motion-wrapper";

const cards = [
  {
    icon: Send,
    pain: "海投没回音",
    current: "投了 100 家公司，只收到 5 个回复，不知道问题出在哪",
    solution: "分析简历与岗位匹配度，推荐高匹配岗位，帮助提升回复率",
  },
  {
    icon: Compass,
    pain: "不知道投哪里",
    current: "招聘网站信息过载，相似岗位几百条，越看越迷茫",
    solution: "根据技能、经验和发展意向，推荐最适合的岗位方向",
  },
  {
    icon: Timer,
    pain: "投简历太耗时",
    current: "每家公司都要重新填表格、上传附件，一个下午只能投 10 家",
    solution: "一键批量投递 + 简历自动适配，同样时间投出更多精准申请",
  },
];

export function CEndValue() {
  return (
    <section className="bg-white py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧内容 */}
          <div>
            <MotionWrapper variants={staggerContainer} viewport={viewportConfig}>
              <MotionItem
                as="h2"
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                让每份简历都投到对的地方
              </MotionItem>
              <MotionItem
                as="p"
                variants={fadeInUp}
                className="mt-4 text-gray-600 dark:text-slate-400"
              >
                帮你分析能力优势、匹配目标岗位、优化投递策略，让求职事半功倍
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
                    <card.icon className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {card.pain}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-400 line-through dark:text-slate-500">
                    {card.current}
                  </p>
                  <p className="mt-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
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
                href="/contact?tab=candidate"
                className="inline-block rounded-xl bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                免费注册体验
              </Link>
            </MotionWrapper>
          </div>

          {/* 右侧图文 */}
          <MotionWrapper variants={fadeInUp} viewport={viewportConfig}>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/case-jobseeker-success.png"
                alt="求职者通过简职了找到理想工作"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
