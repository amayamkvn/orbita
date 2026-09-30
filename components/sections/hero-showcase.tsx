import Image from "next/image";
import { MockupGlow } from "@/components/ui/mockup-glow";

export function HeroShowcase() {
  return (
    <div className="relative flex items-center justify-center overflow-visible lg:justify-end xl:translate-x-10 xl:scale-[1.18]">
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
