# Page Override: Pricing (/pricing)

> Overrides `MASTER.md` for the pricing page only.

---

## Section Order

1. **Hero** — 渐变背景, "选择适合你的方案" 标题
2. **Pricing Cards** — 3 档并排, 中间高亮 (推荐)
3. **FAQ Accordion** — `slate-50` 背景

## Pricing Cards Override

| Attribute | Free | Standard (推荐) | Enterprise |
|-----------|------|-----------------|------------|
| Border | `border-slate-100` | `ring-2 ring-blue-600 border-blue-200` | `border-slate-100` |
| Background | `white` | `sky-50/50` | `white` |
| Shadow | `shadow-sm` | `shadow-lg` | `shadow-sm` |
| Badge | — | "推荐" badge (`bg-blue-600 text-white`) | — |

## Animation Overrides

| Element | Animation |
|---------|-----------|
| Pricing cards | `fadeInUp` + stagger (0.15s per card) |
| FAQ expand/collapse | `AnimatePresence` — height auto animation (300ms, ease-in-out) |
| Card hover | `translateY(-4px)` + shadow-lg (200ms) |

## FAQ Accordion Specific

- 使用 `framer-motion` 的 `AnimatePresence` + `motion.div` 实现平滑展开
- 展开时高度从 0 到 auto (使用 `layout` prop)
- ChevronDown 图标旋转动画 (180deg, 200ms)
