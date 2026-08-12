import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/5 bg-night/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1280px] items-center justify-between px-5 transition-all duration-300 md:px-6 ${
            scrolled ? "h-14" : "h-16 md:h-[4.5rem]"
          }`}
        >
          <a
            href="#inicio"
            aria-label="Georgiano Neto — voltar ao início"
            className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-white"
          >
            Georgiano <span className="text-sun">Neto</span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] font-medium uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contato"
              className="hidden h-10 items-center rounded-[10px] bg-sun px-5 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-sun-bright lg:inline-flex"
            >
              Fale com a equipe
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile fullscreen */}
      <div
        aria-hidden={!open}
        className={`grain fixed inset-0 z-40 flex flex-col overflow-hidden bg-night transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div aria-hidden="true" className="absolute -right-24 top-28 h-32 w-[85%] -rotate-12">
          <div className="h-1/2 bg-brand" />
          <div className="h-1/2 bg-sun" />
        </div>

        <nav aria-label="Menu" className="relative z-10 flex flex-1 flex-col justify-center px-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + index * 60}ms` : "0ms" }}
              className={`flex items-baseline gap-4 py-3 font-display text-4xl font-semibold uppercase tracking-wide text-white transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            >
              <span className="text-sm font-medium text-sun">0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
            className={`mt-8 inline-flex h-12 w-fit items-center rounded-[10px] bg-sun px-6 font-display text-sm font-semibold uppercase tracking-[0.08em] text-night transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Fale com a equipe
          </a>
        </nav>
        <p className="relative z-10 px-8 pb-10 text-xs uppercase tracking-[0.24em] text-white/40">
          Do lado do povo.
        </p>
      </div>
    </>
  );
}
