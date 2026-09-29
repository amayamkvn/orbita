import { Logo } from "@/components/ui/logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { footerNav, legalLinks, site } from "@/lib/site";

const social = [
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-12 text-zinc-400 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <a href="#">
            <Logo inverted size="lg" />
          </a>
          <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
            {site.tagline}
          </p>
          <div className="flex items-center gap-3 pt-2">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-purple hover:text-white"
              >
                <span className="sr-only">{label}</span>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Navegación
          </h4>
          <ul className="space-y-2.5 text-xs">
            {footerNav.map((link) => (
              <li key={link.href + link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Legal
          </h4>
          <ul className="space-y-2.5 text-xs">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">
            Contacto Directo
          </h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-purple" />
              <span>{site.phones.join(" / ")}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 shrink-0 text-brand-purple" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-900 px-4 pt-8 text-center text-xs text-zinc-600 md:px-6">
        <p>
          © {new Date().getFullYear()} Órbita. Todos los derechos reservados.
          Diseñado para impulsar a los negocios locales.
        </p>
      </div>
    </footer>
  );
}
