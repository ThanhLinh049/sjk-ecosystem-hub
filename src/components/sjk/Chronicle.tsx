import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { year: "2017", text: "Khởi nguồn hệ sinh thái với Shojiki Ads — đặt nền móng cho mạng lưới OOH chuyên biệt." },
  { year: "2019", text: "Thành lập Compass Tech và Adjika — mở rộng năng lực công nghệ đo lường và sáng tạo." },
  { year: "2023", text: "Doanh nghiệp Việt Nam đầu tiên gia nhập hội viên WOO toàn cầu, kết nối chuẩn mực quốc tế." },
  { year: "2024", text: "Chính thức ra mắt SJK Group và Inno X — định danh tập đoàn truyền thông ngoài trời tích hợp." },
  { year: "2025", text: "Thành lập quỹ đầu tư OIP, mở rộng chi nhánh toàn quốc và nâng tầm vị thế dẫn đầu." },
];

export function Chronicle() {
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
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#faf9f6] border-t border-[var(--charcoal)]/10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]">
            <span className="h-px w-5 bg-[#E3000F]" />
            Hành trình kiến tạo
          </div>
          <h2 className="font-display text-5xl font-light leading-[1.1] text-[#050505] lg:text-7xl">
            Tốc độ mở rộng và{" "}
            <span className="italic text-[#E3000F]">vị thế</span> dẫn đầu.
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--charcoal)]/45">
                Niên đại
              </div>
              <div
                key={MILESTONES[active].year}
                className="font-display font-light leading-none text-[var(--charcoal)]/15 text-8xl md:text-[120px] transition-opacity duration-500"
              >
                {MILESTONES[active].year}
              </div>
            </div>
          </div>

          <ol className="md:col-span-7 space-y-32">
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                data-idx={i}
                ref={(el) => {
                  refs.current[i] = el;
                }}
              >
                <div className="font-display text-2xl text-[#E3000F] mb-4">{m.year}</div>
                <div className="h-px w-full bg-[var(--charcoal)]/15 mb-6" />
                <p className="text-xl leading-relaxed text-[var(--charcoal)]/80">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}