import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FlaskConical,
} from "lucide-react";
import Link from "next/link";
import { FadeInSection } from "../components/FadeInSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Experience & Skills | QualitySpecialist",
  description:
    "A comprehensive overview of quality assurance experience, technical competencies, and professional timeline.",
};

const skillGroups = [
  {
    icon: FlaskConical,
    title: "Automation & Testing",
    span: "md:col-span-2",
    tags: ["Selenium", "Appium", "JUnit", "Postman", "Cypress", "PyTest"],
  },
  {
    icon: ClipboardCheck,
    title: "Management",
    span: "",
    tags: ["JIRA", "Confluence", "Trello"],
  },
  {
    icon: Database,
    title: "Data",
    span: "",
    tags: ["SQL", "MongoDB"],
  },
];

const methodologies = [
  "Six Sigma Yellow Belt",
  "Lean Management",
  "ISO 9001 Auditing",
  "Agile/Scrum",
];

const timeline = [
  {
    current: true,
    period: "Jan 2023 – Present",
    role: "Senior QA Associate",
    company: "Nexus Systems Engineering",
    badge: "FULL-TIME",
    highlights: [
      <>
        Spearheaded a department-wide transition to{" "}
        <strong>ISO 9001:2015</strong> standards, reducing audit
        non-conformities by 40% within the first fiscal year.
      </>,
      <>
        Designed and maintained automated regression suites using{" "}
        <strong>Selenium WebDriver</strong> and Java, achieving 85% test
        coverage for core financial modules.
      </>,
      <>
        Mentored a team of 4 junior analysts on Root Cause Analysis (RCA)
        techniques, decreasing defect leakage into production by 22%.
      </>,
    ],
  },
  {
    current: false,
    period: "Jun 2021 – Dec 2022",
    role: "Quality Assurance Analyst",
    company: "Vertex Digital Solutions",
    highlights: [
      <>
        Executed comprehensive <strong>manual testing</strong> cycles for
        high-traffic e-commerce platforms, documenting over 500+ critical bugs
        in JIRA.
      </>,
      <>
        Collaborated with cross-functional Dev teams to perform{" "}
        <strong>Root Cause Analysis</strong> on high-priority production
        incidents, improving resolution time by 15%.
      </>,
      <>
        Optimized SQL queries for backend data validation, ensuring 100% data
        integrity across complex migration projects.
      </>,
    ],
  },
  {
    current: false,
    period: "Jan 2021 – May 2021",
    role: "Junior Quality Specialist (Intern)",
    company: "CoreTech Manufacturing",
    highlights: [
      <>
        Assisted Senior Auditors in performing <strong>Six Sigma</strong> process
        evaluations for assembly line hardware components.
      </>,
      <>
        Maintained technical documentation and user acceptance testing (UAT)
        scripts for internal ERP tools.
      </>,
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="mx-auto grid max-w-container-max items-center gap-12 px-gutter py-section-padding-mobile md:grid-cols-2 md:py-20">
          <FadeInSection className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
              <BadgeCheck className="h-[18px] w-[18px] fill-current" strokeWidth={1.5} />
              <span className="font-display text-[12px] uppercase tracking-wider">
                Verified Professional Credentials
              </span>
            </div>
            <h1 className="text-display-lg-mobile text-primary md:text-display-lg">
              Precision in Every Lifecycle.
            </h1>
            <p className="max-w-lg text-body-lg text-on-surface-variant">
              A comprehensive overview of my three-year journey through the
              rigorous landscapes of Quality Assurance, ISO compliance, and process
              optimization.
            </p>
          </FadeInSection>

          <FadeInSection className="relative aspect-square overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high md:aspect-video">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCNRDmhjj01HZKPMYaMqufqgD5DHomLC8E3hrpgxYp3j8m2olFUZjaDW2Z2k3gYpfdjZNwVSm_wTSljEV1-KjtTVuECj2CC3sXjFz-fQ_fe6Lrl4sJFhXVrhUKw2ACoPx2zrALLRSOm1kBSrkP_GJBGFHVv6uttT4_qjR0tTQwBIVbOCj3djKq3a_GGXCWyykD1sn0nJqEnCa8ZUaoZ9c4lbP9IiWbJwNcGAN3DkZHniudLl9e1AZFGbwPVAqUGCW8tC3fMStnqNgr"
              alt="Data Quality Metrics"
              width={640}
              height={360}
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </FadeInSection>
        </section>

        {/* Skills bento grid */}
        <section className="border-y border-outline-variant bg-white">
          <div className="mx-auto max-w-container-max px-gutter py-section-padding-mobile md:py-24">
            <FadeInSection>
              <div className="mb-12">
                <h2 className="mb-2 text-headline-md text-primary">
                  Technical Core Competencies
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  Audited toolset for modern software and process engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {skillGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={group.title}
                      className={`rounded-xl border border-outline-variant bg-surface p-8 transition-all hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)] ${group.span}`}
                    >
                      <div className="mb-6 flex items-center gap-3">
                        <Icon className="h-6 w-6 text-on-tertiary-container" />
                        <h3 className="font-display text-lg text-primary">
                          {group.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-outline-variant/30 bg-[#F1F5F9] px-3 py-1 font-display text-[12px] text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}

                <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-outline-variant bg-primary p-8 text-on-primary md:col-span-4 md:flex-row">
                  <div>
                    <h3 className="mb-2 font-display text-xl">
                      Quality Assurance Methodologies
                    </h3>
                    <p className="text-body-md opacity-80">
                      Certified standards for operational excellence and defect
                      prevention.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 md:justify-end">
                    {methodologies.map((method) => (
                      <div
                        key={method}
                        className="flex items-center gap-2 rounded-lg border border-on-primary/30 px-4 py-2"
                      >
                        <CheckCircle2
                          className="h-5 w-5 text-[#0EA5E9]"
                          fill="#0EA5E9"
                          strokeWidth={0}
                        />
                        <span className="font-display text-label-md">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-container-max px-gutter py-section-padding-mobile md:py-24">
          <FadeInSection className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="text-headline-md text-primary">Professional Timeline</h2>
              <div className="mx-auto mt-4 h-1 w-12 bg-primary" />
            </div>

            <div className="space-y-12">
              {timeline.map((item) => (
                <div
                  key={item.role}
                  className="timeline-item relative pl-12 transition-transform"
                >
                  <div className="timeline-line" />
                  <div
                    className={`timeline-dot absolute top-1 left-0 z-10 flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-200 ${
                      item.current
                        ? "bg-primary"
                        : "border-2 border-outline-variant bg-surface"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        item.current ? "bg-white" : "bg-outline-variant"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span
                        className={`font-display text-[12px] uppercase tracking-widest ${
                          item.current
                            ? "text-on-tertiary-container"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {item.period}
                      </span>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-primary">
                        {item.role}
                      </h3>
                      <p className="font-body text-body-md font-semibold text-secondary">
                        {item.company}
                      </p>
                    </div>
                    {item.badge && (
                      <span className="hidden rounded border border-outline-variant px-4 py-1 font-display text-[12px] text-on-surface-variant md:block">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div
                    className={`mt-6 rounded-xl border border-outline-variant p-8 ${
                      item.current ? "bg-white shadow-sm" : "bg-surface"
                    }`}
                  >
                    <ul className="space-y-4 text-body-md text-on-surface-variant">
                      {item.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check
                            className={`mt-0.5 h-5 w-5 shrink-0 ${
                              item.current ? "text-[#0EA5E9]" : "text-outline-variant"
                            }`}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* CTA */}
        <section className="bg-surface-container-low">
          <FadeInSection className="mx-auto max-w-container-max px-gutter py-20 text-center">
            <h2 className="mb-6 font-display text-3xl text-primary italic md:text-4xl">
              &ldquo;Quality is not an act, it is a habit.&rdquo;
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-body-lg text-on-surface-variant">
              Looking for a specialist to audit your systems or lead your QA
              department? Let&apos;s discuss how we can achieve operational
              excellence together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-label-md text-on-primary transition-all hover:opacity-90"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border border-primary px-8 py-4 font-display text-label-md text-primary transition-all hover:bg-primary hover:text-on-primary"
              >
                View Portfolio
              </Link>
            </div>
          </FadeInSection>
        </section>
      </main>

      <Footer />
    </>
  );
}
