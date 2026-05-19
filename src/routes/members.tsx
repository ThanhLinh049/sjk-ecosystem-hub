import { createFileRoute } from "@tanstack/react-router";
import { MembersPage } from "@/components/sjk/MembersPage";

export const Route = createFileRoute("/members")({
  component: Members,
  head: () => ({
    meta: [
      {
        title: "Thành viên SJK Group — Hệ sinh thái công ty thành viên",
      },
      {
        name: "description",
        content:
          "Khám phá hệ sinh thái công ty thành viên của SJK Group trong lĩnh vực OOH, DOOH, dữ liệu, công nghệ và đầu tư truyền thông.",
      },
    ],
  }),
});

function Members() {
  return <MembersPage />;
}