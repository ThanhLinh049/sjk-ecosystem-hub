const MILESTONES = [
  { year: "2017", text: "Khởi nguồn hệ sinh thái với Shojiki Ads." },
  { year: "2019", text: "Thành lập liên doanh Adjika và Compass Tech." },
  { year: "2023", text: "Doanh nghiệp VN đầu tiên gia nhập hội viên WOO toàn cầu." },
  { year: "2024", text: "Chính thức ra mắt SJK Group và Inno X." },
  { year: "2025", text: "Thành lập quỹ đầu tư OIP, mở rộng chi nhánh toàn quốc." },
];

export function Chronicle() {
  return (
    <section className="bg-[#111111] py-24 text-white">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--brand-red)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/65">
              Hành trình kiến tạo
            </span>
          </div>
          <h2 className="font-display text-[40px] font-light leading-[1.08] md:text-[52px]">
            Tốc độ mở rộng và{" "}
            <span className="italic text-[var(--brand-red)]">vị thế</span> dẫn đầu.
          </h2>
        </div>

        <div className="relative mt-16 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="absolute left-0 right-0 top-[44px] h-px bg-white/15" />
          <ol className="relative flex min-w-max gap-16 pr-8">
            {MILESTONES.map((m) => (
              <li key={m.year} className="w-[260px] shrink-0">
                <div className="font-display text-2xl font-light text-white/85">{m.year}</div>
                <div className="relative mt-4 h-3">
                  <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--brand-red)] ring-4 ring-[#111111]" />
                </div>
                <p className="mt-5 text-[13.5px] leading-relaxed text-white/70">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
