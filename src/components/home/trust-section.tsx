import Image from "next/image";
import { Star } from "lucide-react";
import {
  MotionWrapper,
  MotionItem,
  staggerContainer,
  fadeInUp,
  fadeIn,
  viewportConfig,
} from "@/components/ui/motion-wrapper";

const testimonials = [
  {
    quote: "使用简职了后，我们的简历筛选时间从每天 4 小时缩短到了 20 分钟。之前 3 个 HR 加班干的活，现在 1 个人轻松搞定。",
    author: "刘敏",
    role: "HR 总监",
    company: "深圳某互联网科技公司",
    avatar: "/images/testimonial-hr-director.png",
  },
  {
    quote: "毕业季海投了两个月没什么回音，用了简职了之后一周就收到 6 个面试邀请，最后拿到了心仪的 Offer。",
    author: "陈浩然",
    role: "2025 届应届毕业生",
    company: "现就职于某知名游戏公司",
    avatar: "/images/testimonial-student.png",
  },
  {
    quote: "招聘自动化工程师一直是我们的难题。接入简职了之后，系统帮我们筛出了几个非常合适的候选人，之前靠人工根本发现不了。",
    author: "周建国",
    role: "招聘负责人",
    company: "苏州某智能制造企业",
    avatar: "/images/testimonial-manager.png",
  },
];

const partnerLogos = [
  "互联网科技",
  "智能制造",
  "金融服务",
  "医疗健康",
  "新能源",
  "教育培训",
  "电子商务",
  "物流运输",
];

export function TrustSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 合作行业展示 */}
        <MotionWrapper className="mb-16" variants={fadeIn} viewport={viewportConfig}>
          <p className="mb-8 text-center text-sm font-medium text-gray-400 dark:text-slate-500">
            已服务覆盖以下行业的 500+ 家企业客户
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-800/50" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-800/50" />
            <div className="flex animate-[marquee_30s_linear_infinite] gap-6">
              {[...partnerLogos, ...partnerLogos].map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex h-14 min-w-[140px] items-center justify-center rounded-xl border border-gray-200 bg-white px-5 shadow-sm dark:border-slate-600 dark:bg-slate-800"
                >
                  <span className="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-slate-400">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </MotionWrapper>

        {/* 客户评价 */}
        <MotionWrapper
          as="h2"
          className="text-center text-2xl font-bold text-gray-900 dark:text-white"
          variants={fadeInUp}
          viewport={viewportConfig}
        >
          听听他们怎么说
        </MotionWrapper>
        <MotionWrapper
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          viewport={viewportConfig}
        >
          {testimonials.map((t) => (
            <MotionItem
              key={t.author}
              variants={fadeInUp}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="mb-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-gray-50 pt-4 dark:border-slate-700">
                <Image
                  src={t.avatar}
                  alt={t.author}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{t.author}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
