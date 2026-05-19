import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/sjk/ContactPage";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      {
        title: "Liên hệ SJK Group — Tư vấn OOH, DOOH và Media Tech",
      },
      {
        name: "description",
        content:
          "Liên hệ SJK Group để tư vấn chiến dịch OOH, DOOH, LED outdoor, airport advertising, retail media, wifi marketing và đo lường hiệu quả.",
      },
    ],
  }),
});

function Contact() {
  return <ContactPage />;
}