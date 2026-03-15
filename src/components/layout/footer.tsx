import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-gray-100 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Logo />
              </div>
              <span className="text-lg font-bold text-primary dark:text-primary-light">{siteConfig.name}</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary dark:text-slate-400">企业与求职者的智能招聘服务平台</p>
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
