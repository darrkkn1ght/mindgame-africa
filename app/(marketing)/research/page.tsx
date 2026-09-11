"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const researchThemes = [
  "Performance under pressure and psychological response to demanding environments.",
  "Mistake response, recovery and performance after error.",
  "Confidence, self regulation, attention and behavioural adaptation.",
  "Coach behaviour and its influence on athlete development and performance.",
  "Team psychology, communication and performance environments.",
  "Talent development and the experiences surrounding athlete progression.",
  "African performance environments and the contextual factors that shape practice.",
  "Practitioner development, professional standards and the translation of evidence into practice.",
  "Performance technology, assessment and the responsible use of measurement.",
  "Interdisciplinary approaches to athlete and team performance.",
];

const approachItems = [
  "Start with questions that matter in practice.",
  "Use methods that are appropriate to the question rather than forcing every problem into one methodological tradition.",
  "Protect ethical standards, informed consent, confidentiality and responsible data handling.",
  "Distinguish clearly between evidence, interpretation and speculation.",
  "Work with universities, practitioners and performance organisations where collaboration improves the quality of the work.",
  "Translate findings into usable knowledge for practitioners, coaches, athletes and decision makers.",
];

const collaborationTypes = [
  "Joint research projects.",
  "Applied research within sport and performance environments.",
  "Programme evaluation.",
  "Research supervision or practitioner research collaboration where appropriate.",
  "Data collection partnerships.",
  "Research translation and knowledge dissemination.",
  "Guest researchers, research associates and specialist collaboration.",
];

export default function ResearchPage() {
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
              label="RESEARCH AND KNOWLEDGE"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Research and Knowledge
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[600px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              We want to produce, examine and translate knowledge that helps us
              understand performance in African contexts and improves the quality
              of practice around it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Our Research Mandate ── */}
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
              label="MANDATE"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Our Research Mandate
            </h2>
            <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed max-w-[660px]">
              <p>
                Research at MindGame Africa is intended to sit close to real
                performance questions. We are interested in work that is
                methodologically sound, ethically responsible and useful enough
                to deepen understanding, challenge assumptions, improve
                professional practice or inform the design of better performance
                interventions.
              </p>
              <p>
                An important part of our mandate is to contribute more African
                evidence to fields in which performance knowledge is still too
                often imported from contexts that do not fully reflect the
                realities in which African athletes, coaches, practitioners and
                organisations operate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Research Themes ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] mb-12 md:mb-16"
          >
            <SectionEyebrow
              variant="gold"
              label="THEMES"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Research Themes
            </h2>
            <p className="mt-4 text-cream/60 text-sm font-[family-name:var(--font-jetbrains-mono)] tracking-wide">
              Current interests and developing themes — not completed programmes.
            </p>
          </motion.div>

          {/* Performance Science deep-dive link */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <Link
              href="/research/performance-science"
              className="group flex items-center justify-between gap-4 rounded-xl bg-cream p-6 md:p-8 max-w-[860px] transition-all duration-300 hover:-translate-y-1 shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(16,35,63,0.12)]"
            >
              <div>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold tracking-wider text-green uppercase">
                  Multidisciplinary Direction
                </span>
                <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-xl sm:text-2xl font-bold tracking-tight mt-2">
                  Performance Science
                </h3>
                <p className="mt-2 text-navy/70 text-[0.9375rem] leading-relaxed max-w-[560px]">
                  Our multidisciplinary approach to understanding performance
                  through connected scientific perspectives.
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="text-green shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* 10 Theme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {researchThemes.map((theme, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Card variant="default" className="h-full">
                  <div className="flex gap-4 items-start">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-green shrink-0 mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-navy/85 text-[0.9375rem] md:text-base leading-[1.65]">
                      {theme}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Our Approach ── */}
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
              label="PRINCIPLES"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Our Approach
            </h2>
          </motion.div>

          <div className="max-w-[720px] space-y-0">
            {approachItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.07,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="flex items-start gap-5 py-6 border-b border-navy/[0.08] first:pt-0 last:border-b-0"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl md:text-3xl font-bold text-gold/60 leading-none mt-0.5 shrink-0 w-10 md:w-12">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-navy/80 text-[0.9375rem] md:text-base leading-[1.65] pt-1">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Collaborate With Us ── */}
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
              label="COLLABORATION"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Collaborate With Us
            </h2>
            <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-[660px]">
              We are open to conversations with universities, academic
              departments, researchers, postgraduate students, sport
              organisations, clubs, federations, practitioners and international
              institutions interested in African performance research, programme
              evaluation, applied studies, research translation or joint
              knowledge development.
            </p>

            <ul className="mt-8 space-y-4 max-w-[620px]">
              {collaborationTypes.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
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

      {/* ── 6. Research Outputs ── */}
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
              label="OUTPUTS"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Research Outputs
            </h2>
            <p className="mt-6 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
              Research outputs, reports, publications and active projects will
              be added here as the MindGame Africa research portfolio develops.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Closing CTA ── */}
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
              Have a research question or collaboration idea?
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us">
                Start a Research Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
