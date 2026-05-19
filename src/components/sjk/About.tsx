import { useEffect, useRef, useState } from "react";

import heroImg from "@/assets/sjk-hero.jpg";
import identityImg from "@/assets/sjk-identity.jpg";
import ledImg from "@/assets/sjk-shojiki.jpg";
import airportImg from "@/assets/sjk-airport.jpg";
import metroImg from "@/assets/sjk-metro.jpg";
import mallImg from "@/assets/sjk-mall.jpg";
import hublockImg from "@/assets/sjk-hublock.jpg";
import golfImg from "@/assets/sjk-golf.jpg";
import newsImg from "@/assets/sjk-news.jpg";

import { SiteHeader } from "./SiteHeader";
import { ContactFooter } from "./ContactFooter";

import {
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Database,
  MapPinned,
} from "lucide-react";
import { Touchpoints } from "./Touchpoints";

const GALLERY = [
  {
    title: "LED đô thị",
    note: "Urban visibility",
    img: ledImg,
    span: "md:col-span-2 md:row-span-2 min-h-[520px]",
  },
  {
    title: "Sân bay",
    note: "Premium transit",
    img: airportImg,
    span: "md:col-span-2 min-h-[250px]",
  },
  {
    title: "Metro",
    note: "City movement",
    img: metroImg,
    span: "min-h-[250px]",
  },
  {
    title: "Trung tâm thương mại",
    note: "Retail media",
    img: mallImg,
    span: "min-h-[250px]",
  },
  {
    title: "Hublock",
    note: "Residential network",
    img: hublockImg,
    span: "md:col-span-2 min-h-[250px]",
  },
  {
    title: "Golf network",
    note: "Affluent audience",
    img: golfImg,
    span: "md:col-span-2 min-h-[250px]",
  },
];

const OPERATING_MODEL = [
  {
    icon: MapPinned,
    title: "Infrastructure",
    desc: "LED, billboard, sân bay, metro, mall, taxi, retail và các điểm chạm đô thị.",
  },
  {
    icon: BrainCircuit,
    title: "Technology",
    desc: "AI, pDOOH, CMS, real-time triggers và tự động hóa nội dung quảng cáo.",
  },
  {
    icon: Database,
    title: "Measurement",
    desc: "Đo lường hiệu quả OOH, lưu lượng tuyến đường, vị trí và báo cáo chiến dịch.",
  },
  {
    icon: BarChart3,
    title: "Performance",
    desc: "Kết nối O2O qua QR, Wifi Ads, location-based media và dữ liệu chuyển đổi.",
  },
];

const ECOSYSTEM_LAYERS = [
  [
    "Media Operation",
    "Shojiki, Lookat Media",
    "Khai thác và vận hành tài sản OOH/DOOH tại các vị trí chiến lược.",
  ],
  [
    "Technology & Data",
    "Compass Tech, WikiOOH, Wi5",
    "Đo lường, dữ liệu, wifi marketing, sàn biển bảng và số hóa quy trình OOH.",
  ],
  [
    "Creative Experience",
    "Adjika, Inno X Event",
    "Hologram, 3D, drone, activation, event và trải nghiệm thương hiệu.",
  ],
  [
    "Investment & Expansion",
    "OIP, Batdongsan Quangcao",
    "Đầu tư, phát triển điểm và mở rộng tài sản truyền thông dài hạn.",
  ],
  [
    "Corporate Solutions",
    "OEM Group, AnyScreen",
    "Retail media, màn hình LCD, standee và giải pháp B2B cho doanh nghiệp.",
  ],
];

const ERAS = [
  {
    year: "2017",
    label: "Foundation",
    title: "Đặt nền móng vận hành OOH",
    text: "Shojiki Ads được thành lập, hình thành năng lực triển khai quảng cáo ngoài trời thực chiến — nền tảng đầu tiên của hệ sinh thái SJK.",
    img: identityImg,
  },
  {
    year: "2019",
    label: "Creative Technology",
    title: "Mở rộng sang quảng cáo công nghệ",
    text: "Liên doanh Adjika mở ra hướng đi mới với hologram, 3D, drone, trình diễn tương tác và creative technology.",
    img: newsImg,
  },
  {
    year: "2021",
    label: "National Expansion",
    title: "Từ operator địa phương đến mạng lưới quốc gia",
    text: "Việc mở rộng vận hành tại Hà Nội đánh dấu bước chuyển của SJK sang mô hình triển khai truyền thông đa khu vực.",
    img: airportImg,
  },
  {
    year: "2023",
    label: "Global Connection",
    title: "Tiệm cận chuẩn ngành quốc tế",
    text: "SJK kết nối với các mạng lưới, đối tác và liên doanh quốc tế, từng bước nâng chuẩn vận hành OOH tại Việt Nam.",
    img: metroImg,
  },
  {
    year: "2024",
    label: "Group Transformation",
    title: "Định hình cấu trúc SJK Group",
    text: "SJK chuyển mình từ đơn vị triển khai quảng cáo thành hệ sinh thái truyền thông tích hợp với các đơn vị thành viên chuyên biệt.",
    img: ledImg,
  },
  {
    year: "2025",
    label: "Investment & Scale",
    title: "Mở rộng qua đầu tư và hạ tầng",
    text: "OIP, OEM và các văn phòng mới giúp SJK mở rộng năng lực hợp tác, đầu tư và phát triển tài sản truyền thông dài hạn.",
    img: golfImg,
  },
];

const TRUST_ITEMS = [
  ["Doanh nghiệp tiêu biểu", "TP.HCM 2024"],
  ["Inno Culture", "Giải thưởng đổi mới sáng tạo"],
  ["HAA / VAA / WOO", "Kết nối ngành quảng cáo"],
  ["Social Impact", "Hoạt động cộng đồng & xã hội"],
];

export function AboutPage() {
  return (
    <main className="bg-[#faf9f6] text-[#050505]">
      <AboutHero />
      <AboutEssence />
      <Touchpoints />
      <AboutOperatingModel />
      <AboutEcosystemLogic />
      <AboutChronicle />
      <AboutLeadershipVision />
      <AboutTrustImpact />
      <ContactFooter />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[oklch(0.12_0.01_60)] text-white">
      <img
        src={identityImg}
        alt="SJK Group media infrastructure"
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
              Giới thiệu SJK Group
            </span>
          </div>

          <h1 className="text-[64px] font-medium leading-[0.95] tracking-tight md:text-[96px]">
            Hệ sinh thái truyền thông{" "}
            <span className="text-[var(--brand-red)]">
              đô thị
            </span>
          </h1>

          <p className="mt-8 max-w-[720px] text-2xl font-light leading-snug text-white/88 md:text-[32px]">
            Kết nối vị trí, công nghệ và dữ liệu để kiến tạo
            hạ tầng OOH thế hệ mới.
          </p>

        </div>
      </div>
    </section>
  );
}

function AboutEssence() {
  return (
    <section className="bg-[#faf9f6] py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="relative h-[520px] overflow-hidden bg-[#050505]">
            <img
              src={identityImg}
              alt="SJK urban media layer"
              className="h-full w-full object-cover opacity-95 transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                Urban Media Layer
              </div>
              <p className="mt-3 text-[28px] font-light leading-[1.15] tracking-[-0.03em]">
                Hiện diện trong từng chuyển động của đô thị.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-7">
          <SectionLabel>Essence</SectionLabel>

          <h2 className="max-w-[900px] text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl">
            SJK không chỉ khai thác quảng cáo ngoài trời. SJK xây dựng một{" "}
            <span className="text-[#E3000F]">hệ sinh thái truyền thông</span> có dữ liệu.
          </h2>

          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/65">
            Từ tài sản truyền thông, công nghệ vận hành đến đo lường hiệu quả, SJK kết nối
            các điểm chạm vật lý thành một hạ tầng truyền thông có thể mở rộng cho thương hiệu.
          </p>
        </div>
      </div>
    </section>
  );
}

<Touchpoints />

function AboutOperatingModel() {
  return (
    <section className="border-t border-[#050505]/10 bg-[#faf9f6] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8">
        <div className="mb-14 max-w-[900px]">
          <SectionLabel>Operating Model</SectionLabel>
          <h2 className="text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl">
            Mô hình vận hành giúp OOH trở thành kênh truyền thông có dữ liệu.
          </h2>
        </div>

        <div className="grid gap-px bg-[#050505]/10 md:grid-cols-2 lg:grid-cols-4">
          {OPERATING_MODEL.map((item, index) => (
            <div key={item.title} className="group bg-[#faf9f6] p-8 transition hover:bg-white">
              <div className="flex items-center justify-between">
                <item.icon className="h-8 w-8 text-[#E3000F]" strokeWidth={1.4} />
                <span className="text-[10px] font-semibold tracking-[0.28em] text-[#050505]/35">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-12 text-[28px] font-light leading-[1.15] tracking-[-0.03em]">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-[1.8] text-[#050505]/68">
                {item.desc}
              </p>

              <div className="mt-9 h-px w-10 bg-[#E3000F] transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutEcosystemLogic() {
  return (
    <section className="border-t border-[#050505]/10 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <SectionLabel>Ecosystem Logic</SectionLabel>

            <h2 className=" max-w-[900px] text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl">
              Không chỉ có nhiều công ty thành viên, SJK có một kiến trúc hệ sinh thái.
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/65">
              Mỗi đơn vị đảm nhiệm một lớp năng lực riêng trong chuỗi giá trị truyền thông
              ngoài trời.
            </p>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="border-t border-[#050505]/10">
            {ECOSYSTEM_LAYERS.map(([name, members, desc], index) => (
              <article
                key={name}
                className="group grid gap-6 border-b border-[#050505]/10 py-8 md:grid-cols-[90px_1fr]"
              >
                <div className="text-3xl font-light text-[#E3000F]">
                  0{index + 1}
                </div>

                <div>
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-[32px] font-light leading-[1.1] tracking-[-0.03em]">
                      {name}
                    </h3>
                    <ArrowUpRight className="mt-2 h-5 w-5 text-[#050505]/30 transition group-hover:text-[#E3000F]" />
                  </div>

                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E3000F]">
                    {members}
                  </p>

                  <p className="mt-4 max-w-[680px] text-[15px] leading-[1.8] text-[#050505]/68">
                    {desc}
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

function AboutChronicle() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="border-t border-[#050505]/10 bg-[#faf9f6] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-[900px]">
          <SectionLabel>Strategic Evolution</SectionLabel>

          <h2 className="text-5xl leading-[1.04] tracking-[-0.04em] text-[#050505] lg:text-7xl">
            Hành trình chuyển mình thành{" "}
            <span className="text-[#E3000F]">hệ sinh thái</span> truyền thông.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="sticky top-16">
              <div className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#050505]/45">
                Strategic eras
              </div>

              <div className="relative aspect-square w-full overflow-hidden shadow-2xl shadow-black/10">
                {ERAS.map((m, i) => (
                  <img
                    key={m.year}
                    src={m.img}
                    alt={m.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                      active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E3000F]">
                    {ERAS[active].label}
                  </div>
                  <div className="mt-3 text-7xl font-light leading-none text-white md:text-[90px]">
                    {ERAS[active].year}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="space-y-12 pb-24 pt-12 md:col-span-6 md:space-y-[34vh] md:pb-[40vh] md:pt-[15vh]">
            {ERAS.map((m, i) => (
              <li
                key={m.year}
                data-idx={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={`transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-30"
                }`}
              >
                <div className="text-3xl text-[#E3000F]">
                  {m.year}
                </div>

                <div className="mt-4 h-px w-full bg-[#050505]/15" />

                <div className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#050505]/45">
                  {m.label}
                </div>

                <h3 className="mt-4 text-[34px] font-light leading-[1.1] tracking-[-0.03em] text-[#050505] md:text-[42px]">
                  {m.title}
                </h3>

                <p className="mt-5 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/68 md:text-xl md:font-light">
                  {m.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function AboutLeadershipVision() {
  return (
    <section className="border-t border-[#050505]/10 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-6 md:grid-cols-12 md:px-8">
        <div className="flex flex-col justify-center md:col-span-7">
          <SectionLabel>Leadership Vision</SectionLabel>

          <h2 className="max-w-[900px] text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl">
            Tầm nhìn của SJK là trở thành lớp kết nối giữa{" "}
            <span className="text-[#E3000F]">thương hiệu</span> và không gian đô thị.
          </h2>

          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[#050505]/65">
            Khi OOH bước vào kỷ nguyên dữ liệu, SJK tập trung phát triển hạ tầng truyền thông
            có khả năng đo lường, lập trình và mở rộng trên nhiều điểm chạm.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="relative h-[520px] overflow-hidden bg-[#050505]">
            <img
              src={newsImg}
              alt="SJK leadership vision"
              className="h-full w-full object-cover opacity-90"
            />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              {[
                ["01", "Smart City Media"],
                ["02", "Programmatic OOH"],
                ["03", "Data-driven Measurement"],
              ].map(([num, text]) => (
                <div
                  key={num}
                  className="flex items-center justify-between border-t border-white/15 py-4 first:border-t-0"
                >
                  <div>
                    <div className="text-[10px] font-semibold tracking-[0.25em] text-[#E3000F]">
                      {num}
                    </div>
                    <div className="mt-1 text-[24px] font-light leading-[1.15] tracking-[-0.03em]">
                      {text}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTrustImpact() {
  return (
    <section className="border-t border-[#050505]/10 bg-[#faf9f6] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8">
        <div className="mb-14 max-w-[900px]">
          <SectionLabel>Trust & Impact</SectionLabel>

          <h2 className="text-4xl leading-[1.04] tracking-[-0.04em] md:text-6xl">
            Niềm tin doanh nghiệp được xây dựng từ năng lực triển khai và trách nhiệm xã hội.
          </h2>
        </div>

        <div className="grid gap-px bg-[#050505]/10 md:grid-cols-4">
          {TRUST_ITEMS.map(([title, subtitle], index) => (
            <div key={title} className="bg-[#faf9f6] p-8 transition hover:bg-white">
              <div className="text-[10px] font-semibold tracking-[0.28em] text-[#E3000F]">
                0{index + 1}
              </div>
              <h3 className="mt-10 text-[28px] font-light leading-[1.15] tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-[#050505]/68">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#E3000F]" />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.32em] ${
          dark ? "text-white/65" : "text-[#050505]/50"
        }`}
      >
        {children}
      </span>
    </div>
  );
}