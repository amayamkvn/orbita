import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Órbita | Sitios Web de Alto Impacto para Negocios Locales",
  description:
    "Sitios web profesionales que te encuentran en Google y te traen consultas directo a WhatsApp. Landing pages y sitios completos para negocios locales en Honduras.",
  openGraph: {
    title: "Órbita | Sitios Web de Alto Impacto para Negocios Locales",
    description:
      "Más clientes para tu negocio, todos los días. Diseño y desarrollo web con WhatsApp integrado.",
    locale: "es_HN",
    type: "website",
  },
  twitter: {
    description:
      "Más clientes para tu negocio, todos los días. Diseño y desarrollo web con WhatsApp integrado.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full w-full antialiased`}>
      <body className="flex min-h-full w-full flex-col font-sans">{children}</body>
    </html>
  );
}
