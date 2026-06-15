import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { StackEarnLayout } from "@/components/stackearn-site";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-title">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-title">Page not found</h2>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="nav-link nav-link-active inline-flex px-5 py-3">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-black tracking-tight text-title">This page didn’t load</h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Something went wrong while rendering this page. You can retry or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-shell btn-shell-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-shell btn-shell-outline">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "StackEarn Shorts Downloader" },
      {
        name: "description",
        content: "Download, save, and manage videos faster with StackEarn Shorts Downloader.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "StackEarn Shorts Downloader" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "StackEarn Shorts Downloader",
          url: "/",
          description: "Download, save, and manage videos faster with StackEarn Shorts Downloader.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <StackEarnLayout>
        <Outlet />
      </StackEarnLayout>
    </QueryClientProvider>
  );
}
