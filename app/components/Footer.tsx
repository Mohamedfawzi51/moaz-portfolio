import { contact, getWhatsAppUrl } from "../data/contact";

const footerLinks = [
  { label: "LinkedIn", href: contact.linkedinUrl },
  { label: "GitHub", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="mt-auto w-full border-t border-outline-variant/30 bg-surface-container-low dark:bg-surface-container-highest">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-6 px-gutter py-12 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-label-md font-semibold text-on-surface dark:text-on-surface-variant">
            QualitySpecialist
          </p>
          <p className="mt-2 text-body-md text-secondary opacity-90 dark:text-secondary-fixed">
            Precision. Reliability. Authority.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-label-md text-[#128C7E] transition-colors hover:text-[#25D366]"
            >
              WhatsApp
            </a>
          )}
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-label-md text-on-secondary-container transition-colors hover:text-primary dark:text-secondary-fixed-dim dark:hover:text-tertiary-fixed"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-body-md text-secondary opacity-70 dark:text-secondary-fixed">
          © 2024 Quality Specialist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
