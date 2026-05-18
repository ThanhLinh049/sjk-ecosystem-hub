import identityImg from "@/assets/sjk-identity.jpg";

const PROOF = [
  ["120+", "Màn hình LED toàn quốc"],
  ["40+", "Tỉnh thành phủ sóng"],
  ["11", "Công ty & dự án thành viên"],
  ["100+", "Đối tác chiến lược"],
];

export function Identity() {
  return (
    <section id="about" className="bg-[#faf9f6] py-32">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--charcoal)]/60">
              Về SJK Group
            </span>
          </div>
          <h2 className="font-display text-[44px] font-light leading-[1.08] text-[var(--ink)] md:text-[56px]">
            Một hệ sinh thái OOH kết nối <br className="hidden md:block" />
            <span className="italic text-[var(--brand-red)]">thương hiệu</span>, vị trí và công nghệ.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--charcoal)]/75">
            Sở hữu mạng lưới điểm chạm bao phủ toàn quốc, kết hợp năng lực vận hành thực
            chiến và nền tảng dữ liệu số.
          </p>
        </div>

        <div className="relative mt-14">
          <img
            src={identityImg}
            alt="Panoramic OOH billboards along an urban boulevard"
            loading="lazy"
            width={1920}
            height={900}
            className="h-[440px] w-full rounded-sm object-cover"
          />
          <div className="absolute -bottom-px left-0 right-0 grid grid-cols-2 divide-x divide-white/15 border-t border-white/15 bg-[var(--ink)]/85 text-white backdrop-blur md:grid-cols-4">
            {PROOF.map(([k, v]) => (
              <div key={k} className="px-6 py-5">
                <div className="font-display text-3xl font-light tracking-tight">{k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/65">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}