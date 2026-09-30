import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/icons";
import { OrbitRings } from "@/components/ui/orbit-rings";
import { HeroShowcase } from "@/components/sections/hero-showcase";
import { MockupGlow } from "@/components/ui/mockup-glow";
import { trustItems } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-[#FAFAFC] pt-4 pb-10 md:bg-white md:pt-12 md:pb-16 lg:py-24">
      <OrbitRings className="inset-0 hidden md:block" />
      <div className="relative z-10 mx-auto grid w-full max-w-[100rem] grid-cols-1 items-center gap-8 px-4 sm:px-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center justify-center text-center lg:col-span-6 lg:items-start lg:pl-4 lg:text-left">
          <div className="mb-6 hidden md:block">
            <Badge className="mx-auto lg:mx-0">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-purple" />
              Cupos para entrega esta semana disponibles
            </Badge>
          </div>
          <div className="flex w-full max-md:h-[calc(100svh-6rem)] flex-col items-center gap-3 md:h-auto md:gap-6 lg:contents lg:items-start">
            <h1 className="order-1 shrink-0 text-3xl leading-[1.18] font-extrabold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:order-none lg:mb-6 lg:text-5xl lg:leading-[1.08] xl:text-6xl">
              Más clientes
              <br className="hidden sm:block" /> para tu negocio,
              <br className="hidden sm:block" />{" "}
              <span className="bg-gradient-to-r from-brand-purple to-indigo-600 bg-clip-text text-transparent md:bg-none md:text-[#0A0A0A]">
                todos los días
              </span>
            </h1>
            <p className="order-2 mx-auto max-w-lg shrink-0 text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg lg:order-none lg:mx-0 lg:mb-8">
              Tu negocio en internet, listo para mostrar tus servicios y atraer
              clientes por tus canales de contacto.
            </p>
            <div className="relative order-3 mx-auto flex w-full min-w-0 items-center justify-center overflow-visible p-6 max-md:min-h-0 max-md:flex-1 md:max-w-[280px] md:flex-none lg:hidden">
              <MockupGlow />
              <Image
                src="/brand/new_main_banner_mb.svg"
                alt="Mockup móvil Órbita: tu negocio en la era digital"
                width={284}
                height={508}
                className="relative z-10 h-auto w-auto max-w-full object-contain max-md:h-full md:max-h-[280px]"
                priority
                unoptimized
              />
            </div>
            <div className="order-4 flex w-full shrink-0 items-center justify-center gap-4 pb-1 lg:order-none lg:mb-10 lg:justify-start">
              <Button href="#planes" size="lg" className="w-full max-w-md sm:w-auto lg:max-w-none">
                Quiero transformar mi negocio
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-5 mt-8 flex w-full flex-wrap justify-center gap-x-6 gap-y-3 border-t border-zinc-200/80 pt-6 text-xs font-semibold text-zinc-600 sm:text-sm md:mt-8 lg:order-none lg:mt-0 lg:justify-start">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 text-brand-purple" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden min-w-0 overflow-visible lg:col-span-6 lg:block">
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}
