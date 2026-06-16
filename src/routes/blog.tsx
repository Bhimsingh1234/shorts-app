import { createFileRoute } from "@tanstack/react-router";

import { BlogGrid, PageHero, blogHeroPills } from "@/components/stackearn-site";

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
        content: "Explore guides, tips, and updates supporting the StackEarn ecosystem.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
        eyebrow="Our Blog"
        title={
          <>
            Tips, Guides & Updates <span className="text-primary">All in One Place</span>
          </>
        }
        description="Explore helpful guides, tips and updates about video downloading, apps and more."
        pills={blogHeroPills}
        variant="blog"
      />

      <section className="section-gap reveal-up">
        <BlogGrid />
      </section>
    </div>
  );
}
