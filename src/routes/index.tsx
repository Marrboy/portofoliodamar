import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Damar Galih Subiyanto — AI-Driven Web Developer";
const DESC =
  "Portofolio Damar Galih Subiyanto: website modern, scalable, dan AI-native. Proyek, skill, pengalaman, dan kontak.";
const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCkgmDG-6Oe6iomGU1w_DVtulB4hnIZVcAOkUM3is2-Kkh59ZFub8f2pzi3xR4qYNq4DF_tqo-LptBc821RN1eoDDzNACudwXscw-5fzXjuuYosDOeIbtuyPJYLyKW2MwgyBYsBsijDBFc7ZWUO-vBmKqquC7mee_KA6TR7glb7kbLOCLH__tm5thAJ2RUiGT9iKGUxHcgYjpX7_DsZLyFy_BBHA16FszA3fPmRfS_h7keD5ZqovNhSvQ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "KosanYuk",
    tag: "Mobile App",
    accent: "primary" as const,
    desc: "Platform pencarian kosan dengan fitur virtual tour 360°.",
    stack: ["Flutter", "Firebase"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIMxT3BMapuGUWeXMuHGqV0TwQrYErC3P_bNiAWeAUIdmcurEY0gI2RpQ0Rt5beonMfshKJ--XD2qfgxHPXdCjFXTSpJtXHePky_Zo6AgTiXMfb08BJalXCaPhzXX2xzVM8887kImHn2myL9ZA12e83kDldqhqZTYbBpefTigJLBzfoOiL3vCvEHdkAdZVmFRulSQ0bIEp_gn2Lah08kDHq1YcW-4_Zy7J7sxlTdIamqDGCzjUxq4VEQ",
  },
  {
    title: "DataVista AI",
    tag: "Web Dashboard",
    accent: "tertiary" as const,
    desc: "Analisis data real-time dengan bantuan LLM integration.",
    stack: ["Next.js", "OpenAI"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc4-BqdVVUNnkX15LxSLkoDqCsa0vBUHugcqjwHy--8QQOOV_12HNpuN1LPCZCGV_kd5RYlxnK_ZN62twj1DHH2xIdMkbQh1lFxw1HgZ01nK2dQtqWYQu5yGxxeAPOpc8uznzSSznzUXJmVgSl4us7Kq2pYQJcpruOyCJepmeaKud6lbWb0pB3gRn0iHPhoaXeNPa8gxiVlA3jvdkQOXEhYbVLKkAZ720KQSbzoFqUZ6KoQc2FSd-cug",
  },
  {
    title: "ArtConnect",
    tag: "E-Commerce",
    accent: "primary" as const,
    desc: "Marketplace untuk seniman lokal dengan sistem kurasi AI.",
    stack: ["React", "Stripe"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBENggo8P7kdctG7YkyG9RLJ2g5n37H2CONE4MGW-1CTtVnGFA_uzTVyzye3mrSTpC_Z9dAVpF8j1a8jJ_4VKf39X8ssP_5XTE2UbRlfAEgKvAvsk3NUTQ34vhdMQ47PqZGtZK5m6Jbj9JjihuCTXjtmSpJpUJxpTvE1cxUfsAMbTyqE0AljwGvlTysgvuT8MdxiHNEZDpSqXLwoNnWuPLUeb3masyTHK-Xbv1VvS8NaUfbbKGyjGXrtA",
  },
  {
    title: "Smart Inventory",
    tag: "SaaS",
    accent: "tertiary" as const,
    desc: "Manajemen stok cerdas dengan auto-reorder system.",
    stack: ["Python", "Django"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHRtHDGDdqb4QABbkZm8sOwu6nJ1wUveiZmaBJoR7FP5uCQisVdQ31djtG0IdzOEB8aaBEfeSDCSA6VBVcAMhQyVg-4XBBxuKZA9I3k-5EdZ7mQDIYVLttmv9qmlbntyKYg_1OweeUklSHepYEUgG2-wCK7kOHTk_ksMXLEdAWl3aB-kYVIzt4dLkECfzlVzmdJRTVRg0xQe5XOULHKdbhfxRrWJPxS43LIqXf2mY_965SwFjUSB1FUA",
  },
  {
    title: "AI Chat Dashboard",
    tag: "Web App",
    accent: "primary" as const,
    desc: "Multi-model AI chat interface untuk developer productivity.",
    stack: ["TypeScript", "OpenAI"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASdnRpRonRJDWd9pbP-x50ILl8CLGtxhH9XbMkA_aAGJhatFHTRyeWIooFWK2F023ORxAVhIvDm6QzTypG4HbNu_80-Eb0vJ8G_nHZlmPUeJXPNccfrMdv-Np7esNWA4GuVDvlI0gcsJ0v3SYA2pV9LSxtNJDDWHozjFL2YJfbs-CZy-zdEr7X7fX3XzCfdbOJdSLcz5fkt2h_fYiBuxhzdI5PjTf5rAXhHY1DNTjcU2yTB7dys4aZxg",
  },
  {
    title: "LMS Pro",
    tag: "Education",
    accent: "tertiary" as const,
    desc: "Sistem pembelajaran online terintegrasi dengan kuis interaktif.",
    stack: ["Laravel", "Vue.js"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxQVaAZExfcOQ5dNGoP-LXjzz3ynTvjlWgmN59Bl5zfsw_B0Urr4IlZ1l99eylNVPcksSl9TGOvwgXVaNAvSYTbXfpK1xrKUvVULmPiB4PFl5KyKFbnzFmhgaSdlEOKnc2YAexzB-zftI3Q_W2GAU2zTDXUoT5OWFsKr2X-fgqTwophMYic4txqFStVCszbhRbDNj4yAmOgfE3PmrZS_3vQUuyGS1usVyQs2B0LuxLXsY4jNt2z5UkMg",
  },
];

const stats = [
  { value: "2+", label: "Years Experience", color: "text-primary" },
  { value: "20+", label: "Projects Done", color: "text-tertiary" },
  { value: "15+", label: "Happy Clients", color: "text-primary" },
  { value: "∞", label: "Coding & Coffee", color: "text-tertiary" },
];

const skills = [
  { name: "React / Next.js", pct: 95, color: "text-primary" },
  { name: "Python / Backend", pct: 92, color: "text-tertiary" },
  { name: "Machine Learning", pct: 85, color: "text-primary" },
  { name: "UI/UX Design", pct: 88, color: "text-tertiary" },
];

const traits = [
  { icon: "code", label: "Clean Code", color: "text-tertiary" },
  { icon: "psychology", label: "AI Native", color: "text-primary" },
  { icon: "speed", label: "Performant UI", color: "text-tertiary" },
  { icon: "cloud_done", label: "Scalable Architecture", color: "text-primary" },
];

const testimonials = [
  {
    quote:
      "Damar bener-bener sat-set ngerjain project. Code-nya bersih banget, gampang di-maintain, dan AI integration-nya bikin user experience naik level.",
    name: "Andi Pratama",
    role: "CTO, FinTech Indonesia",
    stars: 5,
  },
  {
    quote:
      "Bikin landing page sama Damar tuh ga ribet. Brief singkat, eksekusi padat. Desainnya modern dan conversion rate-nya naik drastis.",
    name: "Santi Wijaya",
    role: "Founder, Bloom Agency",
    stars: 5,
  },
  {
    quote:
      "Kerjasama sama Damar itu investasi. Dia nggak cuma coding, tapi juga kasih input strategis dari sisi teknologi dan trend AI terbaru.",
    name: "Budi Santoso",
    role: "Creative Director, NeoStudio",
    stars: 4,
  },
];

function Icon({ name, className }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className ?? ""}`}>{name}</span>;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <div className="noise-overlay" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#beranda" className="font-display text-lg font-bold tracking-tight">
            damar<span className="text-primary">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-on-surface-variant md:flex">
            <a className="transition-colors hover:text-on-surface" href="#proyek">Proyek</a>
            <a className="transition-colors hover:text-on-surface" href="#skill">Skill</a>
            <a className="transition-colors hover:text-on-surface" href="#pengalaman">Pengalaman</a>
            <a className="transition-colors hover:text-on-surface" href="#kontak">Kontak</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="beranda" className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-primary-container blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-tertiary blur-[160px] opacity-60" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-tertiary/20 bg-tertiary/10 px-4 py-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-tertiary" />
              </span>
              <span className="text-xs font-bold tracking-wider text-tertiary">
                ⚡ AI-DRIVEN WEB DEVELOPER
              </span>
            </div>
            <h1 className="mb-6 font-display text-5xl leading-[1.05] md:text-6xl">
              Halo! Gue <span className="text-primary">Damar Galih Subiyanto</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg text-on-surface-variant">
              Gue fokus bikin website modern, scalable, dan memanfaatkan AI supaya solusi digital
              jadi lebih cepat, pintar, dan impactful. Sat-set architecture, no debat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyek"
                className="rounded-full bg-primary-container px-8 py-4 font-bold text-on-surface shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                Lihat Proyek
              </a>
              <a
                href="#kontak"
                className="rounded-full border border-border bg-foreground/5 px-8 py-4 font-bold backdrop-blur-md transition-all hover:bg-foreground/10"
              >
                Hubungi Gue
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="group relative h-80 w-80 md:h-[450px] md:w-[450px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container to-tertiary opacity-20 blur-[80px] transition-opacity group-hover:opacity-40" />
              <img
                alt="Potret Damar Galih Subiyanto"
                src={HERO_IMG}
                className="relative z-10 h-full w-full rounded-full border-2 border-border object-cover shadow-2xl"
              />
              <div
                className="glass-card absolute -right-6 -top-4 z-20 flex animate-bounce items-center gap-3 px-5 py-3 shadow-xl md:-right-12"
                style={{ animationDuration: "3s" }}
              >
                <span className="h-3 w-3 rounded-full bg-tertiary" />
                <span className="text-sm font-medium">Tersedia untuk kerja</span>
              </div>
              <div
                className="glass-card absolute -left-6 bottom-10 z-20 flex animate-pulse items-center gap-3 px-5 py-3 shadow-xl md:-left-16"
                style={{ animationDuration: "4s" }}
              >
                <Icon name="rocket_launch" className="text-primary" />
                <span className="text-sm font-medium">Fokus: AI + Web Dev</span>
              </div>
              <div className="glass-card absolute -bottom-4 right-0 z-20 flex flex-col gap-1 px-5 py-3 shadow-xl">
                <span className="text-[12px] opacity-60">Tech Stack</span>
                <div className="flex gap-2">
                  <Icon name="terminal" className="text-[18px]" />
                  <span className="text-sm font-bold">React, Next.js, Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface-container-low py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className={`mb-1 font-display text-[48px] ${s.color}`}>{s.value}</div>
              <div className="text-sm text-on-surface-variant">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proyek" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl md:text-5xl">Selected Works</h2>
            <p className="mx-auto max-w-2xl text-on-surface-variant">
              Beberapa proyek unggulan yang memadukan UI premium dengan logika engineering yang
              solid.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="glass-card group overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${p.img}')` }}
                  role="img"
                  aria-label={`${p.title} preview`}
                />
                <div className="p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-widest ${
                        p.accent === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-tertiary/10 text-tertiary"
                      }`}
                    >
                      {p.tag}
                    </span>
                    <div className="flex gap-2 text-on-surface-variant">
                      <Icon name="link" className="cursor-pointer transition-colors hover:text-primary" />
                      <Icon name="code" className="cursor-pointer transition-colors hover:text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-2xl">{p.title}</h3>
                  <p className="mb-6 text-on-surface-variant">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-foreground/5 px-3 py-1 text-[12px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skill" className="bg-surface-container-low/30 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-20 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl md:text-5xl">Expertise &amp; Skillset</h2>
            <p className="mb-8 text-lg text-on-surface-variant">
              Gue terus update dengan teknologi terbaru untuk pastiin setiap baris kode yang gue
              tulis itu efisien dan future-proof. AI bukan cuma gimmick buat gue, tapi bagian dari
              workflow utama.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {traits.map((t) => (
                <div key={t.label} className="glass-card flex items-center gap-3 p-4">
                  <Icon name={t.icon} className={t.color} />
                  <span className="text-sm font-bold">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="mb-2 flex justify-between">
                  <span className="font-bold">{s.name}</span>
                  <span className={s.color}>{s.pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="pengalaman" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-4xl md:text-5xl">My Journey</h2>
          <div className="relative space-y-12 before:absolute before:left-8 before:top-0 before:h-full before:w-px before:bg-border before:content-[''] md:before:left-1/2">
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="order-2 md:order-1 md:pr-16 md:text-right">
                <h4 className="mb-2 font-bold text-tertiary">2023 - Sekarang</h4>
                <h3 className="mb-2 text-2xl">Junior Web Developer</h3>
                <p className="text-on-surface-variant">
                  TechNexus Solution. Memimpin tim front-end dalam migrasi arsitektur monolitik ke
                  micro-services berbasis Next.js.
                </p>
              </div>
              <div className="absolute left-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-primary/20 md:left-1/2 md:block" />
              <div className="order-3 md:pl-16">
                <div className="glass-card inline-block p-6">
                  <Icon name="corporate_fare" className="text-[40px] text-primary" />
                </div>
              </div>
            </div>
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="order-3 hidden md:order-2 md:block md:pr-16 md:text-right">
                <div className="glass-card inline-block p-6">
                  <Icon name="terminal" className="text-[40px] text-tertiary" />
                </div>
              </div>
              <div className="absolute left-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-tertiary ring-8 ring-tertiary/20 md:left-1/2 md:block" />
              <div className="order-2 md:order-3 md:pl-16">
                <h4 className="mb-2 font-bold text-primary">2021 - 2023</h4>
                <h3 className="mb-2 text-2xl">Front-end Engineer</h3>
                <p className="text-on-surface-variant">
                  Digital Nusantara. Mengembangkan Dashboard internal yang meningkatkan efisiensi
                  operasional sebesar 40%.
                </p>
              </div>
              <div className="order-3 pl-16 md:hidden">
                <div className="glass-card inline-block p-6">
                  <Icon name="terminal" className="text-[40px] text-tertiary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-container py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-16 text-center text-4xl md:text-5xl">What Clients Say</h2>
          <div className="flex snap-x flex-col gap-8 overflow-x-auto pb-8 md:flex-row">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card min-w-[320px] snap-center p-8 md:min-w-[400px]">
                <div className="mb-6 flex gap-1 text-tertiary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon
                      key={i}
                      name="star"
                      className={i <= t.stars ? "" : "opacity-30"}
                    />
                  ))}
                </div>
                <p className="mb-8 text-lg italic">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-surface-bright" />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-[12px] opacity-60">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontak" className="px-6 py-24">
        <div className="glass-card relative mx-auto max-w-6xl overflow-hidden border-primary/20 bg-gradient-to-br from-primary-container/20 to-tertiary/10 p-12 text-center md:p-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_60%)] opacity-10" />
          <div className="relative z-10">
            <h2 className="mb-6 font-display text-4xl md:text-5xl">
              Punya ide project? <br />
              Yuk ngobrol bareng!
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-on-surface-variant">
              Gue selalu open untuk kolaborasi di proyek menantang atau sekadar sharing ide tentang
              masa depan web &amp; AI.
            </p>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <a
                href="mailto:halo@damargalih.com"
                className="rounded-full bg-tertiary px-10 py-5 font-bold text-background transition-all hover:scale-105 active:scale-95"
              >
                Kirim Email
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-foreground/5 px-10 py-5 font-bold backdrop-blur-md transition-all hover:bg-foreground/10"
              >
                <Icon name="chat" /> WhatsApp Gue
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-on-surface-variant">
        © {new Date().getFullYear()} Damar Galih Subiyanto — Built with AI + coffee.
      </footer>
    </div>
  );
}
