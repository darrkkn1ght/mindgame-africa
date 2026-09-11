"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { PartnerForm } from "@/components/sections/PartnerForm";

const partnershipRoutes = [
  {
    title: "Performance Engagements",
    body: "For teams, clubs, academies, athletes, coaches and organisations that want to discuss a performance problem or intervention.",
  },
  {
    title: "Research and Evaluation",
    body: "For universities, researchers, sport organisations and other institutions interested in applied research, programme evaluation, data collection or joint studies.",
  },
  {
    title: "University and Academic Collaboration",
    body: "For departments and institutions interested in teaching, research, student development, internships, guest faculty, supervision or knowledge exchange.",
  },
  {
    title: "Professional Education",
    body: "For organisations seeking workshops, seminars, internal professional development or the co development of a structured learning programme.",
  },
  {
    title: "Practitioner and Faculty Collaboration",
    body: "For qualified specialists interested in contributing expertise, teaching, research, supervision or applied work.",
  },
  {
    title: "Institutional and International Partnerships",
    body: "For organisations interested in longer term research, education, technical collaboration, exchange or capacity development with a clear connection to MindGame Africa's mandate.",
  },
];

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
              label="PARTNER WITH US"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Partner With MindGame Africa
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[620px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              We are open to collaborations that strengthen performance
              practice, research, professional education, practitioner
              development and the production of useful knowledge around
              performance in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Partnership Routes ── */}
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
              label="ROUTES TO COLLABORATION"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Partnership Routes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {partnershipRoutes.map((route, idx) => (
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
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold text-green block mb-3">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl font-bold text-navy tracking-tight mb-3">
                      {route.title}
                    </h3>
                    <p className="text-navy/75 text-[0.9375rem] md:text-base leading-[1.65]">
                      {route.body}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Partner With Us Form ── */}
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
              label="START A CONVERSATION"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Partner With Us
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <PartnerForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
