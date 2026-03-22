export const siteConfig = {
  name: "简职了",
  nameEn: "JianZhiLe",
  description:
    "简职了是面向企业和求职者的智能招聘服务平台，帮助 HR 高效筛选候选人，帮助求职者精准匹配岗位",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/images/og-default.png",

  company: {
    name: "简职了科技有限公司",
    address: "（待填写）",
    email: "bd@jianzhile.com",
    phone: "010-85441168",
    icp: "（ICP 备案号待填写）",
    wechatQr: "/images/wechat-qr.png",
  },

  nav: [
    { label: "首页", href: "/" },
    { label: "产品方案", href: "/solutions/employer" },
    { label: "定价", href: "/pricing" },
    { label: "关于我们", href: "/about" },
  ],

  footerLinks: {
    product: [
      { label: "企业智能招聘", href: "/solutions/employer" },
      { label: "定价方案", href: "/pricing" },
      { label: "申请试用", href: "/contact" },
    ],
    company: [
      { label: "关于我们", href: "/about" },
      { label: "联系我们", href: "/contact" },
    ],
    legal: [
      { label: "隐私政策", href: "/privacy" },
      { label: "用户协议", href: "/terms" },
    ],
  },

  /** Design System tokens — aligned with globals.css @theme */
  colors: {
    primary: "#0369A1",
    primaryLight: "#0EA5E9",
    primaryDark: "#075985",
    employer: "#2563EB",
    employerDark: "#1D4ED8",
    candidate: "#059669",
    candidateDark: "#047857",
    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
    text: "#0C4A6E",
    textSecondary: "#64748B",
    border: "#E2E8F0",
    background: "#F0F9FF",
    surface: "#FFFFFF",
  },

  policyVersion: process.env.NEXT_PUBLIC_POLICY_VERSION ?? "1.0.0",
} as const;
