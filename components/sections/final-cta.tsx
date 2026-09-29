import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-brand-black py-16 text-white md:py-20"
    >
      <div
        className="pointer-events-none absolute -bottom-16 left-6 h-64 w-64 rounded-full border border-zinc-800 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 left-14 h-48 w-48 rounded-full border border-brand-purple/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-2 left-24 h-28 w-28 rounded-full border border-brand-purple"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
        <div>
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-sm text-zinc-400 sm:text-base">
            Escríbenos por WhatsApp y conversemos sobre tu proyecto hoy mismo.
          </p>
        </div>
        <Button
          href={whatsappUrl(
            "Hola Órbita, quiero hacer crecer mi negocio con un sitio web",
          )}
          external
          size="lg"
          className="shrink-0 shadow-xl shadow-purple-600/30"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Hablemos por WhatsApp
        </Button>
      </div>
    </section>
  );
}
