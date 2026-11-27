import { useState, type ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const surfaceCard =
  "border border-[var(--hairline)] bg-[var(--canvas)] shadow-[0_18px_50px_-40px_var(--shadow)]";

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 8,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </m.div>
  );
}

export function ProfileImage({
  src,
  alt,
  initials,
  loading = "lazy",
  monogramClassName = "text-[clamp(96px,12vw,128px)]",
}: {
  src: string;
  alt: string;
  initials: string;
  loading?: "eager" | "lazy";
  monogramClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
        loading={loading}
        decoding="async"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Monogram for ${alt}`}
      className="grid h-full w-full place-items-center"
    >
      <span
        className={`font-serif leading-none font-normal italic text-[var(--ink)] ${monogramClassName}`}
      >
        {initials}
      </span>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[var(--body)] uppercase">
      <span aria-hidden="true" className="h-px w-7 bg-[var(--button-bg)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={
        "font-display text-[clamp(34px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.04em] text-[var(--ink)] " +
        className
      }
    >
      {children}
    </h2>
  );
}

export function SerifEm({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic text-[var(--ink)]">{children}</em>;
}

type PillButtonProps = {
  label: string;
  href?: string;
  size?: "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function PillButton({
  label,
  href,
  size = "md",
  variant = "primary",
  className = "",
  external = false,
  onClick,
}: PillButtonProps) {
  const reduce = useReducedMotion();
  const colors =
    variant === "primary"
      ? "bg-[var(--button-bg)] text-[var(--on-ink)] hover:bg-[var(--button-hover)]"
      : "border border-[var(--line-strong)] bg-[var(--canvas)] text-[var(--ink)] hover:border-[var(--ink)]";
  const sizing = size === "lg" ? "h-12 px-7 text-[13.5px]" : "h-11 px-6 text-[13px]";
  const shared = {
    onClick,
    whileHover: reduce ? undefined : { y: -2 },
    whileTap: reduce ? undefined : { scale: 0.98 },
    className:
      "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.01em] transition-colors duration-300 " +
      colors +
      " " +
      sizing +
      " " +
      className,
  };

  if (!href) {
    return (
      <m.button type="button" {...shared}>
        {label}
      </m.button>
    );
  }

  return (
    <m.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...shared}
    >
      {label}
    </m.a>
  );
}

export function TextLink({
  label,
  href,
  className = "",
  external = false,
}: {
  label: string;
  href: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={"group text-[13.5px] text-[var(--ink)] " + className}
    >
      <span className="border-b border-[var(--line-strong)] pb-0.5 transition-colors duration-300 group-hover:border-[var(--ink)]">
        {label}
      </span>
    </a>
  );
}

export function Wordmark() {
  return (
    <a
      href="#beranda"
      aria-label="Damar Galih Subiyanto — Home"
      className="inline-flex items-baseline"
    >
      <span className="font-display text-[24px] leading-none font-bold tracking-[-0.04em] text-[var(--ink)]">
        damar
      </span>
      <span className="font-serif text-[27px] leading-none font-normal italic text-[var(--body)]">
        .
      </span>
    </a>
  );
}
