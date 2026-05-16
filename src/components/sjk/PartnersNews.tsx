import newsImg from "@/assets/sjk-news.jpg";
import { PARTNERS } from "./data";

const ROWS = [
  ["02", "Đổi mới sáng tạo", "Inno X Event xuất sắc giành giải thưởng Inno Culture 2024 từ Sở KH&CN."],
  ["03", "Trách nhiệm xã hội", "Đồng hành cùng Công an TP.HCM lan tỏa chiến dịch “Không một mình” phòng chống tội phạm."],
];

export function PartnersNews() {
  return (
    <section id="partners" className="bg-[var(--warm-white)] py-24">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Partners */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60">
              Đối tác & thương hiệu
            </span>
          </div>
          <h2 className="font-display text-[36px] font-light leading-[1.1] text-[var(--ink)] md:text-[44px]">
            Đồng hành cùng hàng trăm thương hiệu hàng đầu.
          </h2>
        </div>

        <div
          className="mt-10 overflow-hidden border-y border-[var(--border)] py-2"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-[marquee_45s_linear_infinite] gap-12 py-6">
            {[...PARTNERS, ...PARTNERS].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="shrink-0 font-display text-xl text-[var(--charcoal)]/65 transition hover:text-[var(--ink)] md:text-2xl"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

        {/* News */}
        <div id="news" className="mt-20 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60">
              Thành tựu & dấu ấn
            </span>
          </div>
          <h2 className="font-display text-[36px] font-light leading-[1.1] text-[var(--ink)] md:text-[44px]">
            Thành tựu & dấu ấn truyền thông.
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[var(--charcoal)]/75">
            Những cột mốc khẳng định vị thế và trách nhiệm cộng đồng của SJK Group.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <article className="group">
            <div className="relative overflow-hidden">
              <img
                src={newsImg}
                alt="Featured OOH article"
                loading="lazy"
                width={1280}
                height={800}
                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
                Featured
              </div>
            </div>
            <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]">
              Giải thưởng · 2024
            </div>
            <h3 className="mt-3 font-display text-2xl font-light leading-snug text-[var(--ink)] md:text-[28px]">
              SJK Group tự hào nhận danh hiệu Doanh nghiệp tiêu biểu TP.HCM 2024.
            </h3>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
            >
              Đọc bài viết
              <span aria-hidden>→</span>
            </a>
          </article>

          <div className="flex flex-col">
            {ROWS.map(([n, tag, title]) => (
              <a
                href="#"
                key={n}
                className="group flex items-start gap-6 border-t border-[var(--border)] py-6 last:border-b"
              >
                <span className="font-display text-xl text-[var(--charcoal)]/40">{n}</span>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
                    {tag}
                  </div>
                  <div className="mt-2 font-display text-xl font-light leading-snug text-[var(--ink)] transition group-hover:text-[var(--brand-red)]">
                    {title}
                  </div>
                </div>
                <span className="mt-1 text-[var(--charcoal)]/40 transition group-hover:translate-x-1 group-hover:text-[var(--brand-orange)]">
                  →
                </span>
              </a>
            ))}
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 self-start text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
            >
              Xem tất cả tin tức <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}