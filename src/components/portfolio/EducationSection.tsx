import { GraduationCap } from "lucide-react";

import { EDUCATION } from "@/data/portfolio";
import { Reveal, SectionHeading, SectionLabel, SerifEm } from "./ui";

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas-soft)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Education</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading className="mt-7 max-w-[16ch]">
                A foundation in <SerifEm>informatics</SerifEm>.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[42ch] text-[13.5px] leading-[1.9] text-[var(--body)] sm:text-[14.5px]">
                My studies connected software development, data and problem solving — the areas I
                continue to build on in my projects.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="lg:col-span-7">
            <article className="border border-[var(--hairline)] bg-[var(--canvas)] p-7 shadow-[0_24px_60px_-48px_var(--shadow)] sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--ink)]">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-7 font-display text-[clamp(26px,3.2vw,36px)] leading-tight font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {EDUCATION.degree}
              </h3>
              <p className="mt-2 font-serif text-[20px] font-normal italic text-[var(--body)]">
                {EDUCATION.school}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--hairline)] pt-6 text-[13px] text-[var(--body)]">
                <span>{EDUCATION.period}</span>
                <span className="text-[var(--ink)]">GPA {EDUCATION.gpa}</span>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
