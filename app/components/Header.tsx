"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navLinkClass = (href: string, mobile = false) => {
    const active = isActive(href);
    const base =
      "font-display text-label-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2";

    if (mobile) {
      return `${base} block w-full rounded px-4 py-3 ${
        active
          ? "bg-surface-container-low text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
      }`;
    }

    return `${base} relative py-1 ${
      active
        ? "text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary after:content-['']"
        : "text-on-surface-variant hover:text-primary"
    }`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white transition-all duration-300 ease-in-out ${
        scrolled
          ? "border-b border-outline-variant/30 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-container-max items-center justify-between px-gutter transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={closeMobile}
          className="font-display text-headline-md font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
        >
          QualitySpecialist
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded bg-primary px-6 py-2.5 font-display text-label-md text-on-primary transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 md:inline-flex"
          >
            Download Resume
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded border border-outline-variant/40 p-2.5 text-primary transition-colors hover:bg-surface-container-low focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-outline-variant/20 bg-white transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="mx-auto flex max-w-container-max flex-col gap-1 px-gutter py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(link.href, true)}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={closeMobile}
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            className="mt-2 w-full rounded bg-primary px-6 py-3 font-display text-label-md text-on-primary transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
            onClick={closeMobile}
          >
            Download Resume
          </button>
        </div>
      </div>
    </header>
  );
}
