import { Reveal } from "./Reveal";
import { Band } from "./Band";
import abracoAsset from "@/assets/abraco.png.asset.json";

export function EmbraceBanner() {
  return (
    <section
      aria-label="Momento de proximidade com a população"
      className="relative overflow-hidden"
    >
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-20">
        <img
          src={abracoAsset.url}
          alt="Georgiano Neto abraçando uma moradora durante encontro com a população"
          className="h-full w-full object-cover object-[55%_40%]"
          loading="lazy"
        />
      </div>

      {/* Overlay: centro transparente para revelar o abraço, bordas escuras para legibilidade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 100% at 55% 40%, color-mix(in oklab, var(--color-night) 10%, transparent) 0%, color-mix(in oklab, var(--color-night) 70%, transparent) 100%)",
        }}
      />

      {/* Faixas decorativas de identidade */}
      <Band
        animated
        className="-right-40 top-8 hidden h-20 w-[45%] opacity-60 lg:block"
        rotate={-12}
      />
      <Band
        animated
        className="-left-40 bottom-8 hidden h-16 w-[40%] opacity-40 lg:block"
        rotate={-12}
        flip
      />

      <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-[1280px] flex-col items-center justify-center px-5 py-20 text-center md:min-h-[60vh] md:px-6 lg:py-28">
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
