import ifcImg from "@/assets/sjk-ifc.jpg";

export function SignatureAsset() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-[1320px] px-8 pt-24 pb-10">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70">
              Biểu tượng đẳng cấp
            </span>
          </div>
          <h2 className="font-display text-[44px] font-light leading-[1.05] md:text-[56px]">
            Điểm nhìn trung tâm{" "}
            <span className="italic text-[var(--brand-red)]">tài chính</span> quốc tế.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Khai thác độc quyền hệ thống LED Tòa tháp Saigòn Marina IFC — biểu tượng
            truyền thông lớn nhất Đông Nam Á với tổng diện tích hơn 39.000m².
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src={ifcImg}
          alt="Saigòn Marina IFC tower LED billboard at night"
          loading="lazy"
          width={1920}
          height={822}
          className="aspect-[21/9] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-transparent" />
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-8 text-white">
          <div className="text-center">
            <div className="font-display text-3xl font-light">39.000<span className="text-[var(--brand-red)]">m²</span></div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/65">Diện tích LED</div>
          </div>
          <span className="h-8 w-px bg-white/25" />
          <div className="text-center">
            <div className="font-display text-3xl font-light">#1</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/65">Đông Nam Á</div>
          </div>
          <span className="h-8 w-px bg-white/25" />
          <div className="text-center">
            <div className="font-display text-3xl font-light">Độc quyền</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/65">Khai thác SJK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
