"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

type MobileNavProps = { open: boolean; onClose: () => void };

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} onClick={onClose} />
          <motion.div className="fixed inset-y-0 right-0 w-72 bg-white p-6 shadow-xl dark:bg-slate-900 dark:shadow-2xl" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3, ease: "easeOut" }}>
            <div className="mb-8 flex items-center justify-between">
              <span className="text-lg font-bold text-primary dark:text-primary-light">{siteConfig.name}</span>
              <button type="button" onClick={onClose} aria-label="关闭菜单" className="cursor-pointer rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800">
                <X className="h-6 w-6 text-gray-700 dark:text-slate-300" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {siteConfig.nav.map((item, i) => (
                <motion.div key={item.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                  <Link href={item.href} onClick={onClose} className="block text-base font-medium text-gray-700 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary-light">{item.label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Link href="/contact" onClick={onClose} className="mt-4 block cursor-pointer rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">免费试用</Link>
              </motion.div>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
