import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? "elnagarmoaz0@gmail.com";

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

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("Missing SMTP_USER or SMTP_PASS environment variables.");
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const inquiryLabel = inquiryLabels[type] ?? "General";
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${smtpUser}>`,
      to: CONTACT_TO,
      replyTo: `"${name}" <${email}>`,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
