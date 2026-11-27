import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Github, Instagram, Linkedin, Mail, MapPin, Printer } from "lucide-react";

import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCES,
  ORGANIZATION,
  PROFILE,
  PROJECTS,
  SKILL_CATEGORIES,
  SUMMARY,
} from "@/data/portfolio";
import { SITE_URL, toAbsoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: `CV — ${PROFILE.fullName}` },
      {
        name: "description",
        content: `Curriculum vitae of ${PROFILE.fullName} — ${PROFILE.headline}. Education, experience, skills and certifications.`,
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: `CV — ${PROFILE.fullName}` },
      {
        property: "og:description",
        content: `${PROFILE.headline} · ${PROFILE.location}. View experience, skills and certifications.`,
      },
      { property: "og:url", content: toAbsoluteUrl("/cv") },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [{ rel: "canonical", href: toAbsoluteUrl("/cv") }],
  }),
  component: CvPage,
});

function CvPage() {
  const project = PROJECTS[0];

  return (
    <main className="min-h-screen bg-[var(--canvas-soft)] px-4 py-8 text-[#0B1220] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-[920px]">
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 text-[13px] text-[var(--ink)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--surface)]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to portfolio
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--button-bg)] px-5 text-[13px] text-[var(--on-ink)] transition-colors hover:bg-[var(--button-hover)]"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print / Save as PDF
          </button>
        </div>

        <article className="cv-sheet rounded-2xl bg-white px-6 py-10 shadow-[0_30px_70px_-40px_rgba(11,18,32,0.5)] sm:px-12 sm:py-14">
          <header className="cv-section border-b border-[#0B1220]/20 pb-7">
            <p className="text-[12px] font-bold tracking-[0.18em] text-[#2563EB] uppercase">
              Curriculum Vitae
            </p>
            <h1 className="mt-3 text-[clamp(36px,6vw,58px)] leading-none font-bold tracking-[-0.035em]">
              {PROFILE.fullName}
            </h1>
            <p className="mt-3 text-[16px] font-semibold text-[#334155]">{PROFILE.headline}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#475569]">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                Instagram
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {PROFILE.location}
              </span>
            </div>
          </header>

          <CvSection title="Professional Summary">
            <p className="text-[14px] leading-[1.75] text-[#334155]">{SUMMARY}</p>
          </CvSection>

          <CvSection title="Professional Experience">
            <div className="space-y-5">
              {EXPERIENCES.map((experience) => (
                <article key={experience.id} className="cv-section">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-[17px] font-bold leading-tight text-[#0B1220]">
                      {experience.role}
                    </h3>
                    <span className="text-[12px] font-semibold text-[#2563EB]">
                      {experience.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[13.5px] font-semibold text-[#334155]">
                    {experience.company}
                  </p>
                  <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-2 text-[12.5px] leading-[1.55] text-[#475569]"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#2563EB]" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection title="Education">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-[17px] font-bold text-[#0B1220]">{EDUCATION.degree}</h3>
              <span className="text-[12px] font-semibold text-[#2563EB]">{EDUCATION.period}</span>
            </div>
            <p className="mt-1 text-[13.5px] text-[#475569]">
              {EDUCATION.school} · GPA {EDUCATION.gpa}
            </p>
          </CvSection>

          <CvSection title="Organization Experience">
            <h3 className="text-[15px] font-bold text-[#0B1220]">
              {ORGANIZATION.role} — {ORGANIZATION.name}
            </h3>
            <p className="text-[12px] font-semibold text-[#2563EB]">{ORGANIZATION.period}</p>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2">
              {ORGANIZATION.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-2 text-[12.5px] leading-[1.55] text-[#475569]"
                >
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#2563EB]" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </CvSection>

          <CvSection title="Technical Skills">
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {SKILL_CATEGORIES.map((category) => (
                <div key={category.id} className="cv-section">
                  <h3 className="text-[13px] font-bold text-[#0B1220]">{category.title}</h3>
                  <p className="mt-0.5 text-[12.5px] leading-[1.5] text-[#475569]">
                    {category.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </CvSection>

          <CvSection title="Academic Project">
            <h3 className="text-[16px] font-bold text-[#0B1220]">
              {project.title} — {project.subtitle}
            </h3>
            <p className="mt-1 text-[13px] leading-[1.65] text-[#475569]">
              {project.description} Features included {project.features.join(", ").toLowerCase()}.
            </p>
            <p className="mt-1.5 text-[12px] font-medium text-[#2563EB]">
              {project.technologies.join(" · ")}
            </p>
          </CvSection>

          <CvSection title="Courses & Certifications">
            <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {CERTIFICATIONS.map((certification) => (
                <div key={certification.id} className="cv-section">
                  <p className="text-[12.5px] font-semibold text-[#0B1220]">
                    {certification.name}
                    {certification.highlighted ? " (Professional certification)" : ""}
                  </p>
                  <p className="text-[12px] text-[#475569]">
                    {certification.issuer} · {certification.year}
                  </p>
                </div>
              ))}
            </div>
          </CvSection>

          <footer className="cv-section mt-9 border-t border-[#0B1220]/15 pt-5 text-[12px] text-[#64748B]">
            This document summarizes the full portfolio at {SITE_URL}. Contact {PROFILE.email} for
            more information.
          </footer>
        </article>
      </div>
    </main>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section mt-8">
      <h2 className="mb-3 text-[12px] font-bold tracking-[0.16em] text-[#2563EB] uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
