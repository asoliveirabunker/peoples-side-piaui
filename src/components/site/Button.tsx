import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline-light" | "outline-dark";
  withArrow?: boolean;
  children: ReactNode;
};

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[10px] px-6 font-display text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300";

const variants = {
  primary: "bg-sun text-night hover:-translate-y-0.5 hover:bg-sun-bright",
  "outline-light":
    "border border-white/40 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/5",
  "outline-dark":
    "border border-brand-deep/30 text-brand-deep hover:-translate-y-0.5 hover:border-brand-deep hover:bg-brand-deep/5",
} as const;

export function ButtonLink({
  variant = "primary",
  withArrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]}${className ? ` ${className}` : ""}`} {...props}>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
