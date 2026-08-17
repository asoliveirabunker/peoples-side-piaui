import { Ear, Hammer, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { PHOTOS } from "@/data/photos";
import abracoAsset from "@/assets/abraco.webp.asset.json";
import abracoAssetSm from "@/assets/abraco-840.webp.asset.json";

const PRINCIPLES = [
  { icon: Users, title: "Estar perto", description: "Ouvir de perto." },
  { icon: Ear, title: "Ouvir", description: "Entender a realidade." },
  { icon: Hammer, title: "Trabalhar", description: "Transformar presença em ação." },
] as const;

export function Presence() {
  return (
    <section id="presenca" className="grain relative overflow-hidden bg-brand-deep">
      <div className="mx-auto grid max-w-[1360px] lg:grid-cols-2">
        {/* Foto oficial do abraço — inteira visível (object-contain), com margem
            garantida e cantos de "mira de foto" rentes à imagem */}
        <Reveal variant="clip" className="relative">
          <div className="flex h-full items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-20">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-2.5 -top-2.5 h-5 w-5 border-l-2 border-t-2 border-white/30"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2.5 -top-2.5 h-5 w-5 border-r-2 border-t-2 border-white/30"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -left-2.5 h-5 w-5 border-b-2 border-l-2 border-white/30"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-2.5 -right-2.5 h-5 w-5 border-b-2 border-r-2 border-white/30"
              />
              <img
                src={abracoAsset.url}
                alt={PHOTOS.presence.alt}
                loading="lazy"
                decoding="async"
                className="block w-full max-w-[560px] rounded-md object-contain shadow-[0_28px_70px_-28px_color-mix(in_oklab,var(--color-night)_80%,transparent)]"
              />
            </div>
          </div>
        </Reveal>

        <div className="relative z-10 flex flex-col justify-center px-5 py-16 md:px-10 lg:px-16 lg:py-24">
          <Reveal>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-5xl lg:text-6xl">
              Política de verdade
              <span className="block text-sun">se faz presente.</span>
            </h2>
            <div aria-hidden="true" className="mt-7 h-1 w-16 bg-sun" />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {PRINCIPLES.map((principle, index) => (
              <Reveal key={principle.title} delay={140 + index * 110}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <principle.icon className="h-5 w-5 text-sun" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-[0.04em] text-white">
                  {principle.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
