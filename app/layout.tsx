import type { Metadata } from "next";
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
      "Transforma tu negocio en días, no en meses. Diseño y desarrollo web con entrega rápida y WhatsApp integrado.",
    locale: "es_HN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
