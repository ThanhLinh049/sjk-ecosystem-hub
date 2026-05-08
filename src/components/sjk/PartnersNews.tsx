import newsImg from "@/assets/sjk-news.jpg";
import { PARTNERS } from "./data";

const ROWS = [
  ["01", "Trend", "Vai trò của LED ngoài trời trong chiến dịch thương hiệu"],
  ["02", "Retail", "Khai thác mặt bằng quảng cáo: cơ hội cho chuỗi cửa hàng"],
  ["03", "Urban Media", "Hệ sinh thái OOH và tương lai truyền thông đô thị"],
];

export function PartnersNews() {
  return (
    <section id="partners" className="bg-[var(--warm-white)] py-28">
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
            Đồng hành cùng nhiều thương hiệu trong các chiến dịch truyền thông ngoài trời.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 border-l border-t border-[var(--border)] md:grid-cols-5">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="border-b border-r border-[var(--border)] px-5 py-7 text-center font-display text-lg text-[var(--charcoal)]/70 transition hover:bg-white hover:text-[var(--ink)]"
            >
              {p}
            </div>
          ))}
        </div>

        {/* News */}
        <div id="news" className="mt-24 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60">
              OOH Intelligence
            </span>
          </div>
          <h2 className="font-display text-[36px] font-light leading-[1.1] text-[var(--ink)] md:text-[44px]">
            Góc nhìn thị trường, dữ liệu và xu hướng truyền thông ngoài trời.
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[var(--charcoal)]/75">
            Những phân tích và góc nhìn từ hệ sinh thái SJK Group về truyền thông đô thị,
            màn hình số, dữ liệu OOH và chiến dịch thương hiệu.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <article className="group">
            <div className="overflow-hidden">
              <img
                src={newsImg}
                alt="Featured OOH article"
                loading="lazy"
                width={1280}
                height={800}
                className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[var(--brand-red)]">
              Featured · OOH Trend
            </div>
            <h3 className="mt-3 font-display text-2xl font-light leading-snug text-[var(--ink)] md:text-3xl">
              Xu hướng quảng cáo ngoài trời trong kỷ nguyên dữ liệu và màn hình số
            </h3>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
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
                className="group flex items-start gap-6 border-t border-[var(--border)] py-7 last:border-b"
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
              className="mt-8 inline-flex items-center gap-2 self-start text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
            >
              Xem tất cả tin tức <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}