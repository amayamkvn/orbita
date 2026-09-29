export function OrbitRings({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <div className="absolute top-1/2 right-0 h-[550px] w-[850px] -translate-y-1/2 rounded-full border border-purple-200/50 -mr-48" />
      <div className="absolute top-1/4 right-24 h-[420px] w-[420px] rounded-full border border-purple-200/40" />
    </div>
  );
}
