import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-gray-100 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-4 w-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="16" r="5" fill="white" opacity="0.9" />
                  <circle cx="11" cy="16" r="2.5" fill="#0EA5E9" />
                  <line x1="16" y1="16" x2="21" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                  <circle cx="23" cy="16" r="3.5" fill="#22C55E" />
                </svg>
              </div>
              <span className="text-lg font-bold text-primary dark:text-primary-light">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary dark:text-slate-400">AI 驱动的双端智能招聘平台</p>
            <p className="mt-4 text-xs text-text-muted dark:text-slate-500">{siteConfig.company.email}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-slate-200">产品</h4>
            <ul className="mt-3 space-y-2">
              {siteConfig.footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-slate-200">公司</h4>
            <ul className="mt-3 space-y-2">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-slate-200">法律信息</h4>
            <ul className="mt-3 space-y-2">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary dark:text-slate-400 dark:hover:text-primary-light">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 dark:border-slate-800">
          <div className="flex flex-col items-center gap-2 text-center text-xs text-text-muted sm:flex-row sm:justify-between dark:text-slate-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}</p>
            <p>{siteConfig.company.icp}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
