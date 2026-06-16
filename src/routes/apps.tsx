import { createFileRoute } from "@tanstack/react-router";
import { AppWindow, Download, Shield } from "lucide-react";

import { AppsGrid, PageHero, StatsBand } from "@/components/stackearn-site";

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
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Apps" }]}
        eyebrow="Our Apps"
        title={
          <>
            Android tools built for faster <span className="text-primary">downloads</span>
          </>
        }
        description="Browse the full StackEarn app ecosystem for saving shorts, reels, statuses and videos with Android-first simplicity."
        pills={[
          { icon: AppWindow, label: "Multiple apps" },
          { icon: Download, label: "Fast workflows" },
          { icon: Shield, label: "Safe experience" },
        ]}
        variant="apps"
      />

      <section className="section-gap reveal-up">
        <AppsGrid />
      </section>

      <section className="section-gap reveal-up delay-1">
        <StatsBand />
      </section>
    </div>
  );
}
