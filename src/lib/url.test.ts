import { describe, expect, test } from "bun:test";

import { absoluteUrl, normalizeSiteUrl } from "./url";

describe("normalizeSiteUrl", () => {
  test("uses fallback when value is empty", () => {
    expect(normalizeSiteUrl(undefined, "https://example.com/")).toBe("https://example.com");
    expect(normalizeSiteUrl("   ", "https://example.com")).toBe("https://example.com");
  });

  test("adds https and keeps a configured subpath", () => {
    expect(normalizeSiteUrl("portfolio.example.com/", "https://fallback.example.com")).toBe(
      "https://portfolio.example.com",
    );
    expect(normalizeSiteUrl("https://example.com/portfolio/", "https://fallback.com")).toBe(
      "https://example.com/portfolio",
    );
  });

  test("rejects unsupported protocols and malformed values", () => {
    expect(normalizeSiteUrl("javascript:alert(1)", "https://fallback.com")).toBe(
      "https://fallback.com",
    );
    expect(normalizeSiteUrl("http://[", "https://fallback.com")).toBe("https://fallback.com");
  });
});

describe("absoluteUrl", () => {
  test("joins base and path exactly once", () => {
    expect(absoluteUrl("https://example.com", "/images/hero.webp")).toBe(
      "https://example.com/images/hero.webp",
    );
    expect(absoluteUrl("https://example.com/", "images/hero.webp")).toBe(
      "https://example.com/images/hero.webp",
    );
  });
});
