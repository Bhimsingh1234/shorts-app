import { createFileRoute } from "@tanstack/react-router";

import { FAQAccordion, GradientPanel, HeroBadge, SectionHeading } from "@/components/stackearn-site";
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
        content:
          "Get answers about downloads, apps, support, and the StackEarn platform.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy max-w-3xl">
          <HeroBadge>Answers across the ecosystem</HeroBadge>
          <div className="mt-6">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title={<>Everything users ask about StackEarn</>}
              description="Browse platform, app, support, and workflow questions in one organized FAQ page."
            />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <GradientPanel className="p-6 lg:p-8">
          <FAQAccordion items={faqPageItems} />
        </GradientPanel>
      </section>
    </div>
  );
}
