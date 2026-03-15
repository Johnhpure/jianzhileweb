# Page Override: Solutions — Employer (/solutions/employer)

> Overrides `MASTER.md` for the employer solutions page only.

---

## Section Order

1. **Hero** — 渐变背景, "AI 赋能 HR" 标题
2. **Features** — 2×2 网格功能卡片
3. **Workflow** — 6 步横向流程
4. **Comparison Table** — 传统 vs 简职了
5. **Case Studies** — 客户案例 (数据驱动组件)
6. **CTA** — 品牌蓝色背景全宽 CTA

## Animation Overrides

| Element | Animation |
|---------|-----------|
| Feature cards | `fadeInUp` + stagger (0.1s, 2×2 grid order) |
| Workflow steps | `fadeInLeft` 依次入场 (stagger 0.15s) |
| Workflow arrows | `fadeIn` (delay after step) |
| Comparison table rows | `fadeInUp` rows stagger |
| CTA section | `fadeIn` on scroll |

## Color Override

- 此页面以 **蓝色系** 为主 (`blue-600`)
- Feature 图标: `text-blue-600`
- Workflow 数字圈: `bg-blue-100 text-blue-600`
- CTA 背景: `bg-blue-600`

## Case Study Card Design

```
bg-white rounded-2xl border border-slate-100
p-8 shadow-sm hover:shadow-md
左侧: 企业 Logo + 行业标签
右侧: 挑战 + 解决方案 + 关键指标
```
