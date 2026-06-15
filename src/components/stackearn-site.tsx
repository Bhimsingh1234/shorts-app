import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  CircleCheckBig,
  Download,
  Menu,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  apps,
  blogCategories,
  blogPosts,
  faqPageItems,
  footerLinks,
  homeFaqs,
  homeHighlights,
  primaryNav,
  site,
  socialLinks,
  stats,
  type FAQItem,
  type LegalSection,
} from "@/lib/stackearn-content";
import { cn } from "@/lib/utils";

export function StackEarnLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () =>
      primaryNav.map((item) => ({
        ...item,
        active:
          item.to === "/"
            ? pathname === "/"
            : item.to.startsWith("/#")
              ? pathname === "/"
              : pathname.startsWith(item.to),
      })),
    [pathname],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container flex h-18 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
              <Download className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-title">
                Stack<span className="text-primary">Earn</span>
              </div>
              <div className="text-sm text-muted-foreground">Shorts Downloader</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn("nav-link", item.active && "nav-link-active")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="xl">
              <a href="#apps">Download App</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <div className="container flex flex-col gap-2 py-4">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="xl">
                <a href="#apps">Download App</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-border/70 bg-footer text-footer-foreground">
        <div className="container grid gap-10 py-16 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Download className="h-5 w-5" />
              </div>
              <div>
                <div className="footer-brand-title">
                  Stack<span className="text-primary">Earn</span>
                </div>
                <div className="footer-subtitle">Shorts Downloader</div>
              </div>
            </Link>
            <p className="footer-copy max-w-sm">{site.tagline}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="footer-social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={footerLinks.slice(0, 5)} />
          <FooterColumn title="Company" links={footerLinks.slice(5)} />
          <FooterColumn
            title="Apps"
            links={apps.map((app) => ({ label: app.name, to: "/apps" }))}
          />
        </div>
        <div className="footer-divider">
          <div className="container footer-legal">
            <p>© 2026 StackEarn IT Solutions. All rights reserved.</p>
            <p>Built for the StackEarn ecosystem.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<{ label: string; to: string }> }) {
  return (
    <div>
      <h2 className="footer-column-title">{title}</h2>
      <div className="mt-5 space-y-3">
        {links.map((link) => (
          <Link key={`${title}-${link.label}`} to={link.to} className="footer-link">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function HeroBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-secondary px-4 py-2 text-sm font-semibold text-primary shadow-soft">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("space-y-4", center && "text-center")}>
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      <h1
        className={cn(
          "text-balance text-4xl font-black tracking-tight text-title md:text-5xl",
          center && "mx-auto max-w-3xl",
        )}
      >
        {title}
      </h1>
      {description ? (
        <p className={cn("max-w-2xl text-lg leading-8 text-muted-foreground", center && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function GradientPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={cn("panel-soft", className)}>{children}</section>;
}

export function DownloaderForm() {
  return (
    <div className="download-shell" id="downloader">
      <div className="download-input-row">
        <input
          aria-label="Paste shorts video link"
          placeholder="Paste Shorts video URL here..."
          className="download-input"
        />
        <Button variant="hero" size="xl" className="min-w-40">
          Download
        </Button>
      </div>
      <p className="text-sm leading-6 text-muted-foreground">
        By using this service, you accept our{" "}
        <Link to="/terms-and-conditions" className="text-primary hover:underline">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link to="/privacy-policy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

export function AppShowcase() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.15fr_repeat(4,minmax(0,1fr))]" id="apps">
      <div className="app-feature-card">
        <div className="icon-chip icon-chip-gradient">
          <Download className="h-6 w-6" />
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-primary">Try Our Android Apps</p>
          <h2 className="text-3xl font-black tracking-tight text-title">Faster, Easier & Better</h2>
          <p className="text-base leading-7 text-muted-foreground">
            Explore the StackEarn ecosystem and discover the right tool for shorts, reels, statuses, and downloads.
          </p>
        </div>
        <Button asChild variant="hero" size="xl">
          <Link to="/apps">
            Explore Apps
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {apps.map((app) => {
        const Icon = app.icon;
        return (
          <article key={app.slug} className="app-mini-card">
            <div className="icon-chip" style={{ backgroundColor: app.accent }}>
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-title">{app.name}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{app.description}</p>
              <p className="text-sm font-semibold text-primary">{app.downloads}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {homeHighlights.map((feature) => {
        const Icon = feature.icon;
        return (
          <article key={feature.title} className="feature-card">
            <div className="icon-chip icon-chip-soft">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-title">{feature.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{feature.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="stats-band">
      {stats.map((item) => (
        <div key={item.label} className="space-y-2 text-center">
          <div className="stats-value">{item.value}</div>
          <div className="stats-label">{item.label}</div>
        </div>
      ))}
    </section>
  );
}

export function FAQAccordion({ items = homeFaqs }: { items?: FAQItem[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-3xl border border-border/70 bg-card p-4 shadow-soft">
      {items.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={item.question} className="border-border/70 px-3">
          <AccordionTrigger className="py-5 text-base font-semibold text-title hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-7 text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function AppsGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {apps.map((app) => {
        const Icon = app.icon;
        return (
          <article key={app.slug} className="product-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="icon-chip" style={{ backgroundColor: app.accent }}>
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="badge-soft">{app.badge}</div>
                  <h2 className="text-2xl font-black tracking-tight text-title">{app.name}</h2>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground">{app.description}</p>
                </div>
              </div>
              <div className="rounded-full border border-primary/15 bg-secondary px-4 py-2 text-sm font-semibold text-primary">
                {app.downloads}
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {app.features.map((feature) => (
                <div
                  key={feature}
                  className="inline-flex items-center gap-3 rounded-2xl border border-border/70 bg-background px-4 py-4 text-sm font-medium text-foreground"
                >
                  <CircleCheckBig className="h-4 w-4 text-primary" />
                  {feature}
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function BlogGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
      <div className="space-y-4">
        {blogPosts.map((post, index) => (
          <article key={post.slug} className="blog-card">
            <div className={cn("blog-thumb", `blog-thumb-${(index % 4) + 1}`)} />
            <div className="space-y-3">
              <div className="badge-soft">{post.category}</div>
              <h2 className="text-2xl font-bold tracking-tight text-title">{post.title}</h2>
              <p className="text-base leading-7 text-muted-foreground">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="space-y-6">
        <aside className="sidebar-card">
          <h2 className="text-xl font-bold text-title">Categories</h2>
          <div className="mt-5 space-y-3">
            {blogCategories.map((category) => (
              <div key={category.title} className="rounded-2xl border border-border/70 bg-background px-4 py-4">
                <div className="text-base font-semibold text-title">{category.title}</div>
                <div className="mt-1 text-sm leading-6 text-muted-foreground">{category.description}</div>
              </div>
            ))}
          </div>
        </aside>
        <aside className="sidebar-card">
          <h2 className="text-xl font-bold text-title">Popular Questions</h2>
          <div className="mt-5 space-y-3">
            {faqPageItems.slice(0, 5).map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-border/70 bg-background px-4 py-4 text-sm leading-6 text-muted-foreground"
              >
                <div className="font-semibold text-title">{item.question}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

export function LegalCards({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="grid gap-4">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <article key={section.title} className="legal-row">
            <div className="icon-chip icon-chip-soft">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-title">{section.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{section.body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ContactFormShell() {
  return (
    <div className="contact-card">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="field-input" placeholder="Your Name" aria-label="Name" />
        <input className="field-input" placeholder="Your Email" aria-label="Email" />
      </div>
      <input className="field-input mt-4" placeholder="Subject" aria-label="Subject" />
      <textarea className="field-input mt-4 min-h-40 resize-none" placeholder="Your Message" aria-label="Message" />
      <Button variant="hero" size="xl" className="mt-5 w-full">
        Send Message
      </Button>
    </div>
  );
}
