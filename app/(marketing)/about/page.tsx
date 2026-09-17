"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { aboutContent } from "@/lib/content";

export default function AboutPage() {
  const {
    hero,
    core,
    definingIdea,
    whyAfrica,
    approach,
    whatWeAreBuilding,
    leadershipTeaser,
  } = aboutContent;

  return (
    <>
      {/* ── 1. Hero with Atmospheric Photography Backdrop ── */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-navy py-20 md:py-28 lg:py-32">
        {/* Background photo */}
        <Image
          src="/images/multidisciplinary-collaboration/partner-institutional-meeting-16x9.jpg"
          alt="MindGame Africa — Multidisciplinary institutional collaboration and strategic capability development"
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
            className="max-w-[760px]"
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

      {/* ── 2. Core About Copy (§4.2) + Amendment A2 Labelled Block ── */}
      <section className="relative bg-cream py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: 3 Verbatim Paragraphs + Labelled Strengths Block */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={core.eyebrow}
                className="mb-4"
              />

              <div className="space-y-6 text-navy/80 text-base md:text-lg leading-relaxed">
                <p>{core.paragraph1}</p>
                <p>{core.paragraph2}</p>
                <p>{core.paragraph3}</p>
              </div>
            </motion.div>

            {/* Right: Named Section Image (§17.1 Multidisciplinary Collaboration) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/multidisciplinary-collaboration/about-core-practice-4x3.jpg"
                name="MULTIDISCIPLINARY PRACTICE"
                alt="Performance practitioners examining athlete cognitive and behavioural factors in a professional setting"
                aspectRatio="4/3"
                subject="APPLIED INTERVENTION"
                variant="cream"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Defining Idea Dedicated Band (§4.3) ──
          Given visual prominence as a dedicated institutional pull-quote band.
      */}
      <section className="relative bg-navy py-16 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-[72rem] px-5 md:px-12 text-center">
          <SectionEyebrow
            variant="gold"
            label="DEFINING INSTITUTIONAL PRINCIPLE"
            className="mb-6 justify-center"
          />
          <blockquote className="font-[family-name:var(--font-fraunces)] text-cream text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-balance leading-snug max-w-[960px] mx-auto">
            “{definingIdea.quote}”
          </blockquote>
          <p className="mt-6 font-[family-name:var(--font-inter)] text-xs text-gold uppercase tracking-widest font-medium">
            {definingIdea.heading}
          </p>
        </div>
      </section>

      {/* ── 4. Why Africa (§4.5) ── */}
      <section className="relative bg-cream py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Named Image Component (§17.2 African Context) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-2 lg:order-1 lg:col-span-5"
            >
              <SectionImage
                src="/images/training-and-competition/about-why-africa-context-4x3.jpg"
                name="AFRICAN PERFORMANCE REALITIES"
                alt="Coach and athletes reviewing tactical movement and environmental demands during regional tournament preparation"
                aspectRatio="4/3"
                subject="REGIONAL PERFORMANCE CONTEXT"
                variant="cream"
              />
            </motion.div>

            {/* Right: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-1 lg:order-2 lg:col-span-7"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={whyAfrica.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {whyAfrica.heading}
              </h2>
              <p className="mt-6 text-navy/80 text-base md:text-lg leading-relaxed max-w-[620px]">
                {whyAfrica.copy}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. How We Approach the Work (§4.6) ──
          Six principles rendered as a clean 6-card visual grid.
      */}
      <section className="relative bg-white border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] mb-12 md:mb-16"
          >
            <SectionEyebrow
              variant="gold-dark"
              label={approach.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {approach.heading}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {approach.principles.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Card variant="navy" className="h-full flex flex-col justify-between">
                  <div className="flex gap-4 items-start">
                    <span className="font-[family-name:var(--font-inter)] text-sm font-semibold text-gold shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-cream/85 text-[0.9375rem] md:text-base leading-[1.65]">
                      {text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What We Are Building (§4.7) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Verbatim Copy */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7"
            >
              <SectionEyebrow
                variant="gold"
                label={whatWeAreBuilding.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {whatWeAreBuilding.heading}
              </h2>
              <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
                {whatWeAreBuilding.copy}
              </p>
            </motion.div>

            {/* Right: Named Section Image (§17.1 Multidisciplinary Capability) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/multidisciplinary-collaboration/about-long-term-capability-4x3.jpg"
                name="LONG-TERM CAPABILITY DEVELOPMENT"
                alt="Researchers, specialists and educators in collaborative consultation regarding institutional capability development"
                aspectRatio="4/3"
                subject="PROGRESSIVE INFRASTRUCTURE"
                variant="navy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. Leadership Teaser (§12) ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] mb-12 md:mb-16"
          >
            <SectionEyebrow
              variant="gold-dark"
              label={leadershipTeaser.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {leadershipTeaser.heading}
            </h2>
            <p className="mt-5 text-navy/75 text-base md:text-lg leading-relaxed max-w-[660px]">
              {leadershipTeaser.founder.summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl bg-white p-8 md:p-12 text-navy border border-navy/[0.08] shadow-[0_4px_20px_rgba(16,35,63,0.04)] max-w-[860px]"
          >
            <div className="mb-3">
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green">
                {leadershipTeaser.founder.designation}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-4">
              {leadershipTeaser.founder.name}
            </h3>
            <p className="text-navy/80 text-base md:text-[1.0625rem] leading-[1.7] mb-6">
              {leadershipTeaser.founder.summary}
            </p>
            <div className="pt-6 border-t border-navy/[0.08] flex flex-wrap items-center gap-4">
              <Button variant="primary" href={leadershipTeaser.cta.href}>
                {leadershipTeaser.cta.label}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
