"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
// 使用浏览器原生 API 替代 uuid 包，零 bundle 成本
const uuidv4 = () => crypto.randomUUID();
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import type { LeadApiResponse } from "@/types/leads";

type EmployerForm = {
  name: string;
  company: string;
  position: string;
  phone: string;
  monthlyPositions: string;
  primaryCity: string;
  currentTools: string[];
  consent: boolean;
  honeypot: string;
};

type CandidateForm = {
  name: string;
  phone: string;
  targetPosition: string;
  targetCity: string;
  consent: boolean;
  honeypot: string;
};

const toolOptions = [
  "BOSS直聘",
  "猎聘",
  "前程无忧",
  "智联招聘",
  "拉勾",
  "其他",
];

export function LeadForm() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") === "candidate" ? "candidate" : "employer";
  const [tab, setTab] = useState<"employer" | "candidate">(initialTab);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submissionId, setSubmissionId] = useState("");

  const employerForm = useForm<EmployerForm>({ defaultValues: { currentTools: [], honeypot: "" } });
  const candidateForm = useForm<CandidateForm>({ defaultValues: { honeypot: "" } });

  async function submitLead(audienceType: "employer" | "candidate", payload: Record<string, unknown>, honeypot: string) {
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          audienceType,
          leadType: audienceType === "employer" ? "trial" : "registration_intent",
          idempotencyKey: uuidv4(),
          sourcePage: "/contact",
          policyVersion: siteConfig.policyVersion,
          consentTimestamp: new Date().toISOString(),
          payload,
          honeypot,
        }),
      });

      const data: LeadApiResponse = await res.json();

      if (data.success) {
        setStatus("success");
        setSubmissionId(data.submissionId);
      } else {
        setStatus("error");
        setErrorMsg(data.error.message);
      }
    } catch {
      setStatus("error");
      setErrorMsg("网络异常，请检查网络后重试");
    }
  }

  function onEmployerSubmit(data: EmployerForm) {
    const { consent, honeypot, ...payload } = data;
    submitLead("employer", payload, honeypot);
  }

  function onCandidateSubmit(data: CandidateForm) {
    const { consent, honeypot, ...payload } = data;
    submitLead("candidate", payload, honeypot);
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/30">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/50">
          <svg className="h-8 w-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">提交成功</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
          {tab === "employer"
            ? "我们会在 1 个工作日内与您联系，期待合作！"
            : "感谢您的关注，我们会尽快与您联系！"}
        </p>
        <p className="mt-4 text-xs text-gray-400 dark:text-slate-500">提交编号：{submissionId.slice(0, 8)}</p>
      </div>
    );
  }

  const inputClass = "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-400";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700 dark:text-slate-300";
  const errorClass = "mt-1 text-xs text-red-500";

  return (
    <div>
      {/* Tab selector */}
      <div className="mb-8 flex rounded-xl bg-gray-100 p-1 dark:bg-slate-700">
        {(["employer", "candidate"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => { setTab(t); setStatus("idle"); }}
            className={`flex-1 rounded-lg py-3 text-sm font-medium transition-colors ${
              tab === t ? "bg-white text-gray-900 shadow-sm dark:bg-slate-600 dark:text-white" : "text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            {t === "employer" ? "企业 HR" : "求职者"}
          </button>
        ))}
      </div>

      {status === "error" && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
          {errorMsg}
        </div>
      )}

      {tab === "employer" ? (
        <form onSubmit={employerForm.handleSubmit(onEmployerSubmit)} className="space-y-5">
          <input type="text" {...employerForm.register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="employer-name" className={labelClass}>姓名 *</label>
              <input id="employer-name" {...employerForm.register("name", { required: true, minLength: 2, maxLength: 20 })} className={inputClass} placeholder="您的姓名" />
              {employerForm.formState.errors.name && <p className={errorClass}>请输入 2-20 字的姓名</p>}
            </div>
            <div>
              <label htmlFor="employer-phone" className={labelClass}>手机号 *</label>
              <input id="employer-phone" {...employerForm.register("phone", { required: true, pattern: /^1[3-9]\d{9}$/ })} className={inputClass} placeholder="11 位手机号" />
              {employerForm.formState.errors.phone && <p className={errorClass}>请输入有效的手机号</p>}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="employer-company" className={labelClass}>公司名称 *</label>
              <input id="employer-company" {...employerForm.register("company", { required: true, minLength: 2, maxLength: 50 })} className={inputClass} placeholder="公司全称" />
              {employerForm.formState.errors.company && <p className={errorClass}>请输入公司名称</p>}
            </div>
            <div>
              <label htmlFor="employer-position" className={labelClass}>职位 *</label>
              <input id="employer-position" {...employerForm.register("position", { required: true, minLength: 2, maxLength: 30 })} className={inputClass} placeholder="您的职位" />
              {employerForm.formState.errors.position && <p className={errorClass}>请输入职位</p>}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="employer-monthly-positions" className={labelClass}>月均招聘职位数 *</label>
              <select id="employer-monthly-positions" {...employerForm.register("monthlyPositions", { required: true })} className={inputClass}>
                <option value="">请选择</option>
                <option value="1-5">1-5 个</option>
                <option value="6-20">6-20 个</option>
                <option value="21-50">21-50 个</option>
                <option value="50+">50+ 个</option>
              </select>
              {employerForm.formState.errors.monthlyPositions && <p className={errorClass}>请选择</p>}
            </div>
            <div>
              <label htmlFor="employer-city" className={labelClass}>主要招聘城市 *</label>
              <input id="employer-city" {...employerForm.register("primaryCity", { required: true, minLength: 2, maxLength: 30 })} className={inputClass} placeholder="如：北京、上海" />
              {employerForm.formState.errors.primaryCity && <p className={errorClass}>请输入城市</p>}
            </div>
          </div>
          <div>
            <label className={labelClass} id="employer-tools-label">目前使用的招聘工具</label>
            <div className="flex flex-wrap gap-3">
              {toolOptions.map((tool) => (
                <label key={tool} className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-300">
                  <input type="checkbox" value={tool} {...employerForm.register("currentTools")} className="rounded border-gray-300" />
                  {tool}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-300">
              <input type="checkbox" {...employerForm.register("consent", { required: true })} className="mt-1 rounded border-gray-300" />
              <span>
                我已阅读并同意
                <a href="/privacy" className="text-blue-600 underline" target="_blank">隐私政策</a>
                和
                <a href="/terms" className="text-blue-600 underline" target="_blank">用户协议</a>
              </span>
            </label>
            {employerForm.formState.errors.consent && <p className={errorClass}>请同意隐私政策和用户协议</p>}
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl bg-blue-600 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {status === "submitting" ? "提交中..." : "提交，期待与您沟通"}
          </button>
        </form>
      ) : (
        <form onSubmit={candidateForm.handleSubmit(onCandidateSubmit)} className="space-y-5">
          <input type="text" {...candidateForm.register("honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="candidate-name" className={labelClass}>姓名 *</label>
              <input id="candidate-name" {...candidateForm.register("name", { required: true, minLength: 2, maxLength: 20 })} className={inputClass} placeholder="您的姓名" />
              {candidateForm.formState.errors.name && <p className={errorClass}>请输入姓名</p>}
            </div>
            <div>
              <label htmlFor="candidate-phone" className={labelClass}>手机号 *</label>
              <input id="candidate-phone" {...candidateForm.register("phone", { required: true, pattern: /^1[3-9]\d{9}$/ })} className={inputClass} placeholder="11 位手机号" />
              {candidateForm.formState.errors.phone && <p className={errorClass}>请输入有效的手机号</p>}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="candidate-position" className={labelClass}>目标岗位 *</label>
              <input id="candidate-position" {...candidateForm.register("targetPosition", { required: true, minLength: 2, maxLength: 30 })} className={inputClass} placeholder="如：前端工程师" />
              {candidateForm.formState.errors.targetPosition && <p className={errorClass}>请输入目标岗位</p>}
            </div>
            <div>
              <label htmlFor="candidate-city" className={labelClass}>目标城市 *</label>
              <input id="candidate-city" {...candidateForm.register("targetCity", { required: true, minLength: 2, maxLength: 20 })} className={inputClass} placeholder="如：北京" />
              {candidateForm.formState.errors.targetCity && <p className={errorClass}>请输入目标城市</p>}
            </div>
          </div>
          <div>
            <label className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-300">
              <input type="checkbox" {...candidateForm.register("consent", { required: true })} className="mt-1 rounded border-gray-300" />
              <span>
                我已阅读并同意
                <a href="/privacy" className="text-blue-600 underline" target="_blank">隐私政策</a>
                和
                <a href="/terms" className="text-blue-600 underline" target="_blank">用户协议</a>
              </span>
            </label>
            {candidateForm.formState.errors.consent && <p className={errorClass}>请同意隐私政策和用户协议</p>}
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl bg-emerald-600 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-50"
          >
            {status === "submitting" ? "提交中..." : "提交，开始体验"}
          </button>
        </form>
      )}
    </div>
  );
}
