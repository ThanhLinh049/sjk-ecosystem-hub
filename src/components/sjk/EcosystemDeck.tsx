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
        <div className="mt-14 border border-[var(--border)] bg-white">
          {/* Top row */}
          <div className="flex items-center justify-between border-b border-[var(--border)] px-7 py-5">
            <div className="flex items-center gap-3">
              <span className="font-display text-xl text-[var(--ink)]">SJK Group</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--charcoal)]/55">
                / Parent Company
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--charcoal)]/55">
              Corporate OOH Ecosystem
            </span>
          </div>

          {/* Switcher */}
          <div className="grid grid-cols-2 divide-x divide-[var(--border)] border-b border-[var(--border)] md:grid-cols-6">
            {MEMBERS.map((mem, i) => {
              const isActive = i === active;
              return (
                <button
                  key={mem.id}
                  onClick={() => setActive(i)}
                  className={`relative flex flex-col items-start gap-1 px-5 py-5 text-left transition ${
                    isActive ? "bg-white" : "bg-[var(--warm-white)] hover:bg-white"
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-[0.25em] ${
                      isActive ? "text-[var(--brand-red)]" : "text-[var(--charcoal)]/45"
                    }`}
                  >
                    {mem.index}
                  </span>
                  <span
                    className={`font-display text-lg ${
                      isActive ? "text-[var(--brand-red)]" : "text-[var(--ink)]"
                    }`}
                  >
                    {mem.name}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-px left-0 right-0 h-px bg-[var(--brand-green)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-[62fr_38fr]">
            <div className="relative h-[380px] overflow-hidden bg-black lg:h-[460px]">
              <img
                key={m.id}
                src={m.image}
                alt={`${m.name} — ${m.tag}`}
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full animate-[fadeIn_400ms_ease] object-cover"
              />
              <div className="absolute left-6 top-6 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
                {m.tag}
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 border-t border-[var(--border)] bg-[var(--warm-white)] p-9 lg:border-l lg:border-t-0">
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--charcoal)]/55">
                  <span className="h-px w-6 bg-[var(--brand-red)]" />
                  Active company / {m.index}
                </div>
                <h3 className="mt-5 font-display text-5xl font-light leading-tight text-[var(--ink)]">
                  {m.name}
                </h3>
                <div className="mt-2 text-[12px] uppercase tracking-[0.2em] text-[var(--brand-red)]">
                  {m.tag}
                </div>
                <p className="mt-6 text-[14px] font-medium text-[var(--ink)]">{m.role}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--charcoal)]/75">
                  {m.description}
                </p>
              </div>
              <div className="flex items-end justify-between">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
                >
                  Truy cập website
                  <span className="inline-block h-px w-8 bg-[var(--ink)] transition-all group-hover:w-12 group-hover:bg-[var(--brand-orange)]" />
                </a>
                <span className="font-display text-3xl text-[var(--charcoal)]/30">
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