import { createFileRoute } from "@tanstack/react-router";

import { BlogGrid, GradientPanel, HeroBadge, SectionHeading } from "@/components/stackearn-site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "StackEarn Blog — Video Guides, Android Tips & Updates" },
      {
        name: "description",
        content:
          "Read StackEarn blog content about video download guides, Android tips, storage management, and platform updates.",
      },
      { property: "og:title", content: "StackEarn Blog — Video Guides, Android Tips & Updates" },
      {
        property: "og:description",
        content:
          "Explore guides, tips, and updates supporting the StackEarn ecosystem.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy max-w-3xl">
          <HeroBadge>SEO-ready content hub</HeroBadge>
          <div className="mt-6">
            <SectionHeading
              eyebrow="Blog"
              title={<>Tips, guides & updates all in one place</>}
              description="A content hub for video download guides, Android productivity tips, and StackEarn platform updates."
            />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <GradientPanel className="p-6 lg:p-8">
          <BlogGrid />
        </GradientPanel>
      </section>
    </div>
  );
}
