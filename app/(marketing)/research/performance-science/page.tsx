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

          {/* Numbered visual flow: Horizontal on desktop (6 columns), stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4">
            {functionItems.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-xl bg-navy-soft p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-[family-name:var(--font-inter)] text-2xl font-bold text-gold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx < 5 && (
                      <span className="hidden lg:block text-cream/30 text-xs font-[family-name:var(--font-inter)]">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <p className="text-cream/85 text-[0.9375rem] leading-relaxed">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {futureCapabilityAreas.capabilities.map((cap, idx) => (
              <motion.article
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-xl border border-dashed border-navy/25 bg-white/60 p-6 transition-all duration-200 hover:border-navy/40 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-navy/40 uppercase tracking-wider">
                      DIR {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[0.625rem] font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-navy/5 text-navy/60 border border-navy/10">
                      Developing Direction
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-lg font-bold tracking-tight leading-snug">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-navy/65 text-xs sm:text-[0.8125rem] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-navy/[0.06]">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-navy/40 tracking-wide uppercase">
                    Future Scope · Developing Capability
                  </span>
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
