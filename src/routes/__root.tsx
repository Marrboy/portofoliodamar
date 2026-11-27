import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { PROFILE } from "@/data/portfolio";
import { THEME_STORAGE_KEY } from "@/hooks/use-theme";
import { CLOUDFLARE_ANALYTICS_TOKEN, SITE_DESCRIPTION, SITE_TITLE } from "../lib/site";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] px-5 text-[var(--ink)]">
      <div className="max-w-md border-y border-[var(--ink)]/25 py-14 text-center">
        <p className="font-serif text-[14px] italic text-[var(--ink)]">404</p>
        <h1 className="mt-6 font-display text-[clamp(42px,8vw,62px)] font-semibold leading-[1.05]">
          Page not found
        </h1>
        <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--body)]">
          The page you are looking for is unavailable or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex h-11 items-center rounded-full border border-[var(--ink)]/40 px-6 text-[13px] text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--button-bg)]/[0.06]"
          >
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] px-5 text-[var(--ink)]">
      <div className="max-w-md border-y border-[var(--ink)]/25 py-14 text-center">
        <h1 className="font-display text-[clamp(36px,6vw,48px)] font-semibold leading-tight">
          Page failed to load
        </h1>
        <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--body)]">
          Something went wrong while displaying this page. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center rounded-full bg-[var(--button-bg)] px-6 text-[13px] text-[var(--on-ink)] transition-colors hover:bg-[var(--button-hover)]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center rounded-full border border-[var(--ink)]/40 px-6 text-[13px] text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--button-bg)]/[0.06]"
          >
            Portfolio home
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
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: PROFILE.fullName },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#FFFFFF" },
      { property: "og:site_name", content: SITE_TITLE },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: CLOUDFLARE_ANALYTICS_TOKEN
      ? [
          {
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            defer: true,
            "data-cf-beacon": JSON.stringify({ token: CLOUDFLARE_ANALYTICS_TOKEN }),
          },
        ]
      : [],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeScript = `try{var k=${JSON.stringify(
  THEME_STORAGE_KEY,
)};var s=localStorage.getItem(k);var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"#000000":"#FFFFFF")}catch(e){}`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
