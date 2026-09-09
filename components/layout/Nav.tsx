"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Performance Services", href: "/performance-services" },
  { label: "Research", href: "/research" },
  { label: "Education", href: "/education" },
  { label: "Insights", href: "/insights" },
  { label: "People", href: "/people" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-navy/[0.06]">
      <nav className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-4 md:px-12">
        {/* Wordmark — clean Fraunces type, no box */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          {/* Small navy square mark with cream initials */}
          <span className="flex items-center justify-center w-8 h-8 bg-navy text-cream font-[family-name:var(--font-fraunces)] text-[0.75rem] font-semibold rounded-[3px] leading-none tracking-tight">
            MG
          </span>
          <span className="font-[family-name:var(--font-fraunces)] text-[1.2rem] font-semibold text-navy tracking-tight">
            <span className="relative">
              MindGame
              {/* Thin gold underline beneath MindGame only */}
              <span className="absolute left-0 -bottom-[3px] w-full h-[1.5px] bg-gold/60" />
            </span>
            <span className="ml-1.5">Africa</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.875rem] font-medium text-navy/70 hover:text-navy transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/partner-with-us"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-navy text-cream text-[0.8125rem] font-semibold rounded-md hover:bg-navy-soft transition-colors duration-200"
        >
          Partner With Us
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-navy/[0.06] px-5 pb-6">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-[0.9375rem] font-medium text-navy/80 hover:text-navy border-b border-navy/[0.04]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/partner-with-us"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center px-5 py-3 bg-navy text-cream text-[0.875rem] font-semibold rounded-md w-full justify-center"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
