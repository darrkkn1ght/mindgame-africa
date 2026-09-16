"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionImage } from "@/components/ui/SectionImage";
import { peopleContent } from "@/lib/content";

interface PersonDetailProps {
  params: Promise<{ slug: string }>;
}

export default function PersonDetailPage({ params }: PersonDetailProps) {
  const { slug } = use(params);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // Match supported profile slugs
  const isFounder =
    slug === "dr-joshua-a-oparachukwu" ||
    slug === "joshua-oparachukwu" ||
    slug === "leadership";

  if (!isFounder) {
    notFound();
  }

  const { founder } = peopleContent;
  const visibleBio = founder.fullBio.slice(0, 2);
  const remainingBio = founder.fullBio.slice(2);

  return (
    <article className="min-h-screen bg-cream">
      {/* ── Breadcrumb & Back Link ── */}
      <div className="border-b border-navy/[0.08] bg-white">
        <div className="mx-auto max-w-[80rem] px-5 py-4 md:px-12">
          <Link
            href="/people"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/70 hover:text-navy transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to People & Leadership</span>
          </Link>
        </div>
      </div>

      {/* ── Profile Header & Short Bio ── */}
      <section className="relative bg-navy py-16 md:py-24 text-cream">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Portrait Slot */}
            <div className="lg:col-span-4">
              <SectionImage
                name="Dr. Joshua A. Oparachukwu"
                subject="Founder & Intellectual Lead"
                alt="Dr. Joshua A. Oparachukwu, Founder of MindGame Africa"
                aspectRatio="4/3"
                variant="navy"
                caption="FOUNDER & INTELLECTUAL LEAD // §12.2"
                className="shadow-xl"
              />
            </div>

            {/* Title & Short Profile */}
            <div className="lg:col-span-8">
              <SectionEyebrow
                variant="gold"
                label={founder.role}
                className="mb-4"
              />
              <h1 className="font-[family-name:var(--font-fraunces)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12] mb-3">
                {founder.name}
              </h1>
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-gold text-sm md:text-base font-semibold tracking-wide mb-6">
                {founder.designation}
              </p>

              {/* Short Profile Intro */}
              <p className="text-cream/85 text-base md:text-lg leading-relaxed max-w-[720px]">
                {founder.shortProfile}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full Bio, Density Expander, Leadership Focus & Institutional Role ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="max-w-[880px] space-y-16">
            {/* Full Biography with Crawlable CSS Expander */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 md:p-12 border border-navy/[0.08] shadow-[0_4px_24px_rgba(16,35,63,0.05)]"
            >
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-navy mb-6">
                Biography
              </h2>

              {/* First two paragraphs visible by default */}
              <div className="space-y-4 text-navy/80 text-base md:text-[1.0625rem] leading-[1.7]">
                {visibleBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Remaining paragraphs kept in DOM for SEO crawlability */}
              <div
                id="remaining-bio"
                className={`space-y-4 text-navy/80 text-base md:text-[1.0625rem] leading-[1.7] pt-4 ${
                  isBioExpanded ? "block" : "hidden"
                }`}
              >
                {remainingBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Expander Toggle */}
              <div className="mt-6 pt-4 border-t border-navy/[0.06]">
                <button
                  type="button"
                  onClick={() => setIsBioExpanded(!isBioExpanded)}
                  aria-expanded={isBioExpanded}
                  aria-controls="remaining-bio"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy hover:text-gold transition-colors"
                >
                  <span>{isBioExpanded ? "Show Less" : "Read Full Profile"}</span>
                  {isBioExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              {/* Leadership Statement Quote */}
              <div className="mt-10 pt-8 border-t border-navy/[0.08]">
                <blockquote className="border-l-2 border-gold pl-5 py-1">
                  <p className="font-[family-name:var(--font-fraunces)] text-navy text-lg md:text-xl leading-relaxed italic">
                    &ldquo;{founder.leadershipStatement}&rdquo;
                  </p>
                  <footer className="mt-3 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-wider text-navy/60">
                    — {founder.name}, Founder
                  </footer>
                </blockquote>
              </div>

              {/* Verified Credential Facts Only */}
              <div className="mt-8 pt-6 border-t border-navy/[0.08]">
                <span className="text-xs font-semibold uppercase tracking-wider font-[family-name:var(--font-jetbrains-mono)] text-navy/50 block mb-3">
                  Academic Background
                </span>
                <ul className="space-y-2 text-sm md:text-[0.9375rem]">
                  {founder.academicBackground.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-navy/75">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Leadership Focus */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionEyebrow
                variant="gold-dark"
                label="AREAS OF FOCUS"
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-6">
                Leadership Focus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {founder.leadershipFocus.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-navy/[0.06] shadow-[0_1px_4px_rgba(16,35,63,0.03)]"
                  >
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-gold shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-navy/80 text-sm md:text-[0.9375rem] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership Role Within MindGame Africa */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-navy p-8 md:p-10 text-cream"
            >
              <SectionEyebrow
                variant="gold"
                label="INSTITUTIONAL RESPONSIBILITY"
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-cream mb-5">
                Leadership Role Within MindGame Africa
              </h2>
              <div className="space-y-4 text-cream/80 text-base leading-relaxed">
                {founder.institutionalRole.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Selected Research and Scholarly Interests (Secondary Block) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionEyebrow
                variant="gold-dark"
                label="SCHOLARLY INQUIRY"
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold tracking-tight text-navy mb-6">
                Selected Research and Scholarly Interests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {founder.researchInterests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-navy/[0.06] shadow-[0_1px_4px_rgba(16,35,63,0.03)]"
                  >
                    <span className="w-2 h-2 rounded-full bg-green shrink-0 mt-2" aria-hidden="true" />
                    <span className="text-navy/80 text-sm md:text-[0.9375rem] leading-snug">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}
