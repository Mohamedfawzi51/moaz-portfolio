import { contact, getWhatsAppUrl, hasWhatsApp } from "../data/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  variant?: "primary" | "outline" | "on-dark" | "channel";
};

export function WhatsAppButton({
  className = "",
  label = "Chat on WhatsApp",
  variant = "primary",
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl();
  if (!url) return null;

  if (variant === "channel") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`group -ml-4 flex items-start rounded-lg p-4 transition-all hover:bg-surface-container-low ${className}`}
      >
        <div className="mr-4 rounded bg-[#25D366]/10 p-2 text-[#25D366]">
          <WhatsAppIcon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-display text-label-md text-secondary">WhatsApp</p>
          <p className="font-body text-body-md font-semibold text-primary">
            {contact.whatsappDisplay}
          </p>
        </div>
      </a>
    );
  }

  const styles =
    variant === "outline"
      ? "border border-[#25D366] text-[#128C7E] hover:bg-[#25D366]/10"
      : variant === "on-dark"
        ? "border border-[#25D366] text-white hover:bg-[#25D366]"
        : "bg-[#25D366] text-white hover:bg-[#20BD5A]";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded px-8 py-4 font-display text-label-md transition-all ${styles} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}

export function WhatsAppFloat() {
  const url = getWhatsAppUrl();
  if (!hasWhatsApp || !url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20BD5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
