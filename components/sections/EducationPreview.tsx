"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function EducationPreview() {
  return (
    <section className="relative bg-navy py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <SectionEyebrow
            variant="gold"
            label="EDUCATION"
            className="mb-4"
          />

          <Card variant="default" className="mt-6 max-w-[860px]">
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-balance leading-[1.12]">
              Developing people who work with performance.
            </h2>
            <p className="mt-5 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
              Our education function is being designed for coaches,
              practitioners, students, performance professionals and
              organisations that want learning grounded in evidence and
              connected to practice.
            </p>
            <div className="mt-8">
              <Button variant="secondary" href="/education">
                Explore Education
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
