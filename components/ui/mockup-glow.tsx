export function MockupGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute top-[6%] -left-[18%] h-[70%] w-[55%] -rotate-[18deg] rounded-[2.5rem] bg-[#8B5CF6]/28 blur-2xl" />
      <div className="absolute top-[18%] -right-[16%] h-[78%] w-[58%] rotate-[14deg] rounded-[2.5rem] bg-[#60A5FA]/50 blur-2xl" />
      <div className="absolute bottom-[8%] left-[10%] h-[45%] w-[45%] rounded-[2rem] bg-brand-purple/25 blur-3xl" />
    </div>
  );
}
