import { zodResolver } from "@hookform/resolvers/zod";
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
  Link2,
  LoaderCircle,
  Lock,
  Mail,
  Menu,
  MessageCircleMore,
  MessageSquareText,
  Scale,
  Search,
  Send,
  Shield,
  Sparkles,
  Star,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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

const downloaderSchema = z.object({
  url: z.string().trim().url("Please enter a valid video link."),
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(120, "Email is too long."),
  subject: z.string().trim().min(3, "Please enter a subject.").max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Please enter a complete message.").max(1000, "Message is too long."),
});

const searchSchema = z.object({
  query: z.string().trim().min(2, "Please enter at least 2 characters.").max(80, "Search query is too long."),
});

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function FormOverlay({ open, label }: { open: boolean; label: string }) {
  if (!open) return null;

  return (
    <div className="form-overlay" role="status" aria-live="polite" aria-label={label}>
      <div className="form-overlay-card">
        <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
        <div className="text-base font-semibold text-title">{label}</div>
      </div>
    </div>
  );
}

function RatingStars({ value }: { value: number }) {
  return (
    <div className="rating-row" aria-label={`${value} star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn("h-3.5 w-3.5", index < Math.round(value) ? "fill-current text-[var(--star-color)]" : "text-[var(--star-muted)]")}
        />
      ))}
      <span className="rating-value">{value.toFixed(1)}</span>
    </div>
  );
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
      <header className="site-header">
        <div className="container header-shell">
          <Link to="/" className="site-brand" aria-label={`${site.name} home`}>
            <div className="brand-mark brand-mark-header">
              <Download className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="site-brand-title">
                Stack<span className="text-primary">Earn</span>
              </div>
              <div className="site-brand-subtitle">Shorts Downloader</div>
            </div>
          </Link>

          <nav className="site-nav hidden lg:flex">
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
            <Button asChild variant="hero" size="xl" className="header-download-btn">
              <a href="#apps">Download App</a>
            </Button>
          </div>

          <button
            type="button"
            className="mobile-menu-btn lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mobile-nav-shell lg:hidden">
            <div className="container mobile-nav-content">
              {primaryNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild variant="hero" size="xl" className="w-full">
                <a href="#apps">Download App</a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="space-y-5">
            <Link to="/" className="site-brand" aria-label={`${site.name} home`}>
              <div className="brand-mark">
                <Download className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="footer-brand-title">
                  Stack<span className="text-primary">Earn</span>
                </div>
                <div className="footer-subtitle">Shorts Downloader</div>
              </div>
            </Link>
            <p className="footer-copy max-w-sm">Fast, secure and easy way to download Shorts videos and manage your downloads.</p>
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

          <FooterColumn title="Quick Links" links={footerLinks.slice(0, 6)} />
          <FooterColumn title="Company" links={footerLinks.slice(4)} />
          <FooterColumn title="Apps" links={apps.map((app) => ({ label: app.name, to: "/apps" }))} />
        </div>
        <div className="footer-divider">
          <div className="container footer-legal">
            <p>© 2026 StackEarn IT Solutions. All Rights Reserved.</p>
            <p>Made with ❤️ by StackEarn</p>
          </div>
        </div>
      </footer>
      <WhatsAppFloatingButton />
    </div>
  );
}

export function WhatsAppFloatingButton() {
  const phone = "917850972904";
  const message =
    "Hello StackEarn Team,\n\nI am using your Shorts Downloader website and I have a query/feedback regarding the service.\n\nPlease assist me.\n\nThank you.";
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab-tooltip">Need Help? Chat on WhatsApp</span>
      <span className="whatsapp-fab-pulse" aria-hidden="true" />
      <svg viewBox="0 0 32 32" className="whatsapp-fab-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.11 17.39c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.32 0 1.37.99 2.69 1.13 2.87.14.18 1.95 2.97 4.72 4.17.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.31.23-.65.23-1.2.16-1.31-.07-.12-.25-.18-.53-.32zM16.02 4C9.39 4 4 9.39 4 16c0 2.12.55 4.11 1.52 5.85L4 28l6.32-1.65A11.94 11.94 0 0 0 16.02 28C22.65 28 28 22.62 28 16S22.65 4 16.02 4z"
        />
      </svg>
    </a>
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
    <div className="hero-badge">
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
          "text-balance text-4xl font-black tracking-tight text-title md:text-5xl lg:text-[3.8rem]",
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
      <div className="visual-stage visual-stage-blog">
        <div className="visual-bubble" />
        <div className="notebook-card-hero">
          <div className="notebook-ring-row">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="notebook-sheet-hero">
            <div className="text-5xl font-black text-primary">BLOG</div>
            <div className="mt-5 space-y-3">
              <div className="visual-line" />
              <div className="visual-line short" />
              <div className="visual-line tiny" />
            </div>
          </div>
        </div>
        <div className="floating-chip floating-chip-left coral">
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
        <div className="faq-hero-card">
          <div className="faq-hero-bubble">
            <CircleHelp className="h-14 w-14 text-primary-foreground" />
          </div>
          <div className="text-5xl font-black text-primary-foreground">FAQ</div>
        </div>
        <div className="floating-chip floating-chip-left coral">
          <div className="icon-chip icon-chip-gradient">
            <CircleHelp className="h-5 w-5" />
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
        <div className="contact-hero-graphic">
          <div className="chat-orb" />
          <div className="mail-envelope mail-envelope-large" />
          <div className="mail-sheet mail-sheet-large" />
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
    const titleText = variant === "privacy" ? "PRIVACY POLICY" : variant === "terms" ? "TERMS & CONDITIONS" : "DISCLAIMER";

    return (
      <div className="visual-stage">
        <div className="visual-bubble" />
        <div className="legal-hero-graphic">
          <div className="legal-shield-block">
            <MainIcon className="h-16 w-16 text-primary-foreground" />
          </div>
          <div className="legal-doc-block">
            <div className="legal-doc-clip" />
            <div className="legal-doc-title">{titleText}</div>
            <div className="mt-4 space-y-3">
              <div className="visual-line" />
              <div className="visual-line short" />
              <div className="visual-line" />
              <div className="visual-line tiny" />
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
  );
}

const DOWNLOAD_API = "https://shortsapi.stackearn.com/api/download";

/**
 * Extract a downloadable URL from a flexible API response shape.
 * Supports common keys: downloadUrl, url, link, video, data.url, etc.
 */
function pickDownloadUrl(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const obj = payload as Record<string, unknown>;
  const candidates = [
    obj.downloadUrl,
    obj.download_url,
    obj.url,
    obj.link,
    obj.video,
    obj.videoUrl,
    (obj.data as Record<string, unknown> | undefined)?.url,
    (obj.data as Record<string, unknown> | undefined)?.downloadUrl,
    (obj.result as Record<string, unknown> | undefined)?.url,
  ];
  for (const c of candidates) {
    if (typeof c === "string" && c.startsWith("http")) return c;
  }
  return null;
}

/**
 * Fetches the remote video as a Blob and triggers a browser download.
 * Falls back to opening the URL in a new tab when CORS blocks the fetch.
 */
async function triggerDownload(fileUrl: string, suggestedName: string, onProgress?: (pct: number) => void) {
  try {
    const res = await fetch(fileUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const total = Number(res.headers.get("content-length") || 0);
    const reader = res.body?.getReader();
    if (!reader) throw new Error("No stream");
    const chunks: Uint8Array[] = [];
    let loaded = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        loaded += value.length;
        if (total && onProgress) onProgress(Math.round((loaded / total) * 100));
      }
    }
    const blob = new Blob(chunks as BlobPart[], { type: res.headers.get("content-type") || "video/mp4" });
    const objUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objUrl;
    a.download = suggestedName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(objUrl), 1500);
  } catch {
    // CORS or network fallback — open in new tab so the browser saves it
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = suggestedName;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

export function DownloaderForm() {
  const form = useForm<z.infer<typeof downloaderSchema>>({
    resolver: zodResolver(downloaderSchema),
    defaultValues: { url: "" },
  });
  const [progress, setProgress] = useState<number | null>(null);

  const onSubmit = form.handleSubmit(async ({ url }) => {
    setProgress(null);
    try {
      const { getDeviceId } = await import("@/lib/device-id");
      const deviceId = getDeviceId();

      const res = await fetch(DOWNLOAD_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ deviceId, url }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed (${res.status})`);
      }

      const data = await res.json().catch(() => ({}));
      const downloadUrl = pickDownloadUrl(data);
      if (!downloadUrl) {
        toast.error("No downloadable link returned", {
          description: "The server didn't return a video URL. Please try a different link.",
        });
        return;
      }

      toast.success("Starting download...", { description: "Your file is being saved." });
      const fileName = `stackearn-${Date.now()}.mp4`;
      setProgress(0);
      await triggerDownload(downloadUrl, fileName, (p) => setProgress(p));
      setProgress(null);
      toast.success("Download complete", { description: "Check your Downloads folder or gallery." });
      form.reset();
    } catch (err) {
      setProgress(null);
      const message = err instanceof Error ? err.message : "Unknown error";
      if (typeof navigator !== "undefined" && !navigator.onLine) {
        toast.error("You're offline", { description: "Check your internet connection and try again." });
      } else {
        toast.error("Unable to process link", { description: message.slice(0, 140) });
      }
    }
  });

  const busy = form.formState.isSubmitting;
  const overlayLabel = progress != null ? `Downloading... ${progress}%` : "Fetching your video...";

  return (
    <>
      <FormOverlay open={busy} label={overlayLabel} />
      <form className="download-shell" id="downloader" onSubmit={onSubmit} noValidate>
        <div className="download-input-row">
          <div className="download-input-wrap">
            <Link2 className="download-input-icon" />
            <input
              aria-label="Paste shorts video link"
              placeholder="Paste Shorts Video Link Here..."
              className="download-input"
              {...form.register("url")}
            />
          </div>
          <Button type="submit" variant="hero" size="xl" className="download-submit-btn" disabled={busy}>
            {busy ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {busy && progress != null ? `${progress}%` : "Download"}
          </Button>
        </div>
        {form.formState.errors.url ? <p className="field-error">{form.formState.errors.url.message}</p> : null}
        <p className="text-sm leading-6 text-muted-foreground">
          By using our service, you accept our{" "}
          <Link to="/terms-and-conditions" className="text-primary hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </>
  );
}

export function AppShowcase() {
  return (
    <div className="app-showcase-grid" id="apps">
      <div className="app-feature-card app-feature-card-compact">
        <div className="app-feature-compact-icon">
          <Download className="h-9 w-9" />
        </div>
        <div className="app-feature-compact-body">
          <p className="app-feature-eyebrow">Try Our Android Apps</p>
          <h2 className="app-feature-title">Faster, Easier &amp; Better</h2>
          <p className="app-feature-desc">
            Experience the best video downloading experience with our android apps.
          </p>
          <Button asChild variant="hero" size="lg" className="app-feature-cta">
            <Link to="/apps">
              Explore Apps
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {apps.map((app) => {
        const Icon = app.icon;
        const [primaryName, ...rest] = app.name.split("–").map((s) => s.trim());
        const subtitle = rest.join(" ").trim();
        return (
          <article key={app.slug} className="app-mini-card app-mini-card-compact">
            <div className="app-mini-icon-compact" style={{ background: app.accent }}>
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="app-mini-text">
              <h3 className="app-mini-title-compact">{primaryName}</h3>
              {subtitle ? <p className="app-mini-subtitle">{subtitle}</p> : null}
            </div>
            <RatingStars value={app.rating} />
          </article>
        );
      })}
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <div className="feature-strip-grid">
      {homeHighlights.map((feature) => {
        const Icon = feature.icon;
        return (
          <article key={feature.title} className="feature-card feature-card-strip reveal-up">
            <div className="icon-chip icon-chip-soft">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
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
          <AccordionContent className="text-sm leading-7 text-muted-foreground">{item.answer}</AccordionContent>
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
                <div className="icon-chip shrink-0" style={{ background: app.accent }}>
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
            <div className="mt-5">
              <RatingStars value={app.rating} />
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
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: "" },
  });

  const onSubmit = form.handleSubmit(async ({ query }) => {
    try {
      await wait(900);
      toast.success("Search submitted", {
        description: `We are preparing results for “${query}”.`,
      });
      form.reset();
    } catch {
      toast.error("Search failed", {
        description: "Please try again.",
      });
    }
  });

  return (
    <>
      <FormOverlay open={form.formState.isSubmitting} label="Searching articles..." />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)]">
        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="blog-card blog-card-polished">
              <div className={cn("blog-thumb blog-thumb-photo", `blog-thumb-${(index % 4) + 1}`)} />
              <div className="space-y-3 min-w-0">
                <div className="badge-soft">{post.category}</div>
                <h2 className="text-2xl font-bold tracking-tight text-title">{post.title}</h2>
                <p className="text-base leading-7 text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="pt-1 text-sm font-semibold text-primary">Read More →</div>
              </div>
            </article>
          ))}
        </div>
        <div className="space-y-6">
          <aside className="sidebar-card">
            <h2 className="text-xl font-bold text-title">Search Blog</h2>
            <form className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] xl:grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_auto]" onSubmit={onSubmit} noValidate>
              <div className="field-input-wrap">
                <Search className="field-leading-icon" />
                <input className="field-input field-input-with-icon" placeholder="Search articles..." aria-label="Search blog" {...form.register("query")} />
              </div>
              <Button type="submit" variant="hero" size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Search"}
              </Button>
            </form>
            {form.formState.errors.query ? <p className="field-error mt-3">{form.formState.errors.query.message}</p> : null}
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
            <h2 className="text-xl font-bold text-title">Popular Articles</h2>
            <div className="mt-5 space-y-3">
              {blogPosts.slice(0, 4).map((post, index) => (
                <div key={post.slug} className="popular-article-row">
                  <div className={cn("popular-article-thumb", `blog-thumb-${(index % 4) + 1}`)} />
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-title">{post.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{post.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
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
            <div className="text-muted-foreground">https://{site.domain}</div>
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
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await wait(1400);
      toast.success("Message sent successfully", {
        description: `Thanks ${values.name}, our team will contact you soon.`,
      });
      form.reset();
    } catch {
      toast.error("Message could not be sent", {
        description: "Please try again later.",
      });
    }
  });

  return (
    <>
      <FormOverlay open={form.formState.isSubmitting} label="Sending your message..." />
      <form className="contact-card contact-form-grid" onSubmit={onSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="field-input-wrap">
              <UserRound className="field-leading-icon" />
              <input className="field-input field-input-with-icon" placeholder="Your Name" aria-label="Name" {...form.register("name")} />
            </div>
            {form.formState.errors.name ? <p className="field-error mt-2">{form.formState.errors.name.message}</p> : null}
          </div>
          <div>
            <div className="field-input-wrap">
              <Mail className="field-leading-icon" />
              <input className="field-input field-input-with-icon" placeholder="Your Email" aria-label="Email" {...form.register("email")} />
            </div>
            {form.formState.errors.email ? <p className="field-error mt-2">{form.formState.errors.email.message}</p> : null}
          </div>
        </div>

        <div>
          <div className="field-input-wrap mt-4">
            <FileText className="field-leading-icon" />
            <input className="field-input field-input-with-icon" placeholder="Subject" aria-label="Subject" {...form.register("subject")} />
          </div>
          {form.formState.errors.subject ? <p className="field-error mt-2">{form.formState.errors.subject.message}</p> : null}
        </div>

        <div>
          <div className="field-input-wrap mt-4 field-textarea-wrap">
            <MessageSquareText className="field-leading-icon field-leading-icon-top" />
            <textarea
              className="field-input field-input-with-icon field-textarea mt-0 min-h-40 resize-none"
              placeholder="Your Message"
              aria-label="Message"
              {...form.register("message")}
            />
          </div>
          {form.formState.errors.message ? <p className="field-error mt-2">{form.formState.errors.message.message}</p> : null}
        </div>

        <Button type="submit" variant="hero" size="xl" className="mt-5 w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Send Message
        </Button>
      </form>
    </>
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
