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
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/95" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/65">
              Hợp tác cùng SJK Group
            </span>
          </div>
          <h2 className="font-display text-[44px] font-light leading-[1.05] md:text-[58px]">
            Cùng SJK Group phát triển giá trị{" "}
            <span className="italic text-[var(--brand-red)]">truyền thông</span> ngoài trời.
          </h2>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/70">
            Kết nối với chúng tôi để hợp tác khai thác vị trí quảng cáo, triển khai chiến
            dịch thương hiệu hoặc tìm hiểu hệ sinh thái thành viên của SJK Group.
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

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl">SJK <span className="text-[var(--brand-red)]">.</span></div>
            <p className="mt-3 text-[12px] leading-relaxed text-white/55">
              Tập đoàn truyền thông ngoài trời thế hệ mới.
            </p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">Group</div>
            <ul className="mt-4 space-y-2 text-[13px] text-white/80">
              {NAV.map((n) => (
                <li key={n.label}><a href={n.href} className="hover:text-[var(--brand-red)]">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">Members</div>
            <ul className="mt-4 space-y-2 text-[13px] text-white/80">
              {MEMBERS.map((m) => (
                <li key={m.id}><a href="#ecosystem" className="hover:text-[var(--brand-red)]">{m.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">Contact</div>
            <ul className="mt-4 space-y-2 text-[13px] text-white/80">
              <li>Hotline: 0933 15 99 88</li>
              <li>Email: info@sjkgroup.vn</li>
              <li>Vietnam — Asia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between border-t border-white/10 pt-6 text-[11px] text-white/45">
          <div>© {new Date().getFullYear()} SJK Group. All rights reserved.</div>
          <div className="uppercase tracking-[0.25em]">Corporate OOH Ecosystem</div>
        </div>
      </div>
    </footer>
  );
}