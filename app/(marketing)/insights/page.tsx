"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MailingSignup } from "@/components/sections/MailingSignup";
import { SectionImage } from "@/components/ui/SectionImage";
import { insightsContent } from "@/lib/content";
import {
  getPublicCategories,
  plannedCategories,
  articles,
} from "@/lib/types/models";

export default function InsightsPage() {
  const { hero, contentArchitecture, developmentStatus, mailingList } =
    insightsContent;

  // Assert in code: categories only render publicly if they contain published articles (§11.5)
  const publicCategories = getPublicCategories(plannedCategories, articles);

  return (
    <>
      {/* ── 1. Hero with Atmospheric Photography Backdrop ── */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-navy py-20 md:py-28 lg:py-32">
        {/* Background photo */}
        <Image
          src="/images/observation-and-analysis/practice-analytical-review-16x9.jpg"
          alt="MindGame Africa — Performance analysis, literature translation and scientific insights"
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

      {/* ── 2. Editorial Mandate & Image Slot 1 (§17: Scientific Translation) ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[680px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={contentArchitecture.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {contentArchitecture.heading}
              </h2>
              <p className="mt-5 text-navy/75 text-base md:text-lg leading-relaxed">
                {contentArchitecture.subheading}
              </p>
              <p className="mt-4 text-navy/65 text-sm font-[family-name:var(--font-inter)]">
                Structured knowledge outputs designed for practitioners, coaches, and leaders rather than brief blog commentary.
              </p>
            </motion.div>

            {/* Image Slot 1 (§17: Performance Literature Translation) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                name="Knowledge Translation"
                subject="Evidence Synthesis & Analysis"
                alt="Minimalist abstract vector composition representing analytical literature review and evidence classification on warm cream"
                aspectRatio="4/3"
                variant="cream"
                src="/images/performance-data/insights-translation-grid-4x3.jpg"
              />
            </motion.div>
          </div>

          {/* ── Content Architecture (§11.2) — Visible 9 Content Types Card Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentArchitecture.items.map((item, idx) => (
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
                className="rounded-xl border border-navy/[0.08] bg-white p-7 shadow-[0_2px_10px_rgba(16,35,63,0.03)] hover:border-navy/[0.18] hover:shadow-[0_12px_24px_-6px_rgba(16,35,63,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-green uppercase tracking-wider">
                      FORMAT {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-xl font-bold tracking-tight mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-navy/75 text-[0.9375rem] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-navy/[0.06]">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-navy/40 uppercase tracking-wide">
                    Knowledge Output Specification
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Optional: Render categories ONLY if articles exist per §11.5 code assertion */}
          {publicCategories.length > 0 && (
            <div className="mt-12 pt-8 border-t border-navy/[0.08]">
              <h4 className="text-xs uppercase font-[family-name:var(--font-inter)] text-navy/50 mb-4">
                Published Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {publicCategories.map((cat) => (
                  <span
                    key={cat.id}
                    className="px-3 py-1 rounded-md bg-navy text-cream text-xs"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. Development Status (§11.3) & Image Slots 2 & 3 ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[700px]"
            >
              <SectionEyebrow
                variant="gold"
                label={developmentStatus.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {developmentStatus.heading}
              </h2>

              {/* Exact §11.3 Status String in Dedicated Institutional Box */}
              <div className="mt-8 rounded-2xl border border-white/15 bg-navy-soft p-8 md:p-9 shadow-[0_4px_24px_rgba(16,35,63,0.2)]">
                <div className="pb-4 mb-4 border-b border-white/10">
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-gold">
                    Knowledge Library Development
                  </span>
                </div>
                <p className="text-cream text-lg md:text-xl font-[family-name:var(--font-fraunces)] leading-relaxed">
                  {developmentStatus.copy}
                </p>
              </div>
            </motion.div>

            {/* Image Slot 2 (§17: Field Notes & Tactical Observation) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/researchers-at-work/insights-literature-review-4x3.jpg"
                name="Field Analysis"
                subject="Observational Field Notes"
                alt="MindGame Africa Insights — Field notes, match analysis, and practitioner perspectives."
                aspectRatio="4/3"
                variant="navy"
              />
            </motion.div>
          </div>

          {/* ── 4. Mailing List Sign-up (§11.4) paired with Image Slot 3 ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6"
            >
              <SectionEyebrow
                variant="gold"
                label={mailingList.eyebrow}
                className="mb-4"
              />
              <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-2xl sm:text-3xl font-bold tracking-tight text-balance leading-[1.2] mb-4">
                {mailingList.heading}
              </h3>
              <p className="text-cream/80 text-base leading-relaxed mb-8">
                {mailingList.description}
              </p>

              <MailingSignup variant="navy" />
            </motion.div>

            {/* Image Slot 3 (§17: Frameworks & Practitioner Resources) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6"
            >
              <SectionImage
                src="/images/practitioner-interaction/insights-practitioner-discussion-4x3.jpg"
                name="Performance Frameworks"
                subject="Knowledge Translation Tools"
                alt="MindGame Africa Insights — Performance frameworks and evidence-based summaries for practitioners."
                aspectRatio="4/3"
                variant="navy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
