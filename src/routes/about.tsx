import { createFileRoute } from "@tanstack/react-router";
import { Globe, Rocket, Target } from "lucide-react";

import { AppsGrid, GradientPanel, PageHero, SectionHeading } from "@/components/stackearn-site";
import { site } from "@/lib/stackearn-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About StackEarn — Android Apps & Digital Tools" },
      {
        name: "description",
        content:
          "Learn how StackEarn builds Android apps and digital tools designed to improve productivity and simplify everyday tasks.",
      },
      { property: "og:title", content: "About StackEarn — Android Apps & Digital Tools" },
      {
        property: "og:description",
        content:
          "Meet the StackEarn ecosystem and its mission to build fast, reliable, user-friendly digital solutions.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const pillars = [
    {
      title: "Our Story",
      description: "StackEarn started with a simple vision: practical apps and digital tools that solve everyday problems with speed and simplicity.",
      icon: Target,
    },
    {
      title: "Our Mission",
      description: "Build user-friendly applications that help people access, manage and enjoy digital content more efficiently.",
      icon: Rocket,
    },
    {
      title: "Our Vision",
      description: "Grow into a trusted ecosystem of digital products that are useful, reliable and accessible worldwide.",
      icon: Globe,
    },
  ];

  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
        eyebrow="About Us"
        title={
          <>
            About <span className="text-primary">StackEarn</span>
          </>
        }
        description={site.description}
        variant="about"
      />

      <section className="section-gap reveal-up">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GradientPanel key={pillar.title} className="p-8">
                <div className="icon-chip icon-chip-soft">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-tight text-title">{pillar.title}</h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{pillar.description}</p>
              </GradientPanel>
            );
          })}
        </div>
      </section>

      <section className="section-gap reveal-up delay-1">
        <SectionHeading
          eyebrow="What We Build"
          title={
            <>
              The <span className="text-primary">StackEarn</span> ecosystem
            </>
          }
          description="From all-in-one video utilities to focused download tools, StackEarn organizes products around speed, simplicity and Android-first usability."
          center
        />
        <div className="mt-10">
          <AppsGrid />
        </div>
      </section>
    </div>
  );
}
