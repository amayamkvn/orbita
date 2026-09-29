import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { processSteps, whatsappUrl } from "@/lib/site";

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 overflow-hidden border-y border-zinc-800/80 bg-[#0A0A0A] py-12 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute -top-32 right-10 h-96 w-96 rounded-full bg-brand-purple/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-brand-purple-dark/20 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col items-start lg:col-span-7">
            <Badge tone="pulse" className="mb-5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-purple-light" />
              Proceso ágil & transparente
            </Badge>
            <h2 className="mb-6 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Del contacto al lanzamiento{" "}
              <br className="hidden sm:inline" />
              en días, <span className="text-purple-400">no en meses</span>
            </h2>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-lg">
              Nos encargamos de todo el aspecto técnico, diseño y optimización
              para que tu negocio solo se preocupe de atender a los clientes que
              llegan a WhatsApp.
            </p>
            <Button
              href={whatsappUrl(
                "Hola Órbita, quiero iniciar el proceso para mi sitio web",
              )}
              external
              variant="white"
              className="mb-10 rounded-full"
            >
              Comenzar a hablar con nosotros
            </Button>
            <div className="grid w-full grid-cols-2 gap-3 border-t border-zinc-800/80 pt-8 sm:grid-cols-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 p-4 text-center"
                >
                  <span className="mb-1 font-mono text-xs font-bold text-purple-400 sm:text-sm">
                    {item.step}
                  </span>
                  <span className="text-[11px] text-zinc-400">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
              <Image
                src="/brand/process-team.jpg"
                alt="Equipo colaborando en un sitio web"
                width={800}
                height={800}
                className="h-[280px] w-full object-cover md:h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
