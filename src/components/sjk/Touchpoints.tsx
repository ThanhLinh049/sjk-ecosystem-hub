import airport from "@/assets/sjk-airport.jpg";
import metro from "@/assets/sjk-metro.jpg";
import mall from "@/assets/sjk-mall.jpg";
import hublock from "@/assets/sjk-hublock.jpg";
import golf from "@/assets/sjk-golf.jpg";
import led from "@/assets/sjk-shojiki.jpg";

const ITEMS = [
  { img: led, title: "Màn hình LED Đô thị", note: "120+ vị trí trọng điểm", span: "md:col-span-2 md:row-span-2 min-h-[500px]" },
  { img: airport, title: "Hàng không & Sân bay", note: "Đại lý độc quyền check-in", span: "md:col-span-2 md:row-span-1 min-h-[240px]" },
  { img: metro, title: "Ga Metro & Phương tiện", note: "Mạng lưới di chuyển đô thị", span: "md:col-span-1 md:row-span-1 min-h-[240px]" },
  { img: mall, title: "TTTM & Siêu thị", note: "10.000+ màn hình LCD/DP", span: "md:col-span-1 md:row-span-1 min-h-[240px]" },
  { img: hublock, title: "Tủ Hublock Chung cư", note: "Khu dân cư & cao tầng", span: "md:col-span-2 md:row-span-1 min-h-[240px]" },
  { img: golf, title: "Sân Golf cao cấp", note: "Smart Score Network", span: "md:col-span-2 md:row-span-1 min-h-[240px]" },
];

export function Touchpoints() {
  return (
    <section className="bg-[#faf9f6] border-t border-[var(--charcoal)]/10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]">
            <span className="h-px w-5 bg-[#E3000F]" />
            Hạ tầng truyền thông
          </div>
          <h2 className="font-display text-5xl font-light leading-[1.1] text-[#050505] lg:text-7xl">
            Bao phủ mọi điểm chạm{" "}
            <span className="italic text-[#E3000F]">không gian</span>.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#050505]/70">
            Kho tài sản truyền thông vật lý khổng lồ, tiếp cận khách hàng mục tiêu tại
            mọi điểm neo đô thị.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 grid-rows-[auto] gap-4 md:grid-cols-4 md:gap-6">
          {ITEMS.map((it) => (
            <figure
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl bg-black ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E3000F]">
                  {it.note}
                </div>
                <div className="mt-3 translate-y-3 font-display text-2xl font-light leading-tight text-white opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {it.title}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}