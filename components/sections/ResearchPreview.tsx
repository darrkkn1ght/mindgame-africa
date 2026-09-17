"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { homeContent } from "@/lib/content";

export function ResearchPreview() {
  const { research } = homeContent.previews;

  return (
    <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <SectionEyebrow
              variant="gold-dark"
              label={research.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-balance leading-[1.12]">
              {research.heading}
            </h2>
            <p className="mt-5 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
              {research.copy}
            </p>
            <div className="mt-8">
              <Button variant="primary" href={research.cta.href}>
                {research.cta.label}
              </Button>
            </div>
          </motion.div>

          {/* Right: Named Image Component */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5"
          >
            <SectionImage
              name="RESEARCHERS AT WORK — FIELD CONTEXT"
              alt="Wide environmental landscape photograph of an African university sports campus running track at dusk with natural mountain horizon"
              aspectRatio="16/9"
              subject="RESEARCH INQUIRY"
              variant="cream"
              src="/images/researchers-at-work/home-research-context-16x9.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
