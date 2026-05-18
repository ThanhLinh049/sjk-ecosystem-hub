import airport from "@/assets/sjk-airport.jpg";
import metro from "@/assets/sjk-metro.jpg";
import mall from "@/assets/sjk-mall.jpg";
import hublock from "@/assets/sjk-hublock.jpg";
import golf from "@/assets/sjk-golf.jpg";
import led from "@/assets/sjk-shojiki.jpg";

const ITEMS = [
  { img: airport, title: "Sân bay & Hàng không", note: "Đại lý độc quyền check-in" },
  { img: led, title: "Màn hình LED Đô thị", note: "120+ vị trí trọng điểm" },
  { img: metro, title: "Ga Metro & Phương tiện", note: "Mạng lưới di chuyển đô thị" },
  { img: mall, title: "TTTM & Siêu thị", note: "10.000+ màn hình LCD/DP" },
  { img: hublock, title: "Tủ thông minh Hublock", note: "Chung cư & khu dân cư" },
  { img: golf, title: "Sân Golf cao cấp", note: "Smart Score Network" },
];

export function Touchpoints() {
  return (
    <section className="bg-[var(--warm-white)] py-28">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60">
              Hạ tầng truyền thông
            </span>
          </div>
          <h2 className="font-display text-[44px] font-light leading-[1.05] text-[var(--ink)] md:text-[56px]">
            Bao phủ mọi điểm chạm{" "}
            <span className="italic text-[var(--brand-red)]">không gian</span>.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--charcoal)]/75">
            Kho tài sản truyền thông vật lý khổng lồ, tiếp cận khách hàng mục tiêu tại
            mọi điểm neo đô thị.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {ITEMS.map((it, i) => {
            const h = [320, 420, 360, 460, 320, 400][i % 6];
            return (
              <figure
                key={it.title}
                className="group relative overflow-hidden rounded-md break-inside-avoid bg-black"
              >
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={800}
                  height={h}
                  style={{ height: `${h}px` }}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">
                    {it.note}
                  </div>
                  <div className="mt-2 font-display text-2xl font-light leading-tight">
                    {it.title}
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
