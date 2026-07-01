import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ExternalLink, FolderKanban } from "lucide-react";
import Link from "next/link";
import { FadeInSection } from "../components/FadeInSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { projects } from "../data/projects";
import profile from "../../public/moaz2-profile.jpeg";
export const metadata: Metadata = {
  title: "Projects & Case Studies | QualitySpecialist",
  description:
    "Case studies and audits showcasing process optimization and quality control across manufacturing and software sectors.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="border-b border-outline-variant bg-white">
          <div className="mx-auto grid max-w-container-max items-center gap-12 px-gutter py-section-padding-mobile md:grid-cols-2 md:py-20">
            <FadeInSection className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1 text-on-secondary-container">
                <FolderKanban className="h-[18px] w-[18px]" strokeWidth={1.5} />
                <span className="font-display text-[12px] uppercase tracking-wider">
                  Case Studies &amp; Audits
                </span>
              </div>
              <h1 className="text-display-lg-mobile text-primary md:text-display-lg">
                Evidence of Operational Excellence.
              </h1>
              <p className="max-w-lg text-body-lg text-on-surface-variant">
                Detailed records of quality control implementation, audit outcomes,
                and process optimization across high-stakes manufacturing and
                software environments.
              </p>
            </FadeInSection>

            <FadeInSection className="relative aspect-square overflow-hidden rounded-xl border border-outline-variant bg-surface-container-high md:aspect-video">
              <Image
                src={profile}
                alt="Quality audit workspace"
                width={640}
                height={360}
                className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
            </FadeInSection>
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-primary py-12 text-on-primary">
          <FadeInSection className="mx-auto grid max-w-container-max grid-cols-2 gap-8 px-gutter md:grid-cols-4">
            {[
              { value: "6", label: "Featured Case Studies" },
              { value: "100%", label: "Audit Pass Rate" },
              { value: "4", label: "Industry Sectors" },
              { value: "3y+", label: "Documented Impact" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-l border-outline-variant/30 pl-6 text-center md:text-left"
              >
                <p className="mb-1 text-display-lg">{stat.value}</p>
                <p className="font-display text-label-md uppercase text-on-primary/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </FadeInSection>
        </section>

        {/* Project grid */}
        <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
          <div className="mx-auto max-w-container-max px-gutter">
            <FadeInSection>
              <div className="mb-12 max-w-xl">
                <h2 className="mb-4 text-headline-md">All Case Studies</h2>
                <p className="text-body-md text-on-surface-variant">
                  Each engagement reflects a measurable improvement in compliance,
                  defect reduction, or operational efficiency.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="group flex h-full flex-col border border-outline-variant bg-surface p-8 transition-all duration-300 hover:border-primary hover:shadow-[0px_4px_20px_rgba(15,23,42,0.05)]"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <span className="font-display text-label-md text-outline">
                        {project.date}
                      </span>
                      <ExternalLink className="h-5 w-5 text-outline transition-colors group-hover:text-primary" />
                    </div>

                    <p className="mb-2 font-display text-[12px] uppercase tracking-wider text-on-tertiary-container">
                      {project.sector}
                    </p>
                    <h3 className="mb-4 font-display text-[22px] font-semibold leading-[1.3] text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-6 grow text-body-md text-on-surface-variant">
                      {project.description}
                    </p>

                    <div className="mb-4 rounded-lg bg-surface-container-low px-4 py-3">
                      <p className="font-display text-[12px] uppercase tracking-wider text-outline">
                        Key Outcome
                      </p>
                      <p className="font-display text-label-md text-primary">
                        {project.outcome}
                      </p>
                    </div>

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
                  </article>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding-mobile md:py-20">
          <FadeInSection className="mx-auto max-w-container-max px-gutter text-center">
            <h2 className="mb-6 text-headline-md text-primary">
              Need a similar audit or optimization?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-body-lg text-on-surface-variant">
              I work with teams across manufacturing, medical devices, and
              enterprise software to deliver measurable quality improvements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-label-md text-on-primary transition-all hover:opacity-90"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/experience"
                className="rounded-lg border border-primary px-8 py-4 font-display text-label-md text-primary transition-all hover:bg-primary hover:text-on-primary"
              >
                View Experience
              </Link>
            </div>
          </FadeInSection>
        </section>
      </main>

      <Footer />
    </>
  );
}
