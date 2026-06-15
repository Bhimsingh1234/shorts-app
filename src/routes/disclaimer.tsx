import { createFileRoute } from "@tanstack/react-router";

import { GradientPanel, LegalCards, SectionHeading } from "@/components/stackearn-site";
import { disclaimerSections } from "@/lib/stackearn-content";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — StackEarn Shorts Downloader" },
      {
        name: "description",
        content:
          "Read the StackEarn disclaimer covering personal use, user responsibility, and trademark ownership.",
      },
      { property: "og:title", content: "Disclaimer — StackEarn Shorts Downloader" },
      {
        property: "og:description",
        content:
          "Understand the basic disclaimer terms presented for the StackEarn website and apps.",
      },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy max-w-3xl">
          <SectionHeading
            eyebrow="Disclaimer"
            title={<>Important usage context for StackEarn visitors</>}
            description="StackEarn provides tools and information for personal use, and users remain responsible for complying with applicable laws and platform terms. All trademarks belong to their respective owners."
          />
        </div>
      </section>

      <section className="section-gap">
        <GradientPanel className="p-6 lg:p-8">
          <LegalCards sections={disclaimerSections} />
        </GradientPanel>
      </section>
    </div>
  );
}
