import heroImg from "@/assets/sjk-hero.jpg";
import identityImg from "@/assets/sjk-identity.jpg";
import ledImg from "@/assets/sjk-shojiki.jpg";

import { SiteHeader } from "./SiteHeader";
import { ContactFooter } from "./ContactFooter";

import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const QUICK_INFO = [
  {
    icon: Phone,
    label: "Hotline",
    value: "0933 15 99 88",
    href: "tel:0933159988",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sjkgroup.vn",
    href: "mailto:info@sjkgroup.vn",
  },
  {
    icon: Building2,
    label: "Head Office",
    value: "TP. Hồ Chí Minh",
    href: "#office-network",
  },
];

const OFFICES = [
  {
    type: "Head Office",
    city: "TP. Hồ Chí Minh",
    address: "Số 80, Đường 17, KP5, P. Bình Trưng, TP. HCM",
  },
  {
    type: "Branch Office",
    city: "Hà Nội",
    address: "Tầng 10, Số 5 Điện Biên Phủ, P. Ba Đình",
  },
  {
    type: "Regional Office",
    city: "Đà Nẵng",
    address: "Tầng 7, 30 Nguyễn Hữu Thọ, P. Hải Châu",
  },
  {
    type: "Regional Office",
    city: "Cần Thơ",
    address: "153Q Trần Hưng Đạo, P. Ninh Kiều",
  },
  {
    type: "Regional Office",
    city: "Hải Phòng",
    address: "292 Lê Lợi, P. Gia Viên",
  },
];

const BUSINESS_UNITS = [
  {
    title: "Media Planning & Booking",
    desc: "OOH, DOOH, LED outdoor, billboard và chiến dịch truyền thông ngoài trời.",
  },
  {
    title: "Technology & Measurement",
    desc: "Compass Tech, đo lường hiệu quả, dữ liệu vị trí và báo cáo chiến dịch.",
  },
  {
    title: "Retail & Screen Network",
    desc: "AnyScreen, Wifi Marketing, LCD, standee và mạng lưới điểm bán.",
  },
  {
    title: "Creative Technology",
    desc: "Adjika, Inno X, hologram, 3D, drone, activation và event.",
  },
  {
    title: "Investment & Partnership",
    desc: "OIP, phát triển điểm, hợp tác khai thác tài sản truyền thông dài hạn.",
  },
];

const INTERESTS = [
  "OOH / Billboard",
  "LED Outdoor",
  "Airport Advertising",
  "Metro / Transport Media",
  "Retail Media",
  "Wifi Marketing",
  "Programmatic DOOH",
  "Measurement / Compass Tech",
  "Partnership / Investment",
];

export function ContactPage() {
  return (
    <main className="bg-[#faf9f6] text-[#050505]">
      <ContactHero />
      <ContactQuickInfo />
      <EnterpriseInquiry />
      <OfficeNetwork />
      <BusinessUnits />
      <ContactMapVisual />
      <ContactFooter />
    </main>
  );
}

function ContactHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white">
      <img
        src={heroImg}
        alt="SJK Group contact"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        width={1920}
        height={1080}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" />

      <SiteHeader />

      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              Liên hệ SJK Group
            </span>
          </div>

          <h1 className="text-[64px] font-light leading-[0.95] tracking-tight md:text-[96px]">
            Kết nối cùng{" "}
            <span className="text-[var(--brand-red)]">SJK Group</span>
          </h1>

          <p className="mt-6 text-2xl font-light leading-snug text-white/90 md:text-[32px]">
            Cùng kiến tạo chiến dịch truyền thông ngoài trời có quy mô, dữ liệu và sức ảnh hưởng.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactQuickInfo() {
  return (
    <section className="border-t border-[#050505]/10 bg-[#faf9f6] py-20">
      <div className="mx-auto grid max-w-[1320px] gap-px bg-[#050505]/10 px-6 md:grid-cols-3 md:px-8">
        {QUICK_INFO.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group bg-[#faf9f6] p-8 transition hover:bg-white"
          >
            <div className="flex items-center justify-between">
              <item.icon className="h-7 w-7 text-[var(--brand-red)]" strokeWidth={1.4} />
              <ArrowUpRight className="h-5 w-5 text-[#050505]/25 transition group-hover:text-[var(--brand-red)]" />
            </div>

            <div className="mt-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#050505]/45">
              {item.label}
            </div>

            <div className="mt-3 text-[28px] font-light leading-tight text-[#050505]">
              {item.value}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function EnterpriseInquiry() {
  return (
    <section id="inquiry" className="border-t border-[#050505]/10 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <SectionLabel>Enterprise Inquiry</SectionLabel>

            <h2 className="text-[54px] leading-[0.98] tracking-tight text-[#050505] md:text-[72px]">
              Gửi yêu cầu tư vấn chiến dịch.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#050505]/68">
              Đội ngũ SJK sẽ tư vấn giải pháp phù hợp theo mục tiêu, khu vực, ngân sách,
              ngành hàng và thời gian triển khai.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <form className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Họ và tên" placeholder="Nguyễn Văn A" />
              <Field label="Công ty" placeholder="Tên doanh nghiệp" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Email" placeholder="email@company.com" type="email" />
              <Field label="Số điện thoại" placeholder="0900 000 000" type="tel" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Ngành hàng" placeholder="FMCG, Banking, Real Estate..." />
              <Field label="Thời gian triển khai" placeholder="Tháng / Quý dự kiến" />
            </div>

            <div>
              <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#050505]/50">
                Nhu cầu quan tâm
              </label>
              <div className="grid gap-3 md:grid-cols-3">
                {INTERESTS.map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 border border-[#050505]/10 bg-[#faf9f6] px-4 py-3 text-[13px] text-[#050505]/75 transition hover:border-[var(--brand-red)] hover:bg-white"
                  >
                    <input type="checkbox" className="accent-[var(--brand-red)]" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#050505]/50">
                Nội dung yêu cầu
              </label>
              <textarea
                rows={6}
                placeholder="Mô tả mục tiêu chiến dịch, khu vực triển khai, ngân sách dự kiến hoặc nhu cầu hợp tác..."
                className="w-full resize-none border border-[#050505]/10 bg-[#faf9f6] px-5 py-4 text-[15px] leading-relaxed outline-none transition placeholder:text-[#050505]/35 focus:border-[var(--brand-red)] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-red)] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:brightness-110"
            >
              Gửi yêu cầu tư vấn
              <span aria-hidden>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function OfficeNetwork() {
  return (
    <section
      id="office-network"
      className="border-t border-[#050505]/10 bg-[#faf9f6] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-8">
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Office Network</SectionLabel>

          <h2 className="text-[54px] leading-[0.98] tracking-tight text-[#050505] md:text-[72px]">
            Mạng lưới văn phòng kết nối toàn quốc.
          </h2>
        </div>

        <div className="grid gap-px bg-[#050505]/10 md:grid-cols-2 lg:grid-cols-5">
          {OFFICES.map((office) => (
            <article key={office.city} className="bg-[#faf9f6] p-7 transition hover:bg-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]">
                {office.type}
              </div>

              <h3 className="mt-8 text-[30px] font-light leading-tight text-[#050505]">
                {office.city}
              </h3>

              <p className="mt-4 text-[13.5px] leading-relaxed text-[#050505]/65">
                {office.address}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessUnits() {
  return (
    <section className="border-t border-[#050505]/10 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <SectionLabel>Contact By Need</SectionLabel>

            <h2 className="text-[54px] leading-[0.98] tracking-tight text-[#050505] md:text-[72px]">
              Kết nối đúng nhóm năng lực.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#050505]/68">
              Tùy theo nhu cầu chiến dịch, hợp tác hoặc đầu tư, SJK sẽ điều phối bộ phận
              phù hợp trong hệ sinh thái.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="border-t border-[#050505]/10">
            {BUSINESS_UNITS.map((unit, index) => (
              <article
                key={unit.title}
                className="group grid gap-6 border-b border-[#050505]/10 py-8 md:grid-cols-[90px_1fr]"
              >
                <div className="text-3xl font-light text-[var(--brand-red)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-[32px] font-light leading-[1.1] tracking-[-0.03em]">
                      {unit.title}
                    </h3>
                    <ArrowUpRight className="mt-2 h-5 w-5 text-[#050505]/30 transition group-hover:text-[var(--brand-red)]" />
                  </div>

                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#050505]/68">
                    {unit.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactMapVisual() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#050505] text-white">
      <img
        src={ledImg}
        alt="SJK nationwide media network"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-[1320px] items-end gap-12 px-6 pb-20 pt-28 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <SectionLabel dark>Nationwide Coverage</SectionLabel>

          <h2 className="text-[54px] leading-[0.98] tracking-tight md:text-[72px]">
            Hiện diện tại các trung tâm truyền thông trọng điểm.
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            Từ TP.HCM, Hà Nội đến Đà Nẵng, Cần Thơ, Hải Phòng và nhiều tỉnh thành khác,
            SJK phát triển mạng lưới truyền thông ngoài trời có khả năng triển khai toàn quốc.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="grid grid-cols-2 border border-white/15 bg-black/35 backdrop-blur">
            {["HCM", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "40+ tỉnh"].map((city) => (
              <div key={city} className="border-b border-r border-white/15 p-6">
                <MapPin className="h-5 w-5 text-[var(--brand-red)]" />
                <div className="mt-5 text-[28px] font-light">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label>
      <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#050505]/50">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-[#050505]/10 bg-[#faf9f6] px-5 py-4 text-[15px] outline-none transition placeholder:text-[#050505]/35 focus:border-[var(--brand-red)] focus:bg-white"
      />
    </label>
  );
}

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px w-10 bg-[var(--brand-red)]" />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${
          dark ? "text-white/70" : "text-[#050505]/55"
        }`}
      >
        {children}
      </span>
    </div>
  );
}