"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { educationContent } from "@/lib/content";

export default function EducationPage() {
  const {
    hero,
    whatEducationMeans,
    whoWeServe,
    developingProgrammeAreas,
    learningExperience,
    statusNoticeMainNav,
    cta,
  } = educationContent;

  return (
    <>
      {/* ── SECTION 1: What We Teach (§9.1 Hero & §9.2 Philosophy) ── */}
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

      {/* What Education Means (§9.2) paired with Image Slot 1 */}
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
                label={whatEducationMeans.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {whatEducationMeans.heading}
              </h2>
              <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed">
                <p>{whatEducationMeans.paragraph1}</p>
                <p>{whatEducationMeans.paragraph2}</p>
              </div>
            </motion.div>

            {/* Image Slot 1 (§17: University Teaching & Professional Learning) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/teaching-and-learning/education-seminar-interactive-4x3.jpg"
                name="Professional Learning"
                subject="Applied Teaching & Discussion"
                alt="MindGame Africa Education — Interactive professional learning, case discussion, and seminar engagement."
                aspectRatio="4/3"
                variant="cream"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Who It Is For (§9.3) ──
          Seven audiences rendered as cards in a responsive grid (NEVER a bullet list).
      ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[700px]"
            >
              <SectionEyebrow
                variant="gold"
                label={whoWeServe.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {whoWeServe.heading}
              </h2>
              <p className="mt-4 text-cream/75 text-base md:text-lg leading-relaxed">
                Structured learning designed for practitioners, coaches, analysts, and leaders operating across high-pressure performance systems.
              </p>
            </motion.div>

            {/* Image Slot 2 (§17: Coaching Environments & Feedback) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/coaching-environments/education-coach-practice-16x9.jpg"
                name="Coach Development"
                subject="Coaching Environment Review"
                alt="MindGame Africa Education — Coach education, observation, and applied practice review in sporting settings."
                aspectRatio="16/9"
                variant="navy"
              />
            </motion.div>
          </div>

          {/* 7 Audience Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {whoWeServe.audiences.map((item, idx) => (
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gold tracking-wider uppercase">
                      AUDIENCE {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-cream/40 uppercase tracking-wider">
                      Target Learner
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-lg font-bold tracking-tight">
                    {item}
                  </h3>
                </div>
                <div className="pt-4 mt-5 border-t border-white/10">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-cream/45 uppercase tracking-wide">
                    Professional Development Scope
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: How We Teach (§9.5 Learning Experience) ──
          Eight learning-experience items rendered as structured cards.
      ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[680px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={learningExperience.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {learningExperience.heading}
              </h2>
              <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed">
                Our educational architecture combines conceptual clarity with direct transfer to competitive, coaching, and clinical environments.
              </p>
            </motion.div>

            {/* Image Slot 3 (§17: Practitioner Development & Workshops) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/team-sessions/education-workshop-collaboration-16x9.jpg"
                name="Practitioner Workshops"
                subject="Applied Methods & Case Review"
                alt="MindGame Africa Education — Structured practitioner development workshop, method review, and applied tools."
                aspectRatio="16/9"
                variant="cream"
              />
            </motion.div>
          </div>

          {/* 8 Learning Experience Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningExperience.features.map((item, idx) => (
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
                className="flex flex-col justify-between rounded-xl bg-white p-6 border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_12px_24px_-6px_rgba(16,35,63,0.08)] transition-all duration-300"
              >
                <div>
                  <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-green tracking-wider uppercase">
                    STANDARD {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-navy/85 text-[0.9375rem] font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-navy/[0.06]">
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] text-navy/45 uppercase tracking-wide">
                    {idx === 7 ? "Statutory Boundary" : "Design Criterion"}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Developing Programme Areas (§9.4) ──
          CRITICAL RESTRAINT:
          - Eight developing programme areas rendered as cards
          - Each carries a visible developing status
          - NOTHING implies a programme is open for registration (no enrol, no register, no dates, no fees, no seat counts)
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
                label={developingProgrammeAreas.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {developingProgrammeAreas.heading}
              </h2>
              <p className="mt-4 text-cream/70 text-base md:text-lg leading-relaxed">
                {developingProgrammeAreas.subheading}
              </p>
            </motion.div>
            <span className="inline-flex items-center px-3 py-1 rounded text-xs font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-navy-soft text-cream/75 border border-white/10 shrink-0">
              Not Open for Registration
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {developingProgrammeAreas.areas.map((area, idx) => (
              <motion.article
                key={area.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex flex-col justify-between rounded-xl bg-navy-soft p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-gold">
                      AREA {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[0.625rem] font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-white/10 text-cream/80 border border-white/10">
                      In Development
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-lg font-bold leading-snug">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-cream/70 text-xs sm:text-[0.8125rem] leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="pt-4 mt-5 border-t border-white/10">
                  <span className="font-[family-name:var(--font-inter)] text-[0.6875rem] text-cream/45 uppercase tracking-wide">
                    Future Offering · In Development
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Work With Us (§9.7 Status & Closing CTA) ──
          Uses §9.7b string exactly:
          "Our education and professional development portfolio is being developed progressively. Current workshops, seminars and structured programmes will be published here as they are ready."
      ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="max-w-[840px] mx-auto">
            {/* Intentional §9.7b Status Box */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-2xl border border-navy/15 bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(16,35,63,0.05)] mb-14"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-navy/[0.08]">
                <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green">
                  Portfolio Development Notice (§9.7b)
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[0.6875rem] font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-navy/[0.06] text-navy/60">
                  Main Catalogue State
                </span>
              </div>
              <p className="text-navy/85 text-lg md:text-xl font-[family-name:var(--font-fraunces)] leading-relaxed">
                {statusNoticeMainNav}
              </p>
            </motion.div>

            {/* Closing CTA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={cta.eyebrow}
                className="mb-4 mx-auto"
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
        </div>
      </section>
    </>
  );
}
