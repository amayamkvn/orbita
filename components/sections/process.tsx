const steps = [
  { step: "01", label: "Descubrimiento", detail: "Objetivos, audiencia y alcance." },
  { step: "02", label: "Diseño", detail: "Wireframes y UI alineados a tu marca." },
  { step: "03", label: "Desarrollo", detail: "Implementación con Next.js y buenas prácticas." },
  { step: "04", label: "Lanzamiento", detail: "Deploy, métricas y soporte inicial." },
];

export function Process() {
  return (
    <section id="proceso" className="border-t border-orbita-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Proceso
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li key={item.step} className="space-y-2">
              <span className="text-sm font-mono text-orbita-accent">
                {item.step}
              </span>
              <h3 className="text-lg font-medium">{item.label}</h3>
              <p className="text-sm text-orbita-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
