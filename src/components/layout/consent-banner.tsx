"use client";

import { useState, useEffect } from "react";

const CONSENT_KEY = "jzl_analytics_consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "granted");
    setVisible(false);
    window.dispatchEvent(new Event("consent-changed"));
  }

  function handleReject() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
    window.dispatchEvent(new Event("consent-changed"));
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row">
        <p className="flex-1 text-sm text-gray-600 dark:text-slate-400">
          我们使用分析工具来改进产品体验。点击"接受"即表示您同意我们使用
          Cookie 和分析工具收集匿名使用数据。详情请参阅
          <a href="/privacy" className="text-blue-600 underline dark:text-blue-400">
            隐私政策
          </a>
          。
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleReject}
            className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            拒绝
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            接受
          </button>
        </div>
      </div>
    </div>
  );
}
