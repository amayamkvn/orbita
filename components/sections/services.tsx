const services = [
  {
    title: "Landing pages",
    description:
      "Páginas enfocadas en conversión, con mensaje claro y carga ultrarrápida.",
  },
  {
    title: "Sitios corporativos",
    description:
      "Presencia profesional, escalable y fácil de mantener para tu equipo.",
  },
  {
    title: "Mantenimiento",
    description:
      "Actualizaciones, mejoras de rendimiento y soporte continuo post-lanzamiento.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-t border-orbita-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Servicios
        </h2>
        <p className="mt-3 max-w-2xl text-orbita-muted">
          Todo lo que necesitas para lanzar y hacer crecer tu presencia en la
          web.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-orbita-border bg-orbita-surface/50 p-6"
            >
              <h3 className="text-lg font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-orbita-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
