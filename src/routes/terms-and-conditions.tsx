import { createFileRoute } from "@tanstack/react-router";

import { GradientPanel, LegalCards, SectionHeading } from "@/components/stackearn-site";
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
        content:
          "Review the terms governing use of the StackEarn website and ecosystem.",
      },
      { property: "og:url", content: "/terms-and-conditions" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy max-w-3xl">
          <SectionHeading
            eyebrow="Terms & Conditions"
            title={<>The terms that shape the StackEarn platform experience</>}
            description="This page outlines acceptance of terms, user responsibilities, service availability, intellectual property, limitation of liability, and policy updates."
          />
        </div>
      </section>

      <section className="section-gap">
        <GradientPanel className="p-6 lg:p-8">
          <LegalCards sections={termsSections} />
        </GradientPanel>
      </section>
    </div>
  );
}
