"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { performanceServicesContent } from "@/lib/content";

export default function PerformanceServicesPage() {
  const { hero, coreArchitecture, process, cta } = performanceServicesContent;

  return (
    <>
      {/* ── 1. Hero (§5.1) ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[780px]"
          >
            <SectionEyebrow
              variant="gold"
              label={hero.eyebrow}
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              {hero.heading}
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              {hero.supportingSentence}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Core Service Architecture (§5.2) ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14 md:mb-18">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[720px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={coreArchitecture.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {coreArchitecture.heading}
              </h2>
              <p className="mt-5 text-navy/75 text-base md:text-lg leading-relaxed">
                A structured overview of work that can currently be discussed. Engagements are tailored around real performance questions rather than off-the-shelf commercial packages.
              </p>
            </motion.div>

            {/* Image Slot 1 (§17: Observation & Analysis) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                name="Observation & Analysis"
                subject="Performance Review & Observation"
                alt="MindGame Africa — Systematic performance observation, diagnostic review, and video analysis in natural African sporting settings."
                aspectRatio="4/3"
                variant="cream"
                caption="ANALYTICAL OBSERVATION // §17.1"
              />
            </motion.div>
          </div>

          {/* Deep-dive link to Applied Performance Practice */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-10"
          >
            <Link
              href="/performance-services/applied-performance-practice"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-xl bg-navy p-7 md:p-8 max-w-[920px] transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(16,35,63,0.14)] hover:shadow-[0_20px_38px_-10px_rgba(16,35,63,0.38)] border border-navy"
            >
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[0.6875rem] font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider font-semibold bg-gold/15 text-gold border border-gold/30">
                  Primary Practice Offering
                </span>
                <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-xl sm:text-2xl font-bold tracking-tight mt-2.5">
                  Applied Performance Practice
                </h3>
                <p className="mt-2 text-cream/75 text-[0.9375rem] leading-relaxed max-w-[620px]">
                  Explore how we work with athletes, coaches, teams and high-pressure performers across performance psychology, mental performance, and behavioural performance.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider font-[family-name:var(--font-jetbrains-mono)] uppercase text-gold shrink-0">
                <span>Explore Practice Area</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          </motion.div>

          {/* 5 Core Service Architecture Cards (§5.2) — No pricing, no tiers, institutional presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {coreArchitecture.services.map((service, idx) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`relative flex flex-col justify-between rounded-xl p-7 md:p-8 bg-white text-navy border border-navy/[0.08] shadow-[0_2px_12px_rgba(16,35,63,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(16,35,63,0.1)] transition-all duration-300 ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-gold tracking-wider">
                      AREA {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.6875rem] font-[family-name:var(--font-jetbrains-mono)] text-navy/45 uppercase tracking-wider">
                      CONSULTATIVE
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-navy text-xl sm:text-2xl font-bold tracking-tight mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-navy/75 text-[0.9375rem] md:text-base leading-[1.65]">
                    {service.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-navy/[0.06] flex items-center justify-between">
                  <span className="text-xs text-navy/50 font-[family-name:var(--font-jetbrains-mono)]">
                    Evidence-informed scope
                  </span>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase font-[family-name:var(--font-jetbrains-mono)] text-navy hover:text-gold transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Engagement Process (§5.3) — Horizontal on desktop, stacked on mobile ── */}
      <section className="relative bg-navy py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[680px]"
            >
              <SectionEyebrow
                variant="gold"
                label={process.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {process.heading}
              </h2>
            </motion.div>
            <p className="text-cream/65 text-sm font-[family-name:var(--font-jetbrains-mono)] max-w-[340px]">
              A disciplined progression from diagnostic clarity to measured review.
            </p>
          </div>

          {/* Numbered visual flow: Horizontal on desktop (6 columns), stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-4 relative">
            {process.steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative flex flex-col justify-between rounded-xl bg-navy-soft p-6 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl font-bold text-gold">
                      {item.step}
                    </span>
                    {idx < 5 && (
                      <span className="hidden lg:block text-cream/30 text-xs font-[family-name:var(--font-jetbrains-mono)]">
                        &rarr;
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-cream text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cream/75 text-[0.875rem] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Slot 2 & 3 (§17: Team Sessions & Coaching Environments) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SectionImage
                name="Team Performance Sessions"
                subject="Team Workshops & Planning"
                alt="MindGame Africa — Structured team conversations, psychological workshops, and review sessions in elite African sport."
                aspectRatio="16/9"
                variant="navy"
                caption="TEAM ENVIRONMENT // §17.1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SectionImage
                name="Coach Development & Feedback"
                subject="Coaching Environment Review"
                alt="MindGame Africa — Coach observation, feedback discussions, and decision-making review in demanding sporting environments."
                aspectRatio="16/9"
                variant="navy"
                caption="COACHING REALITIES // §17.1"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. Closing CTA (§5.4) ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[820px]"
          >
            <SectionEyebrow
              variant="gold-dark"
              label={cta.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {cta.line}
            </h2>
            <div className="mt-10">
              <Button variant="primary" href={cta.href}>
                {cta.button}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
