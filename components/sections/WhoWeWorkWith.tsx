"use client";

import { motion } from "framer-motion";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  Target,
  Users,
  Compass,
  Landmark,
  GraduationCap,
  Microscope,
  Briefcase,
  Building,
  Globe,
} from "lucide-react";
import { homeContent } from "@/lib/content";

const audienceIcons = [
  Target,
  Users,
  Compass,
  Landmark,
  GraduationCap,
  Microscope,
  Briefcase,
  Building,
  Globe,
];

export function WhoWeWorkWith() {
  const { whoWeWorkWith } = homeContent;

  return (
    <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        {/* ── Section Header ── */}
        <div className="max-w-[760px] mb-12 md:mb-16">
          <SectionEyebrow
            variant="gold-dark"
            label={whoWeWorkWith.eyebrow}
            className="mb-4"
          />
          <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.14]">
            {whoWeWorkWith.heading}
          </h2>
          <p className="mt-5 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
            {whoWeWorkWith.supportingLine}
          </p>
        </div>

        {/* ── Structured 9-Audience Card Grid (3x3) ──
            Communicates breadth across performer, team, and systemic levels
            without implying active client counts or marketing logos.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {whoWeWorkWith.audiences.map((item, idx) => {
            const Icon = audienceIcons[idx] || Target;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative flex flex-col justify-between rounded-xl bg-white p-6 md:p-7 border border-navy/[0.08] shadow-[0_2px_8px_rgba(16,35,63,0.03)] hover:border-navy/20 hover:shadow-[0_12px_24px_-6px_rgba(16,35,63,0.08)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-cream-dark/70 text-navy group-hover:bg-gold/15 group-hover:text-gold transition-colors duration-200">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="font-[family-name:var(--font-jetbrains-mono)] text-[0.6875rem] font-semibold tracking-wider text-navy/40">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-fraunces)] text-lg md:text-xl font-bold text-navy tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-navy/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
