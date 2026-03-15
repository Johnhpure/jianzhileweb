import type { Variants } from "framer-motion";

/**
 * 标准动画变体 — 遵循 design-system/jianzhile/MASTER.md 动画规范
 * - 入场使用 ease-out，退场使用 ease-in
 * - 每个视口最多动画 1-2 个关键元素
 * - 必须尊重 prefers-reduced-motion（framer-motion 默认支持）
 */

/** 淡入上滑 — 用于标题、段落、卡片入场 */
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/** 淡入下滑 — 用于顶部元素 */
export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/** 缩放入场 — 用于图标、Badge */
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/** 淡入 — 纯透明度 */
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

/** 容器 Stagger — 子元素交错入场 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

/** 慢速 Stagger — 用于 Hero 等重要区域 */
export const staggerContainerSlow: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

/** 视口触发配置 */
export const viewportConfig = {
    once: true,
    amount: 0.2 as const,
};

/** Hero 区域视口配置（更早触发） */
export const heroViewportConfig = {
    once: true,
    amount: 0.1 as const,
};
