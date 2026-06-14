import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { FadeInSection } from "./components/FadeInSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { projects } from "./data/projects";
import profile from "../public/moaz-profile.png"

const metrics = [
  { value: "50+", label: "Successful Audits" },
  { value: "100%", label: "Compliance Rate" },
  { value: "3y+", label: "Experience" },
  { value: "12", label: "Process Optimizations" },
];

const homeProjects = projects.slice(0, 3);

const competencies = [
  {
    title: "Statistical Process Control (SPC)",
    description:
      "Implementing real-time monitoring to detect and prevent production deviations before they escalate.",
  },
  {
    title: "Root Cause Analysis (RCA)",
    description:
      "Utilizing 5 Whys and Fishbone diagrams to permanently eliminate recurring non-conformities.",
  },
  {
    title: "Quality Management Systems",
    description:
      "Designing and auditing frameworks compliant with ISO standards and industry regulations.",
  },
];

const skillCards = [
  { icon: BarChart3, title: "Data Integrity", className: "bg-surface-container-low hover:bg-surface-container-high transition-colors" },
  { icon: ShieldCheck, title: "Risk Mitigation", className: "translate-y-8 bg-primary text-on-primary" },
  { icon: GitBranch, title: "System Design", className: "bg-secondary-container" },
  { icon: Building2, title: "Lean Six Sigma", className: "translate-y-8 bg-surface-container-low hover:bg-surface-container-high transition-colors" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section
          id="home"
          className="hero-gradient relative flex min-h-[819px] items-center overflow-hidden scroll-mt-24"
        >
          <FadeInSection className="mx-auto grid w-full max-w-container-max items-center gap-12 px-gutter md:grid-cols-12">
            <div className="space-y-8 md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1">
                <BadgeCheck
                  className="h-[18px] w-[18px] fill-on-tertiary-container text-on-tertiary-container"
                  strokeWidth={1.5}
                />
                <span className="font-display text-label-md uppercase tracking-widest text-on-surface-variant">
                  Quality Specialist &amp; Auditor
                </span>
              </div>

              <h1 className="max-w-2xl font-display text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-primary md:text-[64px]">
                Ensuring Precision in Every Layer of Production.
              </h1>

              <p className="max-w-xl text-body-lg text-on-surface-variant">
                With 3 years of dedicated experience in rigorous product excellence
                and systemic process optimization, I transform operational complexity
                into verified reliability and 100% compliance.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="flex items-center gap-2 rounded bg-primary px-8 py-4 font-display text-label-md text-on-primary transition-all hover:shadow-lg"
                >
                  View Projects
                </a>
                <button
                  type="button"
                  className="rounded border border-primary px-8 py-4 font-display text-label-md text-primary transition-all hover:bg-surface-container"
                >
                  Download Resume
                </button>
              </div>
            </div>

            <div className="relative md:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-outline-variant bg-surface-container-highest shadow-sm">
                <Image
                  src={profile}
                  alt="Professional Quality Specialist"
                  width={480}
                  height={600}
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 hover:grayscale-0"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden border border-outline-variant bg-surface p-6 shadow-xl lg:block">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-tertiary-fixed p-3">
                    <LineChart className="h-6 w-6 text-on-tertiary-fixed-variant" />
                  </div>
                  <div>
                    <p className="font-display text-label-md text-on-surface">
                      ISO 9001 Certified
                    </p>
                    <p className="font-display text-[12px] text-outline">
                      Lead Auditor Status
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Metrics */}
        <section className="bg-primary py-16 text-on-primary">
          <FadeInSection className="mx-auto grid max-w-container-max grid-cols-2 gap-8 px-gutter md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="border-l border-outline-variant/30 pl-6 text-center md:text-left"
              >
                <h3 className="mb-1 text-display-lg">{metric.value}</h3>
                <p className="font-display text-label-md uppercase text-on-primary/70">
                  {metric.label}
                </p>
              </div>
            ))}
          </FadeInSection>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 py-section-padding-mobile md:py-section-padding-desktop"
        >
          <FadeInSection className="mx-auto grid max-w-container-max gap-20 px-gutter md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-headline-md">
                Expertise in Operational Excellence
              </h2>
              <p className="mb-10 text-body-lg text-on-surface-variant">
                My approach to quality assurance is rooted in systematic auditing
                and data-driven process refinement. I bridge the gap between
                regulatory requirements and efficient industrial performance.
              </p>
              <Link
                href="/experience"
                className="mb-10 inline-flex items-center gap-2 font-display text-label-md text-primary transition-opacity hover:opacity-70"
              >
                View full experience
                <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="space-y-6">
                {competencies.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-on-tertiary-container" />
                    <div>
                      <h4 className="mb-1 font-display text-label-md text-primary">
                        {item.title}
                      </h4>
                      <p className="text-body-md text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skillCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`flex flex-col justify-between p-8 ${card.className}`}
                  >
                    <Icon className="h-10 w-10" />
                    <h4 className="mt-4 font-display text-[20px] font-semibold leading-[1.3]">
                      {card.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </FadeInSection>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop"
        >
          <FadeInSection className="mx-auto max-w-container-max px-gutter">
            <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
              <div className="max-w-xl">
                <h2 className="mb-4 text-headline-md">Case Studies &amp; Audits</h2>
                <p className="text-body-md text-on-surface-variant">
                  Detailed evidence of process optimization and quality control
                  implementation across high-stakes manufacturing sectors.
                </p>
              </div>
              <Link
                href="/projects"
                className="flex items-center gap-2 border-b-2 border-primary pb-1 font-display text-label-md text-primary transition-opacity hover:opacity-70"
              >
                View All Audits
                <ArrowRight className="h-[18px] w-[18px]" />
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeProjects.map((project) => (
                <div
                  key={project.title}
                  className="group flex h-full flex-col border border-outline-variant bg-surface p-8 transition-all duration-300 hover:border-primary"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span className="font-display text-label-md text-outline">
                      {project.date}
                    </span>
                    <ExternalLink className="h-5 w-5 text-outline transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mb-4 font-display text-[22px] font-semibold leading-[1.3]">
                    {project.title}
                  </h3>
                  <p className="mb-8 grow text-body-md text-on-surface-variant">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-surface-container-low px-3 py-1 font-display text-[12px] font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 font-display text-label-md text-primary transition-all group-hover:gap-3"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="scroll-mt-24 py-section-padding-mobile md:py-section-padding-desktop"
        >
          <FadeInSection className="mx-auto max-w-container-max px-gutter">
            <div className="relative overflow-hidden bg-primary p-12 text-on-primary md:p-20">
              <div className="pointer-events-none absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-10">
                <BadgeCheck className="h-[400px] w-[400px]" strokeWidth={0.5} />
              </div>
              <div className="relative z-10 max-w-2xl">
                <h2 className="mb-6 text-display-lg-mobile md:text-display-lg">
                  Let&apos;s refine your processes.
                </h2>
                <p className="mb-10 text-body-lg text-on-primary/80">
                  Available for consulting on Quality Management Systems, audit
                  preparation, or permanent specialist roles in precision-focused
                  industries.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/contact"
                    className="rounded bg-on-primary px-10 py-4 text-center font-display text-label-md text-primary transition-colors hover:bg-tertiary-fixed"
                  >
                    Start a Conversation
                  </Link>
                  <WhatsAppButton
                    variant="on-dark"
                    label="WhatsApp"
                    className="px-10 py-4"
                  />
                  <Link
                    href="/contact"
                    className="rounded border border-on-primary px-10 py-4 text-center font-display text-label-md text-on-primary transition-colors hover:bg-on-primary/10"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>

      <Footer />
    </>
  );
}
