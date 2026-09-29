import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { plans, whatsappUrl } from "@/lib/site";

export function Pricing() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-brand-black py-12 text-white md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-32 rounded-full border border-brand-purple" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-52 rounded-full border border-brand-purple/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div id="planes" className="mx-auto mb-10 max-w-2xl scroll-mt-28 text-center md:mb-16">
          <Badge tone="dark" className="mb-4">
            Servicios & Planes
          </Badge>
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-white sm:text-5xl">
            Planes transparentes pensados para tu negocio
          </h2>
          <p className="text-sm text-zinc-400 md:text-base">
            Desarrollo profesional de pago único con soporte recurrente opcional y
            sin letra chica.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "relative flex flex-col justify-between rounded-3xl border bg-brand-card p-6 transition-all duration-300 sm:p-10",
                plan.featured
                  ? "border-2 border-brand-purple shadow-2xl shadow-purple-500/25"
                  : "border-brand-border hover:border-zinc-700",
              )}
            >
              {plan.featured ? (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-purple px-4 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-md">
                  ★ Más popular y recomendado
                </div>
              ) : null}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-purple-400 uppercase">
                    {plan.name}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      plan.featured
                        ? "border border-brand-purple/40 bg-brand-purple/20 text-brand-purple-light"
                        : "bg-zinc-800 text-zinc-300",
                    )}
                  >
                    {plan.delivery}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                  {plan.product}
                </h3>
                <p className="mb-6 text-sm text-zinc-400">{plan.description}</p>
                <div className="mb-8 border-b border-zinc-800 pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 uppercase">
                      {plan.cadence}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Mantenimiento, hosting y cambios ligeros: {plan.maintenance}
                  </p>
                </div>
                <ul className="mb-8 space-y-3.5 text-sm text-zinc-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon
                        className={cn(
                          "mt-0.5 h-5 w-5 shrink-0",
                          plan.featured ? "text-emerald-400" : "text-brand-purple",
                        )}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                href={whatsappUrl(plan.message)}
                external
                variant={plan.featured ? "primary" : "secondary"}
                className="w-full"
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
