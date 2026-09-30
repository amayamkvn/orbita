import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/icons";
import { navLinks, whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:h-28">
        <a href="#" aria-label="Ir al inicio de Órbita">
          <Logo size="sm" className="lg:hidden" />
          <Logo size="lg" className="hidden lg:inline-flex" />
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-4 text-xs font-semibold text-zinc-600 md:flex lg:gap-8 lg:text-sm"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          href={whatsappUrl("Hola Órbita, quiero cotizar un sitio web")}
          external
          size="sm"
          className="rounded-full px-3.5 py-1.5 text-xs font-semibold md:px-5 md:py-2 lg:px-6 lg:py-2.5 lg:text-sm"
        >
          Hablemos
          <WhatsAppIcon className="hidden h-4 w-4 lg:block" />
        </Button>
      </div>
    </header>
  );
}
