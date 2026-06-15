import { createFileRoute } from "@tanstack/react-router";

import { AppsGrid, SectionHeading, StatsBand } from "@/components/stackearn-site";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "StackEarn Apps — Video Downloader Tools for Android" },
      {
        name: "description",
        content:
          "Explore StackEarn apps including VYDO, Shorts Downloader, Status Saver, and Reels Downloader for Android users.",
      },
      { property: "og:title", content: "StackEarn Apps — Video Downloader Tools for Android" },
      {
        property: "og:description",
        content:
          "Discover the StackEarn Android app lineup for downloads, reels, statuses, and media management.",
      },
      { property: "og:url", content: "/apps" },
    ],
    links: [{ rel: "canonical", href: "/apps" }],
  }),
  component: AppsPage,
});

function AppsPage() {
  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy max-w-3xl">
          <SectionHeading
            eyebrow="StackEarn Apps"
            title={<>Android tools built for faster downloads and cleaner media workflows</>}
            description="Browse the full StackEarn app ecosystem for saving shorts, reels, statuses, and videos with Android-first simplicity."
          />
        </div>
      </section>

      <section className="section-gap">
        <AppsGrid />
      </section>

      <section className="section-gap">
        <StatsBand />
      </section>
    </div>
  );
}
