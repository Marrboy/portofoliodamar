import { createFileRoute } from "@tanstack/react-router";
import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

import { AboutSection } from "@/components/portfolio/AboutSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { FooterSection } from "@/components/portfolio/FooterSection";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Navbar } from "@/components/portfolio/Navbar";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { EDUCATION, EXPERIENCES, PROFILE, SKILL_CATEGORIES, SUMMARY } from "@/data/portfolio";
import { SITE_DESCRIPTION, SITE_TITLE, toAbsoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: PROFILE.fullName },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: toAbsoluteUrl("/") },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.fullName,
          jobTitle: PROFILE.role,
          url: toAbsoluteUrl("/"),
          email: `mailto:${PROFILE.email}`,
          description: SUMMARY,
          sameAs: [PROFILE.linkedin, PROFILE.instagram, PROFILE.github],
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: EDUCATION.school,
          },
          worksFor: EXPERIENCES.map((experience) => ({
            "@type": "Organization",
            name: experience.company,
          })),
          knowsAbout: SKILL_CATEGORIES.flatMap((category) => category.items),
        },
      },
    ],
    links: [{ rel: "canonical", href: toAbsoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[var(--canvas)] font-body text-[var(--ink)] antialiased">
          <Navbar />

          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <ContactSection />
          </main>

          <FooterSection />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
