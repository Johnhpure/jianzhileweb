"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    // Cycle through: light → dark → system → light ...
    function cycleTheme() {
        const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
        setTheme(next);
    }

    return (
        <button
            type="button"
            onClick={cycleTheme}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
            aria-label={`当前主题: ${theme === "light" ? "浅色" : theme === "dark" ? "深色" : "跟随系统"}，点击切换`}
            title={theme === "light" ? "浅色模式" : theme === "dark" ? "深色模式" : "跟随系统"}
        >
            {theme === "light" && <Sun className="h-5 w-5" />}
            {theme === "dark" && <Moon className="h-5 w-5" />}
            {theme === "system" && <Monitor className="h-5 w-5" />}
        </button>
    );
}
