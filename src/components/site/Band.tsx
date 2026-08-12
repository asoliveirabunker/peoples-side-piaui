import type { CSSProperties } from "react";

/**
 * Faixa azul + faixa amarela — elemento gráfico proprietário da identidade.
 * Sempre decorativa (aria-hidden), posicionada de forma absoluta dentro de
 * um container relative.
 */
type BandProps = {
  className?: string;
  rotate?: number;
  flip?: boolean;
  animated?: boolean;
};

export function Band({ className, rotate = -10, flip = false, animated = false }: BandProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute${animated ? " animate-band-in" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <div
        className="flex h-full w-full flex-col"
        style={{ transform: `rotate(${rotate}deg)` } as CSSProperties}
      >
        <div className={`h-1/2 w-full bg-brand${flip ? " order-2" : ""}`} />
        <div className={`h-1/2 w-full bg-sun${flip ? " order-1" : ""}`} />
      </div>
    </div>
  );
}
