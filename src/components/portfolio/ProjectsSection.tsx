import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import { PROJECTS, type ProjectItem } from "@/data/portfolio";
import { Reveal, SectionHeading, SectionLabel } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectsSection() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const closeDialog = useCallback(() => setSelected(null), []);

  return (
    <section
      id="projects"
      className="scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas-soft)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[680px]">
            <Reveal>
              <SectionLabel>Project</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading className="mt-7">
                Work that solves a real,{" "}
                <em className="font-serif font-normal italic">practical</em> problem.
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <div className="flex flex-col items-start gap-4">
              <p className="max-w-[34ch] text-[13.5px] leading-[1.85] text-[var(--body)] sm:text-[14px]">
                Academic work built end to end, from data preparation to the interface.
              </p>
              <a
                href="/cv"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--ink)] transition-colors hover:text-[var(--body)]"
              >
                View all work
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDialog project={selected} onClose={closeDialog} />
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  const reduce = useReducedMotion();

  return (
    <m.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.5, ease }}
      className="group grid overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] md:grid-cols-2"
    >
      <div className="relative min-h-[280px] bg-[var(--surface)] p-6 sm:p-8">
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open details for ${project.title}`}
          className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-[var(--button-bg)] text-[var(--on-ink)] transition-colors hover:bg-[var(--button-hover)]"
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex h-full min-h-[220px] flex-col justify-between rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] p-5 transition-transform duration-700 group-hover:scale-[1.015]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-[var(--faint)] uppercase">
              Price estimation
            </span>
            <span className="text-[10.5px] text-[var(--faint)]">linear_regression.py</span>
          </div>
          <div className="flex h-[110px] items-end gap-3">
            {[38, 52, 44, 68, 60, 82, 74].map((height, index) => (
              <span
                key={index}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-[var(--hairline)] to-[var(--ink)]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between border-t border-[var(--hairline)] pt-3 text-[10.5px] text-[var(--faint)]">
            <span>data preprocessing</span>
            <span>prediction</span>
          </div>
        </div>
      </div>

      <div className="p-7 sm:p-9">
        <span className="inline-flex rounded-full bg-[var(--badge-bg)] px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-[var(--badge-ink)] uppercase">
          {project.kind}
        </span>
        <h3 className="mt-6 font-display text-[clamp(28px,3.2vw,38px)] leading-[1.1] font-semibold tracking-[-0.04em] text-[var(--ink)]">
          {project.title}
        </h3>
        <p className="mt-2 font-serif text-[19px] font-normal italic text-[var(--body)]">
          {project.subtitle}
        </p>
        <p className="mt-6 max-w-[50ch] text-[14px] leading-[1.9] text-[var(--body)]">
          {project.description}
        </p>

        <ul className="mt-7 flex flex-wrap gap-2 border-t border-[var(--hairline)] pt-5">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[var(--hairline)] px-3 py-1 text-[11.5px] text-[var(--body)]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onOpen}
          className="mt-8 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[var(--ink)] transition-colors hover:text-[var(--body)]"
        >
          View case study
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </m.article>
  );
}

function ProjectDialog({ project, onClose }: { project: ProjectItem | null; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <m.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--scrim)] p-4 backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.4, ease }}
            className="max-h-[88vh] w-full max-w-[620px] overflow-y-auto rounded-2xl bg-[var(--canvas)] p-7 text-[var(--ink)] shadow-[0_40px_120px_-50px_var(--shadow)] sm:p-9"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[var(--body)] uppercase">
                  {project.kind}
                </p>
                <h2
                  id="project-dialog-title"
                  className="mt-4 font-display text-[30px] leading-tight font-semibold tracking-[-0.03em]"
                >
                  {project.title}
                </h2>
                <p className="mt-2 font-serif text-[18px] font-normal italic text-[var(--body)]">
                  {project.subtitle}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-7 text-[14px] leading-[1.9] text-[var(--body)]">
              {project.description}
            </p>

            <h3 className="mt-8 border-t border-[var(--hairline)] pt-6 text-[11px] font-semibold tracking-[0.14em] text-[var(--body)] uppercase">
              Features
            </h3>
            <ul className="mt-4 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-[13.5px] leading-[1.7] text-[var(--sub-body)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[10px] h-px w-3 shrink-0 bg-[var(--button-bg)]/60"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 border-t border-[var(--hairline)] pt-6 text-[11px] font-semibold tracking-[0.14em] text-[var(--body)] uppercase">
              Technologies
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[var(--hairline)] px-3 py-1 text-[12px] text-[var(--sub-body)]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onClose}
              className="mt-9 h-11 w-full rounded-full border border-[var(--line-strong)] text-[13px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Close details
            </button>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
