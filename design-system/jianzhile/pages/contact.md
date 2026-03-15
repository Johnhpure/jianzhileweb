# Page Override: Contact (/contact)

> Overrides `MASTER.md` for the contact page only.

---

## Section Order

1. **Hero** — 简洁标题 + 副标题
2. **Lead Form** — 双 Tab 表单

## Form Overrides

- Tab 切换使用 `framer-motion` 的 `layout` 动画 (滑动指示器)
- 企业端 Tab 激活色: `blue-600`
- 求职端 Tab 激活色: `emerald-600`
- 表单提交按钮颜色跟随当前 Tab (蓝/绿)
- Success state: `scaleIn` 动画 + confetti 效果 (可选)

## Input Styling Override

```
focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500
```

- 所有输入框获焦时有品牌色光晕
- 错误状态: `border-red-500 ring-red-500/20`
- 复选框使用品牌蓝色

## Turnstile 集成位置

- Turnstile widget 放在 consent checkbox 和 submit button 之间
- 使用 `compact` 模式以适应表单宽度
