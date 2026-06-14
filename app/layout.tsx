import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Serif_4 } from "next/font/google";
import { WhatsAppFloat } from "./components/WhatsAppButton";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "QualitySpecialist | Professional Portfolio",
  description:
    "Quality Specialist & Auditor portfolio — ensuring precision in every layer of production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${sourceSerif.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface selection:bg-secondary-container">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
