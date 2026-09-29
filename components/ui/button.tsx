import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand-purple text-white hover:bg-brand-purple-hover shadow-lg shadow-purple-500/25",
  secondary:
    "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700/60",
  white: "bg-white text-zinc-950 hover:bg-zinc-200 shadow-lg",
  ghost:
    "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 border border-zinc-200",
} as const;

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm sm:text-base",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-xl font-bold transition-all duration-200 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
