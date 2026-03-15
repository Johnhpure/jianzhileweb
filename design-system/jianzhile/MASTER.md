# Design System Master File — 简职了 (JianZhiLe)

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** JianZhiLe (简职了)
**Product:** AI-powered Dual-Sided Recruitment Platform (B2B SaaS + C2C)
**Generated:** 2026-03-10
**Category:** SaaS / HR-Tech
**Design Style:** Glassmorphism + Professional Modern

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Tailwind | Usage |
|------|-----|--------------|----------|-------|
| Primary | `#0369A1` | `--color-primary` | `sky-700` | 主品牌色、导航、标题链接 |
| Primary Light | `#0EA5E9` | `--color-primary-light` | `sky-500` | hover 状态、次要强调 |
| Primary Dark | `#075985` | `--color-primary-dark` | `sky-800` | active 状态、深色文字 |
| CTA / B端 | `#2563EB` | `--color-cta-employer` | `blue-600` | 企业端 CTA 按钮 |
| CTA / C端 | `#059669` | `--color-cta-candidate` | `emerald-600` | 求职端 CTA 按钮 |
| Success | `#22C55E` | `--color-success` | `green-500` | 成功状态、正面指标 |
| Warning | `#F59E0B` | `--color-warning` | `amber-500` | 警告、星级评分 |
| Error | `#EF4444` | `--color-error` | `red-500` | 错误状态、痛点描述 |
| Background | `#F0F9FF` | `--color-background` | `sky-50` | 页面底色 |
| Surface | `#FFFFFF` | `--color-surface` | `white` | 卡片、表单背景 |
| Text Primary | `#0C4A6E` | `--color-text` | `sky-900` | 主文字 |
| Text Secondary | `#64748B` | `--color-text-secondary` | `slate-500` | 辅助说明文字 |
| Text Muted | `#94A3B8` | `--color-text-muted` | `slate-400` | 占位符、弱化文字 |
| Border | `#E2E8F0` | `--color-border` | `slate-200` | 默认边框 |
| Border Light | `#F1F5F9` | `--color-border-light` | `slate-100` | 卡片分隔线 |

**配色策略:**
- B端 (企业HR) 使用 **蓝色系** (`blue-600`) — 传达专业、信任
- C端 (求职者) 使用 **绿色系** (`emerald-600`) — 传达成长、机会
- 双色系统贯穿全站，在 Hero、CTA、卡片中体现

### Typography

| Role | Font | Weight | Size Range | CSS Variable |
|------|------|--------|------------|--------------|
| **Heading (英文/数字)** | Plus Jakarta Sans | 600-700 | 24-60px | `--font-heading` |
| **Body (英文/数字)** | Inter | 400-500 | 14-18px | `--font-body` |
| **中文衬底** | Noto Sans SC | 300-700 | all | `--font-chinese` |

**字体栈** (fallback chain):
```css
--font-heading: 'Plus Jakarta Sans', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
```

> **Why this combination:**
> - Plus Jakarta Sans: 几何感强、现代 SaaS 感，适合标题和数字
> - Inter: Google 推荐的正文字体，可读性极佳
> - Noto Sans SC: 谷歌的中文字体，覆盖简体中文
> - 使用 `next/font` 加载以获得最佳性能 (自动 font-display: swap)

**Type Scale:**
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px | 1.5 | 标签、脚注、元信息 |
| `text-sm` | 14px | 1.5 | 辅助文本、卡片正文 |
| `text-base` | 16px | 1.6 | 正文默认 |
| `text-lg` | 18px | 1.6 | 卡片标题、Feature name |
| `text-xl` | 20px | 1.4 | Section 副标题 |
| `text-2xl` | 24px | 1.3 | Section 标题 |
| `text-3xl` | 30px | 1.2 | 页面标题 |
| `text-4xl` | 36px | 1.15 | Hero 标题 (sm) |
| `text-5xl` | 48px | 1.1 | Hero 标题 (lg) |
| `text-6xl` | 60px | 1.05 | Hero 标题 (xl) - 如需要 |

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | 图标与文字间距 |
| `--space-sm` | `8px` / `0.5rem` | 紧凑间距、标签内 |
| `--space-md` | `16px` / `1rem` | 标准 padding |
| `--space-lg` | `24px` / `1.5rem` | 卡片内间距 |
| `--space-xl` | `32px` / `2rem` | Section 间元素间距 |
| `--space-2xl` | `48px` / `3rem` | Section 间距 |
| `--space-3xl` | `64px` / `4rem` | Hero padding |
| `--space-4xl` | `80px` / `5rem` | Section padding (py-20) |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | 微浮起 |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1)` | 卡片默认 |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | 卡片 hover、下拉菜单 |
| `--shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1)` | 模态框、Hero CTA |
| `--shadow-glow` | `0 0 20px rgba(3,105,161,0.15)` | 品牌色光晕效果 |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `6px` | 小按钮、标签 |
| `--radius-md` | `8px` | 输入框、小卡片 |
| `--radius-lg` | `12px` | 大按钮 |
| `--radius-xl` | `16px` | 内容卡片 |
| `--radius-2xl` | `24px` | Hero 卡片、模态框 |
| `--radius-full` | `9999px` | Badge、头像 |

---

## Glassmorphism 实现规范

**全局 Glassmorphism 变量:**
```css
--glass-blur: 16px;
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-bg-dark: rgba(255, 255, 255, 0.5);
--glass-border: 1px solid rgba(255, 255, 255, 0.3);
--glass-shadow: 0 8px 32px rgba(3, 105, 161, 0.08);
```

**使用场景:**
- ✅ Header 导航栏 (`bg-white/80 backdrop-blur-md`)
- ✅ 卡片 hover overlay
- ✅ 模态框背景
- ⚠️ 不在所有卡片上使用 (会影响可读性)

---

## Animation 规范

### 通用原则
- **每个视口最多动画 1-2 个关键元素** (避免 Excessive animation 反模式)
- **入场动画使用 `ease-out`**，退场使用 `ease-in`
- **不使用 `linear`** 做 UI 过渡
- **必须尊重 `prefers-reduced-motion`**

### Framer Motion 变体标准

```typescript
// 基础淡入上滑
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// 容器 Stagger
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

// 缩放入场
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};
```

### CSS Transition 标准
| 属性 | 时长 | 曲线 | 场景 |
|------|------|------|------|
| `color`, `background` | 200ms | `ease` | Hover 状态 |
| `opacity` | 200ms | `ease` | 显隐切换 |
| `transform` | 300ms | `ease-out` | 卡片 hover 上浮 |
| `box-shadow` | 200ms | `ease` | 卡片 hover 阴影 |
| `max-height` | 300ms | `ease-in-out` | 手风琴展开 |

### reduced-motion 降级
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Page Pattern — Hero + Social Proof + CTA

**Landing 模式:** Hero → Problem → Solution → Social Proof → CTA

| Section | 背景色 | 内容 |
|---------|--------|------|
| Hero | 渐变 (`sky-50` → `white` → `emerald-50`) | 标题 + 副标题 + 双色 CTA |
| Stats | `white` | 4 个数字指标 (动画) |
| B端价值 | `slate-50` | 痛点 → 解决方案卡片 |
| C端价值 | `white` | 痛点 → 解决方案卡片 |
| Social Proof | `slate-50` | 合作企业 + 用户评价 |
| CTA | 品牌主色 (`sky-700`) | 行动号召 |

**Conversion Optimization:**
- CTA 按钮出现至少 3 次 (Hero、中间、底部)
- Social proof 放在 CTA 前面
- 用户评价包含 照片 + 姓名 + 职位
- 使用具体数字 (100x, 95%+, 500+) 而非模糊描述

---

## Component Specs

### Buttons

**Primary CTA (企业端):**
```
bg-blue-600 hover:bg-blue-700 text-white
px-8 py-4 rounded-xl font-semibold
shadow-lg hover:shadow-xl
transition-all duration-200
hover:translate-y-[-1px]
```

**Primary CTA (求职端):**
```
bg-emerald-600 hover:bg-emerald-700 text-white
px-8 py-4 rounded-xl font-semibold
shadow-lg hover:shadow-xl
transition-all duration-200
hover:translate-y-[-1px]
```

**Secondary:**
```
border-2 border-sky-700 text-sky-700
hover:bg-sky-50
px-6 py-3 rounded-xl font-semibold
transition-all duration-200
```

### Cards
```
bg-white rounded-2xl border border-slate-100
p-8 shadow-sm
hover:shadow-md hover:translate-y-[-2px]
transition-all duration-300 cursor-pointer
```

### Inputs
```
w-full rounded-lg border border-slate-200
px-4 py-3 text-sm
focus:border-sky-500 focus:ring-1 focus:ring-sky-500
focus:outline-none
transition-colors duration-200
```

---

## Anti-Patterns (Do NOT Use)

- ❌ **Excessive animation** — 每个视口最多 1-2 个动画元素
- ❌ **Dark mode by default** — 保持 light mode 为默认
- ❌ **Emojis as icons** — 使用 Lucide React SVG 图标
- ❌ **Missing cursor:pointer** — 所有可点击元素必须有 cursor:pointer
- ❌ **Layout-shifting hovers** — 避免触发回流的 hover 效果
- ❌ **Low contrast text** — 保持 4.5:1 最低对比度
- ❌ **Instant state changes** — 始终使用 transition (150-300ms)
- ❌ **Invisible focus states** — 键盘导航必须可见焦点
- ❌ **Linear easing** — UI 过渡不使用 linear 函数
- ❌ **过度 Glassmorphism** — 仅在 Header 和 overlay 使用，主内容保持清晰可读

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use Lucide React SVG)
- [ ] All icons from Lucide React (consistent icon set)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast ≥ 4.5:1
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbar
- [ ] No horizontal scroll on mobile
- [ ] Chinese fonts (Noto Sans SC) properly loaded
- [ ] B端 uses blue (#2563EB), C端 uses green (#059669)
- [ ] All `next/image` instead of `<img>`
