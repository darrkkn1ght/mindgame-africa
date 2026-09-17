"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionImage } from "@/components/ui/SectionImage";
import { OpportunityInterestForm } from "@/components/sections/OpportunityInterestForm";
import { opportunitiesContent } from "@/lib/content";

export default function OpportunitiesPage() {
  const { hero, practitionerDevelopment, statusNotice, interestForm } =
    opportunitiesContent;

  return (
    <>
      {/* ── 1. Hero (§10 & §15) ── */}
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

      {/* ── 2. Practitioner Development Function (§10) ── */}
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
                label={practitionerDevelopment.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {practitionerDevelopment.heading}
              </h2>
              <div className="mt-6 text-navy/80 text-base md:text-lg leading-relaxed">
                <p>{practitionerDevelopment.copy}</p>
              </div>
            </motion.div>

            {/* Image Slot 1 (§17: Practitioner Development in Practice) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/practitioner-interaction/opportunities-mentoring-4x3.jpg"
                name="Practitioner Supervision"
                subject="Applied Practitioner Mentoring"
                alt="MindGame Africa Opportunities — Practitioner mentoring and supervised experience in African performance environments."
                aspectRatio="4/3"
                variant="cream"
              />
            </motion.div>
          </div>

          {/* Scope of Future Opportunity Categories (Structured architecture) */}
          <div className="max-w-[840px] mb-12">
            <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-2xl font-bold mb-4">
              Future Pathways & Structured Roles
            </h3>
            <p className="text-navy/70 text-sm md:text-base mb-6">
              When formal programmes open, opportunities will be published across defined tracks with explicit supervision, duration, and learning requirements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Internships and SIWES placements",
                "Supervised practicum opportunities",
                "Research attachments and study participation",
                "Student research collaborations",
                "Faculty or visiting-faculty calls",
                "Practitioner and research-associate opportunities",
                "Mentorship and supervision pathways",
                "Calls for specialist contributors",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-navy/[0.08] flex items-center justify-between"
                >
                  <span className="text-sm font-medium text-navy/85">{item}</span>
                  <span className="text-[0.6875rem] font-[family-name:var(--font-inter)] uppercase tracking-wider text-navy/40">
                    Planned
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 3. Current Status Note (§10 & §15 Hard Rule: No Openings Advertised) ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl border border-navy/15 bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(16,35,63,0.05)] max-w-[840px]"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-navy/[0.08]">
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-wider text-green">
                Opportunity Registry Status
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[0.6875rem] font-[family-name:var(--font-inter)] uppercase tracking-wider font-semibold bg-navy/[0.06] text-navy/60">
                No Open Calls
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-xl sm:text-2xl font-bold mb-3">
              {statusNotice.heading}
            </h3>
            <p className="text-navy/75 text-base leading-relaxed">
              {statusNotice.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Future Opportunity Interest Registration (§10 Interest Option) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6 max-w-[620px]"
            >
              <SectionEyebrow
                variant="gold"
                label={interestForm.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {interestForm.heading}
              </h2>
              <p className="mt-4 text-cream/75 text-base md:text-lg leading-relaxed mb-8">
                {interestForm.description}
              </p>

              {/* Image Slot 2 (§17: Applied Academic & Field Engagement) */}
              <SectionImage
                src="/images/observation-and-analysis/opportunities-field-observation-16x9.jpg"
                name="Applied Training"
                subject="Field Engagement & Observation"
                alt="MindGame Africa Opportunities — Early career practitioners observing performance analysis in elite competition."
                aspectRatio="16/9"
                variant="navy"
              />
            </motion.div>

            {/* Interest Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-6"
            >
              <OpportunityInterestForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
