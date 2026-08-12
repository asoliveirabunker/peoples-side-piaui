import { Image as ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * Placeholder de marca para as fotografias oficiais de Georgiano Neto.
 * Bloco azul profundo com faixa amarela diagonal, grain e etiqueta do slot.
 * Substituível por um <img> real sem tocar no layout (labels/alt vêm de
 * src/data/photos.ts e dos arquivos de dados).
 */
type PhotoPlaceholderProps = {
  label: string;
  alt: string;
  ratio?: string;
  tone?: "deep" | "mid";
  square?: boolean;
  className?: string;
};

export function PhotoPlaceholder({
  label,
  alt,
  ratio,
  tone = "deep",
  square = false,
  className,
}: PhotoPlaceholderProps) {
  return (
    <figure
      role="img"
      aria-label={alt}
      style={ratio ? ({ aspectRatio: ratio } as CSSProperties) : undefined}
      className={[
        "grain relative w-full overflow-hidden",
        square ? "" : "rounded-2xl ring-1 ring-white/10",
        tone === "deep"
          ? "bg-gradient-to-br from-brand-deep via-night to-night"
          : "bg-gradient-to-br from-brand via-brand-mid to-brand-deep",
        className ?? "",
      ].join(" ")}
    >
      {/* Faixas diagonais da marca */}
      <div
        aria-hidden="true"
        className="absolute -left-[25%] top-[58%] h-[13%] w-[150%] -rotate-12 bg-sun/90"
      />
      <div
        aria-hidden="true"
        className="absolute -left-[25%] top-[73%] h-[4.5%] w-[150%] -rotate-12 bg-brand/80"
      />
      {/* Marcas de canto */}
      <div
        aria-hidden="true"
        className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-white/25"
      />
      <div
        aria-hidden="true"
        className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-white/25"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20"
      >
        <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      </div>
      <figcaption className="absolute inset-x-4 bottom-4 z-10 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-sun animate-pulse-soft"
        />
        <span className="font-display text-[11px] font-medium uppercase tracking-[0.18em] text-white/65">
          {label}
        </span>
      </figcaption>
    </figure>
  );
}
