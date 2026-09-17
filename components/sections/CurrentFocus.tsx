"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionImage } from "@/components/ui/SectionImage";
import { homeContent } from "@/lib/content";
import { Activity, Cpu, BookOpen, Route } from "lucide-react";

const focusAreas = [
  {
    icon: Activity,
    title: "Applied Performance Practice",
    description: "Assessment, mistake response and performance under pressure.",
  },
  {
    icon: Cpu,
    title: "Multidisciplinary Science Platform",
    description: "Progressive integration of behavioural, physiological, and analytical disciplines.",
  },
  {
    icon: BookOpen,
    title: "African Performance Research",
    description: "Investigating performance questions grounded in real regional environments.",
  },
  {
    icon: Route,
    title: "Practitioner Pathways",
    description: "Developing structured learning and bridging academic qualification to competence.",
  },
];

export function CurrentFocus() {
  const { currentFocus } = homeContent;

  return (
    <section className="relative bg-navy py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ── Left Column: Heading, Copy & Focus Area Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <SectionEyebrow
              variant="gold"
              label={currentFocus.eyebrow}
              className="mb-4"
            />
            <h2 className="font-[family-name:var(--font-fraunces)] text-cream text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.12]">
              {currentFocus.heading}
            </h2>
            <p className="mt-6 text-cream/80 text-base md:text-lg leading-relaxed max-w-[620px]">
              {currentFocus.copy}
            </p>

            {/* 4 Core Focus Highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10">
              {focusAreas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white/[0.04] border border-white/[0.08]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex items-center justify-center w-7 h-7 rounded bg-gold/15 text-gold">
                        <Icon size={16} strokeWidth={2} />
                      </span>
                      <h4 className="font-semibold text-cream text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-cream/65 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right Column: Named Image Component (§17 Documentary Photography) ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5"
          >
            <SectionImage
              name="FIELD OBSERVATION & PRACTICE"
              alt="Abstract minimalist performance data visualization showing biometric trends and cognitive response latency on deep navy"
              aspectRatio="4/3"
              subject="DOCUMENTARY OBSERVATION"
              variant="navy"
              src="/images/performance-data/home-focus-metrics-4x3.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
