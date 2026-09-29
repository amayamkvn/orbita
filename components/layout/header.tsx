import Link from "next/link";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-orbita-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          <span className="text-orbita-accent">Ó</span>rbita
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-orbita-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          className="rounded-full bg-orbita-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orbita-primary-hover"
        >
          Hablemos
        </Link>
      </div>
    </header>
  );
}
