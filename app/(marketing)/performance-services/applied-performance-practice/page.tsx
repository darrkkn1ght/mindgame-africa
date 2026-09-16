"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { appliedPerformancePracticeContent } from "@/lib/content";

export default function AppliedPerformancePracticePage() {
  const {
    hero,
    whatThisMeans,
    howWeWork,
    whoThisIsFor,
    performanceQuestions,
    cta,
  } = appliedPerformancePracticeContent;

  return (
    <>
      {/* ── 1. Hero (§6.1) ── */}
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

      {/* ── 2. What This Means (§6.2) — Editorial two paragraphs paired with Image Slot 1 ── */}
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
                label={whatThisMeans.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {whatThisMeans.heading}
              </h2>
              <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed">
                <p>{whatThisMeans.paragraph1}</p>
                <p>{whatThisMeans.paragraph2}</p>
              </div>
            </motion.div>

            {/* Image Slot 1 (§17: Training and Competition Environments) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                name="Performance Environment"
                subject="Training & Competition Realities"
                alt="MindGame Africa — Athletes and performers preparing under demanding competitive conditions in African sport."
                aspectRatio="4/3"
                variant="cream"
                caption="APPLIED PERFORMANCE PRACTICE // §17.1"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. How We Work (§6.3) — Numbered visual flow: Horizontal on desktop, stacked on mobile ── */}
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
                label={howWeWork.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {howWeWork.heading}
              </h2>
            </motion.div>
            <p className="text-cream/65 text-sm font-[family-name:var(--font-jetbrains-mono)] max-w-[340px]">
              A disciplined, six-step intervention process grounded in specialist competence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4">
            {howWeWork.steps.map((step, idx) => (
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
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-gold">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {idx < 5 && (
                      <span className="hidden lg:block text-cream/30 text-xs font-[family-name:var(--font-jetbrains-mono)]">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <p className="text-cream/85 text-[0.9375rem] leading-relaxed">
                    {step}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Who This Is For (§6.4) — Five audiences rendered as cards (NEVER a bullet list) ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6 max-w-[640px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={whoThisIsFor.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {whoThisIsFor.heading}
              </h2>
              <p className="mt-4 text-navy/70 text-base leading-relaxed">
                Applied performance practice is structured for performers, coaches, and organisations navigating high-stakes competitive and professional demands.
              </p>
            </motion.div>

            {/* Image Slot 2 (§17: Working Interaction & Coaching) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6"
            >
              <SectionImage
                name="Coach & Performer Collaboration"
                subject="Working Interaction & Feedback"
                alt="MindGame Africa — Practitioner, coach, and athlete working together around performance development and strategic focus."
                aspectRatio="16/9"
                variant="cream"
                caption="PRACTITIONER COLLABORATION // §17.1"
              />
            </motion.div>
          </div>

          {/* 5 Audience Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoThisIsFor.audiences.map((audience, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`flex flex-col justify-between rounded-xl bg-white p-7 border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_12px_24px_-6px_rgba(16,35,63,0.08)] transition-all duration-300 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-gold tracking-wider uppercase">
                    AUDIENCE {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-xl sm:text-2xl font-bold tracking-tight mt-3">
                    {audience}
                  </h3>
                </div>
                <div className="pt-5 mt-5 border-t border-navy/[0.06]">
                  <span className="text-xs text-navy/50 font-[family-name:var(--font-jetbrains-mono)]">
                    Direct applied consultation
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Examples of Performance Questions (§6.5) — 6 Individual Question Cards ── */}
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
                label={performanceQuestions.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {performanceQuestions.heading}
              </h2>
              <p className="mt-4 text-cream/75 text-base md:text-lg leading-relaxed">
                Rather than generic motivational advice, applied practice begins by examining the exact questions that define performance breakdowns and breakthroughs.
              </p>
            </motion.div>

            {/* Image Slot 3 (§17: Quiet Analytical Moments & Observation) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                name="Performance Analysis"
                subject="Field Observation & Data Recording"
                alt="MindGame Africa — Performance psychologist reviewing video footage and behavioural notes following competition."
                aspectRatio="16/9"
                variant="navy"
                caption="ANALYTICAL RIGOUR // §17.1"
              />
            </motion.div>
          </div>

          {/* 6 Individual Question Cards — Exact wording preserved */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceQuestions.questions.map((question, idx) => (
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
                className="relative flex flex-col justify-between rounded-xl bg-navy-soft p-7 border border-white/10 hover:border-gold/40 transition-all duration-300"
              >
                <div>
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-gold tracking-wider uppercase">
                    QUESTION {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[family-name:var(--font-fraunces)] text-cream text-lg sm:text-xl font-medium leading-snug mt-3 italic">
                    &ldquo;{question}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-white/10">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-jetbrains-mono)] text-cream/40 uppercase tracking-wider">
                    APPLIED INQUIRY FOCUS
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Closing CTA (§6.6) — No motivational language ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <SectionEyebrow
              variant="gold-dark"
              label={cta.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
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
