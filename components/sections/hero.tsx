import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orbita-primary/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-orbita-accent">
          Desarrollo web
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Sitios web que orbitan alrededor de tu negocio
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-orbita-muted">
          Órbita diseña y desarrolla experiencias digitales rápidas, claras y
          listas para convertir visitas en clientes.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-orbita-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orbita-primary-hover"
          >
            Solicitar propuesta
          </Link>
          <Link
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-orbita-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-orbita-muted"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
