import { Resend } from "resend";
import { NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "elnagarmoaz0@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

const inquiryLabels: Record<string, string> = {
  audit: "Quality Audit",
  test: "Testing",
  consult: "Consultancy",
  other: "General",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey.includes("REPLACE_WITH")) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Add RESEND_API_KEY to .env.local, then restart the dev server.",
        },
        { status: 503 },
      );
    }

    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const company = String(body.company ?? "").trim();
    const type = String(body.type ?? "other");
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const inquiryLabel = inquiryLabels[type] ?? "General";
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `New inquiry: ${inquiryLabel} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Inquiry type: ${inquiryLabel}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Inquiry type:</strong> ${inquiryLabel}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
