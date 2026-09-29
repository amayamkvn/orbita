import { WhatsAppIcon } from "@/components/ui/icons";

export function HeroShowcase() {
  return (
    <div className="relative mt-8 flex items-center justify-center overflow-visible lg:mt-0 lg:justify-end">
      <div className="relative w-full max-w-[640px] pb-16 sm:pb-10 lg:[perspective:1400px]">
        <div className="relative z-10 w-full lg:origin-center lg:[transform:rotateY(-8deg)] lg:[transform-style:preserve-3d] lg:will-change-transform">
          <div className="w-full rounded-2xl border border-zinc-700/60 bg-[#1c1c1f] p-2 shadow-[0_18px_50px_-8px_rgba(113,113,122,0.28)]">
            <div className="overflow-hidden rounded-xl border border-zinc-200/80 bg-white [transform-style:preserve-3d]">
              <div className="flex h-11 items-center justify-between border-b border-zinc-200/80 bg-zinc-100/90 px-5 text-zinc-600">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ef4444]/90" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#f59e0b]/90" />
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#10b981]/90" />
                  </div>
                  <div className="h-4 w-px bg-zinc-300" />
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-purple" />
                    <span className="text-[11px] font-extrabold tracking-wider text-zinc-900 uppercase">
                      AURA STUDIO
                    </span>
                  </div>
                </div>
                <div className="hidden items-center gap-6 text-[11px] font-semibold text-zinc-600 sm:flex">
                  <span>Servicios</span>
                  <span>Proyectos</span>
                  <span>Equipo</span>
                </div>
              </div>

              <div className="relative grid h-[280px] grid-cols-[1.15fr_0.85fr] overflow-hidden bg-white sm:h-[370px]">
                <div className="relative z-20 flex flex-col justify-center px-6 sm:px-8">
                  <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[10px] font-bold tracking-wider text-brand-purple uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    Diseño & Arquitectura Digital
                  </div>
                  <h2 className="mb-3 text-2xl leading-[1.15] font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
                    Espacios que <span className="text-brand-purple">Inspiran</span> y
                    Transforman
                  </h2>
                  <p className="mb-6 max-w-xs text-xs leading-relaxed text-zinc-600">
                    Diseño exclusivo y sitios web de alto impacto para negocios con
                    identidad propia.
                  </p>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex rounded-lg bg-brand-purple px-4 py-2 text-[11px] font-bold text-white shadow-lg shadow-purple-500/25">
                      Ver proyectos
                    </span>
                    <span className="inline-flex rounded-lg border border-zinc-200 bg-zinc-100 px-3.5 py-2 text-[11px] font-semibold text-zinc-800">
                      Contáctanos
                    </span>
                  </div>
                </div>

                <div className="relative hidden h-full sm:block" aria-hidden>
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-zinc-50 to-indigo-100" />
                  <div className="absolute top-8 right-6 h-36 w-28 rotate-3 rounded-2xl bg-white/90 shadow-lg ring-1 ring-zinc-200/80" />
                  <div className="absolute top-24 right-16 h-40 w-32 -rotate-2 rounded-2xl bg-white shadow-xl ring-1 ring-zinc-200/70">
                    <div className="h-16 rounded-t-2xl bg-gradient-to-br from-brand-purple/80 to-indigo-500" />
                    <div className="space-y-1.5 p-3">
                      <div className="h-2 w-16 rounded bg-zinc-200" />
                      <div className="h-2 w-12 rounded bg-zinc-100" />
                    </div>
                  </div>
                  <div className="absolute right-8 bottom-8 h-16 w-24 rounded-xl bg-white/80 shadow-md ring-1 ring-zinc-200/70" />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-2 w-[72%] rounded-b-xl bg-zinc-200/80" />
          <div className="mx-auto h-1 w-[42%] rounded-b-md bg-zinc-100" />
        </div>

        <div className="absolute -bottom-4 -left-2 z-20 hidden w-44 rounded-[38px] border border-zinc-700/80 bg-[#09090b] p-1.5 shadow-[0_16px_40px_rgba(24,24,27,0.28)] sm:-left-6 sm:block sm:w-48 lg:-bottom-2">
          <div className="relative flex h-[340px] flex-col justify-between overflow-hidden rounded-[30px] border border-zinc-800/80 bg-[#f8fafc] sm:h-[370px]">
            <div className="flex items-center justify-between bg-[#09090b] px-4 pt-2.5 pb-1 text-white">
              <span className="text-[10px] font-bold tracking-tight text-zinc-300">
                9:41
              </span>
              <div className="flex h-3.5 w-16 items-center justify-center rounded-full border border-zinc-800 bg-black">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-800" />
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
              </div>
              <span className="text-[9px] font-semibold text-zinc-300">100%</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800/80 bg-[#0F0F12] px-3 py-1.5">
              <div className="flex items-center gap-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-purple text-[10px] font-extrabold text-white">
                  Ó
                </div>
                <span className="text-[10px] font-extrabold tracking-tight text-white">
                  ÓRBITA<span className="text-brand-purple">.</span>
                </span>
              </div>
              <span className="rounded-full border border-brand-purple/40 bg-brand-purple/20 px-2 py-0.5 text-[8px] font-bold tracking-wider text-brand-purple-light uppercase">
                Cotizar
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-zinc-950 px-3.5 py-3 text-white">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 rounded-full border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 text-[8px] font-semibold text-purple-300">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  Diseño Web 100% Mobile
                </div>
                <h3 className="text-xs leading-tight font-extrabold tracking-tight sm:text-sm">
                  Sitios que convierten visitas en{" "}
                  <span className="text-brand-purple-light">clientes reales.</span>
                </h3>
              </div>
              <div className="my-1 flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-md bg-brand-purple px-2.5 py-1 text-[9px] font-bold text-white">
                  <WhatsAppIcon className="h-2.5 w-2.5" />
                  WhatsApp
                </span>
                <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[9px] font-semibold text-zinc-300">
                  Servicios
                </span>
              </div>
              <div className="my-1 grid grid-cols-2 gap-1.5">
                <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/90 p-1.5">
                  <span className="text-[8px] font-bold text-purple-400">+320%</span>
                  <span className="text-[7px] text-zinc-400">Más consultas</span>
                </div>
                <div className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/90 p-1.5">
                  <span className="text-[8px] text-amber-400">★★★★★</span>
                  <span className="text-[7px] text-zinc-400">Calidad 10/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
