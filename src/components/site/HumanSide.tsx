import { Quote } from "lucide-react";
import { Band } from "./Band";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";
import { FACTS } from "@/data/facts";
import { PHOTOS } from "@/data/photos";

export function HumanSide() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <Band className="-left-8 bottom-10 h-20 w-[110%] opacity-60" rotate={-8} flip />
          <Reveal variant="clip" className="relative z-10">
            <PhotoPlaceholder
              label={PHOTOS.human.label}
              alt={PHOTOS.human.alt}
              ratio="4 / 5"
              className="mx-auto max-w-md lg:max-w-none"
            />
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">
              Além do mandato
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] text-ink md:text-5xl lg:text-6xl">
              Uma história de vida.
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-9 border-t border-ink/10">
              {FACTS.map((fact) => (
                <li
                  key={fact.id}
                  className="flex items-center gap-4 border-b border-ink/10 py-4"
                >
                  <span className="w-7 shrink-0 font-display text-sm font-semibold text-brand">
                    {fact.id}
                  </span>
                  <fact.icon
                    className="h-[18px] w-[18px] shrink-0 text-ink/40"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <p className="text-[15px] font-medium leading-snug text-ink/80">{fact.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <blockquote className="mt-9 flex items-start gap-3">
              <Quote className="mt-1 h-6 w-6 shrink-0 text-sun" fill="currentColor" aria-hidden="true" />
              <p className="font-display text-xl font-semibold uppercase leading-snug tracking-[0.03em] text-ink md:text-2xl">
                Amor incondicional a Deus e ao Piauí.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
