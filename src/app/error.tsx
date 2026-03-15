"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <section className="flex min-h-[60vh] items-center justify-center px-4 dark:bg-dark-bg">
            <div className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-950">
                    <svg
                        className="h-10 w-10 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">出了点问题</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                    页面遇到了一个错误，请尝试刷新或返回首页。
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <button
                        type="button"
                        onClick={reset}
                        className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        重试
                    </button>
                    <Link
                        href="/"
                        className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        返回首页
                    </Link>
                </div>
                {error.digest && (
                    <p className="mt-6 text-xs text-gray-300">
                        错误编号: {error.digest}
                    </p>
                )}
            </div>
        </section>
    );
}
