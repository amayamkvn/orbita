# landingpage-orbita

Landing page para **Órbita**, empresa de desarrollo de sitios web.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Descripción              |
| -------------- | ------------------------ |
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm run start`| Servidor de producción   |
| `npm run lint` | ESLint                   |

## Estructura

```
app/                 Rutas y layout
components/
  layout/            Header, footer
  sections/          Secciones de la landing (hero, servicios, etc.)
```

Cuando tengas el diseño en Stitch, añade `DESIGN.md` en la raíz para alinear colores, tipografía y componentes con el mockup.
