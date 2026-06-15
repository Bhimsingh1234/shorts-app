import { createFileRoute } from "@tanstack/react-router";

import { GradientPanel, LegalCards, SectionHeading } from "@/components/stackearn-site";
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
        content:
          "Understand how StackEarn presents privacy, analytics, cookies, and security information.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy max-w-3xl">
          <SectionHeading
            eyebrow="Privacy Policy"
            title={<>Clear privacy guidance for StackEarn users</>}
            description="This page outlines how StackEarn presents information collection, analytics usage, advertising services, cookies, third-party services, user rights, data security, and contact details."
          />
        </div>
      </section>

      <section className="section-gap">
        <GradientPanel className="p-6 lg:p-8">
          <LegalCards sections={privacySections} />
        </GradientPanel>
      </section>
    </div>
  );
}
