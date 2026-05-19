import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/sjk/BlogPage";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      {
        title: "SJK Insights — OOH, DOOH và Media Technology",
      },
      {
        name: "description",
        content:
          "Góc nhìn, xu hướng và case study về OOH, DOOH, media technology, retail media và truyền thông đô thị từ SJK Group.",
      },
    ],
  }),
});

function Blog() {
  return <BlogPage />;
}