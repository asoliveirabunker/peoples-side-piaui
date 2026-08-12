import { Reveal } from "./Reveal";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { FACTS } from "@/data/facts";
import { PHOTOS } from "@/data/photos";

export function HumanSide() {
  return (
    <section
      id="sobre"
      className="relative scroll-mt-20 overflow-hidden py-20 lg:py-28"
    >
      {/* Fundo com foto + overlay escuro */}
      <div className="absolute inset-0 -z-10">
        <PhotoPlaceholder
          label={PHOTOS.human.label}
          alt={PHOTOS.human.alt}
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-night/85" aria-hidden="true" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 md:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sun">
            Além do mandato
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-5xl lg:text-6xl">
            5 fatos sobre mim
          </h2>
        </Reveal>

        <ol className="mt-10 space-y-4 md:mt-12 md:space-y-5">
          {FACTS.map((fact, index) => (
            <Reveal key={fact.id} delay={index * 100}>
              <li className="group flex items-stretch gap-1 sm:gap-2 md:gap-3">
                <span className="flex w-[1.1em] shrink-0 items-center justify-center font-display text-4xl font-bold leading-none text-sun sm:text-5xl md:text-6xl lg:text-7xl">
                  {fact.id}.
                </span>
                <div className="cut-corner flex flex-1 items-center bg-brand-deep/95 px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-5">
                  <p className="text-sm font-medium leading-snug text-white/95 sm:text-base md:text-lg">
                    {fact.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
