import heroImg from "@/assets/sjk-hero.jpg";
import { NAV, MEMBERS } from "./data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white">
      <img
        src={heroImg}
        alt="Cinematic city skyline with LED billboards"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        width={1920}
        height={1080}
      />
      {/* Stronger left-side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-[1400px] items-center justify-between px-8 py-7">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight text-white">SJK</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">Group</span>
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
          href="#contact"
          className="hidden rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-[var(--brand-red)] hover:bg-[var(--brand-red)] md:inline-block"
        >
          Liên hệ hợp tác
        </a>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              Hệ sinh thái truyền thông ngoài trời
            </span>
          </div>
          <h1 className="font-display text-[88px] font-light leading-[0.95] tracking-tight md:text-[120px]">
            SJK <span className="italic text-[var(--brand-red)]">Group</span>
          </h1>
          <p className="mt-6 font-display text-2xl font-light leading-snug text-white/85 md:text-3xl">
            Tập đoàn truyền thông ngoài trời thế hệ mới
          </p>
          <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/85">
            SJK Group là hệ sinh thái các công ty thành viên hoạt động trong OOH Media,
            công nghệ truyền thông, dữ liệu OOH, màn hình số, sáng tạo thương hiệu và đầu
            tư hạ tầng quảng cáo.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110"
            >
              Khám phá hệ sinh thái
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Liên hệ hợp tác
            </a>
          </div>
        </div>
      </div>

      {/* Bottom member index */}
      <div className="relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-8 gap-y-2 px-8 py-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65">
            Member companies
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[12px] text-white/85">
            {MEMBERS.map((m, i) => (
              <span key={m.id} className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="text-[10px] text-[var(--brand-red)]">{m.index}</span>
                  {m.name}
                </span>
                {i < MEMBERS.length - 1 && <span className="text-white/20">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}