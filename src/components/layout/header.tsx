"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-gray-200/60 bg-white/90 shadow-sm backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/90"
          : "border-b border-transparent bg-white/80 backdrop-blur-md dark:bg-slate-900/80"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Logo />
          </div>
          <span className="text-xl font-bold text-primary dark:text-primary-light">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${isActive
                    ? "text-primary dark:text-primary-light"
                    : "text-gray-600 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="mt-0.5 block h-0.5 rounded-full bg-primary dark:bg-primary-light" />
                )}
              </Link>
            );
          })}

          <ThemeToggle />

          <Link
            href="/contact"
            className="cursor-pointer rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            免费试用
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="cursor-pointer rounded-lg p-1.5 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
            onClick={() => setMobileOpen(true)}
            aria-label="打开菜单"
          >
            <Menu className="h-6 w-6 text-gray-700 dark:text-slate-300" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
