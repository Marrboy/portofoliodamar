import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

import { HERO_METRICS, HERO_SUMMARY, PROFILE } from "@/data/portfolio";
import { Reveal, SerifEm } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export function HeroSection() {
  const reduce = useReducedMotion();
  const nameParts = PROFILE.fullName.split(" ");
  const givenNames = nameParts.slice(0, -1).join(" ");

  return (
    <section
      id="beranda"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-[var(--canvas)] pt-32 pb-24 sm:pt-40 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <m.div
          className="mx-auto flex max-w-[820px] flex-col items-center text-center"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={container}
        >
          <m.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--badge-bg)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--badge-ink)]">
              <span aria-hidden="true">👋</span>
              {PROFILE.role.replace(" | ", " · ")}
            </span>
          </m.div>

          <m.h1
            id="hero-title"
            variants={item}
            className="mt-8 font-display text-[clamp(40px,5.2vw,64px)] leading-[1.1] font-bold tracking-[-0.045em] text-[var(--ink)]"
          >
            Hi, I&apos;m {givenNames}. <br />
            <span className="text-[var(--faint)]">I build</span> <SerifEm>responsive</SerifEm>{" "}
            websites <br />
            and thoughtful <SerifEm>interfaces.</SerifEm>
          </m.h1>

          <m.p
            variants={item}
            className="mx-auto mt-7 max-w-[60ch] text-[14px] leading-[1.9] text-[var(--body)] sm:text-[14.5px]"
          >
            {HERO_SUMMARY}
          </m.p>

          <m.div variants={item} className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/cv"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[var(--button-bg)] px-7 text-[13.5px] font-semibold text-[var(--on-ink)] transition-colors hover:bg-[var(--button-hover)]"
            >
              View CV
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center rounded-full border border-[var(--line-strong)] px-7 text-[13.5px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              View projects
            </a>
          </m.div>

          <m.dl
            variants={item}
            className="mt-12 grid w-full max-w-[600px] grid-cols-3 border-t border-[var(--hairline)] pt-6 text-center"
          >
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="px-2">
                <dt className="text-[10px] font-semibold tracking-[0.14em] text-[var(--faint)] uppercase">
                  {metric.label}
                </dt>
                <dd className="mt-2 font-display text-[clamp(26px,3vw,34px)] leading-none font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </m.dl>
        </m.div>

        <Reveal
          delay={0.35}
          className="mx-auto mt-14 flex max-w-[820px] flex-col items-center gap-4"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[var(--faint)] uppercase">
            Find me online
          </span>
          <ul className="flex items-center gap-3">
            <li>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--body)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--button-bg)] hover:text-[var(--on-ink)]"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={PROFILE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                title="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--body)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--button-bg)] hover:text-[var(--on-ink)]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--body)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--button-bg)] hover:text-[var(--on-ink)]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
