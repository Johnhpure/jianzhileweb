import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { LeadForm } from "@/components/contact/lead-form";

export const metadata: Metadata = generatePageMetadata({
  title: "申请试用 · 联系我们",
  description:
    "申请简职了 14 天免费试用，或预约产品演示。企业 HR 和求职者均可在此提交。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            开始使用简职了
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            填写以下信息，我们会在 1 个工作日内与您联系
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Suspense fallback={<div className="h-96 animate-pulse rounded-2xl bg-gray-100" />}>
                <LeadForm />
              </Suspense>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-bold text-gray-900">
                  其他联系方式
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        商务邮箱
                      </p>
                      <p className="text-sm text-gray-600">
                        {siteConfig.company.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        联系电话
                      </p>
                      <p className="text-sm text-gray-600">
                        {siteConfig.company.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        微信公众号
                      </p>
                      <p className="text-sm text-gray-600">
                        扫码关注「简职了」获取最新资讯
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
