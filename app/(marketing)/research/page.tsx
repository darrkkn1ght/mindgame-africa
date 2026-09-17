"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { researchContent } from "@/lib/content";

export default function ResearchPage() {
  const { hero, mandate, themes, approach, collaborate, outputsStatus } =
    researchContent;

  return (
    <>
      {/* ── 1. Hero (§8.1) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[780px]"
          >
            <SectionEyebrow
              variant="gold"
              label={hero.eyebrow}
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              {hero.heading}
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              {hero.supportingSentence}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Our Research Mandate (§8.2) paired with Image Slot 1 ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[680px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={mandate.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {mandate.heading}
              </h2>
              <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed">
                <p>{mandate.paragraph1}</p>
                <p>{mandate.paragraph2}</p>
              </div>
            </motion.div>

            {/* Image Slot 1 (§17: Multidisciplinary Research & Inquiry) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/researchers-at-work/research-mandate-investigation-4x3.jpg"
                name="Scientific Inquiry"
                subject="Field-Based Performance Research"
                alt="MindGame Africa Research — Contextual investigation and performance science in African sport environments."
                aspectRatio="4/3"
                variant="cream"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Research Themes (§8.3) ──
          Framed explicitly as current research interests and developing themes, NOT completed research programmes.
          Rendered as a 10-card grid, never a bullet list.
      ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[720px]"
            >
              <SectionEyebrow
                variant="gold"
                label={themes.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {themes.heading}
              </h2>
              <p className="mt-4 text-cream/70 text-base md:text-lg leading-relaxed">
                {themes.subheading}
              </p>
            </motion.div>
          </div>

          {/* Performance Science pillar callout */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10"
          >
            <Link
              href="/research/performance-science"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-xl bg-navy-soft p-7 md:p-8 max-w-[920px] transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(16,35,63,0.14)] hover:shadow-[0_20px_38px_-10px_rgba(16,35,63,0.38)] border border-white/10"
            >
              <div>
                <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-wider text-gold uppercase">
                  Connected Scientific Pillar
                </span>
                <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-xl sm:text-2xl font-bold tracking-tight mt-2">
                  Performance Science Direction
                </h3>
                <p className="mt-2 text-cream/75 text-[0.9375rem] leading-relaxed max-w-[600px]">
                  Explore how multidisciplinary science connects psychological, behavioural, physiological, and contextual perspectives.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider font-[family-name:var(--font-inter)] uppercase text-gold shrink-0">
                <span>View Performance Science</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          </motion.div>

          {/* 10 Theme Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {themes.list.map((theme, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-xl bg-navy-soft p-6 md:p-7 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gold tracking-wider uppercase">
                      THEME {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-cream/40 uppercase tracking-wider">
                      DEVELOPING SCOPE
                    </span>
                  </div>
                  <p className="font-[family-name:var(--font-fraunces)] text-cream text-lg sm:text-xl font-medium leading-snug">
                    {theme}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-cream/45 uppercase tracking-wide">
                    Institutional Agenda
                  </span>
                  <span className="text-xs text-gold/80 font-[family-name:var(--font-inter)]">
                    Active Theme
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Our Research Approach (§8.4) ──
          Numbered visual flow, horizontal on desktop, stacked on mobile.
      ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14 md:mb-18">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[680px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={approach.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {approach.heading}
              </h2>
              <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed">
                Research at MindGame Africa adheres to rigorous ethical, methodological, and translational standards designed to produce actionable evidence.
              </p>
            </motion.div>

            {/* Image Slot 2 (§17: University & Institutional Collaboration) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/multidisciplinary-collaboration/research-symposium-4x3.jpg"
                name="Academic Collaboration"
                subject="University & Faculty Partnerships"
                alt="MindGame Africa Research — Academic collaboration, research symposia, and university partnerships."
                aspectRatio="4/3"
                variant="cream"
              />
            </motion.div>
          </div>

          {/* 6 Approach Items: Numbered visual flow horizontal on desktop (6 columns), stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4">
            {approach.principles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.07,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-xl bg-white p-6 border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_12px_24px_-6px_rgba(16,35,63,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-green">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx < 5 && (
                      <span className="hidden lg:block text-navy/25 text-xs font-[family-name:var(--font-inter)]">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <p className="text-navy/80 text-[0.9375rem] leading-relaxed">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Collaborate With Us (§8.5) ──
          7 Collaboration types as cards, plus both CTAs.
      ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[720px]"
            >
              <SectionEyebrow
                variant="gold"
                label={collaborate.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {collaborate.heading}
              </h2>
              <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed">
                {collaborate.copy}
              </p>
            </motion.div>

            {/* Image Slot 3 (§17: Field-based Data Collection) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/performance-data/research-data-collection-4x3.jpg"
                name="Applied Data Collection"
                subject="Field Performance Metrics"
                alt="MindGame Africa Research — Applied data collection and performance observation during training."
                aspectRatio="4/3"
                variant="navy"
              />
            </motion.div>
          </div>

          {/* 7 Collaboration Types rendered as cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {collaborate.types.map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`rounded-xl bg-navy-soft p-6 border border-white/10 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gold tracking-wider uppercase">
                    TYPE {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-lg font-bold tracking-tight mt-2.5">
                    {item}
                  </h3>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-cream/45 uppercase tracking-wide">
                    Collaborative Route
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Both CTAs per §8.5 */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-[family-name:var(--font-fraunces)] text-cream text-xl sm:text-2xl font-bold tracking-tight">
                {collaborate.cta.line}
              </p>
              <p className="text-cream/60 text-sm mt-1">
                Direct engagement for researchers, institutions, and performance organisations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button variant="primary" href={collaborate.cta.href}>
                {collaborate.cta.button}
              </Button>
              <Button variant="secondary-cream" href="/partner-with-us">
                Explore All Collaboration Routes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Research Outputs (§8.6) ──
          Uses §8.6 status string exactly. Intentional, professional design — NOT a blank room or broken loader.
      ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[840px] mx-auto text-center"
          >
            <SectionEyebrow
              variant="gold-dark"
              label={outputsStatus.eyebrow}
              className="mb-4 mx-auto"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {outputsStatus.heading}
            </h2>

            {/* Structured Intentional Status Block */}
            <div className="mt-8 rounded-2xl border border-navy/15 bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(16,35,63,0.05)] text-left">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-navy/[0.08]">
                <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green">
                  Archival Portfolio Progression
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[0.6875rem] font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-navy/[0.06] text-navy/60">
                  Developing Portfolio
                </span>
              </div>
              <p className="text-navy/85 text-lg md:text-xl font-[family-name:var(--font-fraunces)] leading-relaxed">
                {outputsStatus.copy}
              </p>
              <div className="mt-8 pt-6 border-t border-navy/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-navy/55 font-[family-name:var(--font-inter)]">
                  Reports, publications & projects will be archived here as completed
                </span>
                <Link
                  href="/partner-with-us?type=Research+and+Evaluation"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-inter)] text-navy hover:text-gold transition-colors"
                >
                  <span>Propose a Study</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
