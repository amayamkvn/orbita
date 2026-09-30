export function MockupGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute top-[8%] -left-[12%] h-52 w-40 -rotate-[18deg] rounded-[2.5rem] bg-[#8B5CF6]/55 blur-2xl" />
      <div className="absolute top-[22%] -right-[10%] h-60 w-44 rotate-[14deg] rounded-[2.5rem] bg-[#60A5FA]/50 blur-2xl" />
      <div className="absolute bottom-[12%] left-[12%] h-36 w-36 rounded-[2rem] bg-brand-purple/25 blur-3xl" />
    </div>
  );
}
