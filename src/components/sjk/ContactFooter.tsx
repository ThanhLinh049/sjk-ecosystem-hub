import heroImg from "@/assets/sjk-hero.jpg";
import { MEMBERS, NAV } from "./data";

export function ContactFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[var(--ink)] text-white">
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/90" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-8 pt-20 pb-10">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              Hợp tác cùng SJK Group
            </span>
          </div>
          <h2 className="font-display text-[44px] font-light leading-[1.05] md:text-[56px]">
            Cùng SJK Group phát triển giá trị{" "}
            <span className="italic text-[var(--brand-red)]">truyền thông</span> ngoài trời.
          </h2>
          <p className="mt-5 max-w-xl text-[14.5px] leading-relaxed text-white/85">
            Liên hệ Hotline <span className="text-white">0933 15 99 88</span> hoặc{" "}
            <span className="text-white">info@sjkgroup.vn</span> để hợp tác khai thác vị
            trí quảng cáo, triển khai chiến dịch thương hiệu hoặc tìm hiểu hệ sinh thái
            thành viên của SJK Group.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="mailto:info@sjkgroup.vn"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-red)] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110"
            >
              Liên hệ hợp tác →
            </a>
            <a
              href="tel:0933159988"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Gọi 0933 15 99 88
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-white/15 pt-10 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl">SJK <span className="text-[var(--brand-red)]">.</span></div>
            <p className="mt-3 text-[12px] leading-relaxed text-white/70">
              Tập đoàn quảng cáo ngoài trời tích hợp hàng đầu Việt Nam.
            </p>
            <ul className="mt-5 space-y-1.5 text-[12px] text-white/85">
              <li>Hotline: <span className="text-white">0933 15 99 88</span></li>
              <li>Email: <span className="text-white">info@sjkgroup.vn</span></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">Group</div>
            <ul className="mt-4 space-y-2 text-[13px] text-white/90">
              {NAV.map((n) => (
                <li key={n.label}><a href={n.href} className="hover:text-[var(--brand-red)]">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">Members</div>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-[13px] text-white/90">
              {MEMBERS.map((m) => (
                <li key={m.id}><a href="#ecosystem" className="hover:text-[var(--brand-red)]">{m.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">Văn phòng</div>
            <ul className="mt-4 space-y-3 text-[12.5px] leading-relaxed text-white/85">
              <li>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.22em]">Trụ sở chính</div>
                Số 80, Đường 17, KP5, P. Bình Trưng, TP. HCM
              </li>
              <li>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.22em]">Hà Nội</div>
                Tầng 10, Số 5 Điện Biên Phủ, P. Ba Đình
              </li>
              <li>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.22em]">Đà Nẵng</div>
                Tầng 7, 30 Nguyễn Hữu Thọ, P. Hải Châu
              </li>
              <li>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.22em]">Cần Thơ</div>
                153Q Trần Hưng Đạo, P. Ninh Kiều
              </li>
              <li>
                <div className="text-white/55 text-[10px] uppercase tracking-[0.22em]">Hải Phòng</div>
                292 Lê Lợi, P. Gia Viên
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between border-t border-white/15 pt-6 text-[11px] text-white/60">
          <div>© {new Date().getFullYear()} SJK Group. All rights reserved.</div>
          <div className="uppercase tracking-[0.25em]">Corporate OOH Ecosystem</div>
        </div>
      </div>
    </footer>
  );
}