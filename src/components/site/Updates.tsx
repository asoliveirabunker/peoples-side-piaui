import { Instagram, MapPin } from "lucide-react";
import { ButtonLink } from "./Button";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";
import { CONTACTS } from "@/data/navigation";
import { UPDATES } from "@/data/updates";

export function Updates() {
  return (
    <section id="agora" className="grain relative scroll-mt-20 overflow-hidden bg-night py-20 lg:py-28">
      <div className="relative z-10 mx-auto max-w-[1280px] px-5 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-white md:text-5xl lg:text-6xl">
              A caminhada
              <span className="block text-sun">continua.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
              Seguimos presentes, trabalhando e ouvindo de perto.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ButtonLink
              href={CONTACTS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              withArrow={false}
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Acompanhe no Instagram
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {UPDATES.map((update, index) => (
            <Reveal key={update.id} delay={index * 110}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.07]">
                <div className="overflow-hidden">
                  <PhotoPlaceholder
                    label={update.photo.label}
                    alt={update.photo.alt}
                    ratio="4 / 3"
                    square
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`cut-corner inline-flex items-center px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${
                      index === 0 ? "bg-sun text-night" : "bg-white/10 text-white/75"
                    }`}
                  >
                    {update.label}
                  </span>
                  <h3 className="mt-3.5 flex items-center gap-1.5 font-display text-lg font-semibold uppercase tracking-[0.03em] text-white">
                    <MapPin className="h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
                    {update.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {update.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
