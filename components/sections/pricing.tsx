import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckMiniIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { plans, whatsappUrl } from "@/lib/site";

export function Pricing() {
  return (
    <section
      id="planes"
      className="relative w-full scroll-mt-24 overflow-hidden bg-brand-black py-12 text-white md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-32 rounded-full border border-brand-purple" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-52 rounded-full border border-brand-purple/40" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <Badge tone="dark" className="mb-4">
            Planes
          </Badge>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Planes transparentes pensados para tu negocio
          </h2>
          <p className="text-sm text-zinc-400 md:text-base">
            Desarrollo profesional de pago único en lempiras, con soporte
            recurrente incluido y sin letra chica.
          </p>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "relative flex flex-col justify-between rounded-3xl border bg-white p-6 text-zinc-900 shadow-lg transition-all duration-300 sm:p-10",
                plan.featured
                  ? "border-2 border-brand-purple shadow-2xl shadow-purple-500/20"
                  : "border-zinc-200/80 hover:shadow-xl",
              )}
            >
              {plan.featured ? (
                <div className="absolute -top-3.5 right-6 flex items-center gap-1 rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold tracking-wider text-zinc-950 uppercase shadow-md">
                  <span>★</span> El más popular
                </div>
              ) : null}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={cn(
                      "text-xs font-bold tracking-wider uppercase",
                      plan.featured ? "text-brand-purple" : "text-zinc-900",
                    )}
                  >
                    {plan.name}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      plan.featured
                        ? "border border-purple-200/50 bg-purple-50 text-brand-purple"
                        : "bg-zinc-100 text-zinc-600",
                    )}
                  >
                    {plan.delivery}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-extrabold text-zinc-950 sm:text-3xl">
                  {plan.product}
                </h3>
                <p className="mb-6 text-sm text-zinc-600">{plan.description}</p>
                <div className="mb-8 border-b border-zinc-100 pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-zinc-950">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500 uppercase">
                      {plan.cadence}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        plan.featured ? "bg-emerald-400" : "bg-brand-purple",
                      )}
                    />
                    Mantenimiento, hosting y cambios ligeros: {plan.maintenance}
                  </p>
                </div>
                <ul className="mb-8 space-y-3.5 text-sm text-zinc-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.featured
                            ? "bg-brand-purple text-white shadow-sm"
                            : "bg-purple-50 text-brand-purple",
                        )}
                      >
                        <CheckMiniIcon className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={
                          plan.featured
                            ? "font-semibold text-zinc-900"
                            : "font-medium"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href={whatsappUrl(plan.message)}
                external
                className="w-full rounded-2xl"
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/90 p-4 text-center text-xs text-zinc-400 sm:flex-row">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
          <span>
            Hosting, dominio y soporte continuo desde{" "}
            <strong className="text-white">L 450/mes</strong>. Sin contratos
            forzosos, el código y el dominio son 100% tuyos.
          </span>
        </div>
      </div>
    </section>
  );
}
