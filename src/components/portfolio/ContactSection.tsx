import { useState, type FormEvent } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Check, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

import { PROFILE } from "@/data/portfolio";
import { Reveal, SectionHeading, SectionLabel } from "./ui";

const fieldClass =
  "mt-3 w-full border-b border-[var(--line-strong)] bg-transparent pb-2 text-[14px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--faint)] focus:border-[var(--ink)]";

export function ContactSection() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\nFrom: ${name.trim()}\nEmail: ${email.trim()}`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas-soft)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionLabel>Contact</SectionLabel>
            <Reveal delay={0.06}>
              <SectionHeading className="mt-7 max-w-[20ch]">
                Let&apos;s build something practical together.
              </SectionHeading>
            </Reveal>
            <p className="mt-5 font-serif text-[18px] font-normal italic text-[var(--ink)]">
              Open to junior web developer and frontend roles.
            </p>
            <p className="mt-6 max-w-[48ch] text-[14px] leading-[1.9] text-[var(--body)]">
              Feel free to reach out with a role, a project or a question — email is the fastest way
              to get in touch.
            </p>

            <ul className="mt-10 space-y-5 border-t border-[var(--hairline)] pt-8 text-[13.5px] text-[var(--sub-body)]">
              <li>
                <span className="mb-2 flex items-center gap-2 text-[12px] text-[var(--ink)]">
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Email
                </span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <span className="mb-2 flex items-center gap-2 text-[12px] text-[var(--ink)]">
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" /> LinkedIn
                </span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
                >
                  View profile
                </a>
              </li>
              <li>
                <span className="mb-2 flex items-center gap-2 text-[12px] text-[var(--ink)]">
                  <Instagram className="h-3.5 w-3.5" aria-hidden="true" /> Instagram
                </span>
                <a
                  href={PROFILE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
                >
                  @margal1h_
                </a>
              </li>
              <li>
                <span className="mb-2 flex items-center gap-2 text-[12px] text-[var(--ink)]">
                  <Github className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
                </span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-[var(--line-strong)] pb-0.5 transition-colors hover:border-[var(--ink)]"
                >
                  Marrboy
                </a>
              </li>
              <li>
                <span className="mb-2 flex items-center gap-2 text-[12px] text-[var(--ink)]">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Location
                </span>
                {PROFILE.location}
              </li>
            </ul>
          </div>

          <m.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.12 }}
            className="border border-[var(--hairline)] bg-[var(--canvas)] p-7 shadow-[0_24px_60px_-48px_var(--shadow)] sm:p-9 lg:col-span-6"
          >
            <h3 className="font-display text-[26px] font-semibold text-[var(--ink)]">
              Send a message
            </h3>
            <p className="mt-2 text-[13px] text-[var(--body)]">
              Opens your email app with the message ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-[12.5px] text-[var(--body)]">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-[12.5px] text-[var(--body)]">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="text-[12.5px] text-[var(--body)]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about the role or project..."
                  className={`${fieldClass} min-h-[110px] resize-y py-2`}
                />
              </div>

              <m.button
                type="submit"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.99 }}
                className="h-12 w-full rounded-full bg-[var(--button-bg)] text-[13.5px] font-medium text-[var(--on-ink)] transition-colors hover:bg-[var(--button-hover)]"
              >
                Open email draft
              </m.button>

              {submitted && (
                <p
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-2 border border-[var(--line-strong)] px-4 py-3 text-[12.5px] leading-relaxed text-[var(--ink)]"
                >
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Your email draft is ready. Press send in your email app to deliver it.
                </p>
              )}
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
}
