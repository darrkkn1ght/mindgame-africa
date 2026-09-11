"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Performance Diagnostic",
    description:
      "A structured process for clarifying a performance problem, gathering relevant information and identifying the factors that should be examined before an intervention is designed.",
  },
  {
    title: "Team Performance Programme",
    description:
      "A tailored engagement for teams that may include assessment, workshops, behavioural or psychological intervention, coach collaboration, observation and review around an agreed performance need.",
  },
  {
    title: "Coach Performance Programme",
    description:
      "Work focused on the coach as a decision maker, communicator and important part of the athlete\u2019s performance environment. Topics may include feedback, pressure, confidence, mistake response, communication, decision making and behavioural consistency.",
  },
  {
    title: "Performance Psychology and Mental Performance Support",
    description:
      "Individual or group support around psychological and behavioural factors that influence preparation, competition and consistent performance.",
  },
  {
    title: "Applied Research and Programme Evaluation",
    description:
      "Research or evaluation designed around a real performance question, intervention, programme or organisational need, with an emphasis on sound methods and useful interpretation.",
  },
];

const engagementSteps = [
  "Initial conversation and clarification of the performance need.",
  "Agreement on scope, people involved and appropriate methods.",
  "Assessment or information gathering where required.",
  "Design of the engagement.",
  "Delivery, observation or implementation.",
  "Review, measurement and next step recommendations.",
];

export default function PerformanceServicesPage() {
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
              label="PERFORMANCE SERVICES"
              className="mb-6 md:mb-7"
            />
            <h1 className="font-[family-name:var(--font-fraunces)] text-cream tracking-tight text-balance leading-[1.08]">
              Performance Services
            </h1>
            <p className="mt-6 md:mt-7 text-cream/85 max-w-[600px] text-[1.0625rem] md:text-[1.125rem] leading-[1.68]">
              We help individuals, teams, coaches and organisations understand
              performance problems, identify the factors that may be influencing
              them, and design evidence informed responses that fit the realities
              of practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Core Service Architecture ── */}
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
              label="WHAT WE OFFER"
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              Core Service Architecture
            </h2>
          </motion.div>

          {/* Deep-dive link to Applied Performance Practice */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <Link
              href="/performance-services/applied-performance-practice"
              className="group flex items-center justify-between gap-4 rounded-xl bg-navy p-6 md:p-8 max-w-[860px] transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(16,35,63,0.14)] hover:shadow-[0_20px_38px_-10px_rgba(16,35,63,0.38)]"
            >
              <div>
                <span className="font-[family-name:var(--font-jetbrains-mono)] text-xs font-semibold tracking-wider text-gold uppercase">
                  Primary Practice Offering
                </span>
                <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-xl sm:text-2xl font-bold tracking-tight mt-2">
                  Applied Performance Practice
                </h3>
                <p className="mt-2 text-cream/70 text-[0.9375rem] leading-relaxed max-w-[560px]">
                  Our core applied practice area — read about how we work with
                  athletes, coaches, teams and high pressure performers.
                </p>
              </div>
              <ArrowUpRight
                size={22}
                className="text-gold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>

          {/* 5 Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
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
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-semibold text-gold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-cream text-xl sm:text-2xl font-bold tracking-tight mt-3 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-cream/80 text-[0.9375rem] md:text-base leading-[1.65]">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Engagement Process ── */}
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
              Engagement Process
            </h2>
          </motion.div>

          <div className="max-w-[720px] space-y-0">
            {engagementSteps.map((step, idx) => (
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

      {/* ── 4. Closing CTA ── */}
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
              Not sure which service fits the problem you are trying to solve?
            </h2>
            <div className="mt-10">
              <Button variant="primary" href="/partner-with-us">
                Start With a Performance Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
