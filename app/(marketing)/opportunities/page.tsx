"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { OpportunityInterestForm } from "@/components/sections/OpportunityInterestForm";

export default function OpportunitiesPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px]"
          >
            <SectionEyebrow
              variant="gold"
              label="OPPORTUNITIES"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Opportunities
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              MindGame Africa is being built to help strengthen the route from
              academic learning to competent professional practice. This
              includes future opportunities for internships, supervised
              experience, practitioner education, mentoring, applied projects
              and collaboration with universities and experienced specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Status Message ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] rounded-lg border border-navy/10 bg-white/80 p-7 md:p-9 shadow-[0_2px_12px_rgba(16,35,63,0.03)]"
          >
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
              Status
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-navy text-xl sm:text-2xl font-bold tracking-tight leading-snug">
              There are no open opportunities at this time. Openings will be
              published here as they become available.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Interest Form ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] mb-10 md:mb-12"
          >
            <SectionEyebrow
              variant="gold"
              label="EXPRESS INTEREST"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Future Opportunities
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <OpportunityInterestForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
