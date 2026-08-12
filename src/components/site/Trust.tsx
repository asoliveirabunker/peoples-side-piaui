import { Star } from "lucide-react";
import { CountUp } from "./CountUp";
import { Reveal, useReveal } from "./Reveal";
import { ELECTIONS } from "@/data/elections";

export function Trust() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);
  const max = Math.max(...ELECTIONS.map((election) => election.votes));

  return (
    <section id="confianca" className="scroll-mt-20 bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">
              Uma história de
            </p>
            <h2 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] text-brand md:text-6xl lg:text-7xl">
              Confiança.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
              Três eleições. Três mandatos. Uma trajetória construída com muito trabalho e a
              confiança do povo do Piauí.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="trust-badge mt-10 flex max-w-lg items-center gap-5 rounded-2xl px-6 py-6 md:px-7 md:py-7">
              <Star
                className="trust-star h-11 w-11 shrink-0 md:h-14 md:w-14"
                fill="currentColor"
                aria-hidden="true"
              />
              <p className="font-display text-lg font-bold uppercase leading-tight tracking-[0.05em] text-ink md:text-2xl">
                Deputado estadual mais votado da história do Piauí.
              </p>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className={visible ? "is-visible" : ""}>
          <div className="flex items-end justify-center gap-8 md:gap-14">
            {ELECTIONS.map((election, index) => (
              <div key={election.year} className="flex flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {election.year}
                </p>
                <p className="mt-1 font-display text-3xl font-bold tabular-nums text-brand-deep md:text-5xl">
                  <CountUp value={election.votes} start={visible} delay={index * 140} duration={1300} />
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  Votos
                </p>
                <div className="relative mt-4 h-44 w-16 md:h-60 md:w-24">
                  <div
                    className="trust-bar absolute inset-x-0 bottom-0"
                    style={{
                      height: `${Math.round((election.votes / max) * 100)}%`,
                      transitionDelay: `${index * 140}ms`,
                    }}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 translate-x-2 rounded-t-lg bg-sun"
                    />
                    <div className="absolute inset-0 rounded-t-lg bg-gradient-to-t from-brand-mid to-brand" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-ink/40">
            Fonte: Assembleia Legislativa do Estado do Piauí (ALEPI)
          </p>
        </div>
      </div>
    </section>
  );
}
