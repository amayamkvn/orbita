import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/icons";
import { OrbitRings } from "@/components/ui/orbit-rings";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { trustItems } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-[#FAFAFC] pt-10 pb-12 md:bg-white md:pt-12 md:pb-20 lg:overflow-visible lg:py-24">
      <OrbitRings className="inset-0 hidden md:block" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-8 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col justify-center text-center md:text-left lg:col-span-6 lg:pl-4">
          <Badge className="mx-auto mb-6 md:mx-0">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-purple" />
            Cupos para entrega esta semana disponibles
          </Badge>
          <h1 className="mb-6 text-3xl leading-[1.18] font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            Transforma tu
            <br className="hidden sm:block" /> negocio en días,
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-brand-purple to-indigo-600 bg-clip-text text-transparent md:bg-none md:text-[#0A0A0A]">
              no en meses
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-zinc-600 sm:text-lg md:mx-0">
            Sitios web profesionales que te encuentran en Google y te traen
            consultas directo a WhatsApp, sin depender solo de redes sociales.
          </p>
          <div className="mb-10 flex items-center justify-center gap-4 md:justify-start">
            <Button href="#planes" size="lg" className="w-full sm:w-auto">
              Quiero transformar mi negocio
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-zinc-200/80 pt-6 text-xs font-semibold text-zinc-600 sm:text-sm md:justify-start">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-brand-purple" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="relative mx-auto mt-8 flex max-w-[300px] flex-col items-center lg:hidden">
            <div
              className="pointer-events-none absolute h-64 w-64 -translate-y-4 rounded-full bg-gradient-to-tr from-brand-purple/20 to-indigo-600/10 blur-2xl"
              aria-hidden
            />
            <Image
              src="/brand/new_main_banner_mb.svg"
              alt="Mockup móvil Órbita: tu negocio en la era digital"
              width={284}
              height={508}
              className="relative h-auto w-full"
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="hidden overflow-visible lg:col-span-6 lg:block">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}
