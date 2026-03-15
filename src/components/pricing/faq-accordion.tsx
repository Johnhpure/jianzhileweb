"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { staggerContainer, fadeInUp, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    q: "免费版有什么限制？到期后数据会丢失吗？",
    a: "免费版每月可处理 50 份简历、发布 1 个岗位，支持 1 个团队账号。免费版本身没有时间限制，可以一直使用。如果连续 30 天未登录，系统会保留您的账号和配置，但已处理的简历数据会在 30 天后自动清理（升级到付费版可永久保留）。",
  },
  {
    q: "AI 评分的准确性如何保证？会不会误判优秀候选人？",
    a: "简职了的 AI 评分基于 23 个维度的综合分析，经过 800 万+ 真实招聘场景训练。但我们清楚地知道，AI 无法完全替代人类判断。因此每位候选人的评分都附有详细的维度分解和评分理由，HR 可以查看每个维度的得分来源。同时系统会根据您的面试反馈和录用结果持续优化模型——使用越久越精准。",
  },
  {
    q: "数据安全如何保障？候选人简历会被共享或用于训练模型吗？",
    a: "绝对不会。每家企业的数据严格隔离，您上传的简历仅用于您自己的招聘筛选，不会与其他企业共享，也不会被用于训练通用模型。所有数据使用 AES-256 加密存储，传输过程采用 TLS 1.3 加密。我们已通过国家信息安全等级保护三级认证，并支持签署数据安全协议。旗舰版还支持私有化部署，数据完全不出您的企业网络。",
  },
  {
    q: "可以和我们现有的招聘系统（ATS）集成吗？",
    a: "可以。企业标准版和旗舰版均支持通过标准 RESTful API 与主流 ATS 系统集成，包括北森、Moka、SAP SuccessFactors 等。同时支持企业微信、钉钉、飞书等 IM 工具的消息推送。我们的技术团队会提供完整的 API 文档和集成指导，通常 1-2 周即可完成对接。",
  },
  {
    q: "合同和发票怎么处理？支持月付还是年付？",
    a: "我们支持签订正式企业服务合同，提供增值税专用发票。付费周期灵活，标准版支持按月或按年付费（年付享受 8.5 折优惠），旗舰版按年签约。企业采购流程中需要的资质文件、技术方案书等我们都可以配合提供。",
  },
  {
    q: "如何取消订阅？会不会有违约金？",
    a: "月付用户可以随时在账户设置中取消订阅，取消后当前计费周期仍可正常使用，我们不收取任何取消费用或违约金。年付用户如果因产品问题需要提前终止，我们支持按剩余月份比例退款。",
  },
  {
    q: "团队成员可以设置不同权限吗？",
    a: "可以。简职了支持管理员、HR 负责人、普通 HR、面试官、只读查看者等多种角色，每种角色可以精确控制到「查看简历」「下载简历」「修改评分」「导出数据」等细粒度操作权限。管理员可以按部门或岗位组灵活分配权限。",
  },
  {
    q: "处理中英文混合简历的效果如何？",
    a: "简职了的 NLP 引擎对中英文混合简历的解析准确率达 97.3%，覆盖 36 个行业的专业术语库。无论是海归候选人的中英混排简历，还是外企 HR 的纯英文 JD，都能准确识别和匹配。",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-800/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white" initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUp}>
          常见问题
        </motion.h2>
        <motion.div className="mt-10 space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig}>
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} variants={fadeInUp} className="overflow-hidden rounded-xl border border-gray-100 bg-white transition-shadow duration-200 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <button type="button" className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)} aria-expanded={openIndex === i}>
                <span className="text-sm font-medium text-gray-900 dark:text-slate-200">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <ChevronDown className="h-5 w-5 text-gray-400 dark:text-slate-500" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                    <div className="border-t border-gray-50 px-6 py-4 dark:border-slate-700">
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
