export function MockupGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="absolute top-[10%] left-[4%] h-[62%] w-[46%] -rotate-[16deg] rounded-[2.5rem] bg-[#8B5CF6]/28 blur-2xl" />
      <div className="absolute top-[20%] right-[4%] h-[70%] w-[48%] rotate-[14deg] rounded-[2.5rem] bg-[#60A5FA]/50 blur-2xl" />
      <div className="absolute bottom-[12%] left-[20%] h-[38%] w-[38%] rounded-[2rem] bg-brand-purple/20 blur-3xl" />
    </div>
  );
}
