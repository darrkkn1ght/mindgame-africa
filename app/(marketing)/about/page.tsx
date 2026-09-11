"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";

const approaches = [
  "We begin with the performance question, not with a fashionable technique.",
  "We use evidence carefully and communicate its limits.",
  "We work within competence and bring in other specialists when the question requires it.",
  "We value measurement and review, but we do not reduce performance to numbers alone.",
  "We distinguish professional performance support from clinical treatment and refer appropriately where a need falls outside our scope.",
  "We intend to document, learn from and translate the work so that practice contributes to stronger knowledge.",
];

export default function AboutPage() {
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
              label="ABOUT"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              About MindGame Africa
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[600px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              MindGame Africa is a performance science, research, education and
              professional practice institution being built to strengthen the
              human and intellectual capability behind performance in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Core About Copy ── */}
      <section className="relative bg-cream py-20 md:py-28 lg:py-32">
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
              label="WHAT WE DO"
              className="mb-4"
            />

            <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed max-w-[660px]">
              <p>
                We connect evidence with practice by working on performance
                problems, producing and translating knowledge, developing
                practitioners and creating stronger routes between universities,
                specialists and real performance environments.
              </p>
              <p>
                Our starting point is simple. Performance is not only a question
                of talent, facilities or physical preparation. It is also shaped
                by how people think, learn, decide, communicate, adapt, regulate
                themselves, respond to pressure, interpret information and work
                within the environments around them.
              </p>
              <p>
                MindGame Africa therefore sits at the intersection of
                performance science, research, education and applied
                professional practice. Our current strength includes performance
                psychology, mental performance and behavioural performance,
                while our broader direction is deliberately multidisciplinary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Why Africa ── */}
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
              label="CONTEXT"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Why Africa
            </h2>
            <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
              Africa should not only consume performance knowledge produced
              elsewhere. We need stronger local evidence, more opportunities for
              practitioners to develop, deeper collaboration between
              universities and practice, and performance approaches that are
              informed by the realities of African sport and high pressure
              environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 4. How We Approach the Work ── */}
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
              label="OUR APPROACH"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              How We Approach the Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {approaches.map((text, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Card variant="navy" className="h-full">
                  <div className="flex gap-4 items-start">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-gold shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-cream/85 text-[0.9375rem] md:text-base leading-[1.65]">
                      {text}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. What We Are Building ── */}
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
              label="LOOKING AHEAD"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              What We Are Building
            </h2>
            <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
              Over time, MindGame Africa is intended to grow into a stronger
              network of practitioners, researchers, faculty, professional
              development programmes, research collaborations and
              multidisciplinary performance science capability. We will build
              these areas progressively and will only present a capability as
              active when the people, standards and infrastructure required to
              deliver it properly are in place.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
