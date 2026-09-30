import {
  ClockIcon,
  EyeIcon,
  PhotoIcon,
  UsersIcon,
} from "@/components/ui/icons";
import { benefits } from "@/lib/site";

const icons = {
  eye: EyeIcon,
  users: UsersIcon,
  clock: ClockIcon,
  photo: PhotoIcon,
};

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-24 bg-white py-12 md:py-24">
      <div className="mx-auto w-full max-w-[100rem] px-4 md:px-8">
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
                className="flex flex-col items-center rounded-3xl border border-zinc-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#F5F3FF] text-brand-purple shadow-sm md:h-20 md:w-20 md:rounded-[24px]">
                  <Icon className="h-7 w-7 md:h-9 md:w-9" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-950">
                  {benefit.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
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
