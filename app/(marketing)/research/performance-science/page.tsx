"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";

const functionItems = [
  "Help frame performance problems in a way that allows the right disciplines to contribute.",
  "Connect scientific knowledge with training, competition and professional practice.",
  "Support assessment and interpretation where appropriate.",
  "Encourage collaboration between specialists rather than isolated professional silos.",
  "Translate complex findings into decisions that athletes, coaches and organisations can use.",
  "Create stronger links between African performance environments and contemporary performance science.",
];

const futureAreas = [
  "Performance psychology and behavioural performance.",
  "Coaching science.",
  "Performance analysis.",
  "Exercise physiology.",
  "Biomechanics.",
  "Strength and conditioning.",
  "Nutrition and recovery.",
  "Research methods, data and performance measurement.",
];

export default function PerformanceSciencePage() {
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
              label="PERFORMANCE SCIENCE"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Performance Science
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[600px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              Performance is rarely explained by one discipline. MindGame Africa
              is being built to connect the scientific perspectives that help us
              understand how people prepare, adapt, perform and recover.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Page Introduction ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px]"
          >
            <SectionEyebrow
              variant="gold-dark"
              label="DIRECTION"
              className="mb-4"
            />
            <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed max-w-[660px]">
              <p>
                Our performance science direction is multidisciplinary.
                Psychology and behavioural performance are important parts of
                that work, but they are not the whole of performance. Depending
                on the question, performance may also need to be understood
                through coaching science, physiology, biomechanics, strength and
                conditioning, performance analysis, nutrition, data and other
                relevant disciplines.
              </p>
              <p>
                MindGame Africa will develop this capability responsibly. We
                will not present a discipline, laboratory or technical service
                as active until the qualified people, methods and infrastructure
                required to deliver it properly are genuinely in place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. What the Performance Science Function Should Do ── */}
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
              label="FUNCTION"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              What the Performance Science Function Should Do
            </h2>

            <ul className="mt-8 space-y-4 max-w-[660px]">
              {functionItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex items-start gap-3.5"
                >
                  <span
                    className="mt-2.5 w-2 h-2 rounded-full bg-gold shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-cream/80 text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Areas of Future and Developing Capability ── */}
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
              label="DEVELOPING"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Areas of Future and Developing Capability
            </h2>
            <p className="mt-3 text-navy/50 text-sm font-[family-name:var(--font-jetbrains-mono)] tracking-wide">
              Areas of multidisciplinary direction — not all currently active.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-[1000px]">
            {futureAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="rounded-lg border border-dashed border-navy/20 bg-transparent px-5 py-4 transition-colors duration-200 hover:border-navy/35 hover:bg-white/40"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.6875rem] font-medium text-navy/35 tracking-wider uppercase">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 text-navy/65 text-[0.9375rem] leading-snug font-medium">
                  {area}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Closing CTA ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Are you a performance specialist, academic department, research
              group or organisation interested in contributing to
              multidisciplinary performance work in Africa?
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us">
                Explore Collaboration With MindGame Africa
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
