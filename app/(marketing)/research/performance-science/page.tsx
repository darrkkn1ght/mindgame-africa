"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { performanceScienceContent } from "@/lib/content";

export default function PerformanceSciencePage() {
  const { hero, intro, functionItems, futureCapabilityAreas, cta } =
    performanceScienceContent;

  return (
    <>
      {/* ── 1. Hero (§7.1) ── */}
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

      {/* ── 2. Page Introduction (§7.2) paired with Image Slot 1 ── */}
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
                label={intro.eyebrow}
                className="mb-4"
              />
              <div className="space-y-6 text-navy/80 text-base md:text-lg leading-relaxed">
                <p>{intro.paragraph1}</p>
                <p>{intro.paragraph2}</p>
              </div>
            </motion.div>

            {/* Image Slot 1 (§17: Multidisciplinary Performance Data & Discussion) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                name="Performance Science Inquiry"
                subject="Multidisciplinary Data & Context"
                alt="Abstract biomechanical force curves and temporal telemetry lines representing performance science telemetry"
                aspectRatio="4/3"
                variant="cream"
                src="/images/performance-data/perf-science-telemetry-4x3.jpg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. What the Performance Science Function Should Do (§7.3) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[680px]"
            >
              <SectionEyebrow
                variant="gold"
                label={functionItems.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {functionItems.heading}
              </h2>
            </motion.div>
            <p className="text-cream/65 text-sm font-[family-name:var(--font-inter)] max-w-[340px]">
              Guiding principles for scientific translation and cross-discipline collaboration.
            </p>
          </div>

          {/* Guiding Principles: Arranged in a spacious 3-column editorial grid (2 rows of 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {functionItems.items.map((item, idx) => (
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
                className="relative flex flex-col justify-between rounded-2xl bg-navy-soft p-7 md:p-8 border border-white/10 hover:border-gold/35 shadow-[0_4px_20px_rgba(0,0,0,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold tracking-wide mb-4">
                    Domain {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-cream/85 text-base md:text-[1.0625rem] leading-relaxed font-medium mt-1">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Slot 2 (§17: University Collaboration & Teaching) */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SectionImage
                src="/images/teaching-and-learning/perf-science-academic-collab-21x9.jpg"
                name="Academic & Faculty Collaboration"
                subject="University Teaching & Discussion"
                alt="MindGame Africa — Academic seminar and faculty collaboration connecting performance science with field practice."
                aspectRatio="21/9"
                variant="navy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Areas of Future and Developing Capability (§7.4) ──
          CRITICAL RESTRAINT (§7.4):
          - Section label carries status: "Areas of Future and Developing Capability"
          - No Learn More link, no price, no booking affordance, no enquiry button
          - Nothing implying an operational lab or current department of specialists
          - Rendered as muted card grid with visible developing tags
      ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
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
                variant="gold-dark"
                label={futureCapabilityAreas.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {futureCapabilityAreas.heading}
              </h2>
              <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed">
                {futureCapabilityAreas.subheading}
              </p>
            </motion.div>

            {/* Image Slot 3 (§17: Field-based observation & recording) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/observation-and-analysis/perf-science-field-capture-4x3.jpg"
                name="Field Observation"
                subject="Observational Movement Recording"
                alt="MindGame Africa — Field-based performance observation capturing movement quality and technical execution."
                aspectRatio="4/3"
                variant="cream"
              />
            </motion.div>
          </div>

          {/* 8 Areas of Multidisciplinary Direction — Muted Card Grid with Explicit Status Badge */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureCapabilityAreas.capabilities.map((cap, idx) => (
              <motion.article
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-2xl border border-navy/[0.08] bg-white p-6 md:p-7 shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_16px_30px_-8px_rgba(16,35,63,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-green">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[0.6875rem] font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-navy/[0.05] text-navy/70 border border-navy/10">
                      Developing Direction
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-lg font-bold tracking-tight leading-snug">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-navy/70 text-xs sm:text-[0.8125rem] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Closing CTA (§7.5) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <SectionEyebrow
              variant="gold"
              label={cta.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {cta.line}
            </h2>
            <div className="mt-10">
              <Button variant="primary" href={cta.href}>
                {cta.button}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
