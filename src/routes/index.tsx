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
    <div className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <HeroBadge>Fast · Secure · Android-first</HeroBadge>
          <div className="mt-6">
            <SectionHeading
              title={<>Download Shorts Videos Fast & Easy</>}
              description="Download and manage your favorite short videos with our fast, secure and user-friendly platform."
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#apps" className="btn-shell btn-shell-primary">
              Download Android App
            </a>
            <a href="#apps" className="btn-shell btn-shell-outline">
              Explore Apps
            </a>
          </div>

          <div className="mt-10 max-w-3xl">
            <DownloaderForm />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-chip"><CheckCircle2 className="h-4 w-4 text-primary" /> Fast downloads</span>
            <span className="inline-chip"><ShieldCheck className="h-4 w-4 text-primary" /> Secure platform</span>
            <span className="inline-chip"><Sparkles className="h-4 w-4 text-primary" /> Free to use</span>
          </div>
        </div>

        <div className="hero-device">
          <div className="device-glow" />
          <div className="floating-card floating-card-right">
            <div className="icon-chip icon-chip-soft"><Download className="h-5 w-5 text-primary" /></div>
            <div>
              <div className="text-sm font-semibold text-title">Online Shorts Downloader</div>
              <div className="text-xs text-muted-foreground">Quick save workflow</div>
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

      <section className="section-gap" id="downloader">
        <GradientPanel className="p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <div className="section-eyebrow">Online Shorts Downloader</div>
              <h2 className="text-3xl font-black tracking-tight text-title md:text-4xl">
                Paste a video URL and move faster
              </h2>
              <p className="text-base leading-8 text-muted-foreground">
                Paste your video URL and download your favorite short videos quickly and securely.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="inline-feature compact-feature">
                  <div className="icon-chip icon-chip-soft"><Smartphone className="h-4 w-4 text-primary" /></div>
                  <div>
                    <div className="text-sm font-semibold text-title">Android ready</div>
                    <div className="text-xs text-muted-foreground">Promote app and web flows together</div>
                  </div>
                </div>
                <div className="inline-feature compact-feature">
                  <div className="icon-chip icon-chip-soft"><ArrowRight className="h-4 w-4 text-primary" /></div>
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

      <section className="section-gap">
        <AppShowcase />
      </section>

      <section className="section-gap">
        <SectionHeading
          eyebrow="Why Choose StackEarn"
          title={<>Built to support app promotion, SEO, and future growth</>}
          description="A structured platform for product discovery, organic traffic, ad-ready trust pages, and the broader StackEarn brand ecosystem."
          center
        />
        <div className="mt-10">
          <FeaturesGrid />
        </div>
      </section>

      <section className="section-gap">
        <StatsBand />
      </section>

      <section className="section-gap">
        <GradientPanel className="p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <div className="section-eyebrow">Frequently Asked Questions</div>
              <h2 className="text-3xl font-black tracking-tight text-title">Answers users expect before they trust a downloader brand</h2>
              <p className="text-base leading-8 text-muted-foreground">
                This homepage FAQ supports SEO, clarity, and Google AdSense-friendly trust signals while keeping the experience concise.
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
