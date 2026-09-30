import Image from "next/image";
import { MockupGlow } from "@/components/ui/mockup-glow";

export function HeroShowcase() {
  return (
    <div className="relative flex items-center justify-center overflow-visible lg:translate-x-10 lg:scale-[1.18] lg:justify-end">
      <MockupGlow />
      <Image
        src="/brand/new_main_banner_dk.svg"
        alt="Mockup de laptop y celular con un sitio web Órbita"
        width={540}
        height={478}
        className="relative z-10 h-auto w-full"
        priority
        unoptimized
      />
    </div>
  );
}
