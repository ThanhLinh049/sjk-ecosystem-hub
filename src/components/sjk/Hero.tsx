import heroImg from "@/assets/sjk-hero.jpg";
import { MEMBERS } from "./data";
import { SiteHeader } from "./SiteHeader";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white">
      <img
        src={heroImg}
        alt="Cinematic city skyline with LED billboards"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        width={1920}
        height={1080}
      />
      {/* Stronger left-side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" />

      <SiteHeader />
      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              Khởi tạo giá trị truyền thông ngoài trời
            </span>
          </div>
          <h1 className="text-[64px] font-medium leading-[0.95] tracking-tight md:text-[96px]">
            SJK <span className=" text-[var(--brand-red)]">Group</span>
          </h1>
          <p className="mt-6 text-2xl font-light leading-snug text-white/90 md:text-[32px]">
            Tập đoàn quảng cáo ngoài trời <span className=" text-[var(--brand-red)]">tích hợp</span> hàng đầu
          </p>
          <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/85">
            Tiên phong ứng dụng công nghệ vào OOH, DOOH và hệ sinh thái truyền thông đa
            điểm chạm, mang lại hiệu quả đo lường minh bạch cho thương hiệu.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110"
            >
              Liên hệ hợp tác
              <span aria-hidden>→</span>
            </a>
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Khám phá hệ sinh thái
            </a>
          </div>
        </div>
      </div>

      {/* Bottom member index */}
      <div className="relative z-10 border-t border-white/10 bg-black/55 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center gap-8 px-8 py-4">
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/65">
            Member companies
          </span>

          <div
            className="flex-1 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-[memberMarquee_35s_linear_infinite] items-center">
              {[...MEMBERS, ...MEMBERS].map((m, i) => (
                <div
                  key={`${m.id}-${i}`}
                  className="flex shrink-0 items-center text-[12px] text-white/85"
                >
                  <div className="flex items-center gap-2 transition hover:text-white">
                    <span className="text-[10px] text-[var(--brand-red)]">
                      {m.index}
                    </span>

                    <span className="uppercase tracking-[0.08em]">
                      {m.name}
                    </span>
                  </div>

                  <span className="mx-6 text-white/20">/</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
    @keyframes memberMarquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
      </div>
    </section>
  );
}