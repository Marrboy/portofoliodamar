import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { EXPERIENCES, ORGANIZATION } from "@/data/portfolio";
import { Reveal, SectionHeading, SectionLabel } from "./ui";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[700px]">
          <Reveal>
            <SectionLabel>Career path</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading className="mt-7">Professional Experience</SectionHeading>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-[14.5px] leading-[1.9] text-[var(--body)]">
              Internship, training and community work that shaped how I build and collaborate.
            </p>
          </Reveal>
        </div>

        <div ref={timelineRef} className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-3 w-px bg-[var(--hairline)] md:left-1/3"
          />
          <m.div
            aria-hidden="true"
            style={reduce ? undefined : { height: lineHeight }}
            className="absolute left-[7px] top-3 w-px bg-[var(--button-bg)] md:left-1/3"
          />

          <ol className="space-y-14">
            {EXPERIENCES.map((experience, index) => (
              <li key={experience.id} className="relative grid gap-5 md:grid-cols-12 md:gap-10">
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-[2px] h-3 w-3 rounded-full border-[3px] border-[var(--canvas)] bg-[var(--button-bg)] md:left-[calc(33.333%-6px)]"
                />
                <Reveal
                  delay={index * 0.06}
                  className="pl-8 md:col-span-4 md:pl-0 md:pr-8 md:text-right"
                >
                  <h3 className="font-display text-[19px] leading-snug font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {experience.company}
                  </h3>
                  <span className="mt-3 inline-flex rounded-full border border-[var(--hairline)] px-3 py-1 text-[11px] font-medium text-[var(--body)]">
                    {experience.period}
                  </span>
                </Reveal>

                <Reveal
                  delay={index * 0.06 + 0.05}
                  className="pl-8 md:col-span-8 md:border-l md:border-[var(--hairline)] md:pl-9"
                >
                  <h4 className="font-display text-[21px] leading-tight font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {experience.role}
                  </h4>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-[13px] leading-[1.75] text-[var(--body)]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[10px] h-px w-3 shrink-0 bg-[var(--button-bg)]/50"
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  {experience.stack && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {experience.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-[var(--surface)] px-3 py-1 text-[11.5px] text-[var(--sub-body)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div
            id="organization"
            className="mt-16 grid scroll-mt-28 gap-5 border-t border-[var(--hairline)] pt-10 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-4 md:pr-8 md:text-right">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--body)] uppercase">
                Organization
              </p>
              <h3 className="mt-3 font-display text-[19px] font-semibold tracking-[-0.02em] text-[var(--ink)]">
                {ORGANIZATION.name}
              </h3>
              <span className="mt-3 inline-flex rounded-full border border-[var(--hairline)] px-3 py-1 text-[11px] text-[var(--body)]">
                {ORGANIZATION.period}
              </span>
            </div>
            <div className="md:col-span-8 md:border-l md:border-[var(--hairline)] md:pl-9">
              <h4 className="font-display text-[21px] font-semibold tracking-[-0.03em] text-[var(--ink)]">
                {ORGANIZATION.role}
              </h4>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {ORGANIZATION.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 text-[13px] leading-[1.75] text-[var(--body)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] h-px w-3 shrink-0 bg-[var(--button-bg)]/50"
                    />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
