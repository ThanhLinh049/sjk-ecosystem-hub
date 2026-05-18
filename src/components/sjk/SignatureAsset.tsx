import ifcImg from "@/assets/sjk-ifc-portrait.jpg";

export function SignatureAsset() {
  return (
    <section className="bg-[#faf9f6] border-t border-[var(--charcoal)]/10 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="mb-8 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]">
            <span className="h-px w-5 bg-[#E3000F]" />
            Biểu tượng đẳng cấp
          </div>
          <h2 className="font-display text-5xl font-light leading-[1.1] text-[#050505] lg:text-7xl">
            Điểm nhìn trung tâm{" "}
            <span className="italic text-[#E3000F]">tài chính</span> quốc tế.
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#050505]/70">
            Khai thác độc quyền hệ thống LED Tòa tháp Saigòn Marina IFC — biểu tượng
            truyền thông lớn nhất Đông Nam Á.
          </p>

          <div className="mt-12 border-t border-[var(--charcoal)]/15 pt-8">
            <div className="flex items-baseline gap-10">
              <div>
                <div className="font-display text-6xl font-light tracking-tighter text-[#050505]">
                  39.000
                </div>
                <div className="mt-3 text-sm uppercase tracking-widest text-[var(--charcoal)]/70">
                  m² Màn hình LED
                </div>
              </div>
              <span className="hidden h-16 w-px bg-[var(--charcoal)]/15 sm:block" />
              <div className="hidden sm:block">
                <div className="font-display text-6xl font-light tracking-tighter text-[#050505]">
                  #1
                </div>
                <div className="mt-3 text-sm uppercase tracking-widest text-[var(--charcoal)]/70">
                  Đông Nam Á
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl shadow-black/10">
            <img
              src={ifcImg}
              alt="Saigòn Marina IFC tower LED facade at blue hour"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}