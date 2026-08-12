import { Reveal } from "./Reveal";
import { Band } from "./Band";
import abracoAsset from "@/assets/abraco.png.asset.json";

export function EmbraceBanner() {
  return (
    <section
      aria-label="Momento de proximidade com a população"
      className="relative overflow-hidden"
    >
      {/* Imagem de fundo com leve aumento de brilho para destacar o abraço */}
      <div className="absolute inset-0 -z-20">
        <img
          src={abracoAsset.url}
          alt="Georgiano Neto abraçando uma moradora durante encontro com a população"
          className="h-full w-full object-cover object-center brightness-[1.1]"
          loading="lazy"
        />
      </div>

      {/* Overlay: bordas escuras para legibilidade, centro mais claro para revelar o abraço */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 120% at 50% 45%, color-mix(in oklab, var(--color-night) 30%, transparent) 0%, color-mix(in oklab, var(--color-night) 65%, transparent) 100%)",
        }}
      />

      {/* Faixas decorativas de identidade */}
      <Band
        animated
        className="-right-40 top-6 hidden h-16 w-[40%] opacity-50 lg:block"
        rotate={-12}
      />
      <Band
        animated
        className="-left-40 bottom-6 hidden h-12 w-[35%] opacity-30 lg:block"
        rotate={-12}
        flip
      />

      <div className="relative z-10 mx-auto flex min-h-[36vh] max-w-[1280px] flex-col items-center justify-center px-5 py-16 text-center md:min-h-[42vh] md:px-6 lg:min-h-[48vh] lg:py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sun">
            Presença de verdade
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] text-white">
            Do lado do povo,
            <span className="block text-sun">sempre.</span>
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Cada abraço, cada conversa e cada encontro reforçam o nosso compromisso: seguir
            ouvindo, trabalhando e estando presente onde a vida acontece.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
