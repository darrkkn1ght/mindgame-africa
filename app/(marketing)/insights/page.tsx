"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { MailingSignup } from "@/components/sections/MailingSignup";

const contentArchitecture = [
  {
    tag: "Explainers",
    description:
      "Clear, evidence-grounded examinations of core performance science concepts.",
  },
  {
    tag: "Evidence Reviews",
    description:
      "Rigorous synthesis of research literature relevant to African performance environments.",
  },
  {
    tag: "Case Lessons",
    description:
      "Applied reflections and practical takeaways drawn from real performance situations.",
  },
  {
    tag: "Practitioner Perspectives",
    description:
      "Direct viewpoints and experiences from sport psychologists, analysts, coaches and performance specialists.",
  },
  {
    tag: "Interviews",
    description:
      "Structured conversations with coaches, performance leaders, researchers and athletes.",
  },
  {
    tag: "Research Summaries",
    description:
      "Accessible translations of complex academic findings into usable practice knowledge.",
  },
  {
    tag: "Performance Frameworks",
    description:
      "Structured models, diagnostic tools and intervention guides for real performance questions.",
  },
  {
    tag: "Field Notes",
    description:
      "Working reflections, observations and methodological notes from current applied engagements.",
  },
  {
    tag: "Commentary",
    description:
      "Critical commentary on key issues affecting performance science, ethics and professional practice in Africa.",
  },
];

export default function InsightsPage() {
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
              label="INSIGHTS"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Insights and Performance Knowledge
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              This is where MindGame Africa will translate research,
              professional experience and performance questions into useful
              knowledge for athletes, coaches, practitioners, researchers and
              organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. What You'll Find Here ── */}
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
              label="CONTENT ARCHITECTURE"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              What You&apos;ll Find Here
            </h2>
            <p className="mt-5 text-navy/75 text-base md:text-lg leading-relaxed max-w-[660px]">
              Our publication structure is designed around real performance
              questions, practitioner development and evidence translation
              rather than generic content.
            </p>
          </motion.div>

          {/* Architectural Format Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {contentArchitecture.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="rounded-xl border border-navy/[0.08] bg-white p-6 shadow-[0_2px_8px_rgba(16,35,63,0.03)] hover:border-navy/[0.16] transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold uppercase tracking-wider text-green">
                    {item.tag}
                  </span>
                </div>
                <p className="text-navy/75 text-[0.9375rem] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 & 4. Status Message & Mailing List Signup ── */}
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
              label="KNOWLEDGE LIBRARY"
              className="mb-6"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance leading-[1.25]">
              The MindGame Africa knowledge library is being built. New
              articles, evidence reviews, practitioner resources and research
              translations will be published here.
            </h2>

            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-wider text-gold font-semibold mb-4">
                Stay Informed
              </p>
              <MailingSignup variant="navy" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
