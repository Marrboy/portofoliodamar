import type { LucideIcon } from "lucide-react";
import { Code2, Database, Palette, Server, Sigma, Sparkles } from "lucide-react";

import { SKILL_CATEGORIES, type SkillCategory } from "@/data/portfolio";
import { Reveal, SectionHeading, SectionLabel, SerifEm } from "./ui";

// Every card is backed by a CV skill category — no invented services.
const SERVICE_IDS = ["frontend", "backend", "database", "uiux", "data", "ai"] as const;
const ICONS: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  uiux: Palette,
  data: Sigma,
  ai: Sparkles,
};

const services = SERVICE_IDS.map((id) => SKILL_CATEGORIES.find((item) => item.id === id)).filter(
  (item): item is SkillCategory => Boolean(item),
);

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[680px]">
            <Reveal>
              <SectionLabel>Services</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading className="mt-7">
                Practical design &amp; <SerifEm>development</SerifEm> skills.
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-[36ch] text-[14px] leading-[1.85] text-[var(--body)]">
              The tools and workflows I use across frontend, backend, design and data tasks.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = ICONS[service.id] ?? Sparkles;
            return (
              <Reveal key={service.id} delay={(index % 3) * 0.07}>
                <article className="group h-full rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-[0_24px_60px_-45px_var(--shadow)]">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--surface)] text-[var(--ink)] transition-colors group-hover:bg-[var(--button-bg)] group-hover:text-[var(--on-ink)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="text-[12.5px] text-[var(--body)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
