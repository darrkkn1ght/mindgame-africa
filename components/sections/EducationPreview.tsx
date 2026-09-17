"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { homeContent } from "@/lib/content";

export function EducationPreview() {
  const { education } = homeContent.previews;

  return (
    <section className="relative bg-navy py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Named Image Component */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1 lg:col-span-5"
          >
            <SectionImage
              src="/images/teaching-and-learning/home-education-seminar-4x3.jpg"
              name="PROFESSIONAL LEARNING & TEACHING"
              alt="Practitioners and coaches engaged in structured case discussion, reflection, and applied learning"
              aspectRatio="4/3"
              subject="LEARNING IN PRACTICE"
              variant="navy"
            />
          </motion.div>

          {/* Right: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <SectionEyebrow
              variant="gold"
              label={education.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-balance leading-[1.12]">
              {education.heading}
            </h2>
            <p className="mt-5 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
              {education.copy}
            </p>
            <div className="mt-8">
              <Button variant="secondary-cream" href={education.cta.href}>
                {education.cta.label}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
