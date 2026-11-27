import { BadgeCheck } from "lucide-react";

import { CERTIFICATIONS } from "@/data/portfolio";
import { Reveal, SectionHeading, SectionLabel } from "./ui";

export function CertificationsSection() {
  const highlighted = CERTIFICATIONS.filter((item) => item.highlighted);
  const courses = CERTIFICATIONS.filter((item) => !item.highlighted);

  return (
    <section
      id="certifications"
      className="scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[700px]">
          <Reveal>
            <SectionLabel>Courses &amp; certifications</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading className="mt-7">Learning, documented.</SectionHeading>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5">
          {highlighted.map((item) => (
            <Reveal key={item.id}>
              <article className="border border-[var(--hairline)] bg-[var(--canvas-soft)] p-7 shadow-[0_24px_60px_-48px_var(--shadow)] sm:p-9">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--ink)]">
                      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--body)] uppercase">
                        Professional certification
                      </p>
                      <h3 className="mt-3 font-display text-[clamp(23px,2.6vw,30px)] leading-tight font-semibold tracking-[-0.04em] text-[var(--ink)]">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[13px] text-[var(--body)]">
                        {item.issuer}, {item.year}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-[var(--line-strong)] px-4 py-2 text-[11px] font-semibold tracking-[0.12em] text-[var(--ink)] uppercase">
                    BNSP
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-x-14 sm:grid-cols-2">
          {courses.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 2) * 0.05}
              className="flex items-baseline justify-between gap-4 border-t border-[var(--hairline)] py-4"
            >
              <h3 className="text-[13.5px] leading-snug text-[var(--sub-body)]">{item.name}</h3>
              <span className="shrink-0 text-[12px] text-[var(--body)]">
                {item.issuer}, {item.year}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
