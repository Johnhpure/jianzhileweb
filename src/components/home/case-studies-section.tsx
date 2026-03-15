import Image from "next/image";
import { CheckCircle } from "lucide-react";
import {
  MotionWrapper,
  MotionItem,
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/components/ui/motion-wrapper";

const employerCases = [
  {
    image: "/images/case-enterprise-team.png",
    companyType: "某互联网科技公司",
    companySize: "约 2,000 人",
    location: "深圳",
    title: "秋招 8,000 份简历，一周内完成初筛",
    story:
      "该公司每年秋招期会收到大量校园简历，HR 团队长期面临人手不足的问题。使用简职了之后，系统在 5 个工作日内完成了 8,000+ 份简历的全量评估和排序，输出了各岗位的候选人推荐名单。",
    results: [
      "初筛效率提升约 12 倍",
      "进入面试的候选人质量明显提升",
      "HR 团队有更多精力投入面试评估",
    ],
  },
  {
    image: "/images/case-manufacturing-hr.png",
    companyType: "某制造业上市公司",
    companySize: "约 5,000 人",
    location: "苏州",
    title: "15 个工程师岗位，招聘周期缩短 60%",
    story:
      "传统渠道招聘自动化工程师耗时长、匹配度低。接入简职了后，系统从多渠道汇集的简历中筛选出高匹配候选人，按技能契合度和行业经验排序，大幅缩短了招聘周期。",
    results: [
      "招聘周期从 2 个月缩短至 3 周",
      "技术岗位面试到场率提升至 85%",
      "入职半年后留存率超过 90%",
    ],
  },
];

const jobseekerCases = [
  {
    image: "/images/candidate-hired-success.png",
    name: "张同学",
    background: "2025 届 · 计算机专业本科",
    location: "广州",
    title: "从海投零回复到拿下心仪 Offer",
    story:
      "毕业季张同学在各大招聘平台海投了两个月，投递了超过 200 个岗位，但面试邀请寥寥无几。通过简职了的匹配分析，系统帮他定位到真正契合的岗位方向，优化投递策略后效果立竿见影。",
    results: [
      "投递精准度大幅提升，回复率提高 5 倍",
      "两周内收到 6 个面试邀请",
      "成功入职某知名游戏公司",
    ],
  },
  {
    image: "/images/case-jobseeker-success.png",
    name: "李女士",
    background: "5 年产品经理经验",
    location: "上海",
    title: "职业转型成功，薪资涨幅 30%",
    story:
      "李女士希望从传统行业转型到互联网领域，但对自身竞争力和目标岗位缺乏清晰判断。简职了帮她分析了技能优势和求职市场需求的匹配情况，推荐了适合她背景的岗位列表和针对性改进建议。",
    results: [
      "明确了产品经理方向的职业定位",
      "优化简历后获得 8 个面试机会",
      "成功入职某电商平台，薪资上涨 30%",
    ],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-20 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <MotionWrapper variants={staggerContainer} viewport={viewportConfig}>
          <MotionItem
            as="p"
            variants={fadeInUp}
            className="text-center text-sm font-semibold uppercase tracking-widest text-primary dark:text-primary-light"
          >
            成功案例
          </MotionItem>
          <MotionItem
            as="h2"
            variants={fadeInUp}
            className="mt-3 text-center text-3xl font-bold text-gray-900 dark:text-white"
          >
            真实客户，真实成果
          </MotionItem>
          <MotionItem
            as="p"
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-center text-gray-600 dark:text-slate-400"
          >
            从企业招聘到个人求职，看看简职了如何帮助他们解决实际问题
          </MotionItem>
        </MotionWrapper>

        {/* 企业端案例 */}
        <MotionWrapper
          as="h3"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="mt-16 text-xl font-bold text-gray-900 dark:text-white"
        >
          企业招聘案例
        </MotionWrapper>
        <MotionWrapper
          className="mt-8 grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          viewport={viewportConfig}
        >
          {employerCases.map((cs) => (
            <MotionItem
              key={cs.title}
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                  <span className="rounded-full bg-blue-50 px-2.5 py-0.5 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {cs.companyType}
                  </span>
                  <span>{cs.companySize}</span>
                  <span>·</span>
                  <span>{cs.location}</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                  {cs.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  {cs.story}
                </p>
                <ul className="mt-4 space-y-2">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>

        {/* 求职者端案例 */}
        <MotionWrapper
          as="h3"
          variants={fadeInUp}
          viewport={viewportConfig}
          className="mt-16 text-xl font-bold text-gray-900 dark:text-white"
        >
          求职者成功故事
        </MotionWrapper>
        <MotionWrapper
          className="mt-8 grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          viewport={viewportConfig}
        >
          {jobseekerCases.map((cs) => (
            <MotionItem
              key={cs.title}
              variants={fadeInUp}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    {cs.name}
                  </span>
                  <span>{cs.background}</span>
                  <span>·</span>
                  <span>{cs.location}</span>
                </div>
                <h4 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
                  {cs.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  {cs.story}
                </p>
                <ul className="mt-4 space-y-2">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
