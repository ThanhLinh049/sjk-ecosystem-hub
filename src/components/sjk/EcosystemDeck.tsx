import { useState } from "react";
import { MEMBERS } from "./data";

export function EcosystemDeck() {
  const [active, setActive] = useState(0);
  const m = MEMBERS[active];

  return (
    <section id="ecosystem" className="bg-[var(--background)] py-28">
      <div className="mx-auto max-w-[1320px] px-8">
        {/* Unified intro */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60">
              Ecosystem Command Deck
            </span>
          </div>
          <h2 className="font-display text-[44px] font-light leading-[1.05] text-[var(--ink)] md:text-[56px]">
            Sáu công ty thành viên, một hệ sinh thái{" "}
            <span className="italic text-[var(--brand-red)]">SJK Group</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]/75">
            Mỗi công ty thành viên đảm nhiệm một mắt xích chuyên biệt trong chuỗi giá trị
            truyền thông ngoài trời — vận hành dưới định hướng chung của tập đoàn.
          </p>
        </div>

        {/* Deck */}
        <div className="mt-14 border border-[var(--border)] bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
          {/* Top row — parent company bar */}
          <div className="relative flex items-center justify-between border-b border-[var(--border)] bg-[var(--ink)] px-7 py-5 text-white">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-red)]" />
              <span className="font-display text-xl">SJK Group</span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">
                / Parent Company
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">
              Corporate OOH Ecosystem
            </span>
            {/* Green connector line dropping toward active company */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 h-3 w-px translate-y-full bg-[var(--brand-green)] transition-all duration-500"
              style={{
                left: `calc(${(active + 0.5) * (100 / MEMBERS.length)}% )`,
              }}
            />
          </div>

          {/* Switcher */}
          <div className="grid grid-cols-3 divide-x divide-[var(--border)] border-b border-[var(--border)] md:grid-cols-6">
            {MEMBERS.map((mem, i) => {
              const isActive = i === active;
              return (
                <button
                  key={mem.id}
                  onClick={() => setActive(i)}
                  className={`relative flex flex-col items-start gap-1 px-5 py-6 text-left transition ${
                    isActive ? "bg-white" : "bg-[var(--warm-white)] hover:bg-white"
                  }`}
                >
                  <span
                    className={`text-[10px] font-semibold tracking-[0.28em] ${
                      isActive ? "text-[var(--brand-red)]" : "text-[var(--charcoal)]/45"
                    }`}
                  >
                    {mem.index}
                  </span>
                  <span
                    className={`font-display text-[19px] ${
                      isActive ? "text-[var(--brand-red)]" : "text-[var(--ink)]"
                    }`}
                  >
                    {mem.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-[2px] bg-[var(--brand-green)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr]">
            <div className="relative h-[420px] overflow-hidden bg-black lg:h-[560px]">
              <img
                key={m.id}
                src={m.image}
                alt={`${m.name} — ${m.tag}`}
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full animate-[fadeIn_400ms_ease] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                Connected Business Unit
              </div>
              <div className="absolute bottom-6 left-6 font-display text-white/90">
                <div className="text-[11px] uppercase tracking-[0.28em] text-white/70">{m.tag}</div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 border-t border-[var(--border)] bg-[var(--warm-white)] p-10 lg:border-l lg:border-t-0">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--charcoal)]/65">
                  <span className="h-px w-6 bg-[var(--brand-red)]" />
                  Active company / {m.index}
                </div>
                <h3 className="mt-5 font-display text-[56px] font-light leading-[1] tracking-tight text-[var(--ink)]">
                  {m.name}
                </h3>
                <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)]">
                  {m.tag}
                </div>
                <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[var(--charcoal)]/55">
                  <span className="h-px w-5 bg-[var(--brand-green)]" />
                  Connected Business Unit
                </div>
                <p className="mt-3 text-[15px] font-medium text-[var(--ink)]">{m.role}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--charcoal)]/75">
                  {m.description}
                </p>
              </div>
              <div className="flex items-end justify-between">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--ink)]"
                >
                  Truy cập website
                  <span className="inline-block h-px w-8 bg-[var(--ink)] transition-all group-hover:w-12 group-hover:bg-[var(--brand-orange)]" />
                </a>
                <span className="font-display text-4xl text-[var(--charcoal)]/25">
                  {m.index} <span className="text-base">/ 06</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0.4; transform: scale(1.02);} to { opacity: 1; transform: scale(1);} }`}</style>
    </section>
  );
}