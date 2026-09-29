import Image from "next/image";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-12 w-auto",
  md: "h-14 w-auto",
  lg: "h-20 w-auto",
};

export function Logo({ className, inverted, size = "md" }: LogoProps) {
  return (
    <span
      className={cn(
        inverted && "inline-flex rounded-xl bg-white px-2.5 py-2 shadow-sm",
        className,
      )}
    >
      <Image
        src="/brand/logo.png"
        alt="Órbita"
        width={396}
        height={142}
        quality={100}
        className={cn("object-contain", sizes[size])}
        priority
      />
    </span>
  );
}
