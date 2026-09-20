"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { researchContent } from "@/lib/content";

export default function ResearchPage() {
  const { hero, mandate, themes, approach, collaborate } =
    researchContent;

  return (
    <>
      {/* ── 1. Hero with Atmospheric Photography Backdrop ── */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-navy py-20 md:py-28 lg:py-32">
        {/* Background photo */}
        <Image
          src="/images/researchers-at-work/home-research-context-16x9.jpg"
          alt="MindGame Africa — African sports campus research context at dusk"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none opacity-40"
        />

        {/* Navy gradient scrim overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/88 to-navy/55 pointer-events-none"
          aria-hidden="true"
        />

        {/* Soft bottom dissolve into cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-cream via-cream/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[80rem] w-full px-5 md:px-12">
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
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gold tracking-wider uppercase block mb-3">
                    Theme {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[family-name:var(--font-fraunces)] text-cream text-lg sm:text-xl font-medium leading-snug">
                    {theme}
                  </p>
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

          {/* 6 Approach Items: Arranged in a spacious 3-column editorial grid (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {approach.principles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-2xl bg-white p-7 md:p-8 border border-navy/[0.08] shadow-[0_2px_14px_rgba(16,35,63,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(16,35,63,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green/10 text-green tracking-wide mb-5">
                    Principle {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-navy/85 text-base md:text-[1.0625rem] leading-relaxed font-medium">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                className={`rounded-2xl bg-navy-soft p-7 md:p-8 border border-white/10 hover:border-gold/35 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gold/15 text-gold tracking-wide mb-4">
                    Pathway {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-lg md:text-xl font-bold tracking-tight leading-snug">
                    {item}
                  </h3>
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

    </>
  );
}
