import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-9 w-auto",
  md: "h-12 w-auto",
  lg: "h-16 w-auto",
};

export function Logo({ className, inverted, size = "md" }: LogoProps) {
  return (
    <span
      className={cn(
        inverted && "inline-flex rounded-xl bg-white px-2 py-1.5 shadow-sm",
        className,
      )}
    >
      <Image
        src="/brand/logo.png"
        alt="Órbita"
        width={200}
        height={80}
        className={cn("object-contain", sizes[size])}
        priority
      />
    </span>
  );
}
