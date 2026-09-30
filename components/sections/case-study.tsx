import Image from "next/image";
import { site } from "@/lib/site";

export function CaseStudy() {
  return (
    <section
      id="casos"
      className="scroll-mt-24 overflow-hidden border-b border-zinc-800 bg-[#0F0F12] py-12 text-white md:py-16"
    >
      <div className="mx-auto w-full max-w-[100rem] px-4 md:px-8">
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
              <div className="flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-900 p-1.5 shadow-2xl sm:p-2">
                <Image
                  src="/brand/case-wireframe.svg"
                  alt="Wireframe en modo claro del sitio Laboratorio Clínico Martínez Ruiz"
                  width={800}
                  height={520}
                  unoptimized
                  className="h-auto w-full rounded-xl bg-white"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
