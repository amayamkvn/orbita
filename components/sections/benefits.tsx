import {
  BoltIcon,
  ChartIcon,
  ClockIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import { benefits } from "@/lib/site";

const icons = {
  bolt: BoltIcon,
  chart: ChartIcon,
  clock: ClockIcon,
  shield: ShieldIcon,
};

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-24 bg-white py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-16">
          <span className="mb-3 block text-xs font-extrabold tracking-widest text-brand-purple uppercase">
            Beneficios clave
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
            Más que un sitio web, una herramienta para crecer
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = icons[benefit.icon];
            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-purple-200 md:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-brand-purple">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-950">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
