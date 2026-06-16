import { createFileRoute } from "@tanstack/react-router";

import { LegalPageContent, PageHero, legalHeroPills } from "@/components/stackearn-site";
import { termsSections } from "@/lib/stackearn-content";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — StackEarn Shorts Downloader" },
      {
        name: "description",
        content:
          "Read the StackEarn Terms & Conditions covering acceptance of terms, user responsibilities, service availability, intellectual property, and limitation of liability.",
      },
      { property: "og:title", content: "Terms & Conditions — StackEarn Shorts Downloader" },
      {
        property: "og:description",
        content: "Review the terms governing use of the StackEarn website and ecosystem.",
      },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]}
        eyebrow="Terms & Conditions"
        title={
          <>
            Terms & <span className="text-primary">Conditions</span>
          </>
        }
        description="Please read these Terms & Conditions carefully before using StackEarn Shorts Downloader website and our services."
        pills={legalHeroPills}
        variant="terms"
      />

      <section className="section-gap reveal-up">
        <LegalPageContent
          sections={termsSections}
          supportTitle="Have Questions?"
          supportText="If you have any questions about these Terms & Conditions, feel free to contact us."
        />
      </section>
    </div>
  );
}
