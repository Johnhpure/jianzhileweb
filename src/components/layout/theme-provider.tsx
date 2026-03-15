"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
    theme: Theme;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

    // Read from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored && ["light", "dark", "system"].includes(stored)) {
            setThemeState(stored);
        }
    }, []);

    // Apply theme to <html> and resolve
    useEffect(() => {
        const root = document.documentElement;
        const resolved = theme === "system" ? getSystemTheme() : theme;

        root.classList.toggle("dark", resolved === "dark");
        setResolvedTheme(resolved);

        // Update meta theme-color for mobile browsers
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) {
            meta.setAttribute(
                "content",
                resolved === "dark" ? "#0f172a" : "#ffffff"
            );
        }
    }, [theme]);

    // Listen for system theme changes when mode is "system"
    useEffect(() => {
        if (theme !== "system") return;

        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        function onChange() {
            const resolved = getSystemTheme();
            document.documentElement.classList.toggle("dark", resolved === "dark");
            setResolvedTheme(resolved);
        }

        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [theme]);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
