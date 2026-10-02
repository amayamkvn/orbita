export const site = {
  name: "Órbita",
  tagline:
    "Transformación digital y diseño de sitios web de alto impacto para negocios locales.",
  email: "contacto@orbita-hn.com",
  phones: ["+504 9261-5426"],
  whatsappNumber: "50492615426",
  caseStudyUrl: "https://lab-martinezruiz.vercel.app",
  currency: "Lempiras",
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#planes", label: "Planes y Precios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos de Éxito" },
  { href: "#faq", label: "FAQ" },
] as const;

export const footerNav = [
  { href: "#planes", label: "Planes y Precios" },
  { href: "#beneficios", label: "Beneficios" },
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
    cadence: "/ Pago único",
    delivery: "Entrega en 7–10 días",
    maintenance: "L 450/mes",
    featured: false,
    features: [
      "Página optimizada para que te contacten por WhatsApp",
      "Diseño moderno, 100% adaptado a celular",
      "Formulario de contacto",
      "Aparece cuando te busquen en Google",
    ],
    cta: "Comenzar ahora",
    message: "Hola Órbita, me interesa el Plan Básico Landing Page",
  },
  {
    id: "estandar",
    name: "Plan Estándar",
    product: "Sitio Web Completo",
    description:
      "Estructura multi-página profesional para posicionar tu marca y dominar tu rubro local.",
    price: "L 10,500",
    cadence: "/ Pago único",
    delivery: "Entrega en 10–15 días",
    maintenance: "L 450/mes",
    featured: true,
    features: [
      "De 2 a 5 páginas (Inicio, Servicios, Nosotros, Galería, Contacto)",
      "Diseño personalizado según tu marca",
      "Dominio personalizado",
      "WhatsApp, Instagram y Google Maps integrados",
    ],
    cta: "Comenzar ahora",
    message: "Hola Órbita, me interesa el Plan Estándar Sitio Completo",
  },
] as const;

export const benefits = [
  {
    title: "Mayor visibilidad",
    description: "Aparece en Google cuando te busquen en tu ciudad.",
    icon: "eye" as const,
  },
  {
    title: "Más clientes",
    description: "Convierte visitas en mensajes de WhatsApp.",
    icon: "users" as const,
  },
  {
    title: "Ahorra tiempo",
    description: "Nosotros lo armamos, tú solo atiendes a tus clientes.",
    icon: "clock" as const,
  },
  {
    title: "Imagen profesional",
    description: "Diferénciate de la competencia desde el primer clic.",
    icon: "photo" as const,
  },
] as const;

export const processSteps = [
  {
    n: 1,
    title: "Hablamos",
    detail: "Breve conversación sobre tus objetivos.",
    outlined: false,
  },
  {
    n: 2,
    title: "Diseñamos",
    detail: "Personalizamos la web con tu marca y contenido.",
    outlined: false,
  },
  {
    n: 3,
    title: "Lanzamos",
    detail: "Puesta en marcha con tu dominio y hosting.",
    outlined: false,
  },
  {
    n: 4,
    title: "¡Listo!",
    detail: "Comienza a recibir clientes y resultados.",
    outlined: true,
  },
] as const;

export const faqs = [
  {
    question: "¿Cuánto demora exactamente la entrega de mi sitio?",
    answer:
      "Para el Plan Básico (Landing Page) tardamos de 7 a 10 días hábiles. Para el Plan Estándar (Sitio Web de 2 a 5 páginas) de 10 a 15 días hábiles, una vez nos proporciones la información básica de tu negocio.",
  },
  {
    question: "¿Cómo funciona el cobro recurrente de mantenimiento?",
    answer:
      "El desarrollo web tiene un pago inicial único en lempiras. El servicio mensual de L 450 cubre hosting, copias de seguridad y ajustes ligeros. Tú eres 100% dueño del código y del dominio.",
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
