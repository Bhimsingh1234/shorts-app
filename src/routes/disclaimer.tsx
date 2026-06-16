import { createFileRoute } from "@tanstack/react-router";

import { LegalPageContent, PageHero, legalHeroPills } from "@/components/stackearn-site";
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
        content: "Understand the basic disclaimer terms presented for the StackEarn website and apps.",
      },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Disclaimer" }]}
        eyebrow="Disclaimer"
        title={
          <>
            Usage <span className="text-primary">Disclaimer</span>
          </>
        }
        description="Please read this disclaimer carefully before using StackEarn Shorts Downloader website and our services."
        pills={legalHeroPills}
        variant="disclaimer"
      />

      <section className="section-gap reveal-up">
        <LegalPageContent
          sections={disclaimerSections}
          supportTitle="Need Clarification?"
          supportText="If you have questions about how our disclaimer applies, contact us for clarification."
        />
      </section>
    </div>
  );
}
