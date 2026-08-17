import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { CONTACTS } from "@/data/navigation";
import { PHOTOS } from "@/data/photos";
import multidaoAsset from "@/assets/multidao.webp.asset.json";
import abracoComunidadeAsset from "@/assets/abraco-comunidade.webp.asset.json";
import comunidadeAsset from "@/assets/comunidade.webp.asset.json";
import zonaRuralAsset from "@/assets/zona-rural.webp.asset.json";

function JourneyPhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

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
            <ButtonLink
              href={CONTACTS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-dark"
            >
              Ver registros
            </ButtonLink>
          </Reveal>
        </div>

        {/* Mosaico com as 4 fotos oficiais — orientação de cada imagem dita o slot:
            multidão (larga), abraço (vertical alta), comunidade e zona rural */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-4 md:h-[440px] md:grid-cols-12 md:grid-rows-2 md:gap-5 lg:h-[600px]">
            <Reveal variant="clip" className="col-span-2 max-md:order-1 md:col-span-8">
              <JourneyPhoto
                src={multidaoAsset.url}
                alt={PHOTOS.journeyMain.alt}
                className="aspect-[16/11] md:aspect-auto md:h-full"
              />
            </Reveal>
            <Reveal
              variant="clip"
              delay={290}
              className="col-span-2 max-md:order-4 md:col-span-4 md:row-span-2"
            >
              <JourneyPhoto
                src={abracoComunidadeAsset.url}
                alt={PHOTOS.journeyC.alt}
                className="aspect-[4/5] md:aspect-auto md:h-full"
              />
            </Reveal>
            <Reveal variant="clip" delay={110} className="max-md:order-2 md:col-span-4">
              <JourneyPhoto
                src={comunidadeAsset.url}
                alt={PHOTOS.journeyA.alt}
                className="aspect-[4/3] md:aspect-auto md:h-full"
              />
            </Reveal>
            <Reveal variant="clip" delay={200} className="max-md:order-3 md:col-span-4">
              <JourneyPhoto
                src={zonaRuralAsset.url}
                alt={PHOTOS.journeyB.alt}
                className="aspect-[4/3] md:aspect-auto md:h-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
