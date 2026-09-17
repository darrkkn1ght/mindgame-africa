"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionImage } from "@/components/ui/SectionImage";
import { PartnerForm } from "@/components/sections/PartnerForm";

import { partnerContent } from "@/lib/content";

export default function PartnerWithUsPage() {
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
              label={partnerContent.hero.eyebrow}
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              {partnerContent.hero.heading}
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              {partnerContent.hero.supportingSentence}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Partnership Routes ── */}
      <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[80rem] px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-7 max-w-[760px]"
            >
              <SectionEyebrow
                variant="gold-dark"
                label={partnerContent.routesHeading.eyebrow}
                className="mb-4"
              />
              <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
                {partnerContent.routesHeading.heading}
              </h2>
            </motion.div>

            {/* Image Slot (§17: Multidisciplinary Collaboration & Institutional Meetings) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5"
            >
              <SectionImage
                src="/images/multidisciplinary-collaboration/partner-institutional-meeting-16x9.jpg"
                name="Institutional Partnerships"
                subject="Institutional & Academic Collaboration"
                alt="Institutional and academic partners discussing strategic performance initiatives across Africa"
                aspectRatio="16/9"
                variant="cream"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {partnerContent.routes.map((route, idx) => (
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
                <Card
                  variant="default"
                  className="h-full flex flex-col justify-between border border-navy/[0.06] shadow-[0_2px_12px_rgba(16,35,63,0.03)] hover:shadow-[0_16px_32px_-8px_rgba(16,35,63,0.1)] transition-all duration-300"
                >
                  <div>
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold text-green block mb-3">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl font-bold text-navy tracking-tight mb-3">
                      {route.title}
                    </h3>
                    <p className="text-navy/75 text-[0.9375rem] md:text-base leading-[1.65]">
                      {route.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-navy/[0.06]">
                    <Button
                      variant="secondary"
                      href={route.destination}
                      className="w-full justify-center"
                    >
                      {route.ctaLabel}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Partner With Us Form ── */}
      <section id="partner-form" className="relative bg-navy py-20 md:py-28 lg:py-32">
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
              label={partnerContent.form.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {partnerContent.form.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Suspense fallback={null}>
              <PartnerForm />
            </Suspense>
          </motion.div>
        </div>
      </section>
    </>
  );
}
