import { ABOUT_HIGHLIGHTS, EDUCATION, PROFILE, SUMMARY } from "@/data/portfolio";
import { ProfileImage, Reveal, SectionHeading, SectionLabel, SerifEm } from "./ui";

const initials = PROFILE.fullName
  .split(" ")
  .map((part) => part.charAt(0))
  .slice(0, 2)
  .join("");

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-y border-[var(--hairline)] bg-[var(--canvas-soft)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>About me</SectionLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading className="mt-7 max-w-[20ch]">
                A web developer who blends <SerifEm>curiosity</SerifEm> with care.
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-[52ch] text-[14px] leading-[1.9] text-[var(--body)] sm:text-[14.5px]">
                {SUMMARY}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-[52ch] text-[13.5px] leading-[1.85] text-[var(--body)]">
                I completed {EDUCATION.degree} at {EDUCATION.school} in {EDUCATION.completion}
                (GPA {EDUCATION.gpa}), with hands-on experience in frontend development, UI/UX and
                data analysis.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--hairline)] bg-[var(--canvas)] px-4 py-2 text-[12.5px] text-[var(--sub-body)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px] rotate-2">
              <div className="overflow-hidden rounded-[32px] border border-[var(--hairline)] bg-[var(--canvas)] p-3 shadow-[0_35px_80px_-50px_var(--shadow)]">
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[24px] bg-[var(--canvas)]">
                  <ProfileImage
                    src={PROFILE.avatar}
                    alt={`${PROFILE.fullName}, ${PROFILE.role}`}
                    initials={initials}
                    monogramClassName="text-[clamp(110px,16vw,160px)]"
                  />
                </div>
              </div>
              <span className="absolute -bottom-4 -left-4 rounded-full bg-[var(--button-bg)] px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-[var(--on-ink)] uppercase">
                {EDUCATION.gpa} GPA
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
