import { ArrowRight } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";
import { WORK_AREAS } from "@/data/workAreas";

export function WorkAreas() {
  return (
    <section id="trabalho" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <Reveal>
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.26em] text-brand">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse-soft" />
            Trabalho que faz a diferença
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] text-ink md:text-5xl lg:text-6xl">
            Presente nas áreas que movem o <span className="underline-sun">Piauí.</span>
          </h2>
        </Reveal>

        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 no-scrollbar md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {WORK_AREAS.map((area, index) => (
            <Reveal
              key={area.id}
              delay={index * 90}
              className="min-w-[78%] snap-start sm:min-w-[46%] md:min-w-0"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-3 pb-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-deep/10">
                <PhotoPlaceholder
                  label={area.photo.label}
                  alt={area.photo.alt}
                  ratio="16 / 10"
                  tone="mid"
                  className="rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="mx-2 mt-5 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-sun group-hover:text-night">
                  <area.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mx-2 mt-3 font-display text-xl font-semibold uppercase tracking-[0.03em] text-ink">
                  {area.title}
                </h3>
                <p className="mx-2 mt-1.5 flex-1 text-sm leading-relaxed text-ink/60">
                  {area.description}
                </p>
                <div className="mx-2 mt-5 flex justify-end">
                  <ArrowRight
                    className="h-5 w-5 text-brand transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
