import Link from "next/link";

const footerLinks = {
  "What We Do": [
    { label: "Performance Services", href: "/performance-services" },
    { label: "Research", href: "/research" },
    { label: "Education", href: "/education" },
  ],
  Organisation: [
    { label: "About", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Insights", href: "/insights" },
  ],
  Connect: [
    { label: "Partner With Us", href: "/partner-with-us" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12 py-16 md:py-24">
        {/* Top row: brand + link columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 md:gap-8">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-fraunces)] text-xl font-bold tracking-tight"
            >
              <span className="text-gold">MG</span>{" "}
              MindGame Africa
            </Link>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-cream/60 max-w-xs">
              Developing the human and intellectual infrastructure of performance in Africa.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-cream/40 mb-5 font-[family-name:var(--font-jetbrains-mono)]">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.875rem] text-cream/70 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[0.8125rem] text-cream/40">
            © {new Date().getFullYear()} MindGame Africa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* TODO: build /privacy and /terms pages before real launch */}
            <Link href="#" className="text-[0.8125rem] text-cream/40 hover:text-cream/70 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-[0.8125rem] text-cream/40 hover:text-cream/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
