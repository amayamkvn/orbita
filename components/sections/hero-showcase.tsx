import Image from "next/image";
import { MockupGlow } from "@/components/ui/mockup-glow";

export function HeroShowcase() {
  return (
    <div className="relative mx-auto flex w-full max-w-full items-center justify-center overflow-hidden">
      <MockupGlow />
      <Image
        src="/brand/new_main_banner_dk.svg"
        alt="Mockup de laptop y celular con un sitio web Órbita"
        width={540}
        height={478}
        className="relative z-10 h-auto w-full max-w-full object-contain"
        priority
        unoptimized
      />
    </div>
  );
}
