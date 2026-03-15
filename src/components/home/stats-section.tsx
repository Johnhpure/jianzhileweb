"use client";

/**
 * StatsSection 必须保留为客户端组件（使用 useState/useRef/IntersectionObserver）
 * 但使用 LazyMotion + m 组件替代完整 motion，减少 bundle 体积
 */
import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { FileText, Target, Building2, Users } from "lucide-react";
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from "@/lib/animations";

const stats = [
  { icon: FileText, value: 100, suffix: "x", label: "简历处理速度快于人工" },
  { icon: Target, value: 95, suffix: "%+", label: "候选人匹配精度" },
  { icon: Building2, value: 500, suffix: "+", label: "服务企业数" },
  { icon: Users, value: 50000, suffix: "+", label: "帮助求职者" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();
          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-bold text-primary sm:text-4xl dark:text-primary-light">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-16 dark:bg-dark-bg">
      <LazyMotion features={domAnimation}>
        <m.div
          className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map((stat) => (
            <m.div key={stat.label} className="text-center" variants={fadeInUp}>
              <m.div variants={scaleIn}>
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-light dark:text-sky-400" />
              </m.div>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-text-secondary dark:text-slate-400">{stat.label}</p>
            </m.div>
          ))}
        </m.div>
      </LazyMotion>
    </section>
  );
}
