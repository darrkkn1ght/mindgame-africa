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

interface AudienceItem {
  label: string;
  icon: React.ElementType;
}

const audiences: AudienceItem[] = [
  {
    label: "Athletes and other high-pressure performers",
    icon: Target,
  },
  {
    label: "Teams, clubs and academies",
    icon: Users,
  },
  {
    label: "Coaches and performance staff",
    icon: Compass,
  },
  {
    label: "Sport federations, associations and performance organisations",
    icon: Landmark,
  },
  {
    label: "Schools and universities",
    icon: GraduationCap,
  },
  {
    label: "Researchers and academic departments",
    icon: Microscope,
  },
  {
    label: "Performance practitioners and emerging professionals",
    icon: Briefcase,
  },
  {
    label: "Corporate and other high-pressure organisations",
    icon: Building,
  },
  {
    label: "International institutions",
    icon: Globe,
  },
];

export function WhoWeWorkWith() {
  return (
    <section className="relative bg-cream border-t border-navy/[0.06] py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[80rem] px-5 md:px-12">
        {/* ── Section Header ── */}
        <div className="max-w-[760px] mb-12 md:mb-16">
          <SectionEyebrow
            variant="gold-dark"
            label="WHO WE WORK WITH"
            className="mb-4"
          />
          <h2 className="font-[family-name:var(--font-fraunces)] text-navy text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.14]">
            Built for the people driving performance forward.
          </h2>
          <p className="mt-5 text-navy/70 text-base md:text-lg leading-relaxed max-w-[620px]">
            We operate across individual, team, and systemic levels to bridge the gap
            between empirical performance science and real-world practice.
          </p>
        </div>

        {/* ── Horizontal Tag / Pill Display ──
            Visually lighter and distinctly different from the Pillars card grid
        */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap gap-3.5 sm:gap-4 max-w-[1100px]"
        >
          {audiences.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/80 hover:bg-white border border-navy/[0.09] hover:border-navy/25 shadow-[0_1px_3px_rgba(16,35,63,0.03)] hover:shadow-[0_4px_14px_rgba(16,35,63,0.06)] transition-all duration-200 cursor-default select-none"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cream-dark/60 group-hover:bg-gold/15 text-navy/80 group-hover:text-navy transition-colors duration-200">
                  <Icon
                    size={16}
                    strokeWidth={2}
                    className="group-hover:scale-110 transition-transform duration-200"
                  />
                </span>

                <span className="font-[family-name:var(--font-inter)] text-[0.9375rem] font-medium text-navy/85 group-hover:text-navy transition-colors duration-200">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
