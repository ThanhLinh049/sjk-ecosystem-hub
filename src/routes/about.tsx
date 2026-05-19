import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/sjk/About";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      {
        title: "Giới thiệu SJK Group — Hệ sinh thái OOH, DOOH và Media Tech",
      },
      {
        name: "description",
        content:
          "SJK Group phát triển hệ sinh thái truyền thông ngoài trời, DOOH, dữ liệu, công nghệ và hạ tầng media tại Việt Nam.",
      },
    ],
  }),
});

function About() {
  return <AboutPage />;
}