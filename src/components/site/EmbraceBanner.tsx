import { Reveal } from "./Reveal";
import { Band } from "./Band";
import abracoAsset from "@/assets/abraco.png.asset.json";

export function EmbraceBanner() {
  return (
    <section
      aria-label="Momento de proximidade com a população"
      className="relative isolate overflow-hidden"
    >
      {/* Imagem de fundo com leve aumente de brilho para destacar o abraço */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${abracoAsset.url})`,
          filter: "brightness(1.1)",
        }}
      />

      {/* Overlay leve para manter legibilidade sem esconder o abraço */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-night/35"
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
