import { createFileRoute } from "@tanstack/react-router";

import { LegalPageContent, PageHero, legalHeroPills } from "@/components/stackearn-site";
import { privacySections } from "@/lib/stackearn-content";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — StackEarn Shorts Downloader" },
      {
        name: "description",
        content:
          "Review the StackEarn Privacy Policy covering information collection, analytics, cookies, user rights, and data security.",
      },
      { property: "og:title", content: "Privacy Policy — StackEarn Shorts Downloader" },
      {
        property: "og:description",
        content: "Understand how StackEarn presents privacy, analytics, cookies, and security information.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
        eyebrow="Privacy Policy"
        title={
          <>
            Privacy <span className="text-primary">Policy</span>
          </>
        }
        description="Your privacy is important to us. This Privacy Policy explains how StackEarn Shorts Downloader collects, uses and protects your information."
        pills={legalHeroPills}
        variant="privacy"
      />

      <section className="section-gap reveal-up">
        <LegalPageContent
          sections={privacySections}
          supportTitle="Questions About Privacy?"
          supportText="If you have any questions about this Privacy Policy, feel free to contact us."
        />
      </section>
    </div>
  );
}
