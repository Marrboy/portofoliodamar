import { ArrowUp } from "lucide-react";

import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { Wordmark } from "./ui";

export function FooterSection() {
  return (
    <footer className="bg-[var(--surface)] py-12 text-[var(--ink)]">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[40ch] font-serif text-[17px] leading-[1.5] font-normal italic text-[var(--body)]">
              {PROFILE.headline}. Based in {PROFILE.location}.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
              <a
                href={`mailto:${PROFILE.email}`}
                className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
              >
                Email
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
              >
                Instagram
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
              >
                GitHub
              </a>
              <a
                href="/cv"
                className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
              >
                CV
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13px] text-[var(--body)] transition-colors hover:text-[var(--ink)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--hairline)] pt-6 text-[12px] text-[var(--faint)]">
          <span>
            © {new Date().getFullYear()} {PROFILE.fullName}.
          </span>
          <span>{PROFILE.role.replace(" | ", " & ")}</span>
          <a
            href="#beranda"
            className="inline-flex items-center gap-2 transition-colors hover:text-[var(--ink)]"
          >
            Back to top
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
