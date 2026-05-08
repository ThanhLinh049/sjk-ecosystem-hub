import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sjk/Hero";
import { Identity } from "@/components/sjk/Identity";
import { EcosystemDeck } from "@/components/sjk/EcosystemDeck";
import { PartnersNews } from "@/components/sjk/PartnersNews";
import { ContactFooter } from "@/components/sjk/ContactFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SJK Group — Tập đoàn truyền thông ngoài trời thế hệ mới" },
      {
        name: "description",
        content:
          "SJK Group là hệ sinh thái OOH gồm Shojiki, CompassTech, WikiOOH, Adjika, AnyScreen và OIP — kiến tạo truyền thông ngoài trời, dữ liệu và hạ tầng quảng cáo.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-[var(--background)]">
      <Hero />
      <Identity />
      <EcosystemDeck />
      <PartnersNews />
      <ContactFooter />
    </main>
  );
}
