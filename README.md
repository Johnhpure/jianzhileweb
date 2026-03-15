# 简职了 - 智能招聘服务平台

<p align="center">
  <img src="public/images/logo-icon.png" alt="简职了 Logo" width="80" />
</p>

<p align="center">
  <strong>让每一次招聘，都更加精准高效</strong>
</p>

<p align="center">
  <a href="#技术栈">技术栈</a> ·
  <a href="#功能特性">功能特性</a> ·
  <a href="#快速开始">快速开始</a> ·
  <a href="#项目结构">项目结构</a> ·
  <a href="#部署">部署</a>
</p>

---

## 项目简介

**简职了**是一个面向企业 HR 和求职者的双端智能招聘服务平台。帮助企业 HR 高效筛选候选人，帮助求职者精准匹配理想岗位。

- 🏢 **企业端**：简历智能解析、多维度候选人评分、面试问题自动生成
- 👤 **求职端**：岗位精准推荐、简历优化建议、一键批量投递

已服务超过 **500+ 家企业客户**，帮助超过 **50,000+ 求职者** 找到理想工作。

---

## 技术栈

| 类别 | 技术 |
|------|------|
| **框架** | [Next.js 15](https://nextjs.org/) (App Router) |
| **语言** | TypeScript |
| **样式** | Tailwind CSS v4 |
| **动画** | Framer Motion (LazyMotion 按需加载) |
| **图标** | Lucide React |
| **表单** | React Hook Form |
| **数据库** | SQLite (better-sqlite3，本地轻量化方案) |
| **包管理** | pnpm |
| **部署** | Vercel / AWS |

---

## 功能特性

### 🌐 官网页面

- **首页**：Hero 区 + 数据统计 + B 端/C 端价值展示 + 成功案例 + 客户评价 + 应用场景 + 技术架构 + 安全保障
- **产品方案**：企业端智能招聘全流程解决方案
- **定价**：灵活的 SaaS 定价方案 + FAQ
- **关于我们**：公司愿景、价值观、核心团队、发展历程
- **联系我们**：双端表单（企业 HR / 求职者），含反垃圾策略和隐私合规

### 🎨 设计特性

- 深色 / 浅色双模式完整适配
- 响应式布局（桌面端 / 平板 / 移动端）
- 流畅的滚动动画（基于 IntersectionObserver 的视口触发）
- 专业的企业级视觉设计，真实案例照片

### 🛡️ 安全与合规

- 表单提交频率限制（IP 级别 + 全局级别）
- Honeypot 反机器人策略
- 输入内容 XSS 过滤
- 隐私政策和用户协议合规

---

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/Johnhpure/jianzhileweb.git
cd jianzhileweb

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建与部署

```bash
# 生产构建
pnpm build

# 本地预览生产版本
pnpm start
```

---

## 项目结构

```
jianzhileweb/
├── public/
│   └── images/           # 静态图片资源（Logo、案例照片、团队头像等）
├── src/
│   ├── app/              # Next.js App Router 页面
│   │   ├── page.tsx      # 首页
│   │   ├── layout.tsx    # 全局布局
│   │   ├── about/        # 关于我们
│   │   ├── contact/      # 联系我们
│   │   ├── pricing/      # 定价
│   │   ├── solutions/    # 产品方案
│   │   └── api/          # API 路由
│   ├── components/
│   │   ├── home/         # 首页各 Section 组件
│   │   ├── layout/       # Header / Footer
│   │   ├── ui/           # 通用 UI 组件（Logo、MotionWrapper 等）
│   │   ├── about/        # 关于我们页面组件
│   │   ├── contact/      # 联系表单组件
│   │   ├── pricing/      # 定价页组件
│   │   └── solutions/    # 方案页组件
│   ├── lib/              # 工具函数（动画配置、反垃圾、数据库、SEO 等）
│   └── types/            # TypeScript 类型定义
├── tailwind.config.ts    # Tailwind 配置
├── next.config.ts        # Next.js 配置
├── tsconfig.json         # TypeScript 配置
└── package.json
```

---

## 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `NEXT_PUBLIC_SITE_URL` | 网站 URL | `https://www.jianzhile.com` |
| `NEXT_PUBLIC_POLICY_VERSION` | 隐私政策版本号 | `2025-01-01` |

---

## 部署

### Vercel（推荐）

1. 将仓库导入 [Vercel](https://vercel.com)
2. 框架会被自动识别为 Next.js
3. 配置环境变量后点击部署

### AWS

本项目已申请参与 AWS Activate 初创企业扶持计划，可部署至：
- **AWS Amplify** — 托管前端
- **AWS Lambda** — API 路由

---

## 开发团队

| 姓名 | 职位 | 专长 |
|------|------|------|
| 张瑞 | CEO / 联合创始人 | 招聘行业 11 年经验，产品战略 |
| 李铭 | CTO / 联合创始人 | NLP/CV 博士，算法架构 |
| 王一帆 | CPO / 产品副总裁 | HR SaaS 产品设计 9 年 |
| 陈思远 | VP of Engineering | 分布式系统架构 15 年 |

---

## 许可证

本项目为私有商业项目，版权所有 © 2026 简职了科技有限公司。

---

<p align="center">
  <sub>用 ❤️ 打造 · 简职了团队</sub>
</p>
