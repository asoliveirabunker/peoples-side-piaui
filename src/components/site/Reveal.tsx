import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Reveal de scroll baseado em IntersectionObserver + CSS.
 * Movimento com intenção: opacity + translateY (ou máscara), 300–700ms,
 * cubic-bezier(0.22, 1, 0.36, 1). Respeita prefers-reduced-motion (via CSS).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: "fade" | "clip";
  delay?: number;
  y?: number;
  className?: string;
  id?: string;
};

export function Reveal({
  children,
  as,
  variant = "fade",
  delay = 0,
  y = 28,
  className,
  id,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, visible } = useReveal<HTMLElement>();
  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  // A máscara fica num wrapper interno: o Chromium zera a interseção de um
  // elemento que tem clip-path próprio, então o observado nunca é clipado.
  if (variant === "clip") {
    return (
      <Tag id={id} ref={ref} style={style} className={className}>
        <div className={`reveal-clip h-full w-full${visible ? " is-visible" : ""}`}>
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      id={id}
      ref={ref}
      style={style}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </Tag>
  );
}
