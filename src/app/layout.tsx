import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConsentBanner } from "@/components/layout/consent-banner";
import { ThemeProvider } from "@/components/layout/theme-provider";

/* ---- Google Fonts (optimized by next/font) ---- */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sc",
  weight: ["400", "500", "700"],
});

/**
 * Inline script to prevent flash of light theme on dark-mode users.
 * Runs before React hydrates, reads localStorage and system preference.
 */
const themeInitScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var isDark = theme === 'dark' ||
        (!theme || theme === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) document.documentElement.classList.add('dark');
    } catch(e) {}
  })();
`;

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - AI 驱动的智能招聘平台`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - AI 驱动的智能招聘平台`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: process.env.NEXT_PUBLIC_SITE_ENV === "production",
    follow: process.env.NEXT_PUBLIC_SITE_ENV === "production",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${plusJakarta.variable} ${notoSansSC.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-background text-gray-900 antialiased dark:bg-dark-bg dark:text-slate-200">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
