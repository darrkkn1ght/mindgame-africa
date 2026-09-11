"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Pillar {
  number: string;
  title: string;
  description: string;
  accent: "gold" | "green";
  theme: "navy" | "cream";
  href: string;
  isFeatured?: boolean;
  tags?: string[];
  secondaryLink?: {
    text: string;
    linkText: string;
    href: string;
  };
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Applied Performance Practice",
    description:
      "Evidence-informed assessment and intervention for athletes, coaches, teams and other high-pressure performers, with particular strength in performance psychology, mental performance and behavioural performance.",
    accent: "gold",
    theme: "navy",
    href: "/performance-services/applied-performance-practice",
    isFeatured: true,
    tags: ["Performance Psychology", "Mental Performance", "Behavioural Performance"],
  },
  {
    number: "02",
    title: "Performance Science",
    description:
      "A multidisciplinary approach to understanding performance through the interaction of psychological, behavioural, physiological, biomechanical, technical, analytical and contextual factors.",
    accent: "green",
    theme: "cream",
    href: "/research/performance-science",
  },
  {
    number: "03",
    title: "Research & Knowledge",
    description:
      "Original and commissioned research, programme evaluation, evidence reviews, frameworks, reports and knowledge translation focused on real performance questions.",
    accent: "gold",
    theme: "cream",
    href: "/research",
  },
  {
    number: "04",
    title: "Education & Professional Development",
    description:
      "Short courses, workshops, masterclasses and structured learning for practitioners, coaches, students and sport professionals, with clear learning outcomes and accurate certificate language.",
    accent: "green",
    theme: "navy",
    href: "/education",
  },
  {
    number: "05",
    title: "Practitioner Development",
    description:
      "MindGame Africa is being built to help strengthen the route from academic learning to competent professional practice. This includes future opportunities for internships, supervised experience, practitioner education, mentoring, applied projects and collaboration with universities and experienced specialists.",
    accent: "gold",
    theme: "cream",
    href: "/education",
    secondaryLink: {
      text: "Interested in future opportunities?",
      linkText: "Get in touch.",
      href: "/partner-with-us",
    },
  },
];

export function Pillars() {
  return (
    <section id="what-we-do" className="relative bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        {/* ── Section Header ── */}
        <div className="max-w-[760px] mb-12 md:mb-16">
          <SectionEyebrow
            variant="gold-dark"
            label="WHAT WE DO"
            className="mb-4"
          />
          <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
            How MindGame Africa Works Across Performance.
          </h2>
        </div>

        {/* ── Asymmetric 5-Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {pillars.map((pillar, idx) => {
            const isNavy = pillar.theme === "navy";
            const isGold = pillar.accent === "gold";

            return (
              <motion.article
                key={pillar.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`group relative flex flex-col justify-between rounded-xl overflow-hidden p-7 md:p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 ${
                  pillar.isFeatured
                    ? "md:col-span-2 lg:col-span-2 min-h-[320px]"
                    : "col-span-1 min-h-[290px]"
                } ${
                  isNavy
                    ? "bg-navy text-cream shadow-[0_4px_20px_rgba(16,35,63,0.14)] hover:shadow-[0_20px_38px_-10px_rgba(16,35,63,0.38)]"
                    : "bg-white text-navy border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(16,35,63,0.12)] hover:border-navy/[0.18]"
                }`}
              >
                {/* ── Top accent border line ── */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:h-[4px] ${
                    isGold ? "bg-gold group-hover:bg-[#e4b354]" : "bg-green group-hover:bg-[#3d8b67]"
                  }`}
                  aria-hidden="true"
                />

                {/* ── Card Upper Section: Number + Title ── */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span
                      className={`font-[family-name:var(--font-jetbrains-mono)] text-xs md:text-sm font-semibold tracking-wider ${
                        isGold ? "text-gold" : "text-green"
                      }`}
                    >
                      {pillar.number}
                    </span>

                    {pillar.isFeatured && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[0.6875rem] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider font-medium bg-gold/15 text-gold border border-gold/30">
                        Primary Practice Offering
                      </span>
                    )}
                  </div>

                  <h3
                    className={`font-[family-name:var(--font-fraunces)] font-bold tracking-tight mb-3 ${
                      pillar.isFeatured
                        ? "text-2xl sm:text-3xl lg:text-[2rem] leading-tight"
                        : "text-xl sm:text-2xl leading-snug"
                    } ${isNavy ? "text-cream" : "text-navy"}`}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className={`text-[0.9375rem] sm:text-base leading-[1.65] ${
                      pillar.isFeatured ? "max-w-[620px]" : "max-w-[480px]"
                    } ${isNavy ? "text-cream/80" : "text-navy/70"}`}
                  >
                    {pillar.description}
                  </p>

                  {pillar.secondaryLink && (
                    <p className="mt-3 text-xs sm:text-[0.8125rem] text-navy/60">
                      {pillar.secondaryLink.text}{" "}
                      <Link
                        href={pillar.secondaryLink.href}
                        className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors"
                      >
                        {pillar.secondaryLink.linkText}
                      </Link>
                    </p>
                  )}
                </div>

                {/* ── Card Lower Section: Tags / Action Link ── */}
                <div className="pt-6 mt-6 border-t border-current/10 flex flex-wrap items-center justify-between gap-3">
                  {pillar.tags && (
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[0.75rem] font-medium bg-white/10 text-cream/90 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-jetbrains-mono)] transition-colors duration-200 ml-auto ${
                      isNavy
                        ? "text-gold hover:text-white"
                        : "text-navy/80 hover:text-navy"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
