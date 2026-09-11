"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function CurrentFocus() {
  return (
    <section className="relative bg-navy py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-[760px]"
        >
          <SectionEyebrow
            variant="gold"
            label="CURRENT FOCUS"
            className="mb-4"
          />
          <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
            Current Focus
          </h2>
          <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
            Our current work is centred on applied performance practice, the
            development of a multidisciplinary performance science platform,
            research around African performance questions, and the creation of
            professional learning and practitioner development pathways.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
