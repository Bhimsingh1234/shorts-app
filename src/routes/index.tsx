import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Download, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

import {
  AppShowcase,
  DownloaderForm,
  FAQAccordion,
  FeaturesGrid,
  GradientPanel,
  HeroBadge,
  SectionHeading,
  StatsBand,
} from "@/components/stackearn-site";
import { apps, site } from "@/lib/stackearn-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StackEarn Shorts Downloader — Download Shorts Videos Fast & Easy" },
      {
        name: "description",
        content:
          "Download shorts videos fast and easy with StackEarn Shorts Downloader. Explore apps, save videos, and manage media from one SEO-ready hub.",
      },
      { property: "og:title", content: "StackEarn Shorts Downloader — Download Shorts Videos Fast & Easy" },
      {
        property: "og:description",
        content:
          "Download, save, and manage your favorite short videos with a fast, secure, user-friendly StackEarn platform.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="page-shell reveal-fade">
      <section className="hero-section home-hero-section">
        <div className="hero-copy reveal-up">
          <HeroBadge>Fast · Free · High Quality</HeroBadge>
          <div className="mt-6">
            <SectionHeading
              title={
                <>
                  Download Shorts Videos <span className="text-primary">Fast & Easy</span>
                </>
              }
              description="Download YouTube Shorts videos in HD quality. Save and watch offline anytime, anywhere."
            />
          </div>

          <div className="mt-10 max-w-3xl">
            <DownloaderForm />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-chip">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Fast downloads
            </span>
            <span className="inline-chip">
              <ShieldCheck className="h-4 w-4 text-primary" /> Secure platform
            </span>
            <span className="inline-chip">
              <Sparkles className="h-4 w-4 text-primary" /> Easy to use
            </span>
          </div>
        </div>

        <div className="hero-device reveal-up delay-1">
          <div className="device-glow" />
          <div className="floating-card floating-card-center">
            <div className="icon-chip icon-chip-gradient">
              <Download className="h-5 w-5" />
            </div>
          </div>
          <div className="floating-card floating-card-right">
            <div className="icon-chip icon-chip-soft">
              <Smartphone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold text-title">High Quality Download</div>
              <div className="text-xs text-muted-foreground">Smooth and instant workflow</div>
            </div>
          </div>
          <div className="device-frame">
            <div className="device-screen">
              <div className="screen-header">Shorts Downloader</div>
              <div className="screen-search" />
              <div className="screen-video screen-video-main" />
              <div className="screen-grid">
                <div className="screen-card violet" />
                <div className="screen-card coral" />
                <div className="screen-card mint" />
                <div className="screen-card pink" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap reveal-up" id="downloader">
        <GradientPanel className="p-5 lg:p-6">
          <AppShowcase />
        </GradientPanel>
      </section>

      <section className="section-gap reveal-up delay-1">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              Powerful <span className="text-primary">Features</span>
            </>
          }
          description="A fast, polished and trustworthy interface made for app promotion, organic growth and a better downloader experience."
          center
        />
        <div className="mt-10">
          <FeaturesGrid />
        </div>
      </section>

      <section className="section-gap reveal-up delay-2">
        <StatsBand />
      </section>

      <section className="section-gap reveal-up">
        <GradientPanel className="p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-4">
              <div className="section-eyebrow">Android Downloader Ecosystem</div>
              <h2 className="text-3xl font-black tracking-tight text-title md:text-4xl">
                Faster, safer and cleaner tools for every download workflow
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                Discover Android tools built for shorts, reels, statuses and all-in-one video downloads with a premium UI that matches your shared reference design.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="inline-feature compact-feature">
                  <div className="icon-chip icon-chip-soft">
                    <Smartphone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-title">Android ready</div>
                    <div className="text-xs text-muted-foreground">Promote app and web flows together</div>
                  </div>
                </div>
                <div className="inline-feature compact-feature">
                  <div className="icon-chip icon-chip-soft">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-title">Quick access</div>
                    <div className="text-xs text-muted-foreground">Simple path from URL to action</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-preview-grid">
              {apps.map((app) => {
                const Icon = app.icon;
                return (
                  <article key={app.slug} className="preview-tile">
                    <div className="icon-chip" style={{ backgroundColor: app.accent }}>
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-title">{app.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{app.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </GradientPanel>
      </section>

      <section className="section-gap reveal-up delay-1">
        <GradientPanel className="p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <div className="section-eyebrow">Frequently Asked Questions</div>
              <h2 className="text-3xl font-black tracking-tight text-title">
                Answers users expect before they trust a downloader brand
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                This FAQ improves trust, SEO and clarity while keeping the experience concise and mobile friendly.
              </p>
              <p className="text-sm font-semibold text-primary">{site.domain}</p>
            </div>
            <FAQAccordion />
          </div>
        </GradientPanel>
      </section>
    </div>
  );
}
