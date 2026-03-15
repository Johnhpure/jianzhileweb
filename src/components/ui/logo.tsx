import Image from "next/image";

/**
 * 简职了 品牌 Logo 组件
 * 使用生成式设计的企业级 logo（蓝绿双色交叠几何图形）
 */
export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-icon.png"
      alt="简职了"
      width={32}
      height={32}
      className={className}
      priority
    />
  );
}
