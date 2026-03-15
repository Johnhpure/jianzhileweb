# Page Override: Homepage (/)

> Overrides `MASTER.md` for the homepage only.
> All other rules from MASTER.md still apply.

---

## Section Order

1. **Hero** — 渐变背景 (`sky-50` → `white` → `emerald-50`), 双色 CTA
2. **Stats** — 白色背景, 4 个数字动画 (IntersectionObserver + easeOutCubic)
3. **B端价值** — `slate-50` 背景, 3 张痛点→解决方案卡片, B端蓝色
4. **C端价值** — 白色背景, 3 张痛点→解决方案卡片, C端绿色
5. **Trust / Social Proof** — `slate-50` 背景, 合作企业 marquee + 用户评价

## Animation Overrides

| Section | Animation | Trigger |
|---------|-----------|---------|
| Hero Title | `fadeInUp` (y:30→0, 0.6s) | Page load |
| Hero Subtitle | `fadeInUp` (delay 0.15s) | Page load |
| Hero CTAs | `fadeInUp` (delay 0.3s) | Page load |
| Stats Numbers | Counter animation (1.5s, easeOutCubic) | IntersectionObserver (threshold 0.3) |
| Stats Icons | `scaleIn` (0.4s, stagger 0.1s) | IntersectionObserver |
| B-end Cards | `fadeInUp` + stagger (0.1s) | IntersectionObserver |
| C-end Cards | `fadeInUp` + stagger (0.1s) | IntersectionObserver |
| Trust Logos | Infinite horizontal marquee (40s) | Always |
| Testimonials | `fadeInUp` + stagger | IntersectionObserver |

## Hero Specific

- 背景增加浮动装饰元素 (subtle floating blobs with blur)
- 文字自适应: mobile `text-4xl`, sm `text-5xl`, lg `text-6xl`
- 两个 CTA 并排: 蓝色「我是企业HR」 + 绿色「我是求职者」
- 添加品牌信任指标 (如 "已服务 500+ 企业")
