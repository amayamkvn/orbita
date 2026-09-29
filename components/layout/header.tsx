import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/icons";
import { navLinks, whatsappUrl } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:h-28 md:px-6">
        <a href="#" aria-label="Ir al inicio de Órbita">
          <Logo size="sm" className="md:hidden" />
          <Logo size="lg" className="hidden md:inline-flex" />
        </a>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 text-sm font-semibold text-zinc-600 md:flex"
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
          className="rounded-full px-3.5 py-1.5 text-xs font-semibold md:px-6 md:py-2.5 md:text-sm"
        >
          Hablemos
          <WhatsAppIcon className="hidden h-4 w-4 md:block" />
        </Button>
      </div>
    </header>
  );
}
