import { Instagram, Landmark, Mail } from "lucide-react";
import { Reveal } from "./Reveal";
import { CONTACTS } from "@/data/navigation";
import { PHOTOS } from "@/data/photos";
import acenoAsset from "@/assets/georgiano-aceno.webp.asset.json";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  {
    id: "instagram",
    href: CONTACTS.instagram,
    label: "Instagram",
    value: "@georgianoneto",
    icon: Instagram,
  },
  {
    id: "whatsapp",
    href: CONTACTS.whatsapp,
    label: "WhatsApp",
    value: "Fale com a equipe",
    icon: WhatsAppIcon,
  },
  {
    id: "email",
    href: CONTACTS.email,
    label: "E-mail",
    value: "contato@georgianoneto.com.br",
    icon: Mail,
  },
  {
    id: "alepi",
    href: CONTACTS.alepi,
    label: "Atuação parlamentar",
    value: "Assembleia Legislativa do Piauí",
    icon: Landmark,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="grain relative scroll-mt-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-mid) 48%, var(--color-brand-deep) 100%)",
      }}
    >
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <Reveal>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.95] text-white md:text-7xl">
              Vamos em
              <span className="block text-sun">frente.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Fale com o nosso mandato. A porta está sempre aberta para a nossa gente.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {CONTACT_ITEMS.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl p-2 transition-colors duration-300 hover:bg-white/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-colors duration-300 group-hover:bg-sun group-hover:text-night">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      {item.label}
                    </span>
                    <span className="block truncate text-[15px] font-medium text-white">
                      {item.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <Reveal variant="clip" delay={150} className="relative z-10">
            <figure className="mx-auto w-full max-w-[340px]">
              <div className="relative">
                {/* Marcas de canto — mira de foto */}
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
                {/* Proporção 2:3 nativa da foto — object-cover sem corte
                    (não corta a mão erguida nem a cabeça) */}
                <img
                  src={acenoAsset.url}
                  width={248}
                  height={372}
                  alt={PHOTOS.footer.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ aspectRatio: "2 / 3" }}
                  className="block w-full rounded-md object-cover ring-1 ring-white/15 shadow-[0_28px_70px_-28px_color-mix(in_oklab,var(--color-night)_80%,transparent)]"
                />
              </div>
              <figcaption className="mt-5 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-sun animate-pulse-soft"
                />
                <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
                  {PHOTOS.footer.label}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-5 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {year} Georgiano Neto — Deputado Estadual do Piauí</p>
          <p className="uppercase tracking-[0.18em]">Do lado do povo. Presente onde a vida acontece.</p>
        </div>
      </div>
    </footer>
  );
}
