import { SiteHeader } from "./SiteHeader";
import { EcosystemDeck } from "./EcosystemDeck";
import { ContactFooter } from "./ContactFooter";

import identityImg from "@/assets/sjk-identity.jpg";

export function MembersPage() {
  return (
    <main className="bg-[#faf9f6] text-[#050505]">
      <MembersHero />

      <EcosystemDeck />

      <ContactFooter />
    </main>
  );
}

function MembersHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#050505] text-white">
      <img
        src={identityImg}
        alt="SJK Group ecosystem companies"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" />

      <SiteHeader />

      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20">
        <div className="max-w-3xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-red)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              Hệ sinh thái thành viên
            </span>
          </div>

          <h1 className="text-[64px] font-light leading-[0.95] tracking-tight md:text-[96px]">
            Các công ty thành viên{" "}
            <span className="text-[var(--brand-red)]">
              SJK
            </span>
          </h1>

          <p className="mt-8 max-w-[720px] text-2xl font-light leading-snug text-white/88 md:text-[32px]">
            Mỗi đơn vị đảm nhiệm một lớp năng lực riêng,
            cùng kiến tạo hệ sinh thái truyền thông ngoài trời tích hợp.
          </p>

        </div>
      </div>
    </section>
  );
}