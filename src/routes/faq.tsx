import { createFileRoute } from "@tanstack/react-router";

import { FAQAccordion, PageHero, faqHeroPills } from "@/components/stackearn-site";
import { faqPageItems } from "@/lib/stackearn-content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "StackEarn FAQ — Common Questions & Answers" },
      {
        name: "description",
        content:
          "Read common questions about StackEarn Shorts Downloader, app usage, supported devices, and platform safety.",
      },
      { property: "og:title", content: "StackEarn FAQ — Common Questions & Answers" },
      {
        property: "og:description",
        content: "Get answers about downloads, apps, support, and the StackEarn platform.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
        eyebrow="FAQ"
        title={
          <>
            Frequently Asked <span className="text-primary">Questions</span>
          </>
        }
        description="Find answers to common questions about StackEarn Shorts Downloader and our services."
        pills={faqHeroPills}
        variant="faq"
      />

      <section className="section-gap reveal-up">
        <FAQAccordion items={faqPageItems} />
      </section>
    </div>
  );
}
