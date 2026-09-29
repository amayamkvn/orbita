# landingpage-orbita

Landing de **Órbita**, empresa de desarrollo de sitios web para negocios locales en Honduras.

El diseño está documentado en [`DESIGN.md`](./DESIGN.md) (exportado desde Stitch).

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Plus Jakarta Sans

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/                      Layout, estilos y página
components/
  layout/                 Header y footer
  sections/               Hero, planes, beneficios, proceso, caso, FAQ, CTA
  ui/                     Botón, badge, logo, iconos
lib/site.ts               Copy, precios y enlaces WhatsApp
public/brand/             Logo y fotos
```
