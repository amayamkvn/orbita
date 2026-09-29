export function Footer() {
  return (
    <footer className="border-t border-orbita-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-orbita-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Órbita. Desarrollo de sitios web.
        </p>
        <p>Landing en construcción con Next.js.</p>
      </div>
    </footer>
  );
}
