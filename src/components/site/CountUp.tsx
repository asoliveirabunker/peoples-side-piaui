import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Valor final da contagem. */
  value: number;
  /** Dispara a animação quando true (seção visível na viewport). */
  start: boolean;
  /** Atraso em ms antes de começar (stagger entre colunas). */
  delay?: number;
  /** Duração da contagem em ms. */
  duration?: number;
  className?: string;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Contagem animada de 0 até `value`, formatada em pt-BR.
 * O HTML inicial já traz o valor final (bom para SEO); após a montagem o
 * número zera e anima quando `start` chega. Respeita prefers-reduced-motion.
 */
export function CountUp({ value, start, delay = 0, duration = 1400, className }: CountUpProps) {
  const [display, setDisplay] = useState(value);
  const armedRef = useRef(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      doneRef.current = true;
      return;
    }
    armedRef.current = true;
    setDisplay(0);
  }, []);

  useEffect(() => {
    if (!start || !armedRef.current || doneRef.current) return;
    doneRef.current = true;

    let raf = 0;
    let begin = 0;
    const tick = (now: number) => {
      if (!begin) begin = now;
      const progress = Math.min((now - begin) / duration, 1);
      setDisplay(progress < 1 ? Math.round(easeOutCubic(progress) * value) : value);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [start, value, delay, duration]);

  return <span className={className}>{display.toLocaleString("pt-BR")}</span>;
}
