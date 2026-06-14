const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const contact = {
  email: "elnagarmoaz0@gmail.com",
  linkedinUrl: "https://linkedin.com/in/qualityspecialist",
  linkedinLabel: "linkedin.com/in/qualityspecialist",
  whatsappNumber,
  whatsappDisplay:
    process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ||
    (whatsappNumber ? `+${whatsappNumber}` : ""),
};

export function getWhatsAppUrl(
  message = "Hello, I would like to get in touch about a project.",
) {
  if (!contact.whatsappNumber) return null;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsApp = Boolean(contact.whatsappNumber);
