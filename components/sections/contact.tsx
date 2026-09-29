export function Contact() {
  return (
    <section id="contacto" className="border-t border-orbita-border px-6 py-20">
      <div className="mx-auto max-w-6xl rounded-3xl border border-orbita-border bg-orbita-surface/60 p-8 md:p-12">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          ¿Listo para despegar?
        </h2>
        <p className="mt-3 max-w-xl text-orbita-muted">
          Cuéntanos sobre tu proyecto. Te respondemos con una propuesta clara y
          plazos realistas.
        </p>
        <a
          href="mailto:hola@orbita.dev"
          className="mt-8 inline-flex rounded-full bg-orbita-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orbita-primary-hover"
        >
          hola@orbita.dev
        </a>
      </div>
    </section>
  );
}
