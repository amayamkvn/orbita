export const site = {
  name: "Órbita",
  tagline:
    "Transformación digital y diseño de sitios web de alto impacto para negocios locales.",
  email: "hola@orbita.com",
  phones: ["+504 2793-4073", "+504 9917-8861"],
  whatsappNumber: "50427934073",
  caseStudyUrl: "https://lab-martinezruiz.vercel.app",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#planes", label: "Planes y Precios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos de Éxito" },
  { href: "#faq", label: "FAQ" },
] as const;

export const footerNav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#planes", label: "Planes y Precios" },
  { href: "#proceso", label: "Proceso de Trabajo" },
  { href: "#casos", label: "Casos de Éxito" },
  { href: "#faq", label: "Preguntas Frecuentes" },
] as const;

export const legalLinks = [
  { href: "#faq", label: "Términos y condiciones" },
  { href: "#faq", label: "Política de privacidad" },
  { href: "#faq", label: "Garantía de servicio" },
] as const;

export const trustItems = [
  "Entrega rápida",
  "Diseño profesional",
  "Soporte incluido",
] as const;

export const plans = [
  {
    id: "basico",
    name: "Plan Básico",
    product: "Landing page",
    description:
      "Una página optimizada para capturar prospectos y redirigirlos directo a ti.",
    price: "L 7,000",
    cadence: "pago único",
    delivery: "Entrega en 3–5 días",
    maintenance: "L 450/mes",
    featured: false,
    features: [
      "Página optimizada para que te contacten por WhatsApp",
      "Diseño moderno, 100% adaptado a celular",
      "Formulario de contacto",
      "Aparece cuando te busquen en Google",
    ],
    cta: "Elegir Plan Básico",
    message: "Hola Órbita, me interesa el Plan Básico Landing Page",
  },
  {
    id: "estandar",
    name: "Plan Estándar",
    product: "Sitio Web Completo",
    description:
      "Estructura multi-página profesional para posicionar tu marca y dominar tu rubro local.",
    price: "L 10,500",
    cadence: "pago único",
    delivery: "Entrega en 7–10 días",
    maintenance: "L 450/mes",
    featured: true,
    features: [
      "De 2 a 5 páginas (Inicio, Servicios, Nosotros, Galería, Contacto)",
      "Diseño personalizado según tu marca",
      "Ficha de Google Maps optimizada",
      "WhatsApp, Instagram y Google Maps integrados",
    ],
    cta: "Elegir Plan Estándar →",
    message: "Hola Órbita, me interesa el Plan Estándar Sitio Completo",
  },
] as const;

export const benefits = [
  {
    title: "Más visibilidad",
    description:
      "Destaca en Google y redes sociales para que tus clientes te encuentren fácilmente.",
    icon: "bolt" as const,
  },
  {
    title: "Más clientes",
    description:
      "Sitios diseñados para convertir visitas en consultas y ventas reales directo a tu WhatsApp.",
    icon: "chart" as const,
  },
  {
    title: "Ahorra tiempo",
    description:
      "Nos encargamos de tu presencia digital para que tú te enfoques en tu negocio.",
    icon: "clock" as const,
  },
  {
    title: "Imagen profesional",
    description:
      "Un sitio moderno y confiable para destacar frente a tu competencia.",
    icon: "shield" as const,
  },
] as const;

export const processSteps = [
  { step: "01. Hablamos", detail: "1 llamada ágil" },
  { step: "02. Diseñamos", detail: "Con tu marca y contenido" },
  { step: "03. Lanzamos", detail: "Dominio, hosting y SSL" },
  { step: "04. Acompañamos", detail: "Soporte mensual continuo" },
] as const;

export const faqs = [
  {
    question: "¿Cuánto demora exactamente la entrega de mi sitio?",
    answer:
      "Para el Plan Básico (Landing Page) tardamos de 3 a 5 días hábiles. Para el Plan Estándar (Sitio Web de 2 a 5 páginas) de 7 a 10 días hábiles, una vez nos proporciones la información básica de tu negocio.",
  },
  {
    question: "¿Cómo funciona el cobro recurrente de mantenimiento?",
    answer:
      "El desarrollo web tiene un pago inicial único. El servicio mensual de L 450/mes es opcional y cubre hosting de alta velocidad, certificado SSL, copias de seguridad y ajustes ligeros. Puedes cancelarlo cuando desees: tú eres 100% dueño del código y del dominio.",
  },
  {
    question: "¿Cómo funciona la integración con WhatsApp?",
    answer:
      "Configuramos botones de llamada a la acción y un botón flotante con mensajes preconfigurados (por ejemplo: “Hola, vi sus servicios y quiero cotizar”). Así sabrás exactamente qué busca el cliente.",
  },
  {
    question: "¿Qué pasa si después necesito agregar más secciones o funciones?",
    answer:
      "Nuestra arquitectura es modular y escalable. Puedes empezar con una Landing Page y más adelante expandirla a un sitio completo, catálogo o sistema a medida sin perder tu inversión inicial.",
  },
] as const;
