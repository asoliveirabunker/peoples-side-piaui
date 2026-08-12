import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import {
  ALEPI_SAPL_SEARCH_URL,
  ALEPI_WORK,
  type AlepiStatus,
  type AlepiWorkItem,
} from "@/data/alepiWork";

/** Chips de status — cores exatas da identidade (amarelo só aqui e em microdetalhes) */
const STATUS_STYLES: Record<AlepiStatus, string> = {
  "VIROU LEI": "bg-sun/14 text-sun-deep",
  APROVADO: "bg-brand/10 text-brand",
  PROJETO: "bg-brand-deep/8 text-brand-deep",
};

function StatusChip({ status }: { status: AlepiStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}

function VerifyLink({ item }: { item: AlepiWorkItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors duration-300 hover:text-brand-mid"
    >
      {item.ctaLabel}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

/** Destaque 01 — protagonista visual da seção (composição tipográfica, sem foto) */
function FeaturedCard({ item }: { item: AlepiWorkItem }) {
  const Icon = item.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-deep/12 bg-white p-7 transition-colors duration-300 hover:border-brand-deep/30 md:p-10">
      {/* Brilho de canto — profundidade editorial discreta */}
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/5 blur-2xl"
      />
      {/* Numeração editorial — auxiliar, nunca compete com o título */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-5 right-3 font-display text-[clamp(56px,7vw,96px)] font-extrabold leading-none text-brand-deep opacity-[0.06]"
      >
        {item.id}
      </span>

      <div className="relative flex items-start justify-between gap-4">
        <p className="flex items-center gap-2.5 pt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          <span aria-hidden="true" className="h-1.5 w-1.5 bg-sun" />
          {item.tag}
        </p>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/8 text-brand">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>

      <h3 className="relative mt-8 max-w-md text-[clamp(26px,2.4vw,38px)] font-semibold leading-[1.02] tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-brand md:mt-10">
        {item.title}
      </h3>
      <p className="relative mt-4 max-w-md text-base leading-[1.55] text-ink/65">
        {item.description}
      </p>

      <div className="relative mt-auto pt-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <StatusChip status={item.status} />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
            {item.reference}
          </span>
        </div>
        <div className="mt-5">
          <VerifyLink item={item} />
        </div>
      </div>
    </article>
  );
}

/** Destaques 02–04 — cards secundários compactos */
function SecondaryCard({ item }: { item: AlepiWorkItem }) {
  const Icon = item.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-deep/12 bg-white p-6 transition-colors duration-300 hover:border-brand-deep/30">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 font-display text-7xl font-extrabold leading-none text-brand-deep opacity-[0.06]"
      >
        {item.id}
      </span>

      <div className="relative flex items-center gap-2.5">
        <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} aria-hidden="true" />
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand">
          {item.tag}
        </p>
      </div>

      <h3 className="relative mt-3 text-xl font-semibold leading-[1.05] text-ink transition-colors duration-300 group-hover:text-brand">
        {item.title}
      </h3>
      <p className="relative mt-2 text-sm leading-[1.55] text-ink/65">{item.description}</p>

      <div className="relative mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
        <StatusChip status={item.status} />
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
          {item.reference}
        </span>
        <span className="ml-auto">
          <VerifyLink item={item} />
        </span>
      </div>
    </article>
  );
}

export function AlepiWork() {
  const featured = ALEPI_WORK[0];
  const secondary = ALEPI_WORK.slice(1);
  if (!featured) return null;

  return (
    <section id="trabalho" className="scroll-mt-20 bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        <Reveal y={24}>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand">
            Trabalho na ALEPI
          </p>
          <h2 className="mt-3 max-w-5xl font-display text-[clamp(4rem,7vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-brand-deep">
            Trabalho que chega à vida das pessoas<span className="text-sun">.</span>
          </h2>
        </Reveal>
        <Reveal y={24} delay={120}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
            Projetos e iniciativas apresentados por Georgiano Neto em áreas que fazem parte do
            dia a dia dos piauienses.
          </p>
        </Reveal>

        {/* 1 protagonista + 3 secundários (empilha no mobile, ordem 01→04) */}
        <div className="mt-12 grid items-stretch gap-4 md:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-6">
          <Reveal y={24} className="h-full">
            <FeaturedCard item={featured} />
          </Reveal>
          <div className="flex flex-col gap-4 lg:gap-5">
            {secondary.map((item, index) => (
              <Reveal key={item.id} y={24} delay={(index + 1) * 80} className="flex-1">
                <SecondaryCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Faixa de fechamento */}
        <Reveal y={24} delay={120}>
          <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-brand-deep/12 bg-white px-6 py-6 md:mt-8 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="text-base font-medium leading-snug text-ink">
                Projetos, requerimentos e outras iniciativas fazem parte desse trabalho na
                Assembleia.
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/45">
                Dados e documentos oficiais: Assembleia Legislativa do Estado do Piauí — ALEPI /
                SAPL.
              </p>
            </div>
            <ButtonLink
              href={ALEPI_SAPL_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              variant="outline-dark"
              className="shrink-0"
            >
              Conheça a atuação parlamentar
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
