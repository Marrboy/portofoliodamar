import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

import { NAV_LINKS, PROFILE } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";

const initials = PROFILE.fullName
  .split(" ")
  .map((part) => part.charAt(0))
  .slice(0, 2)
  .join("");

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  const primaryLinks = NAV_LINKS.filter((link) => link.primary);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <div className="w-full max-w-[880px]">
        <div className="pointer-events-auto grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-full bg-[var(--pill-bg)] py-2.5 pr-2.5 pl-3 text-[var(--pill-text)] shadow-[0_20px_50px_-24px_var(--shadow)] sm:gap-4 sm:pr-3 sm:pl-4">
          <a
            href="#beranda"
            aria-label={`${PROFILE.fullName} — back to top`}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--pill-hover)] text-[12px] font-bold tracking-[0.06em] transition-colors hover:bg-[var(--pill-line)]"
          >
            {initials}
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center justify-self-center gap-6 lg:flex"
          >
            {primaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 text-[12.5px] text-[var(--pill-text)] opacity-70 transition-opacity hover:opacity-100"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--pill-text)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-1.5 sm:gap-2">
            <a
              href="#contact"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-[var(--cta-bg)] px-4 text-[12.5px] font-semibold text-[var(--cta-text)] transition-opacity hover:opacity-85 sm:inline-flex"
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={theme === "dark"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--pill-line)] text-[var(--pill-text)] transition-colors hover:bg-[var(--pill-hover)]"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="floating-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--pill-line)] text-[var(--pill-text)] transition-colors hover:bg-[var(--pill-hover)] lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <m.nav
              id="floating-navigation"
              aria-label="Mobile navigation"
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto mt-3 rounded-3xl bg-[var(--pill-bg)] p-4 text-[var(--pill-text)] shadow-[0_20px_50px_-24px_var(--shadow)] lg:hidden"
            >
              <ul className="grid gap-1 sm:grid-cols-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-[14px] text-[var(--pill-text)] opacity-80 transition-opacity hover:bg-[var(--pill-hover)] hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/cv"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-[14px] font-semibold text-[var(--pill-text)] transition-colors hover:bg-[var(--pill-hover)]"
                  >
                    View CV
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </m.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
