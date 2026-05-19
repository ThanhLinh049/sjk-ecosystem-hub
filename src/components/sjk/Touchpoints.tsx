import airport from "@/assets/sjk-airport.jpg";
import metro from "@/assets/sjk-metro.jpg";
import mall from "@/assets/sjk-mall.jpg";
import hublock from "@/assets/sjk-hublock.jpg";
import golf from "@/assets/sjk-golf.jpg";
import led from "@/assets/sjk-shojiki.jpg";

const ITEMS = [
  {
    link: "#",
    img: led,
    title: "Màn hình LED Đô thị",
    note: "120+ vị trí trọng điểm",
    span: "md:col-span-2 md:row-span-2 min-h-[500px]",
  },
  {
    link: "#",
    img: airport,
    title: "Hàng không & Sân bay",
    note: "Đại lý độc quyền check-in",
    span: "md:col-span-2 min-h-[240px]",
  },
  {
    link: "#",
    img: metro,
    title: "Ga Metro & Phương tiện",
    note: "Mạng lưới di chuyển đô thị",
    span: "min-h-[240px]",
  },
  {
    link: "#",
    img: mall,
    title: "TTTM & Siêu thị",
    note: "10.000+ màn hình LCD/DP",
    span: "min-h-[240px]",
  },
  {
    link: "#",
    img: hublock,
    title: "Tủ Hublock Chung cư",
    note: "Khu dân cư & cao tầng",
    span: "md:col-span-2 min-h-[240px]",
  },
  {
    link: "#",
    img: golf,
    title: "Sân Golf cao cấp",
    note: "Smart Score Network",
    span: "md:col-span-2 min-h-[240px]",
  },
];

export function Touchpoints() {
  return (
    <section className="border-t border-[var(--charcoal)]/10 bg-[#faf9f6] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#E3000F]">
            <span className="h-px w-5 bg-[#E3000F]" />
            Hạ tầng truyền thông
          </div>

          <h2 className="text-5xl leading-[1.1] text-[#050505] lg:text-7xl">
            Bao phủ mọi điểm chạm{" "}
            <span className=" text-[#E3000F]">không gian</span>.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#050505]/70">
            Kho tài sản truyền thông vật lý khổng lồ, tiếp cận khách hàng mục tiêu
            tại mọi điểm neo đô thị. Đặc biệt, 100% chiến dịch đều được đo lường và
            chứng nhận minh bạch bởi{" "}
            <span className="font-medium text-[#050505]">Compass Tech</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.link}
              className={`group relative block overflow-hidden rounded-2xl bg-[#050505] ${item.span}`}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 flex h-1/3 flex-col justify-end bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent px-5 pb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:px-6 md:pb-5">
                <div className="w-fit text-[10px] font-bold uppercase tracking-[0.25em] text-[#E3000F]">
                  {item.note}
                </div>

                <h3 className="mt-1.5 w-fit text-lg font-medium leading-tight text-white md:text-xl">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}