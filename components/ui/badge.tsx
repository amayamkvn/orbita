import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "pulse";
  className?: string;
};

export function Badge({ children, tone = "light", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 w-fit rounded-full text-xs font-semibold",
        tone === "light" &&
          "bg-purple-50 border border-purple-100 text-brand-purple px-3.5 py-1.5",
        tone === "dark" &&
          "bg-brand-purple/20 text-brand-purple-light border border-brand-purple/30 px-3 py-1 font-bold uppercase tracking-widest",
        tone === "pulse" &&
          "bg-brand-purple/20 text-brand-purple-light border border-brand-purple/30 px-3.5 py-1.5 font-extrabold uppercase tracking-widest",
        className,
      )}
    >
      {children}
    </span>
  );
}
