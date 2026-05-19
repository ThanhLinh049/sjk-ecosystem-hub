import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  { 
    year: "2017", 
    text: "Ông Nhựt rời global agency, thành lập Shojiki Ads — đặt nền móng đầu tiên cho hệ sinh thái truyền thông.",
    img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=800"
  },
  { 
    year: "2019", 
    text: "Thành lập Liên doanh Việt - Nga Adjika ads, mở rộng năng lực sáng tạo công nghệ.",
    img: "src/assets/history-1.webp"
  },
  { 
    year: "2021", 
    text: "Chính thức mở chi nhánh tại Hà Nội, đánh dấu bước phát triển mạng lưới quy mô quốc gia.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  { 
    year: "2022", 
    text: "Khẳng định uy tín ngành: Nhận chức Phó Chủ Tịch HAA và đảm nhiệm vai trò Chủ nhiệm OOHClub.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800"
  },
  { 
    year: "2023", 
    text: "Công ty đầu tiên của Việt Nam tham gia hội viên WOO toàn cầu. Thành lập liên doanh Việt - Hàn Look At Media.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  { 
    year: "2024", 
    text: "Bước ngoặt thương hiệu: Hoàn thành đổi tên và ra mắt logo mới SJK Group (18/7/2024), đồng thời thành lập Inno X.",
    img: "https://images.unsplash.com/photo-1541888087640-10902bd365c1?auto=format&fit=crop&q=80&w=800"
  },
  { 
    year: "2025", 
    text: "Thành lập văn phòng tại Đà Nẵng, Cần Thơ. Ra mắt OIP (OOH Investment Partners) và kí kết hợp tác với Quà tặng doanh nghiệp OEM Group.",
    img: "src/assets/history-1.webp"
  },
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
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#faf9f6] border-t border-[var(--charcoal)]/10 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="max-w-3xl">
          <div className="mb-8 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]">
            <span className="h-px w-5 bg-[#E3000F]" />
            Hành trình kiến tạo
          </div>
          <h2 className="text-5xl leading-[1.1] text-[#050505] lg:text-7xl">
            Tốc độ mở rộng và{" "}
            <span className="text-[#E3000F]">vị thế</span> dẫn đầu.
          </h2>
        </div>
        
        <div className="relative mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
          
          <div className="md:col-span-6">
            <div className="sticky top-16">
              <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--charcoal)]/45 mb-6">
                Niên đại
              </div>
              
              <div className="relative aspect-[1/1] w-full max-w overflow-hidden rounded-sm shadow-2xl shadow-black/10">
                {MILESTONES.map((m, i) => (
                  <img
                    key={m.year}
                    src={m.img}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                      active === i ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6">
                  <div
                    key={MILESTONES[active].year}
                    className="font-light leading-none text-white text-7xl md:text-[90px] drop-shadow-md"
                  >
                    {MILESTONES[active].year}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ol className="md:col-span-6 space-y-12 md:space-y-[40vh] pt-12 md:pt-[15vh] pb-24 md:pb-[50vh]">
            {MILESTONES.map((m, i) => (
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
                <div className="text-3xl text-[#E3000F] mb-4">{m.year}</div>
                {/* Giữ nguyên mb-6 trên desktop (md:mb-6), bỏ trên mobile */}
                <div className="h-px w-full bg-[var(--charcoal)]/15 md:mb-6" />
                {/* Áp dụng class của bạn cho mobile, và trả lại class cũ cho md: (desktop) */}
                <p className="mt-5 md:mt-0 max-w-2xl text-[15px] md:text-2xl md:font-light leading-relaxed text-[var(--charcoal)]/75 md:text-[var(--charcoal)]/90">
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