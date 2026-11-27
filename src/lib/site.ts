import { PROFILE } from "@/data/portfolio";
import { absoluteUrl, normalizeSiteUrl } from "./url";

const viteEnv = (typeof import.meta.env === "object" ? import.meta.env : {}) as Record<
  string,
  string | undefined
>;

export const SITE_URL = normalizeSiteUrl(
  viteEnv.VITE_SITE_URL,
  "https://portofoliodamar.lovable.app",
);

export const SITE_TITLE = `${PROFILE.fullName} — ${PROFILE.role}`;
export const SITE_DESCRIPTION =
  "Portfolio of Damar Galih Subiyanto, an Informatics graduate and Junior Web Developer working with React.js, Tailwind CSS, Express.js, PostgreSQL, Python, and data analysis.";

export const CLOUDFLARE_ANALYTICS_TOKEN = (viteEnv.VITE_CLOUDFLARE_ANALYTICS_TOKEN ?? "").trim();

export const toAbsoluteUrl = (path: string) => absoluteUrl(SITE_URL, path);
