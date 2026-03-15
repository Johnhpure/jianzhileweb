"use client";

/**
 * 通用动画包装器（客户端组件）
 * 将 framer-motion 的入场动画逻辑封装在此，
 * 使其他 Section 可以保持为 Server Component，大幅减少客户端 JS 体积。
 *
 * 使用 LazyMotion + m 组件替代完整的 motion，减少 ~50% framer-motion bundle。
 */

import { type ReactNode } from "react";
import { LazyMotion, domAnimation, m, type Variants, type TargetAndTransition, type Transition } from "framer-motion";

// 重新导出常用动画变体
export {
  fadeInUp,
  fadeInDown,
  fadeIn,
  scaleIn,
  staggerContainer,
  staggerContainerSlow,
  viewportConfig,
  heroViewportConfig,
} from "@/lib/animations";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  /** framer-motion 变体 */
  variants?: Variants;
  /** 触发方式: "inView" 用 whileInView, "mount" 用 animate */
  trigger?: "inView" | "mount";
  /** 视口配置 */
  viewport?: { once?: boolean; amount?: number };
  /** HTML 标签类型 */
  as?: "div" | "section" | "p" | "h1" | "h2" | "h3" | "span";
  /** 过渡配置 */
  transition?: Transition;
  /** 自定义 initial 状态 */
  initialState?: TargetAndTransition;
  /** 自定义 animate / whileInView 状态 */
  animateState?: TargetAndTransition;
}

const defaultViewport = { once: true, amount: 0.2 };

export function MotionWrapper({
  children,
  className,
  variants,
  trigger = "inView",
  viewport = defaultViewport,
  as = "div",
  transition,
  initialState,
  animateState,
}: MotionWrapperProps) {
  const Component = m[as];

  // 内联动画模式（不使用 variants）
  if (initialState && animateState) {
    const props =
      trigger === "mount"
        ? { initial: initialState, animate: animateState }
        : { initial: initialState, whileInView: animateState, viewport };

    return (
      <LazyMotion features={domAnimation}>
        <Component className={className} transition={transition} {...props}>
          {children}
        </Component>
      </LazyMotion>
    );
  }

  // Variants 模式
  const motionProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "visible" }
      : { initial: "hidden", whileInView: "visible", viewport };

  return (
    <LazyMotion features={domAnimation}>
      <Component
        className={className}
        variants={variants}
        {...motionProps}
      >
        {children}
      </Component>
    </LazyMotion>
  );
}

/**
 * 动画子元素 — 仅定义 variants，不设 initial/animate
 * 必须作为 MotionWrapper 的后代使用（继承父级的 stagger 上下文）
 */
interface MotionItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span";
}

export function MotionItem({
  children,
  className,
  variants,
  as = "div",
}: MotionItemProps) {
  const Component = m[as];
  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
