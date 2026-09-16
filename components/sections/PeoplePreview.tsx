"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { homeContent, compactFounderCard } from "@/lib/content";

export function PeoplePreview() {
  const { people } = homeContent.previews;

  return (
    <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        {/* Section Header */}
        <div className="max-w-[760px] mb-12 md:mb-16">
          <SectionEyebrow
            variant="gold-dark"
            label={people.eyebrow}
            className="mb-4"
          />
          <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-balance leading-[1.12]">
            {people.heading}
          </h2>
          <p className="mt-5 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
            {people.copy}
          </p>
        </div>

        {/* 2-Column Founder Compact Card + Documentary Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: Compact Founder Card (§12.3) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-white p-8 md:p-10 border border-navy/[0.08] shadow-[0_4px_20px_rgba(16,35,63,0.04)]"
          >
            <div>
              <div className="mb-3">
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
                  {compactFounderCard.designation}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-bold text-navy tracking-tight mb-4">
                {compactFounderCard.name}
              </h3>

              <p className="text-navy/80 text-base md:text-[1.0625rem] leading-relaxed max-w-[620px]">
                {compactFounderCard.cardCopy}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-navy/[0.08] flex flex-wrap items-center gap-4">
              <Button variant="primary" href={people.cta.href}>
                {people.cta.label}
              </Button>
            </div>
          </motion.div>

          {/* Right: Named Image Component (§17 Documentary Photography) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 flex"
          >
            <SectionImage
              name="LEADERSHIP & APPLIED PRACTICE"
              alt="Natural working portrait of Dr. Joshua A. Oparachukwu examining applied performance frameworks"
              aspectRatio="4/3"
              subject="INSTITUTIONAL LEADERSHIP // §12.3"
              variant="cream"
              className="h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
