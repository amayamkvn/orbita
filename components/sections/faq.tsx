import { ChevronIcon } from "@/components/ui/icons";
import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-12 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <span className="mb-3 block text-xs font-extrabold tracking-widest text-brand-purple uppercase">
            Preguntas frecuentes
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950 md:text-3xl">
            Resolvemos tus dudas
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-zinc-200/70 bg-zinc-50 p-5 md:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-zinc-900 md:text-base [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <ChevronIcon className="h-5 w-5 shrink-0 text-brand-purple transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
