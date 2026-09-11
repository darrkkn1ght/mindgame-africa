"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const howWeWorkSteps = [
  "Define the performance problem or question clearly.",
  "Assess the situation using appropriate information, observation, conversation or measurement.",
  "Identify the factors most likely to be influencing performance.",
  "Design an intervention or support process that fits the person, team or performance environment.",
  "Apply the work within clear professional boundaries and relevant specialist competence.",
  "Review what changes, what does not change, and what needs to be adjusted.",
];

const audiences = [
  "Athletes and other high pressure performers.",
  "Teams, clubs and academies.",
  "Coaches and coaching staff.",
  "Performance departments and sport organisations.",
  "Other high pressure professional environments where the work falls within our competence.",
];

export default function AppliedPerformancePracticePage() {
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
              label="APPLIED PERFORMANCE PRACTICE"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Applied Performance Practice
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[600px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              We work with athletes, coaches, teams and other high pressure
              performers to understand the factors affecting performance, design
              appropriate interventions and translate evidence into practical
              action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. What This Means ── */}
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
              label="OVERVIEW"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              What This Means
            </h2>
            <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed max-w-[660px]">
              <p>
                Applied performance practice is where performance science meets
                the realities of preparation, competition, coaching and decision
                making. At MindGame Africa, we do not begin with a technique
                simply because it is popular. We begin with the performance
                problem. We seek to understand what is happening, what may be
                contributing to it, what evidence is relevant, and what kind of
                support is appropriate.
              </p>
              <p>
                Our present applied strength includes performance psychology,
                mental performance and behavioural performance. This can include
                work around confidence, attention, self regulation, performance
                under pressure, mistake response, routines, communication,
                decision making, preparation and other psychological or
                behavioural factors that influence performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. How We Work ── */}
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
              label="PROCESS"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              How We Work
            </h2>
          </motion.div>

          <div className="max-w-[720px] space-y-0">
            {howWeWorkSteps.map((step, idx) => (
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
                className="flex items-start gap-5 py-6 border-b border-cream/10 first:pt-0 last:border-b-0"
              >
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl md:text-3xl font-bold text-gold/80 leading-none mt-0.5 shrink-0 w-10 md:w-12">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-cream/85 text-[0.9375rem] md:text-base leading-[1.65] pt-1">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Who This Is For ── */}
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
              label="AUDIENCE"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Who This Is For
            </h2>

            <ul className="mt-8 space-y-4 max-w-[620px]">
              {audiences.map((item, idx) => (
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
                  <span className="text-navy/80 text-base md:text-lg leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Examples of Performance Questions ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <SectionEyebrow
              variant="gold"
              label="IN PRACTICE"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12] mb-8">
              Examples of Performance Questions
            </h2>

            {/* Pull-quote block */}
            <Card variant="default" className="relative">
              <div className="absolute top-5 left-6 md:left-8 text-gold/25 font-[family-name:var(--font-fraunces)] text-6xl md:text-7xl leading-none select-none pointer-events-none" aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className="relative z-10 pt-6 md:pt-4">
                <p className="font-[family-name:var(--font-fraunces)] text-navy text-lg md:text-xl lg:text-[1.375rem] leading-[1.55] tracking-tight italic">
                  Why does an athlete perform differently in training and
                  competition? What happens psychologically after a costly
                  mistake? How is confidence being shaped by coaching behaviour?
                  What is affecting concentration or decision making under
                  pressure? How should a team prepare mentally for a demanding
                  competition period? What behaviours within the performance
                  environment are helping or interfering with consistent
                  performance?
                </p>
              </blockquote>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Closing CTA ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Have a performance question you want us to examine with you?
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us">
                Start a Performance Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
