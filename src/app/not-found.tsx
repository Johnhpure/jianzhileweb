import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center px-4 dark:bg-dark-bg">
            <div className="text-center">
                <p className="text-7xl font-bold text-blue-600">404</p>
                <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                    页面未找到
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                    您访问的页面不存在或已被移除。
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Link
                        href="/"
                        className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                        返回首页
                    </Link>
                    <Link
                        href="/contact"
                        className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                        联系我们
                    </Link>
                </div>
            </div>
        </section>
    );
}
