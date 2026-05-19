import { Award, Trophy, Globe, ShieldCheck } from "lucide-react";

const BADGES = [
  {
    icon: Award,
    title: "Doanh nghiệp tiêu biểu",
    subtitle: "UBND TP.HCM 2024",
  },
  {
    icon: Trophy,
    title: "Giải Nhất Inno Culture",
    subtitle: "Sở KH&CN 2024",
  },
  {
    icon: Globe,
    title: "Hội viên toàn cầu",
    subtitle: "World OOH Org",
  },
  {
    icon: ShieldCheck,
    title: "Ban Điều Hành",
    subtitle: "Hiệp hội HAA & VAA",
  },
];

export function TrustBadges() {
  return (
    // Dải ngang màu trắng ngà, có viền mỏng ở dưới để phân cách nhẹ nhàng với section tiếp theo
    <div className="bg-[#faf9f6] border-b border-[#050505]/10 py-10 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-8">
        
        {/* Container dàn ngang các huy hiệu */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-10 md:gap-4">
          
          {BADGES.map((badge, idx) => (
            <div 
              key={idx} 
              // Hiệu ứng: Mặc định xám nhẹ (opacity), hover vào thì rõ nét và icon đổi màu đỏ
              className="flex items-center gap-4 group cursor-default opacity-60 hover:opacity-100 transition-opacity duration-500"
            >
              {/* Vùng chứa Hình ảnh / Icon */}
              <div className="flex-shrink-0">
                {/* Thay thẻ <badge.icon> này bằng <img src="link-logo.png" className="h-10 w-auto" /> nếu có logo thật */}
                <badge.icon 
                  className="w-10 h-10 text-[#050505] group-hover:text-[#E3000F] transition-colors duration-500" 
                  strokeWidth={1} 
                />
              </div>

              {/* Vùng chứa Text */}
              <div>
                <p className="text-sm md:text-base text-[#050505] leading-tight">
                  {badge.title}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#050505]/60 mt-1 font-semibold">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}