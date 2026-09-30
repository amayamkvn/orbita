import Image from "next/image";

export function HeroShowcase() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <Image
        src="/brand/new_main_banner_dk.svg"
        alt="Mockup de laptop y celular con un sitio web Órbita"
        width={960}
        height={540}
        className="h-auto w-full max-w-[640px] lg:max-w-none"
        priority
        unoptimized
      />
    </div>
  );
}
