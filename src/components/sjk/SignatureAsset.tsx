import ifcImg from "@/assets/sjk-ifc.jpg"; 
// Bro dùng ảnh dọc hay ngang đều được, class object-cover sẽ tự động crop đẹp nhất.

export function SignatureAsset() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505]">
      
      {/* 1. Lớp Hình Ảnh: Hiển thị 100% không bị che lấp */}
      <img
        src={ifcImg}
        alt="Saigòn Marina IFC tower LED facade"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[8s] hover:scale-105"
      />
      
      {/* 2. Lớp Bảo Vệ Chữ: Chỉ có 1 dải gradient CỰC MỎNG ở 30% sát đáy màn hình */}
      {/* 70% bên trên hoàn toàn trong suốt */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />

      {/* 3. Lớp Nội Dung: Ép sát đáy màn hình (Bottom-Docked) */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          
          {/* Dàn layout ngang: Tiêu đề bên Trái, Thông số bên Phải */}
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            
            {/* CỤM BÊN TRÁI: Tiêu đề */}
            <div className="max-w-2xl text-white">
              <div className="mb-6 flex items-center gap-4 text-[#E3000F] text-xs font-semibold uppercase tracking-[0.3em]">
                <span className="h-px w-8 bg-[#E3000F]" />
                Biểu tượng đẳng cấp
              </div>
              <h2 className="text-4xl leading-[1.1] md:text-5xl lg:text-7xl">
                Điểm nhìn trung tâm{" "}
                <span className="text-[#E3000F]">tài chính</span> quốc tế.
              </h2>
            </div>

            {/* CỤM BÊN PHẢI: Thông số */}
            <div className="flex shrink-0 items-end gap-8 md:border-l md:border-white/30 md:pl-10">
              <div>
                <div className="text-5xl font-light tracking-tighter text-white lg:text-6xl">
                  39.000
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">
                  m² Màn hình LED
                </div>
              </div>
              
              <div>
                <div className="text-5xl font-light tracking-tighter text-white lg:text-6xl">
                  #1
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">
                  Đông Nam Á
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}