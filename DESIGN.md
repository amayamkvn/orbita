# DESIGN.md — Órbita Landing

Contexto de diseño extraído de **Google Stitch** para implementar la landing en Next.js.

| Campo | Valor |
| --- | --- |
| **Proyecto Stitch** | Estrategia Digital para Negocios Locales |
| **Project ID** | `4743743070713045369` |
| **Resource name** | `projects/4743743070713045369` |
| **Marca** | Órbita — desarrollo de sitios web para negocios locales (Honduras) |
| **Última actualización Stitch** | 2026-09-28 |
| **Design system formal en Stitch** | No registrado (`list_design_systems` vacío). Tokens inferidos del HTML exportado y de la guía visual del proyecto. |

---

## Resumen de marca

- **Tono:** profesional, ágil, orientado a conversión (Google + WhatsApp).
- **Estética:** fondo claro en hero y secciones de confianza; bloques oscuros (`#0A0A0A`) para precios, proceso y CTA final; acento **violeta** (`#7C3AED`) como color de acción y órbitas decorativas.
- **Metáfora visual:** anillos orbitales, nodos luminosos púrpura, mockups de escritorio + móvil en el hero (desktop).
- **Conversión principal:** WhatsApp `+504 2793-4073` — `https://wa.me/50427934073`

---

## Paleta de colores

### Tokens principales (desktop — fuente: `tailwind.config` del HTML Stitch)

| Token | Hex / valor | Uso |
| --- | --- | --- |
| `brand.black` | `#0A0A0A` | Fondos oscuros, texto fuerte en hero |
| `brand.card` | `#121214` | Tarjetas en sección de planes |
| `brand.surface` | `#18181B` | Superficies elevadas oscuras |
| `brand.border` | `#27272A` | Bordes en tema oscuro |
| `brand.purple` | `#7C3AED` | CTA primario, links hover, iconos |
| `brand.purpleLight` | `#9061F9` | Badges, texto acento en oscuro |
| `brand.purpleDark` | `#5B21B6` | Glows, gradientes de fondo |
| `brand.accentGlow` | `rgba(124, 58, 237, 0.15)` | Halos orbitales |
| Hover CTA | `#6D28D9` | Estado hover de botones púrpura |
| Fondo página (claro) | `#FFFFFF` | Body desktop, secciones beneficios/FAQ |
| Fondo hero mobile | `#FAFAFC` | Hero móvil |
| Texto principal claro | `zinc-950` / `#0A0A0A` | Titulares |
| Texto secundario | `zinc-600` / `zinc-400` | Párrafos |
| Éxito / confianza | `emerald-400` | Puntos de estado, checks en plan destacado |
| Mobile dark base | `#08080A` | Variables mobile (`dark.base`) |
| Mobile card | `#111116` | Tarjetas pricing mobile |

### Escala mobile adicional

| Token | Hex |
| --- | --- |
| `brand.50` | `#F5F3FF` |
| `brand.100` | `#EDE9FE` |
| `brand.500` | `#8B5CF6` |
| `brand.600` | `#7C3AED` |
| `brand.700` | `#6D28D9` |
| `brand.900` | `#4C1D95` |
| `dark.border` | `#23232C` |

### Sombras

- `shadow-glow`: `0 0 35px -5px rgba(124, 58, 237, 0.35)`
- `shadow-glow-lg`: `0 0 55px -10px rgba(124, 58, 237, 0.45)`
- Mobile `shadow-glow-purple`: `0 0 35px -5px rgba(124, 58, 237, 0.45)`
- Tarjetas CTA: `shadow-purple-500/25` … `shadow-purple-600/30`

### Referencia en Stitch

- Pantalla: **Órbita - Paleta de Colores y Guía Visual.png** (`screens/4380665520061823610`)

---

## Tipografía

| Rol | Familia | Pesos | Notas |
| --- | --- | --- | --- |
| **Única familia** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | 400, 500, 600, 700, 800 | Google Fonts en Stitch |

### Escala sugerida (desktop)

| Elemento | Clases / tamaño | Peso |
| --- | --- | --- |
| H1 hero | `text-4xl` → `text-6xl`, `leading-[1.08]` | 800 (`font-extrabold`) |
| H2 sección | `text-3xl` → `text-5xl` | 800 |
| H3 tarjeta | `text-lg` – `text-2xl` | 700 |
| Body | `text-base` / `text-sm` | 400 |
| Eyebrow / label | `text-xs`, `uppercase`, `tracking-widest` | 600–800 |
| Nav | `text-sm` | 600 (`font-semibold`) |
| Pasos proceso | `font-mono`, `text-purple-400` | 700 |

### Mobile

- H1: `text-3xl`, `font-extrabold`, gradiente en “no en meses” (`from-brand-600 to-indigo-600`).
- Contenedor principal: `max-w-md mx-auto`.
- Badges: `text-[11px]`.

### CSS para Next.js

```css
--font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
```

Cargar con `next/font/google` → `Plus_Jakarta_Sans` (sustituir Geist en `layout.tsx`).

---

## Layout y espaciado

| Patrón | Valor |
| --- | --- |
| Contenedor | `max-w-7xl` (desktop), `max-w-6xl` / `max-w-4xl` (FAQ), `max-w-md` (mobile) |
| Padding horizontal | `px-6` desktop, `px-4` mobile |
| Secciones | `py-24` (desktop), `py-12` (mobile pricing) |
| Header altura | `h-24` desktop, compacto en mobile |
| Grid beneficios | 1 → 2 → 4 columnas |
| Grid planes | 2 columnas desktop, stack mobile |
| Border radius | `rounded-full` (pills), `rounded-xl` / `rounded-2xl` / `rounded-3xl` (cards) |

---

## Componentes

### Header (`MainHeader`)

- Sticky, `bg-white/90`, `backdrop-blur-md`, borde `border-zinc-100`.
- Logo PNG transparente (altura ~`h-20` desktop, `h-12` mobile).
- Nav desktop: Beneficios, Planes y Precios, Proceso, Casos de Éxito, FAQ (sin “Servicios”).
- CTA **“Hablemos”**: pill `rounded-full`, fondo `#7C3AED`, icono WhatsApp, enlace a `wa.me`.

### Hero (`HeroSection`)

**Desktop**

- Fondo blanco, anillos orbitales decorativos (`border-purple-200/50`).
- Badge: “Cupos para entrega esta semana disponibles” + punto animado.
- H1: “Transforma tu negocio en días, no en meses”.
- CTA primario: “Quiero transformar mi negocio” → `#planes`.
- Trust row: Entrega rápida, Diseño profesional, Soporte incluido (checks púrpura).
- Columna derecha: mockup de laptop completo (bisel, esquinas redondeadas, ligera perspectiva) + teléfono superpuesto. No recortar el monitor al borde.

**Mobile**

- Centrado, badge pill, headline con gradiente en span.
- Mismos mensajes; CTAs full-width.

### Planes y precios (`#planes`)

- Fondo `brand-black`, anillos orbitales de fondo.
- **Plan Básico — Landing:** `L 7,000` pago único; mantenimiento **L 450/mes** (ambos planes, lempiras).
- **Plan Estándar — Sitio completo:** `L 10,500`; mantenimiento **L 450/mes**; borde púrpura, badge ámbar **“★ El más popular”**.
- Lista con iconos check púrpura / esmeralda en plan destacado.
- Banner inferior: hosting desde L 450/mes, dominio y código del cliente.

### Beneficios (`#beneficios`)

- Fondo blanco, grid 4 cards `bg-zinc-50`.
- Títulos: Más visibilidad, Más clientes, Ahorra tiempo, Imagen profesional.
- Icono en contenedor `bg-purple-50`, hover `hover:-translate-y-1`.

### Proceso (`#proceso`)

- Fondo `#0A0A0A`, glows púrpura.
- Copy + CTA blanco pill “Comenzar a hablar con nosotros”.
- Stepper 4 pasos: 01 Hablamos → 02 Diseñamos → 03 Lanzamos → 04 Acompañamos.
- Imagen lateral con overlay (equipo / laptop).

### Caso de éxito (`#casos`)

- Card oscura: **Laboratorio Clínico Martínez Ruiz**, El Paraíso, Honduras.
- Cita testimonial + enlace `lab-martinezruiz.vercel.app`.
- Screenshot desktop del sitio entregado.

### FAQ (`#faq`)

- Acordeón `<details>` sobre `bg-zinc-50`.
- 4 preguntas: plazos de entrega, mantenimiento, WhatsApp, ampliaciones futuras.
- FAQ y precios siempre en **lempiras (L)**. Mantenimiento: **L 450/mes** en ambos planes.

### CTA final

- “¿Listo para transformar tu negocio?” + botón WhatsApp grande.
- Decoración: círculos concéntricos orbitales a la izquierda.

### Footer (`MainFooter`)

- `bg-black`, 4 columnas: marca + redes, navegación, legal, contacto.
- Logo en contenedor blanco redondeado.
- Enlaces legales placeholder (Términos, Privacidad, Garantía).

### Elementos decorativos

- `.orbit-ring` — borde circular `rgba(124, 58, 237, 0.22)`.
- `.orbit-node` — punto `#7C3AED` con `box-shadow` glow.
- Mobile: `.bg-ambient-orb`, gradientes radiales púrpura.

### Logo (assets Stitch)

| Pantalla | ID | Descripción |
| --- | --- | --- |
| Logo principal | `4380665520061821332` | PNG principal |
| Logo halo fino | `46123a96f6e74a8abe61f0c69852b8b7` | SVG |
| Logo tipografía original | `91b8b3be03554710bf5f79238ad781ef` | SVG |

URL de logo usada en HTML (exportar a `/public` en build):

`https://lh3.googleusercontent.com/aida/AEtjO1UBsi6asDqhQZt3O-3sLOi14ib1pv5aMyevkCczaGLTIl8_9GuaDWF1JPHaeyOqNjrR7GB6oc8He_bxg5fMOf4Ln2lUTjZLXYqAmVEGVoBEp3H8FfuPSl2tF-4cj2oFyXWLr-sH-FVvqkspTcT_U9f5BGL3uPHMSeftWLm0nwGHzxU-qehKFA1e3vKkjUABC6OD7C08xJTmOJLiWvz5BDrDg-UCNVBFN82SQORkSe6LFOeZNbhTYNaYu7c`

---

## Estructura de página

### Desktop — pantalla canónica

**Título Stitch:** Órbita - Landing Page (Hero con Mockup Claro y Desplazado)  
**Screen ID:** `a729797db7d040dd8ff46bdb38063c87`  
**Dimensiones:** 2560 × 10212 px  
**HTML export:** disponible en Stitch (`get_screen` → `htmlCode.downloadUrl`)

| Orden | Sección | Anchor | Fondo |
| --- | --- | --- | --- |
| 1 | Header | — | Blanco translúcido |
| 2 | Hero | — | Blanco |
| 3 | Planes y precios | `#planes` | Negro |
| 4 | Beneficios | `#beneficios` | Blanco |
| 5 | Proceso | `#proceso` | `#0A0A0A` |
| 6 | Caso de éxito | `#casos` | `#0F0F12` |
| 7 | FAQ | `#faq` | Blanco |
| 8 | CTA final | — | Negro |
| 9 | Footer | — | Negro |

El menú no incluye “Servicios”: esa etiqueta duplicaba **Planes y Precios** (`#planes`).

### Mobile — pantalla canónica

**Título Stitch:** Órbita - Mobile Hero con Mockup de Smartphone 3D  
**Screen ID:** `8bafee590f3b4b34b789c325021522d1`  
**Dimensiones:** 780 × 11578 px (`deviceType: MOBILE`)

| Orden | Sección | Notas |
| --- | --- | --- |
| 1 | Header sticky compacto | CTA → `#contacto` |
| 2 | Hero centrado | Gradiente en headline |
| 3 | Planes (stack) | `#planes`, cards oscuras |
| 4 | Beneficios | Cards apiladas |
| 5 | Proceso | Versión vertical |
| 6 | FAQ | Acordeón |
| 7 | Contacto / CTA | `#contacto` |

### Mockup de referencia

- **Órbita - Mockup Landing Page.png** — `4380665520061823150` (864 × 1821)

---

## Inventario de pantallas Stitch (proyecto)

| Título | Screen ID | Tipo | HTML |
| --- | --- | --- | --- |
| Órbita - Landing Page (Hero con Mockup…) | `a729797db7d040dd8ff46bdb38063c87` | DESKTOP | Sí |
| Órbita - Landing Page (Versión Mobile) | `8d05d2b784784c12b49e02eabd10e39c` | MOBILE | Sí |
| Órbita - Paleta de Colores y Guía Visual | `4380665520061823610` | Asset | No |
| Órbita - Mockup Landing Page | `4380665520061823150` | Asset | No |
| Órbita - Logo Principal | `4380665520061821332` | Asset | No |
| Fotografía lifestyle (hero proceso) | `6398180ec73b4bb989d07f02d12fbbb6` | Imagen | No |

---

## Implementación en Next.js (este repo)

### Tokens sugeridos (`app/globals.css`)

```css
:root {
  --orbita-purple: #7c3aed;
  --orbita-purple-hover: #6d28d9;
  --orbita-purple-light: #9061f9;
  --orbita-black: #0a0a0a;
  --orbita-card: #121214;
  --orbita-border-dark: #27272a;
  --orbita-surface-light: #fafafc;
}
```

### Alineación con código actual

El scaffold inicial usa **tema oscuro índigo/cyan** (Geist). **Reemplazar** por esta guía: Plus Jakarta Sans, fondos claros/oscuros alternos, acento `#7C3AED`.

### Componentes React sugeridos

```
components/
  layout/     Header.tsx, Footer.tsx
  sections/   Hero.tsx, Pricing.tsx, Benefits.tsx, Process.tsx, CaseStudy.tsx, FAQ.tsx, FinalCTA.tsx
  ui/         Button.tsx, Badge.tsx, Accordion.tsx, PricingCard.tsx
```

### Metadata

- **Title:** `Órbita | Sitios Web de Alto Impacto para Negocios Locales`
- **lang:** `es`
- **Locale negocio:** Honduras (precios en Lempiras, WhatsApp +504)

---

## Changelog de diseño

| Fecha | Nota |
| --- | --- |
| 2026-09-29 | `DESIGN.md` generado desde Stitch MCP (`orbira-stitch`) — proyecto *Estrategia Digital para Negocios Locales*. |
