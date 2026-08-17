import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { PHOTOS } from "@/data/photos";
import heroAsset from "@/assets/georgiano-hero.webp.asset.json";
import heroAssetSm from "@/assets/georgiano-hero-640.webp.asset.json";

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
      {/* Brilho amarelo suave no canto inferior esquerdo — equilibra a composição */}
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sun/10 blur-[120px]"
      />
      {/* Chão sutil que assenta a figura na base da seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-night/70 to-transparent"
      />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-[1280px] items-center gap-12 px-5 pt-28 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-32">
        <div className="max-w-xl lg:self-center">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-sun">
              <span aria-hidden="true" className="h-[2px] w-10 bg-sun" />
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

        {/* Foto oficial — ancorada na base do hero, fundida ao fundo com fade */}
        <div className="relative flex items-end justify-center self-end lg:self-stretch">
          {/* Brilho da marca atrás da silhueta */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 top-[8%]"
            style={{
              background:
                "radial-gradient(58% 62% at 50% 46%, color-mix(in oklab, var(--color-brand) 50%, transparent) 0%, transparent 72%)",
            }}
          />
          <Reveal delay={200} className="relative z-10">
            <img
              src={heroAsset.url}
              alt={PHOTOS.hero.alt}
              fetchPriority="high"
              decoding="async"
              className="hero-photo-fade mx-auto h-[54vh] w-auto max-w-full object-contain object-bottom lg:h-[calc(100svh-9rem)] lg:max-h-[940px] lg:max-w-none xl:origin-bottom xl:scale-105"
            />
          </Reveal>
        </div>
      </div>

      {/* Tag vertical decorativa — só em telas bem largas, longe da foto */}
      <div
        aria-hidden="true"
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-8 opacity-20 min-[1440px]:flex"
      >
        <span className="h-24 w-px bg-white" />
        <span className="vertical-text rotate-180 font-display text-[10px] font-semibold uppercase tracking-[0.5em] text-white">
          Piauí no coração
        </span>
        <span className="h-24 w-px bg-white" />
      </div>
    </section>
  );
}
