import { site } from "@/lib/site";

export function CaseStudy() {
  return (
    <section
      id="casos"
      className="scroll-mt-24 overflow-hidden border-b border-zinc-800 bg-[#0F0F12] py-12 text-white md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <article className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/90 p-6 shadow-2xl sm:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-5 lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/20 px-3 py-1 text-xs font-bold tracking-wider text-brand-purple-light uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-purple-light" />
                  Caso de éxito
                </span>
                <span className="text-xs font-medium text-zinc-500">
                  El Paraíso, Honduras
                </span>
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Laboratorio Clínico Martínez Ruiz
                </h2>
                <p className="text-sm leading-relaxed text-zinc-400">
                  Presencia web profesional y catálogo de servicios con contacto
                  directo a WhatsApp en El Paraíso, Honduras.
                </p>
              </div>
              <blockquote className="rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4 text-sm leading-relaxed text-zinc-300 italic">
                «Ahora los pacientes encuentran nuestros horarios, servicios y
                cotizan directo.»
              </blockquote>
              <a
                href={site.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/60 bg-zinc-900 px-4 py-2 text-xs font-semibold text-purple-300 transition-all hover:bg-zinc-800 hover:text-white"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                lab-martinezruiz.vercel.app ↗
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-zinc-700/80 bg-zinc-900 shadow-2xl">
                <div className="flex items-center gap-1.5 border-b border-white/5 bg-gray-900 px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-[9px] text-gray-400">
                    lab-martinezruiz.vercel.app
                  </span>
                </div>
                <div className="space-y-4 bg-white p-6 text-zinc-900">
                  <p className="text-[10px] font-bold tracking-widest text-teal-700 uppercase">
                    Laboratorio clínico
                  </p>
                  <h3 className="text-xl font-extrabold text-[#0B2545]">
                    Martínez Ruiz
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Resultados confiables, atención en sucursal y contacto
                    directo por WhatsApp.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3 text-xs">
                      Análisis clínicos
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 text-xs">
                      Resultados el mismo día
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
