import { createFileRoute } from "@tanstack/react-router";
import { Globe, Rocket, Target } from "lucide-react";

import { AppsGrid, GradientPanel, SectionHeading } from "@/components/stackearn-site";
import { site } from "@/lib/stackearn-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About StackEarn — Android Apps & Digital Tools` },
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
      title: "Mission",
      description: "Provide fast, reliable and user-friendly digital solutions.",
      icon: Target,
    },
    {
      title: "Vision",
      description: "Build a global ecosystem of trusted apps and online tools.",
      icon: Globe,
    },
    {
      title: "Momentum",
      description: "Keep launching practical products that simplify everyday mobile workflows.",
      icon: Rocket,
    },
  ];

  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <SectionHeading
            eyebrow="About StackEarn"
            title={<>Building smart apps & digital tools for everyone</>}
            description={site.description}
          />
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            StackEarn develops innovative Android applications and digital tools designed to improve productivity and simplify everyday tasks.
          </p>
        </div>
        <div className="hero-device hero-device-about">
          <div className="device-glow" />
          <div className="device-frame">
            <div className="device-screen">
              <div className="screen-title">StackEarn Apps</div>
              <div className="screen-grid">
                <div className="screen-card coral" />
                <div className="screen-card violet" />
                <div className="screen-card mint" />
                <div className="screen-card pink" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
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

      <section className="section-gap">
        <SectionHeading
          eyebrow="What we build"
          title={<>The StackEarn ecosystem</>}
          description="From all-in-one video utilities to focused download tools, StackEarn organizes products around speed, simplicity, and Android-first usability."
          center
        />
        <div className="mt-10">
          <AppsGrid />
        </div>
      </section>
    </div>
  );
}
