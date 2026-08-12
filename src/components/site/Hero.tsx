import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { PHOTOS } from "@/data/photos";
import heroAsset from "@/assets/georgiano-hero.png.asset.json";

export function Hero() {
  return (
    <section id="inicio" className="grain relative overflow-hidden bg-night">
      {/* Profundidade de fundo */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 78% 0%, var(--color-brand-deep) 0%, transparent 62%), linear-gradient(180deg, var(--color-brand-deep) 0%, var(--color-night) 72%)",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-[1280px] items-center gap-12 px-5 pb-16 pt-28 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-10 lg:pt-32">
        <div className="max-w-xl lg:self-center">
          <Reveal>
            <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.26em] text-white/60">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse-soft"
              />
              Georgiano Neto
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-5 font-display text-[clamp(3.5rem,9vw,7.25rem)] font-bold uppercase leading-[0.92] tracking-[-0.01em] text-white">
              Do lado
              <span className="block text-sun">do povo.</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 text-lg font-semibold text-white md:text-xl">
              Presente onde a vida acontece.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <p className="mt-3 max-w-md text-base leading-relaxed text-white/65">
              Seguimos nossa caminhada pelo Piauí, ouvindo de perto e trabalhando junto com a
              nossa gente.
            </p>
          </Reveal>

          <Reveal delay={310} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#trabalho">Conheça nosso trabalho</ButtonLink>
            <ButtonLink href="#caminhada" variant="outline-light">
              Acompanhe a caminhada
            </ButtonLink>
          </Reveal>
        </div>

        {/* Foto oficial — fundida ao fundo com fade, sem moldura nem cartão */}
        <div className="relative flex items-end justify-center lg:self-stretch">
          {/* Brilho sutil da marca para destacar a silhueta do fundo */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 top-[12%]"
            style={{
              background:
                "radial-gradient(58% 62% at 50% 46%, color-mix(in oklab, var(--color-brand) 42%, transparent) 0%, transparent 72%)",
            }}
          />
          <Reveal delay={200} className="relative z-10">
            <img
              src={heroAsset.url}
              alt={PHOTOS.hero.alt}
              fetchPriority="high"
              decoding="async"
              className="hero-photo-fade mx-auto h-[48vh] w-auto max-w-full object-contain lg:h-[76vh]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
