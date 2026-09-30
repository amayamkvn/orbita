import Image from "next/image";
import { MockupGlow } from "@/components/ui/mockup-glow";

export function HeroShowcase() {
  return (
    <div className="relative w-full overflow-visible">
      <MockupGlow />
      <div className="relative z-10 p-8 sm:p-10 lg:p-12">
        <Image
          src="/brand/new_main_banner_dk.svg"
          alt="Mockup de laptop y celular con un sitio web Órbita"
          width={540}
          height={478}
          className="h-auto w-full max-w-full object-contain"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
