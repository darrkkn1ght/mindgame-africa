"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const whoItIsFor = [
  "Coaches and coaching staff.",
  "Sport psychologists and mental performance practitioners.",
  "Performance analysts and other sport science professionals.",
  "Students and emerging practitioners.",
  "Sport administrators and performance leaders.",
  "University departments and academic programmes.",
  "Teams, clubs, academies and federations seeking internal professional development.",
];

const developingProgrammeAreas = [
  "Applied mental performance.",
  "Coaching psychology and coach behaviour.",
  "Athlete development.",
  "Performance leadership.",
  "Football performance analysis.",
  "Referee performance.",
  "Applied practitioner development.",
  "Research literacy, evidence translation and professional practice.",
];

const howWeTeach = [
  "Clear learning outcomes.",
  "Evidence informed teaching.",
  "Applied examples drawn from real performance environments.",
  "Practical tools and structured reflection.",
  "Case based discussion where appropriate.",
  "Assessment or demonstration of learning where the programme requires it.",
  "Access to qualified facilitators, faculty or specialist contributors.",
  "Clear distinction between professional development and formal academic or statutory accreditation.",
];

export default function EducationPage() {
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
              label="EDUCATION AND PROFESSIONAL DEVELOPMENT"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Education and Professional Development
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              We are building learning experiences that help practitioners,
              coaches, students and performance professionals understand
              evidence, apply it responsibly and improve the quality of their
              work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. What We Teach ── */}
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
              label="WHAT WE TEACH"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              What We Teach
            </h2>
            <div className="mt-6 space-y-6 text-navy/80 text-base md:text-lg leading-relaxed max-w-[660px]">
              <p>
                Education at MindGame Africa should not be a collection of
                motivational talks or generic online courses. Our programmes are
                intended to be grounded in evidence, connected to real
                performance problems and designed around what a participant
                should be able to understand, apply, analyse or improve after the
                learning experience.
              </p>
              <p>
                Some learning experiences may be short workshops or professional
                development sessions. Others may develop into structured
                certificate programmes, practitioner pathways, seminars,
                masterclasses or collaborative university offerings as the
                institution grows.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Who It Is For ── */}
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
              label="WHO IT IS FOR"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Who It Is For
            </h2>
          </motion.div>

          <ul className="space-y-4 max-w-[660px]">
            {whoItIsFor.map((item, idx) => (
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
                <span className="text-cream/85 text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Developing Programme Areas ── */}
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
              label="PROGRAMME AREAS"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Developing Programme Areas
            </h2>
            <p className="mt-4 text-navy/60 text-sm font-[family-name:var(--font-jetbrains-mono)] tracking-wide">
              Active curriculum design areas — currently in development and not open for registration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developingProgrammeAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Card variant="default" className="h-full flex flex-col justify-between border border-navy/[0.06] shadow-[0_2px_12px_rgba(16,35,63,0.03)]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-gold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[0.6875rem] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider font-medium bg-navy/[0.06] text-navy/60 border border-navy/10">
                        In Development
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-lg md:text-xl font-bold text-navy leading-snug">
                      {area}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-navy/[0.08]">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.75rem] text-navy/50 tracking-wide">
                      Not open for registration
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. How We Teach ── */}
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
              label="LEARNING EXPERIENCE"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              How We Teach
            </h2>
          </motion.div>

          <ul className="space-y-4 max-w-[680px]">
            {howWeTeach.map((item, idx) => (
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
                <span className="text-cream/85 text-base md:text-lg leading-relaxed">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Status Note ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[760px] rounded-lg border border-navy/10 bg-white/70 p-7 md:p-9 shadow-[0_2px_12px_rgba(16,35,63,0.03)]"
          >
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
              Portfolio Status
            </span>
            <p className="mt-3 text-navy/80 text-base md:text-lg leading-relaxed">
              Our education and professional development portfolio is being
              developed progressively. Current workshops, seminars and
              structured programmes will be published here as they are ready.
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
            <SectionEyebrow
              variant="gold"
              label="WORK WITH US"
              className="mb-6"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Interested in learning, teaching or developing a programme with us?
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us">
                Discuss Education and Professional Development
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
