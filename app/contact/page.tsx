import type { Metadata } from "next";
import { CheckCircle2, Mail, User } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { FadeInSection } from "../components/FadeInSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { contact } from "../data/contact";

export const metadata: Metadata = {
  title: "Contact | QualitySpecialist",
  description:
    "Get in touch for quality audits, software testing, or strategic QA consulting.",
};

const availability = [
  "Accepting Q3-Q4 Contracts",
  "Remote & On-site Audits",
  "WhatsApp & email replies within 4h",
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-container-max flex-grow px-gutter pt-32 pb-section-padding-mobile md:pb-section-padding-desktop">
        <FadeInSection>
          <header className="mb-16 max-w-3xl text-left md:mb-24">
            <span className="mb-4 block font-display text-label-md uppercase tracking-widest text-secondary">
              Direct Access
            </span>
            <h1 className="mb-6 text-display-lg-mobile text-primary md:text-display-lg">
              Let&apos;s collaborate on your next project.
            </h1>
            <p className="text-body-lg leading-relaxed text-on-surface-variant">
              Whether you need a full quality audit, specialized software testing,
              or strategic QA consulting, I am ready to ensure your systems perform
              with absolute precision.
            </p>
            <div className="mt-8">
              <WhatsAppButton variant="primary" />
            </div>
          </header>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            <aside className="space-y-12 lg:col-span-4">
              <div>
                <h2 className="mb-6 text-headline-md text-primary">
                  Communication Channels
                </h2>
                <div className="space-y-6">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group -ml-4 flex items-start rounded-lg p-4 transition-all hover:bg-surface-container-low"
                  >
                    <div className="mr-4 rounded bg-surface-container p-2 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-label-md text-secondary">
                        Email Address
                      </p>
                      <p className="font-body text-body-md font-semibold text-primary">
                        {contact.email}
                      </p>
                    </div>
                  </a>

                  <WhatsAppButton variant="channel" />

                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -ml-4 flex items-start rounded-lg p-4 transition-all hover:bg-surface-container-low"
                  >
                    <div className="mr-4 rounded bg-surface-container p-2 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display text-label-md text-secondary">
                        LinkedIn Profile
                      </p>
                      <p className="font-body text-body-md font-semibold text-primary">
                        {contact.linkedinLabel}
                      </p>
                    </div>
                  </a>

                  <div className="mt-8 border-t border-outline-variant pt-8">
                    <p className="mb-4 font-display text-label-md text-secondary">
                      Availability Status
                    </p>
                    <ul className="space-y-3">
                      {availability.map((item) => (
                        <li key={item} className="flex items-center text-on-surface">
                          <CheckCircle2 className="mr-2 h-[18px] w-[18px] text-on-tertiary-container" />
                          <span className="font-display text-label-md">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative hidden aspect-video overflow-hidden rounded-xl border border-outline-variant bg-surface-container lg:block">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-surface via-transparent to-transparent p-8">
                  <p className="text-center font-body text-body-md italic text-on-surface-variant">
                    &ldquo;Precision is not an accident; it is always the result of
                    high intention, sincere effort, intelligent direction and skillful
                    execution.&rdquo;
                  </p>
                </div>
              </div>
            </aside>

            <section className="border border-outline-variant bg-surface-container-lowest p-8 shadow-sm md:p-12 lg:col-span-8">
              <ContactForm />
            </section>
          </div>
        </FadeInSection>
      </main>

      <Footer />
    </>
  );
}
