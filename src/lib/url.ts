export function normalizeSiteUrl(value: string | undefined, fallback: string): string {
  const cleanFallback = fallback.replace(/\/+$/, "");
  const trimmed = (value ?? "").trim();
  if (!trimmed) return cleanFallback;

  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return cleanFallback;
    if (!url.hostname) return cleanFallback;
    return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
  } catch {
    return cleanFallback;
  }
}

export function absoluteUrl(baseUrl: string, path: string): string {
  const base = baseUrl.replace(/\/+$/, "");
  if (!path) return base;
  return path.startsWith("/") ? `${base}${path}` : `${base}/${path}`;
}
