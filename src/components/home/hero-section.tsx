import Link from "next/link";
import Image from "next/image";
import {
  MotionWrapper,
  MotionItem,
  staggerContainerSlow,
  fadeInUp,
  fadeIn,
} from "@/components/ui/motion-wrapper";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 sm:py-28 lg:py-32 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* 装饰性背景光斑 */}
      <div className="blob blob-blue absolute -left-20 -top-20 h-72 w-72 sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="blob blob-green absolute -bottom-24 -right-24 h-80 w-80 sm:h-[28rem] sm:w-[28rem]" aria-hidden="true" />

      <MotionWrapper
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={staggerContainerSlow}
        trigger="mount"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 左侧文案 */}
          <div>
            <MotionItem
              as="h1"
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
            >
              让每一次招聘，
              <span className="text-gradient-brand">都更加精准高效</span>
            </MotionItem>

            <MotionItem
              as="p"
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg text-gray-600 sm:text-xl dark:text-slate-400"
            >
              简职了帮助企业 HR 快速筛选合适人才，帮求职者精准匹配理想岗位——已服务超过 500 家企业客户
            </MotionItem>

            <MotionItem variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?tab=employer"
                className="w-full rounded-xl bg-blue-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl sm:w-auto dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                企业 HR 免费试用
              </Link>
              <Link
                href="/contact?tab=candidate"
                className="w-full rounded-xl bg-emerald-600 px-8 py-4 text-center text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl sm:w-auto dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                求职者免费注册
              </Link>
            </MotionItem>

            <MotionItem as="p" variants={fadeIn} className="mt-8 text-sm text-gray-400 dark:text-slate-500">
              已帮助 500+ 企业优化招聘流程 · 处理超过 2,600 万条经历数据 · 覆盖 36 个行业
            </MotionItem>
          </div>

          {/* 右侧产品截图 */}
          <MotionItem variants={fadeInUp} className="relative hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-gray-200/60 shadow-2xl dark:border-slate-700">
              <Image
                src="/images/hero-product-screenshot.png"
                alt="简职了智能招聘平台界面"
                width={720}
                height={480}
                className="h-auto w-full"
                priority
              />
            </div>
            {/* 浮动卡片：真实数据指标 */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <p className="text-xs text-gray-500 dark:text-slate-400">本周新筛选简历</p>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-400">1,247 份</p>
            </div>
          </MotionItem>
        </div>
      </MotionWrapper>
    </section>
  );
}
