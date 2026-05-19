import { NAV } from "./data";

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-8 py-7">
      <a href="/" className="flex items-center gap-2">
        <span className="text-2xl tracking-tight text-white">
          SJK
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">
          Group
        </span>
      </a>

      <nav className="hidden items-center gap-9 md:flex">
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            className="text-[13px] font-medium text-white/95 transition hover:text-[var(--brand-red)]"
          >
            {n.label}
          </a>
        ))}
      </nav>

      <a
        href="/contact"
        className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] md:inline-block"
      >
        Liên hệ hợp tác
      </a>
    </header>
  );
}