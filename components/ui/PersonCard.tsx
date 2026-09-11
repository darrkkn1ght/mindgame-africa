import { ArrowUpRight } from "lucide-react";

export interface Person {
  name: string;
  role: string;
  areaOfExpertise?: string;
  bio: string;
  qualifications?: string[];
  selectedWork?: string[];
  links?: {
    label: string;
    href: string;
  }[];
}

export interface PersonCardProps {
  person: Person;
  variant?: "default" | "navy";
  className?: string;
}

export function PersonCard({
  person,
  variant = "default",
  className = "",
}: PersonCardProps) {
  const isNavy = variant === "navy";

  return (
    <article
      className={`rounded-xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 ${
        isNavy
          ? "bg-navy-soft text-cream border border-white/10 shadow-[0_4px_20px_rgba(16,35,63,0.14)]"
          : "bg-white text-navy border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(16,35,63,0.12)]"
      } ${className}`}
    >
      <div>
        {/* Header: Role & Expertise */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
            {person.role}
          </span>
          {person.areaOfExpertise && (
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-medium text-gold">
              {person.areaOfExpertise}
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          className={`font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl font-bold tracking-tight mb-4 ${
            isNavy ? "text-cream" : "text-navy"
          }`}
        >
          {person.name}
        </h3>

        {/* Short Bio */}
        <p
          className={`text-base leading-relaxed ${
            isNavy ? "text-cream/80" : "text-navy/75"
          }`}
        >
          {person.bio}
        </p>

        {/* Qualifications */}
        {person.qualifications && person.qualifications.length > 0 && (
          <div className="mt-6 pt-5 border-t border-current/10">
            <span
              className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] block mb-2.5 ${
                isNavy ? "text-cream/50" : "text-navy/50"
              }`}
            >
              Qualifications & Credentials
            </span>
            <ul className="space-y-1.5 text-sm">
              {person.qualifications.map((qual, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    isNavy ? "text-cream/80" : "text-navy/70"
                  }`}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                    aria-hidden="true"
                  />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Selected Work (optional) */}
        {person.selectedWork && person.selectedWork.length > 0 && (
          <div className="mt-5 pt-4 border-t border-current/10">
            <span
              className={`text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] block mb-2.5 ${
                isNavy ? "text-cream/50" : "text-navy/50"
              }`}
            >
              Selected Work
            </span>
            <ul className="space-y-1.5 text-sm">
              {person.selectedWork.map((work, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2.5 ${
                    isNavy ? "text-cream/80" : "text-navy/70"
                  }`}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0"
                    aria-hidden="true"
                  />
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Verified Professional Profiles / Links (optional) */}
      {person.links && person.links.length > 0 && (
        <div className="mt-6 pt-5 border-t border-current/10 flex flex-wrap items-center gap-4">
          {person.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-jetbrains-mono)] transition-colors ${
                isNavy
                  ? "text-gold hover:text-white"
                  : "text-navy hover:text-gold"
              }`}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={13} className="shrink-0" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
