import { Link, useRouterState } from "@tanstack/react-router";
import {
  AppWindow,
  ArrowRight,
  BookOpen,
  ChevronRight,
  CircleCheckBig,
  CircleHelp,
  Clock3,
  Download,
  FileBadge,
  FileText,
  Globe,
  Lock,
  Mail,
  Menu,
  MessageCircleMore,
  Scale,
  Shield,
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

type HeroVariant =
  | "default"
  | "about"
  | "apps"
  | "blog"
  | "faq"
  | "contact"
  | "privacy"
  | "terms"
  | "disclaimer";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

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
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/88 backdrop-blur-xl">
        <div className="container grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between lg:gap-6">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} home`}>
            <div className="brand-mark">
              <Download className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-xl font-black tracking-tight text-title">
                Stack<span className="text-primary">Earn</span>
              </div>
              <div className="truncate text-sm text-muted-foreground">Shorts Downloader</div>
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

          <div className="hidden shrink-0 lg:block">
            <Button asChild variant="hero" size="xl">
              <a href="#apps">Download App</a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-soft lg:hidden"
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
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
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
              <div className="brand-mark">
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
          <FooterColumn title="Apps" links={apps.map((app) => ({ label: app.name, to: "/apps" }))} />
        </div>
        <div className="footer-divider">
          <div className="container footer-legal">
            <p>© 2026 StackEarn IT Solutions. All rights reserved.</p>
            <p>Made for the StackEarn ecosystem.</p>
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

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-row">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="breadcrumb-item-wrap">
          {item.to ? (
            <Link to={item.to} className="breadcrumb-item">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumb-item breadcrumb-item-current">{item.label}</span>
          )}
          {index < items.length - 1 ? <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" /> : null}
        </span>
      ))}
    </nav>
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

export function PageHero({
  breadcrumbs,
  badge,
  eyebrow,
  title,
  description,
  pills = [],
  variant = "default",
}: {
  breadcrumbs?: BreadcrumbItem[];
  badge?: ReactNode;
  eyebrow?: string;
  title: ReactNode;
  description: string;
  pills?: Array<{ icon: LucideIcon; label: string }>;
  variant?: HeroVariant;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
        {badge ? <div className="mt-5">{badge}</div> : null}
        <div className="mt-5">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </div>
        {pills.length ? (
          <div className="hero-metric-row">
            {pills.map((pill) => {
              const Icon = pill.icon;
              return (
                <div key={pill.label} className="info-pill">
                  <div className="info-pill-icon">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="page-hero-visual">
        <HeroVisual variant={variant} />
      </div>
    </section>
  );
}

function HeroVisual({ variant }: { variant: HeroVariant }) {
  if (variant === "blog") {
    return (
      <div className="visual-stage">
        <div className="visual-bubble" />
        <div className="visual-card visual-card-large notebook-card">
          <div className="notebook-rings">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="notebook-body">
            <BookOpen className="h-12 w-12 text-primary" />
            <div>
              <div className="text-3xl font-black text-title">BLOG</div>
              <div className="mt-3 space-y-2">
                <div className="visual-line" />
                <div className="visual-line short" />
                <div className="visual-line tiny" />
              </div>
            </div>
          </div>
        </div>
        <div className="floating-chip floating-chip-left">
          <div className="icon-chip icon-chip-gradient">
            <Download className="h-5 w-5" />
          </div>
        </div>
        <div className="floating-chip floating-chip-right soft">
          <div className="icon-chip icon-chip-soft">
            <MessageCircleMore className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "faq") {
    return (
      <div className="visual-stage">
        <div className="visual-bubble" />
        <div className="visual-card faq-badge-card">
          <CircleHelp className="h-16 w-16 text-primary-foreground" />
          <div className="text-4xl font-black text-primary-foreground">FAQ</div>
        </div>
        <div className="floating-chip floating-chip-left coral">
          <div className="icon-chip icon-chip-soft">
            <CircleHelp className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="floating-chip floating-chip-right soft">
          <div className="icon-chip icon-chip-soft">
            <MessageCircleMore className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className="visual-stage">
        <div className="visual-bubble" />
        <div className="visual-card visual-mail-card">
          <div className="mail-envelope" />
          <div className="mail-sheet" />
        </div>
        <div className="floating-chip floating-chip-right">
          <div className="icon-chip icon-chip-gradient">
            <MessageCircleMore className="h-5 w-5" />
          </div>
        </div>
        <div className="floating-chip floating-chip-left soft">
          <div className="icon-chip icon-chip-soft">
            <Mail className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "privacy" || variant === "terms" || variant === "disclaimer") {
    const MainIcon = variant === "privacy" ? Lock : variant === "terms" ? Scale : Shield;
    const titleText = variant === "privacy" ? "PRIVACY" : variant === "terms" ? "TERMS" : "NOTICE";

    return (
      <div className="visual-stage">
        <div className="visual-bubble" />
        <div className="visual-card legal-visual-card">
          <div className="legal-visual-main">
            <div className="legal-icon-block">
              <MainIcon className="h-12 w-12 text-primary-foreground" />
            </div>
            <div className="legal-sheet">
              <div className="text-2xl font-black text-primary">{titleText}</div>
              <div className="mt-4 space-y-3">
                <div className="visual-line" />
                <div className="visual-line short" />
                <div className="visual-line" />
                <div className="visual-line tiny" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-device hero-device-about">
      <div className="device-glow" />
      <div className="floating-card floating-card-left">
        <div className="icon-chip icon-chip-soft">
          {variant === "apps" ? <AppWindow className="h-5 w-5 text-primary" /> : <Download className="h-5 w-5 text-primary" />}
        </div>
        <div>
          <div className="text-sm font-semibold text-title">
            {variant === "apps" ? "Android app ecosystem" : "Fast video workflow"}
          </div>
          <div className="text-xs text-muted-foreground">Smooth, product-style experience</div>
        </div>
      </div>
      <div className="floating-card floating-card-right">
        <div className="icon-chip icon-chip-soft">
          {variant === "about" ? <Globe className="h-5 w-5 text-primary" /> : <Sparkles className="h-5 w-5 text-primary" />}
        </div>
        <div>
          <div className="text-sm font-semibold text-title">
            {variant === "about" ? "Growing digital brand" : "Clean and premium UI"}
          </div>
          <div className="text-xs text-muted-foreground">Consistent on every page</div>
        </div>
      </div>
      <div className="device-frame">
        <div className="device-screen">
          <div className="screen-header">
            {variant === "about" ? "StackEarn Apps" : variant === "apps" ? "Top Downloaders" : "Shorts Downloader"}
          </div>
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
  );
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
          <article key={feature.title} className="feature-card reveal-up">
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
    <Accordion type="single" collapsible className="rounded-[1.75rem] border border-border/70 bg-card p-4 shadow-soft">
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
            <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:flex sm:flex-wrap sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                <div className="icon-chip shrink-0" style={{ backgroundColor: app.accent }}>
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="min-w-0 space-y-2">
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
          <h2 className="text-xl font-bold text-title">Search Blog</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_auto]">
            <input className="field-input" placeholder="Search articles..." aria-label="Search blog" />
            <Button variant="hero" size="lg">Search</Button>
          </div>
        </aside>
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
            {faqPageItems.slice(0, 4).map((item) => (
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

export function LegalPageContent({
  sections,
  supportTitle,
  supportText,
}: {
  sections: LegalSection[];
  supportTitle: string;
  supportText: string;
}) {
  return (
    <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)] xl:items-start">
      <div className="space-y-6 xl:sticky xl:top-24">
        <aside className="sidebar-card">
          <div className="flex items-center gap-3">
            <div className="icon-chip icon-chip-soft">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-title">On This Page</div>
          </div>
          <div className="mt-5 space-y-2">
            {sections.map((section, index) => (
              <div key={section.title} className={cn("legal-nav-item", index === 0 && "legal-nav-item-active")}>
                <span className="legal-nav-index">{index + 1}.</span>
                <span>{section.title}</span>
              </div>
            ))}
          </div>
        </aside>
        <aside className="sidebar-card">
          <div className="flex items-center gap-3">
            <div className="icon-chip icon-chip-soft">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-title">{supportTitle}</div>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{supportText}</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>
            <div className="text-muted-foreground">{site.domain}</div>
          </div>
        </aside>
      </div>

      <GradientPanel className="p-6 lg:p-8">
        <LegalCards sections={sections} />
      </GradientPanel>
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

export const legalHeroPills = [
  { icon: FileBadge, label: "Clear policy sections" },
  { icon: Shield, label: "Trust-focused layout" },
  { icon: Clock3, label: "Easy to review" },
];

export const contactHeroPills = [
  { icon: Mail, label: "Quick response" },
  { icon: Shield, label: "Reliable support" },
  { icon: Sparkles, label: "Friendly experience" },
];

export const faqHeroPills = [
  { icon: CircleHelp, label: "Common answers" },
  { icon: Download, label: "Download help" },
  { icon: Shield, label: "Safe usage guidance" },
];

export const blogHeroPills = [
  { icon: BookOpen, label: "Guides" },
  { icon: Sparkles, label: "Updates" },
  { icon: Globe, label: "SEO-ready content" },
];
