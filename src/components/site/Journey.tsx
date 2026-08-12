import { ButtonLink } from "./Button";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { Reveal } from "./Reveal";
import { PHOTOS } from "@/data/photos";

export function Journey() {
  return (
    <section id="caminhada" className="scroll-mt-20 bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 md:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] text-ink md:text-5xl lg:text-6xl">
              Nossa caminhada
              <span className="block">
                por todo o <span className="underline-sun">Piauí.</span>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 md:text-lg">
              Presente nas cidades, comunidades e zonas rurais. Sempre ao lado da nossa gente.
            </p>
          </Reveal>
          <Reveal delay={210} className="mt-9">
            <ButtonLink href="#agora" variant="outline-dark">
              Ver registros
            </ButtonLink>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5">
            <Reveal variant="clip" className="col-span-2 h-full md:col-span-7 md:row-span-2">
              <PhotoPlaceholder
                label={PHOTOS.journeyMain.label}
                alt={PHOTOS.journeyMain.alt}
                className="aspect-[4/3] h-full md:aspect-auto"
              />
            </Reveal>
            <Reveal variant="clip" delay={130} className="md:col-span-5">
              <PhotoPlaceholder
                label={PHOTOS.journeyA.label}
                alt={PHOTOS.journeyA.alt}
                ratio="4 / 3"
              />
            </Reveal>
            <Reveal variant="clip" delay={240} className="md:col-span-5 md:translate-y-5">
              <PhotoPlaceholder
                label={PHOTOS.journeyB.label}
                alt={PHOTOS.journeyB.alt}
                ratio="4 / 3"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
