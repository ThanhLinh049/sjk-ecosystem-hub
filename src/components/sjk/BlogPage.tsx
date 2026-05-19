import heroImg from "@/assets/sjk-hero.jpg";
import ifcImg from "@/assets/sjk-ifc.jpg";
import ledImg from "@/assets/sjk-shojiki.jpg";
import airportImg from "@/assets/sjk-airport.jpg";
import metroImg from "@/assets/sjk-metro.jpg";
import mallImg from "@/assets/sjk-mall.jpg";
import newsImg from "@/assets/sjk-news.jpg";

import { SiteHeader } from "./SiteHeader";
import { ContactFooter } from "./ContactFooter";

import { ArrowUpRight, Search } from "lucide-react";

const CATEGORIES = [
  "Tất cả",
  "OOH",
  "DOOH",
  "Media Tech",
  "Case Study",
  "Retail Media",
  "Smart City",
];

const POSTS = [
  {
    title:
      "OOH đang chuyển mình từ kênh hiển thị sang hạ tầng truyền thông có dữ liệu.",
    category: "Media Intelligence",
    date: "2025",
    image: ifcImg,
    featured: true,
  },
  {
    title:
      "Programmatic DOOH mở ra cách mua quảng cáo ngoài trời linh hoạt hơn.",
    category: "DOOH",
    date: "2025",
    image: ledImg,
  },
  {
    title:
      "Sân bay vẫn là điểm chạm truyền thông cao cấp cho thương hiệu.",
    category: "Airport",
    date: "2025",
    image: airportImg,
  },
  {
    title:
      "Metro và truyền thông đô thị tạo cơ hội mới cho chiến dịch OOH.",
    category: "Transport",
    date: "2025",
    image: metroImg,
  },
  {
    title:
      "Retail media trong trung tâm thương mại và siêu thị đang phát triển mạnh.",
    category: "Retail Media",
    date: "2025",
    image: mallImg,
  },
  {
    title:
      "Đo lường OOH giúp chiến dịch ngoài trời minh bạch hơn.",
    category: "Measurement",
    date: "2025",
    image: newsImg,
  },
];

const TOPICS = [
  "Programmatic DOOH",
  "AI Measurement",
  "Airport Advertising",
  "Retail Media",
  "OOH Planning",
  "Smart City Media",
];

export function BlogPage() {
  const [featured, ...posts] = POSTS;

  return (
    <main className="bg-[#faf9f6] text-[#050505]">

      {/* HEADER TÁCH RIÊNG */}
      <div className="relative z-30 bg-[#050505] text-white">
        <SiteHeader />
      </div>

      <BlogBanner />

      <BlogMenu />

      <FeaturedPost post={featured} />

      <BlogContent posts={posts} />

      <ContactFooter />
    </main>
  );
}

function BlogBanner() {
  return (
    <section className="relative min-h-[calc(90vh-96px)] w-full overflow-hidden bg-[#050505] text-white">

      <img
        src={heroImg}
        alt="SJK Insights"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/85" />

      <div className="relative z-10 mx-auto flex min-h-[calc(90vh-120px)] max-w-[1400px] flex-col justify-end px-8 pb-20">
        <div className="max-w-3xl">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--brand-red)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85">
              Insights / Journal
            </span>
          </div>

          <h1 className="text-[64px] font-medium leading-[0.95] tracking-tight md:text-[96px]">
            Góc nhìn về{" "}
            <span className="text-[var(--brand-red)]">
              OOH
            </span>{" "}
            và truyền thông đô thị.
          </h1>

          <p className="mt-8 max-w-[720px] text-2xl font-light leading-snug text-white/88 md:text-[32px]">
            Xu hướng, dữ liệu, case study và góc nhìn chuyên sâu từ hệ sinh thái{" "}
            <span className="text-[var(--brand-red)]">
              SJK Group
            </span>.
          </p>

        </div>
      </div>
    </section>
  );
}

function BlogMenu() {
  return (
    <section className="sticky top-0 z-20 border-b border-[#050505]/10 bg-[#faf9f6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">

        <nav className="flex gap-8 overflow-x-auto">
          {CATEGORIES.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] transition ${
                index === 0
                  ? "text-[var(--brand-red)]"
                  : "text-[#050505]/55 hover:text-[var(--brand-red)]"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <label className="flex w-full items-center gap-3 border-b border-[#050505]/15 pb-2 md:w-[260px]">
          <Search className="h-4 w-4 text-[#050505]/35" />

          <input
            type="search"
            placeholder="Tìm bài viết..."
            className="w-full bg-transparent text-[13px] outline-none placeholder:text-[#050505]/35"
          />
        </label>
      </div>
    </section>
  );
}

function FeaturedPost({
  post,
}: {
  post: (typeof POSTS)[number];
}) {
  return (
    <section className="bg-[#faf9f6] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8">

        <article className="grid gap-10 md:grid-cols-12 md:items-center">

          <div className="md:col-span-5">

            <SectionLabel>
              Featured
            </SectionLabel>

            <h2 className="text-[54px] font-light leading-[0.98] tracking-tight md:text-[48px]">
              {post.title}
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#050505]/68">
              Khi DOOH, AI và dữ liệu vị trí tạo nên thế hệ truyền thông ngoài trời mới.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#050505] transition hover:text-[var(--brand-red)]"
            >
              Đọc bài viết

              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#"
            className="group relative h-[560px] overflow-hidden bg-[#050505] md:col-span-7"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
            />
          </a>
        </article>
      </div>
    </section>
  );
}

function BlogContent({
  posts,
}: {
  posts: typeof POSTS;
}) {
  return (
    <section className="border-t border-[#050505]/10 bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-6 md:grid-cols-12 md:px-8">

        <div className="md:col-span-8">

          <SectionLabel>
            Latest Stories
          </SectionLabel>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {posts.map((post) => (
              <ArticleCard
                key={post.title}
                post={post}
              />
            ))}
          </div>
        </div>

        <aside className="md:col-span-4">

          <div className="sticky top-28 border-t border-[#050505]/10 pt-8">

            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#050505]/45">
              Chủ đề nổi bật
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
              {TOPICS.map((topic) => (
                <a
                  key={topic}
                  href="#"
                  className="rounded-full border border-[#050505]/10 px-4 py-2 text-[12px] text-[#050505]/65 transition hover:border-[var(--brand-red)] hover:text-[var(--brand-red)]"
                >
                  {topic}
                </a>
              ))}
            </div>

            <div className="mt-12 border-t border-[#050505]/10 pt-8">

              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#050505]/45">
                SJK Insights
              </h3>

              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#050505]/65">
                Nơi cập nhật xu hướng OOH, DOOH, Media Tech và những thay đổi trong hành vi truyền thông đô thị.
              </p>

            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ArticleCard({
  post,
}: {
  post: (typeof POSTS)[number];
}) {
  return (
    <article className="group">
      <a href="#" className="block">

        <div className="relative h-[300px] overflow-hidden bg-[#050505]">

          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
          />
        </div>

        <div className="border-b border-[#050505]/10 py-6">

          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]">
            {post.category} · {post.date}
          </div>

          <h3 className="mt-4 text-[32px] font-light leading-[1.08] tracking-tight transition group-hover:text-[var(--brand-red)]">
            {post.title}
          </h3>

          <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#050505]/60">
            Đọc bài viết

            <ArrowUpRight className="h-4 w-4" />
          </div>

        </div>
      </a>
    </article>
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
          dark
            ? "text-white/70"
            : "text-[#050505]/55"
        }`}
      >
        {children}
      </span>
    </div>
  );
}